import { Link, useNavigate } from "react-router-dom";
import { Users, BookOpen, BarChart3, Settings, FileText, Clock, Award, TrendingUp, AlertTriangle, MessageSquare, Lightbulb, Target, HelpCircle, CheckCircle } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const TeacherDashboard = () => {
  const navigate = useNavigate();
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
        {/* Batch Performance Overview */}
        <Card className="mb-8 bg-gradient-card shadow-soft border-border">
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
      </div>
    </div>
  );
};

export default TeacherDashboard;