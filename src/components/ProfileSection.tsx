
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { User, GraduationCap, Calendar, Bell, ExternalLink } from "lucide-react";

const ProfileSection = () => {
  const userProfile = {
    name: "Raj Kumar",
    qualification: "B.E Computer Science",
    eligibleExams: [
      "TNPSC Group 1",
      "TNPSC Group 2", 
      "TNPSC Group 4",
      "TNUSRB SI",
      "UPSC Civil Services"
    ]
  };

  const recentNews = [
    {
      title: "TNPSC Group 1 Notification 2024 Released",
      date: "2024-06-15",
      source: "TNPSC Official",
      link: "#",
      type: "Important"
    },
    {
      title: "UPSC Civil Services Prelims Result Declared",
      date: "2024-06-10",
      source: "UPSC Official",
      link: "#",
      type: "Result"
    },
    {
      title: "TNUSRB SI Recruitment 2024 - 1000 Posts",
      date: "2024-06-08",
      source: "TNUSRB Official",
      link: "#",
      type: "Recruitment"
    },
    {
      title: "TNPSC Group 2 Mains Exam Schedule Announced",
      date: "2024-06-05",
      source: "TNPSC Official",
      link: "#",
      type: "Schedule"
    },
    {
      title: "New Pattern Changes in UPSC Mains 2024",
      date: "2024-06-01",
      source: "UPSC Official",
      link: "#",
      type: "Updates"
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

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">User Profile</h2>
        <p className="text-lg text-gray-600">Your academic profile and exam eligibility</p>
      </div>

      {/* User Profile Card */}
      <Card className="bg-gradient-to-r from-blue-50 to-indigo-50">
        <CardContent className="p-8">
          <div className="flex items-center gap-6">
            <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
              <User className="text-white" size={40} />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{userProfile.name}</h3>
              <div className="flex items-center gap-2 mb-4">
                <GraduationCap className="text-blue-500" size={20} />
                <span className="text-lg text-gray-700">{userProfile.qualification}</span>
              </div>
              <Button variant="outline">Edit Profile</Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Eligible Exams */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <GraduationCap className="text-green-500" />
            Eligible Exams
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600 mb-4">
            Based on your qualification ({userProfile.qualification}), you are eligible for the following exams:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {userProfile.eligibleExams.map((exam, index) => (
              <div key={index} className="p-4 border-2 border-green-200 bg-green-50 rounded-lg">
                <div className="flex items-center justify-between">
                  <span className="font-medium text-green-800">{exam}</span>
                  <Badge className="bg-green-500">Eligible</Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

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
                  <Badge className={getNewsBadgeColor(news.type)}>{news.type}</Badge>
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
            <Button className="h-12" variant="outline">
              <Bell className="mr-2" size={20} />
              Set Exam Alerts
            </Button>
            <Button className="h-12" variant="outline">
              <Calendar className="mr-2" size={20} />
              View Exam Calendar
            </Button>
            <Button className="h-12" variant="outline">
              <GraduationCap className="mr-2" size={20} />
              Update Qualification
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProfileSection;
