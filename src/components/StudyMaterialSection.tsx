
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

const StudyMaterialSection = ({ examName, onBack }: StudyMaterialSectionProps) => {
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null);
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
  const [uploadedFiles, setUploadedFiles] = useState<{[key: string]: File[]}>({});
  const [showQuiz, setShowQuiz] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [quizAnswers, setQuizAnswers] = useState<{[key: number]: number}>({});
  const [showQuizResults, setShowQuizResults] = useState(false);
  const { toast } = useToast();

  const subjects = {
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
        "Socio-Religious Reform Movements"
      ],
      content: {
        "Indus Valley Civilization": {
          overview: "The Indus Valley Civilization (3300-1300 BCE) was one of the world's earliest urban civilizations, flourishing in the northwestern regions of South Asia.",
          keyPoints: [
            "Major cities: Harappa, Mohenjo-daro, Dholavira, Kalibangan, Banawali",
            "Advanced urban planning with grid pattern streets and drainage systems",
            "Standardized weights, measures, and brick sizes",
            "Advanced knowledge of metallurgy, pottery, and trade",
            "Script remains undeciphered",
            "No evidence of warfare or weapons found",
            "Decline theories: Climate change, Aryan invasion, floods, earthquakes"
          ],
          importantDates: [
            "3300-2600 BCE: Early Harappan Period",
            "2600-1900 BCE: Mature Harappan Period", 
            "1900-1300 BCE: Late Harappan Period",
            "1921: Discovery of Harappa by Dayaram Sahni",
            "1922: Discovery of Mohenjo-daro by R.D. Banerjee"
          ],
          examples: [
            "Great Bath of Mohenjo-daro - earliest public water tank",
            "Dancing Girl bronze sculpture showing artistic excellence",
            "Priest-King statue representing possible ruler class",
            "Seals with animal motifs used for trade identification"
          ]
        },
        "Mughal Empire": {
          overview: "The Mughal Empire (1526-1857) was one of the largest and most powerful empires in Indian history, known for its architectural marvels, administrative system, and cultural synthesis.",
          keyPoints: [
            "Founded by Babur after victory at Panipat (1526)",
            "Major rulers: Babur, Humayun, Akbar, Jahangir, Shah Jahan, Aurangzeb",
            "Administrative innovations: Mansabdari system, Land revenue system",
            "Religious policy evolved from Akbar's tolerance to Aurangzeb's orthodoxy",
            "Architectural achievements: Taj Mahal, Red Fort, Fatehpur Sikri",
            "Cultural synthesis of Persian, Indian, and Central Asian elements",
            "Decline due to weak successors, Maratha resistance, British intervention"
          ],
          importantDates: [
            "1526: First Battle of Panipat, Babur defeats Ibrahim Lodi",
            "1556-1605: Akbar's reign, consolidation of empire",
            "1628-1658: Shah Jahan's reign, architectural golden age",
            "1658-1707: Aurangzeb's reign, maximum territorial expansion",
            "1739: Nadir Shah's invasion, weakening of empire",
            "1857: End of Mughal rule with British control"
          ],
          examples: [
            "Akbar's Din-i-Ilahi - attempt at religious synthesis",
            "Mansabdari system - military and civil administration",
            "Jagirdari system - land revenue collection",
            "Court historians: Abul Fazl (Akbarnama), Badauni (Muntakhab-ut-Tawarikh)"
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
        "Constitutional Assembly"
      ],
      content: {
        "Formation of Indian National Congress": {
          overview: "The Indian National Congress was founded in 1885 as the first nationwide political organization in India, playing a crucial role in the independence movement.",
          keyPoints: [
            "Founded by Allan Octavian Hume with support of Lord Dufferin",
            "First session in Bombay (1885) with W.C. Bonnerjee as President",
            "Initially focused on constitutional reforms and civil service issues",
            "Evolution from moderate to extremist phase (1905-1918)",
            "Became the primary vehicle for independence struggle",
            "Adopted various strategies: petitions, protests, non-cooperation, armed resistance",
            "Split (1907) and reunion (1916) strengthened the organization"
          ],
          importantDates: [
            "1885: Foundation of INC, first session in Bombay",
            "1886: Second session in Calcutta under Dadabhai Naoroji",
            "1907: Surat Split between Moderates and Extremists",
            "1916: Lucknow Pact between Congress and Muslim League",
            "1920: Non-Cooperation resolution under Gandhi's leadership",
            "1929: Purna Swaraj resolution at Lahore session"
          ],
          examples: [
            "Early demands: Indianization of civil services, expansion of councils",
            "Moderate leaders: Dadabhai Naoroji, Gopal Krishna Gokhale, Surendranath Banerjee",
            "Extremist leaders: Bal Gangadhar Tilak, Lala Lajpat Rai, Bipin Chandra Pal",
            "Women's participation: Sarojini Naidu, Annie Besant, Aruna Asaf Ali"
          ]
        }
      }
    },
    "Indian Polity": {
      topics: [
        "Constitutional Framework",
        "Fundamental Rights",
        "Directive Principles of State Policy",
        "Union Government - Executive",
        "Union Government - Legislature", 
        "Union Government - Judiciary",
        "State Government",
        "Local Government - Panchayati Raj",
        "Local Government - Urban",
        "Centre-State Relations",
        "Constitutional Amendments",
        "Electoral System",
        "Political Parties",
        "Pressure Groups and Civil Society"
      ],
      content: {
        "Fundamental Rights": {
          overview: "Fundamental Rights are the basic human rights guaranteed by the Indian Constitution to all citizens, ensuring individual liberty and democratic values.",
          keyPoints: [
            "Originally 7 rights, now 6 after deletion of Right to Property (44th Amendment)",
            "Enforceable by courts - can approach Supreme Court directly (Article 32)",
            "Not absolute - can be reasonably restricted for public order, morality, security",
            "Can be suspended during Emergency except Articles 20 and 21",
            "Horizontal application - protection against state action primarily",
            "Borrowed from US Constitution with modifications for Indian context",
            "Golden Triangle: Articles 14, 19, 21 - core of fundamental rights"
          ],
          importantDates: [
            "1950: Constitution came into effect with Fundamental Rights",
            "1967: Golaknath case - Parliament cannot amend Fundamental Rights",
            "1973: Kesavananda Bharati case - Basic Structure doctrine",
            "1976: 42nd Amendment during Emergency - restricted judicial review",
            "1978: 44th Amendment - Right to Property removed from Fundamental Rights",
            "2002: 86th Amendment - Right to Education added"
          ],
          examples: [
            "Article 14: Equality before law and equal protection of laws",
            "Article 19: Six freedoms including speech, expression, assembly",
            "Article 21: Right to Life and Personal Liberty - most expansive right",
            "Article 32: Right to Constitutional Remedies - 'Heart and Soul' of Constitution"
          ]
        }
      }
    },
    "Geography": {
      topics: [
        "Physical Geography of India",
        "Climate and Weather",
        "Drainage System",
        "Natural Vegetation and Wildlife",
        "Mineral Resources",
        "Energy Resources",
        "Agriculture and Irrigation",
        "Industries and Economic Geography",
        "Population and Settlements",
        "Transportation",
        "Environmental Issues",
        "Disaster Management",
        "World Geography",
        "Economic Geography"
      ],
      content: {
        "Physical Geography of India": {
          overview: "India's physical geography is characterized by diverse landforms including the Himalayas, Indo-Gangetic plains, peninsular plateau, and coastal regions.",
          keyPoints: [
            "Total area: 3.28 million sq km (2.4% of world's land area)",
            "Location: 8°4'N to 37°6'N latitude, 68°7'E to 97°25'E longitude",
            "Four major physical divisions: Himalayas, Northern Plains, Peninsular Plateau, Coastal Plains",
            "Himalayas: Young fold mountains, highest peak Kanchenjunga (8,586m in India)",
            "Northern Plains: Alluvial deposits from Himalayan rivers, most fertile region",
            "Peninsular Plateau: Ancient landmass, rich in minerals, Deccan Trap formation",
            "Coastal Plains: Eastern (wider) and Western (narrower) coastal plains"
          ],
          importantDates: [
            "Geological timeline: Peninsular Plateau formed 3.8 billion years ago",
            "Himalayan formation: 30-50 million years ago (Tertiary period)",
            "Indo-Gangetic plains formation: Quaternary period (last 2 million years)"
          ],
          examples: [
            "Himalayan ranges: Greater Himalayas (Himadri), Lesser Himalayas (Himachal), Outer Himalayas (Shivaliks)",
            "Major rivers: Ganga, Brahmaputra, Indus (plains formation)",
            "Plateau regions: Malwa Plateau, Chota Nagpur Plateau, Karnataka Plateau",
            "Coastal features: Chilika Lake, Pulicat Lake, Kerala Backwaters"
          ]
        }
      }
    },
    "Science": {
      topics: [
        "Physics - Mechanics",
        "Physics - Heat and Thermodynamics", 
        "Physics - Light and Optics",
        "Physics - Electricity and Magnetism",
        "Physics - Modern Physics",
        "Chemistry - Atomic Structure",
        "Chemistry - Periodic Table",
        "Chemistry - Chemical Bonding",
        "Chemistry - Acids, Bases and Salts",
        "Chemistry - Organic Chemistry",
        "Biology - Cell Biology",
        "Biology - Genetics and Evolution",
        "Biology - Human Physiology",
        "Biology - Plant Biology",
        "Biology - Ecology and Environment",
        "Space Science",
        "Computer Science Basics",
        "Recent Scientific Developments"
      ],
      content: {
        "Physics - Mechanics": {
          overview: "Mechanics is the branch of physics that deals with motion of objects and the forces acting on them, forming the foundation of classical physics.",
          keyPoints: [
            "Laws of Motion: Newton's three fundamental laws governing motion",
            "Force and Acceleration: F = ma, relationship between force, mass and acceleration",
            "Energy: Kinetic energy (½mv²), Potential energy (mgh), Conservation of energy",
            "Momentum: p = mv, Conservation of momentum in collisions",
            "Circular Motion: Centripetal force, angular velocity, centrifugal force",
            "Gravitation: Universal law F = Gm₁m₂/r², escape velocity, satellite motion",
            "Simple Harmonic Motion: Pendulum, spring-mass system, frequency and amplitude"
          ],
          importantDates: [
            "1687: Newton's Principia published with laws of motion",
            "1609-1619: Kepler's laws of planetary motion",
            "1798: Cavendish experiment to measure gravitational constant"
          ],
          examples: [
            "Newton's First Law: Object at rest stays at rest unless acted upon by external force",
            "Free fall: All objects fall at same rate (9.8 m/s²) ignoring air resistance", 
            "Projectile motion: Combination of horizontal and vertical motion",
            "Satellite motion: Balance between gravitational force and centrifugal force"
          ]
        }
      }
    },
    "Economics": {
      topics: [
        "Basic Economic Concepts",
        "National Income Accounting",
        "Money and Banking",
        "Fiscal Policy",
        "Monetary Policy",
        "International Trade",
        "Economic Planning in India",
        "Agriculture and Rural Development",
        "Industry and Services Sector",
        "Infrastructure",
        "Poverty and Unemployment",
        "Human Development",
        "Economic Reforms",
        "Current Economic Issues"
      ],
      content: {
        "Basic Economic Concepts": {
          overview: "Economics studies how societies allocate scarce resources to satisfy unlimited wants, involving production, distribution, and consumption of goods and services.",
          keyPoints: [
            "Scarcity: Limited resources relative to unlimited wants",
            "Opportunity Cost: Value of next best alternative foregone",
            "Production Possibility Frontier: Maximum output combinations possible",
            "Demand and Supply: Market forces determining price and quantity",
            "Market Types: Perfect competition, monopoly, oligopoly, monopolistic competition",
            "GDP: Total value of goods and services produced in economy",
            "Inflation: General rise in price level over time"
          ],
          importantDates: [
            "1776: Adam Smith's 'Wealth of Nations' - foundation of modern economics",
            "1936: Keynes' 'General Theory' - macroeconomic revolution",
            "1991: Economic liberalization in India"
          ],
          examples: [
            "Law of Demand: Higher price leads to lower quantity demanded",
            "Law of Supply: Higher price leads to higher quantity supplied",
            "Market equilibrium: Point where demand equals supply",
            "Price elasticity: Responsiveness of demand to price changes"
          ]
        }
      }
    },
    "Mathematics": {
      topics: [
        "Number System",
        "Algebra - Linear Equations",
        "Algebra - Quadratic Equations",
        "Geometry - Triangles",
        "Geometry - Circles",
        "Coordinate Geometry",
        "Trigonometry",
        "Mensuration",
        "Statistics",
        "Probability",
        "Profit and Loss",
        "Simple and Compound Interest",
        "Time and Work",
        "Time, Speed and Distance",
        "Percentage and Ratio",
        "Data Interpretation"
      ],
      content: {
        "Number System": {
          overview: "Number system forms the foundation of mathematics, encompassing different types of numbers and their properties and operations.",
          keyPoints: [
            "Natural Numbers: 1, 2, 3, 4, ... (counting numbers)",
            "Whole Numbers: 0, 1, 2, 3, 4, ... (natural numbers + zero)",
            "Integers: ..., -2, -1, 0, 1, 2, ... (positive and negative whole numbers)",
            "Rational Numbers: Numbers that can be expressed as p/q where q ≠ 0",
            "Irrational Numbers: Numbers that cannot be expressed as simple fractions",
            "Real Numbers: All rational and irrational numbers combined",
            "Prime Numbers: Numbers divisible only by 1 and themselves"
          ],
          importantDates: [
            "Ancient times: Development of counting systems",
            "6th century: Indian mathematicians developed decimal system",
            "9th century: Al-Khwarizmi introduced algebra"
          ],
          examples: [
            "Prime numbers: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29...",
            "Perfect squares: 1, 4, 9, 16, 25, 36, 49, 64, 81, 100...",
            "Fibonacci sequence: 1, 1, 2, 3, 5, 8, 13, 21, 34...",
            "Divisibility rules: Number divisible by 3 if sum of digits divisible by 3"
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
    const subjectData = subjects[selectedSubject as keyof typeof subjects];
    const topicData = subjectData?.content?.[selectedTopic as keyof typeof subjectData.content];

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
