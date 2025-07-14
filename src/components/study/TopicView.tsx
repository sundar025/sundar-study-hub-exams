
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Clock } from "lucide-react";
import { StudyContent } from "@/data/studyMaterialData";

interface TopicViewProps {
  topic: StudyContent;
  onBack: () => void;
  subjectName: string;
}

const TopicView = ({ topic, onBack, subjectName }: TopicViewProps) => {
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
        <h2 className="text-2xl font-bold text-gray-900">{topic.title}</h2>
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
            <ul className="space-y-2">
              {topic.keyPoints.map((point, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-blue-500 font-bold">•</span>
                  <span className="text-gray-700">{point}</span>
                </li>
              ))}
            </ul>
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
        </CardContent>
      </Card>
    </div>
  );
};

export default TopicView;
