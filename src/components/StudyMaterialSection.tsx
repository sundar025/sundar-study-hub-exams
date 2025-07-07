import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { BookOpen, ArrowLeft, FileText, Upload, Download, Clock, Award } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface StudyMaterialSectionProps {
  examName: string;
  onBack: () => void;
}

interface TopicContent {
  overview: string;
  keyPoints: string[];
  importantDates: string[];
  examples: string[];
}

interface SubjectData {
  topics: string[];
  content: Record<string, TopicContent>;
}

const StudyMaterialSection = ({ examName, onBack }: StudyMaterialSectionProps) => {
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null);
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
  const [uploadedFiles, setUploadedFiles] = useState<{[key: string]: File[]}>({});
  const [showQuiz, setShowQuiz] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [quizAnswers, setQuizAnswers] = useState<{[key: number]: number}>({});
  const [showQuizResults, setShowQuizResults] = useState(false);
  const { toast } = useToast();

  const subjects: Record<string, SubjectData> = {
    "History": {
      topics: [
        "Indus Valley Civilization",
        "Vedic Period", 
        "Mauryan Empire",
        "Gupta Empire",
        "Medieval India - Delhi Sultanate",
        "Mughal Empire",
        "Maratha Empire",
        "British Colonial Period",
        "East India Company",
        "Revolt of 1857",
        "Constitutional Developments",
        "Socio-Religious Reform Movements",
        "Vijayanagara Empire",
        "Chola Dynasty",
        "Pallava Dynasty",
        "Rashtrakuta Dynasty",
        "Chalukya Dynasty",
        "Hoysala Dynasty",
        "Bahmani Sultanate",
        "Deccan Sultanates"
      ],
      content: {
        "Indus Valley Civilization": {
          overview: "The Indus Valley Civilization (3300-1300 BCE) was one of the world's earliest urban civilizations, flourishing in the northwestern regions of South Asia. It was characterized by sophisticated urban planning, advanced drainage systems, and a script that remains undeciphered to this day.",
          keyPoints: [
            "Major cities: Harappa, Mohenjo-daro, Dholavira, Kalibangan, Banawali, Lothal, Surkotada",
            "Advanced urban planning with grid pattern streets and sophisticated drainage systems",
            "Standardized weights, measures, and brick sizes across the civilization",
            "Advanced knowledge of metallurgy, pottery, bead-making, and maritime trade",
            "Harappan script remains undeciphered despite numerous attempts",
            "No evidence of warfare, weapons, or religious structures found",
            "Great Bath at Mohenjo-daro suggests ritual bathing practices",
            "Decline theories: Climate change, Aryan invasion, floods, earthquakes, river course changes",
            "Trade networks extended to Mesopotamia, Central Asia, and Gujarat",
            "Social organization appears to have been egalitarian with no clear evidence of rulers"
          ],
          importantDates: [
            "3300-2600 BCE: Early Harappan Period (Ravi Phase)",
            "2600-1900 BCE: Mature Harappan Period (Integration Era)", 
            "1900-1300 BCE: Late Harappan Period (Localization Era)",
            "1921: Discovery of Harappa by Dayaram Sahni",
            "1922: Discovery of Mohenjo-daro by R.D. Banerjee",
            "1946: Discovery of Kalibangan by A. Ghosh",
            "1967-1968: Discovery of Dholavira by J.P. Joshi",
            "1954: Discovery of Lothal by S.R. Rao"
          ],
          examples: [
            "Great Bath of Mohenjo-daro - earliest public water tank measuring 12m x 7m x 2.4m deep",
            "Dancing Girl bronze sculpture showing advanced metallurgical skills and artistic excellence",
            "Priest-King statue representing possible ruler or priest class with trefoil pattern shawl",
            "Harappan seals with animal motifs (unicorn, bull, elephant) used for trade identification",
            "Dockyard at Lothal - world's earliest known artificial dock for maritime trade",
            "Sophisticated drainage system with covered drains and manholes",
            "Standardized bricks in ratio 4:2:1 used throughout the civilization",
            "Advanced water management systems including wells and reservoirs"
          ]
        },
        "Mughal Empire": {
          overview: "The Mughal Empire (1526-1857) was one of the largest and most powerful empires in Indian history, established by Babur and reaching its zenith under Akbar and Aurangzeb. Known for its architectural marvels, administrative innovations, and cultural synthesis of Persian, Indian, and Central Asian elements.",
          keyPoints: [
            "Founded by Babur after victory at First Battle of Panipat (1526) against Ibrahim Lodi",
            "Major rulers: Babur (1526-30), Humayun (1530-40, 1555-56), Akbar (1556-1605), Jahangir (1605-27), Shah Jahan (1628-58), Aurangzeb (1658-1707)",
            "Administrative innovations: Mansabdari system, Jagirdari system, efficient revenue collection",
            "Religious policy evolved from Akbar's Din-i-Ilahi and tolerance to Aurangzeb's orthodox policies",
            "Architectural achievements: Taj Mahal, Red Fort, Fatehpur Sikri, Humayun's Tomb, Jama Masjid",
            "Cultural synthesis led to development of Urdu language, Mughal miniature painting, and music",
            "Economic prosperity through trade, agriculture, and handicrafts",
            "Decline due to weak successors, administrative corruption, Maratha resistance, and British intervention"
          ],
          importantDates: [
            "1526: First Battle of Panipat, Babur defeats Ibrahim Lodi and establishes Mughal rule",
            "1540: Sher Shah Suri defeats Humayun, interrupts Mughal rule",
            "1555: Humayun recaptures Delhi with Persian help",
            "1556-1605: Akbar's reign, consolidation and expansion of empire",
            "1576: Battle of Haldighati, Akbar defeats Maharana Pratap",
            "1628-1658: Shah Jahan's reign, architectural golden age",
            "1658-1707: Aurangzeb's reign, maximum territorial expansion but beginning of decline",
            "1739: Nadir Shah's invasion, weakening of Mughal power",
            "1857: End of Mughal rule with British assumption of direct control"
          ],
          examples: [
            "Akbar's Din-i-Ilahi - syncretic religion attempting to merge best elements of all faiths",
            "Mansabdari system - dual ranking system for military and civil administration",
            "Jagirdari system - land revenue assignment system for maintaining cavalry",
            "Todar Mal's Bandobast - scientific land revenue system with detailed surveys",
            "Ibadat Khana - hall of religious discussions at Fatehpur Sikri",
            "Court historians: Abul Fazl (Akbarnama, Ain-i-Akbari), Badauni (Muntakhab-ut-Tawarikh)"
          ]
        },
        "Maratha Empire": {
          overview: "The Maratha Empire emerged in the 17th century under Shivaji Maharaj and became the dominant power in India by the 18th century. Known for their guerrilla warfare tactics, naval strength, and administrative innovations, they successfully challenged Mughal supremacy.",
          keyPoints: [
            "Founded by Shivaji Maharaj (1674) who established Hindavi Swarajya",
            "Guerrilla warfare tactics (Ganimi Kava) proved effective against Mughal armies",
            "Strong naval force to protect western coast from foreign powers",
            "Administrative system: Ashta Pradhan (Council of Eight Ministers)",
            "Revenue system: Chauth (1/4th) and Sardeshmukhi (1/10th) from neighboring territories",
            "Expansion under Peshwas: Bajirao I, Balaji Bajirao, Madhavrao",
            "Controlled territory from Attock to Cuttack at peak",
            "Decline after Third Battle of Panipat (1761) and internal conflicts"
          ],
          importantDates: [
            "1674: Shivaji's coronation at Raigad as Chhatrapati",
            "1689: Execution of Sambhaji by Aurangzeb",
            "1707: Death of Aurangzeb, Maratha resurgence begins",
            "1720: Bajirao I becomes Peshwa, rapid expansion begins",
            "1761: Third Battle of Panipat, Marathas defeated by Ahmad Shah Abdali",
            "1818: Third Anglo-Maratha War ends Maratha independence"
          ],
          examples: [
            "Shivaji's escape from Agra (1666) in baskets of sweets",
            "Capture of Sinhagad fort (1670) by Tanaji Malusare",
            "Naval battles against Siddis and Portuguese",
            "Bajirao I's tactics: 'Strike like lightning and vanish like the wind'"
          ]
        }
      }
    },
    "Indian National Movement": {
      topics: [
        "Early Nationalist Movement",
        "Formation of Indian National Congress",
        "Partition of Bengal (1905)",
        "Swadeshi Movement",
        "Home Rule Movement",
        "Non-Cooperation Movement",
        "Civil Disobedience Movement", 
        "Quit India Movement",
        "Role of Revolutionary Activities",
        "Partition and Independence",
        "Integration of Princely States",
        "Constitutional Assembly",
        "Khilafat Movement",
        "Chauri Chaura Incident",
        "Simon Commission",
        "Round Table Conferences",
        "Government of India Acts",
        "Cripps Mission",
        "Cabinet Mission Plan",
        "Mountbatten Plan"
      ],
      content: {
        "Formation of Indian National Congress": {
          overview: "The Indian National Congress was founded in 1885 as the first nationwide political organization in India, playing a crucial role in the independence movement. It evolved from a moderate organization seeking constitutional reforms to the primary vehicle for complete independence.",
          keyPoints: [
            "Founded by Allan Octavian Hume with support of Lord Dufferin on December 28, 1885",
            "First session in Bombay with W.C. Bonnerjee as President (72 delegates attended)",
            "Initially focused on constitutional reforms, civil service expansion, and economic issues",
            "Evolution through phases: Moderate (1885-1905), Extremist (1905-1918), Gandhian (1918-1947)",
            "Became the primary vehicle for independence struggle under Gandhi's leadership",
            "Adopted various strategies: petitions, protests, non-cooperation, civil disobedience",
            "Split at Surat (1907) between Moderates and Extremists, reunited at Lucknow (1916)",
            "Transformed from elite organization to mass movement under Gandhi"
          ],
          importantDates: [
            "1885: Foundation of INC at Gokuldas Tejpal Sanskrit College, Bombay",
            "1886: Second session in Calcutta under Dadabhai Naoroji",
            "1907: Surat Split between Moderates (Gokhale) and Extremists (Tilak)",
            "1916: Lucknow Pact between Congress and Muslim League, reunion of Congress factions",
            "1920: Non-Cooperation resolution passed at Nagpur session under Gandhi",
            "1929: Purna Swaraj resolution at Lahore session under Jawaharlal Nehru",
            "1942: Quit India resolution passed at Bombay session"
          ],
          examples: [
            "Early demands: Indianization of civil services, expansion of legislative councils, reduction of military expenditure",
            "Moderate leaders: Dadabhai Naoroji (Grand Old Man), Gopal Krishna Gokhale, Surendranath Banerjee, Pherozeshah Mehta",
            "Extremist leaders: Bal Gangadhar Tilak, Lala Lajpat Rai, Bipin Chandra Pal (Lal-Bal-Pal trinity)",
            "Women's participation: Sarojini Naidu, Annie Besant, Aruna Asaf Ali, Kamala Nehru"
          ]
        }
      }
    }
  };

  const quizQuestions = {
    "History": [
      {
        question: "Which Indus Valley site is known as the 'Manchester of Indus Valley Civilization'?",
        options: ["Harappa", "Mohenjo-daro", "Dholavira", "Kalibangan"],
        correct: 0,
        explanation: "Harappa is called the 'Manchester of Indus Valley' due to evidence of extensive cotton cultivation and textile production."
      },
      {
        question: "Who was the founder of the Mauryan Empire?",
        options: ["Chandragupta Maurya", "Ashoka", "Bindusara", "Kautilya"],
        correct: 0,
        explanation: "Chandragupta Maurya founded the Mauryan Empire around 321 BCE after defeating the Nandas."
      },
      {
        question: "The Mughal emperor Akbar's revenue minister was?",
        options: ["Birbal", "Man Singh", "Todar Mal", "Abul Fazl"],
        correct: 2,
        explanation: "Todar Mal was Akbar's finance minister who introduced the 'Dahsala' revenue system."
      },
      {
        question: "Which Gupta ruler is known as the 'Napoleon of India'?",
        options: ["Chandragupta I", "Samudragupta", "Chandragupta II", "Kumaragupta"],
        correct: 1,
        explanation: "Samudragupta is called the 'Napoleon of India' due to his extensive military conquests."
      },
      {
        question: "The ancient university of Nalanda was destroyed by?",
        options: ["Muhammad Ghori", "Bakhtiyar Khilji", "Mahmud of Ghazni", "Qutb-ud-din Aibak"],
        correct: 1,
        explanation: "Bakhtiyar Khilji destroyed Nalanda University in 1193 CE, marking the end of this great center of learning."
      }
    ],
    "Polity": [
      {
        question: "Which article is known as the 'Heart and Soul' of the Indian Constitution?",
        options: ["Article 14", "Article 19", "Article 21", "Article 32"],
        correct: 3,
        explanation: "Article 32 (Right to Constitutional Remedies) is called the 'Heart and Soul' of the Constitution by Dr. B.R. Ambedkar."
      },
      {
        question: "The concept of 'Basic Structure' of the Constitution was established in which case?",
        options: ["Golaknath case", "Minerva Mills case", "Kesavananda Bharati case", "Maneka Gandhi case"],
        correct: 2,
        explanation: "The Kesavananda Bharati case (1973) established the Basic Structure doctrine, limiting Parliament's power to amend the Constitution."
      },
      {
        question: "How many schedules are there in the Indian Constitution currently?",
        options: ["10", "11", "12", "13"],
        correct: 2,
        explanation: "The Indian Constitution currently has 12 schedules, with the 12th schedule added by the 73rd Amendment for Panchayati Raj."
      },
      {
        question: "The President of India can be removed from office through?",
        options: ["No-confidence motion", "Impeachment", "Dissolution", "Resignation only"],
        correct: 1,
        explanation: "The President can be removed through impeachment for violation of the Constitution, requiring a two-thirds majority in both houses."
      },
      {
        question: "Which amendment is known as the 'Mini Constitution'?",
        options: ["42nd Amendment", "44th Amendment", "52nd Amendment", "73rd Amendment"],
        correct: 0,
        explanation: "The 42nd Amendment (1976) is called 'Mini Constitution' due to the extensive changes it made to the Constitution."
      }
    ]
  };

  const handleFileUpload = (topicName: string, files: FileList | null) => {
    if (files) {
      const fileArray = Array.from(files);
      setUploadedFiles(prev => ({
        ...prev,
        [topicName]: [...(prev[topicName] || []), ...fileArray]
      }));
      toast({
        title: "Files Uploaded",
        description: `${fileArray.length} file(s) uploaded for ${topicName}`,
      });
    }
  };

  const downloadFile = (file: File) => {
    const url = URL.createObjectURL(file);
    const a = document.createElement('a');
    a.href = url;
    a.download = file.name;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const startQuiz = (subject: string) => {
    setShowQuiz(true);
    setCurrentQuestion(0);
    setQuizAnswers({});
    setShowQuizResults(false);
  };

  const selectQuizAnswer = (questionIndex: number, answerIndex: number) => {
    setQuizAnswers(prev => ({
      ...prev,
      [questionIndex]: answerIndex
    }));
  };

  const nextQuizQuestion = () => {
    const currentQuestions = quizQuestions[selectedSubject as keyof typeof quizQuestions] || [];
    if (currentQuestion < currentQuestions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      setShowQuizResults(true);
    }
  };

  const calculateQuizResults = () => {
    const currentQuestions = quizQuestions[selectedSubject as keyof typeof quizQuestions] || [];
    let correct = 0;
    currentQuestions.forEach((q, index) => {
      if (quizAnswers[index] === q.correct) {
        correct++;
      }
    });
    return {
      correct,
      total: currentQuestions.length,
      percentage: Math.round((correct / currentQuestions.length) * 100)
    };
  };

  if (showQuiz && selectedSubject) {
    const currentQuestions = quizQuestions[selectedSubject as keyof typeof quizQuestions] || [];
    
    if (showQuizResults) {
      const results = calculateQuizResults();
      return (
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <Button onClick={() => setShowQuiz(false)} variant="outline">
              ← Back to Study Material
            </Button>
            <h2 className="text-2xl font-bold">Quiz Results - {selectedSubject}</h2>
          </div>
          
          <Card className="bg-gradient-to-r from-blue-50 to-purple-50">
            <CardContent className="p-8 text-center">
              <div className="text-4xl font-bold text-blue-600 mb-4">{results.percentage}%</div>
              <div className="text-lg text-gray-700 mb-2">Score: {results.correct}/{results.total}</div>
              <Badge className={results.percentage >= 70 ? "bg-green-500" : results.percentage >= 50 ? "bg-yellow-500" : "bg-red-500"}>
                {results.percentage >= 70 ? "Excellent" : results.percentage >= 50 ? "Good" : "Need Improvement"}
              </Badge>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Detailed Analysis</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {currentQuestions.map((q, index) => (
                <div key={index} className="p-4 border rounded-lg">
                  <div className="font-medium mb-2">Q{index + 1}: {q.question}</div>
                  <div className="text-sm space-y-1">
                    <div className={`p-2 rounded ${quizAnswers[index] === q.correct ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                      Your answer: {q.options[quizAnswers[index]] || "Not answered"}
                    </div>
                    {quizAnswers[index] !== q.correct && (
                      <div className="p-2 bg-green-100 text-green-800 rounded">
                        Correct answer: {q.options[q.correct]}
                      </div>
                    )}
                    <div className="text-gray-600 text-sm mt-2">
                      <strong>Explanation:</strong> {q.explanation}
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          <div className="text-center">
            <Button onClick={() => {
              setShowQuiz(false);
              setShowQuizResults(false);
            }}>
              Take Another Quiz
            </Button>
          </div>
        </div>
      );
    }

    const question = currentQuestions[currentQuestion];
    if (!question) {
      return (
        <div className="text-center py-8">
          <p className="text-gray-600">No quiz questions available for this subject.</p>
          <Button onClick={() => setShowQuiz(false)} className="mt-4">
            Back to Study Material
          </Button>
        </div>
      );
    }

    return (
      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <Button onClick={() => setShowQuiz(false)} variant="outline">
            ← Back to Study Material
          </Button>
          <h2 className="text-2xl font-bold">{selectedSubject} Quiz</h2>
        </div>

        <Card>
          <CardHeader>
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-bold">Question {currentQuestion + 1} of {currentQuestions.length}</h3>
              <Badge variant="outline">{selectedSubject}</Badge>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <h4 className="text-lg font-medium">{question.question}</h4>
            <div className="grid grid-cols-1 gap-3">
              {question.options.map((option, index) => (
                <Button
                  key={index}
                  variant={quizAnswers[currentQuestion] === index ? "default" : "outline"}
                  className="text-left justify-start h-auto p-4"
                  onClick={() => selectQuizAnswer(currentQuestion, index)}
                >
                  <span className="mr-3 font-bold">{String.fromCharCode(65 + index)}.</span>
                  {option}
                </Button>
              ))}
            </div>
            <div className="flex justify-between">
              <Button 
                variant="outline" 
                onClick={() => setCurrentQuestion(Math.max(0, currentQuestion - 1))}
                disabled={currentQuestion === 0}
              >
                Previous
              </Button>
              <Button onClick={nextQuizQuestion}>
                {currentQuestion === currentQuestions.length - 1 ? "Finish Quiz" : "Next Question"}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (selectedTopic && selectedSubject) {
    const subjectData = subjects[selectedSubject];
    const topicData = subjectData?.content?.[selectedTopic];

    return (
      <div className="space-y-8">
        <div className="flex items-center gap-4">
          <Button onClick={() => setSelectedTopic(null)} variant="outline">
            <ArrowLeft size={20} />
            Back to Topics
          </Button>
          <h2 className="text-3xl font-bold text-gray-900">{selectedTopic}</h2>
        </div>

        {topicData && (
          <>
            {/* Study Content */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="text-blue-500" />
                  Study Material
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3">Overview</h3>
                  <p className="text-gray-700 leading-relaxed">{topicData.overview}</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3">Key Points</h3>
                  <ul className="space-y-2">
                    {topicData.keyPoints.map((point, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                        <span className="text-gray-700">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3">Important Dates</h3>
                  <div className="grid grid-cols-1 gap-3">
                    {topicData.importantDates.map((date, index) => (
                      <div key={index} className="p-3 bg-yellow-50 border-l-4 border-yellow-400 rounded">
                        <span className="text-gray-800">{date}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3">Examples & Case Studies</h3>
                  <div className="grid grid-cols-1 gap-3">
                    {topicData.examples.map((example, index) => (
                      <div key={index} className="p-4 bg-green-50 border border-green-200 rounded-lg">
                        <span className="text-gray-800">{example}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Previous Year Questions Section */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="text-purple-500" />
                  Previous Year Questions
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="pdf-upload" className="text-sm font-medium">
                    Upload Previous Year Question Papers (PDF)
                  </Label>
                  <Input
                    id="pdf-upload"
                    type="file"
                    multiple
                    accept=".pdf"
                    onChange={(e) => handleFileUpload(selectedTopic, e.target.files)}
                    className="mt-2"
                  />
                </div>

                {uploadedFiles[selectedTopic] && uploadedFiles[selectedTopic].length > 0 && (
                  <div>
                    <h4 className="font-medium mb-3">Uploaded Question Papers</h4>
                    <div className="space-y-2">
                      {uploadedFiles[selectedTopic].map((file, index) => (
                        <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                          <span className="text-sm text-gray-700">{file.name}</span>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => downloadFile(file)}
                          >
                            <Download size={16} />
                          </Button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Quick Quiz Section */}
            <Card className="bg-gradient-to-r from-purple-50 to-pink-50">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold mb-4">Test Your Knowledge</h3>
                <p className="text-gray-600 mb-6">Take a quick quiz on {selectedTopic}</p>
                <Button onClick={() => startQuiz(selectedSubject)} size="lg">
                  <Award className="mr-2" size={20} />
                  Start Quiz
                </Button>
              </CardContent>
            </Card>
          </>
        )}
      </div>
    );
  }

  if (selectedSubject) {
    const subjectData = subjects[selectedSubject as keyof typeof subjects];
    
    return (
      <div className="space-y-8">
        <div className="flex items-center gap-4">
          <Button onClick={() => setSelectedSubject(null)} variant="outline">
            <ArrowLeft size={20} />
            Back to Subjects
          </Button>
          <h2 className="text-3xl font-bold text-gray-900">{selectedSubject}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {subjectData?.topics.map((topic, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-3">{topic}</h3>
                <div className="space-y-3">
                  <Button 
                    className="w-full" 
                    onClick={() => setSelectedTopic(topic)}
                  >
                    Study Material
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={() => {
                      setSelectedTopic(topic);
                      startQuiz(selectedSubject);
                    }}
                  >
                    <Clock className="mr-2" size={16} />
                    Quick Quiz
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="flex items-center gap-4">
        <Button onClick={onBack} variant="outline">
          <ArrowLeft size={20} />
          Back to Exams
        </Button>
        <h2 className="text-3xl font-bold text-gray-900">Study Materials - {examName}</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Object.keys(subjects).map((subject, index) => (
          <Card key={index} className="hover:shadow-xl transition-all duration-300 cursor-pointer border-2 hover:border-blue-200">
            <CardContent className="p-6">
              <div className="text-center">
                <BookOpen className="mx-auto mb-4 text-blue-500" size={48} />
                <h3 className="text-xl font-bold mb-3">{subject}</h3>
                <p className="text-gray-600 text-sm mb-4">
                  {subjects[subject as keyof typeof subjects].topics.length} topics available
                </p>
                <Button 
                  className="w-full" 
                  onClick={() => setSelectedSubject(subject)}
                >
                  Start Learning
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default StudyMaterialSection;
