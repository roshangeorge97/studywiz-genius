import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, MessageSquare, Mic, Send, FileText, Lightbulb, Users, Clock, CheckCircle, AlertTriangle, Volume2, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChatBot } from "@/components/ChatBot";

const DoubtQueue = () => {
  const navigate = useNavigate();
  const [selectedDoubt, setSelectedDoubt] = useState<number | null>(null);
  const [responseText, setResponseText] = useState("");
  const [responseType, setResponseType] = useState<"text" | "voice" | "hint">("text");

  // Mock data for aggregated doubts
  const doubts = [
    {
      id: 1,
      topic: "Quadratic Equations",
      subject: "Mathematics",
      question: "How to find discriminant when coefficients are fractions?",
      studentCount: 8,
      priority: "high",
      timestamp: "2 hours ago",
      students: [
        { name: "Alice Johnson", avatar: "AJ" },
        { name: "Bob Smith", avatar: "BS" },
        { name: "Carol Davis", avatar: "CD" },
        { name: "David Wilson", avatar: "DW" }
      ],
      suggestedAid: "Visual fraction calculator demo",
      aiAnalysis: "Students struggling with fraction manipulation in quadratic formula",
      responses: []
    },
    {
      id: 2,
      topic: "Circle Theorems",
      subject: "Mathematics",
      question: "When to use inscribed angle vs central angle?",
      studentCount: 5,
      priority: "medium",
      timestamp: "4 hours ago",
      students: [
        { name: "Emma Brown", avatar: "EB" },
        { name: "Frank Miller", avatar: "FM" }
      ],
      suggestedAid: "Interactive circle diagram",
      aiAnalysis: "Conceptual confusion between angle types",
      responses: []
    },
    {
      id: 3,
      topic: "Probability",
      subject: "Mathematics",
      question: "Difference between permutation and combination?",
      studentCount: 6,
      priority: "high",
      timestamp: "6 hours ago",
      students: [
        { name: "Grace Lee", avatar: "GL" },
        { name: "Henry Taylor", avatar: "HT" },
        { name: "Ivy Chen", avatar: "IC" }
      ],
      suggestedAid: "Real-world examples worksheet",
      aiAnalysis: "Fundamental concept confusion affecting problem solving",
      responses: []
    },
    {
      id: 4,
      topic: "Organic Chemistry",
      subject: "Chemistry",
      question: "How to identify functional groups in complex molecules?",
      studentCount: 4,
      priority: "medium",
      timestamp: "1 day ago",
      students: [
        { name: "Jack Anderson", avatar: "JA" },
        { name: "Kate White", avatar: "KW" }
      ],
      suggestedAid: "Functional group identification chart",
      aiAnalysis: "Pattern recognition difficulty in organic structures",
      responses: []
    },
    {
      id: 5,
      topic: "Electromagnetic Waves",
      subject: "Physics",
      question: "Why do radio waves have longer wavelength than X-rays?",
      studentCount: 3,
      priority: "low",
      timestamp: "2 days ago",
      students: [
        { name: "Liam Garcia", avatar: "LG" }
      ],
      suggestedAid: "Electromagnetic spectrum diagram",
      aiAnalysis: "Basic understanding of wave properties",
      responses: []
    }
  ];

  const handleResponse = (doubtId: number) => {
    // In a real app, this would save the response to backend
    console.log(`Responding to doubt ${doubtId} with ${responseType}:`, responseText);
    setResponseText("");
    setSelectedDoubt(null);
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high": return "destructive";
      case "medium": return "default";
      case "low": return "secondary";
      default: return "outline";
    }
  };

  const getPriorityIcon = (priority: string) => {
    switch (priority) {
      case "high": return <AlertTriangle className="h-4 w-4" />;
      case "medium": return <Clock className="h-4 w-4" />;
      case "low": return <CheckCircle className="h-4 w-4" />;
      default: return null;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-gradient-card shadow-soft border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => navigate("/teacher")}
                className="hover:bg-muted"
              >
                <ArrowLeft className="h-5 w-5" />
              </Button>
              <div>
                <h1 className="text-2xl font-bold text-foreground">Doubt Queue</h1>
                <p className="text-muted-foreground">AI-aggregated student doubts and responses</p>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="text-center">
                <p className="text-3xl font-bold text-accent">{doubts.length}</p>
                <p className="text-sm text-muted-foreground">Total Doubts</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-warning">{doubts.filter(d => d.priority === 'high').length}</p>
                <p className="text-sm text-muted-foreground">High Priority</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <Tabs defaultValue="all" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 bg-muted">
            <TabsTrigger value="all">All Doubts</TabsTrigger>
            <TabsTrigger value="high">High Priority</TabsTrigger>
            <TabsTrigger value="responded">Responded</TabsTrigger>
            <TabsTrigger value="pending">Pending</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              {/* Doubts List */}
              <div className="space-y-4">
                <h2 className="text-lg font-semibold text-foreground">Aggregated Doubts</h2>
                {doubts.map((doubt) => (
                  <Card 
                    key={doubt.id} 
                    className={`bg-gradient-card shadow-soft border-border cursor-pointer transition-all hover:shadow-md ${
                      selectedDoubt === doubt.id ? 'ring-2 ring-accent' : ''
                    }`}
                    onClick={() => setSelectedDoubt(selectedDoubt === doubt.id ? null : doubt.id)}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <Badge variant={getPriorityColor(doubt.priority)} className="flex items-center gap-1">
                            {getPriorityIcon(doubt.priority)}
                            {doubt.priority} priority
                          </Badge>
                          <Badge variant="outline">{doubt.studentCount} students</Badge>
                        </div>
                        <span className="text-xs text-muted-foreground">{doubt.timestamp}</span>
                      </div>
                      
                      <div className="mb-3">
                        <h3 className="font-semibold text-foreground mb-1">{doubt.topic}</h3>
                        <p className="text-sm text-muted-foreground mb-2">{doubt.subject}</p>
                        <p className="text-sm text-foreground italic">"{doubt.question}"</p>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex -space-x-2">
                          {doubt.students.slice(0, 4).map((student, index) => (
                            <div 
                              key={index}
                              className="w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-xs font-medium border-2 border-background"
                            >
                              {student.avatar}
                            </div>
                          ))}
                          {doubt.students.length > 4 && (
                            <div className="w-8 h-8 rounded-full bg-muted text-muted-foreground flex items-center justify-center text-xs font-medium border-2 border-background">
                              +{doubt.students.length - 4}
                            </div>
                          )}
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Lightbulb className="h-4 w-4" />
                          <span>AI Suggestion</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Response Panel */}
              <div className="space-y-4">
                <h2 className="text-lg font-semibold text-foreground">Response Panel</h2>
                {selectedDoubt ? (
                  <Card className="bg-gradient-card shadow-soft border-border">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <MessageSquare className="h-5 w-5 text-accent" />
                        Respond to Doubt
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {(() => {
                        const doubt = doubts.find(d => d.id === selectedDoubt);
                        if (!doubt) return null;
                        
                        return (
                          <>
                            <div className="p-3 bg-muted/30 rounded-lg">
                              <h4 className="font-semibold text-foreground mb-2">{doubt.topic}</h4>
                              <p className="text-sm text-muted-foreground mb-2">{doubt.subject}</p>
                              <p className="text-sm text-foreground italic mb-3">"{doubt.question}"</p>
                              <div className="space-y-2">
                                <div className="flex items-center gap-2 text-sm">
                                  <Users className="h-4 w-4 text-accent" />
                                  <span>{doubt.studentCount} students have this doubt</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm">
                                  <Lightbulb className="h-4 w-4 text-accent" />
                                  <span>AI Suggestion: {doubt.suggestedAid}</span>
                                </div>
                                <div className="text-sm text-muted-foreground">
                                  <strong>AI Analysis:</strong> {doubt.aiAnalysis}
                                </div>
                              </div>
                            </div>

                            <Tabs value={responseType} onValueChange={(value) => setResponseType(value as "text" | "voice" | "hint")}>
                              <TabsList className="grid w-full grid-cols-3">
                                <TabsTrigger value="text">Text Response</TabsTrigger>
                                <TabsTrigger value="voice">Voice Response</TabsTrigger>
                                <TabsTrigger value="hint">Give Hints</TabsTrigger>
                              </TabsList>

                              <TabsContent value="text" className="space-y-4">
                                <div>
                                  <label className="text-sm font-medium text-foreground mb-2 block">Your Response</label>
                                  <Textarea
                                    placeholder="Type your detailed explanation here..."
                                    value={responseText}
                                    onChange={(e) => setResponseText(e.target.value)}
                                    rows={4}
                                  />
                                </div>
                                <Button 
                                  onClick={() => handleResponse(selectedDoubt)}
                                  className="w-full bg-gradient-primary text-primary-foreground"
                                  disabled={!responseText.trim()}
                                >
                                  <Send className="h-4 w-4 mr-2" />
                                  Send Response
                                </Button>
                              </TabsContent>

                              <TabsContent value="voice" className="space-y-4">
                                <div className="p-4 border-2 border-dashed border-accent/30 rounded-lg text-center">
                                  <Mic className="h-8 w-8 text-accent mx-auto mb-2" />
                                  <p className="text-sm text-muted-foreground mb-2">Record your voice response</p>
                                  <Button variant="outline" className="border-accent text-accent">
                                    <Mic className="h-4 w-4 mr-2" />
                                    Start Recording
                                  </Button>
                                </div>
                                <Button 
                                  onClick={() => handleResponse(selectedDoubt)}
                                  className="w-full bg-gradient-primary text-primary-foreground"
                                >
                                  <Volume2 className="h-4 w-4 mr-2" />
                                  Send Voice Response
                                </Button>
                              </TabsContent>

                              <TabsContent value="hint" className="space-y-4">
                                <div className="space-y-3">
                                  <div>
                                    <label className="text-sm font-medium text-foreground mb-2 block">Hint 1</label>
                                    <Textarea
                                      placeholder="First hint to guide students..."
                                      rows={2}
                                    />
                                  </div>
                                  <div>
                                    <label className="text-sm font-medium text-foreground mb-2 block">Hint 2</label>
                                    <Textarea
                                      placeholder="Second hint for deeper understanding..."
                                      rows={2}
                                    />
                                  </div>
                                  <div>
                                    <label className="text-sm font-medium text-foreground mb-2 block">Hint 3</label>
                                    <Textarea
                                      placeholder="Final hint leading to the solution..."
                                      rows={2}
                                    />
                                  </div>
                                </div>
                                <Button 
                                  onClick={() => handleResponse(selectedDoubt)}
                                  className="w-full bg-gradient-secondary text-secondary-foreground"
                                >
                                  <Lightbulb className="h-4 w-4 mr-2" />
                                  Send Hints
                                </Button>
                              </TabsContent>
                            </Tabs>
                          </>
                        );
                      })()}
                    </CardContent>
                  </Card>
                ) : (
                  <Card className="bg-gradient-card shadow-soft border-border">
                    <CardContent className="p-8 text-center">
                      <MessageSquare className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                      <h3 className="text-lg font-semibold text-foreground mb-2">Select a Doubt</h3>
                      <p className="text-muted-foreground">Choose a doubt from the list to respond to students</p>
                    </CardContent>
                  </Card>
                )}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="high" className="space-y-6">
            <div className="space-y-4">
              {doubts.filter(d => d.priority === 'high').map((doubt) => (
                <Card key={doubt.id} className="bg-gradient-card shadow-soft border-border">
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <Badge variant="destructive" className="flex items-center gap-1">
                          <AlertTriangle className="h-4 w-4" />
                          High Priority
                        </Badge>
                        <Badge variant="outline">{doubt.studentCount} students</Badge>
                      </div>
                      <span className="text-xs text-muted-foreground">{doubt.timestamp}</span>
                    </div>
                    
                    <div className="mb-3">
                      <h3 className="font-semibold text-foreground mb-1">{doubt.topic}</h3>
                      <p className="text-sm text-muted-foreground mb-2">{doubt.subject}</p>
                      <p className="text-sm text-foreground italic">"{doubt.question}"</p>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex -space-x-2">
                        {doubt.students.slice(0, 4).map((student, index) => (
                          <div 
                            key={index}
                            className="w-8 h-8 rounded-full bg-destructive text-destructive-foreground flex items-center justify-center text-xs font-medium border-2 border-background"
                          >
                            {student.avatar}
                          </div>
                        ))}
                      </div>
                      <Button 
                        size="sm" 
                        variant="outline"
                        onClick={() => setSelectedDoubt(doubt.id)}
                      >
                        Respond Now
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="responded" className="space-y-6">
            <div className="text-center py-8">
              <CheckCircle className="h-12 w-12 text-success mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">No Responded Doubts</h3>
              <p className="text-muted-foreground">All doubts are currently pending response</p>
            </div>
          </TabsContent>

          <TabsContent value="pending" className="space-y-6">
            <div className="space-y-4">
              {doubts.map((doubt) => (
                <Card key={doubt.id} className="bg-gradient-card shadow-soft border-border">
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <Badge variant={getPriorityColor(doubt.priority)} className="flex items-center gap-1">
                          {getPriorityIcon(doubt.priority)}
                          {doubt.priority} priority
                        </Badge>
                        <Badge variant="outline">{doubt.studentCount} students</Badge>
                      </div>
                      <span className="text-xs text-muted-foreground">{doubt.timestamp}</span>
                    </div>
                    
                    <div className="mb-3">
                      <h3 className="font-semibold text-foreground mb-1">{doubt.topic}</h3>
                      <p className="text-sm text-muted-foreground mb-2">{doubt.subject}</p>
                      <p className="text-sm text-foreground italic">"{doubt.question}"</p>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex -space-x-2">
                        {doubt.students.slice(0, 4).map((student, index) => (
                          <div 
                            key={index}
                            className="w-8 h-8 rounded-full bg-muted text-muted-foreground flex items-center justify-center text-xs font-medium border-2 border-background"
                          >
                            {student.avatar}
                          </div>
                        ))}
                      </div>
                      <Button 
                        size="sm" 
                        variant="outline"
                        onClick={() => setSelectedDoubt(doubt.id)}
                      >
                        Respond
                      </Button>
                    </div>
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

export default DoubtQueue;