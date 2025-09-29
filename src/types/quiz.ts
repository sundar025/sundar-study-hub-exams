export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correct: number;
  explanation?: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
}

export interface Topic {
  id: string;
  name: string;
  description: string;
  questions: QuizQuestion[];
  difficulty: 'Easy' | 'Medium' | 'Hard';
  estimatedTime: number; // in minutes
}

export interface Subject {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
  category: 'core' | 'optional' | 'language';
  topics: Topic[];
  totalQuestions: number;
}

export interface QuizResults {
  score: number;
  correct: number;
  total: number;
  avgTimePerQuestion: number;
  badge: {
    name: string;
    icon: any;
    color: string;
  };
  topicWise: Array<{
    topic: string;
    score: number;
    total: number;
    percentage: number;
    status: string;
  }>;
}