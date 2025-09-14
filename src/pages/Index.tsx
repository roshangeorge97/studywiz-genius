import { Link } from "react-router-dom";
import { BookOpen, BarChart3, Brain, MessageCircle, TrendingUp, Clock } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChatBot } from "@/components/ChatBot";
import testTakingIcon from "@/assets/test-taking-icon.png";
import learningPathIcon from "@/assets/learning-path-icon.png";
import analyticsIcon from "@/assets/analytics-icon.png";

const Index = () => {
  const modules = [
    {
      title: "Test Taking",
      description: "Take practice tests and assess your knowledge",
      icon: BookOpen,
      image: testTakingIcon,
      path: "/test",
      color: "bg-gradient-secondary",
      stats: "5 tests available"
    },
    {
      title: "Learning Path",
      description: "Personalized flashcards and study materials",
      icon: Brain,
      image: learningPathIcon,
      path: "/learning-path",
      color: "bg-gradient-secondary",
      stats: "12 topics to review"
    },
    {
      title: "Analytics",
      description: "Track your progress and performance insights",
      icon: BarChart3,
      image: analyticsIcon,
      path: "/analytics",
      color: "bg-gradient-secondary",
      stats: "85% average score"
    }
  ];

  const recentActivity = [
    { title: "Mathematics Test", score: "92%", time: "2 hours ago" },
    { title: "Physics Quiz", score: "78%", time: "1 day ago" },
    { title: "Chemistry Review", score: "85%", time: "2 days ago" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-gradient-card shadow-soft border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-2">
                Welcome back, Roshan! 👋
              </h1>
              <p className="text-muted-foreground">
                Ready to continue your learning journey?
              </p>
            </div>
            <div className="flex items-center gap-6">
              <Link to="/login">
                <Button variant="outline" size="sm" className="bg-accent border-accent text-white hover:bg-accent hover:text-accent-foreground">
                  Switch Account
                </Button>
              </Link>
              <div className="flex items-center gap-4">
                <div className="text-right">
                  <p className="text-sm text-muted-foreground">Current Rank</p>
                  <p className="text-2xl font-bold text-accent">#12</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-muted-foreground">Study Streak</p>
                  <p className="text-2xl font-bold text-secondary">7 days</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Main Modules */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {modules.map((module) => {
            const IconComponent = module.icon;
            return (
              <Link key={module.title} to={module.path}>
                <Card className="group hover:shadow-glow transition-all duration-300 cursor-pointer bg-gradient-card border-border h-full">
                  <CardHeader className="text-center">
                    <div className="w-20 h-20 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 overflow-hidden rounded-full bg-gradient-secondary flex items-center justify-center">
                      <img 
                        src={module.image} 
                        alt={module.title}
                        className="w-12 h-12 object-cover"
                      />
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
                      <p className="text-sm text-muted-foreground">{activity.time}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-accent">{activity.score}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Quick Stats */}
          <Card className="bg-gradient-card shadow-soft border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-accent" />
                This Week's Progress
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Tests Completed</span>
                  <span className="font-bold text-foreground">8</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Average Score</span>
                  <span className="font-bold text-success">85%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Study Time</span>
                  <span className="font-bold text-foreground">12h 30m</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Concepts Mastered</span>
                  <span className="font-bold text-accent">23</span>
                </div>
              </div>
              <Button className="w-full mt-4 bg-gradient-secondary text-secondary-foreground hover:opacity-90">
                View Detailed Analytics
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="mt-8 text-center">
          <h2 className="text-xl font-semibold text-foreground mb-4">Quick Actions</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/test">
              <Button variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
                Start New Test
              </Button>
            </Link>
            <Link to="/learning-path">
              <Button variant="outline" className="border-secondary text-secondary-foreground hover:bg-secondary">
                Review Flashcards
              </Button>
            </Link>
            <Link to="/analytics">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                Check Progress
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Chatbot */}
      <ChatBot />
    </div>
  );
};

export default Index;