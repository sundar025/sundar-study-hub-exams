-- Create table for storing exam news
CREATE TABLE public.exam_news (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title text NOT NULL,
  date text NOT NULL,
  source text NOT NULL,
  link text NOT NULL,
  type text NOT NULL,
  category text NOT NULL,
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  updated_at timestamp with time zone NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.exam_news ENABLE ROW LEVEL SECURITY;

-- Anyone can view news
CREATE POLICY "Anyone can view exam news"
ON public.exam_news
FOR SELECT
USING (true);

-- Only service role can insert/update/delete news
CREATE POLICY "Service role can manage exam news"
ON public.exam_news
FOR ALL
USING (auth.jwt()->>'role' = 'service_role');

-- Create index for faster queries
CREATE INDEX idx_exam_news_date ON public.exam_news(date DESC);
CREATE INDEX idx_exam_news_category ON public.exam_news(category);

-- Create trigger for updated_at
CREATE TRIGGER update_exam_news_updated_at
BEFORE UPDATE ON public.exam_news
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Enable pg_cron extension for scheduled jobs
CREATE EXTENSION IF NOT EXISTS pg_cron;

-- Enable pg_net extension for HTTP requests
CREATE EXTENSION IF NOT EXISTS pg_net;