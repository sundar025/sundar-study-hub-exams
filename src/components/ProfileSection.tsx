
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { User, GraduationCap, Calendar, Bell, ExternalLink, FileText } from "lucide-react";
import ProfileEditModal from "./ProfileEditModal";
import ExamAlertModal from "./ExamAlertModal";
import ExamCalendarModal from "./ExamCalendarModal";

const ProfileSection = () => {
  const [profileEditOpen, setProfileEditOpen] = useState(false);
  const [examAlertOpen, setExamAlertOpen] = useState(false);
  const [examCalendarOpen, setExamCalendarOpen] = useState(false);
  const [userProfile, setUserProfile] = useState({
    name: "Raj Kumar",
    bio: "Passionate government job aspirant with strong analytical skills and dedication towards public service. Focused on clearing competitive exams and contributing to nation building.",
    qualification: "B.E Computer Science",
    experience: "2 years in IT Industry",
    location: "Chennai, Tamil Nadu"
  });

  const eligibleExams = {
    state: [
      "TNPSC Group 1", "TNPSC Group 2", "TNPSC Group 4", "TNUSRB SI"
    ],
    central: [
      "UPSC Civil Services", "UPSC Assistant Commandant", "SSC GD", "SSC CGL", 
      "SSC CHSL", "SSC MTS", "CAPF SI", "NDA", "CDS"
    ]
  };

  const recentNews = [
    {
      title: "UPSC Civil Services Mains 2024 Results Declared",
      date: "2024-06-20",
      source: "UPSC Official",
      link: "#",
      type: "Result",
      category: "Central"
    },
    {
      title: "TNPSC Group 1 Notification 2024 Released - 1000+ Posts",
      date: "2024-06-18",
      source: "TNPSC Official",
      link: "#",
      type: "Important",
      category: "State"
    },
    {
      title: "SSC CGL 2024 Tier 1 Exam Schedule Announced",
      date: "2024-06-15",
      source: "SSC Official",
      link: "#",
      type: "Schedule",
      category: "Central"
    },
    {
      title: "TNUSRB SI Recruitment 2024 - Physical Standards Updated",
      date: "2024-06-12",
      source: "TNUSRB Official",
      link: "#",
      type: "Updates",
      category: "State"
    },
    {
      title: "NDA 2024 (II) Online Application Started",
      date: "2024-06-10",
      source: "UPSC Official",
      link: "#",
      type: "Recruitment",
      category: "Central"
    },
    {
      title: "TNPSC Group 2 Mains Exam Pattern Changes 2024",
      date: "2024-06-08",
      source: "TNPSC Official",
      link: "#",
      type: "Updates",
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

  const handleProfileSave = (newProfile: any) => {
    setUserProfile(newProfile);
    // Here you would typically save to backend
  };

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
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{userProfile.name}</h3>
              <div className="space-y-3 mb-4">
                <div className="flex items-center gap-2">
                  <GraduationCap className="text-blue-500" size={20} />
                  <span className="text-gray-700">{userProfile.qualification}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FileText className="text-green-500" size={20} />
                  <span className="text-gray-700">{userProfile.experience}</span>
                </div>
                <div className="flex items-center gap-2">
                  <User className="text-purple-500" size={20} />
                  <span className="text-gray-700">{userProfile.location}</span>
                </div>
              </div>
              <div className="mb-4">
                <h4 className="font-semibold text-gray-900 mb-2">Bio</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{userProfile.bio}</p>
              </div>
              <Button variant="outline">Edit Profile</Button>
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
            <p className="text-gray-600 mb-4 text-sm">
              Based on your qualification, you are eligible for:
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
            <p className="text-gray-600 mb-4 text-sm">
              Based on your qualification, you are eligible for:
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
