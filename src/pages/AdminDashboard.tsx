import { useState } from "react";
import { Link } from "react-router-dom";
import { Users, School, BarChart3, Settings, Shield, Database, UserCheck, TrendingUp, AlertTriangle, FileText, Send, CheckCircle, Clock, Award, Star, Target, Eye, Filter } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [selectedBranch, setSelectedBranch] = useState("all");

  // Mock data for branch/batch overview
  const branchOverview = [
    {
      branch: "Mumbai Central Campus",
      totalStudents: 450,
      activeStudents: 432,
      engagementRate: 89,
      avgTestScore: 78,
      dropoutRisk: 12,
      status: "healthy"
    },
    {
      branch: "Delhi NCR Branch",
      totalStudents: 320,
      activeStudents: 298,
      engagementRate: 74,
      avgTestScore: 71,
      dropoutRisk: 18,
      status: "warning"
    },
    {
      branch: "Bangalore Tech Hub",
      totalStudents: 280,
      activeStudents: 275,
      engagementRate: 92,
      avgTestScore: 82,
      dropoutRisk: 5,
      status: "excellent"
    }
  ];

  // Mock data for teacher productivity
  const teacherProductivity = [
    {
      name: "Dr. Priya Sharma",
      doubtsResolved: 89,
      classesCompleted: 24,
      studentImprovement: 15.2,
      rating: "excellent"
    },
    {
      name: "Prof. Rajesh Kumar",
      doubtsResolved: 67,
      classesCompleted: 22,
      studentImprovement: 12.8,
      rating: "good"
    },
    {
      name: "Dr. Anjali Patel",
      doubtsResolved: 45,
      classesCompleted: 18,
      studentImprovement: 8.5,
      rating: "needs_improvement"
    }
  ];

  // Mock data for automated reports
  const reports = [
    {
      type: "Weekly Summary",
      status: "sent",
      recipients: "Management Team",
      lastSent: "2 hours ago",
      nextScheduled: "Next Monday 9:00 AM"
    },
    {
      type: "Teacher Performance",
      status: "scheduled",
      recipients: "HR Department",
      lastSent: "1 week ago",
      nextScheduled: "Friday 5:00 PM"
    },
    {
      type: "Student Progress",
      status: "generating",
      recipients: "Academic Committee",
      lastSent: "3 days ago",
      nextScheduled: "Tomorrow 8:00 AM"
    }
  ];

  // Mock data for high potential students
  const highPotentialStudents = [
    {
      id: 1,
      name: "Arjun Singh",
      branch: "Mumbai Central Campus",
      batch: "NEET-2024-A",
      currentRank: 3,
      improvement: "+25%",
      avgScore: 92,
      strongSubjects: ["Biology", "Chemistry"],
      weakSubjects: ["Physics"],
      studyHours: "8h/day",
      streak: 45,
      potential: "high"
    },
    {
      id: 2,
      name: "Priya Gupta",
      branch: "Bangalore Tech Hub",
      batch: "NEET-2024-B",
      currentRank: 1,
      improvement: "+18%",
      avgScore: 95,
      strongSubjects: ["Physics", "Chemistry"],
      weakSubjects: ["Biology"],
      studyHours: "7h/day",
      streak: 38,
      potential: "very-high"
    },
    {
      id: 3,
      name: "Rahul Verma",
      branch: "Delhi NCR Branch",
      batch: "NEET-2024-C",
      currentRank: 5,
      improvement: "+22%",
      avgScore: 89,
      strongSubjects: ["Biology", "Physics"],
      weakSubjects: ["Chemistry"],
      studyHours: "6h/day",
      streak: 32,
      potential: "high"
    },
    {
      id: 4,
      name: "Kavya Reddy",
      branch: "Mumbai Central Campus",
      batch: "NEET-2024-A",
      currentRank: 2,
      improvement: "+15%",
      avgScore: 91,
      strongSubjects: ["Chemistry", "Physics"],
      weakSubjects: ["Biology"],
      studyHours: "9h/day",
      streak: 42,
      potential: "high"
    }
  ];

  // Mock data for batch performance details
  const batchPerformance = [
    {
      batch: "NEET-2024-A",
      branch: "Mumbai Central Campus",
      totalStudents: 30,
      avgScore: 85.2,
      improvement: "+12%",
      topPerformer: "Kavya Reddy",
      strugglingStudents: 3,
      strongTopics: ["Organic Chemistry", "Human Physiology"],
      weakTopics: ["Modern Physics", "Coordination Chemistry"],
      attendance: 94,
      engagement: 87
    },
    {
      batch: "NEET-2024-B",
      branch: "Bangalore Tech Hub",
      totalStudents: 28,
      avgScore: 88.7,
      improvement: "+15%",
      topPerformer: "Priya Gupta",
      strugglingStudents: 2,
      strongTopics: ["Mechanics", "Cell Biology"],
      weakTopics: ["Thermodynamics", "Plant Physiology"],
      attendance: 96,
      engagement: 91
    },
    {
      batch: "NEET-2024-C",
      branch: "Delhi NCR Branch",
      totalStudents: 25,
      avgScore: 82.1,
      improvement: "+8%",
      topPerformer: "Rahul Verma",
      strugglingStudents: 5,
      strongTopics: ["Genetics", "Electrostatics"],
      weakTopics: ["Organic Chemistry", "Optics"],
      attendance: 89,
      engagement: 78
    }
  ];

  // Mock data for teacher insights
  const teacherInsights = [
    {
      name: "Dr. Priya Sharma",
      subject: "Biology",
      students: 45,
      avgImprovement: 18.5,
      doubtsResolved: 89,
      rating: 4.8,
      strengths: ["Clear explanations", "Patient with students"],
      areas: ["Time management", "Advanced concepts"],
      recentActivity: "Resolved 12 doubts today",
      performance: "excellent"
    },
    {
      name: "Prof. Rajesh Kumar",
      subject: "Chemistry",
      students: 42,
      avgImprovement: 15.2,
      doubtsResolved: 67,
      rating: 4.6,
      strengths: ["Practical examples", "Interactive teaching"],
      areas: ["Student engagement", "Complex topics"],
      recentActivity: "Created 5 new practice tests",
      performance: "good"
    },
    {
      name: "Dr. Anjali Patel",
      subject: "Physics",
      students: 38,
      avgImprovement: 12.8,
      doubtsResolved: 45,
      rating: 4.3,
      strengths: ["Problem solving", "Visual aids"],
      areas: ["Student motivation", "Concept clarity"],
      recentActivity: "Updated curriculum for week 3",
      performance: "needs-improvement"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-gradient-card shadow-soft border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-2">
                Admin Dashboard 🛡️
              </h1>
              <p className="text-muted-foreground">
                System administration and platform management
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
                  <p className="text-sm text-muted-foreground">System Status</p>
                  <p className="text-lg font-bold text-success">Operational</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-muted-foreground">Active Users</p>
                  <p className="text-2xl font-bold text-accent">1,332</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 bg-muted">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="students">High Potentials</TabsTrigger>
            <TabsTrigger value="teachers">Teacher Insights</TabsTrigger>
            <TabsTrigger value="reports">Reports</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            {/* Branch/Batch Overview */}
            <Card className="bg-gradient-card shadow-soft border-border">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <School className="h-5 w-5 text-accent" />
              Branch/Batch Overview - Academic Health Snapshot
            </CardTitle>
            <CardDescription>Real-time overview of all branches with dropout risk warnings</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              {branchOverview.map((branch, index) => (
                <div key={index} className="p-4 rounded-lg border bg-muted/20">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <span className="font-semibold text-foreground text-lg">{branch.branch}</span>
                      <Badge variant={
                        branch.status === 'excellent' ? 'default' : 
                        branch.status === 'healthy' ? 'secondary' : 'destructive'
                      }>
                        {branch.status}
                      </Badge>
                      {branch.dropoutRisk > 15 && (
                        <Badge variant="destructive" className="flex items-center gap-1">
                          <AlertTriangle className="h-3 w-3" />
                          High Dropout Risk
                        </Badge>
                      )}
                    </div>
                    <Button size="sm" variant="outline">View Details</Button>
                  </div>
                  
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                    <div className="text-center">
                      <p className="text-2xl font-bold text-foreground">{branch.activeStudents}</p>
                      <p className="text-xs text-muted-foreground">Active Students</p>
                      <p className="text-xs text-muted-foreground">of {branch.totalStudents}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-accent">{branch.engagementRate}%</p>
                      <p className="text-xs text-muted-foreground">Engagement</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-success">{branch.avgTestScore}%</p>
                      <p className="text-xs text-muted-foreground">Avg Test Score</p>
                    </div>
                    <div className="text-center">
                      <p className={`text-2xl font-bold ${branch.dropoutRisk > 15 ? 'text-destructive' : 'text-warning'}`}>
                        {branch.dropoutRisk}
                      </p>
                      <p className="text-xs text-muted-foreground">Dropout Risk</p>
                    </div>
                    <div className="text-center">
                      <Progress value={branch.engagementRate} className="h-2 mb-1" />
                      <p className="text-xs text-muted-foreground">Health Score</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Teacher Productivity & Automated Reports */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Teacher Productivity Insights */}
          <Card className="bg-gradient-card shadow-soft border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="h-5 w-5 text-accent" />
                Teacher Productivity Insights
              </CardTitle>
              <CardDescription>Performance metrics and improvement tracking</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {teacherProductivity.map((teacher, index) => (
                  <div key={index} className="p-3 rounded-lg border bg-muted/20">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium text-foreground">{teacher.name}</span>
                      <Badge variant={
                        teacher.rating === 'excellent' ? 'default' :
                        teacher.rating === 'good' ? 'secondary' : 'destructive'
                      }>
                        {teacher.rating.replace('_', ' ')}
                      </Badge>
                    </div>
                    <div className="grid grid-cols-3 gap-4 text-sm">
                      <div className="text-center">
                        <p className="font-bold text-accent">{teacher.doubtsResolved}</p>
                        <p className="text-xs text-muted-foreground">Doubts Resolved</p>
                      </div>
                      <div className="text-center">
                        <p className="font-bold text-secondary">{teacher.classesCompleted}</p>
                        <p className="text-xs text-muted-foreground">Classes Done</p>
                      </div>
                      <div className="text-center">
                        <p className="font-bold text-success">+{teacher.studentImprovement}%</p>
                        <p className="text-xs text-muted-foreground">Student Improvement</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <Button className="w-full mt-4 bg-gradient-secondary text-secondary-foreground hover:opacity-90">
                View Detailed Analytics
              </Button>
            </CardContent>
          </Card>

          {/* Automated Reports */}
          <Card className="bg-gradient-card shadow-soft border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-accent" />
                Automated Reports
              </CardTitle>
              <CardDescription>Scheduled PDF and WhatsApp summaries</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {reports.map((report, index) => (
                  <div key={index} className="p-3 rounded-lg border bg-muted/20">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium text-foreground">{report.type}</span>
                      <div className="flex items-center gap-2">
                        {report.status === 'sent' && <CheckCircle className="h-4 w-4 text-success" />}
                        {report.status === 'scheduled' && <Clock className="h-4 w-4 text-accent" />}
                        {report.status === 'generating' && <div className="h-2 w-2 bg-accent rounded-full animate-pulse"></div>}
                        <Badge variant={
                          report.status === 'sent' ? 'default' :
                          report.status === 'scheduled' ? 'secondary' : 'outline'
                        }>
                          {report.status}
                        </Badge>
                      </div>
                    </div>
                    <div className="text-sm text-muted-foreground space-y-1">
                      <p>To: {report.recipients}</p>
                      <p>Last sent: {report.lastSent}</p>
                      <p>Next: {report.nextScheduled}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex gap-2 mt-4">
                <Button className="flex-1 bg-gradient-secondary text-secondary-foreground hover:opacity-90">
                  <Send className="h-4 w-4 mr-2" />
                  Send Now
                </Button>
                <Button variant="outline" className="flex-1">
                  Configure
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

            {/* Quick Actions */}
            <div className="mt-8 text-center">
              <h2 className="text-xl font-semibold text-foreground mb-4">Quick Actions</h2>
              <div className="flex flex-wrap justify-center gap-4">
                <Button variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
                  Create Admin Account
                </Button>
                <Button variant="outline" className="border-secondary text-secondary-foreground hover:bg-secondary">
                  System Backup
                </Button>
                <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  View System Logs
                </Button>
              </div>
            </div>
          </TabsContent>

          {/* High Potential Students Tab */}
          <TabsContent value="students" className="space-y-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-foreground">High Potential Students</h2>
              <div className="flex items-center gap-4">
                <Select value={selectedBranch} onValueChange={setSelectedBranch}>
                  <SelectTrigger className="w-48">
                    <SelectValue placeholder="Filter by branch" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Branches</SelectItem>
                    <SelectItem value="downtown">Downtown Campus</SelectItem>
                    <SelectItem value="city-center">City Center</SelectItem>
                    <SelectItem value="suburban">Suburban Branch</SelectItem>
                  </SelectContent>
                </Select>
                <Button variant="outline">
                  <Filter className="h-4 w-4 mr-2" />
                  Filter
                </Button>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-6">
              {highPotentialStudents.map((student) => (
                <Card key={student.id} className="bg-gradient-card shadow-soft border-border">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-lg font-semibold text-foreground">{student.name}</h3>
                        <p className="text-sm text-muted-foreground">{student.branch} • {student.batch}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge 
                          variant={student.potential === 'very-high' ? 'default' : 'secondary'}
                          className="flex items-center gap-1"
                        >
                          <Star className="h-3 w-3" />
                          {student.potential === 'very-high' ? 'Very High' : 'High'} Potential
                        </Badge>
                        <Button size="sm" variant="outline">
                          <Eye className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="text-center p-3 bg-accent/10 rounded-lg">
                        <p className="text-2xl font-bold text-accent">#{student.currentRank}</p>
                        <p className="text-xs text-muted-foreground">Current Rank</p>
                      </div>
                      <div className="text-center p-3 bg-success/10 rounded-lg">
                        <p className="text-2xl font-bold text-success">{student.avgScore}%</p>
                        <p className="text-xs text-muted-foreground">Average Score</p>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Improvement</span>
                        <span className="font-medium text-success">{student.improvement}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Study Hours</span>
                        <span className="font-medium">{student.studyHours}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Study Streak</span>
                        <span className="font-medium">{student.streak} days</span>
                      </div>
                    </div>

                    <div className="mt-4 space-y-2">
                      <div>
                        <p className="text-sm font-medium text-success mb-1">Strong Subjects</p>
                        <div className="flex flex-wrap gap-1">
                          {student.strongSubjects.map((subject, index) => (
                            <Badge key={index} variant="outline" className="text-xs text-success border-success">
                              {subject}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-warning mb-1">Areas to Improve</p>
                        <div className="flex flex-wrap gap-1">
                          {student.weakSubjects.map((subject, index) => (
                            <Badge key={index} variant="outline" className="text-xs text-warning border-warning">
                              {subject}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Batch Performance Details */}
            <Card className="bg-gradient-card shadow-soft border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="h-5 w-5 text-accent" />
                  Batch Performance Details
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {batchPerformance.map((batch, index) => (
                    <div key={index} className="p-4 border rounded-lg bg-muted/20">
                      <div className="flex items-center justify-between mb-3">
                        <div>
                          <h4 className="font-semibold text-foreground">{batch.batch}</h4>
                          <p className="text-sm text-muted-foreground">{batch.branch}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-2xl font-bold text-accent">{batch.avgScore}%</p>
                          <p className="text-sm text-success">{batch.improvement}</p>
                        </div>
                      </div>
                      
                      <div className="grid md:grid-cols-4 gap-4 mb-3">
                        <div className="text-center">
                          <p className="text-lg font-bold text-foreground">{batch.totalStudents}</p>
                          <p className="text-xs text-muted-foreground">Students</p>
                        </div>
                        <div className="text-center">
                          <p className="text-lg font-bold text-success">{batch.attendance}%</p>
                          <p className="text-xs text-muted-foreground">Attendance</p>
                        </div>
                        <div className="text-center">
                          <p className="text-lg font-bold text-accent">{batch.engagement}%</p>
                          <p className="text-xs text-muted-foreground">Engagement</p>
                        </div>
                        <div className="text-center">
                          <p className="text-lg font-bold text-warning">{batch.strugglingStudents}</p>
                          <p className="text-xs text-muted-foreground">Struggling</p>
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm font-medium text-success mb-2">Strong Topics</p>
                          <div className="flex flex-wrap gap-1">
                            {batch.strongTopics.map((topic, topicIndex) => (
                              <Badge key={topicIndex} variant="outline" className="text-xs text-success border-success">
                                {topic}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-warning mb-2">Weak Topics</p>
                          <div className="flex flex-wrap gap-1">
                            {batch.weakTopics.map((topic, topicIndex) => (
                              <Badge key={topicIndex} variant="outline" className="text-xs text-warning border-warning">
                                {topic}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Teacher Insights Tab */}
          <TabsContent value="teachers" className="space-y-6">
            <h2 className="text-2xl font-bold text-foreground mb-6">Teacher Performance Insights</h2>
            
            <div className="grid lg:grid-cols-2 gap-6">
              {teacherInsights.map((teacher, index) => (
                <Card key={index} className="bg-gradient-card shadow-soft border-border">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-lg font-semibold text-foreground">{teacher.name}</h3>
                        <p className="text-sm text-muted-foreground">{teacher.subject} • {teacher.students} students</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge 
                          variant={
                            teacher.performance === 'excellent' ? 'default' :
                            teacher.performance === 'good' ? 'secondary' : 'destructive'
                          }
                        >
                          {teacher.performance.replace('-', ' ')}
                        </Badge>
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 text-warning fill-current" />
                          <span className="text-sm font-medium">{teacher.rating}</span>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-4 mb-4">
                      <div className="text-center p-3 bg-success/10 rounded-lg">
                        <p className="text-lg font-bold text-success">+{teacher.avgImprovement}%</p>
                        <p className="text-xs text-muted-foreground">Avg Improvement</p>
                      </div>
                      <div className="text-center p-3 bg-accent/10 rounded-lg">
                        <p className="text-lg font-bold text-accent">{teacher.doubtsResolved}</p>
                        <p className="text-xs text-muted-foreground">Doubts Resolved</p>
                      </div>
                      <div className="text-center p-3 bg-primary/10 rounded-lg">
                        <p className="text-lg font-bold text-primary">{teacher.rating}/5</p>
                        <p className="text-xs text-muted-foreground">Rating</p>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div>
                        <p className="text-sm font-medium text-success mb-2">Strengths</p>
                        <div className="flex flex-wrap gap-1">
                          {teacher.strengths.map((strength, strengthIndex) => (
                            <Badge key={strengthIndex} variant="outline" className="text-xs text-success border-success">
                              {strength}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-warning mb-2">Areas for Improvement</p>
                        <div className="flex flex-wrap gap-1">
                          {teacher.areas.map((area, areaIndex) => (
                            <Badge key={areaIndex} variant="outline" className="text-xs text-warning border-warning">
                              {area}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div className="p-3 bg-muted/30 rounded-lg">
                        <p className="text-sm text-muted-foreground">
                          <strong>Recent Activity:</strong> {teacher.recentActivity}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Reports Tab */}
          <TabsContent value="reports" className="space-y-6">
            <h2 className="text-2xl font-bold text-foreground mb-6">Automated Reports & Analytics</h2>
            
            <Card className="bg-gradient-card shadow-soft border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-accent" />
                  Report Management
                </CardTitle>
                <CardDescription>Automated PDF and WhatsApp summaries</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {reports.map((report, index) => (
                    <div key={index} className="p-4 border rounded-lg bg-muted/20">
                      <div className="flex items-center justify-between mb-3">
                        <div>
                          <h4 className="font-semibold text-foreground">{report.type}</h4>
                          <p className="text-sm text-muted-foreground">To: {report.recipients}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          {report.status === 'sent' && <CheckCircle className="h-4 w-4 text-success" />}
                          {report.status === 'scheduled' && <Clock className="h-4 w-4 text-accent" />}
                          {report.status === 'generating' && <div className="h-2 w-2 bg-accent rounded-full animate-pulse"></div>}
                          <Badge variant={
                            report.status === 'sent' ? 'default' :
                            report.status === 'scheduled' ? 'secondary' : 'outline'
                          }>
                            {report.status}
                          </Badge>
                        </div>
                      </div>
                      <div className="grid md:grid-cols-2 gap-4 text-sm">
                        <div>
                          <p className="text-muted-foreground">Last sent: {report.lastSent}</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">Next: {report.nextScheduled}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex gap-2 mt-6">
                  <Button className="flex-1 bg-gradient-secondary text-secondary-foreground hover:opacity-90">
                    <Send className="h-4 w-4 mr-2" />
                    Send Now
                  </Button>
                  <Button variant="outline" className="flex-1">
                    Configure Reports
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminDashboard;