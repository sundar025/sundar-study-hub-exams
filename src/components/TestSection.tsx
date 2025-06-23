import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Clock, Target, TrendingUp, Brain, Award, Medal, Star, Trophy } from "lucide-react";

const TestSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("state");
  const [selectedTest, setSelectedTest] = useState<string | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<{[key: number]: string}>({});
  const [showAnalysis, setShowAnalysis] = useState(false);
  const [timeLeft, setTimeLeft] = useState(1800); // 30 minutes
  const [startTime, setStartTime] = useState<number | null>(null);

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

  const examQuestions = {
    "tnpsc-g1-prelims": [
      {
        question: "Who is known as the Father of the Indian Constitution?",
        options: ["Mahatma Gandhi", "Dr. B.R. Ambedkar", "Jawaharlal Nehru", "Sardar Patel"],
        correct: 1,
        subject: "Polity"
      },
      {
        question: "The Sangam literature was written in which language?",
        options: ["Sanskrit", "Tamil", "Prakrit", "Pali"],
        correct: 1,
        subject: "Tamil"
      },
      {
        question: "Which Governor-General introduced the Doctrine of Lapse?",
        options: ["Lord Wellesley", "Lord Dalhousie", "Lord Cornwallis", "Lord Hastings"],
        correct: 1,
        subject: "History"
      },
      {
        question: "The Western Ghats in Tamil Nadu is known as?",
        options: ["Nilgiris", "Anaimalai", "Sahyadri", "All of the above"],
        correct: 3,
        subject: "Geography"
      },
      {
        question: "Which article of the Constitution deals with Right to Education?",
        options: ["Article 19", "Article 21A", "Article 25", "Article 32"],
        correct: 1,
        subject: "Polity"
      }
    ],
    "upsc-prelims": [
      {
        question: "The India State of Forest Report is published by?",
        options: ["Ministry of Environment", "Forest Survey of India", "ISRO", "Central Pollution Control Board"],
        correct: 1,
        subject: "Environment"
      },
      {
        question: "Who was the first President of the Indian National Congress?",
        options: ["Dadabhai Naoroji", "W.C. Bonnerjee", "Surendranath Banerjee", "A.O. Hume"],
        correct: 1,
        subject: "History"
      },
      {
        question: "The term 'Zero Hour' in Parliament refers to?",
        options: ["Question Hour", "Adjournment Motion", "Matters of urgent importance", "Budget discussion"],
        correct: 2,
        subject: "Polity"
      },
      {
        question: "Which of the following is not a Millennium Development Goal?",
        options: ["Eradicate extreme poverty", "Achieve universal primary education", "Digital India", "Combat HIV/AIDS"],
        correct: 2,
        subject: "Economy"
      },
      {
        question: "The Tropic of Cancer passes through which Indian states?",
        options: ["8 states", "7 states", "6 states", "9 states"],
        correct: 0,
        subject: "Geography"
      }
    ],
    "ssc-cgl": [
      {
        question: "If CODING is written as DPEJOH, then FLOWER will be written as?",
        options: ["GMPXFS", "GMPXFR", "GKNVDQ", "HLPXGT"],
        correct: 0,
        subject: "Reasoning"
      },
      {
        question: "What is 15% of 240?",
        options: ["36", "32", "40", "38"],
        correct: 0,
        subject: "Mathematics"
      },
      {
        question: "The synonym of 'Abundant' is?",
        options: ["Scarce", "Plentiful", "Rare", "Limited"],
        correct: 1,
        subject: "English"
      },
      {
        question: "Who is the current Chief Justice of India (as of 2024)?",
        options: ["D.Y. Chandrachud", "N.V. Ramana", "S.A. Bobde", "Ranjan Gogoi"],
        correct: 0,
        subject: "General Awareness"
      },
      {
        question: "The HCF of 12, 18, and 24 is?",
        options: ["4", "6", "8", "12"],
        correct: 1,
        subject: "Mathematics"
      }
    ],
    "nda-math": [
      {
        question: "The value of sin²θ + cos²θ is?",
        options: ["0", "1", "2", "Variable"],
        correct: 1,
        subject: "Trigonometry"
      },
      {
        question: "If a = 3 and b = 4, then √(a² + b²) = ?",
        options: ["5", "7", "6", "8"],
        correct: 0,
        subject: "Algebra"
      },
      {
        question: "The derivative of x³ is?",
        options: ["3x²", "x²", "3x", "x³"],
        correct: 0,
        subject: "Calculus"
      },
      {
        question: "The area of a circle with radius 7 cm is?",
        options: ["154 cm²", "144 cm²", "164 cm²", "174 cm²"],
        correct: 0,
        subject: "Geometry"
      },
      {
        question: "If log₁₀(100) = x, then x = ?",
        options: ["1", "2", "10", "100"],
        correct: 1,
        subject: "Logarithms"
      }
    ]
  };

  const currentTests = allTests[selectedCategory as keyof typeof allTests];
  const currentQuestions = selectedTest ? examQuestions[selectedTest as keyof typeof examQuestions] || [] : [];

  const startTest = (testId: string) => {
    setSelectedTest(testId);
    setCurrentQuestion(0);
    setAnswers({});
    setShowAnalysis(false);
    setTimeLeft(1800);
    setStartTime(Date.now());
  };

  const selectAnswer = (questionIndex: number, answerIndex: number) => {
    setAnswers(prev => ({
      ...prev,
      [questionIndex]: answerIndex.toString()
    }));
  };

  const nextQuestion = () => {
    if (currentQuestion < currentQuestions.length - 1) {
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
    const totalTime = startTime ? Math.floor((Date.now() - startTime) / 1000) : 0;
    
    currentQuestions.forEach((q, index) => {
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

    const score = Math.round((correct / currentQuestions.length) * 100);
    const avgTimePerQuestion = Math.floor(totalTime / currentQuestions.length);
    
    // Determine badge based on performance
    let badge = { name: "Beginner", icon: Star, color: "bg-gray-500" };
    if (score >= 90) badge = { name: "Expert", icon: Trophy, color: "bg-yellow-500" };
    else if (score >= 75) badge = { name: "Advanced", icon: Medal, color: "bg-blue-500" };
    else if (score >= 60) badge = { name: "Intermediate", icon: Award, color: "bg-green-500" };

    return {
      score,
      correct,
      total: currentQuestions.length,
      avgTimePerQuestion,
      badge,
      subjectWise: Object.entries(subjectWise).map(([subject, data]) => ({
        subject,
        score: data.correct,
        total: data.total,
        percentage: Math.round((data.correct / data.total) * 100),
        status: data.correct / data.total >= 0.7 ? "Strong" : "Needs Improvement"
      }))
    };
  };

  if (showAnalysis) {
    const results = calculateResults();
    const BadgeIcon = results.badge.icon;
    
    return (
      <div className="space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Test Analysis</h2>
          <p className="text-lg text-gray-600">Comprehensive performance analysis and recommendations</p>
        </div>

        {/* Performance Badge */}
        <Card className="bg-gradient-to-r from-yellow-50 to-orange-50 border-2 border-yellow-200">
          <CardContent className="p-6 text-center">
            <div className={`inline-flex items-center gap-3 px-6 py-3 rounded-full ${results.badge.color} text-white text-xl font-bold`}>
              <BadgeIcon size={32} />
              {results.badge.name}
            </div>
            <p className="mt-3 text-gray-600">Performance Level Achieved</p>
          </CardContent>
        </Card>

        {/* Overall Performance */}
        <Card className="bg-gradient-to-r from-blue-50 to-purple-50">
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600">{results.score}%</div>
                <div className="text-sm text-gray-600 mt-1">Overall Score</div>
                <div className="text-xs text-gray-500">{results.correct}/{results.total} correct</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600">{Math.floor(results.avgTimePerQuestion / 60)}:{(results.avgTimePerQuestion % 60).toString().padStart(2, '0')}</div>
                <div className="text-sm text-gray-600 mt-1">Avg Time/Question</div>
                <div className="text-xs text-gray-500">Speed Analysis</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-600">{results.subjectWise.filter(s => s.status === "Strong").length}</div>
                <div className="text-sm text-gray-600 mt-1">Strong Subjects</div>
                <div className="text-xs text-gray-500">Above 70% accuracy</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-orange-600">{results.subjectWise.filter(s => s.status === "Needs Improvement").length}</div>
                <div className="text-sm text-gray-600 mt-1">Needs Focus</div>
                <div className="text-xs text-gray-500">Below 70% accuracy</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Subject-wise Analysis */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target />
              Subject-wise Performance Analysis
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {results.subjectWise.map((subject, index) => (
                <div key={index} className="p-4 border rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium text-lg">{subject.subject}</span>
                    <div className="flex items-center gap-2">
                      <Badge variant={subject.status === "Strong" ? "default" : "destructive"}>
                        {subject.status}
                      </Badge>
                      <span className="text-sm text-gray-600">{subject.score}/{subject.total}</span>
                    </div>
                  </div>
                  <Progress value={subject.percentage} className="h-3 mb-2" />
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">{subject.percentage}% Accuracy</span>
                    <span className={subject.status === "Strong" ? "text-green-600" : "text-red-600"}>
                      {subject.status === "Strong" ? "Keep it up!" : "Focus more on this subject"}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recommendations */}
        <Card className="bg-gradient-to-r from-green-50 to-blue-50">
          <CardContent className="p-6">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Brain />
              Personalized Recommendations
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-white rounded-lg border">
                <h4 className="font-semibold text-green-700 mb-2">Strengths</h4>
                <ul className="text-sm space-y-1">
                  {results.subjectWise.filter(s => s.status === "Strong").map((subject, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                      {subject.subject} - {subject.percentage}%
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-4 bg-white rounded-lg border">
                <h4 className="font-semibold text-red-700 mb-2">Areas to Improve</h4>
                <ul className="text-sm space-y-1">
                  {results.subjectWise.filter(s => s.status === "Needs Improvement").map((subject, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                      {subject.subject} - {subject.percentage}%
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="text-center">
          <Button onClick={() => {
            setShowAnalysis(false);
            setSelectedTest(null);
          }} size="lg" className="mr-4">
            Take Another Test
          </Button>
          <Button variant="outline" size="lg">
            Download Report
          </Button>
        </div>
      </div>
    );
  }

  if (selectedTest) {
    if (currentQuestions.length === 0) {
      return (
        <div className="text-center py-8">
          <p className="text-gray-600">Questions for this test are being prepared. Please try another test.</p>
          <Button onClick={() => setSelectedTest(null)} className="mt-4">
            Back to Tests
          </Button>
        </div>
      );
    }

    const question = currentQuestions[currentQuestion];
    return (
      <div className="space-y-8">
        <Card>
          <CardHeader>
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-bold">Question {currentQuestion + 1} of {currentQuestions.length}</h3>
              <div className="flex items-center gap-2">
                <Clock size={20} />
                <span className="font-mono text-lg">{Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}</span>
              </div>
            </div>
            <Progress value={((currentQuestion + 1) / currentQuestions.length) * 100} className="h-3" />
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <Badge className="mb-4 text-sm px-3 py-1">{question.subject}</Badge>
              <h4 className="text-lg font-medium mb-6 leading-relaxed">{question.question}</h4>
            </div>
            
            <div className="grid grid-cols-1 gap-3">
              {question.options.map((option, index) => (
                <Button
                  key={index}
                  variant={answers[currentQuestion] === index.toString() ? "default" : "outline"}
                  className="text-left justify-start h-auto p-4 text-wrap"
                  onClick={() => selectAnswer(currentQuestion, index)}
                >
                  <span className="mr-3 font-bold text-lg">{String.fromCharCode(65 + index)}.</span>
                  <span className="flex-1">{option}</span>
                </Button>
              ))}
            </div>

            <div className="flex justify-between pt-4">
              <Button 
                variant="outline" 
                onClick={() => setCurrentQuestion(Math.max(0, currentQuestion - 1))}
                disabled={currentQuestion === 0}
                size="lg"
              >
                Previous
              </Button>
              <Button onClick={nextQuestion} size="lg">
                {currentQuestion === currentQuestions.length - 1 ? "Finish Test" : "Next Question"}
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
        <p className="text-lg text-gray-600">Test your knowledge and get detailed performance analysis with personalized recommendations</p>
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
          <Card key={index} className="hover:shadow-xl transition-all duration-300 border-2 hover:border-blue-200">
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
                <span className="text-xs text-gray-500">{test.attempts.toLocaleString()} attempts</span>
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
          <h3 className="text-xl font-bold text-center mb-6">Advanced Analytics Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <Clock className="mx-auto mb-3 text-blue-500" size={40} />
              <h4 className="font-semibold mb-2">Speed Analysis</h4>
              <p className="text-sm text-gray-600">Track your answering speed and time management</p>
            </div>
            <div className="text-center">
              <Target className="mx-auto mb-3 text-green-500" size={40} />
              <h4 className="font-semibold mb-2">Subject Mastery</h4>
              <p className="text-sm text-gray-600">Identify your strong and weak subjects</p>
            </div>
            <div className="text-center">
              <Award className="mx-auto mb-3 text-purple-500" size={40} />
              <h4 className="font-semibold mb-2">Performance Badges</h4>
              <p className="text-sm text-gray-600">Earn badges based on your performance</p>
            </div>
            <div className="text-center">
              <TrendingUp className="mx-auto mb-3 text-orange-500" size={40} />
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
