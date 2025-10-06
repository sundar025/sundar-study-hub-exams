
import { useState } from "react";
import { subjects } from "@/data/studyMaterialData";
import TopicView from "./study/TopicView";
import SubjectTopicsView from "./study/SubjectTopicsView";
import SubjectsListView from "./study/SubjectsListView";

const StudyMaterialSection = ({ 
  examName, 
  onBack, 
  onStartQuiz 
}: { 
  examName: string; 
  onBack: () => void;
  onStartQuiz?: (subjectName: string, topicId: string) => void;
}) => {
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null);
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);

  const handleTopicSelect = (topicKey: string) => {
    setSelectedTopic(topicKey);
  };

  const handleSubjectBack = () => {
    setSelectedSubject(null);
    setSelectedTopic(null);
  };

  const handleTopicBack = () => {
    setSelectedTopic(null);
  };

  if (selectedTopic && selectedSubject) {
    const topic = subjects[selectedSubject].topics[selectedTopic];
    return (
      <TopicView 
        topic={topic}
        onBack={handleTopicBack}
        subjectName={selectedSubject}
        onStartQuiz={onStartQuiz}
      />
    );
  }

  if (selectedSubject) {
    const subject = subjects[selectedSubject];
    return (
      <SubjectTopicsView 
        subject={subject}
        onBack={handleSubjectBack}
        onTopicSelect={handleTopicSelect}
      />
    );
  }

  return (
    <SubjectsListView 
      examName={examName}
      onBack={onBack}
      onSubjectSelect={setSelectedSubject}
    />
  );
};

export default StudyMaterialSection;
