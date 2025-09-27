-- Add missing fields to profiles table for qualification and other user data
ALTER TABLE public.profiles 
ADD COLUMN IF NOT EXISTS qualification TEXT,
ADD COLUMN IF NOT EXISTS experience TEXT,
ADD COLUMN IF NOT EXISTS location TEXT,
ADD COLUMN IF NOT EXISTS bio TEXT,
ADD COLUMN IF NOT EXISTS phone TEXT;

-- Create physical_tests table for SI physical test data
CREATE TABLE IF NOT EXISTS public.physical_tests (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL,
  test_type TEXT NOT NULL,
  height_cm INTEGER,
  chest_normal_cm INTEGER,
  chest_expanded_cm INTEGER,
  running_time_seconds INTEGER,
  long_jump_meters DECIMAL(4,2),
  test_date DATE NOT NULL DEFAULT CURRENT_DATE,
  notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS on physical_tests
ALTER TABLE public.physical_tests ENABLE ROW LEVEL SECURITY;

-- Create policies for physical_tests
CREATE POLICY "Users can view their own physical tests" 
ON public.physical_tests 
FOR SELECT 
USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own physical tests" 
ON public.physical_tests 
FOR INSERT 
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own physical tests" 
ON public.physical_tests 
FOR UPDATE 
USING (auth.uid() = user_id);

-- Create exam_alerts table
CREATE TABLE IF NOT EXISTS public.exam_alerts (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL,
  exam_name TEXT NOT NULL,
  alert_types TEXT[] NOT NULL,
  phone_number TEXT,
  email TEXT,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS on exam_alerts
ALTER TABLE public.exam_alerts ENABLE ROW LEVEL SECURITY;

-- Create policies for exam_alerts
CREATE POLICY "Users can view their own exam alerts" 
ON public.exam_alerts 
FOR SELECT 
USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own exam alerts" 
ON public.exam_alerts 
FOR INSERT 
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own exam alerts" 
ON public.exam_alerts 
FOR UPDATE 
USING (auth.uid() = user_id);

-- Create exam_notifications table for real-time notifications
CREATE TABLE IF NOT EXISTS public.exam_notifications (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID,
  exam_name TEXT NOT NULL,
  notification_type TEXT NOT NULL,
  title TEXT NOT NULL,
  message TEXT NOT NULL,
  source_url TEXT,
  is_read BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS on exam_notifications
ALTER TABLE public.exam_notifications ENABLE ROW LEVEL SECURITY;

-- Create policies for exam_notifications
CREATE POLICY "Users can view their own notifications" 
ON public.exam_notifications 
FOR SELECT 
USING (auth.uid() = user_id OR user_id IS NULL);

CREATE POLICY "System can insert notifications" 
ON public.exam_notifications 
FOR INSERT 
WITH CHECK (true);

-- Create update trigger for physical_tests
CREATE TRIGGER update_physical_tests_updated_at
BEFORE UPDATE ON public.physical_tests
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Create update trigger for exam_alerts
CREATE TRIGGER update_exam_alerts_updated_at
BEFORE UPDATE ON public.exam_alerts
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();