import { Link } from "react-router-dom";
import { Users, BookOpen, BarChart3, Settings, FileText, Clock, Award, TrendingUp } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const TeacherDashboard = () => {
  const teacherModules = [
    {
      title: "Student Management",
      description: "View and manage student progress and performance",
      icon: Users,
      path: "/teacher/students",
      color: "bg-gradient-secondary",
      stats: "24 active students"
    },
    {
      title: "Course Content",
      description: "Create and manage learning materials and tests",
      icon: BookOpen,
      path: "/teacher/content",
      color: "bg-gradient-secondary",
      stats: "8 courses created"
    },
    {
      title: "Analytics",
      description: "Track class performance and learning outcomes",
      icon: BarChart3,
      path: "/teacher/analytics",
      color: "bg-gradient-secondary",
      stats: "85% avg performance"
    },
    {
      title: "Assessments",
      description: "Create and grade tests and assignments",
      icon: FileText,
      path: "/teacher/assessments",
      color: "bg-gradient-secondary",
      stats: "12 assessments"
    }
  ];

  const recentActivity = [
    { title: "Mathematics Test - Grade 10A", status: "Completed", students: "22/24 submitted", time: "2 hours ago" },
    { title: "Physics Quiz - Grade 11B", status: "In Progress", students: "15/20 submitted", time: "5 hours ago" },
    { title: "Chemistry Assignment", status: "Graded", students: "24/24 graded", time: "1 day ago" }
  ];

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
        {/* Teacher Modules */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {teacherModules.map((module) => {
            const IconComponent = module.icon;
            return (
              <Link key={module.title} to={module.path}>
                <Card className="group hover:shadow-glow transition-all duration-300 cursor-pointer bg-gradient-card border-border h-full">
                  <CardHeader className="text-center">
                    <div className={`w-16 h-16 ${module.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="h-8 w-8 text-secondary-foreground" />
                    </div>
                    <CardTitle className="text-foreground">{module.title}</CardTitle>
                    <CardDescription>{module.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-sm font-medium text-accent">{module.stats}</p>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>

        {/* Recent Activity & Quick Stats */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Recent Activity */}
          <Card className="bg-gradient-card shadow-soft border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-accent" />
                Recent Activity
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                    <div>
                      <p className="font-medium text-foreground">{activity.title}</p>
                      <p className="text-sm text-muted-foreground">{activity.students}</p>
                      <p className="text-xs text-muted-foreground">{activity.time}</p>
                    </div>
                    <div className="text-right">
                      <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                        activity.status === 'Completed' ? 'bg-success/20 text-success' :
                        activity.status === 'In Progress' ? 'bg-warning/20 text-warning-foreground' :
                        'bg-accent/20 text-accent'
                      }`}>
                        {activity.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Class Performance */}
          <Card className="bg-gradient-card shadow-soft border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-accent" />
                Class Performance
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Average Score</span>
                  <span className="font-bold text-success">85%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Completion Rate</span>
                  <span className="font-bold text-foreground">92%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Active Students</span>
                  <span className="font-bold text-foreground">24/25</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Pending Reviews</span>
                  <span className="font-bold text-accent">7</span>
                </div>
              </div>
              <Button className="w-full mt-4 bg-gradient-secondary text-secondary-foreground hover:opacity-90">
                View Detailed Reports
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
      </div>
    </div>
  );
};

export default TeacherDashboard;