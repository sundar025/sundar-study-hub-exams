import { Subject } from '@/types/quiz';

export const subjects: Subject[] = [
  {
    id: 'history',
    name: 'History',
    description: 'Ancient, Medieval, and Modern History of India and World',
    icon: '📚',
    color: 'bg-amber-500',
    category: 'core',
    totalQuestions: 500,
    topics: [
      {
        id: 'ancient-india',
        name: 'Ancient India',
        description: 'Indus Valley Civilization, Vedic Period, Mauryas, Guptas',
        difficulty: 'Medium',
        estimatedTime: 45,
        questions: Array.from({ length: 50 }, (_, i) => ({
          id: `ancient-india-${i + 1}`,
          question: `Ancient India Question ${i + 1}: Which dynasty ruled during the Golden Age of India?`,
          options: ['Maurya Dynasty', 'Gupta Dynasty', 'Chola Dynasty', 'Mughal Dynasty'],
          correct: 1,
          explanation: 'The Gupta Dynasty (320-550 CE) is considered the Golden Age of India due to significant achievements in arts, science, and literature.',
          difficulty: 'Medium' as const
        }))
      },
      {
        id: 'medieval-india',
        name: 'Medieval India',
        description: 'Delhi Sultanate, Mughal Empire, Regional Kingdoms',
        difficulty: 'Medium',
        estimatedTime: 45,
        questions: Array.from({ length: 50 }, (_, i) => ({
          id: `medieval-india-${i + 1}`,
          question: `Medieval India Question ${i + 1}: Who was the founder of the Mughal Empire in India?`,
          options: ['Akbar', 'Babur', 'Humayun', 'Shah Jahan'],
          correct: 1,
          explanation: 'Babur founded the Mughal Empire in India after defeating Ibrahim Lodi in the First Battle of Panipat in 1526.',
          difficulty: 'Medium' as const
        }))
      },
      {
        id: 'modern-india',
        name: 'Modern India',
        description: 'British Rule, Freedom Struggle, Independence Movement',
        difficulty: 'Hard',
        estimatedTime: 50,
        questions: Array.from({ length: 50 }, (_, i) => ({
          id: `modern-india-${i + 1}`,
          question: `Modern India Question ${i + 1}: In which year was the Indian National Congress founded?`,
          options: ['1885', '1875', '1895', '1905'],
          correct: 0,
          explanation: 'The Indian National Congress was founded in 1885 by Allan Octavian Hume.',
          difficulty: 'Hard' as const
        }))
      },
      {
        id: 'world-history',
        name: 'World History',
        description: 'Major world civilizations, wars, and revolutions',
        difficulty: 'Hard',
        estimatedTime: 50,
        questions: Array.from({ length: 50 }, (_, i) => ({
          id: `world-history-${i + 1}`,
          question: `World History Question ${i + 1}: Which revolution marked the beginning of the modern era?`,
          options: ['Industrial Revolution', 'French Revolution', 'American Revolution', 'Russian Revolution'],
          correct: 1,
          explanation: 'The French Revolution (1789-1799) is widely considered to mark the beginning of the modern era.',
          difficulty: 'Hard' as const
        }))
      },
      {
        id: 'indian-culture',
        name: 'Indian Culture & Heritage',
        description: 'Arts, literature, philosophy, and cultural traditions',
        difficulty: 'Easy',
        estimatedTime: 40,
        questions: Array.from({ length: 50 }, (_, i) => ({
          id: `indian-culture-${i + 1}`,
          question: `Indian Culture Question ${i + 1}: Which classical dance form originated in Tamil Nadu?`,
          options: ['Bharatanatyam', 'Kathak', 'Odissi', 'Kuchipudi'],
          correct: 0,
          explanation: 'Bharatanatyam is a classical dance form that originated in Tamil Nadu.',
          difficulty: 'Easy' as const
        }))
      },
      {
        id: 'art-architecture',
        name: 'Art & Architecture',
        description: 'Temple architecture, sculptures, paintings, and monuments',
        difficulty: 'Medium',
        estimatedTime: 45,
        questions: Array.from({ length: 50 }, (_, i) => ({
          id: `art-architecture-${i + 1}`,
          question: `Art & Architecture Question ${i + 1}: The Taj Mahal was built by which Mughal emperor?`,
          options: ['Akbar', 'Shah Jahan', 'Aurangzeb', 'Humayun'],
          correct: 1,
          explanation: 'The Taj Mahal was built by Shah Jahan as a mausoleum for his wife Mumtaz Mahal.',
          difficulty: 'Medium' as const
        }))
      },
      {
        id: 'freedom-fighters',
        name: 'Freedom Fighters',
        description: 'Leaders and heroes of Indian independence movement',
        difficulty: 'Easy',
        estimatedTime: 40,
        questions: Array.from({ length: 50 }, (_, i) => ({
          id: `freedom-fighters-${i + 1}`,
          question: `Freedom Fighters Question ${i + 1}: Who is known as the Father of the Nation?`,
          options: ['Nehru', 'Gandhi', 'Patel', 'Azad'],
          correct: 1,
          explanation: 'Mahatma Gandhi is known as the Father of the Nation for his role in India\'s independence movement.',
          difficulty: 'Easy' as const
        }))
      },
      {
        id: 'historical-events',
        name: 'Historical Events',
        description: 'Major battles, treaties, and significant events',
        difficulty: 'Hard',
        estimatedTime: 50,
        questions: Array.from({ length: 50 }, (_, i) => ({
          id: `historical-events-${i + 1}`,
          question: `Historical Events Question ${i + 1}: In which year did the Jallianwala Bagh massacre occur?`,
          options: ['1918', '1919', '1920', '1921'],
          correct: 1,
          explanation: 'The Jallianwala Bagh massacre occurred on April 13, 1919, in Amritsar.',
          difficulty: 'Hard' as const
        }))
      },
      {
        id: 'dynasties-rulers',
        name: 'Dynasties & Rulers',
        description: 'Major dynasties and their notable rulers',
        difficulty: 'Medium',
        estimatedTime: 45,
        questions: Array.from({ length: 50 }, (_, i) => ({
          id: `dynasties-rulers-${i + 1}`,
          question: `Dynasties & Rulers Question ${i + 1}: Which emperor was known as Ashoka the Great?`,
          options: ['Mauryan Emperor', 'Gupta Emperor', 'Mughal Emperor', 'Chola Emperor'],
          correct: 0,
          explanation: 'Ashoka the Great was a Mauryan emperor who ruled from 268 to 232 BCE.',
          difficulty: 'Medium' as const
        }))
      },
      {
        id: 'historical-sources',
        name: 'Historical Sources',
        description: 'Ancient texts, inscriptions, and historical records',
        difficulty: 'Hard',
        estimatedTime: 50,
        questions: Array.from({ length: 50 }, (_, i) => ({
          id: `historical-sources-${i + 1}`,
          question: `Historical Sources Question ${i + 1}: Which ancient text is considered the oldest historical record?`,
          options: ['Vedas', 'Puranas', 'Mahabharata', 'Ramayana'],
          correct: 0,
          explanation: 'The Vedas are considered among the oldest historical records of ancient India.',
          difficulty: 'Hard' as const
        }))
      }
    ]
  },
  {
    id: 'geography',
    name: 'Geography',
    description: 'Physical and Human Geography of India and World',
    icon: '🌍',
    color: 'bg-green-500',
    category: 'core',
    totalQuestions: 500,
    topics: [
      {
        id: 'physical-geography',
        name: 'Physical Geography',
        description: 'Landforms, climate, rivers, mountains',
        difficulty: 'Medium',
        estimatedTime: 45,
        questions: Array.from({ length: 50 }, (_, i) => ({
          id: `physical-geography-${i + 1}`,
          question: `Physical Geography Question ${i + 1}: Which is the highest mountain peak in India?`,
          options: ['K2', 'Kanchenjunga', 'Nanda Devi', 'Mount Everest'],
          correct: 1,
          explanation: 'Kanchenjunga is the highest mountain peak entirely within India at 8,586 meters.',
          difficulty: 'Medium' as const
        }))
      },
      {
        id: 'indian-geography',
        name: 'Indian Geography',
        description: 'States, capitals, rivers, mountains of India',
        difficulty: 'Easy',
        estimatedTime: 40,
        questions: Array.from({ length: 50 }, (_, i) => ({
          id: `indian-geography-${i + 1}`,
          question: `Indian Geography Question ${i + 1}: Which is the longest river in India?`,
          options: ['Yamuna', 'Ganga', 'Godavari', 'Krishna'],
          correct: 1,
          explanation: 'The Ganga is the longest river in India, flowing for about 2,525 kilometers.',
          difficulty: 'Easy' as const
        }))
      },
      {
        id: 'world-geography',
        name: 'World Geography',
        description: 'Continents, countries, capitals, major features',
        difficulty: 'Medium',
        estimatedTime: 45,
        questions: Array.from({ length: 50 }, (_, i) => ({
          id: `world-geography-${i + 1}`,
          question: `World Geography Question ${i + 1}: Which is the largest continent by area?`,
          options: ['Africa', 'Asia', 'North America', 'Europe'],
          correct: 1,
          explanation: 'Asia is the largest continent by both area and population.',
          difficulty: 'Medium' as const
        }))
      },
      {
        id: 'climate-weather',
        name: 'Climate & Weather',
        description: 'Monsoons, weather patterns, climate zones',
        difficulty: 'Hard',
        estimatedTime: 50,
        questions: Array.from({ length: 50 }, (_, i) => ({
          id: `climate-weather-${i + 1}`,
          question: `Climate & Weather Question ${i + 1}: What causes the monsoon in India?`,
          options: ['Ocean currents', 'Mountain ranges', 'Pressure differences', 'All of the above'],
          correct: 3,
          explanation: 'Indian monsoons are caused by a combination of ocean currents, mountain ranges, and pressure differences.',
          difficulty: 'Hard' as const
        }))
      },
      {
        id: 'natural-resources',
        name: 'Natural Resources',
        description: 'Minerals, forests, water resources, energy',
        difficulty: 'Medium',
        estimatedTime: 45,
        questions: Array.from({ length: 50 }, (_, i) => ({
          id: `natural-resources-${i + 1}`,
          question: `Natural Resources Question ${i + 1}: Which state is the largest producer of coal in India?`,
          options: ['Jharkhand', 'Chhattisgarh', 'Odisha', 'West Bengal'],
          correct: 2,
          explanation: 'Odisha is the largest producer of coal in India, accounting for about 24% of total production.',
          difficulty: 'Medium' as const
        }))
      },
      {
        id: 'population-settlement',
        name: 'Population & Settlement',
        description: 'Demographics, urbanization, migration patterns',
        difficulty: 'Easy',
        estimatedTime: 40,
        questions: Array.from({ length: 50 }, (_, i) => ({
          id: `population-settlement-${i + 1}`,
          question: `Population Question ${i + 1}: Which is the most populous state in India?`,
          options: ['Maharashtra', 'Uttar Pradesh', 'Bihar', 'West Bengal'],
          correct: 1,
          explanation: 'Uttar Pradesh is the most populous state in India with over 200 million people.',
          difficulty: 'Easy' as const
        }))
      },
      {
        id: 'agriculture',
        name: 'Agriculture',
        description: 'Crops, farming techniques, agricultural regions',
        difficulty: 'Medium',
        estimatedTime: 45,
        questions: Array.from({ length: 50 }, (_, i) => ({
          id: `agriculture-${i + 1}`,
          question: `Agriculture Question ${i + 1}: Which crop is known as the "Golden Fiber"?`,
          options: ['Cotton', 'Jute', 'Silk', 'Hemp'],
          correct: 1,
          explanation: 'Jute is known as the "Golden Fiber" due to its golden color and economic importance.',
          difficulty: 'Medium' as const
        }))
      },
      {
        id: 'transport-communication',
        name: 'Transport & Communication',
        description: 'Railways, roadways, waterways, telecommunications',
        difficulty: 'Easy',
        estimatedTime: 40,
        questions: Array.from({ length: 50 }, (_, i) => ({
          id: `transport-communication-${i + 1}`,
          question: `Transport Question ${i + 1}: Which is the longest railway route in India?`,
          options: ['Delhi-Chennai', 'Mumbai-Kolkata', 'Dibrugarh-Kanyakumari', 'Mumbai-Chennai'],
          correct: 2,
          explanation: 'The Dibrugarh-Kanyakumari route is the longest railway route in India.',
          difficulty: 'Easy' as const
        }))
      },
      {
        id: 'economic-geography',
        name: 'Economic Geography',
        description: 'Industries, trade, economic activities',
        difficulty: 'Hard',
        estimatedTime: 50,
        questions: Array.from({ length: 50 }, (_, i) => ({
          id: `economic-geography-${i + 1}`,
          question: `Economic Geography Question ${i + 1}: Which city is known as the "Silicon Valley of India"?`,
          options: ['Mumbai', 'Bangalore', 'Hyderabad', 'Chennai'],
          correct: 1,
          explanation: 'Bangalore is known as the "Silicon Valley of India" due to its IT industry concentration.',
          difficulty: 'Hard' as const
        }))
      },
      {
        id: 'environmental-geography',
        name: 'Environmental Geography',
        description: 'Ecology, conservation, environmental issues',
        difficulty: 'Hard',
        estimatedTime: 50,
        questions: Array.from({ length: 50 }, (_, i) => ({
          id: `environmental-geography-${i + 1}`,
          question: `Environmental Geography Question ${i + 1}: Which gas is primarily responsible for global warming?`,
          options: ['Oxygen', 'Carbon Dioxide', 'Nitrogen', 'Hydrogen'],
          correct: 1,
          explanation: 'Carbon dioxide is the primary greenhouse gas responsible for global warming.',
          difficulty: 'Hard' as const
        }))
      }
    ]
  },
  {
    id: 'polity',
    name: 'Polity',
    description: 'Indian Constitution, Government, and Political System',
    icon: '🏛️',
    color: 'bg-blue-500',
    category: 'core',
    totalQuestions: 500,
    topics: [
      {
        id: 'constitution',
        name: 'Indian Constitution',
        description: 'Fundamental rights, duties, directive principles',
        difficulty: 'Hard',
        estimatedTime: 50,
        questions: Array.from({ length: 50 }, (_, i) => ({
          id: `constitution-${i + 1}`,
          question: `Constitution Question ${i + 1}: Who is known as the Father of the Indian Constitution?`,
          options: ['Mahatma Gandhi', 'Dr. B.R. Ambedkar', 'Jawaharlal Nehru', 'Sardar Patel'],
          correct: 1,
          explanation: 'Dr. B.R. Ambedkar is known as the Father of the Indian Constitution for his role as chairman of the drafting committee.',
          difficulty: 'Hard' as const
        }))
      },
      {
        id: 'fundamental-rights',
        name: 'Fundamental Rights',
        description: 'Rights guaranteed by the Constitution',
        difficulty: 'Medium',
        estimatedTime: 45,
        questions: Array.from({ length: 50 }, (_, i) => ({
          id: `fundamental-rights-${i + 1}`,
          question: `Fundamental Rights Question ${i + 1}: How many fundamental rights are guaranteed by the Indian Constitution?`,
          options: ['5', '6', '7', '8'],
          correct: 1,
          explanation: 'The Indian Constitution guarantees 6 fundamental rights to its citizens.',
          difficulty: 'Medium' as const
        }))
      },
      {
        id: 'directive-principles',
        name: 'Directive Principles',
        description: 'DPSP and their implementation',
        difficulty: 'Hard',
        estimatedTime: 50,
        questions: Array.from({ length: 50 }, (_, i) => ({
          id: `directive-principles-${i + 1}`,
          question: `DPSP Question ${i + 1}: Directive Principles of State Policy are taken from which country's constitution?`,
          options: ['USA', 'UK', 'Ireland', 'Canada'],
          correct: 2,
          explanation: 'Directive Principles of State Policy are taken from the Irish Constitution.',
          difficulty: 'Hard' as const
        }))
      },
      {
        id: 'union-government',
        name: 'Union Government',
        description: 'President, Prime Minister, Parliament',
        difficulty: 'Medium',
        estimatedTime: 45,
        questions: Array.from({ length: 50 }, (_, i) => ({
          id: `union-government-${i + 1}`,
          question: `Union Government Question ${i + 1}: What is the term of office for the President of India?`,
          options: ['4 years', '5 years', '6 years', '7 years'],
          correct: 1,
          explanation: 'The President of India serves a term of 5 years.',
          difficulty: 'Medium' as const
        }))
      },
      {
        id: 'state-government',
        name: 'State Government',
        description: 'Governor, Chief Minister, State Legislature',
        difficulty: 'Medium',
        estimatedTime: 45,
        questions: Array.from({ length: 50 }, (_, i) => ({
          id: `state-government-${i + 1}`,
          question: `State Government Question ${i + 1}: Who appoints the Governor of a state?`,
          options: ['Prime Minister', 'President', 'Chief Minister', 'Chief Justice'],
          correct: 1,
          explanation: 'The Governor of a state is appointed by the President of India.',
          difficulty: 'Medium' as const
        }))
      },
      {
        id: 'local-government',
        name: 'Local Government',
        description: 'Panchayati Raj, Municipal bodies',
        difficulty: 'Easy',
        estimatedTime: 40,
        questions: Array.from({ length: 50 }, (_, i) => ({
          id: `local-government-${i + 1}`,
          question: `Local Government Question ${i + 1}: Which amendment introduced Panchayati Raj?`,
          options: ['72nd Amendment', '73rd Amendment', '74th Amendment', '75th Amendment'],
          correct: 1,
          explanation: 'The 73rd Amendment Act introduced Panchayati Raj institutions.',
          difficulty: 'Easy' as const
        }))
      },
      {
        id: 'judiciary',
        name: 'Judiciary',
        description: 'Supreme Court, High Courts, judicial review',
        difficulty: 'Hard',
        estimatedTime: 50,
        questions: Array.from({ length: 50 }, (_, i) => ({
          id: `judiciary-${i + 1}`,
          question: `Judiciary Question ${i + 1}: What is the retirement age of a Supreme Court judge?`,
          options: ['60 years', '62 years', '65 years', '70 years'],
          correct: 2,
          explanation: 'A Supreme Court judge retires at the age of 65 years.',
          difficulty: 'Hard' as const
        }))
      },
      {
        id: 'elections',
        name: 'Elections',
        description: 'Election Commission, electoral process',
        difficulty: 'Easy',
        estimatedTime: 40,
        questions: Array.from({ length: 50 }, (_, i) => ({
          id: `elections-${i + 1}`,
          question: `Elections Question ${i + 1}: Who is the constitutional head of the Election Commission?`,
          options: ['Chief Election Commissioner', 'President', 'Prime Minister', 'Parliament'],
          correct: 0,
          explanation: 'The Chief Election Commissioner is the constitutional head of the Election Commission.',
          difficulty: 'Easy' as const
        }))
      },
      {
        id: 'emergency-provisions',
        name: 'Emergency Provisions',
        description: 'National emergency, President\'s rule',
        difficulty: 'Hard',
        estimatedTime: 50,
        questions: Array.from({ length: 50 }, (_, i) => ({
          id: `emergency-provisions-${i + 1}`,
          question: `Emergency Question ${i + 1}: How many types of emergencies are mentioned in the Constitution?`,
          options: ['2', '3', '4', '5'],
          correct: 1,
          explanation: 'The Constitution mentions 3 types of emergencies: National Emergency, State Emergency, and Financial Emergency.',
          difficulty: 'Hard' as const
        }))
      },
      {
        id: 'amendments',
        name: 'Constitutional Amendments',
        description: 'Important amendments and their significance',
        difficulty: 'Hard',
        estimatedTime: 50,
        questions: Array.from({ length: 50 }, (_, i) => ({
          id: `amendments-${i + 1}`,
          question: `Amendments Question ${i + 1}: Which amendment is known as the Mini Constitution?`,
          options: ['42nd Amendment', '44th Amendment', '52nd Amendment', '61st Amendment'],
          correct: 0,
          explanation: 'The 42nd Amendment is known as the Mini Constitution due to its extensive changes.',
          difficulty: 'Hard' as const
        }))
      }
    ]
  },
  {
    id: 'economics',
    name: 'Economics',
    description: 'Indian Economy, Economic Planning, and Development',
    icon: '💰',
    color: 'bg-purple-500',
    category: 'core',
    totalQuestions: 500,
    topics: [
      {
        id: 'indian-economy',
        name: 'Indian Economy',
        description: 'Economic structure, sectors, GDP',
        difficulty: 'Medium',
        estimatedTime: 45,
        questions: Array.from({ length: 50 }, (_, i) => ({
          id: `indian-economy-${i + 1}`,
          question: `Indian Economy Question ${i + 1}: Which sector contributes the most to India's GDP?`,
          options: ['Agriculture', 'Industry', 'Services', 'Manufacturing'],
          correct: 2,
          explanation: 'The services sector contributes the most to India\'s GDP, accounting for about 55% of the total.',
          difficulty: 'Medium' as const
        }))
      },
      {
        id: 'banking-finance',
        name: 'Banking & Finance',
        description: 'RBI, commercial banks, financial institutions',
        difficulty: 'Hard',
        estimatedTime: 50,
        questions: Array.from({ length: 50 }, (_, i) => ({
          id: `banking-finance-${i + 1}`,
          question: `Banking Question ${i + 1}: What is the full form of NABARD?`,
          options: ['National Agricultural Bank for Rural Development', 'National Bank for Agriculture and Rural Development', 'National Agricultural Banking and Rural Development', 'National Association of Banks and Rural Development'],
          correct: 1,
          explanation: 'NABARD stands for National Bank for Agriculture and Rural Development.',
          difficulty: 'Hard' as const
        }))
      },
      {
        id: 'planning-development',
        name: 'Planning & Development',
        description: 'Five-year plans, NITI Aayog, development programs',
        difficulty: 'Medium',
        estimatedTime: 45,
        questions: Array.from({ length: 50 }, (_, i) => ({
          id: `planning-development-${i + 1}`,
          question: `Planning Question ${i + 1}: Which institution replaced the Planning Commission?`,
          options: ['NITI Aayog', 'Finance Commission', 'Economic Advisory Council', 'Development Council'],
          correct: 0,
          explanation: 'NITI Aayog replaced the Planning Commission in 2015.',
          difficulty: 'Medium' as const
        }))
      },
      {
        id: 'public-finance',
        name: 'Public Finance',
        description: 'Budget, taxation, fiscal policy',
        difficulty: 'Hard',
        estimatedTime: 50,
        questions: Array.from({ length: 50 }, (_, i) => ({
          id: `public-finance-${i + 1}`,
          question: `Public Finance Question ${i + 1}: What is the highest tax rate under GST?`,
          options: ['18%', '25%', '28%', '30%'],
          correct: 2,
          explanation: 'The highest tax rate under GST is 28% for luxury goods.',
          difficulty: 'Hard' as const
        }))
      },
      {
        id: 'international-trade',
        name: 'International Trade',
        description: 'Exports, imports, trade policy, WTO',
        difficulty: 'Medium',
        estimatedTime: 45,
        questions: Array.from({ length: 50 }, (_, i) => ({
          id: `international-trade-${i + 1}`,
          question: `International Trade Question ${i + 1}: What does WTO stand for?`,
          options: ['World Trade Organization', 'World Tourism Organization', 'World Transport Organization', 'World Technology Organization'],
          correct: 0,
          explanation: 'WTO stands for World Trade Organization.',
          difficulty: 'Medium' as const
        }))
      },
      {
        id: 'agriculture-economics',
        name: 'Agriculture Economics',
        description: 'Agricultural policies, pricing, subsidies',
        difficulty: 'Easy',
        estimatedTime: 40,
        questions: Array.from({ length: 50 }, (_, i) => ({
          id: `agriculture-economics-${i + 1}`,
          question: `Agriculture Economics Question ${i + 1}: What is MSP?`,
          options: ['Maximum Support Price', 'Minimum Support Price', 'Market Support Price', 'Marginal Support Price'],
          correct: 1,
          explanation: 'MSP stands for Minimum Support Price, which is the price at which the government purchases crops from farmers.',
          difficulty: 'Easy' as const
        }))
      },
      {
        id: 'industrial-economics',
        name: 'Industrial Economics',
        description: 'Industrial policy, manufacturing, SMEs',
        difficulty: 'Medium',
        estimatedTime: 45,
        questions: Array.from({ length: 50 }, (_, i) => ({
          id: `industrial-economics-${i + 1}`,
          question: `Industrial Economics Question ${i + 1}: What does MSME stand for?`,
          options: ['Micro, Small and Medium Enterprises', 'Medium, Small and Micro Enterprises', 'Manufacturing, Small and Medium Enterprises', 'Micro, Service and Manufacturing Enterprises'],
          correct: 0,
          explanation: 'MSME stands for Micro, Small and Medium Enterprises.',
          difficulty: 'Medium' as const
        }))
      },
      {
        id: 'poverty-unemployment',
        name: 'Poverty & Unemployment',
        description: 'Poverty measurement, employment schemes',
        difficulty: 'Easy',
        estimatedTime: 40,
        questions: Array.from({ length: 50 }, (_, i) => ({
          id: `poverty-unemployment-${i + 1}`,
          question: `Poverty Question ${i + 1}: What is the full form of MGNREGA?`,
          options: ['Mahatma Gandhi National Rural Employment Guarantee Act', 'Mahatma Gandhi National Rural Education Guarantee Act', 'Mahatma Gandhi National Rural Empowerment Guarantee Act', 'Mahatma Gandhi National Rural Enterprise Guarantee Act'],
          correct: 0,
          explanation: 'MGNREGA stands for Mahatma Gandhi National Rural Employment Guarantee Act.',
          difficulty: 'Easy' as const
        }))
      },
      {
        id: 'infrastructure',
        name: 'Infrastructure',
        description: 'Transport, energy, telecommunications',
        difficulty: 'Medium',
        estimatedTime: 45,
        questions: Array.from({ length: 50 }, (_, i) => ({
          id: `infrastructure-${i + 1}`,
          question: `Infrastructure Question ${i + 1}: Which is India's largest power company?`,
          options: ['NTPC', 'BHEL', 'PowerGrid', 'Coal India'],
          correct: 0,
          explanation: 'NTPC (National Thermal Power Corporation) is India\'s largest power company.',
          difficulty: 'Medium' as const
        }))
      },
      {
        id: 'economic-reforms',
        name: 'Economic Reforms',
        description: 'Liberalization, privatization, globalization',
        difficulty: 'Hard',
        estimatedTime: 50,
        questions: Array.from({ length: 50 }, (_, i) => ({
          id: `economic-reforms-${i + 1}`,
          question: `Economic Reforms Question ${i + 1}: In which year did India start economic liberalization?`,
          options: ['1990', '1991', '1992', '1993'],
          correct: 1,
          explanation: 'India started economic liberalization in 1991 under the leadership of Dr. Manmohan Singh.',
          difficulty: 'Hard' as const
        }))
      }
    ]
  },
  {
    id: 'science-technology',
    name: 'Science & Technology',
    description: 'Physics, Chemistry, Biology, and Technology',
    icon: '🔬',
    color: 'bg-indigo-500',
    category: 'core',
    totalQuestions: 500,
    topics: [
      {
        id: 'physics',
        name: 'Physics',
        description: 'Mechanics, optics, electricity, modern physics',
        difficulty: 'Hard',
        estimatedTime: 50,
        questions: Array.from({ length: 50 }, (_, i) => ({
          id: `physics-${i + 1}`,
          question: `Physics Question ${i + 1}: What is the SI unit of electric current?`,
          options: ['Volt', 'Ampere', 'Watt', 'Ohm'],
          correct: 1,
          explanation: 'The SI unit of electric current is Ampere (A).',
          difficulty: 'Hard' as const
        }))
      },
      {
        id: 'chemistry',
        name: 'Chemistry',
        description: 'Organic, inorganic, physical chemistry',
        difficulty: 'Hard',
        estimatedTime: 50,
        questions: Array.from({ length: 50 }, (_, i) => ({
          id: `chemistry-${i + 1}`,
          question: `Chemistry Question ${i + 1}: What is the chemical formula of water?`,
          options: ['H2O', 'H2O2', 'HO2', 'H3O'],
          correct: 0,
          explanation: 'The chemical formula of water is H2O.',
          difficulty: 'Hard' as const
        }))
      },
      {
        id: 'biology',
        name: 'Biology',
        description: 'Botany, zoology, human physiology',
        difficulty: 'Medium',
        estimatedTime: 45,
        questions: Array.from({ length: 50 }, (_, i) => ({
          id: `biology-${i + 1}`,
          question: `Biology Question ${i + 1}: Which organ produces insulin in the human body?`,
          options: ['Liver', 'Kidney', 'Pancreas', 'Heart'],
          correct: 2,
          explanation: 'The pancreas produces insulin in the human body.',
          difficulty: 'Medium' as const
        }))
      },
      {
        id: 'space-technology',
        name: 'Space Technology',
        description: 'ISRO, satellite technology, space missions',
        difficulty: 'Medium',
        estimatedTime: 45,
        questions: Array.from({ length: 50 }, (_, i) => ({
          id: `space-technology-${i + 1}`,
          question: `Space Technology Question ${i + 1}: What is the full form of ISRO?`,
          options: ['Indian Space Research Organization', 'Indian Space Research Observatory', 'Indian Scientific Research Organization', 'Indian Space Research Operation'],
          correct: 0,
          explanation: 'ISRO stands for Indian Space Research Organization.',
          difficulty: 'Medium' as const
        }))
      },
      {
        id: 'information-technology',
        name: 'Information Technology',
        description: 'Computers, internet, artificial intelligence',
        difficulty: 'Easy',
        estimatedTime: 40,
        questions: Array.from({ length: 50 }, (_, i) => ({
          id: `information-technology-${i + 1}`,
          question: `IT Question ${i + 1}: What does CPU stand for?`,
          options: ['Central Processing Unit', 'Computer Processing Unit', 'Central Program Unit', 'Computer Program Unit'],
          correct: 0,
          explanation: 'CPU stands for Central Processing Unit.',
          difficulty: 'Easy' as const
        }))
      },
      {
        id: 'biotechnology',
        name: 'Biotechnology',
        description: 'Genetic engineering, medical biotechnology',
        difficulty: 'Hard',
        estimatedTime: 50,
        questions: Array.from({ length: 50 }, (_, i) => ({
          id: `biotechnology-${i + 1}`,
          question: `Biotechnology Question ${i + 1}: What is the study of genes called?`,
          options: ['Genetics', 'Genomics', 'Proteomics', 'Bioinformatics'],
          correct: 0,
          explanation: 'The study of genes is called Genetics.',
          difficulty: 'Hard' as const
        }))
      },
      {
        id: 'environmental-science',
        name: 'Environmental Science',
        description: 'Ecology, pollution, climate change',
        difficulty: 'Medium',
        estimatedTime: 45,
        questions: Array.from({ length: 50 }, (_, i) => ({
          id: `environmental-science-${i + 1}`,
          question: `Environmental Science Question ${i + 1}: What is the main cause of ozone depletion?`,
          options: ['Carbon dioxide', 'Chlorofluorocarbons', 'Methane', 'Nitrogen oxides'],
          correct: 1,
          explanation: 'Chlorofluorocarbons (CFCs) are the main cause of ozone depletion.',
          difficulty: 'Medium' as const
        }))
      },
      {
        id: 'medical-science',
        name: 'Medical Science',
        description: 'Diseases, treatments, medical discoveries',
        difficulty: 'Hard',
        estimatedTime: 50,
        questions: Array.from({ length: 50 }, (_, i) => ({
          id: `medical-science-${i + 1}`,
          question: `Medical Science Question ${i + 1}: Which vitamin is produced by the skin when exposed to sunlight?`,
          options: ['Vitamin A', 'Vitamin B', 'Vitamin C', 'Vitamin D'],
          correct: 3,
          explanation: 'Vitamin D is produced by the skin when exposed to sunlight.',
          difficulty: 'Hard' as const
        }))
      },
      {
        id: 'nuclear-technology',
        name: 'Nuclear Technology',
        description: 'Nuclear energy, atomic structure, applications',
        difficulty: 'Hard',
        estimatedTime: 50,
        questions: Array.from({ length: 50 }, (_, i) => ({
          id: `nuclear-technology-${i + 1}`,
          question: `Nuclear Technology Question ${i + 1}: Which element is primarily used in nuclear reactors?`,
          options: ['Plutonium', 'Uranium', 'Thorium', 'Radium'],
          correct: 1,
          explanation: 'Uranium is primarily used in nuclear reactors for nuclear fission.',
          difficulty: 'Hard' as const
        }))
      },
      {
        id: 'renewable-energy',
        name: 'Renewable Energy',
        description: 'Solar, wind, hydro, biomass energy',
        difficulty: 'Easy',
        estimatedTime: 40,
        questions: Array.from({ length: 50 }, (_, i) => ({
          id: `renewable-energy-${i + 1}`,
          question: `Renewable Energy Question ${i + 1}: Which is the most abundant renewable energy source?`,
          options: ['Wind', 'Solar', 'Hydro', 'Biomass'],
          correct: 1,
          explanation: 'Solar energy is the most abundant renewable energy source on Earth.',
          difficulty: 'Easy' as const
        }))
      }
    ]
  }
];