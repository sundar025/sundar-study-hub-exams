
import { useState } from "react";
import { subjects } from "@/data/studyMaterialData";
import TopicView from "./study/TopicView";
import SubjectTopicsView from "./study/SubjectTopicsView";
import SubjectsListView from "./study/SubjectsListView";

const StudyMaterialSection = ({ examName, onBack }: { examName: string; onBack: () => void }) => {
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null);
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);

  if (selectedTopic && selectedSubject) {
    const topic = subjects[selectedSubject].topics[selectedTopic];
    return (
      <TopicView 
        topic={topic}
        onBack={() => setSelectedTopic(null)}
        subjectName={selectedSubject}
      />
    );
  }

  if (selectedSubject) {
    const subject = subjects[selectedSubject];
    return (
      <SubjectTopicsView 
        subject={subject}
        onBack={() => setSelectedSubject(null)}
        onTopicSelect={setSelectedTopic}
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
