
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, BookOpen } from "lucide-react";
import { Subject } from "@/data/studyMaterialData";

interface SubjectTopicsViewProps {
  subject: Subject;
  onBack: () => void;
  onTopicSelect: (topicKey: string) => void;
}

const SubjectTopicsView = ({ subject, onBack, onTopicSelect }: SubjectTopicsViewProps) => {
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
        {Object.entries(subject.topics).map(([topicKey, topic]) => (
          <Card key={topicKey} className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-gray-900">
                {topic.title}
              </CardTitle>
              <p className="text-sm text-gray-600">{topic.description}</p>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <BookOpen size={16} />
                  <span>{topic.keyPoints.length} Key Points</span>
                </div>
                <Button 
                  onClick={() => onTopicSelect(topicKey)}
                  className="w-full"
                >
                  Study This Topic
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default SubjectTopicsView;
