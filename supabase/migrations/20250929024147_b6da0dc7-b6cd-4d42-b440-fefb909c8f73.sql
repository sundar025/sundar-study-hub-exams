-- Add unique constraint for user_progress table to enable proper upsert functionality
-- This will allow the onConflict resolution to work correctly
ALTER TABLE public.user_progress 
ADD CONSTRAINT user_progress_user_subject_unique 
UNIQUE (user_id, subject_id);

-- Also add a unique constraint for topic-level progress if needed
-- ALTER TABLE public.user_progress 
-- ADD CONSTRAINT user_progress_user_topic_unique 
-- UNIQUE (user_id, topic_id);

-- Update the progress tracking to work with the existing schema structure
-- Since we're using subject_id to store exam names, let's make sure this works properly