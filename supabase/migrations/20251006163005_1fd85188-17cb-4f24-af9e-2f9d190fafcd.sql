-- Create table to track exam/course deadlines
CREATE TABLE public.exam_deadlines (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  exam_name TEXT NOT NULL,
  exam_category TEXT NOT NULL, -- 'state' or 'central'
  started_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  deadline_months INTEGER NOT NULL, -- 6 or 12 months
  deadline_date TIMESTAMP WITH TIME ZONE NOT NULL,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  UNIQUE(user_id, exam_name, exam_category)
);

-- Enable RLS
ALTER TABLE public.exam_deadlines ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Users can view their own exam deadlines"
ON public.exam_deadlines
FOR SELECT
USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own exam deadlines"
ON public.exam_deadlines
FOR INSERT
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own exam deadlines"
ON public.exam_deadlines
FOR UPDATE
USING (auth.uid() = user_id);

CREATE POLICY "Users can delete their own exam deadlines"
ON public.exam_deadlines
FOR DELETE
USING (auth.uid() = user_id);

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_exam_deadlines_updated_at
BEFORE UPDATE ON public.exam_deadlines
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();