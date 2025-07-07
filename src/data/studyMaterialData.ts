
interface StudyContent {
  title: string;
  description: string;
  content: string;
  keyPoints: string[];
  importantDates?: string[];
  examples?: string[];
}

interface Subject {
  name: string;
  icon: string;
  color: string;
  topics: { [key: string]: StudyContent };
}

export const subjects: { [key: string]: Subject } = {
  "History": {
    name: "History",
    icon: "📚",
    color: "bg-amber-500",
    topics: {
      "Indus Valley Civilization": {
        title: "Indus Valley Civilization (3300-1300 BCE)",
        description: "One of the world's earliest urban civilizations",
        content: `The Indus Valley Civilization, also known as the Harappan Civilization, was one of the world's earliest urban civilizations. It flourished in the basins of the Indus River, which flows through the length of Pakistan, and along a system of perennial, mostly monsoon-fed, rivers that once coursed in the vicinity of the seasonal Ghaggar-Hakra river in northwest India and eastern Pakistan.

The civilization's cities were noted for their urban planning, baked brick houses, elaborate drainage systems, water supply systems, clusters of large non-residential buildings, and new techniques in handicraft and metallurgy.`,
        keyPoints: [
          "Flourished between 3300-1300 BCE",
          "Major cities: Harappa, Mohenjo-daro, Dholavira, Kalibangan",
          "Advanced urban planning with grid system",
          "Sophisticated drainage and water management",
          "Undeciphered script - Harappan script",
          "No evidence of warfare or weapons",
          "Peaceful, egalitarian society"
        ],
        importantDates: [
          "3300 BCE - Early Harappan Period begins",
          "2600 BCE - Mature Harappan Period",
          "1900 BCE - Late Harappan Period",
          "1300 BCE - Civilization decline"
        ]
      },
      "Mughals": {
        title: "Mughal Empire (1526-1857)",
        description: "The Mughal Empire ruled over most of the Indian subcontinent",
        content: `The Mughal Empire was an Islamic early-modern empire in South Asia. At its peak, the empire stretched from the outer fringes of the Indus basin in the west, northern Afghanistan in the northwest, and Kashmir in the north, to the highlands of present-day Assam and Bangladesh in the east, and the uplands of the Deccan plateau in south India.

The Mughal empire is conventionally said to have been founded in 1526 by Babur, a warrior chieftain from what today is Uzbekistan, who employed aid from the neighboring Safavid and Ottoman empires, to defeat the Sultan of Delhi, Ibrahim Lodhi, in the First Battle of Panipat.`,
        keyPoints: [
          "Founded by Babur in 1526 after First Battle of Panipat",
          "Major rulers: Babur, Humayun, Akbar, Jahangir, Shah Jahan, Aurangzeb",
          "Akbar's policy of religious tolerance - Din-i-Ilahi",
          "Architectural marvels: Taj Mahal, Red Fort, Fatehpur Sikri",
          "Decline began after Aurangzeb's death in 1707",
          "Administrative system: Mansabdari system",
          "Cultural synthesis of Islamic and Indian traditions"
        ],
        importantDates: [
          "1526 - First Battle of Panipat, Babur defeats Ibrahim Lodhi",
          "1556-1605 - Akbar's reign",
          "1628-1658 - Shah Jahan's reign",
          "1658-1707 - Aurangzeb's reign",
          "1857 - End of Mughal Empire"
        ]
      },
      "Marathas": {
        title: "Maratha Empire (1674-1818)",
        description: "Hindu empire that dominated much of the Indian subcontinent",
        content: `The Maratha Empire was an Indian power that dominated much of the Indian subcontinent in the 17th and 18th centuries. The empire formally began in 1674 with the coronation of Shivaji as the Chhatrapati. At its peak, the empire's territories covered much of South Asia.

The Marathas are credited to a large extent for ending the Mughal rule over most of the Indian subcontinent. The Marathas were a Marathi-speaking warrior group from the western Deccan Plateau who rose to prominence by establishing a Hindavi Swarajya.`,
        keyPoints: [
          "Founded by Chhatrapati Shivaji in 1674",
          "Guerrilla warfare tactics against Mughals",
          "Capital: Raigad (later Satara)",
          "Major leaders: Shivaji, Sambhaji, Rajaram, Tarabai",
          "Peshwa system of administration",
          "Decline after Third Battle of Panipat (1761)",
          "Final defeat by British in 1818"
        ],
        importantDates: [
          "1674 - Coronation of Shivaji",
          "1680 - Death of Shivaji",
          "1720 - Peshwa Bajirao I becomes ruler",
          "1761 - Third Battle of Panipat",
          "1818 - End of Maratha Empire"
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
        description: "Formation of Indian National Congress and early political awakening",
        content: `The Early Nationalist Movement marked the beginning of organized political activity in India. The Indian National Congress was founded in 1885 by Allan Octavian Hume. The early nationalists believed in constitutional methods and gradual reform.

The early leaders included Dadabhai Naoroji, Gopal Krishna Gokhale, and Surendranath Banerjee. They focused on economic critique of British rule and demanded greater representation in government.`,
        keyPoints: [
          "Formation of Indian National Congress (1885)",
          "Constitutional methods and petitions",
          "Economic drain theory by Dadabhai Naoroji",
          "Demand for Indianization of services",
          "Press and platform as weapons",
          "Belief in British sense of justice",
          "Moderate approach to reforms"
        ],
        importantDates: [
          "1885 - Formation of Indian National Congress",
          "1905 - Partition of Bengal",
          "1906 - Calcutta Session of Congress"
        ]
      },
      "Swadeshi Movement": {
        title: "Swadeshi Movement (1905-1908)",
        description: "Mass movement against partition of Bengal",
        content: `The Swadeshi Movement was a successful economic strategy to remove the British Empire from power and improve economic conditions in India. It was a key focus of Indian independence movement and was also known as the Boycott movement.

The movement began with the partition of Bengal in 1905 and continued until 1908. It was the most successful of the pre-Gandhian movements.`,
        keyPoints: [
          "Triggered by Partition of Bengal (1905)",
          "Boycott of British goods",
          "Promotion of indigenous industries",
          "National education movement",
          "Cultural revival and nationalism",
          "Leaders: Bal Gangadhar Tilak, Lala Lajpat Rai, Bipin Chandra Pal",
          "Use of traditional festivals for political mobilization"
        ],
        importantDates: [
          "1905 - Partition of Bengal announced",
          "1906 - Barisal Conference",
          "1908 - End of active Swadeshi Movement"
        ]
      },
      "Gandhian Era": {
        title: "Gandhian Era (1915-1947)",
        description: "Mass movements under Gandhi's leadership",
        content: `The Gandhian Era began with Gandhi's return to India in 1915. He introduced new methods of struggle including satyagraha (non-violent resistance), which became the hallmark of Indian freedom struggle.

Gandhi's philosophy of ahimsa (non-violence) and satyagraha transformed the freedom movement into a mass movement involving millions of Indians.`,
        keyPoints: [
          "Satyagraha - non-violent resistance",
          "Champaran Satyagraha (1917) - first success",
          "Non-Cooperation Movement (1920-22)",
          "Salt Satyagraha/Dandi March (1930)",
          "Quit India Movement (1942)",
          "Emphasis on self-reliance and village industries",
          "Integration of religious and political spheres"
        ],
        importantDates: [
          "1915 - Gandhi returns to India",
          "1917 - Champaran Satyagraha",
          "1920 - Non-Cooperation Movement",
          "1930 - Salt March",
          "1942 - Quit India Movement"
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

export type { StudyContent, Subject };
