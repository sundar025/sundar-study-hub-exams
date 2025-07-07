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
        "Deccan Sultanates",
        "Sikh Empire",
        "Ahom Kingdom",
        "Mysore Kingdom",
        "Travancore Kingdom",
        "Satavahana Dynasty",
        "Kushan Empire",
        "Harsha Empire",
        "Arab Invasions",
        "Ghaznavid Invasions",
        "Ghurid Dynasty",
        "Slave Dynasty",
        "Khilji Dynasty",
        "Tughlaq Dynasty",
        "Sayyid Dynasty",
        "Lodi Dynasty",
        "Sur Dynasty",
        "Second Battle of Panipat",
        "Third Battle of Panipat",
        "Battle of Plassey",
        "Battle of Buxar",
        "Anglo-Mysore Wars",
        "Anglo-Maratha Wars",
        "Anglo-Sikh Wars",
        "Permanent Settlement",
        "Ryotwari System",
        "Mahalwari System",
        "Wood's Despatch",
        "Hunter Commission",
        "Universities Act",
        "Government of India Act 1858",
        "Government of India Act 1909",
        "Government of India Act 1919",
        "Government of India Act 1935"
      ],
      content: {
        "Indus Valley Civilization": {
          overview: "The Indus Valley Civilization (3300-1300 BCE) was one of the world's earliest urban civilizations, flourishing in the northwestern regions of South Asia. It was characterized by sophisticated urban planning, advanced drainage systems, and a script that remains undeciphered to this day. Spanning across present-day Pakistan and northwest India, it covered an area larger than Egypt and Mesopotamia combined.",
          keyPoints: [
            "Major cities: Harappa, Mohenjo-daro, Dholavira, Kalibangan, Banawali, Lothal, Surkotada, Chanhudaro, Rupar",
            "Advanced urban planning with grid pattern streets and sophisticated drainage systems",
            "Standardized weights, measures, and brick sizes across the civilization",
            "Advanced knowledge of metallurgy, pottery, bead-making, and maritime trade",
            "Harappan script remains undeciphered despite numerous attempts by scholars",
            "No evidence of warfare, weapons, or religious structures found in excavations",
            "Great Bath at Mohenjo-daro suggests ritual bathing practices and public health awareness",
            "Decline theories: Climate change, Aryan invasion, floods, earthquakes, river course changes",
            "Trade networks extended to Mesopotamia, Central Asia, and Gujarat with standardized weights",
            "Social organization appears to have been egalitarian with no clear evidence of rulers or palaces",
            "Agricultural practices included wheat, barley, peas, and cotton cultivation",
            "Advanced water management with wells, reservoirs, and dockyard at Lothal",
            "Artistic achievements include bronze dancing girl, priest-king statue, and various seals",
            "Fire-altars found at Kalibangan suggest religious practices involving fire worship",
            "Sophisticated town planning with residential and commercial areas clearly demarcated"
          ],
          importantDates: [
            "3300-2600 BCE: Early Harappan Period (Ravi Phase) - Foundation and early development",
            "2600-1900 BCE: Mature Harappan Period (Integration Era) - Peak of civilization", 
            "1900-1300 BCE: Late Harappan Period (Localization Era) - Decline and fragmentation",
            "1921: Discovery of Harappa by Dayaram Sahni during archaeological survey",
            "1922: Discovery of Mohenjo-daro by R.D. Banerjee in Sindh region",
            "1946: Discovery of Kalibangan by A. Ghosh in Rajasthan",
            "1967-1968: Discovery of Dholavira by J.P. Joshi in Gujarat",
            "1954: Discovery of Lothal by S.R. Rao with its famous dockyard",
            "1920s: First systematic excavations begin under John Marshall",
            "1980s: Dholavira excavations reveal water conservation techniques"
          ],
          examples: [
            "Great Bath of Mohenjo-daro - earliest public water tank measuring 12m x 7m x 2.4m deep with waterproof bitumen lining",
            "Dancing Girl bronze sculpture showing advanced metallurgical skills and artistic excellence in lost-wax technique",
            "Priest-King statue representing possible ruler or priest class with trefoil pattern shawl and arm band",
            "Harappan seals with animal motifs (unicorn, bull, elephant, rhinoceros) used for trade identification and possibly religious purposes",
            "Dockyard at Lothal - world's earliest known artificial dock for maritime trade with tidal mechanism",
            "Sophisticated drainage system with covered drains, manholes, and street-side waste disposal",
            "Standardized bricks in ratio 4:2:1 used throughout the civilization ensuring structural uniformity",
            "Advanced water management systems including stepped wells, cisterns, and reservoirs at Dholavira",
            "Granaries at Harappa and Mohenjo-daro for storage of surplus agricultural produce",
            "Fire altars at Kalibangan suggesting ritualistic practices and religious ceremonies"
          ]
        },
        "Vedic Period": {
          overview: "The Vedic Period (1500-600 BCE) marks the composition of the Vedas, the earliest Sanskrit literature and Hindu scriptures. This period saw the establishment of Vedic culture in the Indo-Gangetic plains, development of the caste system, and evolution from nomadic to settled agricultural society. It is divided into Early Vedic (Rigvedic) and Later Vedic periods, each with distinct characteristics.",
          keyPoints: [
            "Composition of four Vedas: Rigveda, Samaveda, Yajurveda, and Atharvaveda",
            "Early Vedic Period (1500-1000 BCE): Rigvedic society, pastoral and semi-nomadic lifestyle",
            "Later Vedic Period (1000-600 BCE): Agricultural settlements, territorial kingdoms, complex rituals",
            "Evolution of social structure from flexible tribal system to rigid varna system",
            "Development of Brahmanism with emphasis on sacrificial rituals and priestly class",
            "Geographic expansion from Sapta Sindhu region to Ganga-Yamuna doab",
            "Political organization evolved from tribal chieftains (Raja) to territorial kings",
            "Economic transformation from cattle-based wealth to agricultural surplus",
            "Religious practices centered around nature worship, fire sacrifices, and Soma rituals",
            "Literature includes Vedas, Brahmanas, Aranyakas, and Upanishads",
            "Development of Sanskrit language and Vedic meters for oral transmission",
            "Emergence of philosophical concepts like dharma, karma, and moksha",
            "Iron technology introduction in Later Vedic period revolutionized agriculture",
            "Urban centers like Hastinapura, Kausambi emerged in Later Vedic period",
            "Position of women gradually declined from Early to Later Vedic period"
          ],
          importantDates: [
            "1500-1000 BCE: Early Vedic Period (Rigvedic Period) with composition of Rigveda",
            "1000-600 BCE: Later Vedic Period with composition of other three Vedas",
            "1500 BCE: Approximate beginning of Vedic civilization in northwest India",
            "1000 BCE: Iron Age begins in Indian subcontinent",
            "800-600 BCE: Composition of principal Upanishads",
            "1200-800 BCE: Composition of Samaveda, Yajurveda, and Atharvaveda",
            "900-600 BCE: Brahmana literature composition period",
            "800-500 BCE: Aranyaka texts composition",
            "700-300 BCE: Sutra literature development",
            "600 BCE: End of Vedic period, beginning of post-Vedic developments"
          ],
          examples: [
            "Rigveda contains 1028 hymns (suktas) in 10 mandalas dedicated to various deities",
            "Purusha Sukta in Rigveda describes the cosmic sacrifice and origin of varna system",
            "Nasadiya Sukta questions the creation of universe showing philosophical depth",
            "Gayatri Mantra from Rigveda remains most sacred prayer in Hinduism",
            "Battle of Ten Kings (Dasharajna) mentioned in Rigveda showing tribal conflicts",
            "Rajasuya and Ashvamedha sacrifices in Later Vedic period established royal authority",
            "Gotra system development for marriage regulations and lineage identification",
            "Painted Grey Ware (PGW) pottery characteristic of Later Vedic archaeological sites",
            "Sabha and Samiti as political institutions providing checks on royal power",
            "Concept of Rita (cosmic order) as precursor to later dharma philosophy"
          ]
        },
        "Mauryan Empire": {
          overview: "The Mauryan Empire (321-185 BCE) was the first pan-Indian empire, founded by Chandragupta Maurya with the guidance of Kautilya (Chanakya). It reached its zenith under Ashoka the Great, who later embraced Buddhism and promoted non-violence. The empire was known for its efficient administration, economic prosperity, and cultural achievements, setting precedents for future Indian empires.",
          keyPoints: [
            "Founded by Chandragupta Maurya (321-297 BCE) after overthrowing the Nanda dynasty",
            "Capital at Pataliputra (modern Patna) with sophisticated urban planning and administration",
            "Kautilya's Arthashastra provides detailed account of Mauryan administration and statecraft",
            "Bindusara (297-273 BCE) extended empire to Deccan, known as Amitraghata (slayer of enemies)",
            "Ashoka (273-232 BCE) expanded empire to maximum extent and later embraced Buddhism",
            "Administrative system with central, provincial, and local levels of governance",
            "Efficient espionage system and standing army for maintaining law and order",
            "Economic prosperity through agriculture, trade, and state monopolies",
            "Ashoka's edicts spread across empire promoting dharma and moral governance",
            "Decline began after Ashoka due to weak successors and administrative challenges",
            "Shunga dynasty overthrew last Mauryan ruler Brihadratha in 185 BCE",
            "Cultural synthesis of Indian and Hellenistic traditions in art and architecture",
            "Development of Brahmi script and propagation of Buddhism beyond India",
            "Diplomatic relations with Hellenistic kingdoms and Southeast Asian regions",
            "Infrastructure development including roads, wells, and irrigation systems"
          ],
          importantDates: [
            "321 BCE: Chandragupta Maurya establishes Mauryan Empire",
            "305 BCE: Seleucus-Chandragupta treaty establishing diplomatic relations",
            "297 BCE: Bindusara becomes emperor after Chandragupta's abdication",
            "273 BCE: Ashoka becomes emperor after succession struggle",
            "261 BCE: Kalinga War, Ashoka's last military campaign",
            "260 BCE: Ashoka embraces Buddhism after Kalinga War",
            "250 BCE: Third Buddhist Council held under Ashoka's patronage",
            "185 BCE: Fall of Mauryan Empire, Pushyamitra Shunga kills Brihadratha",
            "232 BCE: Death of Ashoka marking beginning of Mauryan decline",
            "325-324 BCE: Alexander's invasion providing opportunity for Chandragupta's rise"
          ],
          examples: [
            "Ashoka's Rock Edicts and Pillar Edicts promoting dharma and non-violence",
            "Lion Capital at Sarnath becoming national emblem of modern India",
            "Sanchi Stupa commissioned by Ashoka showcasing Mauryan Buddhist architecture",
            "Mauryan palace at Pataliputra with 80 pillars mentioned by Megasthenes",
            "Kautilya's Arthashastra describing administration, economics, and foreign policy",
            "Royal Road from Pataliputra to Taxila facilitating trade and communication",
            "Ashoka's missionaries spreading Buddhism to Sri Lanka, Central Asia, and Southeast Asia",
            "Barabar Caves near Gaya gifted to Ajivika sect showing religious tolerance",
            "Mauryan coins and weights showing standardized economic system",
            "Greek accounts by Megasthenes providing contemporary foreign perspective"
          ]
        }
      }
    },
    "Geography": {
      topics: [
        "Physical Geography of India",
        "Climate and Weather",
        "Monsoon System",
        "Rivers and Drainage Systems",
        "Soil Types and Distribution",
        "Natural Vegetation and Wildlife",
        "Mineral Resources",
        "Agriculture and Farming",
        "Industries and Manufacturing",
        "Transportation Networks",
        "Population and Demographics",
        "Urban and Rural Development",
        "Environmental Issues",
        "Natural Disasters",
        "Mountain Ranges",
        "Plateaus and Plains",
        "Coastal Areas",
        "Islands and Archipelagos",
        "Forest Resources",
        "Water Resources",
        "Energy Resources",
        "Economic Geography",
        "Cultural Geography",
        "Regional Geography",
        "Cartography and Maps",
        "Remote Sensing and GIS",
        "Geomorphology",
        "Biogeography",
        "Agricultural Geography",
        "Industrial Geography",
        "Settlement Geography",
        "Political Geography",
        "Historical Geography",
        "Regional Planning",
        "Sustainable Development"
      ],
      content: {
        "Physical Geography of India": {
          overview: "India's physical geography is incredibly diverse, spanning from the world's highest mountain peaks in the Himalayas to vast coastal plains, deserts, and tropical forests. The country covers 3.28 million square kilometers and is divided into distinct physiographic regions, each with unique geological formations, climate patterns, and ecological characteristics.",
          keyPoints: [
            "Location: 8°4'N to 37°6'N latitude and 68°7'E to 97°25'E longitude",
            "Total area: 3,287,263 square kilometers, world's 7th largest country",
            "Major physiographic divisions: Himalayas, Northern Plains, Peninsular Plateau, Coastal Plains, Islands",
            "Himalayan region: Young fold mountains with three parallel ranges - Shiwaliks, Lesser Himalayas, Greater Himalayas",
            "Northern Plains: Formed by alluvial deposits of Indus, Ganga, and Brahmaputra river systems",
            "Peninsular Plateau: Ancient landmass with Deccan Plateau as the main component",
            "Western and Eastern Ghats: Mountain ranges along the western and eastern coasts",
            "Coastal Plains: Narrow strips along Arabian Sea and Bay of Bengal",
            "Desert regions: Thar Desert in Rajasthan, cold desert in Ladakh",
            "Island groups: Lakshadweep in Arabian Sea, Andaman and Nicobar in Bay of Bengal",
            "Geological diversity: Archaean to recent formations spanning billions of years",
            "Strategic location: Controls major sea routes between Europe and East Asia",
            "Natural boundaries: Himalayas in north, seas on three sides",
            "Tropic of Cancer passes through middle of the country",
            "Time zone: Single time zone (IST) spanning 82°30'E longitude"
          ],
          importantDates: [
            "180 million years ago: Gondwanaland breakup begins",
            "50-40 million years ago: Indian plate collision with Eurasian plate",
            "25 million years ago: Himalayan formation begins",
            "10 million years ago: Himalayas reach current height",
            "2 million years ago: Pleistocene glaciation affects northern regions",
            "1947: Partition creates current international boundaries",
            "1950: Constitution defines territory of India",
            "1961: Goa integration completes mainland territory",
            "1975: Sikkim becomes 22nd state",
            "1987: Goa becomes separate state"
          ],
          examples: [
            "K2 (8,611m) - second highest peak in world located in Pakistan-occupied Kashmir",
            "Kanchenjunga (8,598m) - highest peak entirely within India in Sikkim",
            "Gangotri Glacier - source of river Ganga in Uttarakhand",
            "Western Ghats - UNESCO World Heritage site with high biodiversity",
            "Deccan Traps - volcanic formation covering much of peninsular India",
            "Sundarbans - world's largest mangrove forest in West Bengal",
            "Rann of Kachchh - seasonal salt marsh in Gujarat",
            "Chilika Lake - largest coastal lagoon in India in Odisha",
            "Nilgiri Hills - meeting point of Western and Eastern Ghats",
            "Indo-Gangetic Plains - most fertile agricultural region"
          ]
        },
        "Climate and Weather": {
          overview: "India experiences a tropical monsoon climate characterized by distinct wet and dry seasons. The climate is primarily controlled by monsoons, altitude, and distance from sea. The country experiences four main seasons: winter, summer, southwest monsoon, and post-monsoon, with significant regional variations due to its vast size and diverse topography.",
          keyPoints: [
            "Tropical monsoon climate dominated by seasonal wind patterns",
            "Four distinct seasons: Winter (Dec-Feb), Summer (Mar-May), SW Monsoon (Jun-Sep), Post-monsoon (Oct-Nov)",
            "Temperature ranges from -45°C in Ladakh to 50°C in Rajasthan",
            "Annual rainfall varies from 100mm in western Rajasthan to 11,000mm in Meghalaya",
            "Southwest monsoon brings 75% of annual rainfall",
            "Northeast monsoon affects Tamil Nadu and southern Andhra Pradesh",
            "Western Ghats create orographic rainfall on windward side",
            "Rain shadow effect creates dry areas on leeward side of mountains",
            "Himalayan barrier prevents cold Central Asian winds",
            "El Niño and La Niña significantly affect monsoon patterns",
            "Climate zones: Tropical wet, tropical dry, semi-arid, arid, mountain climates",
            "Seasonal reversal of winds characteristic of monsoon climate",
            "High humidity during monsoon season, dry during winter",
            "Cyclones affect eastern and western coasts during post-monsoon",
            "Climate change affecting monsoon patterns and extreme weather events"
          ],
          importantDates: [
            "June 1: Normal onset of southwest monsoon in Kerala",
            "July 15: Monsoon covers entire country normally",
            "September 1: Monsoon withdrawal begins from northwest",
            "October 15: Complete withdrawal of southwest monsoon normally",
            "December-January: Northeast monsoon peak in Tamil Nadu",
            "March-May: Pre-monsoon season with hot weather",
            "1875: First systematic weather observations begin",
            "1886: India Meteorological Department established",
            "1920-1930: Sir Gilbert Walker studies Southern Oscillation",
            "1982-83: Severe El Niño causes drought"
          ],
          examples: [
            "Cherrapunji receives highest rainfall in world during monsoon months",
            "Mawsynram in Meghalaya holds world record for annual rainfall",
            "Jaisalmer in Rajasthan receives less than 200mm annual rainfall",
            "Mumbai receives 2400mm rainfall in just 4 monsoon months",
            "Kashmir valley remains snow-bound for 4-5 months",
            "Coastal areas experience moderate temperatures due to sea influence",
            "Delhi experiences continental climate with hot summers and cold winters",
            "Western Ghats receive heavy orographic rainfall",
            "Thar Desert experiences extreme diurnal temperature variation",
            "Cyclone Fani (2019) demonstrated intensity of tropical cyclones"
          ]
        }
      }
    },
    "Indian Polity and Governance": {
      topics: [
        "Indian Constitution",
        "Fundamental Rights",
        "Fundamental Duties",
        "Directive Principles of State Policy",
        "Union Government",
        "State Government",
        "Local Government",
        "Parliament",
        "President of India",
        "Prime Minister and Council of Ministers",
        "Supreme Court",
        "High Courts",
        "Election Commission",
        "Comptroller and Auditor General",
        "Union Public Service Commission",
        "Attorney General",
        "Emergency Provisions",
        "Amendment Procedures",
        "Citizenship",
        "Scheduled Castes and Tribes",
        "Official Languages",
        "Centre-State Relations",
        "Inter-State Relations",
        "Constitutional Bodies",
        "Statutory Bodies",
        "Right to Information",
        "Lokpal and Lokayukta",
        "National Human Rights Commission",
        "Women's Rights",
        "Child Rights",
        "Environmental Law",
        "Cyber Laws",
        "Administrative Reforms",
        "Judicial Reforms",
        "Electoral Reforms"
      ],
      content: {
        "Indian Constitution": {
          overview: "The Indian Constitution, adopted on 26th November 1949 and enforced on 26th January 1950, is the supreme law of India. It is the world's longest written constitution with 395 articles, 22 parts, and 12 schedules. Drafted by the Constituent Assembly under Dr. B.R. Ambedkar's chairmanship, it establishes India as a sovereign, socialist, secular, democratic republic with a parliamentary system of government.",
          keyPoints: [
            "World's longest written constitution with detailed provisions for governance",
            "Constituent Assembly worked for 2 years, 11 months, and 18 days",
            "Dr. B.R. Ambedkar as Chairman of Drafting Committee",
            "Borrowed features from various constitutions worldwide",
            "Federal structure with unitary bias during emergencies",
            "Parliamentary system of government at center and states",
            "Independent judiciary with judicial review powers",
            "Fundamental Rights guaranteed to all citizens",
            "Directive Principles to guide state policy",
            "Single citizenship for all Indians",
            "Universal adult suffrage from the beginning",
            "Emergency provisions for national security",
            "Detailed amendment procedure in Article 368",
            "Secular state with no official religion",
            "Democratic republic with elected head of state"
          ],
          importantDates: [
            "9 December 1946: Constituent Assembly first meeting",
            "13 December 1946: Nehru moves Objectives Resolution",
            "29 August 1947: Drafting Committee appointed",
            "26 November 1949: Constitution adopted by Constituent Assembly",
            "24 January 1950: Last meeting of Constituent Assembly",
            "26 January 1950: Constitution comes into force",
            "1951: First Constitutional Amendment",
            "1973: Kesavananda Bharati case establishes Basic Structure doctrine",
            "1976: 42nd Amendment - known as Mini Constitution",
            "2020: 104th Constitutional Amendment on reservation extension"
          ],
          examples: [
            "Preamble declares India as sovereign, socialist, secular, democratic republic",
            "Article 32 - Right to Constitutional Remedies called 'Heart and Soul'",
            "Article 370 gave special status to Jammu and Kashmir (abrogated 2019)",
            "Article 356 - President's Rule in states during constitutional breakdown",
            "42nd Amendment (1976) added 'Socialist' and 'Secular' to Preamble",
            "Basic Structure doctrine prevents alteration of constitution's core features",
            "Judicial review power allows courts to strike down unconstitutional laws",
            "Emergency provisions used three times - 1962, 1971, 1975-77",
            "GST constitutional amendment required ratification by half the states",
            "Constitutional remedies available through writs in Supreme Court and High Courts"
          ]
        }
      }
    },
    "Economics": {
      topics: [
        "Indian Economy Overview",
        "Economic Planning",
        "Five Year Plans",
        "NITI Aayog",
        "Banking System",
        "Monetary Policy",
        "Fiscal Policy",
        "Public Finance",
        "Taxation System",
        "Budget and Budgetary Process",
        "Agriculture and Rural Economy",
        "Industrial Development",
        "Service Sector",
        "Trade and Commerce",
        "Foreign Trade Policy",
        "Balance of Payments",
        "Foreign Exchange",
        "Capital Markets",
        "Insurance Sector",
        "Cooperative Movement",
        "Poverty and Unemployment",
        "Income Distribution",
        "Economic Reforms",
        "Liberalization and Globalization",
        "Disinvestment",
        "Infrastructure Development",
        "Energy Sector",
        "Transportation",
        "Telecommunications",
        "Digital Economy",
        "Start-up Ecosystem",
        "Financial Inclusion",
        "Sustainable Development",
        "Green Economy",
        "Economic Survey"
      ],
      content: {
        "Indian Economy Overview": {
          overview: "The Indian economy is the world's fifth-largest economy by nominal GDP and third-largest by purchasing power parity. It is characterized by a mixed economy model with significant roles for both public and private sectors. The economy has transformed from agriculture-dominant to services-led, with manufacturing playing an important role. India is known for its demographic dividend, growing middle class, and emerging as a global hub for IT services and pharmaceuticals.",
          keyPoints: [
            "World's 5th largest economy by nominal GDP ($3.7 trillion in 2023)",
            "3rd largest economy by purchasing power parity (PPP)",
            "Mixed economy with public and private sector participation",
            "Service sector contributes about 55% of GDP",
            "Manufacturing sector contributes about 17% of GDP",
            "Agriculture employs 42% of workforce but contributes only 16% to GDP",
            "Population of 1.4 billion provides large domestic market",
            "Demographic dividend with median age of 28 years",
            "Growing middle class estimated at 300+ million people",
            "IT services and pharmaceuticals are major export sectors",
            "Economic growth rate averaging 6-7% annually in recent years",
            "Inflation targeting monetary policy framework since 2016",
            "Goods and Services Tax (GST) implemented in 2017",
            "Digital payments revolution with UPI transactions",
            "Start-up ecosystem ranks 3rd globally after US and China"
          ],
          importantDates: [
            "1947: Independence, mixed economy model adopted",
            "1950: Planning Commission established",
            "1951: First Five Year Plan launched",
            "1991: Economic liberalization begins",
            "1992: Securities market reforms",
            "2014: Make in India initiative launched",
            "2015: NITI Aayog replaces Planning Commission",
            "2016: Demonetization implemented",
            "2017: Goods and Services Tax (GST) launched",
            "2020: COVID-19 pandemic impacts economy significantly"
          ],
          examples: [
            "IT sector exports worth $175+ billion annually",
            "Pharmaceutical industry supplies 20% of global generic medicines",
            "Automobile sector produces 25+ million vehicles annually",
            "Textile industry employs 45+ million people",
            "Agriculture supports livelihood of 600+ million people",
            "Banking sector with 200+ scheduled commercial banks",
            "Stock exchanges - BSE and NSE among world's largest",
            "UPI processes 8+ billion transactions monthly",
            "Renewable energy capacity exceeding 100 GW",
            "Digital India initiatives reaching rural areas"
          ]
        }
      }
    },
    "Science and Technology": {
      topics: [
        "Space Technology",
        "Nuclear Technology",
        "Information Technology",
        "Biotechnology",
        "Nanotechnology",
        "Renewable Energy",
        "Medical Technology",
        "Agricultural Technology",
        "Defense Technology",
        "Communication Technology",
        "Transportation Technology",
        "Environmental Technology",
        "Materials Science",
        "Artificial Intelligence",
        "Robotics",
        "Quantum Computing",
        "Genetic Engineering",
        "Stem Cell Research",
        "Vaccine Development",
        "Drug Discovery",
        "Digital Technologies",
        "Internet of Things",
        "Blockchain Technology",
        "Cybersecurity",
        "Data Science",
        "Machine Learning",
        "3D Printing",
        "Virtual Reality",
        "Augmented Reality",
        "Smart Cities",
        "Green Technology",
        "Clean Energy",
        "Water Technology",
        "Waste Management",
        "Climate Technology"
      ],
      content: {
        "Space Technology": {
          overview: "India's space program, led by the Indian Space Research Organisation (ISRO), has achieved remarkable milestones in space exploration and satellite technology. From humble beginnings in the 1960s, India has become a major space power, known for cost-effective missions, indigenous technology development, and commercial satellite launches. The program focuses on practical applications for national development while also pursuing ambitious exploration missions.",
          keyPoints: [
            "ISRO established in 1969 under Dr. Vikram Sarabhai's vision",
            "World's first organization to reach Mars orbit in first attempt (Mangalyaan)",
            "Cost-effective space missions with frugal engineering approach",
            "PSLV rocket has 98% success rate with 50+ launches",
            "GSLV series for launching heavy satellites to geostationary orbit",
            "Chandrayaan missions for lunar exploration and scientific research",
            "Commercial arm Antrix Corporation for international satellite launches",
            "NavIC (Navigation with Indian Constellation) indigenous GPS system",
            "100+ satellite launches for various countries generating revenue",
            "Reusable Launch Vehicle (RLV) technology under development",
            "Human spaceflight program Gaganyaan planned for 2024-25",
            "Aditya-L1 mission to study the Sun from Lagrange point",
            "Small satellite technology with record 104 satellites in single launch",
            "Earth observation satellites for agriculture, weather, and disaster management",
            "Communication satellites providing TV, internet, and telephone services"
          ],
          importantDates: [
            "1962: INCOSPAR (Indian National Committee for Space Research) formed",
            "1969: ISRO established",
            "1975: Aryabhata - first Indian satellite launched",
            "1980: SLV-3 places Rohini satellite in orbit",
            "1994: PSLV successfully launches IRS-P2",
            "2001: GSLV maiden flight",
            "2008: Chandrayaan-1 discovers water on Moon",
            "2013: Mars Orbiter Mission (Mangalyaan) launched",
            "2017: Record 104 satellites launched in single mission",
            "2019: Chandrayaan-2 launched to Moon's south pole"
          ],
          examples: [
            "Mars Orbiter Mission succeeded at cost of $74 million, less than Hollywood movie Gravity",
            "PSLV-C37 launched 104 satellites including 96 foreign satellites for commercial purposes",
            "Chandrayaan-1 discovered water molecules on lunar surface",
            "CARTOSAT series provides high-resolution Earth imagery for mapping",
            "INSAT system provides communication and meteorological services",
            "NavIC provides positioning accuracy of better than 20 meters",
            "Reusable Launch Vehicle Technology Demonstrator tested successfully",
            "ASTROSAT - India's first multi-wavelength space observatory",
            "GSAT series satellites provide direct-to-home TV services",
            "Polar Satellite Launch Vehicle used for launching foreign satellites commercially"
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
      },
      {
        question: "Which Vedic text contains the famous Purusha Sukta describing the origin of varna system?",
        options: ["Samaveda", "Yajurveda", "Atharvaveda", "Rigveda"],
        correct: 3,
        explanation: "The Purusha Sukta in the 10th mandala of Rigveda describes the cosmic sacrifice and origin of the four varnas."
      },
      {
        question: "The Battle of Ten Kings (Dasharajna) is mentioned in which Vedic text?",
        options: ["Rigveda", "Samaveda", "Yajurveda", "Atharvaveda"],
        correct: 0,
        explanation: "The Battle of Ten Kings is described in the Rigveda, showing early tribal conflicts in Vedic period."
      },
      {
        question: "Ashoka's edicts were first deciphered by?",
        options: ["Alexander Cunningham", "James Prinsep", "Max Muller", "William Jones"],
        correct: 1,
        explanation: "James Prinsep deciphered Brahmi script and Ashoka's edicts in 1837, revolutionizing Indian historical studies."
      }
    ],
    "Geography": [
      {
        question: "Which is the highest peak entirely within Indian territory?",
        options: ["K2", "Kanchenjunga", "Nanda Devi", "Kamet"],
        correct: 1,
        explanation: "Kanchenjunga (8,598m) is the highest peak entirely within Indian territory, located in Sikkim."
      },
      {
        question: "The Tropic of Cancer passes through how many Indian states?",
        options: ["6", "7", "8", "9"],
        correct: 2,
        explanation: "The Tropic of Cancer passes through 8 Indian states: Gujarat, Rajasthan, Madhya Pradesh, Chhattisgarh, Jharkhand, West Bengal, Tripura, and Mizoram."
      },
      {
        question: "Which river is known as the 'Sorrow of Bengal'?",
        options: ["Ganga", "Damodar", "Hooghly", "Teesta"],
        correct: 1,
        explanation: "Damodar river is called the 'Sorrow of Bengal' due to its frequent devastating floods before the construction of dams."
      },
      {
        question: "The Western Ghats meet the Eastern Ghats at which hills?",
        options: ["Nilgiri Hills", "Cardamom Hills", "Anamalai Hills", "Palani Hills"],
        correct: 0,
        explanation: "The Western and Eastern Ghats meet at the Nilgiri Hills in Tamil Nadu."
      },
      {
        question: "Which state receives maximum rainfall from northeast monsoon?",
        options: ["Kerala", "Tamil Nadu", "Karnataka", "Andhra Pradesh"],
        correct: 1,
        explanation: "Tamil Nadu receives maximum rainfall from the northeast monsoon during October-December."
      }
    ],
    "Indian Polity and Governance": [
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
    ],
    "Economics": [
      {
        question: "NITI Aayog replaced which organization?",
        options: ["Finance Commission", "Planning Commission", "Economic Advisory Council", "Reserve Bank of India"],
        correct: 1,
        explanation: "NITI Aayog replaced the Planning Commission in 2015 to provide strategic policy direction."
      },
      {
        question: "What does UPI stand for in the context of digital payments?",
        options: ["Universal Payment Interface", "Unified Payment Interface", "United Payment Interface", "Universal Payment Integration"],
        correct: 1,
        explanation: "UPI stands for Unified Payments Interface, a real-time payment system developed by NPCI."
      },
      {
        question: "The Goods and Services Tax (GST) was implemented in which year?",
        options: ["2016", "2017", "2018", "2019"],
        correct: 1,
        explanation: "GST was implemented on July 1, 2017, replacing multiple indirect taxes with a unified tax system."
      },
      {
        question: "Which sector contributes the highest to India's GDP?",
        options: ["Agriculture", "Manufacturing", "Services", "Mining"],
        correct: 2,
        explanation: "The services sector contributes approximately 55% to India's GDP, making it the largest contributor."
      },
      {
        question: "India's rank in global economy by nominal GDP is?",
        options: ["3rd", "4th", "5th", "6th"],
        correct: 2,
        explanation: "India is the world's 5th largest economy by nominal GDP as of 2023."
      }
    ],
    "Science and Technology": [
      {
        question: "India's Mars mission is known as?",
        options: ["Mangalyaan", "Chandrayaan", "Aryabhata", "Bhaskara"],
        correct: 0,
        explanation: "Mangalyaan (Mars Orbiter Mission) was India's successful mission to Mars, launched in 2013."
      },
      {
        question: "ISRO was established in which year?",
        options: ["1962", "1969", "1972", "1975"],
        correct: 1,
        explanation: "ISRO (Indian Space Research Organisation) was established in 1969."
      },
      {
        question: "India's indigenous navigation system is called?",
        options: ["NAVSAT", "NavIC", "GAGAN", "IRNSS"],
        correct: 1,
        explanation: "NavIC (Navigation with Indian Constellation) is India's indigenous satellite navigation system."
      },
      {
        question: "Which rocket is known as ISRO's workhorse?",
        options: ["GSLV", "PSLV", "SLV", "ASLV"],
        correct: 1,
        explanation: "PSLV (Polar Satellite Launch Vehicle) is known as ISRO's workhorse with over 98% success rate."
      },
      {
        question: "Chandrayaan-1 discovered what on the Moon?",
        options: ["Helium-3", "Water molecules", "Oxygen", "Methane"],
        correct: 1,
        explanation: "Chandrayaan-1 discovered water molecules on the lunar surface, a significant scientific achievement."
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
