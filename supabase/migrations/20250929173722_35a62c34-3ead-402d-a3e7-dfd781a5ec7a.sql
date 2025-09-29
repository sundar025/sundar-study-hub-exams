-- Add unique constraint on title
ALTER TABLE public.exam_news ADD CONSTRAINT exam_news_title_key UNIQUE (title);

-- Schedule the fetch-exam-news function to run daily at 6 AM
SELECT cron.schedule(
  'fetch-exam-news-daily',
  '0 6 * * *', -- Run at 6:00 AM every day
  $$
  SELECT
    net.http_post(
        url:='https://jvworrfcloehmeopvzdz.supabase.co/functions/v1/fetch-exam-news',
        headers:='{"Content-Type": "application/json", "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp2d29ycmZjbG9laG1lb3B2emR6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTI0NzcxNjIsImV4cCI6MjA2ODA1MzE2Mn0.L6L67IEkZ3eJyfw5kgmfXDTkQUvuKobOT8WZYqt7SPw"}'::jsonb,
        body:='{}'::jsonb
    ) as request_id;
  $$
);

-- Insert initial news data
INSERT INTO public.exam_news (title, date, source, link, type, category)
VALUES 
  ('UPSC IFS Mains 2025 Schedule Released - November 11-23', '2025-09-29', 'UPSC Official', 'https://upsc.gov.in/whats-new/', 'Schedule', 'Central'),
  ('TNPSC Group 4 Results 2025 Expected Soon - 3935 Posts', '2025-09-28', 'TNPSC Official', 'https://tnpsc.gov.in/english/latest_results.aspx', 'Result', 'State'),
  ('TNPSC CTS Registration 2025 Open - 1794 Posts Available', '2025-09-25', 'TNPSC Official', 'https://www.tnpsc.gov.in/english/notification.aspx', 'Recruitment', 'State'),
  ('UPSC Recruitment 2025 - 84 Lecturer Posts, Apply Now', '2025-09-24', 'UPSC Official', 'https://upsc.gov.in/exams-related-info/exam-notification', 'Recruitment', 'Central'),
  ('UPSC CAPF AC Examination 2025 - Applications Open', '2025-03-05', 'UPSC Official', 'https://upsc.gov.in/exams-related-info/exam-notification', 'Important', 'Central'),
  ('TNPSC Combined Technical Services Exam Results - Multiple Posts', '2025-02-21', 'TNPSC Official', 'https://tnpsc.gov.in/english/answerkeys.aspx', 'Result', 'State')
ON CONFLICT (title) DO NOTHING;