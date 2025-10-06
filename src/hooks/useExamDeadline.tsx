import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "./useAuth";
import { useToast } from "@/hooks/use-toast";

interface ExamDeadline {
  id: string;
  exam_name: string;
  exam_category: string;
  started_at: string;
  deadline_months: number;
  deadline_date: string;
  is_active: boolean;
}

export const useExamDeadline = () => {
  const { user } = useAuth();
  const { toast } = useToast();
  const [deadlines, setDeadlines] = useState<ExamDeadline[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user) {
      loadDeadlines();
    }
  }, [user]);

  const loadDeadlines = async () => {
    if (!user) return;

    try {
      const { data, error } = await supabase
        .from("exam_deadlines")
        .select("*")
        .eq("user_id", user.id)
        .eq("is_active", true);

      if (error) throw error;
      setDeadlines(data || []);
    } catch (error: any) {
      console.error("Error loading deadlines:", error);
    } finally {
      setLoading(false);
    }
  };

  const startExamDeadline = async (
    examName: string,
    examCategory: string,
    deadlineMonths: number
  ) => {
    if (!user) {
      toast({
        title: "Authentication Required",
        description: "Please sign in to start tracking your exam deadline.",
        variant: "destructive",
      });
      return;
    }

    try {
      const startDate = new Date();
      const deadlineDate = new Date(startDate);
      deadlineDate.setMonth(deadlineDate.getMonth() + deadlineMonths);

      const { data, error } = await supabase
        .from("exam_deadlines")
        .upsert(
          {
            user_id: user.id,
            exam_name: examName,
            exam_category: examCategory,
            started_at: startDate.toISOString(),
            deadline_months: deadlineMonths,
            deadline_date: deadlineDate.toISOString(),
            is_active: true,
          },
          {
            onConflict: "user_id,exam_name,exam_category",
          }
        )
        .select()
        .single();

      if (error) throw error;

      toast({
        title: "Deadline Started!",
        description: `You have ${deadlineMonths} months to complete ${examName}`,
      });

      await loadDeadlines();
      return data;
    } catch (error: any) {
      console.error("Error starting deadline:", error);
      toast({
        title: "Error",
        description: "Failed to start deadline tracking",
        variant: "destructive",
      });
    }
  };

  const getDeadlineForExam = (examName: string, examCategory: string) => {
    return deadlines.find(
      (d) => d.exam_name === examName && d.exam_category === examCategory
    );
  };

  const stopExamDeadline = async (deadlineId: string) => {
    if (!user) return;

    try {
      const { error } = await supabase
        .from("exam_deadlines")
        .update({ is_active: false })
        .eq("id", deadlineId);

      if (error) throw error;

      toast({
        title: "Deadline Stopped",
        description: "Exam deadline tracking has been stopped",
      });

      await loadDeadlines();
    } catch (error: any) {
      console.error("Error stopping deadline:", error);
      toast({
        title: "Error",
        description: "Failed to stop deadline tracking",
        variant: "destructive",
      });
    }
  };

  const getTimeRemaining = (deadlineDate: string) => {
    const now = new Date();
    const deadline = new Date(deadlineDate);
    const diff = deadline.getTime() - now.getTime();

    if (diff <= 0) {
      return { expired: true, days: 0, hours: 0, minutes: 0 };
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

    return { expired: false, days, hours, minutes };
  };

  return {
    deadlines,
    loading,
    startExamDeadline,
    getDeadlineForExam,
    stopExamDeadline,
    getTimeRemaining,
  };
};
