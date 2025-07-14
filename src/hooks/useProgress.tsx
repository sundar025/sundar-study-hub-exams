import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from './useAuth';
import { useToast } from './use-toast';

interface UserProgress {
  id: string;
  subject: string;
  topic: string;
  completed: boolean;
  completion_date: string | null;
  study_time_minutes: number;
}

export const useProgress = () => {
  const [progress, setProgress] = useState<UserProgress[]>([]);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();
  const { toast } = useToast();

  useEffect(() => {
    if (user) {
      fetchProgress();
    }
  }, [user]);

  const fetchProgress = async () => {
    try {
      const { data, error } = await supabase
        .from('user_progress')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setProgress(data || []);
    } catch (error) {
      console.error('Error fetching progress:', error);
    } finally {
      setLoading(false);
    }
  };

  const updateProgress = async (subject: string, topic: string, completed: boolean, studyTimeMinutes: number = 0) => {
    if (!user) return;

    try {
      const { data, error } = await supabase
        .from('user_progress')
        .upsert({
          user_id: user.id,
          subject,
          topic,
          completed,
          completion_date: completed ? new Date().toISOString() : null,
          study_time_minutes: studyTimeMinutes,
        }, {
          onConflict: 'user_id,subject,topic'
        })
        .select();

      if (error) throw error;

      // Update local state
      setProgress(prev => {
        const existingIndex = prev.findIndex(p => p.subject === subject && p.topic === topic);
        if (existingIndex >= 0) {
          const updated = [...prev];
          updated[existingIndex] = data[0];
          return updated;
        } else {
          return [data[0], ...prev];
        }
      });

      if (completed) {
        toast({
          title: "Progress Updated!",
          description: `Completed ${topic} in ${subject}`,
        });
      }
    } catch (error) {
      console.error('Error updating progress:', error);
      toast({
        title: "Error",
        description: "Failed to update progress",
        variant: "destructive",
      });
    }
  };

  const getSubjectProgress = (subject: string) => {
    const subjectProgress = progress.filter(p => p.subject === subject);
    const completed = subjectProgress.filter(p => p.completed).length;
    const total = subjectProgress.length;
    return { completed, total, percentage: total > 0 ? (completed / total) * 100 : 0 };
  };

  const isTopicCompleted = (subject: string, topic: string) => {
    return progress.some(p => p.subject === subject && p.topic === topic && p.completed);
  };

  return {
    progress,
    loading,
    updateProgress,
    getSubjectProgress,
    isTopicCompleted,
    fetchProgress,
  };
};