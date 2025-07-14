
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home, Trophy, FileText, User, LogOut, Award } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import ExamSection from "@/components/ExamSection";
import AchievementSection from "@/components/AchievementSection";
import TestSection from "@/components/TestSection";
import ProfileSection from "@/components/ProfileSection";
import CertificateSection from "@/components/CertificateSection";

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");
  const { user, loading, signOut } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !user) {
      navigate('/auth');
    }
  }, [user, loading, navigate]);

  const handleSignOut = async () => {
    await signOut();
    navigate('/auth');
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary mx-auto"></div>
          <p className="mt-4 text-lg text-muted-foreground">Loading...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  const renderActiveSection = () => {
    switch (activeSection) {
      case "home":
        return <ExamSection />;
      case "achievement":
        return <AchievementSection />;
      case "test":
        return <TestSection />;
      case "certificates":
        return <CertificateSection />;
      case "profile":
        return <ProfileSection />;
      default:
        return <ExamSection />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-lg border-b border-gray-200 text-center py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex-1">
              <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                Competitive Exam Study Hub
              </h1>
              <p className="text-2xl text-gray-700 font-semibold">
                பெரிதினும் பெரிது கேள்
              </p>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground">
                Welcome, {user.email}
              </span>
              <Button variant="outline" size="sm" onClick={handleSignOut}>
                <LogOut className="h-4 w-4 mr-2" />
                Sign Out
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
        {renderActiveSection()}
      </main>

      {/* Bottom Navigation */}
      <nav className="bg-white shadow-lg border-t border-gray-200 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center space-x-4">
            <Button
              variant={activeSection === "home" ? "default" : "outline"}
              onClick={() => setActiveSection("home")}
              className="flex items-center gap-2 px-6 py-3"
            >
              <Home size={20} />
              Home
            </Button>
            <Button
              variant={activeSection === "achievement" ? "default" : "outline"}
              onClick={() => setActiveSection("achievement")}
              className="flex items-center gap-2 px-6 py-3"
            >
              <Trophy size={20} />
              Achievement
            </Button>
            <Button
              variant={activeSection === "test" ? "default" : "outline"}
              onClick={() => setActiveSection("test")}
              className="flex items-center gap-2 px-6 py-3"
            >
              <FileText size={20} />
              Test
            </Button>
            <Button
              variant={activeSection === "certificates" ? "default" : "outline"}
              onClick={() => setActiveSection("certificates")}
              className="flex items-center gap-2 px-6 py-3"
            >
              <Award size={20} />
              Certificates
            </Button>
            <Button
              variant={activeSection === "profile" ? "default" : "outline"}
              onClick={() => setActiveSection("profile")}
              className="flex items-center gap-2 px-6 py-3"
            >
              <User size={20} />
              Profile
            </Button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Index;
