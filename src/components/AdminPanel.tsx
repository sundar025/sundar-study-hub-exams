import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Plus, Edit, Trash2, Save } from "lucide-react";

const AdminPanel = () => {
  const { toast } = useToast();
  const [subjects, setSubjects] = useState([]);
  const [tests, setTests] = useState([]);
  const [editingSubject, setEditingSubject] = useState(null);
  const [editingTest, setEditingTest] = useState(null);
  const [newSubject, setNewSubject] = useState({ name: "", description: "", icon: "", color: "" });
  const [newTest, setNewTest] = useState({ name: "", description: "", duration_minutes: 60, difficulty_level: "medium" });

  useEffect(() => {
    loadSubjects();
    loadTests();
  }, []);

  const loadSubjects = async () => {
    const { data, error } = await supabase.from('subjects').select('*');
    if (error) {
      toast({ title: "Error", description: "Failed to load subjects", variant: "destructive" });
    } else {
      setSubjects(data || []);
    }
  };

  const loadTests = async () => {
    const { data, error } = await supabase.from('tests').select('*');
    if (error) {
      toast({ title: "Error", description: "Failed to load tests", variant: "destructive" });
    } else {
      setTests(data || []);
    }
  };

  const saveSubject = async (subject) => {
    const { error } = subject.id 
      ? await supabase.from('subjects').update(subject).eq('id', subject.id)
      : await supabase.from('subjects').insert([subject]);
    
    if (error) {
      toast({ title: "Error", description: "Failed to save subject", variant: "destructive" });
    } else {
      toast({ title: "Success", description: "Subject saved successfully" });
      loadSubjects();
      setEditingSubject(null);
      setNewSubject({ name: "", description: "", icon: "", color: "" });
    }
  };

  const saveTest = async (test) => {
    const { error } = test.id 
      ? await supabase.from('tests').update(test).eq('id', test.id)
      : await supabase.from('tests').insert([{ ...test, total_questions: 0 }]);
    
    if (error) {
      toast({ title: "Error", description: "Failed to save test", variant: "destructive" });
    } else {
      toast({ title: "Success", description: "Test saved successfully" });
      loadTests();
      setEditingTest(null);
      setNewTest({ name: "", description: "", duration_minutes: 60, difficulty_level: "medium" });
    }
  };

  const deleteSubject = async (id) => {
    const { error } = await supabase.from('subjects').delete().eq('id', id);
    if (error) {
      toast({ title: "Error", description: "Failed to delete subject", variant: "destructive" });
    } else {
      toast({ title: "Success", description: "Subject deleted successfully" });
      loadSubjects();
    }
  };

  const deleteTest = async (id) => {
    const { error } = await supabase.from('tests').delete().eq('id', id);
    if (error) {
      toast({ title: "Error", description: "Failed to delete test", variant: "destructive" });
    } else {
      toast({ title: "Success", description: "Test deleted successfully" });
      loadTests();
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Admin Panel</h1>
      
      <Tabs defaultValue="subjects" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="subjects">Subjects Management</TabsTrigger>
          <TabsTrigger value="tests">Tests Management</TabsTrigger>
        </TabsList>
        
        <TabsContent value="subjects" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Add New Subject</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="subjectName">Subject Name</Label>
                  <Input
                    id="subjectName"
                    value={newSubject.name}
                    onChange={(e) => setNewSubject({...newSubject, name: e.target.value})}
                    placeholder="Enter subject name"
                  />
                </div>
                <div>
                  <Label htmlFor="subjectIcon">Icon</Label>
                  <Input
                    id="subjectIcon"
                    value={newSubject.icon}
                    onChange={(e) => setNewSubject({...newSubject, icon: e.target.value})}
                    placeholder="Icon name (e.g., book)"
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="subjectDescription">Description</Label>
                <Textarea
                  id="subjectDescription"
                  value={newSubject.description}
                  onChange={(e) => setNewSubject({...newSubject, description: e.target.value})}
                  placeholder="Enter subject description"
                />
              </div>
              <div>
                <Label htmlFor="subjectColor">Color</Label>
                <Input
                  id="subjectColor"
                  value={newSubject.color}
                  onChange={(e) => setNewSubject({...newSubject, color: e.target.value})}
                  placeholder="Color (e.g., blue-500)"
                />
              </div>
              <Button onClick={() => saveSubject(newSubject)} className="w-full">
                <Plus className="mr-2 h-4 w-4" />
                Add Subject
              </Button>
            </CardContent>
          </Card>

          <div className="grid gap-4">
            {subjects.map((subject) => (
              <Card key={subject.id}>
                <CardContent className="p-4">
                  {editingSubject?.id === subject.id ? (
                    <div className="space-y-4">
                      <Input
                        value={editingSubject.name}
                        onChange={(e) => setEditingSubject({...editingSubject, name: e.target.value})}
                      />
                      <Textarea
                        value={editingSubject.description}
                        onChange={(e) => setEditingSubject({...editingSubject, description: e.target.value})}
                      />
                      <div className="flex gap-2">
                        <Button onClick={() => saveSubject(editingSubject)} size="sm">
                          <Save className="mr-2 h-4 w-4" />
                          Save
                        </Button>
                        <Button onClick={() => setEditingSubject(null)} variant="outline" size="sm">
                          Cancel
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="font-semibold">{subject.name}</h3>
                        <p className="text-sm text-muted-foreground">{subject.description}</p>
                      </div>
                      <div className="flex gap-2">
                        <Button onClick={() => setEditingSubject(subject)} size="sm" variant="outline">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button onClick={() => deleteSubject(subject.id)} size="sm" variant="destructive">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="tests" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Add New Test</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="testName">Test Name</Label>
                  <Input
                    id="testName"
                    value={newTest.name}
                    onChange={(e) => setNewTest({...newTest, name: e.target.value})}
                    placeholder="Enter test name"
                  />
                </div>
                <div>
                  <Label htmlFor="testDuration">Duration (minutes)</Label>
                  <Input
                    id="testDuration"
                    type="number"
                    value={newTest.duration_minutes}
                    onChange={(e) => setNewTest({...newTest, duration_minutes: parseInt(e.target.value)})}
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="testDescription">Description</Label>
                <Textarea
                  id="testDescription"
                  value={newTest.description}
                  onChange={(e) => setNewTest({...newTest, description: e.target.value})}
                  placeholder="Enter test description"
                />
              </div>
              <div>
                <Label htmlFor="testDifficulty">Difficulty Level</Label>
                <Select value={newTest.difficulty_level} onValueChange={(value) => setNewTest({...newTest, difficulty_level: value})}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="easy">Easy</SelectItem>
                    <SelectItem value="medium">Medium</SelectItem>
                    <SelectItem value="hard">Hard</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button onClick={() => saveTest(newTest)} className="w-full">
                <Plus className="mr-2 h-4 w-4" />
                Add Test
              </Button>
            </CardContent>
          </Card>

          <div className="grid gap-4">
            {tests.map((test) => (
              <Card key={test.id}>
                <CardContent className="p-4">
                  {editingTest?.id === test.id ? (
                    <div className="space-y-4">
                      <Input
                        value={editingTest.name}
                        onChange={(e) => setEditingTest({...editingTest, name: e.target.value})}
                      />
                      <Textarea
                        value={editingTest.description}
                        onChange={(e) => setEditingTest({...editingTest, description: e.target.value})}
                      />
                      <div className="flex gap-2">
                        <Button onClick={() => saveTest(editingTest)} size="sm">
                          <Save className="mr-2 h-4 w-4" />
                          Save
                        </Button>
                        <Button onClick={() => setEditingTest(null)} variant="outline" size="sm">
                          Cancel
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="font-semibold">{test.name}</h3>
                        <p className="text-sm text-muted-foreground">{test.description}</p>
                        <p className="text-xs text-muted-foreground">Duration: {test.duration_minutes} min | Difficulty: {test.difficulty_level}</p>
                      </div>
                      <div className="flex gap-2">
                        <Button onClick={() => setEditingTest(test)} size="sm" variant="outline">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button onClick={() => deleteTest(test.id)} size="sm" variant="destructive">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AdminPanel;