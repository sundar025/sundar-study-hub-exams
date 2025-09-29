import { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useUserProgress } from "@/hooks/useUserProgress";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/integrations/supabase/client";
import { BookOpen, Clock, Award, TrendingUp } from "lucide-react";

interface StudyStats {
  totalTopicsStudied: number;
  totalTimeSpent: number;
  averageProgress: number;
  completedTopics: number;
  totalStudySessions: number;
}

const StudyDashboard = () => {
  const { user } = useAuth();
  const { progressData, loading } = useUserProgress();
  const [studyStats, setStudyStats] = useState<StudyStats>({
    totalTopicsStudied: 0,
    totalTimeSpent: 0,
    averageProgress: 0,
    completedTopics: 0,
    totalStudySessions: 0,
  });

  useEffect(() => {
    if (user && !loading) {
      loadStudyStats();
    }
  }, [user, loading, progressData]);

  const loadStudyStats = async () => {
    if (!user) return;

    try {
      // Get study sessions data
      const { data: sessions, error: sessionsError } = await supabase
        .from('study_sessions')
        .select('*')
        .eq('user_id', user.id);

      if (sessionsError) {
        console.error('Error loading study sessions:', sessionsError);
        return;
      }

      // Calculate stats from progress data
      const progressValues = Object.values(progressData);
      const totalTopicsStudied = progressValues.length;
      const completedTopics = progressValues.filter(p => p.completion_percentage === 100).length;
      const averageProgress = totalTopicsStudied > 0 
        ? Math.round(progressValues.reduce((sum, p) => sum + p.completion_percentage, 0) / totalTopicsStudied)
        : 0;
      const totalTimeSpent = progressValues.reduce((sum, p) => sum + p.time_spent, 0);
      const totalStudySessions = sessions?.length || 0;

      setStudyStats({
        totalTopicsStudied,
        totalTimeSpent,
        averageProgress,
        completedTopics,
        totalStudySessions,
      });

    } catch (error) {
      console.error('Error loading study stats:', error);
    }
  };

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[...Array(4)].map((_, i) => (
          <Card key={i} className="animate-pulse">
            <CardHeader className="pb-3">
              <div className="h-4 bg-gray-200 rounded w-3/4"></div>
            </CardHeader>
            <CardContent>
              <div className="h-8 bg-gray-200 rounded w-1/2 mb-2"></div>
              <div className="h-3 bg-gray-200 rounded w-full"></div>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2">
        <TrendingUp className="text-blue-500" size={24} />
        <h2 className="text-2xl font-bold text-gray-900">Study Progress</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-sm font-medium text-gray-600">Topics Studied</CardTitle>
              <BookOpen className="text-blue-500" size={20} />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900 mb-2">
              {studyStats.totalTopicsStudied}
            </div>
            <p className="text-sm text-gray-600">
              {studyStats.completedTopics} completed
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-sm font-medium text-gray-600">Study Time</CardTitle>
              <Clock className="text-green-500" size={20} />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900 mb-2">
              {Math.round(studyStats.totalTimeSpent / 60)}h {studyStats.totalTimeSpent % 60}m
            </div>
            <p className="text-sm text-gray-600">
              {studyStats.totalStudySessions} sessions
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-sm font-medium text-gray-600">Average Progress</CardTitle>
              <Award className="text-purple-500" size={20} />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900 mb-2">
              {studyStats.averageProgress}%
            </div>
            <Progress value={studyStats.averageProgress} className="h-2" />
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-sm font-medium text-gray-600">Completion Rate</CardTitle>
              <TrendingUp className="text-orange-500" size={20} />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900 mb-2">
              {studyStats.totalTopicsStudied > 0 
                ? Math.round((studyStats.completedTopics / studyStats.totalTopicsStudied) * 100)
                : 0}%
            </div>
            <p className="text-sm text-gray-600">
              {studyStats.completedTopics}/{studyStats.totalTopicsStudied} topics
            </p>
          </CardContent>
        </Card>
      </div>

      {studyStats.totalTopicsStudied === 0 && (
        <Card>
          <CardContent className="text-center py-12">
            <BookOpen className="mx-auto text-gray-400 mb-4" size={48} />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Start Your Learning Journey</h3>
            <p className="text-gray-600">
              Begin studying topics to track your progress and see detailed statistics here.
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default StudyDashboard;