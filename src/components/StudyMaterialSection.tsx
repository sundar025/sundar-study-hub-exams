import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BookOpen, ArrowLeft, Clock, Users, Award, FileText, HelpCircle } from "lucide-react";

interface StudyContent {
  title: string;
  description: string;
  content: string;
  keyPoints: string[];
  importantDates?: string[];
  examples?: string[];
  previousYearQuestions?: {
    question: string;
    options: string[];
    correct: number;
    year: string;
    exam: string;
    explanation: string;
  }[];
}

interface Subject {
  name: string;
  icon: string;
  color: string;
  topics: { [key: string]: StudyContent };
}

const StudyMaterialSection = ({ examName, onBack }: { examName: string; onBack: () => void }) => {
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null);
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<"content" | "questions">("content");

  const subjects: { [key: string]: Subject } = {
    "History": {
      name: "History",
      icon: "📚",
      color: "bg-amber-500",
      topics: {
        "Indus Valley Civilization": {
          title: "Indus Valley Civilization (3300-1300 BCE)",
          description: "One of the world's earliest urban civilizations",
          content: `The Indus Valley Civilization, also known as the Harappan Civilization, was one of the world's earliest urban civilizations. It flourished in the basins of the Indus River, which flows through the length of Pakistan, and along a system of perennial, mostly monsoon-fed, rivers that once coursed in the vicinity of the seasonal Ghaggar-Hakra river in northwest India and eastern Pakistan.

The civilization's cities were noted for their urban planning, baked brick houses, elaborate drainage systems, water supply systems, clusters of large non-residential buildings, and new techniques in handicraft and metallurgy. The Great Bath of Mohenjo-daro and the sophisticated town planning indicate advanced civic administration.

Archaeological evidence suggests that the Harappan people were peaceful traders who had extensive trade networks reaching Mesopotamia, Central Asia, and Gujarat. They developed a standardized system of weights and measures, and their script, though undeciphered, appears on numerous seals and artifacts.

The decline of the civilization remains a mystery, with theories including climate change, river course changes, invasions, and internal decay being proposed by historians and archaeologists.`,
          keyPoints: [
            "Flourished between 3300-1300 BCE across Pakistan and northwest India",
            "Major cities: Harappa, Mohenjo-daro, Dholavira, Kalibangan, Lothal, Banawali",
            "Advanced urban planning with grid system and sophisticated drainage",
            "Great Bath at Mohenjo-daro - earliest known public water tank",
            "Standardized weights, measures, and brick sizes",
            "Undeciphered script found on seals and pottery",
            "No evidence of warfare, weapons, or palaces - egalitarian society",
            "Skilled in metallurgy, pottery, bead-making, and cotton cultivation",
            "Extensive trade networks with Mesopotamia and other regions",
            "Decline theories: climate change, Aryan invasion, natural disasters"
          ],
          importantDates: [
            "3300 BCE - Early Harappan Period begins",
            "2600-1900 BCE - Mature Harappan Period (peak civilization)",
            "1900-1300 BCE - Late Harappan Period (decline phase)",
            "1922 - Discovery of Harappa by R.D. Banerjee",
            "1924 - Discovery of Mohenjo-daro by John Marshall"
          ],
          examples: [
            "Harappa - First site discovered, gave name to the civilization",
            "Mohenjo-daro - 'Mound of the Dead', best preserved site with Great Bath",
            "Dholavira - Site in Gujarat with unique water conservation system",
            "Lothal - Port city with world's earliest known dock"
          ],
          previousYearQuestions: [
            {
              question: "The Indus Valley Civilization was discovered in which year?",
              options: ["1920", "1921", "1922", "1924"],
              correct: 2,
              year: "2023",
              exam: "UPSC Prelims",
              explanation: "The Indus Valley Civilization was first discovered in 1922 when R.D. Banerjee discovered Harappa."
            },
            {
              question: "Which of the following sites of Indus Valley Civilization is located in Gujarat?",
              options: ["Harappa", "Mohenjo-daro", "Dholavira", "Kalibangan"],
              correct: 2,
              year: "2022",
              exam: "SSC CGL",
              explanation: "Dholavira is located in the Kutch district of Gujarat and is known for its sophisticated water management system."
            },
            {
              question: "The Great Bath was found at which Indus Valley site?",
              options: ["Harappa", "Mohenjo-daro", "Lothal", "Kalibangan"],
              correct: 1,
              year: "2023",
              exam: "TNPSC Group 1",
              explanation: "The Great Bath, a remarkable feat of ancient engineering, was discovered at Mohenjo-daro."
            }
          ]
        },
        "Vedic Period": {
          title: "Vedic Period (1500-500 BCE)",
          description: "Foundation of Indian civilization and Hindu culture",
          content: `The Vedic Period marks the foundation of Indian civilization and is divided into Early Vedic Period (1500-1000 BCE) and Later Vedic Period (1000-500 BCE). This period is characterized by the composition of the Vedas, the oldest sacred texts of Hinduism.

The Early Vedic Period, also known as the Rigvedic Period, was dominated by pastoral and semi-nomadic Aryan tribes who migrated to the Indian subcontinent. The Rigveda, composed during this time, provides insights into their social, religious, and political life. Society was tribal, with the family as the basic unit, and cattle were the primary source of wealth.

The Later Vedic Period saw significant changes with the expansion of Aryan settlements into the Gangetic plains. Agriculture became more important, leading to settled life. The period witnessed the composition of other Vedas (Sama, Yajur, Atharva), Brahmanas, Aranyakas, and early Upanishads. The varna system became more rigid, and complex rituals developed.

Political organization evolved from simple tribal chieftainships to more complex kingdoms. The concept of kingship became divine, and elaborate coronation ceremonies (Rajasuya, Ashvamedha) were performed.`,
          keyPoints: [
            "Divided into Early Vedic (1500-1000 BCE) and Later Vedic (1000-500 BCE) periods",
            "Composition of four Vedas: Rig, Sama, Yajur, and Atharva Veda",
            "Early Vedic: Pastoral, semi-nomadic life centered around cattle wealth",
            "Later Vedic: Settled agricultural life in Gangetic plains",
            "Evolution from tribal society to monarchical kingdoms",
            "Development of varna system: Brahmana, Kshatriya, Vaishya, Shudra",
            "Important texts: Brahmanas, Aranyakas, Upanishads",
            "Religious practices: Fire worship, elaborate sacrificial rituals",
            "Social structure: Patriarchal joint family system",
            "Economic activities: Cattle rearing, agriculture, trade, crafts"
          ],
          importantDates: [
            "1500 BCE - Beginning of Early Vedic Period",
            "1500-1000 BCE - Composition of Rigveda",
            "1000 BCE - Beginning of Later Vedic Period",
            "1000-500 BCE - Composition of other Vedas and associated literature",
            "800-200 BCE - Composition of principal Upanishads"
          ],
          examples: [
            "Rigveda - Oldest Veda with 1028 hymns in 10 mandalas",
            "Gayatri Mantra - Most sacred verse from Rigveda",
            "Indra - Most important deity in Rigvedic pantheon",
            "Ashvamedha - Horse sacrifice ceremony for universal sovereignty"
          ],
          previousYearQuestions: [
            {
              question: "Which is the oldest Veda?",
              options: ["Sama Veda", "Yajur Veda", "Rig Veda", "Atharva Veda"],
              correct: 2,
              year: "2023",
              exam: "UPSC Prelims",
              explanation: "Rig Veda is the oldest among the four Vedas, composed around 1500-1000 BCE."
            },
            {
              question: "The Later Vedic Period is associated with which geographical region?",
              options: ["Indus Valley", "Gangetic Plains", "Deccan Plateau", "Western Ghats"],
              correct: 1,
              year: "2022",
              exam: "SSC CHSL",
              explanation: "The Later Vedic Period saw Aryan expansion into the Gangetic Plains where they established settled agricultural communities."
            }
          ]
        },
        "Mauryan Empire": {
          title: "Mauryan Empire (321-185 BCE)",
          description: "First pan-Indian empire under Chandragupta and Ashoka",
          content: `The Mauryan Empire was the first large, powerful political and military empire of ancient India. Founded by Chandragupta Maurya in 321 BCE with the help of Chanakya (Kautilya), it lasted until 185 BCE. The empire stretched from Bengal in the east to Afghanistan in the west and from Kashmir in the north to Karnataka in the south.

Chandragupta Maurya established the empire by overthrowing the Nanda dynasty. His military tactics and administrative policies, guided by Chanakya's Arthashastra, helped consolidate power. The empire reached its zenith under his grandson Ashoka the Great (268-232 BCE), who initially expanded the empire through conquest but later embraced Buddhism after the bloody Kalinga War.

The Mauryan administration was highly centralized with the king at the apex. The empire was divided into provinces governed by princes or other members of the royal family. The administrative system included a well-organized bureaucracy, efficient taxation system, and a large standing army. Trade and commerce flourished, with a common currency facilitating economic growth.

Ashoka's reign marked a golden age of Indian history. His dhamma (righteousness) policy promoted moral values, religious tolerance, and welfare measures. He erected numerous stupas and pillars with edicts inscribed in Prakrit, promoting Buddhist values and administrative policies.`,
          keyPoints: [
            "Founded by Chandragupta Maurya in 321 BCE with Chanakya's guidance",
            "First pan-Indian empire covering most of the subcontinent",
            "Capital at Pataliputra (modern Patna) in Magadha",
            "Key rulers: Chandragupta, Bindusara, Ashoka the Great",
            "Ashoka's conversion to Buddhism after Kalinga War (261 BCE)",
            "Promotion of Dhamma - moral and ethical principles",
            "Highly centralized administration with provincial system",
            "Efficient taxation, military, and judicial systems",
            "Promotion of trade, crafts, and economic development",
            "Decline after Ashoka due to succession disputes and weak rulers"
          ],
          importantDates: [
            "321 BCE - Chandragupta Maurya establishes the empire",
            "305 BCE - Treaty with Seleucus Nicator",
            "297 BCE - Bindusara becomes emperor",
            "268 BCE - Ashoka becomes emperor",
            "261 BCE - Kalinga War and Ashoka's conversion to Buddhism",
            "232 BCE - Death of Ashoka",
            "185 BCE - End of Mauryan Empire under Brihadratha"
          ],
          examples: [
            "Arthashastra - Ancient treatise on statecraft by Chanakya",
            "Kalinga War - Decisive battle that led to Ashoka's transformation",
            "Ashoka Pillars - Stone pillars with edicts throughout the empire",
            "Lion Capital at Sarnath - National emblem of India"
          ],
          previousYearQuestions: [
            {
              question: "Who founded the Mauryan Empire?",
              options: ["Ashoka", "Bindusara", "Chandragupta Maurya", "Chanakya"],
              correct: 2,
              year: "2023",
              exam: "UPSC Prelims",
              explanation: "Chandragupta Maurya founded the Mauryan Empire in 321 BCE with the help of his advisor Chanakya."
            },
            {
              question: "The Kalinga War was fought by which Mauryan ruler?",
              options: ["Chandragupta Maurya", "Bindusara", "Ashoka", "Kunala"],
              correct: 2,
              year: "2022",
              exam: "TNPSC Group 2",
              explanation: "The Kalinga War (261 BCE) was fought by Ashoka, which led to his conversion to Buddhism due to the massive bloodshed."
            }
          ]
        },
        "Gupta Empire": {
          title: "Gupta Empire (320-550 CE)",
          description: "Golden Age of ancient India - arts, science, and literature",
          content: `The Gupta Empire, founded by Sri Gupta around 240 CE and consolidated by Chandragupta I in 320 CE, is often called the 'Golden Age' of ancient India. The empire reached its peak under Chandragupta II (Vikramaditya) and Kumaragupta I, covering much of northern and parts of central and western India.

This period witnessed unprecedented developments in art, architecture, literature, science, and mathematics. The decimal system, concept of zero, and Arabic numerals originated during this time. Great mathematicians like Aryabhata and Brahmagupta made revolutionary contributions. In literature, Kalidasa wrote masterpieces like Shakuntala and Meghaduta.

The Gupta administration was less centralized than the Mauryan system, with local autonomy being respected. The economy prospered through agriculture, trade, and crafts. The period saw religious tolerance with Hinduism experiencing a revival while Buddhism and Jainism continued to flourish.

Art and architecture reached new heights with the creation of exquisite sculptures, paintings (Ajanta Caves), and architectural monuments. The Gupta style of art became the classical standard for Indian art. Universities like Nalanda and Takshashila attracted scholars from across Asia.`,
          keyPoints: [
            "Founded by Sri Gupta (c. 240 CE), consolidated by Chandragupta I (320 CE)",
            "Golden Age of ancient India - peak of cultural and scientific achievement",
            "Key rulers: Chandragupta I, Samudragupta, Chandragupta II (Vikramaditya)",
            "Capital initially at Pataliputra, later shifted to Ujjain",
            "Decimal system, zero concept, and 'Arabic' numerals developed",
            "Great scholars: Aryabhata, Brahmagupta, Varahamihira, Kalidasa",
            "Religious tolerance - Hindu revival alongside Buddhist and Jain traditions",
            "Classical art style - Ajanta and Ellora caves, Gupta sculptures",
            "Flourishing trade with Southeast Asia and Roman Empire",
            "Decline due to Hun invasions and internal conflicts (6th century CE)"
          ],
          importantDates: [
            "240 CE - Sri Gupta establishes the dynasty",
            "320 CE - Chandragupta I's coronation, beginning of Gupta Era",
            "335-375 CE - Reign of Samudragupta, great conqueror",
            "375-415 CE - Reign of Chandragupta II Vikramaditya",
            "415-455 CE - Reign of Kumaragupta I",
            "480-550 CE - Hun invasions and gradual decline",
            "550 CE - Effective end of Gupta Empire"
          ],
          examples: [
            "Aryabhata - Mathematician-astronomer, calculated value of π",
            "Kalidasa - Greatest Sanskrit poet and dramatist",
            "Ajanta Caves - Buddhist rock-cut caves with exquisite paintings",
            "Iron Pillar of Delhi - Rust-resistant metallurgical marvel"
          ],
          previousYearQuestions: [
            {
              question: "The Gupta period is known as the Golden Age of India primarily because of developments in:",
              options: ["Military conquests", "Art and literature", "Trade and commerce", "Religious reforms"],
              correct: 1,
              year: "2023",
              exam: "UPSC Prelims",
              explanation: "The Gupta period is called the Golden Age due to remarkable achievements in art, literature, science, and culture."
            },
            {
              question: "Who among the following was known as 'Vikramaditya'?",
              options: ["Chandragupta I", "Samudragupta", "Chandragupta II", "Kumaragupta"],
              correct: 2,
              year: "2022",
              exam: "SSC CGL",
              explanation: "Chandragupta II was known as Vikramaditya and his reign marked the peak of the Gupta golden age."
            }
          ]
        },
        "Delhi Sultanate": {
          title: "Delhi Sultanate (1206-1526 CE)",
          description: "Islamic rule in medieval India through five dynasties",
          content: `The Delhi Sultanate was a series of five successive Islamic kingdoms that ruled over large parts of India from 1206 to 1526 CE. It began with the establishment of the Mamluk (Slave) dynasty by Qutb-ud-din Aibak after the defeat of Prithviraj Chauhan in the Second Battle of Tarain (1192).

The five dynasties were: Mamluk/Slave Dynasty (1206-1290), Khalji Dynasty (1290-1320), Tughluq Dynasty (1320-1414), Sayyid Dynasty (1414-1451), and Lodi Dynasty (1451-1526). Each dynasty contributed to the political, cultural, and architectural landscape of medieval India.

The Sultanate introduced Islamic administrative practices, art, and architecture to India. The period saw the construction of magnificent monuments like Qutb Minar, Red Fort, and various mosques. The Sultans maintained large armies, efficient administrative systems, and promoted trade and commerce.

Notable rulers include Iltutmish (who consolidated the Sultanate), Razia Sultan (the only female ruler), Alauddin Khalji (who repelled Mongol invasions), Muhammad bin Tughluq (known for his experimental policies), and Ibrahim Lodi (the last Sultan defeated by Babur in 1526).

The Sultanate period witnessed significant cultural synthesis between Islamic and Indian traditions, leading to the development of Indo-Islamic culture that influenced subsequent periods.`,
          keyPoints: [
            "Five successive dynasties ruling from Delhi (1206-1526 CE)",
            "Established after Second Battle of Tarain (1192) and Battle of Chandwar",
            "Dynasties: Mamluk, Khalji, Tughluq, Sayyid, Lodi",
            "Introduction of Islamic administration, law, and culture",
            "Notable rulers: Iltutmish, Razia Sultan, Alauddin Khalji, Muhammad Tughluq",
            "Architectural achievements: Qutb Minar, Alai Darwaza, Red Fort",
            "Military innovations: Use of cavalry, new siege techniques",
            "Administrative systems: Iqta system, revenue collection methods",
            "Cultural synthesis: Development of Indo-Islamic art and architecture",
            "End with Babur's victory over Ibrahim Lodi at Panipat (1526)"
          ],
          importantDates: [
            "1192 - Second Battle of Tarain, Prithviraj Chauhan defeated",
            "1206 - Establishment of Delhi Sultanate by Qutb-ud-din Aibak",
            "1236-1240 - Reign of Razia Sultan, first female ruler",
            "1296-1316 - Reign of Alauddin Khalji, Mongol invasions repelled",
            "1325-1351 - Reign of Muhammad bin Tughluq, experimental policies",
            "1398 - Timur's invasion of Delhi under Tughluqs",
            "1526 - First Battle of Panipat, end of Delhi Sultanate"
          ],
          examples: [
            "Qutb Minar - Victory tower built by Qutb-ud-din Aibak",
            "Iqta System - Land revenue system introduced by Iltutmish",
            "Market Control Policy - Price control measures by Alauddin Khalji",
            "Token Currency - Failed experiment by Muhammad bin Tughluq"
          ],
          previousYearQuestions: [
            {
              question: "Who was the first woman ruler of Delhi Sultanate?",
              options: ["Raziya Sultan", "Chand Bibi", "Nur Jahan", "Jahanara"],
              correct: 0,
              year: "2023",
              exam: "UPSC Prelims",
              explanation: "Razia Sultan (1236-1240) was the first and only female ruler of the Delhi Sultanate from the Mamluk dynasty."
            },
            {
              question: "The Iqta system was introduced by:",
              options: ["Qutb-ud-din Aibak", "Iltutmish", "Alauddin Khalji", "Balban"],
              correct: 1,
              year: "2022",
              exam: "TNPSC Group 1",
              explanation: "The Iqta system, a form of land revenue administration, was systematically introduced by Iltutmish."
            }
          ]
        },
        "Mughal Empire": {
          title: "Mughal Empire (1526-1857)",
          description: "The last great empire of medieval India",
          content: `The Mughal Empire was founded by Babur in 1526 after his victory over Ibrahim Lodi in the First Battle of Panipat. The empire reached its zenith under Akbar, Jahangir, Shah Jahan, and began its decline after Aurangzeb's death in 1707. It formally ended in 1857 with the Indian Rebellion.

Babur, a descendant of Timur and Genghis Khan, established the empire but died in 1530. His son Humayun faced challenges from Sher Shah Suri but regained the throne in 1555. Akbar (1556-1605) consolidated and expanded the empire, introducing innovative administrative and military systems. His policy of religious tolerance and cultural synthesis created a unique Indo-Islamic culture.

The empire's golden age continued under Jahangir and Shah Jahan. Shah Jahan's reign (1628-1658) marked the peak of Mughal architecture with monuments like the Taj Mahal and Red Fort. However, Aurangzeb's orthodox policies and constant warfare weakened the empire.

The Mughal administrative system was highly sophisticated with the Mansabdari system for military and civil administration. The empire promoted trade, arts, and crafts. Mughal painting, architecture, and literature reached unprecedented heights. The period also saw the development of new architectural styles combining Islamic, Persian, and Indian elements.`,
          keyPoints: [
            "Founded by Babur in 1526, lasted until 1857",
            "Major rulers: Babur, Humayun, Akbar, Jahangir, Shah Jahan, Aurangzeb",
            "Greatest expansion under Akbar - from Kashmir to Deccan",
            "Akbar's religious policy: Din-i-Ilahi and policy of Sulh-i-Kul",
            "Administrative system: Mansabdari system and efficient revenue collection",
            "Architectural marvels: Taj Mahal, Red Fort, Fatehpur Sikri, Humayun's Tomb",
            "Golden age of Mughal painting and miniature art",
            "Promotion of Persian language and literature",
            "Decline began after Aurangzeb due to religious orthodoxy and constant warfare",
            "Final end in 1857 with the Indian Rebellion"
          ],
          importantDates: [
            "1526 - First Battle of Panipat, Babur defeats Ibrahim Lodi",
            "1556 - Second Battle of Panipat, Akbar defeats Hemu",
            "1556-1605 - Reign of Akbar the Great",
            "1605-1627 - Reign of Jahangir",
            "1628-1658 - Reign of Shah Jahan",
            "1658-1707 - Reign of Aurangzeb",
            "1707 - Death of Aurangzeb, beginning of decline",
            "1857 - End of Mughal Empire with Indian Rebellion"
          ],
          examples: [
            "Akbar's Nine Gems (Navratnas) - Court intellectuals including Birbal and Tansen",
            "Taj Mahal - Mausoleum built by Shah Jahan for Mumtaz Mahal",
            "Mansabdari System - Military and administrative ranking system",
            "Battle of Haldighati (1576) - Akbar vs. Maharana Pratap"
          ],
          previousYearQuestions: [
            {
              question: "The Mughal Empire was founded after which battle?",
              options: ["Battle of Haldighati", "First Battle of Panipat", "Battle of Khanwa", "Second Battle of Panipat"],
              correct: 1,
              year: "2023",
              exam: "UPSC Prelims",
              explanation: "The Mughal Empire was founded by Babur after his victory in the First Battle of Panipat (1526) against Ibrahim Lodi."
            },
            {
              question: "Who among the following introduced the Mansabdari system?",
              options: ["Babur", "Humayun", "Akbar", "Jahangir"],
              correct: 2,
              year: "2022",
              exam: "SSC CGL",
              explanation: "Akbar introduced the Mansabdari system, which was a unique administrative and military system of the Mughal Empire."
            }
          ]
        }
      }
    },
    "Indian National Movement": {
      name: "Indian National Movement",
      icon: "🇮🇳",
      color: "bg-orange-500",
      topics: {
        "Early Nationalist Movement": {
          title: "Early Nationalist Movement (1885-1905)",
          description: "Formation of Indian National Congress and moderate phase",
          content: `The Early Nationalist Movement marked the beginning of organized political activity in India. The Indian National Congress was founded on December 28, 1885, by Allan Octavian Hume, with the first session held in Bombay under the presidency of Womesh Chunder Bonnerjee.

The early nationalists, also called Moderates, believed in constitutional methods and gradual reform. They had faith in British justice and sought to achieve their goals through petitions, prayers, and protests. Key leaders included Dadabhai Naoroji, Gopal Krishna Gokhale, Surendranath Banerjee, Pherozeshah Mehta, and Badruddin Tyabji.

Their main demands included representation in legislative councils, simultaneous ICS examinations in India and England, reduction in military expenditure, and separation of judiciary from executive. They made significant contributions through their economic critique of British rule, particularly Dadabhai Naoroji's 'Drain of Wealth' theory.

The Moderates achieved some success with the Indian Councils Act of 1892, which increased Indian representation in legislative councils. However, their methods were criticized by younger nationalists who favored more aggressive approaches. The partition of Bengal in 1905 marked the end of the moderate phase and the beginning of extremist nationalism.`,
          keyPoints: [
            "Formation of Indian National Congress on December 28, 1885",
            "Founded by A.O. Hume, first president W.C. Bonnerjee",
            "Moderate methods: petitions, prayers, and constitutional protests",
            "Key leaders: Dadabhai Naoroji, G.K. Gokhale, Surendranath Banerjee",
            "Economic critique: Drain of Wealth theory by Dadabhai Naoroji",
            "Demands: ICS reforms, legislative representation, reduced military spending",
            "Achievements: Indian Councils Act 1892, raised political awareness",
            "Belief in British sense of justice and gradual constitutional progress",
            "Use of press and platform for political mobilization",
            "End of moderate phase with Partition of Bengal (1905)"
          ],
          importantDates: [
            "1885 - Formation of Indian National Congress, Bombay session",
            "1886 - Second Congress session in Calcutta under Dadabhai Naoroji",
            "1892 - Indian Councils Act passed following Congress demands",
            "1896 - Dadabhai Naoroji elected to British Parliament",
            "1905 - Partition of Bengal announced by Lord Curzon"
          ],
          examples: [
            "Drain of Wealth Theory - Dadabhai Naoroji's economic critique",
            "Grand Old Man of India - Title given to Dadabhai Naoroji",
            "Moderate-Extremist Split - Surat Session (1907) controversy",
            "Three P's Policy - Petition, Prayer, and Protest methods"
          ],
          previousYearQuestions: [
            {
              question: "Who was the first President of the Indian National Congress?",
              options: ["Dadabhai Naoroji", "W.C. Bonnerjee", "Surendranath Banerjee", "A.O. Hume"],
              correct: 1,
              year: "2023",
              exam: "UPSC Prelims",
              explanation: "Womesh Chunder Bonnerjee was the first President of the Indian National Congress at its inaugural session in Bombay (1885)."
            },
            {
              question: "The 'Drain of Wealth' theory was propounded by:",
              options: ["Gopal Krishna Gokhale", "Dadabhai Naoroji", "Surendranath Banerjee", "Pherozeshah Mehta"],
              correct: 1,
              year: "2022",
              exam: "TNPSC Group 1",
              explanation: "Dadabhai Naoroji propounded the 'Drain of Wealth' theory, highlighting the economic exploitation of India by Britain."
            }
          ]
        },
        "Swadeshi Movement": {
          title: "Swadeshi Movement (1905-1908)",
          description: "Mass movement against partition of Bengal",
          content: `The Swadeshi Movement was launched in response to the Partition of Bengal announced by Lord Curzon on July 19, 1905, and implemented on October 16, 1905. The partition divided Bengal into two provinces: East Bengal and Assam (with a Muslim majority) and West Bengal (with a Hindu majority).

The movement had four main aspects: Swadeshi (using Indian goods), Boycott (of British goods), National Education, and Political Protest. It marked the beginning of mass politics in India and introduced new methods of political struggle including hartals, public meetings, and processions.

Key leaders included Bal Gangadhar Tilak, Lala Lajpat Rai, Bipin Chandra Pal (known as Lal-Bal-Pal trio), Aurobindo Ghosh, and in Bengal, Surendranath Banerjee and Ashwini Kumar Dutt. The movement saw active participation from students, women, and common people.

The movement achieved remarkable success in promoting indigenous industries, especially textiles. It also led to the growth of national education with institutions like Jadavpur National College and Bengal Technical Institute. The British government was forced to annul the partition in 1911, reuniting Bengal.

The Swadeshi Movement introduced the concept of economic nationalism and demonstrated the power of mass mobilization. It influenced subsequent movements and established methods that would be used throughout the freedom struggle.`,
          keyPoints: [
            "Triggered by Partition of Bengal (October 16, 1905) by Lord Curzon",
            "Four-fold program: Swadeshi, Boycott, National Education, Political Protest",
            "Mass participation including students, women, and common people",
            "Leaders: Lal-Bal-Pal trio, Aurobindo Ghosh, Surendranath Banerjee",
            "Economic impact: Growth of indigenous industries, especially textiles",
            "Cultural nationalism: Use of traditional festivals for political mobilization",
            "Revolutionary activities: Secret societies like Anushilan Samiti",
            "Educational initiatives: National schools and colleges established",
            "Success: Partition of Bengal annulled in 1911",
            "Introduction of hartals, processions, and mass demonstrations"
          ],
          importantDates: [
            "July 19, 1905 - Partition of Bengal announced",
            "October 16, 1905 - Partition implemented, declared as day of mourning",
            "1906 - Calcutta Congress session, four-fold program adopted",
            "1907 - Surat Congress session, Moderate-Extremist split",
            "1908 - Newspaper Act and Explosive Substances Act passed",
            "December 12, 1911 - Partition of Bengal annulled"
          ],
          examples: [
            "Raksha Bandhan Ceremony - Bengalis tied rakhis to maintain unity",
            "Vandemataram - National song that became movement's rallying cry",
            "Boycott of Manchester cloth - Economic weapon against British",
            "Acharya Jagadish Chandra Bose Institute - Example of Swadeshi education"
          ],
          previousYearQuestions: [
            {
              question: "The Swadeshi Movement was started to protest against:",
              options: ["Rowlatt Act", "Partition of Bengal", "Simon Commission", "Government of India Act"],
              correct: 1,
              year: "2023",
              exam: "UPSC Prelims",
              explanation: "The Swadeshi Movement was launched in 1905 to protest against the Partition of Bengal by Lord Curzon."
            },
            {
              question: "Who among the following were known as 'Lal-Bal-Pal'?",
              options: ["Lala Lajpat Rai, Bal Gangadhar Tilak, Bipin Chandra Pal", "Lala Hardayal, Bal Gangadhar Tilak, Parmanand", "Lala Lajpat Rai, Badruddin Tyabji, Bipin Chandra Pal", "Lala Lajpat Rai, Bal Gangadhar Tilak, Prafulla Chandra Ray"],
              correct: 0,
              year: "2022",
              exam: "SSC CGL",
              explanation: "Lal-Bal-Pal refers to the trio of extremist leaders: Lala Lajpat Rai, Bal Gangadhar Tilak, and Bipin Chandra Pal."
            }
          ]
        },
        "Gandhian Era": {
          title: "Gandhian Era (1915-1947)",
          description: "Mass movements under Gandhi's leadership",
          content: `The Gandhian Era began with Mahatma Gandhi's return to India from South Africa in January 1915. Gandhi brought with him the philosophy and technique of Satyagraha (non-violent resistance) which he had successfully tested in South Africa. This period transformed the Indian freedom struggle into a mass movement.

Gandhi's first major success came with the Champaran Satyagraha (1917), where he fought for the rights of indigo farmers. This was followed by successful satyagrahas in Kheda (1918) and Ahmedabad (1918), establishing his reputation as a leader who could deliver results.

The Non-Cooperation Movement (1920-22) was the first mass movement under Gandhi's leadership. It saw unprecedented participation from all sections of society. Though suspended after the Chauri Chaura incident, it demonstrated the potential of non-violent mass resistance.

The Salt Satyagraha or Dandi March (1930) marked Gandhi's return to active politics after the Bardoli Satyagraha (1928). The 240-mile march from Sabarmati to Dandi captured international attention and made salt a symbol of India's struggle for independence.

The Quit India Movement (1942) was the final mass movement under Gandhi's leadership. Despite mass arrests of leaders, it showed the determination of Indians to achieve complete independence. Gandhi's methods of non-violence and mass mobilization fundamentally changed the nature of anti-colonial struggle globally.`,
          keyPoints: [
            "Gandhi returns to India (January 9, 1915) with Satyagraha philosophy",
            "First successes: Champaran (1917), Kheda (1918), Ahmedabad (1918)",
            "Non-Cooperation Movement (1920-22): First mass movement",
            "Salt Satyagraha/Dandi March (1930): International attention",
            "Civil Disobedience Movement (1930-34): Constitutional negotiations",
            "Individual Satyagraha (1940-41): Selective resistance",
            "Quit India Movement (1942): 'Do or Die' call",
            "Philosophy of Ahimsa (non-violence) and Satyagraha (truth-force)",
            "Integration of religious and political spheres",
            "Emphasis on self-reliance, village industries, and social reform"
          ],
          importantDates: [
            "January 9, 1915 - Gandhi returns to India",
            "1917 - Champaran Satyagraha begins",
            "August 1, 1920 - Non-Cooperation Movement launched",
            "February 5, 1922 - Chauri Chaura incident",
            "March 12, 1930 - Salt March begins from Sabarmati",
            "August 8, 1942 - Quit India Movement launched",
            "January 30, 1948 - Assassination of Gandhi"
          ],
          examples: [
            "Champaran Satyagraha - Fight against Tinkathia system",
            "Khadi and Charkha - Symbols of self-reliance and protest",
            "Dandi March - 240-mile march to break Salt Law",
            "Fasting unto death - Moral weapon for social and political causes"
          ],
          previousYearQuestions: [
            {
              question: "Gandhi's first successful Satyagraha in India was at:",
              options: ["Kheda", "Champaran", "Bardoli", "Ahmedabad"],
              correct: 1,
              year: "2023",
              exam: "UPSC Prelims",
              explanation: "Gandhi's first successful Satyagraha in India was at Champaran (1917) against the Tinkathia system imposed on indigo farmers."
            },
            {
              question: "The Salt March was undertaken by Gandhi in:",
              options: ["1929", "1930", "1931", "1932"],
              correct: 1,
              year: "2022",
              exam: "TNPSC Group 2",
              explanation: "The famous Salt March or Dandi March was undertaken by Gandhi from March 12 to April 6, 1930."
            }
          ]
        }
      }
    },
    "Indian Polity": {
      name: "Indian Polity",
      icon: "⚖️",
      color: "bg-blue-500",
      topics: {
        "Constitutional Framework": {
          title: "Constitutional Framework",
          description: "Structure and features of Indian Constitution",
          content: `The Constitution of India is the supreme law of India. It was adopted by the Constituent Assembly on 26th November 1949 and came into effect on 26th January 1950. Dr. B.R. Ambedkar is known as the principal architect of the Indian Constitution.

The Constitution establishes India as a sovereign, socialist, secular, democratic republic. It provides for a parliamentary system of government with a federal structure.`,
          keyPoints: [
            "Longest written constitution in the world",
            "Adopted on 26th November 1949, came into effect on 26th January 1950",
            "Dr. B.R. Ambedkar - Principal architect",
            "Preamble declares India as sovereign, socialist, secular, democratic republic",
            "Parliamentary system with federal structure",
            "Single citizenship",
            "Independent judiciary"
          ],
          importantDates: [
            "1946 - Constituent Assembly formed",
            "1949 - Constitution adopted",
            "1950 - Constitution came into effect"
          ]
        },
        "Fundamental Rights": {
          title: "Fundamental Rights",
          description: "Basic rights guaranteed to all citizens",
          content: `Fundamental Rights are the basic rights guaranteed to all citizens of India. They are enshrined in Part III of the Constitution (Articles 12-35). These rights are justiciable, meaning they can be enforced through courts.

Originally, there were seven fundamental rights, but the right to property was removed by the 44th Amendment in 1978, leaving six fundamental rights.`,
          keyPoints: [
            "Enshrined in Part III of Constitution (Articles 12-35)",
            "Justiciable rights - can be enforced through courts",
            "Right to Equality (Articles 14-18)",
            "Right to Freedom (Articles 19-22)",
            "Right against Exploitation (Articles 23-24)",
            "Right to Freedom of Religion (Articles 25-28)",
            "Cultural and Educational Rights (Articles 29-30)",
            "Right to Constitutional Remedies (Article 32)"
          ],
          examples: [
            "Right to Equality - No discrimination based on religion, race, caste, sex",
            "Right to Freedom - Freedom of speech, assembly, movement",
            "Right against Exploitation - Prohibition of child labor, human trafficking"
          ]
        },
        "Directive Principles": {
          title: "Directive Principles of State Policy",
          description: "Guidelines for governance and policy-making",
          content: `Directive Principles of State Policy are contained in Part IV of the Constitution (Articles 36-51). They are guidelines for the central and state governments to be kept in mind while framing laws and policies.

These principles are non-justiciable, meaning they cannot be enforced through courts, but they are fundamental in governance and it is the duty of the state to apply these principles.`,
          keyPoints: [
            "Contained in Part IV (Articles 36-51)",
            "Non-justiciable - cannot be legally enforced",
            "Guidelines for governance and policy-making",
            "Inspired by Irish Constitution",
            "Promote welfare state",
            "Secure social, economic and political justice",
            "Establish uniform civil code"
          ],
          examples: [
            "Promote welfare of people",
            "Secure adequate means of livelihood",
            "Prevent concentration of wealth",
            "Equal pay for equal work",
            "Free and compulsory education for children"
          ]
        }
      }
    },
    "Geography": {
      name: "Geography",
      icon: "🌍",
      color: "bg-green-500",
      topics: {
        "Physical Geography of India": {
          title: "Physical Geography of India",
          description: "Physiography, climate, and natural features",
          content: `India is located in the northern hemisphere between 8°4' and 37°6' north latitude and 68°7' and 97°25' east longitude. It covers an area of 3.28 million square kilometers, making it the seventh-largest country in the world.

The country can be divided into several physiographic divisions including the Himalayan Mountains, the Northern Plains, the Peninsular Plateau, the Indian Desert, the Coastal Plains, and the Islands.`,
          keyPoints: [
            "Location: 8°4'N to 37°6'N latitude, 68°7'E to 97°25'E longitude",
            "Area: 3.28 million sq km (7th largest country)",
            "Tropic of Cancer passes through the middle of India",
            "Bordered by seven countries and two seas",
            "Four major physiographic divisions",
            "Monsoon climate with four seasons",
            "Perennial and seasonal rivers"
          ],
          examples: [
            "Himalayan Mountains - Fold mountains, highest peaks",
            "Northern Plains - Alluvial plains, most fertile region",
            "Peninsular Plateau - Oldest landmass, rich in minerals"
          ]
        },
        "Climate of India": {
          title: "Climate of India",
          description: "Monsoon climate and seasonal patterns",
          content: `India has a tropical monsoon climate characterized by the seasonal reversal of winds. The climate is dominated by the monsoon winds which bring most of the annual rainfall.

The year can be divided into four seasons: winter (December-February), summer (March-May), monsoon (June-September), and post-monsoon (October-November).`,
          keyPoints: [
            "Tropical monsoon climate",
            "Seasonal reversal of winds",
            "Four seasons: winter, summer, monsoon, post-monsoon",
            "Southwest monsoon brings 75% of annual rainfall",
            "Northeast monsoon affects Tamil Nadu and Kerala",
            "El Niño and La Niña affect monsoon patterns",
            "Cyclones in Bay of Bengal and Arabian Sea"
          ],
          importantDates: [
            "June 1 - Normal onset of monsoon in Kerala",
            "July 15 - Monsoon covers entire India",
            "September - Monsoon withdrawal begins",
            "December - Northeast monsoon season"
          ]
        },
        "Rivers of India": {
          title: "Rivers of India",
          description: "Major river systems and their characteristics",
          content: `India has numerous rivers that can be classified into Himalayan rivers and Peninsular rivers. The Himalayan rivers are perennial and snow-fed, while the Peninsular rivers are mainly seasonal and rain-fed.

The major river systems include the Indus, Ganga-Brahmaputra, and the peninsular rivers like Godavari, Krishna, and Kaveri.`,
          keyPoints: [
            "Two major river systems: Himalayan and Peninsular",
            "Himalayan rivers: Perennial, snow-fed, form meanders",
            "Peninsular rivers: Seasonal, rain-fed, flow in valleys",
            "Ganga - Longest river, most sacred",
            "Brahmaputra - Largest river by volume",
            "Indus - Longest river of India (mostly in Pakistan)",
            "Rivers crucial for agriculture, transport, and hydroelectric power"
          ],
          examples: [
            "Ganga system - Ganga, Yamuna, Ghaghra, Gandak",
            "Brahmaputra system - Brahmaputra, Barak",
            "Peninsular rivers - Godavari, Krishna, Kaveri, Narmada"
          ]
        }
      }
    },
    "Science": {
      name: "Science",
      icon: "🔬",
      color: "bg-purple-500",
      topics: {
        "Physics": {
          title: "Physics",
          description: "Fundamental concepts in physics",
          content: `Physics is the science that studies matter, energy, and their interactions. It forms the foundation for understanding the natural world and has applications in technology, engineering, and other sciences.

Key areas include mechanics, thermodynamics, electromagnetism, optics, and modern physics including quantum mechanics and relativity.`,
          keyPoints: [
            "Study of matter, energy, and their interactions",
            "Newton's Laws of Motion",
            "Conservation of energy and momentum",
            "Wave nature of light and sound",
            "Electromagnetic spectrum",
            "Atomic structure and radioactivity",
            "Applications in technology and engineering"
          ],
          examples: [
            "Newton's First Law - Law of Inertia",
            "E=mc² - Einstein's mass-energy equivalence",
            "Ohm's Law - V=IR in electrical circuits"
          ]
        },
        "Chemistry": {
          title: "Chemistry",
          description: "Study of matter and chemical reactions",
          content: `Chemistry is the scientific study of matter, its properties, composition, structure, and the changes it undergoes during chemical reactions. It bridges physics and biology.

Major branches include organic chemistry, inorganic chemistry, physical chemistry, analytical chemistry, and biochemistry.`,
          keyPoints: [
            "Study of matter and chemical reactions",
            "Atomic structure and periodic table",
            "Chemical bonding and molecular structure",
            "Acids, bases, and salts",
            "Organic compounds and reactions",
            "Metals and non-metals",
            "Applications in industry and daily life"
          ],
          examples: [
            "Photosynthesis - 6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂",
            "Combustion - CH₄ + 2O₂ → CO₂ + 2H₂O",
            "Rusting - 4Fe + 3O₂ → 2Fe₂O₃"
          ]
        },
        "Biology": {
          title: "Biology",
          description: "Study of living organisms",
          content: `Biology is the scientific study of living organisms and their interactions with the environment. It encompasses various levels from molecules to ecosystems.

Major branches include botany (study of plants), zoology (study of animals), microbiology, genetics, ecology, and biotechnology.`,
          keyPoints: [
            "Study of living organisms and life processes",
            "Cell - basic unit of life",
            "Classification of organisms",
            "Human body systems",
            "Heredity and variation",
            "Evolution and natural selection",
            "Ecology and environmental science"
          ],
          examples: [
            "Cell division - Mitosis and Meiosis",
            "DNA structure - Double helix",
            "Digestive system - Mouth to anus pathway"
          ]
        }
      }
    },
    "Economics": {
      name: "Economics",
      icon: "💰",
      color: "bg-yellow-500",
      topics: {
        "Indian Economy": {
          title: "Indian Economy",
          description: "Structure and features of Indian economy",
          content: `The Indian economy is the world's fifth-largest economy by nominal GDP and third-largest by purchasing power parity. It is a mixed economy with both private and public sectors.

The economy has transformed from a primarily agricultural economy to a diversified economy with significant contributions from services, manufacturing, and agriculture.`,
          keyPoints: [
            "Fifth-largest economy by nominal GDP",
            "Mixed economy with public and private sectors",
            "Three sectors: Primary, Secondary, Tertiary",
            "Agriculture employs about 50% of workforce",
            "Services sector contributes most to GDP",
            "Economic reforms started in 1991",
            "Major challenges: poverty, unemployment, inequality"
          ],
          examples: [
            "Primary sector - Agriculture, mining, forestry",
            "Secondary sector - Manufacturing, construction",
            "Tertiary sector - Services, IT, banking"
          ]
        },
        "Banking System": {
          title: "Banking System in India",
          description: "Structure and functions of banking in India",
          content: `The banking system in India is regulated by the Reserve Bank of India (RBI). It consists of commercial banks, cooperative banks, and regional rural banks.

The system includes public sector banks, private sector banks, and foreign banks operating in India.`,
          keyPoints: [
            "RBI - Central bank and regulator",
            "Commercial banks - Public, private, foreign",
            "Cooperative banks - Urban and rural",
            "Regional Rural Banks (RRBs)",
            "Functions: Deposits, loans, money transfer",
            "Financial inclusion initiatives",
            "Digital banking and payment systems"
          ],
          examples: [
            "Public sector banks - SBI, PNB, Bank of Baroda",
            "Private sector banks - HDFC, ICICI, Axis Bank",
            "Payment systems - UPI, NEFT, RTGS"
          ]
        },
        "Budget and Fiscal Policy": {
          title: "Budget and Fiscal Policy",
          description: "Government budget and fiscal management",
          content: `The Union Budget is the annual financial statement of the Government of India. It outlines the government's revenue and expenditure for the fiscal year.

Fiscal policy involves government spending and taxation policies to influence economic activity.`,
          keyPoints: [
            "Annual financial statement of government",
            "Revenue budget and capital budget",
            "Direct and indirect taxes",
            "Fiscal deficit and revenue deficit",
            "Public debt and debt management",
            "Budget process and parliamentary approval",
            "Impact on economic growth and development"
          ],
          examples: [
            "Direct taxes - Income tax, corporate tax",
            "Indirect taxes - GST, customs duty",
            "Expenditure - Revenue and capital expenditure"
          ]
        }
      }
    },
    "Mathematics": {
      name: "Mathematics",
      icon: "🔢",
      color: "bg-indigo-500",
      topics: {
        "Arithmetic": {
          title: "Arithmetic",
          description: "Basic mathematical operations and concepts",
          content: `Arithmetic is the branch of mathematics dealing with numbers and basic operations. It forms the foundation for all other mathematical concepts.

Key topics include number system, fractions, decimals, percentages, ratio and proportion, and simple and compound interest.`,
          keyPoints: [
            "Number system - Natural, whole, integers, rational, irrational",
            "Basic operations - Addition, subtraction, multiplication, division",
            "Fractions and decimals",
            "Percentages and their applications",
            "Ratio and proportion",
            "Simple and compound interest",
            "Profit and loss calculations"
          ],
          examples: [
            "Percentage formula: (Part/Whole) × 100",
            "Simple Interest: SI = (P × R × T) / 100",
            "Compound Interest: CI = P(1 + R/100)ⁿ - P"
          ]
        },
        "Algebra": {
          title: "Algebra",
          description: "Study of mathematical symbols and rules",
          content: `Algebra is the branch of mathematics that uses letters and symbols to represent numbers and quantities in formulas and equations.

It includes linear equations, quadratic equations, polynomials, and algebraic expressions.`,
          keyPoints: [
            "Variables and constants",
            "Algebraic expressions and equations",
            "Linear equations in one and two variables",
            "Quadratic equations and their solutions",
            "Polynomials and their operations",
            "Factorization techniques",
            "Simultaneous equations"
          ],
          examples: [
            "Linear equation: ax + b = 0",
            "Quadratic equation: ax² + bx + c = 0",
            "Quadratic formula: x = [-b ± √(b²-4ac)] / 2a"
          ]
        },
        "Geometry": {
          title: "Geometry",
          description: "Study of shapes, sizes, and properties of space",
          content: `Geometry is the branch of mathematics concerned with shapes, sizes, relative positions of figures, and properties of space.

It includes plane geometry (2D shapes) and solid geometry (3D shapes), along with coordinate geometry.`,
          keyPoints: [
            "Points, lines, and planes",
            "Angles and their types",
            "Triangles and their properties",
            "Quadrilaterals and polygons",
            "Circles and their properties",
            "Area and perimeter of 2D shapes",
            "Volume and surface area of 3D shapes"
          ],
          examples: [
            "Area of triangle: A = (1/2) × base × height",
            "Area of circle: A = πr²",
            "Volume of sphere: V = (4/3)πr³"
          ]
        }
      }
    }
  };

  if (selectedTopic && selectedSubject) {
    const topic = subjects[selectedSubject].topics[selectedTopic];
    return (
      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <Button 
            onClick={() => setSelectedTopic(null)} 
            variant="outline"
            className="flex items-center gap-2"
          >
            <ArrowLeft size={16} />
            Back to {selectedSubject}
          </Button>
          <h2 className="text-2xl font-bold text-gray-900">{topic.title}</h2>
        </div>

        {/* Tab Navigation */}
        <div className="flex gap-2 border-b">
          <Button
            variant={activeTab === "content" ? "default" : "ghost"}
            onClick={() => setActiveTab("content")}
            className="rounded-b-none"
          >
            <BookOpen size={16} className="mr-2" />
            Study Content
          </Button>
          <Button
            variant={activeTab === "questions" ? "default" : "ghost"}
            onClick={() => setActiveTab("questions")}
            className="rounded-b-none"
          >
            <HelpCircle size={16} className="mr-2" />
            Previous Year Questions
          </Button>
        </div>

        {activeTab === "content" ? (
          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-blue-600">{topic.description}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-3">Overview</h3>
                <div className="prose max-w-none">
                  {topic.content.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="text-gray-700 leading-relaxed mb-4">{paragraph}</p>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">Key Points</h3>
                <ul className="space-y-2">
                  {topic.keyPoints.map((point, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-blue-500 font-bold mt-1">•</span>
                      <span className="text-gray-700">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {topic.importantDates && (
                <div>
                  <h3 className="text-lg font-semibold mb-3">Important Dates</h3>
                  <div className="bg-yellow-50 p-4 rounded-lg">
                    <ul className="space-y-2">
                      {topic.importantDates.map((date, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <Clock size={16} className="text-yellow-600 mt-1" />
                          <span className="text-gray-700">{date}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {topic.examples && (
                <div>
                  <h3 className="text-lg font-semibold mb-3">Important Examples</h3>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <ul className="space-y-2">
                      {topic.examples.map((example, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="text-green-600 font-bold">→</span>
                          <span className="text-gray-700">{example}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {topic.previousYearQuestions && (
                <div>
                  <h3 className="text-lg font-semibold mb-3">Previous Year Questions</h3>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <ul className="space-y-2">
                      {topic.previousYearQuestions.map((question, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <div className="flex items-center gap-2 mb-3">
                            <Badge variant="outline">{question.exam}</Badge>
                            <Badge variant="secondary">{question.year}</Badge>
                          </div>
                          <h4 className="font-semibold mb-3">{question.question}</h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4">
                            {question.options.map((option, optIndex) => (
                              <div 
                                key={optIndex} 
                                className={`p-2 rounded border ${
                                  optIndex === question.correct 
                                    ? 'bg-green-100 border-green-300 text-green-800' 
                                    : 'bg-white border-gray-200'
                                }`}
                              >
                                <span className="font-semibold mr-2">{String.fromCharCode(65 + optIndex)}.</span>
                                {option}
                              </div>
                            ))}
                          </div>
                          <div className="bg-blue-50 p-3 rounded">
                            <h5 className="font-semibold text-blue-800 mb-1">Explanation:</h5>
                            <p className="text-blue-700 text-sm">{question.explanation}</p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        ) : (
          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-purple-600">Previous Year Questions</CardTitle>
            </CardHeader>
            <CardContent>
              {topic.previousYearQuestions && topic.previousYearQuestions.length > 0 ? (
                <div className="space-y-6">
                  {topic.previousYearQuestions.map((question, index) => (
                    <div key={index} className="p-4 border rounded-lg bg-purple-50">
                      <div className="flex items-center gap-2 mb-3">
                        <Badge variant="outline">{question.exam}</Badge>
                        <Badge variant="secondary">{question.year}</Badge>
                      </div>
                      <h4 className="font-semibold mb-3">{question.question}</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4">
                        {question.options.map((option, optIndex) => (
                          <div 
                            key={optIndex} 
                            className={`p-2 rounded border ${
                              optIndex === question.correct 
                                ? 'bg-green-100 border-green-300 text-green-800' 
                                : 'bg-white border-gray-200'
                            }`}
                          >
                            <span className="font-semibold mr-2">{String.fromCharCode(65 + optIndex)}.</span>
                            {option}
                          </div>
                        ))}
                      </div>
                      <div className="bg-blue-50 p-3 rounded">
                        <h5 className="font-semibold text-blue-800 mb-1">Explanation:</h5>
                        <p className="text-blue-700 text-sm">{question.explanation}</p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-600 text-center py-8">Previous year questions will be added soon for this topic.</p>
              )}
            </CardContent>
          </Card>
        )}
      </div>
    );
  }

  if (selectedSubject) {
    const subject = subjects[selectedSubject];
    return (
      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <Button 
            onClick={() => setSelectedSubject(null)} 
            variant="outline"
            className="flex items-center gap-2"
          >
            <ArrowLeft size={16} />
            Back to Subjects
          </Button>
          <h2 className="text-2xl font-bold text-gray-900">{subject.name} Topics</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(subject.topics).map(([topicKey, topic]) => (
            <Card key={topicKey} className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-gray-900">
                  {topic.title}
                </CardTitle>
                <p className="text-sm text-gray-600">{topic.description}</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="grid grid-cols-2 gap-4 text-sm text-gray-500">
                    <div className="flex items-center gap-2">
                      <BookOpen size={16} />
                      <span>{topic.keyPoints.length} Key Points</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <HelpCircle size={16} />
                      <span>{topic.previousYearQuestions?.length || 0} Questions</span>
                    </div>
                  </div>
                  <Button 
                    onClick={() => setSelectedTopic(topicKey)}
                    className="w-full"
                  >
                    Study This Topic
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
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Button 
          onClick={onBack} 
          variant="outline"
          className="flex items-center gap-2"
        >
          <ArrowLeft size={16} />
          Back to Exams
        </Button>
        <h2 className="text-2xl font-bold text-gray-900">{examName} - Study Subjects</h2>
      </div>

      <div className="text-center bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">Complete Study Material with Previous Year Questions</h3>
        <p className="text-gray-600">Choose a subject to start your preparation journey</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Object.entries(subjects).map(([subjectKey, subject]) => (
          <Card key={subjectKey} className="hover:shadow-xl transition-all duration-300 cursor-pointer">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className={`w-12 h-12 ${subject.color} rounded-full flex items-center justify-center text-white text-xl`}>
                  {subject.icon}
                </div>
                <div>
                  <CardTitle className="text-lg font-bold text-gray-900">{subject.name}</CardTitle>
                  <p className="text-sm text-gray-600">{Object.keys(subject.topics).length} Topics Available</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex flex-wrap gap-2">
                  {Object.keys(subject.topics).slice(0, 3).map((topic, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {topic}
                    </Badge>
                  ))}
                  {Object.keys(subject.topics).length > 3 && (
                    <Badge variant="secondary" className="text-xs">
                      +{Object.keys(subject.topics).length - 3} more
                    </Badge>
                  )}
                </div>
                <Button 
                  onClick={() => setSelectedSubject(subjectKey)}
                  className="w-full"
                  size="lg"
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
