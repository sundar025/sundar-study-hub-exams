
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Home, Trophy, FileText, User } from "lucide-react";
import ExamSection from "@/components/ExamSection";
import AchievementSection from "@/components/AchievementSection";
import TestSection from "@/components/TestSection";
import ProfileSection from "@/components/ProfileSection";

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");

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
      default:
        return <ExamSection />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Header */}
      <header className="bg-white shadow-lg border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="text-center">
              <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Sundar Study Hub
              </h1>
              <p className="text-lg text-gray-600 mt-2 italic font-medium">
                "Perithinum Perithu Kel"
              </p>
            </div>
            
            {/* Navigation */}
            <nav className="flex space-x-2">
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
                variant={activeSection === "profile" ? "default" : "outline"}
                onClick={() => setActiveSection("profile")}
                className="flex items-center gap-2 px-6 py-3"
              >
                <User size={20} />
                Profile
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {renderActiveSection()}
      </main>
    </div>
  );
};

export default Index;
