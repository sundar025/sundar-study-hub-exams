import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Clock, Target, TrendingUp, Brain, Award, Medal, Star, Trophy, BookOpen, Users, ChevronRight, ArrowLeft } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import { subjects } from "@/data/subjectQuizData";
import { Subject, Topic, QuizQuestion, QuizResults } from "@/types/quiz";

const TestSection = ({ 
  initialQuizData, 
  onClearQuizData 
}: { 
  initialQuizData?: {subjectName: string; topicId: string} | null;
  onClearQuizData?: () => void;
}) => {
  const { user } = useAuth();
  const { toast } = useToast();
  const [selectedSubject, setSelectedSubject] = useState<Subject | null>(null);
  const [selectedTopic, setSelectedTopic] = useState<Topic | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<{[key: number]: string}>({});
  const [showAnalysis, setShowAnalysis] = useState(false);
  const [timeLeft, setTimeLeft] = useState(3000); // 50 minutes
  const [startTime, setStartTime] = useState<number | null>(null);

  useEffect(() => {
    if (initialQuizData) {
      // Find the subject
      const subject = subjects.find(s => s.name.toLowerCase() === initialQuizData.subjectName.toLowerCase());
      if (subject) {
        setSelectedSubject(subject);
        // Find the topic by name
        const topic = subject.topics.find(t => t.name.toLowerCase().includes(initialQuizData.topicId.toLowerCase()));
        if (topic) {
          startTopicQuiz(topic);
        }
      }
      // Clear the initial quiz data after processing
      if (onClearQuizData) {
        onClearQuizData();
      }
    }
  }, [initialQuizData]);

  const startTopicQuiz = (topic: Topic) => {
    setSelectedTopic(topic);
    setCurrentQuestion(0);
    setAnswers({});
    setShowAnalysis(false);
    setTimeLeft(topic.estimatedTime * 60); // Convert minutes to seconds
    setStartTime(Date.now());
  };

  const selectAnswer = (questionIndex: number, answerIndex: number) => {
    setAnswers(prev => ({
      ...prev,
      [questionIndex]: answerIndex.toString()
    }));
  };

  const nextQuestion = () => {
    if (selectedTopic && currentQuestion < selectedTopic.questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      finishTest();
    }
  };

  const finishTest = async () => {
    if (!user || !selectedTopic) return;
    
    const results = calculateResults();
    
    try {
      const { error } = await supabase
        .from('test_attempts')
        .insert({
          user_id: user.id,
          test_id: selectedTopic.id,
          score: results.correct,
          total_questions: results.total,
          time_taken_minutes: Math.round(results.avgTimePerQuestion * results.total / 60),
          answers: answers
        });

      if (error) {
        console.error('Error saving test attempt:', error);
        toast({
          title: "Warning",
          description: "Quiz completed but couldn't save results.",
          variant: "destructive",
        });
      } else {
        toast({
          title: "Success",
          description: "Quiz results saved successfully!",
        });
      }
    } catch (error) {
      console.error('Error saving test attempt:', error);
    }
    
    setShowAnalysis(true);
  };

  const calculateResults = (): QuizResults => {
    if (!selectedTopic) {
      return {
        score: 0,
        correct: 0,
        total: 0,
        avgTimePerQuestion: 0,
        badge: { name: "Beginner", icon: Star, color: "bg-gray-500" },
        topicWise: []
      };
    }

    let correct = 0;
    const totalTime = startTime ? Math.floor((Date.now() - startTime) / 1000) : 0;
    
    selectedTopic.questions.forEach((q, index) => {
      if (answers[index] && parseInt(answers[index]) === q.correct) {
        correct++;
      }
    });

    const score = Math.round((correct / selectedTopic.questions.length) * 100);
    const avgTimePerQuestion = Math.floor(totalTime / selectedTopic.questions.length);
    
    let badge = { name: "Beginner", icon: Star, color: "bg-gray-500" };
    if (score >= 90) badge = { name: "Expert", icon: Trophy, color: "bg-yellow-500" };
    else if (score >= 75) badge = { name: "Advanced", icon: Medal, color: "bg-blue-500" };
    else if (score >= 60) badge = { name: "Intermediate", icon: Award, color: "bg-green-500" };

    return {
      score,
      correct,
      total: selectedTopic.questions.length,
      avgTimePerQuestion,
      badge,
      topicWise: [{
        topic: selectedTopic.name,
        score: correct,
        total: selectedTopic.questions.length,
        percentage: score,
        status: score >= 70 ? "Strong" : "Needs Improvement"
      }]
    };
  };

  // Quiz Analysis View
  if (showAnalysis) {
    const results = calculateResults();
    const BadgeIcon = results.badge.icon;
    
    return (
      <div className="space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Quiz Analysis</h2>
          <p className="text-lg text-gray-600">Performance analysis for {selectedTopic?.name}</p>
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
                <div className="text-4xl font-bold text-purple-600">{selectedTopic?.difficulty}</div>
                <div className="text-sm text-gray-600 mt-1">Topic Difficulty</div>
                <div className="text-xs text-gray-500">{selectedTopic?.name}</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Recommendations */}
        <Card className="bg-gradient-to-r from-green-50 to-blue-50">
          <CardContent className="p-6">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Brain />
              Recommendations
            </h3>
            <div className="space-y-3">
              {results.score >= 80 ? (
                <p className="text-green-700">Excellent performance! You have a strong understanding of {selectedTopic?.name}. Try more challenging topics to further improve.</p>
              ) : results.score >= 60 ? (
                <p className="text-blue-700">Good performance! Review the questions you got wrong and practice similar topics to strengthen your knowledge.</p>
              ) : (
                <p className="text-red-700">Focus on studying {selectedTopic?.name} more thoroughly. Review the fundamentals and practice more questions.</p>
              )}
            </div>
          </CardContent>
        </Card>

        <div className="text-center space-x-4">
          <Button onClick={() => {
            setShowAnalysis(false);
            setSelectedTopic(null);
          }} size="lg">
            Try Another Topic
          </Button>
          <Button onClick={() => {
            setShowAnalysis(false);
            setSelectedTopic(null);
            setSelectedSubject(null);
          }} variant="outline" size="lg">
            Choose Different Subject
          </Button>
        </div>
      </div>
    );
  }

  // Quiz Taking View
  if (selectedTopic) {
    const question = selectedTopic.questions[currentQuestion];
    
    return (
      <div className="space-y-8">
        <div className="flex items-center gap-2 mb-4">
          <Button variant="ghost" size="sm" onClick={() => setSelectedTopic(null)}>
            <ArrowLeft size={16} />
            Back to Topics
          </Button>
          <ChevronRight size={16} className="text-gray-400" />
          <span className="text-sm text-gray-600">{selectedSubject?.name}</span>
          <ChevronRight size={16} className="text-gray-400" />
          <span className="text-sm font-medium">{selectedTopic.name}</span>
        </div>

        <Card>
          <CardHeader>
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-bold">Question {currentQuestion + 1} of {selectedTopic.questions.length}</h3>
              <div className="flex items-center gap-2">
                <Clock size={20} />
                <span className="font-mono text-lg">{Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}</span>
              </div>
            </div>
            <Progress value={((currentQuestion + 1) / selectedTopic.questions.length) * 100} className="h-3" />
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <Badge className="mb-4 text-sm px-3 py-1">{selectedTopic.name}</Badge>
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
                {currentQuestion === selectedTopic.questions.length - 1 ? "Finish Quiz" : "Next Question"}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  // Topic Selection View
  if (selectedSubject) {
    return (
      <div className="space-y-8">
        <div className="flex items-center gap-2 mb-4">
          <Button variant="ghost" size="sm" onClick={() => setSelectedSubject(null)}>
            <ArrowLeft size={16} />
            Back to Subjects
          </Button>
          <ChevronRight size={16} className="text-gray-400" />
          <span className="text-lg font-medium">{selectedSubject.name}</span>
        </div>

        <div className="text-center">
          <div className="text-4xl mb-4">{selectedSubject.icon}</div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{selectedSubject.name}</h2>
          <p className="text-lg text-gray-600 mb-6">{selectedSubject.description}</p>
          <div className="flex justify-center gap-4 mb-8">
            <Badge variant="outline" className="text-sm px-3 py-1">
              {selectedSubject.topics.length} Topics
            </Badge>
            <Badge variant="outline" className="text-sm px-3 py-1">
              {selectedSubject.totalQuestions} Questions
            </Badge>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {selectedSubject.topics.map((topic, index) => (
            <Card key={topic.id} className="hover:shadow-xl transition-all duration-300 border-2 hover:border-blue-200">
              <CardHeader>
                <CardTitle className="text-lg flex items-center justify-between">
                  {topic.name}
                  <Badge variant={topic.difficulty === "Hard" ? "destructive" : topic.difficulty === "Medium" ? "default" : "secondary"}>
                    {topic.difficulty}
                  </Badge>
                </CardTitle>
                <p className="text-sm text-gray-600">{topic.description}</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <Target size={16} className="text-blue-500" />
                    <span>{topic.questions.length} Questions</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={16} className="text-green-500" />
                    <span>{topic.estimatedTime} min</span>
                  </div>
                </div>

                <Button 
                  className="w-full" 
                  size="lg"
                  onClick={() => startTopicQuiz(topic)}
                >
                  Start Quiz
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    );
  }

  // Subject Selection View (Main View)
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Subject-wise Quiz Practice</h2>
        <p className="text-lg text-gray-600 mb-6">Choose a subject to practice. Each subject has 10 topics with 50 questions each.</p>
        
        <div className="flex justify-center gap-4 mb-8">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <BookOpen size={16} />
            <span>{subjects.length} Subjects Available</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Target size={16} />
            <span>{subjects.reduce((acc, s) => acc + s.totalQuestions, 0)} Total Questions</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Users size={16} />
            <span>Difficulty Levels: Easy, Medium, Hard</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {subjects.map((subject) => (
          <Card key={subject.id} className="hover:shadow-xl transition-all duration-300 border-2 hover:border-blue-200 cursor-pointer"
                onClick={() => setSelectedSubject(subject)}>
            <CardHeader>
              <div className="text-center">
                <div className="text-4xl mb-3">{subject.icon}</div>
                <CardTitle className="text-xl">{subject.name}</CardTitle>
                <p className="text-sm text-gray-600 mt-2">{subject.description}</p>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">{subject.topics.length}</div>
                  <div className="text-xs text-gray-600">Topics</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">{subject.totalQuestions}</div>
                  <div className="text-xs text-gray-600">Questions</div>
                </div>
              </div>
              
              <div className="flex justify-center">
                <Badge className={`${subject.color} text-white`}>
                  {subject.category.charAt(0).toUpperCase() + subject.category.slice(1)}
                </Badge>
              </div>

              <Button className="w-full" size="lg">
                Explore Topics
                <ChevronRight size={16} className="ml-2" />
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Features */}
      <Card className="bg-gradient-to-r from-indigo-50 to-blue-50">
        <CardContent className="p-8">
          <h3 className="text-xl font-bold text-center mb-6">Enhanced Learning Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <Clock className="mx-auto mb-3 text-blue-500" size={40} />
              <h4 className="font-semibold mb-2">Timed Practice</h4>
              <p className="text-sm text-gray-600">Practice with time limits to improve speed</p>
            </div>
            <div className="text-center">
              <Target className="mx-auto mb-3 text-green-500" size={40} />
              <h4 className="font-semibold mb-2">Topic Mastery</h4>
              <p className="text-sm text-gray-600">Focus on specific topics to build expertise</p>
            </div>
            <div className="text-center">
              <Award className="mx-auto mb-3 text-purple-500" size={40} />
              <h4 className="font-semibold mb-2">Performance Tracking</h4>
              <p className="text-sm text-gray-600">Track your progress across all subjects</p>
            </div>
            <div className="text-center">
              <TrendingUp className="mx-auto mb-3 text-orange-500" size={40} />
              <h4 className="font-semibold mb-2">Detailed Analysis</h4>
              <p className="text-sm text-gray-600">Get insights into your strengths and weaknesses</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TestSection;