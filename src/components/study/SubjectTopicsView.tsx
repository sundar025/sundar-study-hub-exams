
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, BookOpen, CheckCircle, Clock } from "lucide-react";
import { Subject } from "@/data/studyMaterialData";
import { useUserProgress } from "@/hooks/useUserProgress";

interface SubjectTopicsViewProps {
  subject: Subject;
  onBack: () => void;
  onTopicSelect: (topicKey: string) => void;
}

const SubjectTopicsView = ({ subject, onBack, onTopicSelect }: SubjectTopicsViewProps) => {
  const { getTopicProgress } = useUserProgress();
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Button 
          onClick={onBack} 
          variant="outline"
          className="flex items-center gap-2"
        >
          <ArrowLeft size={16} />
          Back to Subjects
        </Button>
        <h2 className="text-2xl font-bold text-gray-900">{subject.name} Topics</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Object.entries(subject.topics).map(([topicKey, topic]) => {
          const topicProgress = getTopicProgress(subject.name, topic.title);
          const isCompleted = topicProgress.completion_percentage === 100;
          
          return (
            <Card key={topicKey} className="hover:shadow-lg transition-shadow cursor-pointer relative">
              {isCompleted && (
                <div className="absolute top-3 right-3">
                  <CheckCircle className="text-green-500" size={20} />
                </div>
              )}
              
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-gray-900 pr-8">
                  {topic.title}
                </CardTitle>
                <p className="text-sm text-gray-600">{topic.description}</p>
                
                {topicProgress.completion_percentage > 0 && (
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span>Progress</span>
                      <span>{topicProgress.completion_percentage}%</span>
                    </div>
                    <Progress value={topicProgress.completion_percentage} className="h-2" />
                  </div>
                )}
              </CardHeader>
              
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center gap-2">
                      <BookOpen size={16} />
                      <span>{topic.keyPoints.length} Key Points</span>
                    </div>
                    {topicProgress.time_spent > 0 && (
                      <div className="flex items-center gap-1">
                        <Clock size={14} />
                        <span>{topicProgress.time_spent}min</span>
                      </div>
                    )}
                  </div>
                  <Button 
                    onClick={() => onTopicSelect(topicKey)}
                    className="w-full"
                    variant={isCompleted ? "outline" : "default"}
                  >
                    {isCompleted ? "Review Topic" : "Study This Topic"}
                  </Button>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default SubjectTopicsView;
