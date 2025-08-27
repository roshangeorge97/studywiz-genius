import { useNavigate } from "react-router-dom";
import { ArrowLeft, TrendingUp, Trophy, Target, Calendar, Award, BarChart3, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { ChatBot } from "@/components/ChatBot";

const Summary = () => {
  const navigate = useNavigate();

  const overallStats = {
    averageScore: 85,
    testsCompleted: 24,
    studyTime: "67h 30m",
    currentRank: 12,
    classSize: 45,
    improvement: "+12%",
    streak: 7
  };

  const subjectPerformance = [
    { subject: "Mathematics", score: 92, tests: 8, trend: "+5%", color: "text-success" },
    { subject: "Physics", score: 78, tests: 6, trend: "+8%", color: "text-accent" },
    { subject: "Chemistry", score: 81, tests: 5, trend: "-2%", color: "text-warning" },
    { subject: "History", score: 89, tests: 5, trend: "+15%", color: "text-primary" }
  ];

  const recentTests = [
    { name: "Mathematics Quiz #8", score: 92, date: "2024-03-15", time: "18:45" },
    { name: "Physics Test #6", score: 78, date: "2024-03-14", time: "25:30" },
    { name: "Chemistry Lab Quiz", score: 85, date: "2024-03-13", time: "15:20" },
    { name: "History Essay Test", score: 89, date: "2024-03-12", time: "35:15" },
    { name: "Mathematics Quiz #7", score: 88, date: "2024-03-11", time: "22:10" }
  ];

  const achievements = [
    { title: "Mathematics Master", description: "Scored 90+ in 5 consecutive math tests", icon: Trophy, color: "text-accent" },
    { title: "Study Streak", description: "7 days of consistent study", icon: Calendar, color: "text-success" },
    { title: "Quick Learner", description: "Completed test in under 20 minutes", icon: Clock, color: "text-secondary" },
    { title: "Top Performer", description: "Ranked in top 30% of class", icon: Award, color: "text-primary" }
  ];

  const weeklyProgress = [
    { day: "Mon", score: 78 },
    { day: "Tue", score: 85 },
    { day: "Wed", score: 82 },
    { day: "Thu", score: 91 },
    { day: "Fri", score: 88 },
    { day: "Sat", score: 93 },
    { day: "Sun", score: 89 }
  ];

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
                onClick={() => navigate("/")}
                className="hover:bg-muted"
              >
                <ArrowLeft className="h-5 w-5" />
              </Button>
              <div>
                <h1 className="text-2xl font-bold text-foreground">Analytics Dashboard</h1>
                <p className="text-muted-foreground">Your complete learning analytics and progress</p>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="text-center">
                <p className="text-3xl font-bold text-accent">{overallStats.averageScore}%</p>
                <p className="text-sm text-muted-foreground">Average Score</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-primary">#{overallStats.currentRank}</p>
                <p className="text-sm text-muted-foreground">Class Rank</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Key Metrics */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gradient-card shadow-soft border-border">
            <CardContent className="p-6 text-center">
              <BarChart3 className="h-8 w-8 text-accent mx-auto mb-2" />
              <div className="text-2xl font-bold text-foreground mb-1">{overallStats.testsCompleted}</div>
              <div className="text-sm text-muted-foreground">Tests Completed</div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card shadow-soft border-border">
            <CardContent className="p-6 text-center">
              <Clock className="h-8 w-8 text-secondary mx-auto mb-2" />
              <div className="text-2xl font-bold text-foreground mb-1">{overallStats.studyTime}</div>
              <div className="text-sm text-muted-foreground">Total Study Time</div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card shadow-soft border-border">
            <CardContent className="p-6 text-center">
              <TrendingUp className="h-8 w-8 text-success mx-auto mb-2" />
              <div className="text-2xl font-bold text-success mb-1">{overallStats.improvement}</div>
              <div className="text-sm text-muted-foreground">Improvement</div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card shadow-soft border-border">
            <CardContent className="p-6 text-center">
              <Calendar className="h-8 w-8 text-accent mx-auto mb-2" />
              <div className="text-2xl font-bold text-foreground mb-1">{overallStats.streak} days</div>
              <div className="text-sm text-muted-foreground">Study Streak</div>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Subject Performance */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="bg-gradient-card shadow-soft border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-5 w-5 text-accent" />
                  Subject Performance
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {subjectPerformance.map((subject, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <span className="font-medium text-foreground">{subject.subject}</span>
                          <Badge variant="outline" className="border-border">
                            {subject.tests} tests
                          </Badge>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className={`text-sm font-medium ${subject.color}`}>
                            {subject.trend}
                          </span>
                          <span className="font-bold text-foreground">{subject.score}%</span>
                        </div>
                      </div>
                      <Progress value={subject.score} className="h-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Weekly Progress */}
            <Card className="bg-gradient-card shadow-soft border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="h-5 w-5 text-accent" />
                  Weekly Progress
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-end h-32 gap-2">
                  {weeklyProgress.map((day, index) => (
                    <div key={index} className="flex flex-col items-center gap-2 flex-1">
                      <div 
                        className="bg-gradient-secondary rounded-t-sm w-full min-h-1 transition-all duration-300"
                        style={{ height: `${(day.score / 100) * 100}%` }}
                      />
                      <span className="text-xs text-muted-foreground">{day.day}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Recent Tests */}
            <Card className="bg-gradient-card shadow-soft border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Trophy className="h-5 w-5 text-accent" />
                  Recent Test Results
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {recentTests.map((test, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                      <div>
                        <p className="font-medium text-foreground">{test.name}</p>
                        <p className="text-sm text-muted-foreground">{test.date} • {test.time}</p>
                      </div>
                      <div className="text-right">
                        <span className={`font-bold ${
                          test.score >= 90 ? 'text-success' : 
                          test.score >= 80 ? 'text-accent' : 
                          test.score >= 70 ? 'text-warning' : 'text-destructive'
                        }`}>
                          {test.score}%
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Class Ranking */}
            <Card className="bg-gradient-card shadow-soft border-border">
              <CardHeader>
                <CardTitle className="text-center">Class Ranking</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">#{overallStats.currentRank}</div>
                <div className="text-sm text-muted-foreground mb-4">
                  out of {overallStats.classSize} students
                </div>
                <div className="w-full bg-muted rounded-full h-2 mb-2">
                  <div 
                    className="bg-gradient-primary h-2 rounded-full"
                    style={{ width: `${((overallStats.classSize - overallStats.currentRank) / overallStats.classSize) * 100}%` }}
                  />
                </div>
                <p className="text-xs text-muted-foreground">
                  Top {Math.round(((overallStats.classSize - overallStats.currentRank) / overallStats.classSize) * 100)}% of class
                </p>
              </CardContent>
            </Card>

            {/* Achievements */}
            <Card className="bg-gradient-card shadow-soft border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-accent" />
                  Recent Achievements
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {achievements.map((achievement, index) => {
                    const IconComponent = achievement.icon;
                    return (
                      <div key={index} className="flex items-start gap-3 p-3 bg-muted/30 rounded-lg">
                        <IconComponent className={`h-5 w-5 ${achievement.color} flex-shrink-0 mt-0.5`} />
                        <div>
                          <p className="font-medium text-foreground text-sm">{achievement.title}</p>
                          <p className="text-xs text-muted-foreground">{achievement.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="bg-gradient-card shadow-soft border-border">
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button 
                  className="w-full bg-gradient-secondary text-secondary-foreground hover:opacity-90"
                  onClick={() => navigate("/test")}
                >
                  Take New Test
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                  onClick={() => navigate("/learning-path")}
                >
                  Study Weak Areas
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full border-border"
                >
                  Download Report
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <ChatBot />
    </div>
  );
};

export default Summary;