
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { subjects } from "@/data/studyMaterialData";

interface SubjectsListViewProps {
  examName: string;
  onBack: () => void;
  onSubjectSelect: (subjectKey: string) => void;
}

const SubjectsListView = ({ examName, onBack, onSubjectSelect }: SubjectsListViewProps) => {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Button 
          onClick={onBack} 
          variant="outline"
          className="flex items-center gap-2"
        >
          <ArrowLeft size={16} />
          Back to Exams
        </Button>
        <h2 className="text-2xl font-bold text-gray-900">{examName} - Study Subjects</h2>
      </div>

      <div className="text-center bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">Complete Study Material</h3>
        <p className="text-gray-600">Choose a subject to start your preparation journey</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Object.entries(subjects).map(([subjectKey, subject]) => (
          <Card key={subjectKey} className="hover:shadow-xl transition-all duration-300 cursor-pointer">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className={`w-12 h-12 ${subject.color} rounded-full flex items-center justify-center text-white text-xl`}>
                  {subject.icon}
                </div>
                <div>
                  <CardTitle className="text-lg font-bold text-gray-900">{subject.name}</CardTitle>
                  <p className="text-sm text-gray-600">{Object.keys(subject.topics).length} Topics Available</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex flex-wrap gap-2">
                  {Object.keys(subject.topics).slice(0, 3).map((topic, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {topic}
                    </Badge>
                  ))}
                  {Object.keys(subject.topics).length > 3 && (
                    <Badge variant="secondary" className="text-xs">
                      +{Object.keys(subject.topics).length - 3} more
                    </Badge>
                  )}
                </div>
                <Button 
                  onClick={() => onSubjectSelect(subjectKey)}
                  className="w-full"
                  size="lg"
                >
                  Start Learning
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default SubjectsListView;
