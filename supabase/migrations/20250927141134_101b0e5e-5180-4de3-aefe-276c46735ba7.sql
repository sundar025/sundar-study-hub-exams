-- Security fixes for test system and RLS policies

-- 1. Create test sessions table to track active test sessions
CREATE TABLE public.test_sessions (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id uuid NOT NULL,
  test_id uuid NOT NULL,
  started_at timestamp with time zone NOT NULL DEFAULT now(),
  completed_at timestamp with time zone,
  answers jsonb DEFAULT '{}',
  score integer,
  time_remaining_minutes integer,
  created_at timestamp with time zone NOT NULL DEFAULT now()
);

-- Enable RLS on test_sessions
ALTER TABLE public.test_sessions ENABLE ROW LEVEL SECURITY;

-- RLS policies for test_sessions
CREATE POLICY "Users can view their own test sessions" 
ON public.test_sessions 
FOR SELECT 
USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own test sessions" 
ON public.test_sessions 
FOR INSERT 
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own test sessions" 
ON public.test_sessions 
FOR UPDATE 
USING (auth.uid() = user_id);

-- 2. Create security audit log
CREATE TABLE public.security_audit_log (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id uuid,
  action text NOT NULL,
  resource_type text NOT NULL,
  resource_id uuid,
  ip_address inet,
  user_agent text,
  metadata jsonb,
  created_at timestamp with time zone NOT NULL DEFAULT now()
);

-- Enable RLS on audit log (only admins should see this)
ALTER TABLE public.security_audit_log ENABLE ROW LEVEL SECURITY;

-- 3. Secure function to get test questions without answers
CREATE OR REPLACE FUNCTION public.get_test_questions_for_session(test_session_id uuid)
RETURNS TABLE(
  id uuid,
  question_text text,
  option_a text,
  option_b text,
  option_c text,
  option_d text
) 
LANGUAGE sql
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT 
    tq.id,
    tq.question_text,
    tq.option_a,
    tq.option_b,
    tq.option_c,
    tq.option_d
  FROM test_questions tq
  JOIN test_sessions ts ON ts.test_id = tq.test_id
  WHERE ts.id = test_session_id 
    AND ts.user_id = auth.uid()
    AND ts.completed_at IS NULL;
$$;

-- 4. Secure function to submit test answers and get results
CREATE OR REPLACE FUNCTION public.submit_test_answers(
  test_session_id uuid,
  submitted_answers jsonb
)
RETURNS TABLE(
  score integer,
  total_questions integer,
  results jsonb
)
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  session_record record;
  question_record record;
  calculated_score integer := 0;
  total_count integer := 0;
  results_data jsonb := '[]';
  question_result jsonb;
BEGIN
  -- Verify session belongs to user and is not completed
  SELECT * INTO session_record 
  FROM test_sessions 
  WHERE id = test_session_id 
    AND user_id = auth.uid() 
    AND completed_at IS NULL;
    
  IF NOT FOUND THEN
    RAISE EXCEPTION 'Invalid or completed test session';
  END IF;
  
  -- Calculate score and build results
  FOR question_record IN 
    SELECT tq.id, tq.correct_answer, tq.explanation, tq.question_text
    FROM test_questions tq 
    WHERE tq.test_id = session_record.test_id
  LOOP
    total_count := total_count + 1;
    
    -- Check if answer is correct
    IF (submitted_answers ->> question_record.id::text) = question_record.correct_answer THEN
      calculated_score := calculated_score + 1;
    END IF;
    
    -- Build result for this question
    question_result := jsonb_build_object(
      'question_id', question_record.id,
      'question_text', question_record.question_text,
      'user_answer', submitted_answers ->> question_record.id::text,
      'correct_answer', question_record.correct_answer,
      'explanation', question_record.explanation,
      'is_correct', (submitted_answers ->> question_record.id::text) = question_record.correct_answer
    );
    
    results_data := results_data || question_result;
  END LOOP;
  
  -- Update test session with completion
  UPDATE test_sessions 
  SET 
    completed_at = now(),
    answers = submitted_answers,
    score = calculated_score
  WHERE id = test_session_id;
  
  -- Insert test attempt record
  INSERT INTO test_attempts (user_id, test_id, score, total_questions, answers, time_taken_minutes)
  VALUES (
    auth.uid(), 
    session_record.test_id, 
    calculated_score, 
    total_count, 
    submitted_answers,
    EXTRACT(EPOCH FROM (now() - session_record.started_at)) / 60
  );
  
  -- Log the test completion
  INSERT INTO security_audit_log (user_id, action, resource_type, resource_id, metadata)
  VALUES (
    auth.uid(), 
    'test_completed', 
    'test_session', 
    test_session_id,
    jsonb_build_object('score', calculated_score, 'total', total_count)
  );
  
  RETURN QUERY SELECT calculated_score, total_count, results_data;
END;
$$;

-- 5. Update RLS policies to be more restrictive

-- Remove the overly permissive policy on test_questions
DROP POLICY IF EXISTS "Anyone can view test questions" ON public.test_questions;

-- Add restrictive policy - questions only visible through secure functions
CREATE POLICY "Test questions only accessible through secure functions" 
ON public.test_questions 
FOR SELECT 
USING (false); -- Block direct access

-- Update other tables to have proper admin-only policies
-- Tests table - only viewing allowed for regular users
CREATE POLICY "Admins can manage tests" 
ON public.tests 
FOR ALL 
USING (false) -- No direct admin access yet, will be handled by secure functions
WITH CHECK (false);

-- Test questions - only accessible through secure functions
CREATE POLICY "Admins can manage test questions" 
ON public.test_questions 
FOR ALL 
USING (false)
WITH CHECK (false);

-- Subjects - read-only for users
CREATE POLICY "Admins can manage subjects" 
ON public.subjects 
FOR ALL 
USING (false)
WITH CHECK (false);

-- Topics - read-only for users  
CREATE POLICY "Admins can manage topics" 
ON public.topics 
FOR ALL 
USING (false)
WITH CHECK (false);

-- Achievements - read-only for users
CREATE POLICY "Admins can manage achievements" 
ON public.achievements 
FOR ALL 
USING (false)
WITH CHECK (false);

-- 6. Function to start a new test session
CREATE OR REPLACE FUNCTION public.start_test_session(test_uuid uuid)
RETURNS uuid
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  session_id uuid;
  test_duration integer;
BEGIN
  -- Get test duration
  SELECT duration_minutes INTO test_duration 
  FROM tests 
  WHERE id = test_uuid;
  
  IF NOT FOUND THEN
    RAISE EXCEPTION 'Test not found';
  END IF;
  
  -- Create new test session
  INSERT INTO test_sessions (user_id, test_id, time_remaining_minutes)
  VALUES (auth.uid(), test_uuid, test_duration)
  RETURNING id INTO session_id;
  
  -- Log test start
  INSERT INTO security_audit_log (user_id, action, resource_type, resource_id)
  VALUES (auth.uid(), 'test_started', 'test_session', session_id);
  
  RETURN session_id;
END;
$$;