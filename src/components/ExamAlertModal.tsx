
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { X, Bell, Mail, MessageSquare, Save } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";

interface ExamAlertModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ExamAlertModal = ({ isOpen, onClose }: ExamAlertModalProps) => {
  const { user } = useAuth();
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [selectedExams, setSelectedExams] = useState<string[]>([]);
  const [alertTypes, setAlertTypes] = useState<string[]>([]);

  const examsList = [
    "TNPSC Group 1", "TNPSC Group 2", "TNPSC Group 4", "TNUSRB SI",
    "UPSC Civil Services", "UPSC Assistant Commandant", "SSC CGL", "SSC CHSL",
    "SSC MTS", "SSC GD", "CAPF SI", "NDA", "CDS"
  ];

  const alertTypesList = [
    "New Notifications", "Application Deadlines", "Exam Dates", "Result Announcements",
    "Admit Card Release", "Syllabus Updates", "Cut-off Marks", "Interview Schedules"
  ];

  if (!isOpen) return null;

  const handleExamToggle = (exam: string) => {
    setSelectedExams(prev => 
      prev.includes(exam) 
        ? prev.filter(e => e !== exam)
        : [...prev, exam]
    );
  };

  const handleAlertTypeToggle = (alertType: string) => {
    setAlertTypes(prev => 
      prev.includes(alertType) 
        ? prev.filter(a => a !== alertType)
        : [...prev, alertType]
    );
  };

  const handleSave = async () => {
    if (!user) {
      toast({
        title: "Error",
        description: "Please log in to set up exam alerts.",
        variant: "destructive",
      });
      return;
    }

    if (!email || selectedExams.length === 0 || alertTypes.length === 0) {
      toast({
        title: "Please fill all required fields",
        description: "Email, at least one exam, and one alert type are required.",
        variant: "destructive"
      });
      return;
    }

    try {
      // Save alerts for each selected exam
      const alerts = selectedExams.map(exam => ({
        user_id: user.id,
        exam_name: exam,
        alert_types: alertTypes,
        phone_number: phone || null,
        email: email || null
      }));

      const { error } = await supabase
        .from('exam_alerts')
        .insert(alerts);

      if (error) {
        throw error;
      }

      toast({
        title: "Exam Alerts Configured Successfully!",
        description: `Alerts saved to database for ${selectedExams.length} exams.`
      });
      
      onClose();
    } catch (error) {
      console.error('Error saving exam alerts:', error);
      toast({
        title: "Error",
        description: "Failed to save exam alerts.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <Card className="w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <Bell className="text-orange-500" />
            Set Exam Alerts
          </CardTitle>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X size={20} />
          </Button>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Contact Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email Address *</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your.email@gmail.com"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number (Optional)</Label>
              <Input
                id="phone"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+91 9876543210"
              />
            </div>
          </div>

          {/* Exam Selection */}
          <div className="space-y-4">
            <Label className="text-base font-semibold">Select Exams for Alerts *</Label>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {examsList.map((exam) => (
                <div key={exam} className="flex items-center space-x-2">
                  <Checkbox
                    id={exam}
                    checked={selectedExams.includes(exam)}
                    onCheckedChange={() => handleExamToggle(exam)}
                  />
                  <Label htmlFor={exam} className="text-sm font-normal cursor-pointer">
                    {exam}
                  </Label>
                </div>
              ))}
            </div>
          </div>

          {/* Alert Types */}
          <div className="space-y-4">
            <Label className="text-base font-semibold">Alert Types *</Label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {alertTypesList.map((alertType) => (
                <div key={alertType} className="flex items-center space-x-2">
                  <Checkbox
                    id={alertType}
                    checked={alertTypes.includes(alertType)}
                    onCheckedChange={() => handleAlertTypeToggle(alertType)}
                  />
                  <Label htmlFor={alertType} className="text-sm font-normal cursor-pointer">
                    {alertType}
                  </Label>
                </div>
              ))}
            </div>
          </div>

          {/* Alert Preferences */}
          <div className="p-4 bg-blue-50 rounded-lg">
            <h4 className="font-semibold mb-2 flex items-center gap-2">
              <Mail className="text-blue-500" size={16} />
              Alert Delivery Preferences
            </h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <Checkbox id="email-alerts" defaultChecked />
                <Label htmlFor="email-alerts">Email Notifications</Label>
              </div>
              {phone && (
                <div className="flex items-center gap-2">
                  <Checkbox id="sms-alerts" />
                  <Label htmlFor="sms-alerts">SMS Notifications</Label>
                </div>
              )}
              <div className="flex items-center gap-2">
                <Checkbox id="push-alerts" defaultChecked />
                <Label htmlFor="push-alerts">Push Notifications</Label>
              </div>
            </div>
          </div>

          {/* Summary */}
          {selectedExams.length > 0 && (
            <div className="p-4 bg-green-50 rounded-lg">
              <h4 className="font-semibold mb-2">Alert Summary</h4>
              <p className="text-sm text-green-700">
                You will receive {alertTypes.length} types of alerts for {selectedExams.length} selected exams.
              </p>
              <div className="flex flex-wrap gap-1 mt-2">
                {selectedExams.slice(0, 3).map((exam) => (
                  <Badge key={exam} variant="outline" className="text-xs">
                    {exam}
                  </Badge>
                ))}
                {selectedExams.length > 3 && (
                  <Badge variant="outline" className="text-xs">
                    +{selectedExams.length - 3} more
                  </Badge>
                )}
              </div>
            </div>
          )}

          <div className="flex justify-end space-x-3 pt-4">
            <Button variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button onClick={handleSave} className="flex items-center gap-2">
              <Save size={16} />
              Save Alert Settings
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ExamAlertModal;
