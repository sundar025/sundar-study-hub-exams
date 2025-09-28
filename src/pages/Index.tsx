
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home, Trophy, FileText, User, LogOut, Settings } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import { useAdmin } from "@/hooks/useAdmin";
import ExamSection from "@/components/ExamSection";
import AchievementSection from "@/components/AchievementSection";
import TestSection from "@/components/TestSection";
import ProfileSection from "@/components/ProfileSection";
import AdminPanel from "@/components/AdminPanel";

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");
  const { user, loading, signOut } = useAuth();
  const { isAdmin } = useAdmin();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !user) {
      navigate('/auth');
    }
  }, [user, loading, navigate]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return null; // Will redirect to auth
  }

  const handleSignOut = async () => {
    await signOut();
    navigate('/auth');
  };

  const renderActiveSection = () => {
    switch (activeSection) {
      case "home":
        return <ExamSection />;
      case "achievement":
        return <AchievementSection />;
      case "test":
        return <TestSection />;
      case "profile":
        return <ProfileSection />;
      case "admin":
        return <AdminPanel />;
      default:
        return <ExamSection />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-lg border-b border-gray-200 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="text-center flex-1">
              <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-1">
                Competitive Exam Study Hub
              </h1>
              <p className="text-xl text-gray-700 font-semibold">
                பெரிதினும் பெரிது கேள்
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-right">
                <span className="text-sm text-gray-600">Welcome, {user.email}</span>
                {isAdmin && (
                  <div className="text-xs text-blue-600 font-semibold">
                    🔧 Admin Mode Active
                  </div>
                )}
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={handleSignOut}
                className="flex items-center gap-2"
              >
                <LogOut size={16} />
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
              className="flex items-center gap-2 px-8 py-3"
            >
              <Home size={20} />
              Home
            </Button>
            <Button
              variant={activeSection === "achievement" ? "default" : "outline"}
              onClick={() => setActiveSection("achievement")}
              className="flex items-center gap-2 px-8 py-3"
            >
              <Trophy size={20} />
              Achievement
            </Button>
            <Button
              variant={activeSection === "test" ? "default" : "outline"}
              onClick={() => setActiveSection("test")}
              className="flex items-center gap-2 px-8 py-3"
            >
              <FileText size={20} />
              Test
            </Button>
            <Button
              variant={activeSection === "profile" ? "default" : "outline"}
              onClick={() => setActiveSection("profile")}
              className="flex items-center gap-2 px-8 py-3"
            >
              <User size={20} />
              Profile
            </Button>
            {isAdmin && (
              <Button
                variant={activeSection === "admin" ? "default" : "outline"}
                onClick={() => setActiveSection("admin")}
                className="flex items-center gap-2 px-8 py-3"
              >
                <Settings size={20} />
                Admin
              </Button>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Index;
