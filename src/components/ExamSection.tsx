import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { BookOpen, Clock, Users, Award, Play, FileText, Activity, Save } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import StudyMaterialSection from "./StudyMaterialSection";

const ExamSection = () => {
  const { user } = useAuth();
  const [selectedCategory, setSelectedCategory] = useState("state");
  const [selectedExam, setSelectedExam] = useState<string | null>(null);
  const [showPhysicalTest, setShowPhysicalTest] = useState(false);
  const [showStudyMaterial, setShowStudyMaterial] = useState(false);
  const [physicalTestData, setPhysicalTestData] = useState({
    height: "",
    chest: "",
    runningTime: "",
    longJumpDistance: "",
    notes: ""
  });
  const { toast } = useToast();

  // Load saved physical test data on component mount
  useEffect(() => {
    loadPhysicalTestData();
  }, [user]);

  const loadPhysicalTestData = async () => {
    if (!user) return;
    
    try {
      const { data, error } = await supabase
        .from('physical_tests')
        .select('*')
        .eq('user_id', user.id)
        .eq('test_type', 'TNUSRB SI')
        .order('created_at', { ascending: false })
        .limit(1)
        .maybeSingle();

      if (error && error.code !== 'PGRST116') {
        console.error('Error loading physical test data:', error);
        return;
      }

      if (data) {
        setPhysicalTestData({
          height: data.height_cm?.toString() || "",
          chest: data.chest_normal_cm?.toString() || "",
          runningTime: data.running_time_seconds?.toString() || "",
          longJumpDistance: data.long_jump_meters?.toString() || "",
          notes: data.notes || ""
        });
      }
    } catch (error) {
      console.error('Error loading physical test data:', error);
    }
  };

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

  const physicalTestRequirements = {
    height: {
      men: "170 cm minimum",
      women: "160 cm minimum"
    },
    chest: {
      men: "81 cm minimum (86 cm expanded)",
      women: "79 cm minimum"
    },
    running: {
      men: "1600m in 5 minutes 30 seconds",
      women: "1600m in 6 minutes 30 seconds"
    },
    longJump: {
      men: "4.20 meters minimum",
      women: "3.50 meters minimum"
    }
  };

  const savePhysicalTestData = async () => {
    if (!user) {
      toast({
        title: "Error",
        description: "Please log in to save your test data.",
        variant: "destructive",
      });
      return;
    }

    try {
      const { error } = await supabase
        .from('physical_tests')
        .insert({
          user_id: user.id,
          test_type: 'TNUSRB SI Physical Test',
          height_cm: parseInt(physicalTestData.height) || null,
          chest_normal_cm: parseInt(physicalTestData.chest) || null,
          running_time_seconds: physicalTestData.runningTime ? parseInt(physicalTestData.runningTime) * 60 : null,
          long_jump_meters: parseFloat(physicalTestData.longJumpDistance) || null
        });

      if (error) {
        throw error;
      }

      toast({
        title: "Success!",
        description: "Physical test data saved successfully to database.",
      });
    } catch (error) {
      console.error('Error saving physical test data:', error);
      toast({
        title: "Error",
        description: "Failed to save physical test data.",
        variant: "destructive",
      });
    }
  };

  const currentExams = selectedCategory === "state" ? stateExams : centralExams;

  if (showStudyMaterial && selectedExam) {
    return (
      <StudyMaterialSection 
        examName={selectedExam}
        onBack={() => setShowStudyMaterial(false)}
      />
    );
  }

  if (showPhysicalTest) {
    return (
      <div className="space-y-8">
        <div className="flex items-center gap-4 mb-6">
          <Button onClick={() => setShowPhysicalTest(false)} variant="outline">
            ← Back to Exams
          </Button>
          <h2 className="text-3xl font-bold text-gray-900">TNUSRB SI - Physical Test Requirements</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Requirements Section */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Activity className="text-blue-500" />
                Physical Test Standards
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-semibold text-lg mb-3">Height Requirements</h4>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="font-medium">Men: {physicalTestRequirements.height.men}</p>
                  <p className="font-medium">Women: {physicalTestRequirements.height.women}</p>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-lg mb-3">Chest Measurements</h4>
                <div className="bg-green-50 p-4 rounded-lg">
                  <p className="font-medium">Men: {physicalTestRequirements.chest.men}</p>
                  <p className="font-medium">Women: {physicalTestRequirements.chest.women}</p>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-lg mb-3">Running Test</h4>
                <div className="bg-orange-50 p-4 rounded-lg">
                  <p className="font-medium">Men: {physicalTestRequirements.running.men}</p>
                  <p className="font-medium">Women: {physicalTestRequirements.running.women}</p>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-lg mb-3">Long Jump</h4>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <p className="font-medium">Men: {physicalTestRequirements.longJump.men}</p>
                  <p className="font-medium">Women: {physicalTestRequirements.longJump.women}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Personal Tracking Section */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Save className="text-green-500" />
                Track Your Progress
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="height">Your Height (cm)</Label>
                <Input
                  id="height"
                  type="number"
                  placeholder="Enter your height"
                  value={physicalTestData.height}
                  onChange={(e) => setPhysicalTestData(prev => ({...prev, height: e.target.value}))}
                />
              </div>

              <div>
                <Label htmlFor="chest">Chest Measurement (cm)</Label>
                <Input
                  id="chest"
                  type="number"
                  placeholder="Enter chest measurement"
                  value={physicalTestData.chest}
                  onChange={(e) => setPhysicalTestData(prev => ({...prev, chest: e.target.value}))}
                />
              </div>

              <div>
                <Label htmlFor="running">1600m Running Time (mm:ss)</Label>
                <Input
                  id="running"
                  type="text"
                  placeholder="e.g., 05:20"
                  value={physicalTestData.runningTime}
                  onChange={(e) => setPhysicalTestData(prev => ({...prev, runningTime: e.target.value}))}
                />
              </div>

              <div>
                <Label htmlFor="longjump">Long Jump Distance (meters)</Label>
                <Input
                  id="longjump"
                  type="number"
                  step="0.01"
                  placeholder="Enter distance in meters"
                  value={physicalTestData.longJumpDistance}
                  onChange={(e) => setPhysicalTestData(prev => ({...prev, longJumpDistance: e.target.value}))}
                />
              </div>

              <div>
                <Label htmlFor="notes">Personal Notes & Improvement Areas</Label>
                <textarea
                  id="notes"
                  className="w-full p-3 border rounded-lg min-h-[100px]"
                  placeholder="Note down your improvements, training schedule, areas to focus on..."
                  value={physicalTestData.notes}
                  onChange={(e) => setPhysicalTestData(prev => ({...prev, notes: e.target.value}))}
                />
              </div>

              <Button onClick={savePhysicalTestData} className="w-full">
                <Save className="mr-2" size={20} />
                Save My Progress
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Tips Section */}
        <Card className="bg-gradient-to-r from-blue-500 to-purple-500 text-white">
          <CardContent className="p-6">
            <h3 className="text-xl font-bold mb-4">Training Tips</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold mb-2">Running Improvement</h4>
                <ul className="text-sm opacity-90 space-y-1">
                  <li>• Start with 20-30 minutes daily jogging</li>
                  <li>• Gradually increase pace and distance</li>
                  <li>• Focus on breathing techniques</li>
                  <li>• Track your time improvements weekly</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Long Jump Training</h4>
                <ul className="text-sm opacity-90 space-y-1">
                  <li>• Practice approach run consistency</li>
                  <li>• Work on leg strength exercises</li>
                  <li>• Focus on takeoff technique</li>
                  <li>• Record each jump distance</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
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
              
              <div className="space-y-2">
                <Button 
                  className="w-full" 
                  size="lg"
                  onClick={() => {
                    setSelectedExam(exam.name);
                    setShowStudyMaterial(true);
                  }}
                >
                  Start Preparation
                </Button>
                {exam.name === "TNUSRB SI" && (
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={() => {
                      setSelectedExam(exam.name);
                      setShowPhysicalTest(true);
                    }}
                  >
                    <Activity className="mr-2" size={16} />
                    Physical Test Info
                  </Button>
                )}
              </div>
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
