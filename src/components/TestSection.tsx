
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Clock, Target, TrendingUp, Brain, Award } from "lucide-react";

const TestSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("state");
  const [selectedTest, setSelectedTest] = useState<string | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<{[key: number]: string}>({});
  const [showAnalysis, setShowAnalysis] = useState(false);
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutes for demo

  const allTests = {
    state: [
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
    ],
    central: [
      {
        id: "upsc-prelims",
        name: "UPSC Civil Services - Prelims Mock",
        questions: 100,
        duration: "120 minutes",
        subjects: ["History", "Geography", "Polity", "Economy"],
        difficulty: "Very High",
        attempts: 5200
      },
      {
        id: "ssc-cgl",
        name: "SSC CGL - Tier 1 Mock Test",
        questions: 100,
        duration: "60 minutes",
        subjects: ["Reasoning", "General Awareness", "Quantitative Aptitude", "English"],
        difficulty: "High",
        attempts: 8900
      },
      {
        id: "ssc-chsl",
        name: "SSC CHSL - Tier 1 Mock Test",
        questions: 100,
        duration: "60 minutes",
        subjects: ["General Intelligence", "General Awareness", "Quantitative Aptitude", "English"],
        difficulty: "Medium",
        attempts: 4500
      },
      {
        id: "nda-math",
        name: "NDA - Mathematics Mock Test",
        questions: 120,
        duration: "150 minutes",
        subjects: ["Algebra", "Trigonometry", "Geometry", "Calculus"],
        difficulty: "High",
        attempts: 2100
      }
    ]
  };

  const sampleQuestions = [
    {
      question: "Who is known as the Father of the Indian Constitution?",
      options: ["Mahatma Gandhi", "Dr. B.R. Ambedkar", "Jawaharlal Nehru", "Sardar Patel"],
      correct: 1,
      subject: "Polity"
    },
    {
      question: "Which is the largest state in India by area?",
      options: ["Maharashtra", "Uttar Pradesh", "Rajasthan", "Madhya Pradesh"],
      correct: 2,
      subject: "Geography"
    },
    {
      question: "What is the square root of 144?",
      options: ["11", "12", "13", "14"],
      correct: 1,
      subject: "Mathematics"
    },
    {
      question: "Who wrote the book 'Discovery of India'?",
      options: ["Mahatma Gandhi", "Jawaharlal Nehru", "Subhas Chandra Bose", "Dr. APJ Abdul Kalam"],
      correct: 1,
      subject: "History"
    },
    {
      question: "What is the capital of Australia?",
      options: ["Sydney", "Melbourne", "Canberra", "Perth"],
      correct: 2,
      subject: "Geography"
    }
  ];

  const currentTests = allTests[selectedCategory as keyof typeof allTests];

  const startTest = (testId: string) => {
    setSelectedTest(testId);
    setCurrentQuestion(0);
    setAnswers({});
    setShowAnalysis(false);
    setTimeLeft(300);
  };

  const selectAnswer = (questionIndex: number, answerIndex: number) => {
    setAnswers(prev => ({
      ...prev,
      [questionIndex]: answerIndex.toString()
    }));
  };

  const nextQuestion = () => {
    if (currentQuestion < sampleQuestions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      finishTest();
    }
  };

  const finishTest = () => {
    setShowAnalysis(true);
  };

  const calculateResults = () => {
    let correct = 0;
    let subjectWise: {[key: string]: {correct: number, total: number}} = {};
    
    sampleQuestions.forEach((q, index) => {
      const subject = q.subject;
      if (!subjectWise[subject]) {
        subjectWise[subject] = {correct: 0, total: 0};
      }
      subjectWise[subject].total++;
      
      if (answers[index] && parseInt(answers[index]) === q.correct) {
        correct++;
        subjectWise[subject].correct++;
      }
    });

    return {
      score: Math.round((correct / sampleQuestions.length) * 100),
      subjectWise: Object.entries(subjectWise).map(([subject, data]) => ({
        subject,
        score: data.correct,
        total: data.total,
        percentage: Math.round((data.correct / data.total) * 100)
      }))
    };
  };

  if (showAnalysis) {
    const results = calculateResults();
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
                <div className="text-3xl font-bold text-primary">{results.score}%</div>
                <div className="text-sm text-gray-600">Overall Score</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">{Math.floor(300 - timeLeft / 60)}m</div>
                <div className="text-sm text-gray-600">Time Spent</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600">32s</div>
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
              {results.subjectWise.map((subject, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{subject.subject}</span>
                    <span className="text-sm text-gray-600">{subject.score}/{subject.total}</span>
                  </div>
                  <Progress value={subject.percentage} className="h-2" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="text-center">
          <Button onClick={() => {
            setShowAnalysis(false);
            setSelectedTest(null);
          }} size="lg">
            Take Another Test
          </Button>
        </div>
      </div>
    );
  }

  if (selectedTest) {
    const question = sampleQuestions[currentQuestion];
    return (
      <div className="space-y-8">
        <Card>
          <CardHeader>
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-bold">Question {currentQuestion + 1} of {sampleQuestions.length}</h3>
              <div className="flex items-center gap-2">
                <Clock size={20} />
                <span className="font-mono">{Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}</span>
              </div>
            </div>
            <Progress value={((currentQuestion + 1) / sampleQuestions.length) * 100} className="h-2" />
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <Badge className="mb-4">{question.subject}</Badge>
              <h4 className="text-lg font-medium mb-4">{question.question}</h4>
            </div>
            
            <div className="grid grid-cols-1 gap-3">
              {question.options.map((option, index) => (
                <Button
                  key={index}
                  variant={answers[currentQuestion] === index.toString() ? "default" : "outline"}
                  className="text-left justify-start h-auto p-4"
                  onClick={() => selectAnswer(currentQuestion, index)}
                >
                  <span className="mr-3 font-bold">{String.fromCharCode(65 + index)}.</span>
                  {option}
                </Button>
              ))}
            </div>

            <div className="flex justify-between">
              <Button 
                variant="outline" 
                onClick={() => setCurrentQuestion(Math.max(0, currentQuestion - 1))}
                disabled={currentQuestion === 0}
              >
                Previous
              </Button>
              <Button onClick={nextQuestion}>
                {currentQuestion === sampleQuestions.length - 1 ? "Finish Test" : "Next Question"}
              </Button>
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {currentTests.map((test, index) => (
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
                <Badge variant={test.difficulty === "Very High" || test.difficulty === "High" ? "destructive" : "secondary"}>
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
