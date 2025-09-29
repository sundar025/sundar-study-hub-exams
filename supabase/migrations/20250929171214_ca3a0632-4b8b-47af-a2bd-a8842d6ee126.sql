-- Drop foreign key constraints and change user_progress to use text fields for subject/topic names
ALTER TABLE public.user_progress 
DROP CONSTRAINT IF EXISTS user_progress_subject_id_fkey,
DROP CONSTRAINT IF EXISTS user_progress_topic_id_fkey;

-- Change column types from uuid to text  
ALTER TABLE public.user_progress 
ALTER COLUMN subject_id TYPE text,
ALTER COLUMN topic_id TYPE text;

-- Also update study_sessions table to match
ALTER TABLE public.study_sessions
DROP CONSTRAINT IF EXISTS study_sessions_subject_id_fkey,
DROP CONSTRAINT IF EXISTS study_sessions_topic_id_fkey;

ALTER TABLE public.study_sessions
ALTER COLUMN subject_id TYPE text,
ALTER COLUMN topic_id TYPE text;