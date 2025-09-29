
import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { User, GraduationCap, Calendar, Bell, ExternalLink, FileText, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import ProfileEditModal from "./ProfileEditModal";
import ExamAlertModal from "./ExamAlertModal";
import ExamCalendarModal from "./ExamCalendarModal";
import StudyDashboard from "./StudyDashboard";

const ProfileSection = () => {
  const { user } = useAuth();
  const { toast } = useToast();
  const [profileEditOpen, setProfileEditOpen] = useState(false);
  const [examAlertOpen, setExamAlertOpen] = useState(false);
  const [examCalendarOpen, setExamCalendarOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [userProfile, setUserProfile] = useState({
    name: "",
    bio: "",
    qualification: "",
    experience: "",
    location: "",
    phone: "",
    email: ""
  });

  // Exam eligibility based on qualification
  const getEligibleExams = (qualification: string) => {
    const examsByQualification = {
      "10th": {
        state: ["TNPSC Group 4"],
        central: ["SSC GD", "SSC MTS"]
      },
      "12th": {
        state: ["TNPSC Group 4", "TNUSRB SI"],
        central: ["SSC GD", "SSC CGL", "SSC CHSL", "SSC MTS", "CAPF SI", "NDA", "CDS"]
      },
      "B.E Computer Science": {
        state: ["TNPSC Group 1", "TNPSC Group 2", "TNPSC Group 4", "TNUSRB SI"],
        central: ["UPSC Civil Services", "UPSC Assistant Commandant", "SSC GD", "SSC CGL", "SSC CHSL", "SSC MTS", "CAPF SI", "NDA", "CDS"]
      },
      "B.Tech": {
        state: ["TNPSC Group 1", "TNPSC Group 2", "TNPSC Group 4", "TNUSRB SI"],
        central: ["UPSC Civil Services", "UPSC Assistant Commandant", "SSC GD", "SSC CGL", "SSC CHSL", "SSC MTS", "CAPF SI", "NDA", "CDS"]
      },
      "B.Sc": {
        state: ["TNPSC Group 2", "TNPSC Group 4", "TNUSRB SI"],
        central: ["SSC GD", "SSC CGL", "SSC CHSL", "SSC MTS", "CAPF SI"]
      },
      "B.Com": {
        state: ["TNPSC Group 2", "TNPSC Group 4"],
        central: ["SSC GD", "SSC CGL", "SSC CHSL", "SSC MTS"]
      },
      "B.A": {
        state: ["TNPSC Group 2", "TNPSC Group 4"],
        central: ["SSC GD", "SSC CGL", "SSC CHSL", "SSC MTS"]
      },
      "M.E": {
        state: ["TNPSC Group 1", "TNPSC Group 2", "TNPSC Group 4", "TNUSRB SI"],
        central: ["UPSC Civil Services", "UPSC Assistant Commandant", "SSC GD", "SSC CGL", "SSC CHSL", "SSC MTS", "CAPF SI", "NDA", "CDS"]
      },
      "M.Tech": {
        state: ["TNPSC Group 1", "TNPSC Group 2", "TNPSC Group 4", "TNUSRB SI"],
        central: ["UPSC Civil Services", "UPSC Assistant Commandant", "SSC GD", "SSC CGL", "SSC CHSL", "SSC MTS", "CAPF SI", "NDA", "CDS"]
      },
      "M.Sc": {
        state: ["TNPSC Group 1", "TNPSC Group 2", "TNPSC Group 4", "TNUSRB SI"],
        central: ["UPSC Civil Services", "SSC GD", "SSC CGL", "SSC CHSL", "SSC MTS", "CAPF SI"]
      },
      "M.Com": {
        state: ["TNPSC Group 1", "TNPSC Group 2", "TNPSC Group 4"],
        central: ["UPSC Civil Services", "SSC GD", "SSC CGL", "SSC CHSL", "SSC MTS"]
      },
      "M.A": {
        state: ["TNPSC Group 1", "TNPSC Group 2", "TNPSC Group 4"],
        central: ["UPSC Civil Services", "SSC GD", "SSC CGL", "SSC CHSL", "SSC MTS"]
      },
      "MBA": {
        state: ["TNPSC Group 1", "TNPSC Group 2"],
        central: ["UPSC Civil Services", "SSC CGL", "SSC CHSL"]
      },
      "PhD": {
        state: ["TNPSC Group 1"],
        central: ["UPSC Civil Services"]
      }
    };
    
    return examsByQualification[qualification as keyof typeof examsByQualification] || { state: [], central: [] };
  };

  const eligibleExams = getEligibleExams(userProfile.qualification);

  const recentNews = [
    {
      title: "UPSC IFS Mains 2025 Schedule Released - November 11-23",
      date: "2025-09-29",
      source: "UPSC Official",
      link: "https://upsc.gov.in/whats-new/Civil%20Services%20%28Preliminary%29%20Examination%2C%202025",
      type: "Schedule",
      category: "Central"
    },
    {
      title: "TNPSC Group 4 Results 2025 Expected Soon - 3935 Posts",
      date: "2025-09-28",
      source: "TNPSC Official",
      link: "https://tnpsc.gov.in/english/latest_results.aspx",
      type: "Result",
      category: "State"
    },
    {
      title: "TNPSC CTS Registration 2025 Open - 1794 Posts Available",
      date: "2025-09-25",
      source: "TNPSC Official",
      link: "https://www.tnpsc.gov.in/english/notification.aspx",
      type: "Recruitment",
      category: "State"
    },
    {
      title: "UPSC Recruitment 2025 - 84 Lecturer Posts, Apply Now",
      date: "2025-09-24",
      source: "UPSC Official",
      link: "https://upsc.gov.in/exams-related-info/exam-notification",
      type: "Recruitment",
      category: "Central"
    },
    {
      title: "UPSC CAPF AC Examination 2025 - Applications Open",
      date: "2025-03-05",
      source: "UPSC Official",
      link: "https://upsc.gov.in/exams-related-info/exam-notification",
      type: "Important",
      category: "Central"
    },
    {
      title: "TNPSC Combined Technical Services Exam Results - Multiple Posts",
      date: "2025-02-21",
      source: "TNPSC Official",
      link: "https://tnpsc.gov.in/english/answerkeys.aspx",
      type: "Result",
      category: "State"
    }
  ];

  const getNewsBadgeColor = (type: string) => {
    switch (type) {
      case "Important": return "bg-red-100 text-red-800";
      case "Result": return "bg-green-100 text-green-800";
      case "Recruitment": return "bg-blue-100 text-blue-800";
      case "Schedule": return "bg-purple-100 text-purple-800";
      case "Updates": return "bg-orange-100 text-orange-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getCategoryBadgeColor = (category: string) => {
    return category === "Central" ? "bg-indigo-100 text-indigo-800" : "bg-emerald-100 text-emerald-800";
  };

  // Load user profile data
  useEffect(() => {
    if (user) {
      loadUserProfile();
    }
  }, [user]);

  const loadUserProfile = async () => {
    if (!user) return;
    
    try {
      const { data: profile, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('user_id', user.id)
        .single();

      if (error) {
        console.error('Error loading profile:', error);
        // If no profile exists, create one with user's name from auth
        const newProfile = {
          user_id: user.id,
          full_name: user.user_metadata?.full_name || user.email?.split('@')[0] || '',
          email: user.email || '',
          bio: '',
          qualification: '',
          experience: '',
          location: '',
          phone: ''
        };
        
        const { error: insertError } = await supabase
          .from('profiles')
          .insert(newProfile);
          
        if (!insertError) {
          setUserProfile({
            name: newProfile.full_name,
            email: newProfile.email,
            bio: '',
            qualification: '',
            experience: '',
            location: '',
            phone: ''
          });
        }
      } else if (profile) {
        setUserProfile({
          name: profile.full_name || '',
          email: profile.email || '',
          bio: profile.bio || '',
          qualification: profile.qualification || '',
          experience: profile.experience || '',
          location: profile.location || '',
          phone: profile.phone || ''
        });
      }
    } catch (error) {
      console.error('Error loading profile:', error);
      toast({
        title: "Error",
        description: "Failed to load profile data",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleProfileSave = async (newProfile: any) => {
    if (!user) return;
    
    try {
      const { error } = await supabase
        .from('profiles')
        .update({
          full_name: newProfile.name,
          bio: newProfile.bio,
          qualification: newProfile.qualification,
          experience: newProfile.experience,
          location: newProfile.location,
          phone: newProfile.phone
        })
        .eq('user_id', user.id);

      if (error) {
        throw error;
      }

      setUserProfile(newProfile);
      toast({
        title: "Success",
        description: "Profile updated successfully",
      });
    } catch (error) {
      console.error('Error saving profile:', error);
      toast({
        title: "Error",
        description: "Failed to save profile",
        variant: "destructive",
      });
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">User Profile</h2>
        <p className="text-lg text-gray-600">Your academic profile and exam eligibility</p>
      </div>

      {/* User Profile Card */}
      <Card className="bg-gradient-to-r from-blue-50 to-indigo-50">
        <CardContent className="p-8">
          <div className="flex items-start gap-6">
            <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
              <User className="text-white" size={40} />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {userProfile.name || "Please update your profile"}
              </h3>
              <div className="space-y-3 mb-4">
                {userProfile.qualification && (
                  <div className="flex items-center gap-2">
                    <GraduationCap className="text-blue-500" size={20} />
                    <span className="text-gray-700">{userProfile.qualification}</span>
                  </div>
                )}
                {userProfile.experience && (
                  <div className="flex items-center gap-2">
                    <FileText className="text-green-500" size={20} />
                    <span className="text-gray-700">{userProfile.experience}</span>
                  </div>
                )}
                {userProfile.location && (
                  <div className="flex items-center gap-2">
                    <User className="text-purple-500" size={20} />
                    <span className="text-gray-700">{userProfile.location}</span>
                  </div>
                )}
              </div>
              {userProfile.bio && (
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Bio</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{userProfile.bio}</p>
                </div>
              )}
              <Button variant="outline" onClick={() => setProfileEditOpen(true)}>
                Edit Profile
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Eligible Exams */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* State Government Exams */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Badge className="bg-emerald-500">State</Badge>
              State Government Exams
            </CardTitle>
          </CardHeader>
          <CardContent>
            {userProfile.qualification ? (
              <>
                <p className="text-gray-600 mb-4 text-sm">
                  Based on your qualification ({userProfile.qualification}), you are eligible for:
                </p>
                <div className="space-y-3">
                  {eligibleExams.state.map((exam, index) => (
                    <div key={index} className="p-3 border-2 border-emerald-200 bg-emerald-50 rounded-lg">
                      <div className="flex items-center justify-between">
                        <span className="font-medium text-emerald-800 text-sm">{exam}</span>
                        <Badge className="bg-emerald-500 text-xs">Eligible</Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <div className="text-center py-8">
                <GraduationCap className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                <p className="text-gray-500 mb-4">Please update your qualification to see eligible exams</p>
                <Button onClick={() => setProfileEditOpen(true)}>Update Profile</Button>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Central Government Exams */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Badge className="bg-indigo-500">Central</Badge>
              Central Government Exams
            </CardTitle>
          </CardHeader>
          <CardContent>
            {userProfile.qualification ? (
              <>
                <p className="text-gray-600 mb-4 text-sm">
                  Based on your qualification ({userProfile.qualification}), you are eligible for:
                </p>
                <div className="space-y-3">
                  {eligibleExams.central.map((exam, index) => (
                    <div key={index} className="p-3 border-2 border-indigo-200 bg-indigo-50 rounded-lg">
                      <div className="flex items-center justify-between">
                        <span className="font-medium text-indigo-800 text-sm">{exam}</span>
                        <Badge className="bg-indigo-500 text-xs">Eligible</Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <div className="text-center py-8">
                <GraduationCap className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                <p className="text-gray-500 mb-4">Please update your qualification to see eligible exams</p>
                <Button onClick={() => setProfileEditOpen(true)}>Update Profile</Button>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Recent News */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Bell className="text-orange-500" />
            Recent News & Updates
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentNews.map((news, index) => (
              <div key={index} className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between mb-2">
                  <h4 className="font-semibold text-gray-900 flex-1 pr-4">{news.title}</h4>
                  <div className="flex gap-2">
                    <Badge className={getCategoryBadgeColor(news.category)}>{news.category}</Badge>
                    <Badge className={getNewsBadgeColor(news.type)}>{news.type}</Badge>
                  </div>
                </div>
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      <span>{news.date}</span>
                    </div>
                    <span>Source: {news.source}</span>
                  </div>
                  <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-800">
                    <ExternalLink size={14} className="mr-1" />
                    Read More
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <Card className="bg-gradient-to-r from-purple-50 to-pink-50">
        <CardContent className="p-8">
          <h3 className="text-xl font-bold text-center mb-6">Quick Actions</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button 
              className="h-12" 
              variant="outline"
              onClick={() => setExamAlertOpen(true)}
            >
              <Bell className="mr-2" size={20} />
              Set Exam Alerts
            </Button>
            <Button 
              className="h-12" 
              variant="outline"
              onClick={() => setExamCalendarOpen(true)}
            >
              <Calendar className="mr-2" size={20} />
              View Exam Calendar
            </Button>
            <Button 
              className="h-12" 
              variant="outline"
              onClick={() => setProfileEditOpen(true)}
            >
              <GraduationCap className="mr-2" size={20} />
              Update Profile
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Study Progress Dashboard */}
      <StudyDashboard />

      {/* Modals */}
      <ProfileEditModal
        isOpen={profileEditOpen}
        onClose={() => setProfileEditOpen(false)}
        currentProfile={userProfile}
        onSave={handleProfileSave}
      />
      <ExamAlertModal
        isOpen={examAlertOpen}
        onClose={() => setExamAlertOpen(false)}
      />
      <ExamCalendarModal
        isOpen={examCalendarOpen}
        onClose={() => setExamCalendarOpen(false)}
      />
    </div>
  );
};

export default ProfileSection;
