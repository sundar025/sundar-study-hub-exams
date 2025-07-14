import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { BookOpen, Users, Trophy, Calendar, CheckCircle } from "lucide-react";
import StudyMaterialSection from "./StudyMaterialSection";
import { useProgress } from "@/hooks/useProgress";
import { useAuth } from "@/hooks/useAuth";

const ExamSection = () => {
  const [selectedExam, setSelectedExam] = useState<string | null>(null);
  const { getSubjectProgress } = useProgress();
  const { user } = useAuth();

  const exams = [
    {
      name: "TNPSC Group 1",
      category: "State Government",
      description: "Tamil Nadu Public Service Commission Group 1 Services",
      subjects: ["Tamil", "English", "General Studies", "Current Affairs", "Aptitude"],
      nextExamDate: "2024-06-15",
      totalCandidates: "2,50,000+",
      difficulty: "High"
    },
    {
      name: "TNPSC Group 2",
      category: "State Government", 
      description: "Tamil Nadu Public Service Commission Group 2 Services",
      subjects: ["Tamil", "English", "General Studies", "Current Affairs"],
      nextExamDate: "2024-05-20",
      totalCandidates: "5,00,000+",
      difficulty: "Medium"
    },
    {
      name: "TNPSC Group 4",
      category: "State Government",
      description: "Tamil Nadu Public Service Commission Group 4 Services",
      subjects: ["Tamil", "English", "General Studies", "Maths"],
      nextExamDate: "2024-07-10",
      totalCandidates: "8,00,000+", 
      difficulty: "Medium"
    },
    {
      name: "SSC CGL",
      category: "Central Government",
      description: "Staff Selection Commission Combined Graduate Level",
      subjects: ["General Intelligence", "General Awareness", "Quantitative Aptitude", "English"],
      nextExamDate: "2024-08-05",
      totalCandidates: "25,00,000+",
      difficulty: "High"
    },
    {
      name: "SSC CHSL",
      category: "Central Government", 
      description: "Staff Selection Commission Combined Higher Secondary Level",
      subjects: ["General Intelligence", "General Awareness", "Quantitative Aptitude", "English"],
      nextExamDate: "2024-09-12",
      totalCandidates: "15,00,000+",
      difficulty: "Medium"
    },
    {
      name: "Banking PO",
      category: "Banking",
      description: "Probationary Officer in Public Sector Banks",
      subjects: ["Reasoning", "Quantitative Aptitude", "English", "General Awareness", "Computer"],
      nextExamDate: "2024-06-28",
      totalCandidates: "12,00,000+",
      difficulty: "High"
    }
  ];

  const getOverallProgress = (subjects: string[]) => {
    if (!user) return 0;
    
    const totalProgress = subjects.reduce((acc, subject) => {
      const progress = getSubjectProgress(subject);
      return acc + progress.percentage;
    }, 0);
    
    return subjects.length > 0 ? totalProgress / subjects.length : 0;
  };

  if (selectedExam) {
    return (
      <StudyMaterialSection 
        examName={selectedExam}
        onBack={() => setSelectedExam(null)}
      />
    );
  }

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-foreground mb-4">Government Exam Preparation</h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Choose your target exam and start your preparation journey with our comprehensive study materials and progress tracking.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {exams.map((exam, index) => {
          const overallProgress = getOverallProgress(exam.subjects);
          
          return (
            <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl text-primary">{exam.name}</CardTitle>
                  <Badge variant={exam.difficulty === "High" ? "destructive" : exam.difficulty === "Medium" ? "default" : "secondary"}>
                    {exam.difficulty}
                  </Badge>
                </div>
                <CardDescription className="text-sm text-muted-foreground">
                  {exam.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-primary" />
                    <span className="font-medium">{exam.nextExamDate}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-secondary" />
                    <span className="font-medium">{exam.totalCandidates}</span>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Study Progress</span>
                    <span className="text-sm text-muted-foreground">{overallProgress.toFixed(0)}%</span>
                  </div>
                  <Progress value={overallProgress} className="h-2" />
                </div>

                <div className="space-y-2">
                  <h4 className="font-semibold text-sm">Subjects:</h4>
                  <div className="flex flex-wrap gap-1">
                    {exam.subjects.map((subject, subIndex) => {
                      const subjectProgress = getSubjectProgress(subject);
                      const isCompleted = subjectProgress.percentage === 100;
                      
                      return (
                        <Badge 
                          key={subIndex} 
                          variant={isCompleted ? "default" : "outline"}
                          className="text-xs flex items-center gap-1"
                        >
                          {isCompleted && <CheckCircle className="h-3 w-3" />}
                          {subject}
                        </Badge>
                      );
                    })}
                  </div>
                </div>

                <Button 
                  onClick={() => setSelectedExam(exam.name)}
                  className="w-full"
                >
                  <BookOpen className="mr-2 h-4 w-4" />
                  Start Studying
                </Button>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Why Choose section */}
      <Card className="bg-gradient-to-r from-primary to-secondary text-primary-foreground">
        <CardContent className="p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Why Choose Our Study Hub?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            <div className="text-center">
              <Users className="mx-auto mb-2" size={40} />
              <h4 className="font-semibold">Expert Content</h4>
              <p className="text-sm opacity-90">Curated by experienced educators</p>
            </div>
            <div className="text-center">
              <BookOpen className="mx-auto mb-2" size={40} />
              <h4 className="font-semibold">Comprehensive Material</h4>
              <p className="text-sm opacity-90">Complete syllabus coverage</p>
            </div>
            <div className="text-center">
              <Trophy className="mx-auto mb-2" size={40} />
              <h4 className="font-semibold">Progress Tracking</h4>
              <p className="text-sm opacity-90">Monitor your learning journey</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ExamSection;