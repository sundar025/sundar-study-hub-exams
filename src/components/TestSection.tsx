
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Clock, Target, TrendingUp, Brain, Award } from "lucide-react";

const TestSection = () => {
  const [selectedTest, setSelectedTest] = useState<string | null>(null);
  const [showAnalysis, setShowAnalysis] = useState(false);

  const tests = [
    {
      id: "tnpsc-g1-prelims",
      name: "TNPSC Group 1 - Prelims Mock Test",
      questions: 200,
      duration: "150 minutes",
      subjects: ["General Studies", "Tamil", "Current Affairs"],
      difficulty: "High",
      attempts: 1250
    },
    {
      id: "tnpsc-g2-prelims",
      name: "TNPSC Group 2 - Prelims Mock Test",
      questions: 200,
      duration: "150 minutes",
      subjects: ["General Studies", "Tamil", "Aptitude"],
      difficulty: "Medium",
      attempts: 2100
    },
    {
      id: "tnpsc-g4-mains",
      name: "TNPSC Group 4 - Mains Mock Test",
      questions: 200,
      duration: "180 minutes",
      subjects: ["General Studies", "Tamil", "Mathematics", "English"],
      difficulty: "Medium",
      attempts: 3400
    },
    {
      id: "tnusrb-si",
      name: "TNUSRB SI - Complete Mock Test",
      questions: 200,
      duration: "120 minutes",
      subjects: ["General Studies", "Aptitude", "Tamil", "English"],
      difficulty: "High",
      attempts: 890
    }
  ];

  // Mock analysis data
  const analysisData = {
    overallScore: 75,
    timeSpent: "98 minutes",
    averageSpeed: "29 seconds per question",
    strengths: ["General Studies", "Current Affairs"],
    improvements: ["Mathematics", "English Grammar"],
    subjectWise: [
      { subject: "General Studies", score: 85, total: 50 },
      { subject: "Tamil", score: 78, total: 50 },
      { subject: "Mathematics", score: 65, total: 50 },
      { subject: "English", score: 72, total: 50 }
    ]
  };

  const startTest = (testId: string) => {
    setSelectedTest(testId);
    // Simulate test completion after 3 seconds
    setTimeout(() => {
      setShowAnalysis(true);
    }, 3000);
  };

  if (showAnalysis) {
    return (
      <div className="space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Test Analysis</h2>
          <p className="text-lg text-gray-600">Detailed performance analysis and recommendations</p>
        </div>

        {/* Overall Performance */}
        <Card className="bg-gradient-to-r from-blue-50 to-purple-50">
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">{analysisData.overallScore}%</div>
                <div className="text-sm text-gray-600">Overall Score</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">{analysisData.timeSpent}</div>
                <div className="text-sm text-gray-600">Time Spent</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600">{analysisData.averageSpeed}</div>
                <div className="text-sm text-gray-600">Avg. Speed</div>
              </div>
              <div className="text-center">
                <Award className="mx-auto mb-2 text-yellow-500" size={32} />
                <div className="text-sm text-gray-600">Performance Badge</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Subject-wise Analysis */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target />
              Subject-wise Performance
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {analysisData.subjectWise.map((subject, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{subject.subject}</span>
                    <span className="text-sm text-gray-600">{subject.score}/{subject.total}</span>
                  </div>
                  <Progress value={(subject.score / subject.total) * 100} className="h-2" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Strengths and Improvements */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="border-green-200 bg-green-50">
            <CardHeader>
              <CardTitle className="text-green-800 flex items-center gap-2">
                <TrendingUp />
                Your Strengths
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {analysisData.strengths.map((strength, index) => (
                  <Badge key={index} variant="secondary" className="bg-green-100 text-green-800 mr-2">
                    {strength}
                  </Badge>
                ))}
              </div>
              <p className="text-sm text-green-700 mt-3">
                Great job! Keep practicing these subjects to maintain your strong performance.
              </p>
            </CardContent>
          </Card>

          <Card className="border-orange-200 bg-orange-50">
            <CardHeader>
              <CardTitle className="text-orange-800 flex items-center gap-2">
                <Brain />
                Areas for Improvement
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {analysisData.improvements.map((improvement, index) => (
                  <Badge key={index} variant="secondary" className="bg-orange-100 text-orange-800 mr-2">
                    {improvement}
                  </Badge>
                ))}
              </div>
              <p className="text-sm text-orange-700 mt-3">
                Focus more on these subjects. We recommend additional practice sessions.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <Button onClick={() => setShowAnalysis(false)} size="lg">
            Take Another Test
          </Button>
        </div>
      </div>
    );
  }

  if (selectedTest) {
    return (
      <div className="space-y-8">
        <Card className="bg-gradient-to-r from-blue-500 to-purple-600 text-white">
          <CardContent className="p-8 text-center">
            <Clock className="mx-auto mb-4" size={64} />
            <h2 className="text-2xl font-bold mb-2">Test in Progress...</h2>
            <p className="text-lg opacity-90">Analyzing your performance</p>
            <div className="mt-6">
              <Progress value={75} className="h-2 bg-white/20" />
              <p className="mt-2 text-sm opacity-75">Processing answers...</p>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Mock Tests & Analysis</h2>
        <p className="text-lg text-gray-600">Test your knowledge and get detailed performance analysis</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {tests.map((test, index) => (
          <Card key={index} className="hover:shadow-xl transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-lg">{test.name}</CardTitle>
              <div className="flex flex-wrap gap-2">
                {test.subjects.map((subject, i) => (
                  <Badge key={i} variant="outline" className="text-xs">
                    {subject}
                  </Badge>
                ))}
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <Target size={16} className="text-blue-500" />
                  <span>{test.questions} Questions</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={16} className="text-green-500" />
                  <span>{test.duration}</span>
                </div>
              </div>
              
              <div className="flex justify-between items-center">
                <Badge variant={test.difficulty === "High" ? "destructive" : "secondary"}>
                  {test.difficulty}
                </Badge>
                <span className="text-xs text-gray-500">{test.attempts} attempts</span>
              </div>

              <Button 
                className="w-full" 
                size="lg"
                onClick={() => startTest(test.id)}
              >
                Start Test
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Features */}
      <Card className="bg-gradient-to-r from-indigo-50 to-blue-50">
        <CardContent className="p-8">
          <h3 className="text-xl font-bold text-center mb-6">What You'll Get</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <Clock className="mx-auto mb-3 text-blue-500" size={40} />
              <h4 className="font-semibold mb-2">Speed Analysis</h4>
              <p className="text-sm text-gray-600">Track your answering speed and time management</p>
            </div>
            <div className="text-center">
              <Target className="mx-auto mb-3 text-green-500" size={40} />
              <h4 className="font-semibold mb-2">Subject Strength</h4>
              <p className="text-sm text-gray-600">Identify your strong and weak subjects</p>
            </div>
            <div className="text-center">
              <TrendingUp className="mx-auto mb-3 text-purple-500" size={40} />
              <h4 className="font-semibold mb-2">Progress Tracking</h4>
              <p className="text-sm text-gray-600">Monitor your improvement over time</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TestSection;
