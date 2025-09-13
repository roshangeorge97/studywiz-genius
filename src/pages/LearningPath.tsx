import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { ArrowLeft, Calendar, Target, Play, BookOpen, Video, FileText, Clock, CheckCircle2, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { ChatBot } from "@/components/ChatBot";

const LearningPath = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const mode = searchParams.get('mode') || 'preparation';
  const [currentTopic, setCurrentTopic] = useState(0);

  // Preparation Mode - Daily roadmap for next test
  const preparationPlan = [
    {
      week: 1,
      days: [
        { day: 1, date: "Mar 18", topic: "Human Physiology", subtopics: ["Digestive System", "Respiratory System"], status: "completed", duration: "2h" },
        { day: 2, date: "Mar 19", topic: "Organic Chemistry", subtopics: ["Aldehydes & Ketones", "Carboxylic Acids"], status: "completed", duration: "2.5h" },
        { day: 3, date: "Mar 20", topic: "Mechanics", subtopics: ["Motion in Plane", "Work Energy"], status: "in-progress", duration: "2h" },
        { day: 4, date: "Mar 21", topic: "Plant Physiology", subtopics: ["Photosynthesis", "Respiration"], status: "pending", duration: "2h" },
        { day: 5, date: "Mar 22", topic: "Coordination Chemistry", subtopics: ["Crystal Field Theory", "Bonding"], status: "pending", duration: "2.5h" },
        { day: 6, date: "Mar 23", topic: "Modern Physics", subtopics: ["Photoelectric Effect", "Bohr Model"], status: "pending", duration: "2h" },
        { day: 7, date: "Mar 24", topic: "Revision", subtopics: ["Mock Test", "Problem Solving"], status: "pending", duration: "3h" }
      ]
    },
    {
      week: 2,
      days: [
        { day: 8, date: "Mar 25", topic: "Genetics & Evolution", subtopics: ["Mendel's Laws", "DNA Replication"], status: "pending", duration: "2.5h" },
        { day: 9, date: "Mar 26", topic: "Thermodynamics", subtopics: ["Laws", "Heat Engines"], status: "pending", duration: "2h" }
      ]
    }
  ];

  // Grind Mode - Focus on weak topics
  const weakTopicsPath = [
    {
      topic: "Thermodynamics",
      subject: "Physics", 
      difficulty: "High",
      estimatedTime: "4-6 hours",
      priority: 1,
      resources: 3,
      lastScore: 58,
      targetScore: 85
    },
    {
      topic: "Coordination Chemistry",
      subject: "Chemistry",
      difficulty: "Medium", 
      estimatedTime: "3-4 hours",
      priority: 2,
      resources: 4,
      lastScore: 62,
      targetScore: 80
    },
    {
      topic: "Genetics",
      subject: "Biology",
      difficulty: "Medium",
      estimatedTime: "3-5 hours", 
      priority: 3,
      resources: 5,
      lastScore: 65,
      targetScore: 82
    },
    {
      topic: "Atomic Structure",
      subject: "Chemistry",
      difficulty: "Low",
      estimatedTime: "2-3 hours",
      priority: 4, 
      resources: 3,
      leftScore: 68,
      targetScore: 78
    }
  ];

  const studyResources = {
    lectures: [
      { title: "Thermodynamics Fundamentals", instructor: "Dr. Physics", duration: "45m", type: "video" },
      { title: "Laws of Thermodynamics", instructor: "Prof. Science", duration: "38m", type: "video" },
      { title: "Heat Engine Problems", instructor: "Dr. Physics", duration: "52m", type: "video" }
    ],
    materials: [
      { title: "Thermodynamics Formula Sheet", type: "pdf", pages: 4 },
      { title: "Previous Year Questions", type: "pdf", pages: 12 },
      { title: "Practice Problems Set", type: "pdf", pages: 8 }
    ]
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-gradient-card shadow-soft border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => navigate("/")}
                className="hover:bg-muted"
              >
                <ArrowLeft className="h-5 w-5" />
              </Button>
              <div>
                <h1 className="text-2xl font-bold text-foreground">Learning Path</h1>
                <p className="text-muted-foreground">
                  {mode === 'preparation' ? 'Next test preparation roadmap' : 'Focus study on weak topics'}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-right">
                <p className="text-2xl font-bold text-accent">
                  {mode === 'preparation' ? '7' : '4'}
                </p>
                <p className="text-sm text-muted-foreground">
                  {mode === 'preparation' ? 'Days Remaining' : 'Topics to Master'}
                </p>
              </div>
              <div className="text-right">
                <p className="text-lg font-bold text-secondary">Next Test: Mar 30</p>
                <p className="text-sm text-muted-foreground">NEET Mock #13</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-6 py-8">
        <Tabs value={mode} className="space-y-6">
          <TabsList className="grid w-full grid-cols-2 bg-muted">
            <TabsTrigger 
              value="preparation" 
              className="flex items-center gap-2"
              onClick={() => navigate('/learning-path?mode=preparation')}
            >
              <Calendar className="h-4 w-4" />
              Test Preparation
            </TabsTrigger>
            <TabsTrigger 
              value="grind" 
              className="flex items-center gap-2"
              onClick={() => navigate('/learning-path?mode=grind')}
            >
              <Target className="h-4 w-4" />
              Grind Mode
            </TabsTrigger>
          </TabsList>

          {/* Preparation Mode */}
          <TabsContent value="preparation" className="space-y-6">
            <Card className="bg-gradient-card shadow-soft border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-accent" />
                  Daily Study Schedule - Next Test Preparation
                </CardTitle>
                <div className="text-sm text-muted-foreground">
                  Current Date: March 20, 2024 • Test Date: March 30, 2024
                </div>
              </CardHeader>
            </Card>

            {preparationPlan.map((week, weekIndex) => (
              <Card key={weekIndex} className="bg-gradient-card shadow-soft border-border">
                <CardHeader>
                  <CardTitle className="text-lg">Week {week.week}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
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
                              {day.status === 'completed' ? <CheckCircle2 className="h-4 w-4" /> : day.day}
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
                        <div className="flex flex-wrap gap-2 mb-3">
                          {day.subtopics.map((subtopic, subIndex) => (
                            <Badge key={subIndex} variant="outline" className="text-xs">
                              {subtopic}
                            </Badge>
                          ))}
                        </div>
                        {day.status === 'in-progress' && (
                          <Button size="sm" className="bg-gradient-primary text-primary-foreground">
                            <Play className="h-4 w-4 mr-2" />
                            Continue Study
                          </Button>
                        )}
                        {day.status === 'pending' && day.day === 4 && (
                          <Button size="sm" variant="outline" className="border-accent text-accent">
                            <Play className="h-4 w-4 mr-2" />
                            Start Today's Study
                          </Button>
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          {/* Grind Mode */}
          <TabsContent value="grind" className="space-y-6">
            <Card className="bg-gradient-card shadow-soft border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-5 w-5 text-warning" />
                  Weak Topics - Focused Learning Path
                </CardTitle>
                <div className="text-sm text-muted-foreground">
                  Prioritized based on your recent test performance
                </div>
              </CardHeader>
            </Card>

            <div className="space-y-4">
              {weakTopicsPath.map((topic, index) => (
                <Card key={index} className="bg-gradient-card shadow-soft border-border hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                          index === 0 ? 'bg-destructive text-destructive-foreground' :
                          index === 1 ? 'bg-warning text-warning-foreground' :
                          'bg-accent text-accent-foreground'
                        }`}>
                          {topic.priority}
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground">{topic.topic}</h3>
                          <p className="text-sm text-muted-foreground">{topic.subject}</p>
                        </div>
                      </div>
                      <Badge 
                        variant={
                          topic.difficulty === 'High' ? 'destructive' :
                          topic.difficulty === 'Medium' ? 'default' : 'secondary'
                        }
                      >
                        {topic.difficulty} Priority
                      </Badge>
                    </div>

                    <div className="grid md:grid-cols-3 gap-4 mb-4">
                      <div className="text-center p-3 bg-muted/30 rounded-lg">
                        <p className="text-2xl font-bold text-warning">{topic.lastScore}%</p>
                        <p className="text-xs text-muted-foreground">Last Score</p>
                      </div>
                      <div className="text-center p-3 bg-muted/30 rounded-lg">
                        <p className="text-2xl font-bold text-success">{topic.targetScore}%</p>
                        <p className="text-xs text-muted-foreground">Target Score</p>
                      </div>
                      <div className="text-center p-3 bg-muted/30 rounded-lg">
                        <p className="text-lg font-bold text-foreground">{topic.estimatedTime}</p>
                        <p className="text-xs text-muted-foreground">Est. Time</p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <BookOpen className="h-4 w-4" />
                        <span>{topic.resources} study resources available</span>
                      </div>
                      <Button 
                        className="bg-gradient-primary text-primary-foreground"
                        onClick={() => setCurrentTopic(index)}
                      >
                        <Play className="h-4 w-4 mr-2" />
                        Start Learning
                      </Button>
                    </div>

                    {currentTopic === index && (
                      <div className="mt-4 p-4 bg-muted/20 rounded-lg border-l-4 border-primary">
                        <h4 className="font-semibold text-foreground mb-3">Study Resources</h4>
                        
                        <div className="space-y-3 mb-4">
                          <div>
                            <p className="text-sm font-medium text-foreground mb-2 flex items-center gap-2">
                              <Video className="h-4 w-4" />
                              Video Lectures
                            </p>
                            {studyResources.lectures.map((lecture, lectureIndex) => (
                              <div key={lectureIndex} className="flex items-center justify-between p-2 bg-background/50 rounded">
                                <div>
                                  <p className="text-sm font-medium">{lecture.title}</p>
                                  <p className="text-xs text-muted-foreground">{lecture.instructor} • {lecture.duration}</p>
                                </div>
                                <Button size="sm" variant="outline">
                                  <Play className="h-3 w-3 mr-1" />
                                  Watch
                                </Button>
                              </div>
                            ))}
                          </div>

                          <div>
                            <p className="text-sm font-medium text-foreground mb-2 flex items-center gap-2">
                              <FileText className="h-4 w-4" />
                              Study Materials
                            </p>
                            {studyResources.materials.map((material, materialIndex) => (
                              <div key={materialIndex} className="flex items-center justify-between p-2 bg-background/50 rounded">
                                <div>
                                  <p className="text-sm font-medium">{material.title}</p>
                                  <p className="text-xs text-muted-foreground">{material.pages} pages • PDF</p>
                                </div>
                                <Button size="sm" variant="outline">
                                  <FileText className="h-3 w-3 mr-1" />
                                  View
                                </Button>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="flex gap-2">
                          <Button 
                            className="flex-1 bg-gradient-secondary text-secondary-foreground"
                            onClick={() => navigate('/test')}
                          >
                            <Target className="h-4 w-4 mr-2" />
                            Take Topic Test
                          </Button>
                          <Button 
                            variant="outline" 
                            className="border-border"
                            onClick={() => setCurrentTopic(-1)}
                          >
                            Close
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

      <ChatBot />
    </div>
  );
};

export default LearningPath;