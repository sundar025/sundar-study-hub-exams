
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { X, Calendar, Clock, MapPin, ExternalLink, Filter } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface ExamCalendarModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ExamCalendarModal = ({ isOpen, onClose }: ExamCalendarModalProps) => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedMonth, setSelectedMonth] = useState("all");

  const examSchedule = [
    // State Government Exams - TNPSC
    {
      exam: "TNPSC Group 1 Prelims",
      date: "2025-10-12",
      time: "9:30 AM - 12:30 PM",
      location: "All Districts of Tamil Nadu",
      category: "state",
      status: "upcoming",
      applicationDeadline: "2025-09-15"
    },
    {
      exam: "TNPSC Group 1 Mains",
      date: "2025-12-20",
      time: "9:30 AM - 12:30 PM",
      location: "Chennai, Coimbatore, Madurai",
      category: "state",
      status: "upcoming",
      applicationDeadline: "2025-11-10"
    },
    {
      exam: "TNPSC Group 2 Prelims",
      date: "2025-11-08",
      time: "10:00 AM - 12:30 PM",
      location: "All Districts of Tamil Nadu",
      category: "state",
      status: "upcoming",
      applicationDeadline: "2025-10-15"
    },
    {
      exam: "TNPSC Group 2 Mains",
      date: "2026-01-25",
      time: "9:30 AM - 12:30 PM",
      location: "Chennai, Coimbatore, Madurai",
      category: "state",
      status: "upcoming",
      applicationDeadline: "2025-12-20"
    },
    {
      exam: "TNPSC Group 4",
      date: "2025-10-26",
      time: "10:00 AM - 12:30 PM",
      location: "All Districts of Tamil Nadu",
      category: "state",
      status: "upcoming",
      applicationDeadline: "2025-10-02"
    },
    {
      exam: "TNPSC VAO Exam",
      date: "2025-11-16",
      time: "10:00 AM - 12:00 PM",
      location: "All Districts of Tamil Nadu",
      category: "state",
      status: "upcoming",
      applicationDeadline: "2025-10-30"
    },
    {
      exam: "TNPSC Combined Technical Services",
      date: "2025-11-16",
      time: "9:00 AM - 12:00 PM & 2:00 PM - 5:00 PM",
      location: "Chennai, Coimbatore, Madurai",
      category: "state",
      status: "upcoming",
      applicationDeadline: "2025-10-02"
    },
    
    // State Government Exams - TNUSRB
    {
      exam: "TNUSRB SI Written Exam",
      date: "2025-12-14",
      time: "10:00 AM - 12:00 PM",
      location: "All Districts of Tamil Nadu",
      category: "state",
      status: "upcoming",
      applicationDeadline: "2025-11-20"
    },
    {
      exam: "TNUSRB SI Physical Test",
      date: "2026-01-15",
      time: "7:00 AM - 5:00 PM",
      location: "District Headquarters",
      category: "state",
      status: "upcoming",
      applicationDeadline: "2025-12-30"
    },
    {
      exam: "TNUSRB Constable Written",
      date: "2026-02-08",
      time: "10:00 AM - 12:00 PM",
      location: "All Districts of Tamil Nadu",
      category: "state",
      status: "upcoming",
      applicationDeadline: "2026-01-15"
    },
    
    // Central Government Exams - UPSC
    {
      exam: "UPSC Civil Services Prelims",
      date: "2025-05-25",
      time: "9:30 AM - 11:30 AM & 2:30 PM - 4:30 PM",
      location: "All India",
      category: "central",
      status: "upcoming",
      applicationDeadline: "2025-02-18"
    },
    {
      exam: "UPSC Civil Services Mains",
      date: "2025-09-12",
      time: "9:00 AM - 12:00 PM & 2:00 PM - 5:00 PM",
      location: "All India",
      category: "central",
      status: "upcoming",
      applicationDeadline: "2025-08-01"
    },
    {
      exam: "UPSC IFS Prelims",
      date: "2025-06-15",
      time: "9:30 AM - 11:30 AM & 2:00 PM - 4:00 PM",
      location: "All India",
      category: "central",
      status: "upcoming",
      applicationDeadline: "2025-03-18"
    },
    {
      exam: "UPSC IFS Mains",
      date: "2025-11-11",
      time: "9:00 AM - 12:00 PM & 2:30 PM - 5:30 PM",
      location: "All India",
      category: "central",
      status: "upcoming",
      applicationDeadline: "2025-09-30"
    },
    {
      exam: "UPSC NDA & NA (I)",
      date: "2025-04-13",
      time: "10:00 AM - 12:30 PM & 2:00 PM - 4:30 PM",
      location: "All India",
      category: "central",
      status: "upcoming",
      applicationDeadline: "2025-01-28"
    },
    {
      exam: "UPSC NDA & NA (II)",
      date: "2025-09-07",
      time: "10:00 AM - 12:30 PM & 2:00 PM - 4:30 PM",
      location: "All India",
      category: "central",
      status: "upcoming",
      applicationDeadline: "2025-06-03"
    },
    {
      exam: "UPSC CDS (I)",
      date: "2025-04-13",
      time: "9:00 AM - 11:00 AM & 2:00 PM - 4:00 PM",
      location: "All India",
      category: "central",
      status: "upcoming",
      applicationDeadline: "2025-01-28"
    },
    {
      exam: "UPSC CDS (II)",
      date: "2025-09-07",
      time: "9:00 AM - 11:00 AM & 2:00 PM - 4:00 PM",
      location: "All India",
      category: "central",
      status: "upcoming",
      applicationDeadline: "2025-06-03"
    },
    {
      exam: "UPSC CAPF AC",
      date: "2025-08-03",
      time: "10:00 AM - 12:00 PM & 2:00 PM - 4:00 PM",
      location: "All India",
      category: "central",
      status: "upcoming",
      applicationDeadline: "2025-03-25"
    },
    
    // Central Government Exams - SSC
    {
      exam: "SSC CGL Tier 1",
      date: "2025-06-09",
      time: "Multiple Shifts",
      location: "All India",
      category: "central",
      status: "upcoming",
      applicationDeadline: "2025-04-26"
    },
    {
      exam: "SSC CGL Tier 2",
      date: "2025-09-18",
      time: "Multiple Shifts",
      location: "All India",
      category: "central",
      status: "upcoming",
      applicationDeadline: "2025-08-30"
    },
    {
      exam: "SSC CHSL Tier 1",
      date: "2025-05-05",
      time: "Multiple Shifts",
      location: "All India",
      category: "central",
      status: "upcoming",
      applicationDeadline: "2025-03-07"
    },
    {
      exam: "SSC CHSL Tier 2",
      date: "2025-08-28",
      time: "10:00 AM - 11:00 AM",
      location: "All India",
      category: "central",
      status: "upcoming",
      applicationDeadline: "2025-08-10"
    },
    {
      exam: "SSC MTS & Havaldar",
      date: "2025-09-01",
      time: "Multiple Shifts",
      location: "All India",
      category: "central",
      status: "upcoming",
      applicationDeadline: "2025-06-30"
    },
    {
      exam: "SSC GD Constable",
      date: "2026-02-10",
      time: "Multiple Shifts",
      location: "All India",
      category: "central",
      status: "upcoming",
      applicationDeadline: "2025-12-31"
    },
    {
      exam: "SSC JE (Civil, Electrical, Mechanical)",
      date: "2025-10-29",
      time: "9:00 AM - 11:00 AM & 2:30 PM - 4:30 PM",
      location: "All India",
      category: "central",
      status: "upcoming",
      applicationDeadline: "2025-09-12"
    },
    {
      exam: "SSC CPO SI",
      date: "2025-06-27",
      time: "10:00 AM - 12:00 PM",
      location: "All India",
      category: "central",
      status: "upcoming",
      applicationDeadline: "2025-04-22"
    }
  ];

  if (!isOpen) return null;

  const filteredExams = examSchedule.filter((exam) => {
    const categoryMatch = selectedCategory === "all" || exam.category === selectedCategory;
    const monthMatch = selectedMonth === "all" || new Date(exam.date).getMonth() === parseInt(selectedMonth);
    return categoryMatch && monthMatch;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case "upcoming": return "bg-blue-100 text-blue-800";
      case "ongoing": return "bg-green-100 text-green-800";
      case "completed": return "bg-gray-100 text-gray-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getCategoryColor = (category: string) => {
    return category === "central" ? "bg-indigo-100 text-indigo-800" : "bg-emerald-100 text-emerald-800";
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <Card className="w-full max-w-6xl max-h-[90vh] overflow-y-auto">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <Calendar className="text-blue-500" />
            Exam Calendar 2025-2026
          </CardTitle>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X size={20} />
          </Button>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Filters */}
          <div className="flex flex-wrap gap-4 items-center">
            <div className="flex items-center gap-2">
              <Filter size={16} />
              <span className="font-medium">Filter by:</span>
            </div>
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Select Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="state">State Government</SelectItem>
                <SelectItem value="central">Central Government</SelectItem>
              </SelectContent>
            </Select>
            <Select value={selectedMonth} onValueChange={setSelectedMonth}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Select Month" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Months</SelectItem>
                <SelectItem value="0">January</SelectItem>
                <SelectItem value="1">February</SelectItem>
                <SelectItem value="2">March</SelectItem>
                <SelectItem value="3">April</SelectItem>
                <SelectItem value="4">May</SelectItem>
                <SelectItem value="5">June</SelectItem>
                <SelectItem value="6">July</SelectItem>
                <SelectItem value="7">August</SelectItem>
                <SelectItem value="8">September</SelectItem>
                <SelectItem value="9">October</SelectItem>
                <SelectItem value="10">November</SelectItem>
                <SelectItem value="11">December</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Calendar View */}
          <div className="grid grid-cols-1 gap-4">
            {filteredExams.map((exam, index) => (
              <Card key={index} className="border-l-4 border-l-blue-500 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h4 className="text-xl font-semibold">{exam.exam}</h4>
                        <Badge className={getCategoryColor(exam.category)}>
                          {exam.category === "central" ? "Central" : "State"}
                        </Badge>
                        <Badge className={getStatusColor(exam.status)}>
                          {exam.status}
                        </Badge>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                        <div className="flex items-center gap-2">
                          <Calendar size={16} className="text-blue-500" />
                          <span className="font-medium">{formatDate(exam.date)}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock size={16} className="text-green-500" />
                          <span>{exam.time}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin size={16} className="text-purple-500" />
                          <span>{exam.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar size={16} className="text-red-500" />
                          <span>Apply by: {formatDate(exam.applicationDeadline)}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-2">
                      <Button variant="outline" size="sm" className="flex items-center gap-2">
                        <ExternalLink size={14} />
                        Official Notice
                      </Button>
                      <Button size="sm" className="flex items-center gap-2">
                        <Calendar size={14} />
                        Add to Calendar
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredExams.length === 0 && (
            <div className="text-center py-8">
              <Calendar size={48} className="mx-auto text-gray-400 mb-4" />
              <p className="text-gray-600">No exams found for the selected filters.</p>
            </div>
          )}

          {/* Legend */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">Legend</h4>
            <div className="flex flex-wrap gap-4 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-blue-500 rounded"></div>
                <span>Upcoming</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded"></div>
                <span>Ongoing</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-gray-500 rounded"></div>
                <span>Completed</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ExamCalendarModal;
