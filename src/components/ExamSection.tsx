
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BookOpen, Clock, Users, Award } from "lucide-react";

const ExamSection = () => {
  const exams = [
    {
      name: "TNPSC Group 1",
      pattern: ["Prelims", "Mains"],
      description: "Tamil Nadu Public Service Commission Group 1 Services",
      subjects: ["General Studies", "Tamil", "English", "Current Affairs"],
      duration: "12 months preparation",
      difficulty: "High",
      color: "bg-red-500"
    },
    {
      name: "TNPSC Group 2",
      pattern: ["Prelims", "Mains"],
      description: "Tamil Nadu Public Service Commission Group 2 Services",
      subjects: ["General Studies", "Tamil", "Aptitude", "Current Affairs"],
      duration: "8 months preparation",
      difficulty: "Medium",
      color: "bg-orange-500"
    },
    {
      name: "TNPSC Group 4",
      pattern: ["Mains Only"],
      description: "Tamil Nadu Public Service Commission Group 4 Services",
      subjects: ["General Studies", "Tamil", "Mathematics", "General English"],
      duration: "6 months preparation",
      difficulty: "Medium",
      color: "bg-green-500"
    },
    {
      name: "TNUSRB SI",
      pattern: ["Mains", "Physical"],
      description: "Tamil Nadu Uniformed Services Recruitment Board Sub Inspector",
      subjects: ["General Studies", "Aptitude", "Tamil", "English"],
      duration: "10 months preparation",
      difficulty: "High",
      color: "bg-blue-500"
    }
  ];

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Government Exam Preparation</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Choose your target exam and start your preparation journey with our comprehensive study materials and practice tests.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {exams.map((exam, index) => (
          <Card key={index} className="hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20">
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between">
                <CardTitle className="text-xl font-bold text-gray-900">{exam.name}</CardTitle>
                <div className={`w-4 h-4 rounded-full ${exam.color}`}></div>
              </div>
              <p className="text-gray-600 text-sm">{exam.description}</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-wrap gap-2">
                {exam.pattern.map((pattern, i) => (
                  <Badge key={i} variant="secondary" className="bg-blue-100 text-blue-800">
                    {pattern}
                  </Badge>
                ))}
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <BookOpen size={16} />
                  <span>Subjects: {exam.subjects.join(", ")}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Clock size={16} />
                  <span>{exam.duration}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Award size={16} />
                  <span>Difficulty: {exam.difficulty}</span>
                </div>
              </div>
              
              <Button className="w-full mt-4" size="lg">
                Start Preparation
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="bg-gradient-to-r from-purple-500 to-pink-500 text-white">
        <CardContent className="p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Why Choose Sundar Study Hub?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            <div className="text-center">
              <Users className="mx-auto mb-2" size={40} />
              <h4 className="font-semibold">Expert Faculty</h4>
              <p className="text-sm opacity-90">Learn from experienced educators</p>
            </div>
            <div className="text-center">
              <BookOpen className="mx-auto mb-2" size={40} />
              <h4 className="font-semibold">Comprehensive Material</h4>
              <p className="text-sm opacity-90">Complete syllabus coverage</p>
            </div>
            <div className="text-center">
              <Award className="mx-auto mb-2" size={40} />
              <h4 className="font-semibold">Success Track Record</h4>
              <p className="text-sm opacity-90">Proven results and achievements</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ExamSection;
