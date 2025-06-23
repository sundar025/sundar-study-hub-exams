import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BookOpen, Clock, Users, Award, Play, FileText } from "lucide-react";

const ExamSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("state");
  const [selectedExam, setSelectedExam] = useState<string | null>(null);

  const stateExams = [
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

  const centralExams = [
    {
      name: "UPSC Civil Services",
      pattern: ["Prelims", "Mains", "Interview"],
      description: "Union Public Service Commission Civil Services Examination",
      subjects: ["History", "Geography", "Polity", "Economy", "Environment", "Current Affairs"],
      duration: "18 months preparation",
      difficulty: "Very High",
      color: "bg-purple-600"
    },
    {
      name: "UPSC Assistant Commandant",
      pattern: ["Written", "Interview", "Medical"],
      description: "CAPF Assistant Commandant Examination",
      subjects: ["General Ability", "General Studies", "Essay Writing"],
      duration: "12 months preparation",
      difficulty: "High",
      color: "bg-indigo-600"
    },
    {
      name: "SSC GD",
      pattern: ["CBE", "Physical", "Medical"],
      description: "Staff Selection Commission General Duty Constable",
      subjects: ["General Intelligence", "General Knowledge", "Elementary Mathematics", "English"],
      duration: "6 months preparation",
      difficulty: "Medium",
      color: "bg-cyan-500"
    },
    {
      name: "SSC CGL",
      pattern: ["Tier 1", "Tier 2", "Tier 3"],
      description: "Staff Selection Commission Combined Graduate Level",
      subjects: ["General Intelligence", "General Awareness", "Quantitative Aptitude", "English"],
      duration: "10 months preparation",
      difficulty: "High",
      color: "bg-emerald-500"
    },
    {
      name: "SSC CHSL",
      pattern: ["Tier 1", "Tier 2"],
      description: "Staff Selection Commission Combined Higher Secondary Level",
      subjects: ["General Intelligence", "General Awareness", "Quantitative Aptitude", "English"],
      duration: "8 months preparation",
      difficulty: "Medium",
      color: "bg-yellow-500"
    },
    {
      name: "SSC MTS",
      pattern: ["Paper 1", "Paper 2"],
      description: "Staff Selection Commission Multi Tasking Staff",
      subjects: ["General Intelligence", "Numerical Aptitude", "General Awareness", "English"],
      duration: "4 months preparation",
      difficulty: "Easy",
      color: "bg-pink-500"
    },
    {
      name: "CAPF SI",
      pattern: ["Paper 1", "Paper 2", "Physical", "Medical"],
      description: "Central Armed Police Forces Sub Inspector",
      subjects: ["General Intelligence", "General Knowledge", "Quantitative Aptitude", "English"],
      duration: "8 months preparation",
      difficulty: "Medium",
      color: "bg-rose-500"
    },
    {
      name: "NDA",
      pattern: ["Written", "SSB Interview"],
      description: "National Defence Academy Examination",
      subjects: ["Mathematics", "General Ability Test"],
      duration: "12 months preparation",
      difficulty: "High",
      color: "bg-slate-600"
    },
    {
      name: "CDS",
      pattern: ["Written", "SSB Interview"],
      description: "Combined Defence Services Examination",
      subjects: ["English", "General Knowledge", "Elementary Mathematics"],
      duration: "10 months preparation",
      difficulty: "High",
      color: "bg-amber-600"
    }
  ];

  const currentExams = selectedCategory === "state" ? stateExams : centralExams;

  const studyMaterials = {
    "General Studies": [
      { title: "Indian Polity by Laxmikant", type: "Book", url: "#" },
      { title: "Modern India by Bipan Chandra", type: "Book", url: "#" },
      { title: "Geography Video Lectures", type: "Video", url: "#" },
      { title: "Current Affairs Monthly Magazine", type: "PDF", url: "#" }
    ],
    "Mathematics": [
      { title: "Quantitative Aptitude by R.S. Aggarwal", type: "Book", url: "#" },
      { title: "Mathematics Video Series", type: "Video", url: "#" },
      { title: "Previous Year Questions", type: "PDF", url: "#" }
    ],
    "English": [
      { title: "Objective General English by S.P. Bakshi", type: "Book", url: "#" },
      { title: "English Grammar Videos", type: "Video", url: "#" },
      { title: "Vocabulary Building", type: "PDF", url: "#" }
    ]
  };

  if (selectedExam) {
    const exam = currentExams.find(e => e.name === selectedExam);
    return (
      <div className="space-y-8">
        <div className="flex items-center gap-4 mb-6">
          <Button onClick={() => setSelectedExam(null)} variant="outline">
            ← Back to Exams
          </Button>
          <h2 className="text-3xl font-bold text-gray-900">{exam?.name} - Study Materials</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {exam?.subjects.map((subject, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="text-blue-500" />
                  {subject}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {(studyMaterials[subject as keyof typeof studyMaterials] || [
                  { title: "Study Notes", type: "PDF", url: "#" },
                  { title: "Video Lectures", type: "Video", url: "#" },
                  { title: "Practice Questions", type: "PDF", url: "#" }
                ]).map((material, i) => (
                  <div key={i} className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center gap-3">
                      {material.type === "Video" && <Play className="text-red-500" size={20} />}
                      {material.type === "Book" && <BookOpen className="text-blue-500" size={20} />}
                      {material.type === "PDF" && <FileText className="text-green-500" size={20} />}
                      <div>
                        <p className="font-medium">{material.title}</p>
                        <p className="text-sm text-gray-500">{material.type}</p>
                      </div>
                    </div>
                    <Button size="sm" variant="outline">Access</Button>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Government Exam Preparation</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Choose your target exam and start your preparation journey with our comprehensive study materials and practice tests.
        </p>
      </div>

      {/* Category Selection */}
      <div className="flex justify-center space-x-4">
        <Button
          variant={selectedCategory === "state" ? "default" : "outline"}
          onClick={() => setSelectedCategory("state")}
          size="lg"
        >
          State Government Exams
        </Button>
        <Button
          variant={selectedCategory === "central" ? "default" : "outline"}
          onClick={() => setSelectedCategory("central")}
          size="lg"
        >
          Central Government Exams
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentExams.map((exam, index) => (
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
                  <span>Subjects: {exam.subjects.slice(0, 2).join(", ")}...</span>
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
              
              <Button 
                className="w-full mt-4" 
                size="lg"
                onClick={() => setSelectedExam(exam.name)}
              >
                Start Preparation
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Why Choose section */}
      <Card className="bg-gradient-to-r from-purple-500 to-pink-500 text-white">
        <CardContent className="p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Why Choose Our Study Hub?</h3>
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
