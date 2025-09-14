import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Users, BookOpen, BarChart3, Settings, FileText, Clock, Award, TrendingUp, AlertTriangle, MessageSquare, Lightbulb, Target, HelpCircle, CheckCircle, Upload, Plus, Eye, Calendar, Map, Smartphone, Database } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const TeacherDashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("overview");
  const [newQuestion, setNewQuestion] = useState({
    question: "",
    options: ["", "", "", ""],
    correctAnswer: "",
    subject: "",
    section: "",
    difficulty: "medium"
  });
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);

  // Mock data for batch performance
  const batchPerformance = [
    { topic: "Algebra", struggling: 8, total: 24, difficulty: "high", mastery: 45 },
    { topic: "Geometry", struggling: 3, total: 24, difficulty: "medium", mastery: 78 },
    { topic: "Trigonometry", struggling: 12, total: 24, difficulty: "high", mastery: 32 },
    { topic: "Statistics", struggling: 5, total: 24, difficulty: "low", mastery: 68 },
    { topic: "Calculus", struggling: 15, total: 24, difficulty: "high", mastery: 28 }
  ];

  // Mock data for doubt aggregator
  const doubts = [
    {
      topic: "Quadratic Equations",
      count: 8,
      commonQuestion: "How to find discriminant when coefficients are fractions?",
      suggestedAid: "Visual fraction calculator demo",
      priority: "high"
    },
    {
      topic: "Circle Theorems",
      count: 5,
      commonQuestion: "When to use inscribed angle vs central angle?",
      suggestedAid: "Interactive circle diagram",
      priority: "medium"
    },
    {
      topic: "Probability",
      count: 6,
      commonQuestion: "Difference between permutation and combination?",
      suggestedAid: "Real-world examples worksheet",
      priority: "high"
    }
  ];

  // Mock data for content suggestions
  const contentSuggestions = [
    {
      topic: "Algebra",
      suggestion: "Focus on word problems - 65% of students struggled with application",
      type: "practice",
      urgency: "high"
    },
    {
      topic: "Geometry",
      suggestion: "Add more visual proofs - students respond well to diagrams",
      type: "teaching_method",
      urgency: "medium"
    },
    {
      topic: "Trigonometry",
      suggestion: "Review basic ratios before advanced concepts",
      type: "prerequisite",
      urgency: "high"
    }
  ];

  // Mock data for test questions
  const testQuestions = [
    {
      id: 1,
      testName: "NEET Mock Test #13",
      date: "March 30, 2024",
      status: "upcoming",
      totalQuestions: 30,
      subjects: ["Biology", "Chemistry", "Physics"],
      questions: [
        { id: 1, question: "Which of the following is the correct structure of glucose?", subject: "Biology", section: "Biomolecules" },
        { id: 2, question: "What is the IUPAC name of CH₃-CH(CH₃)-CH₂-CH₃?", subject: "Chemistry", section: "Organic Chemistry" },
        { id: 3, question: "Two charges +q and -q are placed at distance 2a. The electric field at the midpoint is:", subject: "Physics", section: "Electrostatics" }
      ]
    },
    {
      id: 2,
      testName: "Biology Chapter Test",
      date: "March 25, 2024",
      status: "completed",
      totalQuestions: 15,
      subjects: ["Biology"],
      questions: [
        { id: 1, question: "In mitosis, which phase is characterized by the alignment of chromosomes?", subject: "Biology", section: "Cell Division" },
        { id: 2, question: "Which hormone regulates blood glucose levels?", subject: "Biology", section: "Human Physiology" }
      ]
    }
  ];

  // Mock data for teaching roadmap
  const teachingRoadmap = [
    {
      week: 1,
      days: [
        { day: 1, date: "Mar 18", topic: "Human Physiology", subtopics: ["Digestive System", "Respiratory System"], status: "completed", duration: "2h" },
        { day: 2, date: "Mar 19", topic: "Organic Chemistry", subtopics: ["Aldehydes & Ketones", "Carboxylic Acids"], status: "completed", duration: "2.5h" },
        { day: 3, date: "Mar 20", topic: "Mechanics", subtopics: ["Motion in Plane", "Work Energy"], status: "in-progress", duration: "2h" },
        { day: 4, date: "Mar 21", topic: "Plant Physiology", subtopics: ["Photosynthesis", "Respiration"], status: "pending", duration: "2h" },
        { day: 5, date: "Mar 22", topic: "Coordination Chemistry", subtopics: ["Crystal Field Theory", "Bonding"], status: "pending", duration: "2.5h" }
      ]
    }
  ];

  // Mock data for topic heatmap
  const topicHeatmap = [
    { topic: "Human Physiology", subject: "Biology", difficulty: "easy", mastery: 85, students: 24 },
    { topic: "Organic Chemistry", subject: "Chemistry", difficulty: "medium", mastery: 72, students: 24 },
    { topic: "Thermodynamics", subject: "Physics", difficulty: "hard", mastery: 45, students: 24 },
    { topic: "Genetics", subject: "Biology", difficulty: "medium", mastery: 68, students: 24 },
    { topic: "Coordination Chemistry", subject: "Chemistry", difficulty: "hard", mastery: 52, students: 24 },
    { topic: "Modern Physics", subject: "Physics", difficulty: "hard", mastery: 38, students: 24 }
  ];

  const handleAddQuestion = () => {
    // In a real app, this would save to backend
    console.log("Adding question:", newQuestion);
    setNewQuestion({
      question: "",
      options: ["", "", "", ""],
      correctAnswer: "",
      subject: "",
      section: "",
      difficulty: "medium"
    });
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setUploadedFile(file);
    }
  };

  const handleUploadToDatabase = () => {
    if (uploadedFile) {
      // In a real app, this would upload to backend
      console.log("Uploading file to database:", uploadedFile);
      setUploadedFile(null);
      // Reset file input
      const fileInput = document.getElementById('file-upload') as HTMLInputElement;
      if (fileInput) fileInput.value = '';
    }
  };

  const handleWhatsAppUpload = () => {
    const phoneNumber = "+919825339652";
    const message = "Please process these questions/question paper/files and add them to the database.";
    const whatsappUrl = `https://wa.me/${phoneNumber.replace('+', '')}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-gradient-card shadow-soft border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-2">
                Teacher Dashboard 👨‍🏫
              </h1>
              <p className="text-muted-foreground">
                Manage your classes and track student progress
              </p>
            </div>
            <div className="flex items-center gap-6">
              <Link to="/login">
                <Button variant="outline" size="sm" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
                  Switch Account
                </Button>
              </Link>
              <div className="flex items-center gap-4">
                <div className="text-right">
                  <p className="text-sm text-muted-foreground">Active Students</p>
                  <p className="text-2xl font-bold text-accent">24</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-muted-foreground">Courses</p>
                  <p className="text-2xl font-bold text-secondary">8</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-5 bg-muted">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="questions">Questions</TabsTrigger>
            <TabsTrigger value="tests">Tests</TabsTrigger>
            <TabsTrigger value="roadmap">Roadmap</TabsTrigger>
            <TabsTrigger value="heatmap">Heatmap</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            {/* Batch Performance Overview */}
            <Card className="bg-gradient-card shadow-soft border-border">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="h-5 w-5 text-accent" />
              Batch Performance Overview - Topic Mastery Heatmap
            </CardTitle>
            <CardDescription>Students struggling by topic with difficulty-based color coding</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              {batchPerformance.map((topic, index) => (
                <div key={index} className="flex items-center justify-between p-4 rounded-lg border bg-muted/20">
                  <div className="flex items-center gap-4 flex-1">
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="font-medium text-foreground">{topic.topic}</span>
                        <Badge variant={topic.difficulty === 'high' ? 'destructive' : topic.difficulty === 'medium' ? 'secondary' : 'default'}>
                          {topic.difficulty}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="text-sm text-muted-foreground">
                          {topic.struggling}/{topic.total} struggling
                        </span>
                        <div className="flex-1 max-w-xs">
                          <Progress value={topic.mastery} className="h-2" />
                          <span className="text-xs text-muted-foreground">{topic.mastery}% mastery</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline">Customize Test</Button>
                      <Button size="sm" className="bg-gradient-secondary text-secondary-foreground">
                        Focus Session
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Doubt Aggregator & Content Suggestions */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Doubt Aggregator */}
          <Card className="bg-gradient-card shadow-soft border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageSquare className="h-5 w-5 text-accent" />
                Doubt Aggregator
                <Badge variant="outline" className="ml-auto">
                  {doubts.reduce((sum, doubt) => sum + doubt.count, 0)} total
                </Badge>
              </CardTitle>
              <CardDescription>Grouped student doubts from this week</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {doubts.map((doubt, index) => (
                  <div key={index} className="p-3 rounded-lg border bg-muted/20">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span className="font-medium text-foreground">{doubt.topic}</span>
                        <Badge variant={doubt.priority === 'high' ? 'destructive' : 'secondary'}>
                          {doubt.count} students
                        </Badge>
                      </div>
                      <div className="flex gap-1">
                        <HelpCircle className={`h-4 w-4 ${doubt.priority === 'high' ? 'text-destructive' : 'text-accent'}`} />
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">"{doubt.commonQuestion}"</p>
                    <div className="flex items-center gap-2">
                      <Lightbulb className="h-4 w-4 text-accent" />
                      <span className="text-sm text-accent">{doubt.suggestedAid}</span>
                    </div>
                  </div>
                ))}
              </div>
              <Button 
                className="w-full mt-4 bg-gradient-secondary text-secondary-foreground hover:opacity-90"
                onClick={() => navigate('/teacher/doubts')}
              >
                View Detailed Doubt Queue
              </Button>
            </CardContent>
          </Card>

          {/* Class Content Suggestions */}
          <Card className="bg-gradient-card shadow-soft border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5 text-accent" />
                Content Suggestions
              </CardTitle>
              <CardDescription>AI-powered teaching recommendations</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {contentSuggestions.map((suggestion, index) => (
                  <div key={index} className="p-3 rounded-lg border bg-muted/20">
                    <div className="flex items-start justify-between mb-2">
                      <span className="font-medium text-foreground">{suggestion.topic}</span>
                      <div className="flex items-center gap-1">
                        <AlertTriangle className={`h-4 w-4 ${suggestion.urgency === 'high' ? 'text-destructive' : 'text-accent'}`} />
                        <Badge variant={suggestion.urgency === 'high' ? 'destructive' : 'secondary'}>
                          {suggestion.urgency}
                        </Badge>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">{suggestion.suggestion}</p>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className="text-xs">
                        {suggestion.type.replace('_', ' ')}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
              <Button className="w-full mt-4 bg-gradient-secondary text-secondary-foreground hover:opacity-90">
                Implement Suggestions
              </Button>
            </CardContent>
          </Card>
        </div>

            {/* Quick Actions */}
            <div className="mt-8 text-center">
              <h2 className="text-xl font-semibold text-foreground mb-4">Quick Actions</h2>
              <div className="flex flex-wrap justify-center gap-4">
                <Button variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
                  Create New Test
                </Button>
                <Button variant="outline" className="border-secondary text-secondary-foreground hover:bg-secondary">
                  Grade Assignments
                </Button>
                <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  View Class Analytics
                </Button>
              </div>
            </div>
          </TabsContent>

          {/* Questions Tab */}
          <TabsContent value="questions" className="space-y-6">
            {/* Primary Option: WhatsApp Upload */}
            <Card className="bg-gradient-card shadow-soft border-border border-2 border-accent/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Smartphone className="h-5 w-5 text-accent" />
                  Send via WhatsApp (Recommended)
                </CardTitle>
                <CardDescription>Send questions, question papers, or file images to our WhatsApp number for automatic processing</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-accent/10 border border-accent/20 rounded-lg p-4">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center">
                      <Smartphone className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">WhatsApp Number</p>
                      <p className="text-sm text-muted-foreground">+919825339652</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    Send your questions, question papers, or file images directly to this WhatsApp number. 
                    Our system will automatically process and add them to the database.
                  </p>
                  <Button 
                    onClick={handleWhatsAppUpload}
                    className="w-full bg-gradient-accent text-accent-foreground hover:opacity-90"
                  >
                    <Smartphone className="h-4 w-4 mr-2" />
                    Open WhatsApp
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Secondary Option: File Upload */}
            <Card className="bg-gradient-card shadow-soft border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Upload className="h-5 w-5 text-accent" />
                  Upload Files
                </CardTitle>
                <CardDescription>Upload PDF or other file formats directly to the database</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="border-2 border-dashed border-accent/30 rounded-lg p-6 text-center">
                  <Upload className="h-8 w-8 text-accent mx-auto mb-2" />
                  <p className="text-sm text-muted-foreground mb-4">
                    Upload PDF, DOC, or image files containing questions
                  </p>
                  <input
                    id="file-upload"
                    type="file"
                    accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                    onChange={handleFileUpload}
                    className="hidden"
                  />
                  <label htmlFor="file-upload" className="cursor-pointer">
                    <Button variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
                      <Upload className="h-4 w-4 mr-2" />
                      Choose File
                    </Button>
                  </label>
                  {uploadedFile && (
                    <div className="mt-4 p-3 bg-muted/30 rounded-lg">
                      <p className="text-sm font-medium text-foreground">Selected: {uploadedFile.name}</p>
                      <p className="text-xs text-muted-foreground">{(uploadedFile.size / 1024 / 1024).toFixed(2)} MB</p>
                    </div>
                  )}
                </div>
                {uploadedFile && (
                  <Button 
                    onClick={handleUploadToDatabase}
                    className="w-full bg-gradient-primary text-primary-foreground"
                  >
                    <Database className="h-4 w-4 mr-2" />
                    Upload to Database
                  </Button>
                )}
              </CardContent>
            </Card>

            {/* Tertiary Option: Manual Addition */}
            <Card className="bg-gradient-card shadow-soft border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Plus className="h-5 w-5 text-accent" />
                  Manual Question Entry
                </CardTitle>
                <CardDescription>Manually add individual questions to the database</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Subject</label>
                    <Select value={newQuestion.subject} onValueChange={(value) => setNewQuestion(prev => ({ ...prev, subject: value }))}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select subject" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="biology">Biology</SelectItem>
                        <SelectItem value="chemistry">Chemistry</SelectItem>
                        <SelectItem value="physics">Physics</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Section</label>
                    <Input
                      placeholder="e.g., Organic Chemistry"
                      value={newQuestion.section}
                      onChange={(e) => setNewQuestion(prev => ({ ...prev, section: e.target.value }))}
                    />
                  </div>
                </div>
                
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Question</label>
                  <Textarea
                    placeholder="Enter your question here..."
                    value={newQuestion.question}
                    onChange={(e) => setNewQuestion(prev => ({ ...prev, question: e.target.value }))}
                    rows={3}
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Options</label>
                  {newQuestion.options.map((option, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <span className="w-6 text-sm font-medium text-muted-foreground">{String.fromCharCode(65 + index)}.</span>
                      <Input
                        placeholder={`Option ${String.fromCharCode(65 + index)}`}
                        value={option}
                        onChange={(e) => {
                          const newOptions = [...newQuestion.options];
                          newOptions[index] = e.target.value;
                          setNewQuestion(prev => ({ ...prev, options: newOptions }));
                        }}
                      />
                    </div>
                  ))}
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Correct Answer</label>
                    <Select value={newQuestion.correctAnswer} onValueChange={(value) => setNewQuestion(prev => ({ ...prev, correctAnswer: value }))}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select correct option" />
                      </SelectTrigger>
                      <SelectContent>
                        {newQuestion.options.map((_, index) => (
                          <SelectItem key={index} value={String.fromCharCode(65 + index)}>
                            Option {String.fromCharCode(65 + index)}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Difficulty</label>
                    <Select value={newQuestion.difficulty} onValueChange={(value) => setNewQuestion(prev => ({ ...prev, difficulty: value }))}>
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
                </div>

                <Button onClick={handleAddQuestion} className="w-full bg-gradient-primary text-primary-foreground">
                  <Plus className="h-4 w-4 mr-2" />
                  Add to Database
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Tests Tab */}
          <TabsContent value="tests" className="space-y-6">
            <Card className="bg-gradient-card shadow-soft border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-accent" />
                  Test Questions Management
                </CardTitle>
                <CardDescription>View and manage questions for upcoming and completed tests</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {testQuestions.map((test) => (
                    <div key={test.id} className="p-4 border rounded-lg bg-muted/20">
                      <div className="flex items-center justify-between mb-3">
                        <div>
                          <h3 className="font-semibold text-foreground">{test.testName}</h3>
                          <p className="text-sm text-muted-foreground">{test.date} • {test.totalQuestions} questions</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge variant={test.status === 'upcoming' ? 'default' : 'secondary'}>
                            {test.status}
                          </Badge>
                          <Button size="sm" variant="outline">
                            <Eye className="h-4 w-4 mr-1" />
                            View Questions
                          </Button>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2 mb-3">
                        {test.subjects.map((subject, index) => (
                          <Badge key={index} variant="outline">{subject}</Badge>
                        ))}
                      </div>
                      <div className="space-y-2">
                        <p className="text-sm font-medium text-foreground">Sample Questions:</p>
                        {test.questions.slice(0, 2).map((question) => (
                          <div key={question.id} className="text-sm text-muted-foreground p-2 bg-background/50 rounded">
                            <span className="font-medium">{question.subject} - {question.section}:</span> {question.question}
                          </div>
                        ))}
                        {test.questions.length > 2 && (
                          <p className="text-xs text-muted-foreground">... and {test.questions.length - 2} more questions</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Roadmap Tab */}
          <TabsContent value="roadmap" className="space-y-6">
            <Card className="bg-gradient-card shadow-soft border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-accent" />
                  Teaching Roadmap
                </CardTitle>
                <CardDescription>Day-to-week schedule until the next test date</CardDescription>
              </CardHeader>
              <CardContent>
                {teachingRoadmap.map((week, weekIndex) => (
                  <div key={weekIndex} className="space-y-4">
                    <h3 className="text-lg font-semibold text-foreground">Week {week.week}</h3>
                    <div className="space-y-3">
                      {week.days.map((day, dayIndex) => (
                        <div 
                          key={dayIndex} 
                          className={`p-4 rounded-lg border-l-4 ${
                            day.status === 'completed' ? 'border-success bg-success/10' :
                            day.status === 'in-progress' ? 'border-accent bg-accent/10' :
                            'border-muted bg-muted/30'
                          }`}
                        >
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-3">
                              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                                day.status === 'completed' ? 'bg-success text-success-foreground' :
                                day.status === 'in-progress' ? 'bg-accent text-accent-foreground' :
                                'bg-muted text-muted-foreground'
                              }`}>
                                {day.status === 'completed' ? <CheckCircle className="h-4 w-4" /> : day.day}
                              </div>
                              <div>
                                <p className="font-semibold text-foreground">{day.topic}</p>
                                <p className="text-sm text-muted-foreground">{day.date} • {day.duration}</p>
                              </div>
                            </div>
                            <Badge 
                              variant={
                                day.status === 'completed' ? 'default' :
                                day.status === 'in-progress' ? 'secondary' : 'outline'
                              }
                            >
                              {day.status === 'completed' ? 'Completed' :
                               day.status === 'in-progress' ? 'In Progress' : 'Pending'}
                            </Badge>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {day.subtopics.map((subtopic, subIndex) => (
                              <Badge key={subIndex} variant="outline" className="text-xs">
                                {subtopic}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Heatmap Tab */}
          <TabsContent value="heatmap" className="space-y-6">
            <Card className="bg-gradient-card shadow-soft border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Map className="h-5 w-5 text-accent" />
                  Topic Difficulty Heatmap
                </CardTitle>
                <CardDescription>Visual representation of topic difficulty and student mastery levels</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {topicHeatmap.map((topic, index) => (
                    <div 
                      key={index} 
                      className={`p-4 rounded-lg border ${
                        topic.difficulty === 'easy' ? 'border-success bg-success/10' :
                        topic.difficulty === 'medium' ? 'border-warning bg-warning/10' :
                        'border-destructive bg-destructive/10'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold text-foreground">{topic.topic}</h4>
                        <Badge 
                          variant={
                            topic.difficulty === 'easy' ? 'default' :
                            topic.difficulty === 'medium' ? 'secondary' : 'destructive'
                          }
                        >
                          {topic.difficulty}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">{topic.subject}</p>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Mastery Level</span>
                          <span className="font-medium">{topic.mastery}%</span>
                        </div>
                        <Progress value={topic.mastery} className="h-2" />
                        <div className="flex justify-between text-xs text-muted-foreground">
                          <span>{topic.students} students</span>
                          <span>
                            {topic.mastery >= 80 ? 'Excellent' :
                             topic.mastery >= 60 ? 'Good' :
                             topic.mastery >= 40 ? 'Needs Work' : 'Critical'}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default TeacherDashboard;