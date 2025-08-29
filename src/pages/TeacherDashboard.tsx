import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Users, AlertTriangle, BookOpen, MessageSquare, TrendingUp, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const TeacherDashboard = () => {
  const batchData = [
    { student: "John Doe", math: 45, physics: 78, chemistry: 32, overall: 52, status: "struggling" },
    { student: "Jane Smith", math: 89, physics: 92, chemistry: 85, overall: 89, status: "excellent" },
    { student: "Mike Johnson", math: 67, physics: 45, chemistry: 78, overall: 63, status: "average" },
    { student: "Sarah Wilson", math: 23, physics: 34, chemistry: 28, overall: 28, status: "critical" },
    { student: "David Brown", math: 78, physics: 82, chemistry: 74, overall: 78, status: "good" },
  ];

  const doubts = [
    { id: 1, question: "How to solve quadratic equations?", count: 8, subject: "Math", priority: "high" },
    { id: 2, question: "Newton's laws explanation", count: 5, subject: "Physics", priority: "medium" },
    { id: 3, question: "Periodic table trends", count: 12, subject: "Chemistry", priority: "high" },
    { id: 4, question: "Integration by parts", count: 3, subject: "Math", priority: "low" },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "excellent": return "bg-success text-success-foreground";
      case "good": return "bg-primary text-primary-foreground";
      case "average": return "bg-warning text-warning-foreground";
      case "struggling": return "bg-accent text-accent-foreground";
      case "critical": return "bg-destructive text-destructive-foreground";
      default: return "bg-secondary text-secondary-foreground";
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high": return "bg-destructive text-destructive-foreground";
      case "medium": return "bg-warning text-warning-foreground";
      case "low": return "bg-success text-success-foreground";
      default: return "bg-secondary text-secondary-foreground";
    }
  };

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-primary">Teacher Dashboard</h1>
            <p className="text-muted-foreground mt-2">Optimize class time & support students faster</p>
          </div>
          <Link to="/">
            <Button variant="outline">Back to Student View</Button>
          </Link>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
            <CardContent className="p-6">
              <div className="flex items-center space-x-2">
                <Users className="h-8 w-8 text-primary" />
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Total Students</p>
                  <p className="text-2xl font-bold text-primary">45</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-br from-warning/10 to-warning/5 border-warning/20">
            <CardContent className="p-6">
              <div className="flex items-center space-x-2">
                <AlertTriangle className="h-8 w-8 text-warning" />
                <div>
                  <p className="text-sm font-medium text-muted-foreground">At Risk Students</p>
                  <p className="text-2xl font-bold text-warning">8</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-br from-success/10 to-success/5 border-success/20">
            <CardContent className="p-6">
              <div className="flex items-center space-x-2">
                <MessageSquare className="h-8 w-8 text-success" />
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Doubts Resolved</p>
                  <p className="text-2xl font-bold text-success">127</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-br from-accent/10 to-accent/5 border-accent/20">
            <CardContent className="p-6">
              <div className="flex items-center space-x-2">
                <TrendingUp className="h-8 w-8 text-accent" />
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Avg Improvement</p>
                  <p className="text-2xl font-bold text-accent">+12%</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="performance" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="performance">Batch Performance</TabsTrigger>
            <TabsTrigger value="doubts">Doubt Aggregator</TabsTrigger>
            <TabsTrigger value="content">Content Suggestions</TabsTrigger>
          </TabsList>

          <TabsContent value="performance" className="space-y-6">
            {/* Performance Overview */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  Batch Performance Overview
                </CardTitle>
                <CardDescription>
                  Track which students are struggling on which topics
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Student</TableHead>
                      <TableHead>Mathematics</TableHead>
                      <TableHead>Physics</TableHead>
                      <TableHead>Chemistry</TableHead>
                      <TableHead>Overall</TableHead>
                      <TableHead>Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {batchData.map((student, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-medium">{student.student}</TableCell>
                        <TableCell>
                          <div className="flex items-center space-x-2">
                            <Progress value={student.math} className="w-16" />
                            <span className="text-sm">{student.math}%</span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center space-x-2">
                            <Progress value={student.physics} className="w-16" />
                            <span className="text-sm">{student.physics}%</span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center space-x-2">
                            <Progress value={student.chemistry} className="w-16" />
                            <span className="text-sm">{student.chemistry}%</span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center space-x-2">
                            <Progress value={student.overall} className="w-16" />
                            <span className="text-sm font-semibold">{student.overall}%</span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge className={getStatusColor(student.status)}>
                            {student.status}
                          </Badge>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

            {/* Topic Mastery Heatmap */}
            <Card>
              <CardHeader>
                <CardTitle>Topic Mastery Heatmap</CardTitle>
                <CardDescription>Color-coded difficulty analysis</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Mathematics</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center p-2 rounded bg-destructive/10 border border-destructive/20">
                        <span className="text-sm">Calculus</span>
                        <Badge className="bg-destructive text-destructive-foreground">Critical</Badge>
                      </div>
                      <div className="flex justify-between items-center p-2 rounded bg-warning/10 border border-warning/20">
                        <span className="text-sm">Algebra</span>
                        <Badge className="bg-warning text-warning-foreground">Moderate</Badge>
                      </div>
                      <div className="flex justify-between items-center p-2 rounded bg-success/10 border border-success/20">
                        <span className="text-sm">Geometry</span>
                        <Badge className="bg-success text-success-foreground">Good</Badge>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-3">Physics</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center p-2 rounded bg-warning/10 border border-warning/20">
                        <span className="text-sm">Mechanics</span>
                        <Badge className="bg-warning text-warning-foreground">Moderate</Badge>
                      </div>
                      <div className="flex justify-between items-center p-2 rounded bg-success/10 border border-success/20">
                        <span className="text-sm">Waves</span>
                        <Badge className="bg-success text-success-foreground">Good</Badge>
                      </div>
                      <div className="flex justify-between items-center p-2 rounded bg-destructive/10 border border-destructive/20">
                        <span className="text-sm">Electricity</span>
                        <Badge className="bg-destructive text-destructive-foreground">Critical</Badge>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-3">Chemistry</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center p-2 rounded bg-success/10 border border-success/20">
                        <span className="text-sm">Organic</span>
                        <Badge className="bg-success text-success-foreground">Good</Badge>
                      </div>
                      <div className="flex justify-between items-center p-2 rounded bg-warning/10 border border-warning/20">
                        <span className="text-sm">Inorganic</span>
                        <Badge className="bg-warning text-warning-foreground">Moderate</Badge>
                      </div>
                      <div className="flex justify-between items-center p-2 rounded bg-destructive/10 border border-destructive/20">
                        <span className="text-sm">Physical</span>
                        <Badge className="bg-destructive text-destructive-foreground">Critical</Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="doubts" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageSquare className="h-5 w-5" />
                  Weekly Doubt Aggregator
                </CardTitle>
                <CardDescription>
                  Grouped similar questions to save time
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Question</TableHead>
                      <TableHead>Subject</TableHead>
                      <TableHead>Student Count</TableHead>
                      <TableHead>Priority</TableHead>
                      <TableHead>Action</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {doubts.map((doubt) => (
                      <TableRow key={doubt.id}>
                        <TableCell className="font-medium">{doubt.question}</TableCell>
                        <TableCell>{doubt.subject}</TableCell>
                        <TableCell>
                          <Badge variant="outline">{doubt.count} students</Badge>
                        </TableCell>
                        <TableCell>
                          <Badge className={getPriorityColor(doubt.priority)}>
                            {doubt.priority}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <Button size="sm" variant="outline">Resolve</Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>AI Suggested Teaching Aids</CardTitle>
                <CardDescription>Based on common doubts and difficulty patterns</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 rounded-lg border bg-primary/5 border-primary/20">
                    <h4 className="font-semibold text-primary">Quadratic Equations Workshop</h4>
                    <p className="text-sm text-muted-foreground mt-1">Interactive session with visual graphs and real-world examples</p>
                    <div className="flex gap-2 mt-3">
                      <Badge variant="outline">High Impact</Badge>
                      <Badge variant="outline">8 Students Affected</Badge>
                    </div>
                  </div>
                  
                  <div className="p-4 rounded-lg border bg-accent/5 border-accent/20">
                    <h4 className="font-semibold text-accent">Newton's Laws Demo</h4>
                    <p className="text-sm text-muted-foreground mt-1">Hands-on experiments and video demonstrations</p>
                    <div className="flex gap-2 mt-3">
                      <Badge variant="outline">Medium Impact</Badge>
                      <Badge variant="outline">5 Students Affected</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="content" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5" />
                  Class Content Suggestions
                </CardTitle>
                <CardDescription>
                  AI-powered recommendations for your next class
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="p-6 rounded-lg border-2 border-primary/20 bg-primary/5">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-lg font-semibold text-primary">Focus on Integration Techniques</h3>
                      <Badge className="bg-destructive text-destructive-foreground">Urgent</Badge>
                    </div>
                    <p className="text-muted-foreground mb-4">
                      Based on recent test results, 70% of students are struggling with integration by parts and substitution methods.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">Suggested Duration: 45 minutes</span>
                      </div>
                      <div className="flex flex-wrap gap-2 mt-3">
                        <Badge variant="outline">Visual Examples</Badge>
                        <Badge variant="outline">Step-by-step Guide</Badge>
                        <Badge variant="outline">Practice Problems</Badge>
                      </div>
                    </div>
                    <Button className="mt-4" size="sm">Use This Plan</Button>
                  </div>

                  <div className="p-6 rounded-lg border-2 border-warning/20 bg-warning/5">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-lg font-semibold text-warning">Review Periodic Trends</h3>
                      <Badge className="bg-warning text-warning-foreground">Medium Priority</Badge>
                    </div>
                    <p className="text-muted-foreground mb-4">
                      Students show good understanding but need reinforcement before the upcoming chemistry test.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">Suggested Duration: 30 minutes</span>
                      </div>
                      <div className="flex flex-wrap gap-2 mt-3">
                        <Badge variant="outline">Quick Review</Badge>
                        <Badge variant="outline">Interactive Quiz</Badge>
                        <Badge variant="outline">Memory Techniques</Badge>
                      </div>
                    </div>
                    <Button className="mt-4" size="sm" variant="outline">Use This Plan</Button>
                  </div>

                  <div className="p-6 rounded-lg border-2 border-success/20 bg-success/5">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-lg font-semibold text-success">Advanced Physics Problems</h3>
                      <Badge className="bg-success text-success-foreground">Enhancement</Badge>
                    </div>
                    <p className="text-muted-foreground mb-4">
                      Top performers are ready for challenging problems in mechanics and wave physics.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">Suggested Duration: 60 minutes</span>
                      </div>
                      <div className="flex flex-wrap gap-2 mt-3">
                        <Badge variant="outline">Competition Problems</Badge>
                        <Badge variant="outline">Group Discussion</Badge>
                        <Badge variant="outline">Real Applications</Badge>
                      </div>
                    </div>
                    <Button className="mt-4" size="sm" variant="outline">Use This Plan</Button>
                  </div>
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