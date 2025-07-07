import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Clock, Target, TrendingUp, Brain, Award, Medal, Star, Trophy, Download, Bell } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const TestSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("state");
  const [selectedTest, setSelectedTest] = useState<string | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<{[key: number]: string}>({});
  const [showAnalysis, setShowAnalysis] = useState(false);
  const [timeLeft, setTimeLeft] = useState(1800);
  const [startTime, setStartTime] = useState<number | null>(null);
  const { toast } = useToast();

  // Timer effect
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (selectedTest && !showAnalysis && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            finishTest();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [selectedTest, showAnalysis, timeLeft]);

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
      },
      {
        id: "tnpsc-vao",
        name: "TNPSC VAO - Mock Test",
        questions: 150,
        duration: "120 minutes",
        subjects: ["General Studies", "Tamil", "Mathematics"],
        difficulty: "Medium",
        attempts: 1890
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
      },
      {
        id: "capf-ac",
        name: "CAPF Assistant Commandant - Mock Test",
        questions: 125,
        duration: "120 minutes",
        subjects: ["General Studies", "General Aptitude", "Current Affairs"],
        difficulty: "High",
        attempts: 1450
      },
      {
        id: "ssc-gd",
        name: "SSC GD Constable - Mock Test",
        questions: 80,
        duration: "60 minutes",
        subjects: ["General Intelligence", "General Knowledge", "Elementary Mathematics", "English/Hindi"],
        difficulty: "Medium",
        attempts: 12400
      },
      {
        id: "ssc-mts",
        name: "SSC MTS - Mock Test",
        questions: 100,
        duration: "90 minutes",
        subjects: ["General Intelligence", "Numerical Aptitude", "General Awareness", "English"],
        difficulty: "Easy",
        attempts: 6700
      },
      {
        id: "cds-english",
        name: "CDS - English Mock Test",
        questions: 120,
        duration: "120 minutes",
        subjects: ["English Grammar", "Vocabulary", "Comprehension"],
        difficulty: "Medium",
        attempts: 3200
      },
      {
        id: "railway-ntpc",
        name: "Railway NTPC - Mock Test",
        questions: 100,
        duration: "90 minutes",
        subjects: ["General Awareness", "Mathematics", "General Intelligence"],
        difficulty: "Medium",
        attempts: 15600
      },
      {
        id: "bank-po",
        name: "Bank PO - Preliminary Mock Test",
        questions: 100,
        duration: "60 minutes",
        subjects: ["English", "Quantitative Aptitude", "Reasoning"],
        difficulty: "High",
        attempts: 9800
      }
    ]
  };

  const examQuestions = {
    "tnpsc-g1-prelims": [
      {
        question: "Who is known as the Father of the Indian Constitution?",
        options: ["Mahatma Gandhi", "Dr. B.R. Ambedkar", "Jawaharlal Nehru", "Sardar Patel"],
        correct: 1,
        subject: "Polity",
        explanation: "Dr. B.R. Ambedkar is called the Father of the Indian Constitution for his role as chairman of the drafting committee."
      },
      {
        question: "The Sangam literature was written in which language?",
        options: ["Sanskrit", "Tamil", "Prakrit", "Pali"],
        correct: 1,
        subject: "Tamil Literature",
        explanation: "Sangam literature is the earliest Tamil literature, composed between 300 BCE and 300 CE."
      },
      {
        question: "Which Governor-General introduced the Doctrine of Lapse?",
        options: ["Lord Wellesley", "Lord Dalhousie", "Lord Cornwallis", "Lord Hastings"],
        correct: 1,
        subject: "History",
        explanation: "Lord Dalhousie introduced the Doctrine of Lapse in 1848 to annex princely states without male heirs."
      },
      {
        question: "The Western Ghats in Tamil Nadu is known as?",
        options: ["Nilgiris", "Anaimalai", "Sahyadri", "All of the above"],
        correct: 3,
        subject: "Geography",
        explanation: "The Western Ghats in Tamil Nadu includes Nilgiris, Anaimalai, and other hill ranges."
      },
      {
        question: "Which article of the Constitution deals with Right to Education?",
        options: ["Article 19", "Article 21A", "Article 25", "Article 32"],
        correct: 1,
        subject: "Polity",
        explanation: "Article 21A provides for free and compulsory education for children aged 6-14 years."
      },
      {
        question: "Thirukkural was written by?",
        options: ["Thiruvalluvar", "Kambar", "Bharathiyar", "Bharathidasan"],
        correct: 0,
        subject: "Tamil Literature",
        explanation: "Thirukkural, a classic Tamil text on ethics and morality, was written by Thiruvalluvar."
      },
      {
        question: "The First War of Indian Independence occurred in which year?",
        options: ["1857", "1858", "1859", "1860"],
        correct: 0,
        subject: "History",
        explanation: "The First War of Indian Independence, also called the Sepoy Mutiny, began in 1857."
      },
      {
        question: "Chennai is located on the banks of which river?",
        options: ["Kaveri", "Cooum", "Adyar", "Both B and C"],
        correct: 3,
        subject: "Geography",
        explanation: "Chennai is located on the banks of both Cooum and Adyar rivers."
      },
      {
        question: "Who was the first Tamil poet to receive Jnanpith Award?",
        options: ["Bharathiyar", "Bharathidasan", "Akilan", "None of these"],
        correct: 3,
        subject: "Tamil Literature",
        explanation: "Akilan was the first Tamil writer to receive the Jnanpith Award in 1975."
      },
      {
        question: "The Pallava dynasty had its capital at?",
        options: ["Madurai", "Thanjavur", "Kanchipuram", "Trichy"],
        correct: 2,
        subject: "History",
        explanation: "Kanchipuram was the capital of the Pallava dynasty and is known as the 'City of Thousand Temples'."
      }
    ],
    "upsc-prelims": [
      {
        question: "The India State of Forest Report is published by?",
        options: ["Ministry of Environment", "Forest Survey of India", "ISRO", "Central Pollution Control Board"],
        correct: 1,
        subject: "Environment",
        explanation: "The India State of Forest Report is published by the Forest Survey of India every two years."
      },
      {
        question: "Who was the first President of the Indian National Congress?",
        options: ["Dadabhai Naoroji", "W.C. Bonnerjee", "Surendranath Banerjee", "A.O. Hume"],
        correct: 1,
        subject: "History",
        explanation: "W.C. Bonnerjee was the first President of the Indian National Congress in 1885."
      },
      {
        question: "The term 'Zero Hour' in Parliament refers to?",
        options: ["Question Hour", "Adjournment Motion", "Matters of urgent importance", "Budget discussion"],
        correct: 2,
        subject: "Polity",
        explanation: "Zero Hour is the time when MPs raise matters of urgent public importance without prior notice."
      },
      {
        question: "Which of the following is not a Millennium Development Goal?",
        options: ["Eradicate extreme poverty", "Achieve universal primary education", "Digital India", "Combat HIV/AIDS"],
        correct: 2,
        subject: "Economy",
        explanation: "Digital India is an initiative by the Government of India, not a Millennium Development Goal."
      },
      {
        question: "The Tropic of Cancer passes through how many Indian states?",
        options: ["8 states", "7 states", "6 states", "9 states"],
        correct: 0,
        subject: "Geography",
        explanation: "The Tropic of Cancer passes through 8 Indian states including Gujarat, Rajasthan, MP, Chhattisgarh, Jharkhand, West Bengal, Tripura, and Mizoram."
      },
      {
        question: "Which Amendment Act is known as 'Mini Constitution'?",
        options: ["42nd Amendment", "44th Amendment", "52nd Amendment", "73rd Amendment"],
        correct: 0,
        subject: "Polity",
        explanation: "The 42nd Amendment Act (1976) is called 'Mini Constitution' due to extensive changes it made."
      },
      {
        question: "The concept of 'Judicial Review' in Indian Constitution is borrowed from?",
        options: ["UK", "USA", "Canada", "Australia"],
        correct: 1,
        subject: "Polity",
        explanation: "The concept of Judicial Review is borrowed from the United States Constitution."
      },
      {
        question: "Which river is known as 'Sorrow of Bengal'?",
        options: ["Ganga", "Brahmaputra", "Damodar", "Hooghly"],
        correct: 2,
        subject: "Geography",
        explanation: "Damodar river was called 'Sorrow of Bengal' due to frequent floods before the construction of dams."
      },
      {
        question: "The Chipko movement was started by?",
        options: ["Medha Patkar", "Vandana Shiva", "Sunderlal Bahuguna", "Chandi Prasad Bhatt"],
        correct: 3,
        subject: "Environment",
        explanation: "Chandi Prasad Bhatt started the Chipko movement in 1973 to protect forests in Uttarakhand."
      },
      {
        question: "Which Five Year Plan introduced the concept of 'Rolling Plan'?",
        options: ["Fifth Plan", "Sixth Plan", "Seventh Plan", "Eighth Plan"],
        correct: 1,
        subject: "Economy",
        explanation: "The Sixth Five Year Plan (1980-85) introduced the concept of Rolling Plan for flexible planning."
      }
    ],
    "ssc-cgl": [
      {
        question: "If CODING is written as DPEJOH, then FLOWER will be written as?",
        options: ["GMPXFS", "GMPXFR", "GKNVDQ", "HLPXGT"],
        correct: 0,
        subject: "Reasoning",
        explanation: "Each letter is shifted by +1 position in the alphabet. F→G, L→M, O→P, W→X, E→F, R→S."
      },
      {
        question: "What is 15% of 240?",
        options: ["36", "32", "40", "38"],
        correct: 0,
        subject: "Mathematics",
        explanation: "15% of 240 = (15/100) × 240 = 36."
      },
      {
        question: "The synonym of 'Abundant' is?",
        options: ["Scarce", "Plentiful", "Rare", "Limited"],
        correct: 1,
        subject: "English",
        explanation: "Abundant means existing in large quantities, so plentiful is the correct synonym."
      },
      {
        question: "Who is the current Chief Justice of India?",
        options: ["D.Y. Chandrachud", "N.V. Ramana", "S.A. Bobde", "Ranjan Gogoi"],
        correct: 0,
        subject: "General Awareness",
        explanation: "Justice D.Y. Chandrachud is the current Chief Justice of India (as of 2024)."
      },
      {
        question: "The HCF of 12, 18, and 24 is?",
        options: ["4", "6", "8", "12"],
        correct: 1,
        subject: "Mathematics",
        explanation: "The highest common factor of 12, 18, and 24 is 6."
      },
      {
        question: "Which vitamin is produced when skin is exposed to sunlight?",
        options: ["Vitamin A", "Vitamin C", "Vitamin D", "Vitamin K"],
        correct: 2,
        subject: "General Science",
        explanation: "Vitamin D is synthesized in the skin when exposed to UVB radiation from sunlight."
      },
      {
        question: "The antonym of 'Zenith' is?",
        options: ["Peak", "Summit", "Nadir", "Apex"],
        correct: 2,
        subject: "English",
        explanation: "Zenith means the highest point, so Nadir (the lowest point) is its antonym."
      },
      {
        question: "If a train travels 60 km in 45 minutes, what is its speed in km/hr?",
        options: ["75 km/hr", "80 km/hr", "85 km/hr", "90 km/hr"],
        correct: 1,
        subject: "Mathematics",
        explanation: "Speed = Distance/Time = 60 km / (45/60) hr = 60 × (60/45) = 80 km/hr."
      }
    ],
    "bank-po": [
      {
        question: "If the simple interest on a sum for 2 years at 8% per annum is Rs. 320, what is the compound interest on the same sum for the same time at the same rate?",
        options: ["Rs. 332.80", "Rs. 325.40", "Rs. 340.20", "Rs. 315.60"],
        correct: 0,
        subject: "Quantitative Aptitude",
        explanation: "Principal = 320 × 100 / (2 × 8) = Rs. 2000. CI = 2000 × [(1 + 8/100)² - 1] = Rs. 332.80"
      },
      {
        question: "Choose the word that is most similar in meaning to 'PROLIFIC':",
        options: ["Barren", "Productive", "Scarce", "Limited"],
        correct: 1,
        subject: "English",
        explanation: "Prolific means producing a lot of something, hence productive is the correct synonym."
      },
      {
        question: "In a certain code, COMPUTER is written as RFUVQNPC. How will MEDICINE be written in that code?",
        options: ["EOJDJDOM", "EOJDIPOM", "EOJDJPOM", "EOJEJDOM"],
        correct: 2,
        subject: "Reasoning",
        explanation: "Each letter is replaced by the letter that comes 4 positions after it in the alphabet."
      },
      {
        question: "The Basel III norms are related to?",
        options: ["Banking regulation", "Insurance", "Stock market", "Foreign exchange"],
        correct: 0,
        subject: "Banking Awareness",
        explanation: "Basel III is an international regulatory framework for banks focusing on capital adequacy and risk management."
      },
      {
        question: "A train 150m long takes 30 seconds to cross a bridge 350m long. What is the speed of the train?",
        options: ["40 km/hr", "50 km/hr", "60 km/hr", "70 km/hr"],
        correct: 2,
        subject: "Quantitative Aptitude",
        explanation: "Total distance = 150 + 350 = 500m. Speed = 500/30 = 16.67 m/s = 60 km/hr."
      }
    ],
    "railway-ntpc": [
      {
        question: "Indian Railways was nationalized in which year?",
        options: ["1947", "1950", "1951", "1952"],
        correct: 2,
        subject: "General Awareness",
        explanation: "Indian Railways was nationalized in 1951 under the Railway Act."
      },
      {
        question: "The largest railway zone in India by area is?",
        options: ["Northern Railway", "Eastern Railway", "Central Railway", "Southern Railway"],
        correct: 0,
        subject: "General Awareness",
        explanation: "Northern Railway is the largest railway zone in India by area coverage."
      },
      {
        question: "If 3x + 7 = 22, then x = ?",
        options: ["3", "4", "5", "6"],
        correct: 2,
        subject: "Mathematics",
        explanation: "3x + 7 = 22, so 3x = 15, therefore x = 5."
      },
      {
        question: "The headquarters of Indian Railways is located in?",
        options: ["Mumbai", "Delhi", "Kolkata", "Chennai"],
        correct: 1,
        subject: "General Awareness",
        explanation: "The Railway Board headquarters is located in New Delhi."
      },
      {
        question: "Complete the series: 2, 6, 12, 20, 30, ?",
        options: ["40", "42", "44", "46"],
        correct: 1,
        subject: "General Intelligence",
        explanation: "Pattern: n(n+1) where n = 1,2,3,4,5,6. So 6×7 = 42."
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

  const downloadReport = () => {
    const userProfile = JSON.parse(localStorage.getItem('userProfile') || '{}');
    const results = calculateResults();
    const testName = allTests[selectedCategory as keyof typeof allTests].find(test => test.id === selectedTest)?.name;
    
    const reportContent = `
COMPETITIVE EXAM TEST REPORT
============================

Candidate Name: ${userProfile.name || 'User'}
Test: ${testName}
Date: ${new Date().toLocaleDateString()}
Time: ${new Date().toLocaleTimeString()}

OVERALL PERFORMANCE
==================
Score: ${results.score}%
Correct Answers: ${results.correct}/${results.total}
Performance Level: ${results.badge.name}
Time Taken: ${Math.floor((Date.now() - (startTime || 0)) / 60000)} minutes

SUBJECT-WISE ANALYSIS
====================
${results.subjectWise.map(subject => 
  `${subject.subject}: ${subject.score}/${subject.total} (${subject.percentage}%) - ${subject.status}`
).join('\n')}

DETAILED QUESTION ANALYSIS
==========================
${currentQuestions.map((q, index) => {
  const userAnswer = answers[index] ? q.options[parseInt(answers[index])] : 'Not answered';
  const correctAnswer = q.options[q.correct];
  const isCorrect = answers[index] && parseInt(answers[index]) === q.correct;
  
  return `Q${index + 1}: ${q.question}
Subject: ${q.subject}
Your Answer: ${userAnswer} ${isCorrect ? '✓' : '✗'}
Correct Answer: ${correctAnswer}
Explanation: ${q.explanation}
`;
}).join('\n')}

RECOMMENDATIONS
===============
Strong Areas: ${results.subjectWise.filter(s => s.status === "Strong").map(s => s.subject).join(', ') || 'None'}
Areas to Improve: ${results.subjectWise.filter(s => s.status === "Needs Improvement").map(s => s.subject).join(', ') || 'None'}

Next Steps:
- Focus more on weak subjects
- Practice similar questions
- Review explanations for incorrect answers
- Take more mock tests regularly

Generated by Gov Job Prep Platform
Report ID: ${Date.now()}
    `;

    const blob = new Blob([reportContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${userProfile.name || 'User'}_Test_Report_${new Date().toISOString().split('T')[0]}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    // Save test history
    const testHistory = JSON.parse(localStorage.getItem('testHistory') || '[]');
    testHistory.push({
      testName,
      date: new Date().toISOString(),
      score: results.score,
      correct: results.correct,
      total: results.total,
      badge: results.badge.name
    });
    localStorage.setItem('testHistory', JSON.stringify(testHistory));

    toast({
      title: "Report Downloaded",
      description: `Test report saved as ${userProfile.name || 'User'}_Test_Report_${new Date().toISOString().split('T')[0]}.txt`,
    });
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
          <Button onClick={downloadReport} variant="outline" size="lg" className="flex items-center gap-2">
            <Download size={16} />
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
                <span className={`font-mono text-lg ${timeLeft < 300 ? 'text-red-600' : 'text-gray-700'}`}>
                  {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}
                </span>
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

      {/* Real Updates Notification */}
      <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
        <CardContent className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <Bell className="text-blue-500" size={24} />
            <h3 className="text-xl font-bold text-blue-900">Latest Updates</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-white rounded-lg border border-blue-200">
              <div className="text-sm text-blue-600 font-medium">Today</div>
              <div className="text-gray-800">New UPSC Prelims Mock Test added with 2024 pattern</div>
            </div>
            <div className="p-4 bg-white rounded-lg border border-blue-200">
              <div className="text-sm text-blue-600 font-medium">2 days ago</div>
              <div className="text-gray-800">SSC CGL Tier 2 preparation material updated</div>
            </div>
          </div>
        </CardContent>
      </Card>

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
