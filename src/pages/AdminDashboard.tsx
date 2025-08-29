import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { 
  Users, 
  TrendingUp, 
  AlertTriangle, 
  GraduationCap, 
  FileText,
  Download,
  MessageSquare,
  Clock,
  Target,
  BarChart3,
  UserCheck
} from "lucide-react";
import { Link } from "react-router-dom";

const AdminDashboard = () => {
  const branches = [
    { 
      name: "Main Campus", 
      students: 450, 
      engagement: 87, 
      avgScore: 78, 
      dropoutRisk: 12,
      status: "excellent"
    },
    { 
      name: "North Branch", 
      students: 320, 
      engagement: 72, 
      avgScore: 71, 
      dropoutRisk: 18,
      status: "good"
    },
    { 
      name: "South Branch", 
      students: 280, 
      engagement: 65, 
      avgScore: 68, 
      dropoutRisk: 25,
      status: "average"
    },
    { 
      name: "East Campus", 
      students: 195, 
      engagement: 45, 
      avgScore: 58, 
      dropoutRisk: 35,
      status: "critical"
    }
  ];

  const teachers = [
    {
      name: "Dr. Sarah Chen",
      subject: "Mathematics",
      doubtsResolved: 89,
      classesCompleted: 24,
      studentImprovement: 15,
      rating: 4.8
    },
    {
      name: "Prof. Michael Johnson",
      subject: "Physics",
      doubtsResolved: 76,
      classesCompleted: 22,
      studentImprovement: 12,
      rating: 4.6
    },
    {
      name: "Dr. Emily Rodriguez",
      subject: "Chemistry",
      doubtsResolved: 94,
      classesCompleted: 26,
      studentImprovement: 18,
      rating: 4.9
    },
    {
      name: "Prof. David Kumar",
      subject: "Biology",
      doubtsResolved: 67,
      classesCompleted: 20,
      studentImprovement: 8,
      rating: 4.3
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "excellent": return "bg-success text-success-foreground";
      case "good": return "bg-primary text-primary-foreground";
      case "average": return "bg-warning text-warning-foreground";
      case "critical": return "bg-destructive text-destructive-foreground";
      default: return "bg-secondary text-secondary-foreground";
    }
  };

  const getRatingColor = (rating: number) => {
    if (rating >= 4.5) return "text-success";
    if (rating >= 4.0) return "text-primary";
    if (rating >= 3.5) return "text-warning";
    return "text-destructive";
  };

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-primary">Admin Dashboard</h1>
            <p className="text-muted-foreground mt-2">Academic health snapshot for institute management</p>
          </div>
          <div className="flex gap-2">
            <Link to="/teacher">
              <Button variant="outline">Teacher View</Button>
            </Link>
            <Link to="/">
              <Button variant="outline">Student View</Button>
            </Link>
          </div>
        </div>

        {/* Executive Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
            <CardContent className="p-6">
              <div className="flex items-center space-x-2">
                <Users className="h-8 w-8 text-primary" />
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Total Students</p>
                  <p className="text-2xl font-bold text-primary">1,245</p>
                  <p className="text-xs text-success">+8% this month</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-br from-success/10 to-success/5 border-success/20">
            <CardContent className="p-6">
              <div className="flex items-center space-x-2">
                <TrendingUp className="h-8 w-8 text-success" />
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Avg Engagement</p>
                  <p className="text-2xl font-bold text-success">74%</p>
                  <p className="text-xs text-success">+3% vs last week</p>
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
                  <p className="text-2xl font-bold text-warning">90</p>
                  <p className="text-xs text-destructive">+5 this week</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-br from-accent/10 to-accent/5 border-accent/20">
            <CardContent className="p-6">
              <div className="flex items-center space-x-2">
                <GraduationCap className="h-8 w-8 text-accent" />
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Avg Test Score</p>
                  <p className="text-2xl font-bold text-accent">72%</p>
                  <p className="text-xs text-success">+2% improvement</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="branches" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="branches">Branch Overview</TabsTrigger>
            <TabsTrigger value="teachers">Teacher Insights</TabsTrigger>
            <TabsTrigger value="reports">Automated Reports</TabsTrigger>
          </TabsList>

          <TabsContent value="branches" className="space-y-6">
            {/* Branch Performance */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="h-5 w-5" />
                  Branch/Batch Overview
                </CardTitle>
                <CardDescription>
                  Monitor academic health across all institute branches
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Branch</TableHead>
                      <TableHead>Students</TableHead>
                      <TableHead>Engagement Rate</TableHead>
                      <TableHead>Avg Test Score</TableHead>
                      <TableHead>Dropout Risk</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Action</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {branches.map((branch, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-medium">{branch.name}</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Users className="h-4 w-4 text-muted-foreground" />
                            {branch.students}
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center space-x-2">
                            <Progress value={branch.engagement} className="w-20" />
                            <span className="text-sm">{branch.engagement}%</span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center space-x-2">
                            <Progress value={branch.avgScore} className="w-20" />
                            <span className="text-sm">{branch.avgScore}%</span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-1">
                            <AlertTriangle className="h-4 w-4 text-warning" />
                            <span className="text-sm">{branch.dropoutRisk} students</span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge className={getStatusColor(branch.status)}>
                            {branch.status}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <Button size="sm" variant="outline">View Details</Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

            {/* Dropout Risk Analysis */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-warning">
                    <AlertTriangle className="h-5 w-5" />
                    High-Risk Students Alert
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 rounded-lg bg-destructive/10 border border-destructive/20">
                      <h4 className="font-semibold text-destructive">Critical Risk (35 students)</h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        Less than 30% engagement, failing multiple subjects
                      </p>
                      <Button size="sm" className="mt-2" variant="destructive">
                        Immediate Intervention
                      </Button>
                    </div>
                    
                    <div className="p-4 rounded-lg bg-warning/10 border border-warning/20">
                      <h4 className="font-semibold text-warning">Medium Risk (55 students)</h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        Declining performance, low engagement
                      </p>
                      <Button size="sm" className="mt-2" variant="outline">
                        Schedule Counseling
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-success">
                    <Target className="h-5 w-5" />
                    Performance Highlights
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 rounded-lg bg-success/10 border border-success/20">
                      <h4 className="font-semibold text-success">Top Performers (156 students)</h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        90%+ engagement, consistently high scores
                      </p>
                      <Badge className="mt-2 bg-success text-success-foreground">
                        Scholarship Eligible
                      </Badge>
                    </div>
                    
                    <div className="p-4 rounded-lg bg-primary/10 border border-primary/20">
                      <h4 className="font-semibold text-primary">Improved This Month (89 students)</h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        Significant improvement in test scores
                      </p>
                      <Badge className="mt-2 bg-primary text-primary-foreground">
                        Recognition Worthy
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="teachers" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <UserCheck className="h-5 w-5" />
                  Teacher Productivity Insights
                </CardTitle>
                <CardDescription>
                  Monitor teacher performance and student improvement metrics
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Teacher</TableHead>
                      <TableHead>Subject</TableHead>
                      <TableHead>Doubts Resolved</TableHead>
                      <TableHead>Classes Completed</TableHead>
                      <TableHead>Student Improvement</TableHead>
                      <TableHead>Rating</TableHead>
                      <TableHead>Action</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {teachers.map((teacher, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-medium">{teacher.name}</TableCell>
                        <TableCell>{teacher.subject}</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <MessageSquare className="h-4 w-4 text-muted-foreground" />
                            {teacher.doubtsResolved}
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Clock className="h-4 w-4 text-muted-foreground" />
                            {teacher.classesCompleted}
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-1">
                            <TrendingUp className="h-4 w-4 text-success" />
                            <span className="text-success font-semibold">+{teacher.studentImprovement}%</span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-1">
                            <span className={`font-semibold ${getRatingColor(teacher.rating)}`}>
                              {teacher.rating}
                            </span>
                            <span className="text-muted-foreground">/ 5.0</span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Button size="sm" variant="outline">View Profile</Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

            {/* Teacher Performance Analytics */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Top Performer</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <GraduationCap className="h-8 w-8 text-success" />
                    </div>
                    <h3 className="font-semibold">Dr. Emily Rodriguez</h3>
                    <p className="text-sm text-muted-foreground">Chemistry</p>
                    <Badge className="mt-2 bg-success text-success-foreground">Excellence Award</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Most Improved</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <TrendingUp className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="font-semibold">Prof. David Kumar</h3>
                    <p className="text-sm text-muted-foreground">Biology</p>
                    <Badge className="mt-2 bg-primary text-primary-foreground">Growth Star</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Needs Support</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-warning/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <AlertTriangle className="h-8 w-8 text-warning" />
                    </div>
                    <h3 className="font-semibold">Prof. John Smith</h3>
                    <p className="text-sm text-muted-foreground">Mathematics</p>
                    <Button size="sm" className="mt-2" variant="outline">
                      Schedule Meeting
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="reports" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="h-5 w-5" />
                    Weekly Reports
                  </CardTitle>
                  <CardDescription>
                    Automated PDF summaries for management
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 border rounded-lg">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold">Academic Performance Report</h4>
                      <Badge variant="outline">Weekly</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">
                      Comprehensive overview of student performance, test scores, and engagement metrics
                    </p>
                    <Button size="sm" className="w-full">
                      <Download className="h-4 w-4 mr-2" />
                      Download Latest Report
                    </Button>
                  </div>

                  <div className="p-4 border rounded-lg">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold">Teacher Productivity Report</h4>
                      <Badge variant="outline">Bi-weekly</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">
                      Detailed analysis of teacher performance and student improvement metrics
                    </p>
                    <Button size="sm" className="w-full" variant="outline">
                      <Download className="h-4 w-4 mr-2" />
                      Download Report
                    </Button>
                  </div>

                  <div className="p-4 border rounded-lg">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold">Financial Impact Report</h4>
                      <Badge variant="outline">Monthly</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">
                      ROI analysis, retention rates, and revenue impact of academic improvements
                    </p>
                    <Button size="sm" className="w-full" variant="outline">
                      <Download className="h-4 w-4 mr-2" />
                      Generate Report
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MessageSquare className="h-5 w-5" />
                    WhatsApp Summaries
                  </CardTitle>
                  <CardDescription>
                    Daily digest sent to management team
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 bg-primary/5 border border-primary/20 rounded-lg">
                    <h4 className="font-semibold text-primary mb-2">Today's Summary</h4>
                    <div className="text-sm space-y-1">
                      <p>📊 Total Active Students: 1,245 (+8)</p>
                      <p>📈 Average Engagement: 74% (+2%)</p>
                      <p>⚠️ Students at Risk: 90 (+5)</p>
                      <p>🎯 Test Completion Rate: 89%</p>
                      <p>👨‍🏫 Teacher Doubts Resolved: 156</p>
                    </div>
                    <Button size="sm" className="mt-3 w-full">
                      Send to WhatsApp Group
                    </Button>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-semibold">Report Schedule</h4>
                    
                    <div className="flex justify-between items-center p-2 border rounded">
                      <span className="text-sm">Daily Summary</span>
                      <Badge className="bg-success text-success-foreground">Active</Badge>
                    </div>
                    
                    <div className="flex justify-between items-center p-2 border rounded">
                      <span className="text-sm">Weekly Deep Dive</span>
                      <Badge className="bg-success text-success-foreground">Active</Badge>
                    </div>
                    
                    <div className="flex justify-between items-center p-2 border rounded">
                      <span className="text-sm">Monthly Executive Summary</span>
                      <Badge variant="outline">Scheduled</Badge>
                    </div>

                    <Button variant="outline" className="w-full mt-3">
                      Configure Notifications
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Recent Activity Feed */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Activity Feed</CardTitle>
                <CardDescription>Real-time updates across all branches</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start gap-3 p-3 rounded-lg border">
                    <div className="w-2 h-2 bg-success rounded-full mt-2"></div>
                    <div>
                      <p className="text-sm"><strong>Main Campus:</strong> 15 students completed advanced physics test</p>
                      <p className="text-xs text-muted-foreground">2 minutes ago</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 p-3 rounded-lg border">
                    <div className="w-2 h-2 bg-warning rounded-full mt-2"></div>
                    <div>
                      <p className="text-sm"><strong>North Branch:</strong> High doubt volume detected in Chemistry</p>
                      <p className="text-xs text-muted-foreground">8 minutes ago</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 p-3 rounded-lg border">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <div>
                      <p className="text-sm"><strong>Dr. Emily Rodriguez:</strong> Resolved 12 student doubts in organic chemistry</p>
                      <p className="text-xs text-muted-foreground">15 minutes ago</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 p-3 rounded-lg border">
                    <div className="w-2 h-2 bg-destructive rounded-full mt-2"></div>
                    <div>
                      <p className="text-sm"><strong>East Campus:</strong> 3 students marked as high dropout risk</p>
                      <p className="text-xs text-muted-foreground">32 minutes ago</p>
                    </div>
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

export default AdminDashboard;