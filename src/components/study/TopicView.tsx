
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, Clock, CheckCircle, Brain } from "lucide-react";
import { StudyContent } from "@/data/studyMaterialData";
import { useUserProgress } from "@/hooks/useUserProgress";
import { useEffect, useState } from "react";

interface TopicViewProps {
  topic: StudyContent;
  onBack: () => void;
  subjectName: string;
  onStartQuiz?: (subjectName: string, topicId: string) => void;
}

const TopicView = ({ topic, onBack, subjectName, onStartQuiz }: TopicViewProps) => {
  const { getTopicProgress, markPointCompleted, isPointCompleted, recordStudySession } = useUserProgress();
  const [startTime, setStartTime] = useState<Date>(new Date());
  
  const topicProgress = getTopicProgress(subjectName, topic.title);
  
  useEffect(() => {
    setStartTime(new Date());
    
    // Record study session when component unmounts
    return () => {
      const endTime = new Date();
      const durationMinutes = Math.round((endTime.getTime() - startTime.getTime()) / (1000 * 60));
      if (durationMinutes > 0) {
        recordStudySession(subjectName, topic.title, durationMinutes);
      }
    };
  }, []);

  const handlePointToggle = async (pointIndex: number) => {
    await markPointCompleted(subjectName, topic.title, pointIndex, topic.keyPoints.length);
  };
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Button 
          onClick={onBack} 
          variant="outline"
          className="flex items-center gap-2"
        >
          <ArrowLeft size={16} />
          Back to {subjectName}
        </Button>
        <div className="flex-1">
          <h2 className="text-2xl font-bold text-gray-900">{topic.title}</h2>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="text-sm text-gray-600">
            Progress: {topicProgress.completion_percentage}%
          </div>
          <Progress value={topicProgress.completion_percentage} className="w-32" />
          {topicProgress.completion_percentage === 100 && (
            <CheckCircle className="text-green-500" size={20} />
          )}
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-xl text-blue-600">{topic.description}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-3">Overview</h3>
            <p className="text-gray-700 leading-relaxed">{topic.content}</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">Key Points</h3>
            <div className="space-y-3">
              {topic.keyPoints.map((point, index) => (
                <div key={index} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <Checkbox
                    id={`point-${index}`}
                    checked={isPointCompleted(subjectName, topic.title, index)}
                    onCheckedChange={() => handlePointToggle(index)}
                    className="mt-1"
                  />
                  <label 
                    htmlFor={`point-${index}`}
                    className={`text-gray-700 cursor-pointer flex-1 leading-relaxed ${
                      isPointCompleted(subjectName, topic.title, index) 
                        ? 'line-through text-gray-500' 
                        : ''
                    }`}
                  >
                    {point}
                  </label>
                </div>
              ))}
            </div>
          </div>

          {topic.importantDates && (
            <div>
              <h3 className="text-lg font-semibold mb-3">Important Dates</h3>
              <div className="bg-yellow-50 p-4 rounded-lg">
                <ul className="space-y-2">
                  {topic.importantDates.map((date, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Clock size={16} className="text-yellow-600 mt-1" />
                      <span className="text-gray-700">{date}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {topic.examples && (
            <div>
              <h3 className="text-lg font-semibold mb-3">Examples</h3>
              <div className="bg-green-50 p-4 rounded-lg">
                <ul className="space-y-2">
                  {topic.examples.map((example, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-green-600 font-bold">→</span>
                      <span className="text-gray-700">{example}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {onStartQuiz && (
            <div className="pt-6 border-t">
              <Button
                onClick={() => onStartQuiz(subjectName, topic.title)}
                className="w-full flex items-center justify-center gap-2"
                size="lg"
              >
                <Brain size={20} />
                Take Quiz on {topic.title}
              </Button>
              <p className="text-sm text-gray-600 text-center mt-2">
                Test your knowledge with 20 questions
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default TopicView;
