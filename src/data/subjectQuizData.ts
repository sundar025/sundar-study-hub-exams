import { Subject } from '@/types/quiz';

export const subjects: Subject[] = [
  {
    id: 'history',
    name: 'History',
    description: 'Ancient, Medieval, and Modern History of India and World',
    icon: '📚',
    color: 'bg-amber-500',
    category: 'core',
    totalQuestions: 200,
    topics: [
      {
        id: 'ancient-india',
        name: 'Ancient India',
        description: 'Indus Valley Civilization, Vedic Period, Mauryas, Guptas',
        difficulty: 'Medium',
        estimatedTime: 45,
        questions: [
          {
            id: 'ancient-india-1',
            question: 'Which dynasty ruled during the Golden Age of India?',
            options: ['Maurya Dynasty', 'Gupta Dynasty', 'Chola Dynasty', 'Mughal Dynasty'],
            correct: 1,
            explanation: 'The Gupta Dynasty (320-550 CE) is considered the Golden Age of India due to significant achievements in arts, science, and literature.',
            difficulty: 'Medium' as const
          },
          {
            id: 'ancient-india-2',
            question: 'Who founded the Mauryan Empire?',
            options: ['Chandragupta Maurya', 'Ashoka', 'Bindusara', 'Samudragupta'],
            correct: 0,
            explanation: 'Chandragupta Maurya founded the Mauryan Empire in 321 BCE.',
            difficulty: 'Medium' as const
          },
          {
            id: 'ancient-india-3',
            question: 'Which ancient civilization existed in the Indus Valley?',
            options: ['Aryan Civilization', 'Harappan Civilization', 'Vedic Civilization', 'Dravidian Civilization'],
            correct: 1,
            explanation: 'The Harappan Civilization (Indus Valley Civilization) existed from 3300-1300 BCE.',
            difficulty: 'Easy' as const
          },
          {
            id: 'ancient-india-4',
            question: 'What was the capital of the Mauryan Empire?',
            options: ['Pataliputra', 'Ujjain', 'Taxila', 'Mathura'],
            correct: 0,
            explanation: 'Pataliputra (modern-day Patna) was the capital of the Mauryan Empire.',
            difficulty: 'Medium' as const
          },
          {
            id: 'ancient-india-5',
            question: 'Which Gupta ruler was known as the "Napoleon of India"?',
            options: ['Chandragupta I', 'Samudragupta', 'Chandragupta II', 'Kumaragupta'],
            correct: 1,
            explanation: 'Samudragupta was called the "Napoleon of India" due to his military conquests.',
            difficulty: 'Hard' as const
          },
          {
            id: 'ancient-india-6',
            question: 'Which ancient Indian text describes the political system?',
            options: ['Vedas', 'Arthashastra', 'Upanishads', 'Puranas'],
            correct: 1,
            explanation: 'Arthashastra by Kautilya describes ancient Indian political and economic systems.',
            difficulty: 'Medium' as const
          },
          {
            id: 'ancient-india-7',
            question: 'Who was Ashoka\'s grandfather?',
            options: ['Bindusara', 'Chandragupta Maurya', 'Chandragupta II', 'Kumaragupta'],
            correct: 1,
            explanation: 'Chandragupta Maurya was Ashoka\'s grandfather and founder of the Mauryan Empire.',
            difficulty: 'Easy' as const
          },
          {
            id: 'ancient-india-8',
            question: 'Which battle led to Ashoka\'s conversion to Buddhism?',
            options: ['Battle of Hydaspes', 'Battle of Kalinga', 'Battle of Panipat', 'Battle of Tarain'],
            correct: 1,
            explanation: 'The brutal Battle of Kalinga (261 BCE) led to Ashoka\'s conversion to Buddhism.',
            difficulty: 'Medium' as const
          },
          {
            id: 'ancient-india-9',
            question: 'Which metal was first used in the Harappan Civilization?',
            options: ['Iron', 'Bronze', 'Copper', 'Gold'],
            correct: 1,
            explanation: 'Bronze was widely used in the Harappan Civilization, making it part of the Bronze Age.',
            difficulty: 'Medium' as const
          },
          {
            id: 'ancient-india-10',
            question: 'What was the ancient name of Patna?',
            options: ['Pataliputra', 'Kusumapura', 'Both A and B', 'Pushpapura'],
            correct: 2,
            explanation: 'Patna was known as both Pataliputra and Kusumapura in ancient times.',
            difficulty: 'Easy' as const
          },
          {
            id: 'ancient-india-11',
            question: 'Which Vedic god was considered the king of gods?',
            options: ['Agni', 'Varuna', 'Indra', 'Surya'],
            correct: 2,
            explanation: 'Indra was considered the king of gods in Vedic literature.',
            difficulty: 'Medium' as const
          },
          {
            id: 'ancient-india-12',
            question: 'The famous Iron Pillar is located in which city?',
            options: ['Delhi', 'Agra', 'Varanasi', 'Mathura'],
            correct: 0,
            explanation: 'The Iron Pillar of Delhi dates back to the Gupta period and is located in Delhi.',
            difficulty: 'Easy' as const
          },
          {
            id: 'ancient-india-13',
            question: 'Which dynasty succeeded the Mauryan Empire?',
            options: ['Gupta Dynasty', 'Sunga Dynasty', 'Satavahana Dynasty', 'Kushana Dynasty'],
            correct: 1,
            explanation: 'The Sunga Dynasty succeeded the Mauryan Empire after overthrowing the last Mauryan ruler.',
            difficulty: 'Hard' as const
          },
          {
            id: 'ancient-india-14',
            question: 'Who was the court physician of Harsha?',
            options: ['Charaka', 'Sushruta', 'Vagbhata', 'Dhanvantari'],
            correct: 2,
            explanation: 'Vagbhata was the court physician of Emperor Harsha.',
            difficulty: 'Hard' as const
          },
          {
            id: 'ancient-india-15',
            question: 'Which ancient university was located in Bihar?',
            options: ['Takshashila', 'Nalanda', 'Vikramashila', 'Both B and C'],
            correct: 3,
            explanation: 'Both Nalanda and Vikramashila universities were located in ancient Bihar.',
            difficulty: 'Medium' as const
          },
          {
            id: 'ancient-india-16',
            question: 'What was the primary occupation in the Indus Valley Civilization?',
            options: ['Agriculture', 'Trade', 'Handicrafts', 'All of the above'],
            correct: 3,
            explanation: 'The Indus Valley people were engaged in agriculture, trade, and handicrafts.',
            difficulty: 'Easy' as const
          },
          {
            id: 'ancient-india-17',
            question: 'Which ancient text mentions the caste system?',
            options: ['Rig Veda', 'Purusha Sukta', 'Manusmriti', 'All of the above'],
            correct: 3,
            explanation: 'The caste system is mentioned in various ancient texts including Rig Veda, Purusha Sukta, and Manusmriti.',
            difficulty: 'Medium' as const
          },
          {
            id: 'ancient-india-18',
            question: 'Who built the Sanchi Stupa?',
            options: ['Ashoka', 'Harsha', 'Chandragupta', 'Bindusara'],
            correct: 0,
            explanation: 'The Sanchi Stupa was built by Emperor Ashoka in the 3rd century BCE.',
            difficulty: 'Easy' as const
          },
          {
            id: 'ancient-india-19',
            question: 'Which ancient Indian mathematician invented zero?',
            options: ['Aryabhata', 'Brahmagupta', 'Bhaskara', 'Varahamihira'],
            correct: 1,
            explanation: 'Brahmagupta is credited with giving the first clear description of zero and its mathematical properties.',
            difficulty: 'Medium' as const
          },
          {
            id: 'ancient-india-20',
            question: 'The term "Bharatavarsha" was used to refer to which region?',
            options: ['Northern India', 'Southern India', 'Ancient India', 'Western India'],
            correct: 2,
            explanation: 'Bharatavarsha was the ancient term used to refer to the Indian subcontinent.',
            difficulty: 'Easy' as const
          }
        ]
      },
      {
        id: 'medieval-india',
        name: 'Medieval India',
        description: 'Delhi Sultanate, Mughal Empire, Regional Kingdoms',
        difficulty: 'Medium',
        estimatedTime: 45,
        questions: [
          {
            id: 'medieval-india-1',
            question: 'Who was the founder of the Mughal Empire in India?',
            options: ['Akbar', 'Babur', 'Humayun', 'Shah Jahan'],
            correct: 1,
            explanation: 'Babur founded the Mughal Empire in India after defeating Ibrahim Lodi in the First Battle of Panipat in 1526.',
            difficulty: 'Medium' as const
          },
          {
            id: 'medieval-india-2',
            question: 'Which Mughal emperor was known as "Akbar the Great"?',
            options: ['Babur', 'Humayun', 'Akbar', 'Jahangir'],
            correct: 2,
            explanation: 'Akbar (1556-1605) was known as "Akbar the Great" for his administrative reforms and religious tolerance.',
            difficulty: 'Easy' as const
          },
          {
            id: 'medieval-india-3',
            question: 'The Delhi Sultanate was founded by which dynasty?',
            options: ['Slave Dynasty', 'Khilji Dynasty', 'Tughlaq Dynasty', 'Lodi Dynasty'],
            correct: 0,
            explanation: 'The Delhi Sultanate was founded by the Slave Dynasty (Mamluk Dynasty) in 1206.',
            difficulty: 'Medium' as const
          },
          {
            id: 'medieval-india-4',
            question: 'Who built the Taj Mahal?',
            options: ['Akbar', 'Shah Jahan', 'Aurangzeb', 'Jahangir'],
            correct: 1,
            explanation: 'Shah Jahan built the Taj Mahal as a mausoleum for his wife Mumtaz Mahal.',
            difficulty: 'Easy' as const
          },
          {
            id: 'medieval-india-5',
            question: 'Which was the first Muslim invasion of India?',
            options: ['Muhammad Ghori', 'Mahmud of Ghazni', 'Muhammad bin Qasim', 'Alauddin Khilji'],
            correct: 2,
            explanation: 'Muhammad bin Qasim invaded Sindh in 712 CE, marking the first Muslim invasion of India.',
            difficulty: 'Medium' as const
          },
          {
            id: 'medieval-india-6',
            question: 'The Vijayanagara Empire was founded by which brothers?',
            options: ['Harihara and Bukka', 'Krishna and Rama', 'Deva and Raya', 'Sangama and Bukka'],
            correct: 0,
            explanation: 'The Vijayanagara Empire was founded by Harihara and Bukka in 1336.',
            difficulty: 'Medium' as const
          },
          {
            id: 'medieval-india-7',
            question: 'Which Mughal emperor banned music and dancing?',
            options: ['Akbar', 'Shah Jahan', 'Aurangzeb', 'Jahangir'],
            correct: 2,
            explanation: 'Aurangzeb banned music and dancing as part of his orthodox Islamic policies.',
            difficulty: 'Medium' as const
          },
          {
            id: 'medieval-india-8',
            question: 'The Bahmani Sultanate was located in which region?',
            options: ['Northern India', 'Deccan', 'Eastern India', 'Western India'],
            correct: 1,
            explanation: 'The Bahmani Sultanate was established in the Deccan region in 1347.',
            difficulty: 'Medium' as const
          },
          {
            id: 'medieval-india-9',
            question: 'Who was the last ruler of the Delhi Sultanate?',
            options: ['Ibrahim Lodi', 'Sikandar Lodi', 'Bahlul Lodi', 'Daulat Khan Lodi'],
            correct: 0,
            explanation: 'Ibrahim Lodi was the last ruler of the Delhi Sultanate, defeated by Babur in 1526.',
            difficulty: 'Hard' as const
          },
          {
            id: 'medieval-india-10',
            question: 'Which medieval ruler introduced the "Din-i-Ilahi" religion?',
            options: ['Babur', 'Akbar', 'Shah Jahan', 'Aurangzeb'],
            correct: 1,
            explanation: 'Akbar introduced Din-i-Ilahi, a syncretic religion combining elements of various faiths.',
            difficulty: 'Medium' as const
          },
          {
            id: 'medieval-india-11',
            question: 'The Khilji dynasty was founded by which ruler?',
            options: ['Alauddin Khilji', 'Jalaluddin Khilji', 'Qutbuddin Khilji', 'Mubarak Shah Khilji'],
            correct: 1,
            explanation: 'Jalaluddin Khilji founded the Khilji dynasty in 1290.',
            difficulty: 'Hard' as const
          },
          {
            id: 'medieval-india-12',
            question: 'Which fort is known as the "Gibraltar of India"?',
            options: ['Red Fort', 'Gwalior Fort', 'Chittorgarh Fort', 'Golconda Fort'],
            correct: 1,
            explanation: 'Gwalior Fort is known as the "Gibraltar of India" due to its strategic location.',
            difficulty: 'Medium' as const
          },
          {
            id: 'medieval-india-13',
            question: 'The Mughal emperor Humayun was defeated by which Afghan ruler?',
            options: ['Sher Shah Suri', 'Bahlul Lodi', 'Ibrahim Lodi', 'Islam Shah'],
            correct: 0,
            explanation: 'Humayun was defeated by Sher Shah Suri and had to flee to Persia.',
            difficulty: 'Medium' as const
          },
          {
            id: 'medieval-india-14',
            question: 'Which Maratha leader is known as the "Father of Indian Navy"?',
            options: ['Shivaji', 'Sambhaji', 'Kanhoji Angre', 'Baji Rao I'],
            correct: 2,
            explanation: 'Kanhoji Angre is known as the "Father of Indian Navy" for his naval prowess.',
            difficulty: 'Hard' as const
          },
          {
            id: 'medieval-india-15',
            question: 'The Sultanate ruler who called himself "Second Alexander" was:',
            options: ['Alauddin Khilji', 'Muhammad bin Tughlaq', 'Firoz Shah Tughlaq', 'Balban'],
            correct: 0,
            explanation: 'Alauddin Khilji called himself the "Second Alexander" due to his military conquests.',
            difficulty: 'Hard' as const
          },
          {
            id: 'medieval-india-16',
            question: 'Which medieval text was written by Ziauddin Barani?',
            options: ['Tabaqat-i-Nasiri', 'Tarikh-i-Firuz Shahi', 'Futuh-us-Salatin', 'Rehla'],
            correct: 1,
            explanation: 'Tarikh-i-Firuz Shahi was written by Ziauddin Barani, a court historian.',
            difficulty: 'Hard' as const
          },
          {
            id: 'medieval-india-17',
            question: 'The Hoysala dynasty ruled over which region?',
            options: ['Karnataka', 'Tamil Nadu', 'Andhra Pradesh', 'Kerala'],
            correct: 0,
            explanation: 'The Hoysala dynasty ruled over the Karnataka region from the 10th to 14th centuries.',
            difficulty: 'Medium' as const
          },
          {
            id: 'medieval-india-18',
            question: 'Which Mughal emperor was also a poet with the pen name "Urfi"?',
            options: ['Akbar', 'Jahangir', 'Shah Jahan', 'Aurangzeb'],
            correct: 3,
            explanation: 'Aurangzeb was a poet with the pen name "Urfi" despite his orthodox image.',
            difficulty: 'Hard' as const
          },
          {
            id: 'medieval-india-19',
            question: 'The practice of Sati was encouraged by which ruler?',
            options: ['Akbar', 'This practice was not encouraged by rulers', 'Shah Jahan', 'Aurangzeb'],
            correct: 1,
            explanation: 'Sati was a social practice but was actually discouraged by many rulers including Akbar.',
            difficulty: 'Medium' as const
          },
          {
            id: 'medieval-india-20',
            question: 'The medieval kingdom of Mewar had its capital at:',
            options: ['Udaipur', 'Chittorgarh', 'Jodhpur', 'Jaipur'],
            correct: 1,
            explanation: 'Chittorgarh was the capital of the medieval kingdom of Mewar.',
            difficulty: 'Easy' as const
          }
        ]
      },
      {
        id: 'modern-india',
        name: 'Modern India',
        description: 'British Rule, Freedom Struggle, Independence Movement',
        difficulty: 'Hard',
        estimatedTime: 50,
        questions: Array.from({ length: 20 }, (_, i) => ({
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
        questions: Array.from({ length: 20 }, (_, i) => ({
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
        questions: Array.from({ length: 20 }, (_, i) => ({
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
        questions: Array.from({ length: 20 }, (_, i) => ({
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
        questions: Array.from({ length: 20 }, (_, i) => ({
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
        questions: Array.from({ length: 20 }, (_, i) => ({
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
        questions: Array.from({ length: 20 }, (_, i) => ({
          id: `dynasties-rulers-${i + 1}`,
          question: `Dynasties & Rulers Question ${i + 1}: Which emperor was known as Ashoka the Great?`,
          options: ['Mauryan Emperor', 'Gupta Emperor', 'Mughal Emperor', 'Chola Emperor'],
          correct: 0,
          explanation: 'Ashoka the Great was a Mauryan emperor who ruled from 268 to 232 BCE.',
          difficulty: 'Medium' as const
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
    totalQuestions: 200,
    topics: [
      {
        id: 'physical-geography',
        name: 'Physical Geography',
        description: 'Landforms, climate, rivers, mountains',
        difficulty: 'Medium',
        estimatedTime: 45,
        questions: Array.from({ length: 20 }, (_, i) => ({
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
        questions: Array.from({ length: 20 }, (_, i) => ({
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
        questions: Array.from({ length: 20 }, (_, i) => ({
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
        questions: Array.from({ length: 20 }, (_, i) => ({
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
        questions: Array.from({ length: 20 }, (_, i) => ({
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
        questions: Array.from({ length: 20 }, (_, i) => ({
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
        questions: Array.from({ length: 20 }, (_, i) => ({
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
        questions: Array.from({ length: 20 }, (_, i) => ({
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
        questions: Array.from({ length: 20 }, (_, i) => ({
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
        questions: Array.from({ length: 20 }, (_, i) => ({
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
    totalQuestions: 200,
    topics: [
      {
        id: 'constitution',
        name: 'Indian Constitution',
        description: 'Fundamental rights, duties, directive principles',
        difficulty: 'Hard',
        estimatedTime: 50,
        questions: Array.from({ length: 20 }, (_, i) => ({
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
        questions: Array.from({ length: 20 }, (_, i) => ({
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
        questions: Array.from({ length: 20 }, (_, i) => ({
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
        questions: Array.from({ length: 20 }, (_, i) => ({
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
        questions: Array.from({ length: 20 }, (_, i) => ({
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
        questions: Array.from({ length: 20 }, (_, i) => ({
          id: `local-government-${i + 1}`,
          question: `Local Government Question ${i + 1}: The 73rd Amendment is related to which institution?`,
          options: ['Urban Local Bodies', 'Panchayati Raj', 'Cooperative Societies', 'Election Commission'],
          correct: 1,
          explanation: 'The 73rd Amendment (1992) is related to Panchayati Raj institutions.',
          difficulty: 'Easy' as const
        }))
      },
      {
        id: 'judiciary',
        name: 'Judiciary',
        description: 'Supreme Court, High Courts, judicial review',
        difficulty: 'Hard',
        estimatedTime: 50,
        questions: Array.from({ length: 20 }, (_, i) => ({
          id: `judiciary-${i + 1}`,
          question: `Judiciary Question ${i + 1}: Who is the final interpreter of the Indian Constitution?`,
          options: ['President', 'Prime Minister', 'Supreme Court', 'Parliament'],
          correct: 2,
          explanation: 'The Supreme Court is the final interpreter of the Indian Constitution.',
          difficulty: 'Hard' as const
        }))
      },
      {
        id: 'elections',
        name: 'Elections',
        description: 'Election Commission, electoral process, political parties',
        difficulty: 'Medium',
        estimatedTime: 45,
        questions: Array.from({ length: 20 }, (_, i) => ({
          id: `elections-${i + 1}`,
          question: `Elections Question ${i + 1}: The Election Commission of India was established in which year?`,
          options: ['1948', '1949', '1950', '1951'],
          correct: 2,
          explanation: 'The Election Commission of India was established on January 25, 1950.',
          difficulty: 'Medium' as const
        }))
      },
      {
        id: 'public-administration',
        name: 'Public Administration',
        description: 'Civil services, bureaucracy, administrative reforms',
        difficulty: 'Medium',
        estimatedTime: 45,
        questions: Array.from({ length: 20 }, (_, i) => ({
          id: `public-administration-${i + 1}`,
          question: `Public Administration Question ${i + 1}: The All India Services include how many services?`,
          options: ['2', '3', '4', '5'],
          correct: 1,
          explanation: 'The All India Services include IAS, IPS, and IFS (3 services).',
          difficulty: 'Medium' as const
        }))
      },
      {
        id: 'constitutional-amendments',
        name: 'Constitutional Amendments',
        description: 'Important amendments and their significance',
        difficulty: 'Hard',
        estimatedTime: 50,
        questions: Array.from({ length: 20 }, (_, i) => ({
          id: `constitutional-amendments-${i + 1}`,
          question: `Constitutional Amendments Question ${i + 1}: Which amendment lowered the voting age from 21 to 18?`,
          options: ['60th Amendment', '61st Amendment', '62nd Amendment', '63rd Amendment'],
          correct: 1,
          explanation: 'The 61st Amendment (1989) lowered the voting age from 21 to 18 years.',
          difficulty: 'Hard' as const
        }))
      }
    ]
  },
  {
    id: 'economics',
    name: 'Economics',
    description: 'Indian Economy, Economic Development, and Financial Systems',
    icon: '💰',
    color: 'bg-purple-500',
    category: 'core',
    totalQuestions: 200,
    topics: [
      {
        id: 'indian-economy',
        name: 'Indian Economy',
        description: 'Economic structure, sectors, and growth',
        difficulty: 'Medium',
        estimatedTime: 45,
        questions: Array.from({ length: 20 }, (_, i) => ({
          id: `indian-economy-${i + 1}`,
          question: `Indian Economy Question ${i + 1}: Which sector contributes the most to India's GDP?`,
          options: ['Primary Sector', 'Secondary Sector', 'Tertiary Sector', 'Quaternary Sector'],
          correct: 2,
          explanation: 'The Tertiary (Services) sector contributes the most to India\'s GDP.',
          difficulty: 'Medium' as const
        }))
      },
      {
        id: 'banking-finance',
        name: 'Banking & Finance',
        description: 'RBI, monetary policy, financial institutions',
        difficulty: 'Hard',
        estimatedTime: 50,
        questions: Array.from({ length: 20 }, (_, i) => ({
          id: `banking-finance-${i + 1}`,
          question: `Banking & Finance Question ${i + 1}: What is the full form of SEBI?`,
          options: ['Securities Exchange Board of India', 'Securities and Exchange Board of India', 'Stock Exchange Board of India', 'Securities Evaluation Board of India'],
          correct: 1,
          explanation: 'SEBI stands for Securities and Exchange Board of India.',
          difficulty: 'Hard' as const
        }))
      },
      {
        id: 'planning-development',
        name: 'Planning & Development',
        description: 'Five-year plans, economic reforms, development programs',
        difficulty: 'Medium',
        estimatedTime: 45,
        questions: Array.from({ length: 20 }, (_, i) => ({
          id: `planning-development-${i + 1}`,
          question: `Planning & Development Question ${i + 1}: Which plan introduced the concept of "Growth with Social Justice"?`,
          options: ['Fifth Plan', 'Sixth Plan', 'Seventh Plan', 'Eighth Plan'],
          correct: 0,
          explanation: 'The Fifth Five-Year Plan (1974-79) introduced the concept of "Growth with Social Justice".',
          difficulty: 'Medium' as const
        }))
      },
      {
        id: 'public-finance',
        name: 'Public Finance',
        description: 'Budget, taxation, fiscal policy',
        difficulty: 'Hard',
        estimatedTime: 50,
        questions: Array.from({ length: 20 }, (_, i) => ({
          id: `public-finance-${i + 1}`,
          question: `Public Finance Question ${i + 1}: GST was implemented in India in which year?`,
          options: ['2016', '2017', '2018', '2019'],
          correct: 1,
          explanation: 'GST (Goods and Services Tax) was implemented in India on July 1, 2017.',
          difficulty: 'Hard' as const
        }))
      },
      {
        id: 'agriculture-economy',
        name: 'Agriculture & Economy',
        description: 'Agricultural policies, rural economy, food security',
        difficulty: 'Easy',
        estimatedTime: 40,
        questions: Array.from({ length: 20 }, (_, i) => ({
          id: `agriculture-economy-${i + 1}`,
          question: `Agriculture & Economy Question ${i + 1}: What percentage of India's population depends on agriculture?`,
          options: ['40%', '50%', '60%', '70%'],
          correct: 1,
          explanation: 'Approximately 50% of India\'s population depends on agriculture for their livelihood.',
          difficulty: 'Easy' as const
        }))
      },
      {
        id: 'industrial-policy',
        name: 'Industrial Policy',
        description: 'Industrial development, manufacturing, Make in India',
        difficulty: 'Medium',
        estimatedTime: 45,
        questions: Array.from({ length: 20 }, (_, i) => ({
          id: `industrial-policy-${i + 1}`,
          question: `Industrial Policy Question ${i + 1}: The New Industrial Policy was announced in which year?`,
          options: ['1990', '1991', '1992', '1993'],
          correct: 1,
          explanation: 'The New Industrial Policy was announced in 1991, marking economic liberalization.',
          difficulty: 'Medium' as const
        }))
      },
      {
        id: 'trade-commerce',
        name: 'Trade & Commerce',
        description: 'International trade, export-import, WTO',
        difficulty: 'Medium',
        estimatedTime: 45,
        questions: Array.from({ length: 20 }, (_, i) => ({
          id: `trade-commerce-${i + 1}`,
          question: `Trade & Commerce Question ${i + 1}: India became a member of WTO in which year?`,
          options: ['1994', '1995', '1996', '1997'],
          correct: 1,
          explanation: 'India became a founding member of WTO on January 1, 1995.',
          difficulty: 'Medium' as const
        }))
      },
      {
        id: 'economic-reforms',
        name: 'Economic Reforms',
        description: 'LPG reforms, privatization, globalization',
        difficulty: 'Hard',
        estimatedTime: 50,
        questions: Array.from({ length: 20 }, (_, i) => ({
          id: `economic-reforms-${i + 1}`,
          question: `Economic Reforms Question ${i + 1}: Who was the Finance Minister during the 1991 economic reforms?`,
          options: ['P. Chidambaram', 'Yashwant Sinha', 'Manmohan Singh', 'Arun Jaitley'],
          correct: 2,
          explanation: 'Dr. Manmohan Singh was the Finance Minister who introduced the 1991 economic reforms.',
          difficulty: 'Hard' as const
        }))
      },
      {
        id: 'poverty-unemployment',
        name: 'Poverty & Unemployment',
        description: 'Poverty alleviation, employment schemes, social security',
        difficulty: 'Easy',
        estimatedTime: 40,
        questions: Array.from({ length: 20 }, (_, i) => ({
          id: `poverty-unemployment-${i + 1}`,
          question: `Poverty & Unemployment Question ${i + 1}: MGNREGA guarantees how many days of employment?`,
          options: ['50 days', '100 days', '150 days', '200 days'],
          correct: 1,
          explanation: 'MGNREGA guarantees 100 days of employment per household per year.',
          difficulty: 'Easy' as const
        }))
      },
      {
        id: 'infrastructure',
        name: 'Infrastructure',
        description: 'Transport, energy, telecommunications, urban development',
        difficulty: 'Medium',
        estimatedTime: 45,
        questions: Array.from({ length: 20 }, (_, i) => ({
          id: `infrastructure-${i + 1}`,
          question: `Infrastructure Question ${i + 1}: The Golden Quadrilateral project connects which four cities?`,
          options: ['Delhi-Mumbai-Chennai-Kolkata', 'Delhi-Mumbai-Bangalore-Kolkata', 'Mumbai-Chennai-Hyderabad-Pune', 'Delhi-Ahmedabad-Chennai-Kolkata'],
          correct: 0,
          explanation: 'The Golden Quadrilateral connects Delhi, Mumbai, Chennai, and Kolkata.',
          difficulty: 'Medium' as const
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
    totalQuestions: 200,
    topics: [
      {
        id: 'physics',
        name: 'Physics',
        description: 'Mechanics, optics, electricity, modern physics',
        difficulty: 'Hard',
        estimatedTime: 50,
        questions: Array.from({ length: 20 }, (_, i) => ({
          id: `physics-${i + 1}`,
          question: `Physics Question ${i + 1}: What is the speed of light in vacuum?`,
          options: ['3 × 10⁸ m/s', '3 × 10⁷ m/s', '3 × 10⁹ m/s', '3 × 10⁶ m/s'],
          correct: 0,
          explanation: 'The speed of light in vacuum is approximately 3 × 10⁸ meters per second.',
          difficulty: 'Hard' as const
        }))
      },
      {
        id: 'chemistry',
        name: 'Chemistry',
        description: 'Organic, inorganic, physical chemistry',
        difficulty: 'Medium',
        estimatedTime: 45,
        questions: Array.from({ length: 20 }, (_, i) => ({
          id: `chemistry-${i + 1}`,
          question: `Chemistry Question ${i + 1}: What is the atomic number of hydrogen?`,
          options: ['0', '1', '2', '3'],
          correct: 1,
          explanation: 'Hydrogen has an atomic number of 1, meaning it has one proton.',
          difficulty: 'Medium' as const
        }))
      },
      {
        id: 'biology',
        name: 'Biology',
        description: 'Cell biology, genetics, ecology, human anatomy',
        difficulty: 'Medium',
        estimatedTime: 45,
        questions: Array.from({ length: 20 }, (_, i) => ({
          id: `biology-${i + 1}`,
          question: `Biology Question ${i + 1}: What is the powerhouse of the cell?`,
          options: ['Nucleus', 'Mitochondria', 'Ribosome', 'Golgi apparatus'],
          correct: 1,
          explanation: 'Mitochondria are called the powerhouse of the cell as they produce ATP energy.',
          difficulty: 'Medium' as const
        }))
      },
      {
        id: 'computer-science',
        name: 'Computer Science',
        description: 'Programming, algorithms, data structures, AI',
        difficulty: 'Hard',
        estimatedTime: 50,
        questions: Array.from({ length: 20 }, (_, i) => ({
          id: `computer-science-${i + 1}`,
          question: `Computer Science Question ${i + 1}: What does CPU stand for?`,
          options: ['Central Processing Unit', 'Computer Processing Unit', 'Central Program Unit', 'Computer Program Unit'],
          correct: 0,
          explanation: 'CPU stands for Central Processing Unit, the brain of the computer.',
          difficulty: 'Hard' as const
        }))
      },
      {
        id: 'space-technology',
        name: 'Space Technology',
        description: 'ISRO, satellites, space missions, astronomy',
        difficulty: 'Medium',
        estimatedTime: 45,
        questions: Array.from({ length: 20 }, (_, i) => ({
          id: `space-technology-${i + 1}`,
          question: `Space Technology Question ${i + 1}: When was ISRO established?`,
          options: ['1969', '1970', '1971', '1972'],
          correct: 0,
          explanation: 'ISRO (Indian Space Research Organisation) was established on August 15, 1969.',
          difficulty: 'Medium' as const
        }))
      },
      {
        id: 'biotechnology',
        name: 'Biotechnology',
        description: 'Genetic engineering, medical biotechnology, agriculture',
        difficulty: 'Hard',
        estimatedTime: 50,
        questions: Array.from({ length: 20 }, (_, i) => ({
          id: `biotechnology-${i + 1}`,
          question: `Biotechnology Question ${i + 1}: What is the full form of DNA?`,
          options: ['Deoxyribonucleic Acid', 'Deoxyribose Nucleic Acid', 'Dioxy Nucleic Acid', 'Deoxy Nuclear Acid'],
          correct: 0,
          explanation: 'DNA stands for Deoxyribonucleic Acid.',
          difficulty: 'Hard' as const
        }))
      },
      {
        id: 'environmental-science',
        name: 'Environmental Science',
        description: 'Ecology, pollution, climate change, conservation',
        difficulty: 'Easy',
        estimatedTime: 40,
        questions: Array.from({ length: 20 }, (_, i) => ({
          id: `environmental-science-${i + 1}`,
          question: `Environmental Science Question ${i + 1}: Which gas is primarily responsible for the greenhouse effect?`,
          options: ['Oxygen', 'Carbon Dioxide', 'Nitrogen', 'Hydrogen'],
          correct: 1,
          explanation: 'Carbon dioxide is the primary greenhouse gas responsible for global warming.',
          difficulty: 'Easy' as const
        }))
      },
      {
        id: 'medical-science',
        name: 'Medical Science',
        description: 'Human body, diseases, medicines, health',
        difficulty: 'Medium',
        estimatedTime: 45,
        questions: Array.from({ length: 20 }, (_, i) => ({
          id: `medical-science-${i + 1}`,
          question: `Medical Science Question ${i + 1}: Which organ produces insulin?`,
          options: ['Liver', 'Pancreas', 'Kidney', 'Heart'],
          correct: 1,
          explanation: 'The pancreas produces insulin, which regulates blood sugar levels.',
          difficulty: 'Medium' as const
        }))
      },
      {
        id: 'mathematics',
        name: 'Mathematics',
        description: 'Algebra, geometry, calculus, statistics',
        difficulty: 'Hard',
        estimatedTime: 50,
        questions: Array.from({ length: 20 }, (_, i) => ({
          id: `mathematics-${i + 1}`,
          question: `Mathematics Question ${i + 1}: What is the value of π (pi)?`,
          options: ['3.14', '3.141', '3.1416', 'All are approximate values'],
          correct: 3,
          explanation: 'π is an irrational number, and all given options are approximate values.',
          difficulty: 'Hard' as const
        }))
      },
      {
        id: 'innovation-research',
        name: 'Innovation & Research',
        description: 'Recent discoveries, patents, research institutions',
        difficulty: 'Medium',
        estimatedTime: 45,
        questions: Array.from({ length: 20 }, (_, i) => ({
          id: `innovation-research-${i + 1}`,
          question: `Innovation & Research Question ${i + 1}: Which is India's premier science academy?`,
          options: ['CSIR', 'DRDO', 'Indian Academy of Sciences', 'BARC'],
          correct: 2,
          explanation: 'The Indian Academy of Sciences is India\'s premier science academy.',
          difficulty: 'Medium' as const
        }))
      }
    ]
  }
];
