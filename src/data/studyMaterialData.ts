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
      "Vedic Period": {
        title: "Vedic Period (1500-600 BCE)",
        description: "Foundation of Indian civilization and culture",
        content: `The Vedic Period is characterized by the composition of the Vedas, the oldest scriptures of Hinduism. This period saw the emergence of Aryan culture in India and the development of Sanskrit literature, religious practices, and social structures.

The period is divided into Early Vedic Period (1500-1000 BCE) and Later Vedic Period (1000-600 BCE). The Rig Veda, composed during the early period, provides insights into the social, economic, and political life of the Aryans.`,
        keyPoints: [
          "Composition of the four Vedas: Rig, Sama, Yajur, Atharva",
          "Aryan migration and settlement in India",
          "Development of Sanskrit language",
          "Emergence of caste system (Varna system)",
          "Pastoral and agricultural economy",
          "River Sapta Sindhu (Seven Rivers) region",
          "Foundation of Hindu philosophy and rituals"
        ],
        importantDates: [
          "1500 BCE - Beginning of Vedic Period",
          "1200 BCE - Composition of Rig Veda",
          "1000 BCE - Later Vedic Period begins",
          "600 BCE - End of Vedic Period"
        ]
      },
      "Mauryan Empire": {
        title: "Mauryan Empire (321-185 BCE)",
        description: "First pan-Indian empire under Chandragupta Maurya",
        content: `The Mauryan Empire was the first dynasty to rule over most of the Indian subcontinent. It was founded by Chandragupta Maurya with the help of his advisor Chanakya (Kautilya). The empire reached its zenith under Ashoka the Great.

The Mauryans established an efficient administrative system and promoted trade and commerce. Emperor Ashoka's conversion to Buddhism and his efforts to spread Buddhist values marked a significant phase in Indian history.`,
        keyPoints: [
          "Founded by Chandragupta Maurya (321 BCE)",
          "Capital: Pataliputra (modern-day Patna)",
          "Chanakya's Arthashastra - treatise on statecraft",
          "Ashoka's conversion to Buddhism after Kalinga War",
          "Spread of Buddhism across Asia",
          "Efficient administrative system with provinces",
          "Decline due to weak successors after Ashoka"
        ],
        importantDates: [
          "321 BCE - Chandragupta Maurya founds the empire",
          "268-232 BCE - Ashoka's reign",
          "261 BCE - Kalinga War",
          "185 BCE - End of Mauryan Empire"
        ]
      },
      "Gupta Empire": {
        title: "Gupta Empire (320-550 CE)",
        description: "Golden Age of ancient India",
        content: `The Gupta Empire marked the Golden Age of ancient India, characterized by significant achievements in science, technology, engineering, art, dialectic, literature, logic, mathematics, astronomy, religion, and philosophy.

Under rulers like Chandragupta II and Samudragupta, the empire experienced prosperity and cultural renaissance. This period saw the flourishing of Sanskrit literature, Hindu art and architecture, and scientific discoveries.`,
        keyPoints: [
          "Golden Age of ancient Indian civilization",
          "Major rulers: Chandragupta I, Samudragupta, Chandragupta II",
          "Flourishing of arts, literature, and sciences",
          "Kalidasa - greatest Sanskrit poet and dramatist",
          "Aryabhata's astronomical and mathematical works",
          "Hindu temple architecture development",
          "Decimal system and concept of zero"
        ],
        importantDates: [
          "320 CE - Chandragupta I establishes Gupta Era",
          "335-375 CE - Samudragupta's reign",
          "375-415 CE - Chandragupta II's reign",
          "550 CE - Decline of Gupta Empire"
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
      },
      "British Colonial Period": {
        title: "British Colonial Period (1757-1947)",
        description: "British rule in India and its impact",
        content: `The British colonial period in India began with the victory of the East India Company at the Battle of Plassey in 1757. Over the next century, the British gradually extended their control over the entire subcontinent.

The period witnessed significant changes in Indian society, economy, and politics. The British introduced modern education, railways, telegraph, and administrative systems, but also exploited India's resources and caused economic drain.`,
        keyPoints: [
          "Battle of Plassey (1757) - Beginning of British rule",
          "East India Company's gradual expansion",
          "Revolt of 1857 - First War of Independence",
          "Crown rule after 1858 (Government of India Act)",
          "Economic exploitation and drain of wealth",
          "Introduction of modern education and technology",
          "Administrative and legal reforms"
        ],
        importantDates: [
          "1757 - Battle of Plassey",
          "1857 - Sepoy Mutiny/First War of Independence",
          "1858 - Government of India Act, Crown rule begins",
          "1885 - Formation of Indian National Congress",
          "1947 - Indian Independence"
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
      },
      "Union Government": {
        title: "Union Government",
        description: "Structure and functions of central government",
        content: `The Union Government of India consists of three organs: the Executive (President, Prime Minister, and Council of Ministers), the Legislature (Parliament - Lok Sabha and Rajya Sabha), and the Judiciary (Supreme Court and High Courts).

The President is the constitutional head of state, while the Prime Minister is the head of government. The Parliament makes laws for the entire country.`,
        keyPoints: [
          "Three organs: Executive, Legislature, Judiciary",
          "President - Constitutional head, elected indirectly",
          "Prime Minister - Head of government, leader of majority party",
          "Parliament: Lok Sabha (545 members) and Rajya Sabha (245 members)",
          "Council of Ministers - Collective responsibility",
          "Supreme Court - Final interpreter of Constitution",
          "Separation of powers with checks and balances"
        ],
        examples: [
          "Lok Sabha - Lower house, directly elected",
          "Rajya Sabha - Upper house, indirectly elected",
          "President's powers - Nominal head with discretionary powers"
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
      },
      "Natural Resources": {
        title: "Natural Resources",
        description: "Mineral resources and their distribution in India",
        content: `India is rich in mineral resources including coal, iron ore, manganese, mica, bauxite, and petroleum. The distribution of these resources varies across different geological formations and regions.

The Peninsular Plateau, particularly the Chota Nagpur Plateau, is rich in metallic minerals, while the sedimentary rocks of the northern plains contain coal and petroleum.`,
        keyPoints: [
          "Rich in coal, iron ore, manganese, mica, bauxite",
          "Chota Nagpur Plateau - Iron and steel region",
          "Coal deposits mainly in eastern states",
          "Petroleum in western offshore and northeastern states",
          "Atomic minerals: uranium, thorium",
          "Non-metallic minerals: limestone, dolomite, gypsum",
          "Renewable energy resources: solar, wind, hydro"
        ],
        examples: [
          "Jharia coalfield - Largest coal deposit in India",
          "Kudremukh - Iron ore mines in Karnataka",
          "Bombay High - Major offshore oil field"
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
        content: `Biology is the science that studies living organisms and their interactions with each other and their environment. It encompasses various sub-disciplines from molecular biology to ecology.

Major branches include botany (study of plants), zoology (study of animals), microbiology (study of microorganisms), genetics, and ecology.`,
        keyPoints: [
          "Study of living organisms and life processes",
          "Cell structure and function",
          "Genetics and heredity",
          "Evolution and natural selection",
          "Photosynthesis and respiration",
          "Human anatomy and physiology",
          "Ecology and environmental science"
        ],
        examples: [
          "DNA structure - Double helix discovered by Watson and Crick",
          "Mitosis - Cell division for growth and repair",
          "Natural selection - Survival of the fittest"
        ]
      },
      "Environmental Science": {
        title: "Environmental Science",
        description: "Study of environment and environmental problems",
        content: `Environmental Science is an interdisciplinary field that combines physical, biological, and information sciences to study the environment and solve environmental problems. It encompasses ecology, atmospheric science, soil science, and geography.

Key issues include climate change, pollution, biodiversity loss, sustainable development, and renewable energy.`,
        keyPoints: [
          "Ecosystem structure and function",
          "Biodiversity and conservation",
          "Pollution and its types: air, water, soil, noise",
          "Climate change and global warming",
          "Renewable and non-renewable resources",
          "Sustainable development goals",
          "Environmental laws and policies"
        ],
        examples: [
          "Greenhouse effect - Trapping of heat by atmospheric gases",
          "Food chain - Producer → Primary consumer → Secondary consumer",
          "Ozone depletion - Destruction of ozone layer by CFCs"
        ]
      }
    }
  },
  "Economics": {
    name: "Economics",
    icon: "💰",
    color: "bg-emerald-500",
    topics: {
      "Microeconomics": {
        title: "Microeconomics",
        description: "Study of individual economic units and market behavior",
        content: `Microeconomics is the branch of economics that studies the behavior of individual economic units such as consumers, firms, and workers. It analyzes how these units make decisions and how they interact in markets.

Key concepts include supply and demand, elasticity, consumer theory, producer theory, market structures, and market failures.`,
        keyPoints: [
          "Study of individual economic behavior",
          "Supply and demand analysis",
          "Price determination in different markets",
          "Consumer choice and utility maximization",
          "Producer behavior and profit maximization",
          "Market structures: perfect competition, monopoly, oligopoly",
          "Market failures and government intervention"
        ],
        examples: [
          "Law of Demand - Inverse relationship between price and quantity demanded",
          "Elasticity of Demand - Responsiveness of demand to price changes",
          "Monopoly pricing - Setting price above marginal cost"
        ]
      },
      "Macroeconomics": {
        title: "Macroeconomics",
        description: "Study of economy as a whole",
        content: `Macroeconomics is the branch of economics that studies the economy as a whole. It focuses on aggregate economic variables such as national income, employment, inflation, and economic growth.

Key areas include GDP measurement, inflation, unemployment, fiscal policy, monetary policy, and international trade.`,
        keyPoints: [
          "Study of aggregate economic variables",
          "Gross Domestic Product (GDP) and its measurement",
          "Inflation and price level changes",
          "Unemployment and labor market dynamics",
          "Fiscal policy - government spending and taxation",
          "Monetary policy - money supply and interest rates",
          "Balance of payments and exchange rates"
        ],
        examples: [
          "GDP calculation - C + I + G + (X - M)",
          "Phillips Curve - Trade-off between inflation and unemployment",
          "Multiplier effect - Change in income due to change in spending"
        ]
      },
      "Indian Economy": {
        title: "Indian Economy",
        description: "Structure and development of Indian economy",
        content: `The Indian economy is characterized by its diversity, with agriculture, industry, and services contributing to GDP. Since independence, India has undergone significant economic transformation, from a planned economy to a mixed economy with market reforms.

Key features include demographic dividend, IT services sector, manufacturing growth, and challenges like poverty, unemployment, and income inequality.`,
        keyPoints: [
          "Mixed economy with public and private sectors",
          "Service sector dominance (IT, finance, tourism)",
          "Agricultural sector employs large population",
          "Industrial growth and Make in India initiative",
          "Demographic dividend - young population",
          "Economic reforms since 1991",
          "Challenges: poverty, unemployment, inequality"
        ],
        importantDates: [
          "1991 - Economic liberalization begins",
          "2000 - IT boom begins",
          "2014 - Make in India launched",
          "2016 - Demonetization",
          "2017 - GST implementation"
        ]
      },
      "Banking and Finance": {
        title: "Banking and Finance",
        description: "Financial institutions and monetary system",
        content: `Banking and finance form the backbone of any economy. The banking system mobilizes savings and channels them into productive investments. In India, the Reserve Bank of India (RBI) is the central bank that regulates monetary policy.

The financial system includes commercial banks, cooperative banks, regional rural banks, non-banking financial companies, and capital markets.`,
        keyPoints: [
          "Reserve Bank of India (RBI) - Central bank",
          "Commercial banks - Public and private sector",
          "Cooperative banks and regional rural banks",
          "Non-Banking Financial Companies (NBFCs)",
          "Capital markets - stock exchanges",
          "Monetary policy tools - repo rate, CRR, SLR",
          "Financial inclusion and digital banking"
        ],
        examples: [
          "Repo Rate - Rate at which RBI lends to commercial banks",
          "SLR - Statutory Liquidity Ratio for government securities",
          "MUDRA scheme - Micro credit for small businesses"
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
        description: "Basic mathematical operations and number systems",
        content: `Arithmetic forms the foundation of mathematics, dealing with basic operations like addition, subtraction, multiplication, and division. It includes the study of different number systems and their properties.

Key concepts include integers, fractions, decimals, percentages, ratio and proportion, and profit and loss calculations.`,
        keyPoints: [
          "Basic operations: addition, subtraction, multiplication, division",
          "Number systems: natural, whole, integers, rational, irrational",
          "Fractions and decimals",
          "Percentages and their applications",
          "Ratio and proportion",
          "Profit, loss, and discount calculations",
          "Simple and compound interest"
        ],
        examples: [
          "Percentage calculation - (Part/Whole) × 100",
          "Simple Interest - (P × R × T)/100",
          "Compound Interest - P(1 + R/100)^T - P"
        ]
      },
      "Algebra": {
        title: "Algebra",
        description: "Study of mathematical symbols and rules",
        content: `Algebra is the branch of mathematics that uses symbols (usually letters) to represent numbers and quantities in formulas and equations. It provides methods for solving equations and understanding relationships between variables.

Key areas include linear equations, quadratic equations, polynomials, and algebraic expressions.`,
        keyPoints: [
          "Variables and constants",
          "Algebraic expressions and equations",
          "Linear equations in one and two variables",
          "Quadratic equations and their solutions",
          "Polynomials and their operations",
          "Factorization techniques",
          "Inequalities and their solutions"
        ],
        examples: [
          "Linear equation - ax + b = 0",
          "Quadratic formula - x = (-b ± √(b² - 4ac))/2a",
          "Factorization - x² - 4 = (x + 2)(x - 2)"
        ]
      },
      "Geometry": {
        title: "Geometry",
        description: "Study of shapes, sizes, and properties of space",
        content: `Geometry is the branch of mathematics concerned with properties and relations of points, lines, surfaces, and solids. It includes both plane geometry (2D) and solid geometry (3D).

Key concepts include angles, triangles, circles, polygons, area, perimeter, volume, and surface area.`,
        keyPoints: [
          "Points, lines, rays, and line segments",
          "Angles and their types",
          "Triangles and their properties",
          "Quadrilaterals and polygons",
          "Circles and their properties",
          "Area and perimeter of plane figures",
          "Volume and surface area of solids"
        ],
        examples: [
          "Pythagorean theorem - a² + b² = c²",
          "Area of circle - πr²",
          "Volume of cylinder - πr²h"
        ]
      },
      "Statistics": {
        title: "Statistics",
        description: "Collection, analysis, and interpretation of data",
        content: `Statistics is the science of collecting, analyzing, interpreting, and presenting data. It provides methods for making sense of numerical information and drawing conclusions from data.

Key concepts include measures of central tendency, dispersion, probability, and data representation through graphs and charts.`,
        keyPoints: [
          "Data collection and organization",
          "Measures of central tendency: mean, median, mode",
          "Measures of dispersion: range, variance, standard deviation",
          "Probability and its applications",
          "Data representation: bar graphs, pie charts, histograms",
          "Correlation and regression",
          "Sampling and hypothesis testing"
        ],
        examples: [
          "Mean calculation - Sum of all values / Number of values",
          "Probability - Number of favorable outcomes / Total outcomes",
          "Standard deviation - √(Σ(x - μ)²/N)"
        ]
      }
    }
  },
  "Current Affairs": {
    name: "Current Affairs",
    icon: "📰",
    color: "bg-red-500",
    topics: {
      "National Affairs": {
        title: "National Affairs",
        description: "Important national developments and policies",
        content: `National affairs encompass the political, economic, social, and cultural developments within India. This includes government policies, schemes, legislative changes, and significant events that impact the nation.

Staying updated with national affairs is crucial for competitive exams and understanding the country's progress and challenges.`,
        keyPoints: [
          "Government policies and schemes",
          "Legislative developments and new laws",
          "Economic reforms and budget highlights",
          "Social welfare programs",
          "Infrastructure development projects",
          "Digital India initiatives",
          "Health and education policies"
        ],
        examples: [
          "Pradhan Mantri Jan Dhan Yojana - Financial inclusion",
          "Ayushman Bharat - Health insurance scheme",
          "Digital India - Technology-driven governance"
        ]
      },
      "International Affairs": {
        title: "International Affairs",
        description: "Global developments and India's foreign relations",
        content: `International affairs cover global political, economic, and social developments that have implications for India and the world. This includes international organizations, treaties, conflicts, and diplomatic relations.

Understanding international affairs helps in grasping India's position in the global context and foreign policy decisions.`,
        keyPoints: [
          "India's foreign policy and diplomatic relations",
          "International organizations: UN, WHO, IMF, World Bank",
          "Trade agreements and economic partnerships",
          "Global conflicts and peace initiatives",
          "Climate change and environmental treaties",
          "Technology and space cooperation",
          "Cultural and educational exchanges"
        ],
        examples: [
          "BRICS cooperation - Brazil, Russia, India, China, South Africa",
          "Paris Climate Agreement - Global climate action",
          "Indo-Pacific strategy - Regional security cooperation"
        ]
      },
      "Science and Technology": {
        title: "Science and Technology",
        description: "Recent developments in science and technology",
        content: `Science and technology developments include breakthroughs in research, space exploration, medical advances, digital technologies, and their applications in improving human life.

Keeping track of scientific and technological progress is essential for understanding modern developments and their implications.`,
        keyPoints: [
          "Space missions and achievements",
          "Medical breakthroughs and healthcare technology",
          "Information technology and digitalization",
          "Renewable energy technologies",
          "Artificial intelligence and machine learning",
          "Biotechnology and genetic engineering",
          "Defense technology and innovations"
        ],
        examples: [
          "Chandrayaan missions - Lunar exploration by ISRO",
          "COVID-19 vaccines - Global vaccination drive",
          "5G technology - Next-generation mobile networks"
        ]
      },
      "Awards and Recognition": {
        title: "Awards and Recognition",
        description: "Important awards and honors in various fields",
        content: `Awards and recognition highlight achievements in various fields including literature, science, sports, social service, and arts. These include national and international awards, honors, and recognitions.

Knowledge of awards helps in understanding excellence in different fields and notable personalities.`,
        keyPoints: [
          "Nobel Prizes in various categories",
          "Bharat Ratna - Highest civilian honor in India",
          "Padma Awards - Padma Vibhushan, Padma Bhushan, Padma Shri",
          "Rajiv Gandhi Khel Ratna - Sports excellence",
          "Ramon Magsaysay Award - Asian Nobel Prize",
          "Booker Prize and Pulitzer Prize - Literature",
          "Oscar and Grammy Awards - Entertainment"
        ],
        examples: [
          "Nobel Peace Prize - Outstanding contribution to peace",
          "Bharat Ratna recipients - National icons",
          "Olympic medals - Sports achievements"
        ]
      }
    }
  },
  "General Knowledge": {
    name: "General Knowledge",
    icon: "🧠",
    color: "bg-teal-500",
    topics: {
      "World Geography": {
        title: "World Geography",
        description: "Physical and political geography of the world",
        content: `World geography encompasses the study of Earth's physical features, climate patterns, countries, capitals, and important geographical landmarks. It includes both physical geography (mountains, rivers, climate) and human geography (population, cities, culture).

Understanding world geography is essential for comprehending global affairs, international relations, and environmental issues.`,
        keyPoints: [
          "Continents and oceans of the world",
          "Major mountain ranges: Himalayas, Andes, Rocky Mountains",
          "Important rivers: Amazon, Nile, Mississippi, Yangtze",
          "Countries, capitals, and currencies",
          "Climate zones and weather patterns",
          "Natural resources and their distribution",
          "Time zones and international date line"
        ],
        examples: [
          "Seven continents - Asia, Africa, North America, South America, Antarctica, Europe, Australia",
          "Longest river - Nile (6,650 km)",
          "Highest peak - Mount Everest (8,848 m)"
        ]
      },
      "World History": {
        title: "World History",
        description: "Major events and civilizations in world history",
        content: `World history covers significant events, civilizations, wars, revolutions, and cultural developments that have shaped human civilization. It includes ancient civilizations, medieval periods, renaissance, industrial revolution, and modern history.

Knowledge of world history helps in understanding the evolution of human society and contemporary global issues.`,
        keyPoints: [
          "Ancient civilizations: Egyptian, Mesopotamian, Greek, Roman",
          "Medieval period: Byzantine Empire, Islamic Golden Age",
          "Renaissance and Enlightenment in Europe",
          "Industrial Revolution and its impact",
          "World Wars I and II",
          "Cold War and decolonization",
          "Formation of international organizations"
        ],
        importantDates: [
          "3100 BCE - Beginning of Egyptian civilization",
          "776 BCE - First Olympic Games in Greece",
          "1453 CE - Fall of Constantinople",
          "1789 CE - French Revolution",
          "1914-1918 - World War I",
          "1939-1945 - World War II"
        ]
      },
      "Sports and Games": {
        title: "Sports and Games",
        description: "Popular sports, games, and sporting events",
        content: `Sports and games encompass various physical activities, competitive sports, traditional games, and major sporting events. This includes information about rules, famous players, records, and international competitions.

Sports knowledge is important for general awareness and understanding cultural significance of games in different societies.`,
        keyPoints: [
          "Olympic Games - Summer and Winter Olympics",
          "Cricket World Cup and IPL",
          "FIFA World Cup and major football leagues",
          "Tennis Grand Slams: Wimbledon, US Open, French Open, Australian Open",
          "Commonwealth Games and Asian Games",
          "Traditional Indian games: Kabaddi, Kho-Kho",
          "Famous sportspersons and their achievements"
        ],
        examples: [
          "Olympics held every 4 years",
          "Cricket World Cup - ICC tournament",
          "FIFA World Cup - Most watched sporting event"
        ]
      },
      "Art and Culture": {
        title: "Art and Culture",
        description: "Art forms, cultural heritage, and traditions",
        content: `Art and culture encompass various forms of creative expression including visual arts, performing arts, literature, music, dance, and cultural traditions. It includes both traditional and contemporary art forms from India and around the world.

Understanding art and culture is essential for appreciating human creativity and cultural diversity.`,
        keyPoints: [
          "Classical Indian arts: Bharatanatyam, Kathak, Carnatic music",
          "Folk arts and crafts from different regions",
          "Literature and famous authors",
          "Painting styles: Mughal, Rajasthani, Tanjore",
          "Architecture: Temple, Islamic, Colonial styles",
          "Festivals and their cultural significance",
          "UNESCO World Heritage Sites"
        ],
        examples: [
          "Bharatanatyam - Classical dance from Tamil Nadu",
          "Ajanta and Ellora caves - UNESCO World Heritage Sites",
          "Rabindranath Tagore - Nobel Prize in Literature"
        ]
      }
    }
  }
};

export type { StudyContent, Subject };