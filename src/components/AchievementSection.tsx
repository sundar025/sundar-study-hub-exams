
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Circle, Download, Trophy } from "lucide-react";

const AchievementSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("state");
  const [selectedExam, setSelectedExam] = useState("TNPSC Group 1");
  const [completedTopics, setCompletedTopics] = useState<{[key: string]: string[]}>({});

  const allExams = {
    state: ["TNPSC Group 1", "TNPSC Group 2", "TNPSC Group 4", "TNUSRB SI"],
    central: ["UPSC Civil Services", "UPSC Assistant Commandant", "SSC GD", "SSC CGL", "SSC CHSL", "SSC MTS", "CAPF SI", "NDA", "CDS"]
  };

  const examSyllabus = {
    "TNPSC Group 1": [
      "Indian Polity & Governance", "Indian Economy", "Geography", "History", "Science & Technology",
      "Environment & Ecology", "Current Affairs", "Tamil Literature", "English Grammar", "Quantitative Aptitude"
    ],
    "TNPSC Group 2": [
      "General Studies", "Tamil Language", "English Language", "Aptitude & Mental Ability",
      "Current Affairs", "Indian Constitution", "Tamil Nadu History", "Geography of Tamil Nadu"
    ],
    "TNPSC Group 4": [
      "General Tamil", "General English", "General Studies", "Aptitude & Mental Ability Test",
      "General Knowledge", "Current Events"
    ],
    "TNUSRB SI": [
      "General Studies", "Aptitude & Mental Ability", "Tamil Language", "English Language",
      "Current Affairs", "Law & Order", "Physical Training"
    ],
    "UPSC Civil Services": [
      "History of India", "Indian Geography", "Indian Polity", "Indian Economy", "General Science",
      "Environment & Ecology", "Current Affairs", "Ethics & Integrity", "Optional Subject", "Essay Writing"
    ],
    "UPSC Assistant Commandant": [
      "General Ability and Intelligence", "General Studies", "Essay Writing", "Current Affairs",
      "Indian History", "Geography", "Indian Polity", "Economics"
    ],
    "SSC GD": [
      "General Intelligence & Reasoning", "General Knowledge & General Awareness",
      "Elementary Mathematics", "English/Hindi"
    ],
    "SSC CGL": [
      "General Intelligence & Reasoning", "General Awareness", "Quantitative Aptitude",
      "English Comprehension", "Statistics", "Finance & Economics"
    ],
    "SSC CHSL": [
      "General Intelligence", "General Awareness", "Quantitative Aptitude",
      "English Language", "Descriptive Paper"
    ],
    "SSC MTS": [
      "General Intelligence & Reasoning", "Numerical Aptitude", "General Awareness",
      "English Language"
    ],
    "CAPF SI": [
      "General Intelligence & Reasoning", "General Knowledge & General Awareness",
      "Quantitative Aptitude", "English Comprehension"
    ],
    "NDA": [
      "Mathematics", "General Ability Test", "English", "General Knowledge",
      "Physics", "Chemistry", "History", "Geography"
    ],
    "CDS": [
      "English", "General Knowledge", "Elementary Mathematics", "Current Affairs",
      "History", "Geography", "Physics", "Chemistry"
    ]
  };

  const currentSyllabus = examSyllabus[selectedExam as keyof typeof examSyllabus] || [];
  const examCompletedTopics = completedTopics[selectedExam] || [];
  const completionPercentage = Math.round((examCompletedTopics.length / currentSyllabus.length) * 100);
  const isCompleted = completionPercentage === 100;

  const toggleTopic = (topic: string) => {
    setCompletedTopics(prev => ({
      ...prev,
      [selectedExam]: prev[selectedExam]?.includes(topic) 
        ? prev[selectedExam].filter(t => t !== topic)
        : [...(prev[selectedExam] || []), topic]
    }));
  };

  const downloadCertificate = () => {
    alert(`Congratulations! Your certificate for ${selectedExam} completion is being generated.\n\nCertificate Details:\nCandidate: Raj Kumar\nCourse: ${selectedExam} Syllabus Completion\nSignature: Sundar (Founder)\nDate: ${new Date().toLocaleDateString()}`);
  };

  const currentExams = allExams[selectedCategory as keyof typeof allExams];

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Achievement Tracker</h2>
        <p className="text-lg text-gray-600">Track your study progress and earn certificates</p>
      </div>

      {/* Category Selection */}
      <div className="flex justify-center space-x-4">
        <Button
          variant={selectedCategory === "state" ? "default" : "outline"}
          onClick={() => {
            setSelectedCategory("state");
            setSelectedExam("TNPSC Group 1");
          }}
          size="lg"
        >
          State Government Exams
        </Button>
        <Button
          variant={selectedCategory === "central" ? "default" : "outline"}
          onClick={() => {
            setSelectedCategory("central");
            setSelectedExam("UPSC Civil Services");
          }}
          size="lg"
        >
          Central Government Exams
        </Button>
      </div>

      {/* Exam Selection */}
      <Card>
        <CardHeader>
          <CardTitle>Select Your Exam</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {currentExams.map(exam => (
              <Button
                key={exam}
                variant={selectedExam === exam ? "default" : "outline"}
                onClick={() => setSelectedExam(exam)}
                className="w-full text-sm"
              >
                {exam}
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Progress Overview */}
      <Card className="bg-gradient-to-r from-green-50 to-blue-50">
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-xl font-bold text-gray-900">{selectedExam} Progress</h3>
              <p className="text-gray-600">Complete all topics to earn your certificate</p>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold text-primary">{completionPercentage}%</div>
              <div className="text-sm text-gray-600">Completed</div>
            </div>
          </div>
          <Progress value={completionPercentage} className="h-3" />
          <div className="mt-2 text-sm text-gray-600">
            {examCompletedTopics.length} of {currentSyllabus.length} topics completed
          </div>
        </CardContent>
      </Card>

      {/* Syllabus Checklist */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Trophy className="text-yellow-500" />
            Syllabus Checklist
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {currentSyllabus.map((topic, index) => (
              <div
                key={index}
                className={`p-4 border-2 rounded-lg cursor-pointer transition-all duration-200 ${
                  examCompletedTopics.includes(topic)
                    ? "border-green-500 bg-green-50"
                    : "border-gray-200 hover:border-gray-300"
                }`}
                onClick={() => toggleTopic(topic)}
              >
                <div className="flex items-center gap-3">
                  {examCompletedTopics.includes(topic) ? (
                    <CheckCircle className="text-green-500" size={24} />
                  ) : (
                    <Circle className="text-gray-400" size={24} />
                  )}
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900">{topic}</h4>
                    <p className="text-sm text-gray-600">
                      {examCompletedTopics.includes(topic) ? "Completed ✓" : "Click to mark as studied"}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Certificate Section */}
      {isCompleted && (
        <Card className="bg-gradient-to-r from-yellow-50 to-orange-50 border-yellow-200">
          <CardContent className="p-8 text-center">
            <Trophy className="mx-auto mb-4 text-yellow-500" size={64} />
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Congratulations!</h3>
            <p className="text-gray-600 mb-6">
              You have completed all topics for {selectedExam}. Download your certificate now!
            </p>
            <div className="bg-white p-4 rounded-lg border-2 border-yellow-300 mb-4">
              <h4 className="font-bold text-lg">Certificate Preview</h4>
              <p className="text-sm text-gray-600 mt-2">
                This certifies that <strong>Raj Kumar</strong> has successfully completed the syllabus for <strong>{selectedExam}</strong>
              </p>
              <p className="text-xs text-gray-500 mt-2">Signature: Sundar (Founder)</p>
            </div>
            <Button onClick={downloadCertificate} size="lg" className="bg-yellow-500 hover:bg-yellow-600">
              <Download className="mr-2" size={20} />
              Download Certificate
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default AchievementSection;
