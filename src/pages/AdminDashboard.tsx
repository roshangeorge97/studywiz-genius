import { Link } from "react-router-dom";
import { Users, School, BarChart3, Settings, Shield, Database, UserCheck, TrendingUp } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const AdminDashboard = () => {
  const adminModules = [
    {
      title: "User Management",
      description: "Manage students, teachers, and admin accounts",
      icon: Users,
      path: "/admin/users",
      color: "bg-gradient-secondary",
      stats: "156 total users"
    },
    {
      title: "School Management",
      description: "Manage schools, classes, and institutional settings",
      icon: School,
      path: "/admin/schools",
      color: "bg-gradient-secondary",
      stats: "12 schools active"
    },
    {
      title: "System Analytics",
      description: "Platform-wide analytics and performance metrics",
      icon: BarChart3,
      path: "/admin/analytics",
      color: "bg-gradient-secondary",
      stats: "98.5% uptime"
    },
    {
      title: "Platform Settings",
      description: "Configure system settings and preferences",
      icon: Settings,
      path: "/admin/settings",
      color: "bg-gradient-secondary",
      stats: "Latest v2.1.0"
    },
    {
      title: "Security & Permissions",
      description: "Manage access controls and security policies",
      icon: Shield,
      path: "/admin/security",
      color: "bg-gradient-secondary",
      stats: "All systems secure"
    },
    {
      title: "Data Management",
      description: "Database management and data analytics",
      icon: Database,
      path: "/admin/data",
      color: "bg-gradient-secondary",
      stats: "2.3TB data stored"
    }
  ];

  const systemStats = [
    { label: "Total Students", value: "1,245", change: "+12%" },
    { label: "Active Teachers", value: "87", change: "+5%" },
    { label: "Schools", value: "12", change: "0%" },
    { label: "Tests Completed", value: "15,678", change: "+23%" }
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
        {/* System Overview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {systemStats.map((stat, index) => (
            <Card key={index} className="bg-gradient-card shadow-soft border-border">
              <CardContent className="p-4">
                <div className="text-center">
                  <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                  <p className={`text-xs font-medium mt-1 ${
                    stat.change.startsWith('+') ? 'text-success' : 
                    stat.change.startsWith('-') ? 'text-destructive' : 'text-muted-foreground'
                  }`}>
                    {stat.change}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Admin Modules */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {adminModules.map((module) => {
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

        {/* System Health & Recent Actions */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* System Health */}
          <Card className="bg-gradient-card shadow-soft border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-success" />
                System Health
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Server Uptime</span>
                  <span className="font-bold text-success">99.8%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Database Performance</span>
                  <span className="font-bold text-success">Excellent</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Active Sessions</span>
                  <span className="font-bold text-foreground">847</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Storage Used</span>
                  <span className="font-bold text-accent">2.3TB / 5TB</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Recent Admin Actions */}
          <Card className="bg-gradient-card shadow-soft border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <UserCheck className="h-5 w-5 text-accent" />
                Recent Admin Actions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-2 bg-muted/50 rounded">
                  <span className="text-sm text-foreground">New teacher account created</span>
                  <span className="text-xs text-muted-foreground">2h ago</span>
                </div>
                <div className="flex items-center justify-between p-2 bg-muted/50 rounded">
                  <span className="text-sm text-foreground">System backup completed</span>
                  <span className="text-xs text-muted-foreground">6h ago</span>
                </div>
                <div className="flex items-center justify-between p-2 bg-muted/50 rounded">
                  <span className="text-sm text-foreground">Security update deployed</span>
                  <span className="text-xs text-muted-foreground">1d ago</span>
                </div>
                <div className="flex items-center justify-between p-2 bg-muted/50 rounded">
                  <span className="text-sm text-foreground">Database optimization</span>
                  <span className="text-xs text-muted-foreground">2d ago</span>
                </div>
              </div>
              <Button className="w-full mt-4 bg-gradient-secondary text-secondary-foreground hover:opacity-90">
                View All Activity Logs
              </Button>
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