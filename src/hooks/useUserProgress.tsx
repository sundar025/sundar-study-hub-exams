import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from './useAuth';
import { toast } from 'sonner';

interface UserProgress {
  id: string;
  user_id: string;
  subject_id?: string;
  topic_id?: string;
  progress_percentage: number;
  time_spent_minutes: number;
  completed_at?: string;
  created_at: string;
  updated_at: string;
}

interface TopicProgress {
  completed_points: string[];
  completion_percentage: number;
  time_spent: number;
  last_accessed: string;
}

export const useUserProgress = () => {
  const { user } = useAuth();
  const [progressData, setProgressData] = useState<Record<string, TopicProgress>>({});
  const [loading, setLoading] = useState(true);

  // Load user progress data
  useEffect(() => {
    if (user) {
      loadUserProgress();
    }
  }, [user]);

  const loadUserProgress = async () => {
    if (!user) return;

    try {
      const { data, error } = await supabase
        .from('user_progress')
        .select('*')
        .eq('user_id', user.id);

      if (error) {
        console.error('Error loading user progress:', error);
        return;
      }

      // Transform data into our format
      const progressMap: Record<string, TopicProgress> = {};
      data?.forEach((item) => {
        const key = `${item.subject_id || 'unknown'}-${item.topic_id || 'unknown'}`;
        progressMap[key] = {
          completed_points: [], // We'll store this in metadata later
          completion_percentage: item.progress_percentage || 0,
          time_spent: item.time_spent_minutes || 0,
          last_accessed: item.updated_at,
        };
      });

      setProgressData(progressMap);
    } catch (error) {
      console.error('Error loading progress:', error);
    } finally {
      setLoading(false);
    }
  };

  const updateTopicProgress = async (
    subjectName: string,
    topicName: string,
    completedPoints: string[],
    totalPoints: number,
    timeSpent: number = 0
  ) => {
    if (!user) return;

    const progressKey = `${subjectName}-${topicName}`;
    const completionPercentage = Math.round((completedPoints.length / totalPoints) * 100);
    const isCompleted = completionPercentage === 100;

    try {
      // Check if progress exists
      const { data: existing } = await supabase
        .from('user_progress')
        .select('*')
        .eq('user_id', user.id)
        .eq('subject_id', subjectName)
        .eq('topic_id', topicName)
        .maybeSingle();

      const progressPayload = {
        user_id: user.id,
        subject_id: subjectName,
        topic_id: topicName,
        progress_percentage: completionPercentage,
        time_spent_minutes: (existing?.time_spent_minutes || 0) + timeSpent,
        completed_at: isCompleted ? new Date().toISOString() : null,
      };

      let result;
      if (existing) {
        // Update existing progress
        result = await supabase
          .from('user_progress')
          .update(progressPayload)
          .eq('id', existing.id);
      } else {
        // Insert new progress
        result = await supabase
          .from('user_progress')
          .insert(progressPayload);
      }

      if (result.error) {
        console.error('Error updating progress:', result.error);
        toast.error('Failed to save progress');
        return;
      }

      // Update local state
      setProgressData(prev => ({
        ...prev,
        [progressKey]: {
          completed_points: completedPoints,
          completion_percentage: completionPercentage,
          time_spent: progressPayload.time_spent_minutes,
          last_accessed: new Date().toISOString(),
        }
      }));

      if (isCompleted) {
        toast.success('Topic completed! 🎉');
      }

    } catch (error) {
      console.error('Error updating progress:', error);
      toast.error('Failed to save progress');
    }
  };

  const getTopicProgress = (subjectName: string, topicName: string): TopicProgress => {
    const key = `${subjectName}-${topicName}`;
    return progressData[key] || {
      completed_points: [],
      completion_percentage: 0,
      time_spent: 0,
      last_accessed: new Date().toISOString(),
    };
  };

  const markPointCompleted = async (
    subjectName: string,
    topicName: string,
    pointIndex: number,
    totalPoints: number
  ) => {
    const currentProgress = getTopicProgress(subjectName, topicName);
    const pointKey = `point-${pointIndex}`;
    
    let updatedPoints = [...currentProgress.completed_points];
    
    if (updatedPoints.includes(pointKey)) {
      // Remove if already completed
      updatedPoints = updatedPoints.filter(p => p !== pointKey);
    } else {
      // Add if not completed
      updatedPoints.push(pointKey);
    }

    await updateTopicProgress(subjectName, topicName, updatedPoints, totalPoints);
  };

  const isPointCompleted = (subjectName: string, topicName: string, pointIndex: number): boolean => {
    const progress = getTopicProgress(subjectName, topicName);
    return progress.completed_points.includes(`point-${pointIndex}`);
  };

  const recordStudySession = async (
    subjectName: string,
    topicName: string,
    durationMinutes: number
  ) => {
    if (!user) return;

    try {
      // Record in study_sessions table
      await supabase
        .from('study_sessions')
        .insert({
          user_id: user.id,
          subject_id: subjectName,
          topic_id: topicName,
          duration_minutes: durationMinutes,
          session_date: new Date().toISOString().split('T')[0]
        });

      // Update progress with time spent
      const currentProgress = getTopicProgress(subjectName, topicName);
      await updateTopicProgress(
        subjectName,
        topicName,
        currentProgress.completed_points,
        1, // Will be updated with actual total points from component
        durationMinutes
      );

    } catch (error) {
      console.error('Error recording study session:', error);
    }
  };

  return {
    progressData,
    loading,
    updateTopicProgress,
    getTopicProgress,
    markPointCompleted,
    isPointCompleted,
    recordStudySession,
  };
};