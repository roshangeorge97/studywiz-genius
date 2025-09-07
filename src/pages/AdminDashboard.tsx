import { Link } from "react-router-dom";
import { Users, School, BarChart3, Settings, Shield, Database, UserCheck, TrendingUp, AlertTriangle, FileText, Send, CheckCircle, Clock, Award } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const AdminDashboard = () => {
  // Mock data for branch/batch overview
  const branchOverview = [
    {
      branch: "Downtown Campus",
      totalStudents: 450,
      activeStudents: 432,
      engagementRate: 89,
      avgTestScore: 78,
      dropoutRisk: 12,
      status: "healthy"
    },
    {
      branch: "Suburban Branch",
      totalStudents: 320,
      activeStudents: 298,
      engagementRate: 74,
      avgTestScore: 71,
      dropoutRisk: 18,
      status: "warning"
    },
    {
      branch: "City Center",
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
      name: "Sarah Johnson",
      doubtsResolved: 89,
      classesCompleted: 24,
      studentImprovement: 15.2,
      rating: "excellent"
    },
    {
      name: "Michael Chen",
      doubtsResolved: 67,
      classesCompleted: 22,
      studentImprovement: 12.8,
      rating: "good"
    },
    {
      name: "Emily Davis",
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
        {/* Branch/Batch Overview */}
        <Card className="mb-8 bg-gradient-card shadow-soft border-border">
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
      </div>
    </div>
  );
};

export default AdminDashboard;