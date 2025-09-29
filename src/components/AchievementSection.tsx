import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Circle, Download, Trophy, Award, Star } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";

const AchievementSection = () => {
  const { user } = useAuth();
  const { toast } = useToast();
  const [selectedCategory, setSelectedCategory] = useState("state");
  const [selectedExam, setSelectedExam] = useState("TNPSC Group 1");
  const [completedTopics, setCompletedTopics] = useState<{[key: string]: string[]}>({});
  const [profileName, setProfileName] = useState("Student");

  // Load user progress and profile on component mount and when exam changes
  useEffect(() => {
    loadUserProgress();
    loadUserProfile();
  }, [user, selectedExam]);

  const loadUserProgress = async () => {
    if (!user || !selectedExam) return;
    
    console.log('Loading progress for:', { user_id: user.id, subject_id: selectedExam });
    
    try {
      const { data, error } = await supabase
        .from('user_progress')
        .select('*')
        .eq('user_id', user.id)
        .eq('subject_id', selectedExam);

      console.log('Load result:', { data, error });

      if (error && error.code !== 'PGRST116') {
        console.error('Error loading user progress:', error);
        return;
      }

      if (data && data.length > 0) {
        const progress = data[0];
        console.log('Found progress data:', progress);
        
        // Try to parse completed topics from topic_id field
        let completedTopics = [];
        try {
          if (progress.topic_id) {
            completedTopics = JSON.parse(progress.topic_id);
          } else {
            // Fallback: calculate from percentage
            const totalTopics = examSyllabus[selectedExam]?.length || 0;
            const completedCount = Math.round((progress.progress_percentage / 100) * totalTopics);
            const topics = examSyllabus[selectedExam] || [];
            completedTopics = topics.slice(0, completedCount);
          }
        } catch (parseError) {
          console.error('Error parsing completed topics:', parseError);
          // Fallback: calculate from percentage
          const totalTopics = examSyllabus[selectedExam]?.length || 0;
          const completedCount = Math.round((progress.progress_percentage / 100) * totalTopics);
          const topics = examSyllabus[selectedExam] || [];
          completedTopics = topics.slice(0, completedCount);
        }
        
        console.log('Setting completed topics:', completedTopics);
        setCompletedTopics(prev => ({
          ...prev,
          [selectedExam]: completedTopics
        }));
      } else {
        console.log('No progress data found, starting fresh');
        setCompletedTopics(prev => ({
          ...prev,
          [selectedExam]: []
        }));
      }
    } catch (error) {
      console.error('Error loading user progress:', error);
    }
  };

  const loadUserProfile = async () => {
    if (!user) return;
    
    try {
      const { data, error } = await supabase
        .from('profiles')
        .select('full_name')
        .eq('user_id', user.id)
        .single();

      if (error) {
        console.error('Error loading user profile:', error);
        return;
      }

      if (data?.full_name) {
        setProfileName(data.full_name.toUpperCase());
      } else {
        // Fallback to email username if no full name
        const emailUsername = user.email?.split('@')[0]?.toUpperCase() || "STUDENT";
        setProfileName(emailUsername);
      }
    } catch (error) {
      console.error('Error loading user profile:', error);
    }
  };

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

  const toggleTopic = async (topic: string) => {
    if (!user) return;
    
    const newCompletedTopics = {
      ...completedTopics,
      [selectedExam]: completedTopics[selectedExam]?.includes(topic) 
        ? completedTopics[selectedExam].filter(t => t !== topic)
        : [...(completedTopics[selectedExam] || []), topic]
    };
    
    setCompletedTopics(newCompletedTopics);
    
    try {
      // Calculate progress percentage
      const totalTopics = examSyllabus[selectedExam]?.length || 1;
      const completedCount = newCompletedTopics[selectedExam]?.length || 0;
      const progressPercentage = Math.round((completedCount / totalTopics) * 100);
      
      console.log('Saving progress:', {
        user_id: user.id,
        subject_id: selectedExam,
        progress_percentage: progressPercentage,
        completed_topics: newCompletedTopics[selectedExam]
      });
      
      // Save progress to database - store completed topics as JSON
      const { data, error } = await supabase
        .from('user_progress')
        .upsert({
          user_id: user.id,
          subject_id: selectedExam,
          progress_percentage: progressPercentage,
          completed_at: progressPercentage === 100 ? new Date().toISOString() : null,
          // Store the actual completed topics list in a field we can use
          topic_id: JSON.stringify(newCompletedTopics[selectedExam] || [])
        }, {
          onConflict: 'user_id,subject_id'
        });

      console.log('Save result:', { data, error });

      if (error) {
        console.error('Error saving progress:', error);
        toast({
          title: "Error",
          description: `Failed to save progress: ${error.message}`,
          variant: "destructive",
        });
      } else {
        console.log('Progress saved successfully');
        toast({
          title: "Progress Saved",
          description: "Your study progress has been saved successfully.",
        });
      }
    } catch (error) {
      console.error('Error saving progress:', error);
      toast({
        title: "Error",
        description: "An unexpected error occurred while saving progress.",
        variant: "destructive",
      });
    }
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

      {/* Enhanced Certificate Section */}
      {isCompleted && (
        <Card className="bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 border-2 border-amber-200 shadow-2xl">
          <CardContent className="p-0">
            {/* Certificate Design */}
            <div className="bg-white m-4 p-8 rounded-lg border-4 border-double border-amber-600 shadow-lg">
              {/* Certificate Header */}
              <div className="text-center mb-8">
                <div className="flex justify-center items-center gap-4 mb-4">
                  <Award className="text-amber-600 w-12 h-12" />
                  <Trophy className="text-amber-500 w-16 h-16" />
                  <Award className="text-amber-600 w-12 h-12" />
                </div>
                <h2 className="text-4xl font-bold text-amber-800 mb-2">CERTIFICATE OF COMPLETION</h2>
                <div className="w-32 h-1 bg-amber-600 mx-auto rounded"></div>
              </div>

              {/* Certificate Body */}
              <div className="text-center mb-8">
                <p className="text-lg text-gray-700 mb-4">This is to certify that</p>
                <div className="bg-amber-50 border-2 border-amber-300 rounded-lg p-4 mb-4">
                  <h3 className="text-3xl font-bold text-amber-900">{profileName}</h3>
                </div>
                <p className="text-lg text-gray-700 mb-4">has successfully completed the comprehensive syllabus for</p>
                <div className="bg-blue-50 border-2 border-blue-300 rounded-lg p-4 mb-6">
                  <h4 className="text-2xl font-bold text-blue-800">{selectedExam}</h4>
                  <p className="text-blue-600">Government Exam Preparation Course</p>
                </div>
                
                <div className="flex justify-center items-center gap-8 mb-6">
                  <Star className="text-amber-500 w-8 h-8" />
                  <div className="text-center">
                    <p className="text-sm text-gray-600">Completion Rate</p>
                    <p className="text-2xl font-bold text-green-600">100%</p>
                  </div>
                  <Star className="text-amber-500 w-8 h-8" />
                </div>

                <p className="text-gray-600 mb-8">
                  Awarded on {new Date().toLocaleDateString('en-IN', { 
                    day: 'numeric', 
                    month: 'long', 
                    year: 'numeric' 
                  })}
                </p>
              </div>

              {/* Certificate Footer */}
              <div className="flex justify-between items-end">
                <div className="text-left">
                  <div className="w-48 border-b-2 border-gray-400 mb-2"></div>
                  <p className="text-sm text-gray-600">Date of Issue</p>
                  <p className="font-medium">{new Date().toLocaleDateString()}</p>
                </div>
                
                <div className="text-center">
                  <div className="mb-4">
                    <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                      SEAL
                    </div>
                  </div>
                </div>

                <div className="text-right">
                  <div className="mb-4">
                    {/* Realistic Signature */}
                    <div className="w-48 h-16 bg-gradient-to-r from-blue-800 to-indigo-800 rounded-lg flex items-center justify-center mb-2 shadow-md">
                      <span className="text-white font-bold text-xl transform -rotate-12">Sundar</span>
                    </div>
                  </div>
                  <div className="w-48 border-b-2 border-gray-400 mb-2"></div>
                  <p className="text-sm text-gray-600">Authorized Signature</p>
                  <p className="font-bold text-blue-800">SUNDAR</p>
                  <p className="text-sm text-gray-600">Founder & Director</p>
                  <p className="text-xs text-gray-500">Competitive Exam Study Hub</p>
                </div>
              </div>

              {/* Decorative Border Elements */}
              <div className="absolute top-4 left-4 w-8 h-8 border-l-4 border-t-4 border-amber-600 rounded-tl-lg"></div>
              <div className="absolute top-4 right-4 w-8 h-8 border-r-4 border-t-4 border-amber-600 rounded-tr-lg"></div>
              <div className="absolute bottom-4 left-4 w-8 h-8 border-l-4 border-b-4 border-amber-600 rounded-bl-lg"></div>
              <div className="absolute bottom-4 right-4 w-8 h-8 border-r-4 border-b-4 border-amber-600 rounded-br-lg"></div>
            </div>

            {/* Download Button */}
            <div className="text-center p-6">
              <Button onClick={downloadCertificate} size="lg" className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 text-lg shadow-lg">
                <Download className="mr-3" size={24} />
                Download Official Certificate
              </Button>
              <p className="text-sm text-gray-600 mt-2">High-resolution PDF will be generated</p>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default AchievementSection;
