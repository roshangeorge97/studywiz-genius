import { useNavigate } from "react-router-dom";
import { ArrowLeft, TrendingUp, Trophy, Target, Calendar, Award, BarChart3, Clock, BookOpen, Brain, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { ChatBot } from "@/components/ChatBot";

const StudentAnalytics = () => {
  const navigate = useNavigate();

  const overallStats = {
    testsCompleted: 18,
    studyTime: "84h 20m",
    currentRank: 7,
    classSize: 45,
    improvement: "+18%",
    streak: 12,
    averageScore: 88
  };

  const strongTopics = [
    { topic: "Organic Chemistry", score: 94, subject: "Chemistry" },
    { topic: "Human Physiology", score: 91, subject: "Biology" },
    { topic: "Electrostatics", score: 89, subject: "Physics" },
    { topic: "Cell Division", score: 87, subject: "Biology" }
  ];

  const weakTopics = [
    { topic: "Thermodynamics", score: 62, subject: "Physics" },
    { topic: "Coordination Compounds", score: 65, subject: "Chemistry" },
    { topic: "Plant Physiology", score: 68, subject: "Biology" },
    { topic: "Atomic Structure", score: 71, subject: "Chemistry" }
  ];

  const recentTests = [
    { 
      name: "NEET Mock Test #12", 
      score: 92, 
      date: "2024-03-15", 
      rank: 5,
      totalStudents: 45,
      subjects: { Biology: 94, Chemistry: 89, Physics: 93 }
    },
    { 
      name: "Biology Chapter Test", 
      score: 78, 
      date: "2024-03-14", 
      rank: 12,
      totalStudents: 45,
      subjects: { Biology: 78 }
    },
    { 
      name: "Chemistry Quiz #8", 
      score: 85, 
      date: "2024-03-13", 
      rank: 8,
      totalStudents: 45,
      subjects: { Chemistry: 85 }
    }
  ];

  const progressData = [
    { month: "Nov", score: 72 },
    { month: "Dec", score: 78 },
    { month: "Jan", score: 81 },
    { month: "Feb", score: 85 },
    { month: "Mar", score: 88 }
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
                <h1 className="text-2xl font-bold text-foreground">Student Analytics</h1>
                <p className="text-muted-foreground">Your complete academic performance overview</p>
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
              <div className="text-sm text-muted-foreground">Tests Taken</div>
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
              <div className="text-2xl font-bold text-foreground mb-1">{overallStats.streak}</div>
              <div className="text-sm text-muted-foreground">Day Streak</div>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Analytics */}
          <div className="lg:col-span-2 space-y-6">
            {/* Progress Tracker */}
            <Card className="bg-gradient-card shadow-soft border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-accent" />
                  Progress Tracker
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-end h-40 gap-2">
                  {progressData.map((month, index) => (
                    <div key={index} className="flex flex-col items-center gap-2 flex-1">
                      <div className="text-xs font-medium text-foreground">{month.score}%</div>
                      <div 
                        className="bg-gradient-secondary rounded-t-sm w-full min-h-2 transition-all duration-300"
                        style={{ height: `${(month.score / 100) * 120}px` }}
                      />
                      <span className="text-xs text-muted-foreground">{month.month}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Strong Topics */}
            <Card className="bg-gradient-card shadow-soft border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Trophy className="h-5 w-5 text-success" />
                  Strong Topics
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {strongTopics.map((topic, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 bg-success rounded-full"></div>
                        <div>
                          <p className="font-medium text-foreground">{topic.topic}</p>
                          <p className="text-sm text-muted-foreground">{topic.subject}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="font-bold text-success">{topic.score}%</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Weak Topics */}
            <Card className="bg-gradient-card shadow-soft border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-5 w-5 text-warning" />
                  Areas for Improvement
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {weakTopics.map((topic, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 bg-warning rounded-full"></div>
                        <div>
                          <p className="font-medium text-foreground">{topic.topic}</p>
                          <p className="text-sm text-muted-foreground">{topic.subject}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="font-bold text-warning">{topic.score}%</span>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4">
                  <Button 
                    className="w-full bg-gradient-secondary text-secondary-foreground"
                    onClick={() => navigate("/learning-path")}
                  >
                    <Brain className="h-4 w-4 mr-2" />
                    Start Focused Study
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Class Ranking */}
            <Card className="bg-gradient-card shadow-soft border-border">
              <CardHeader>
                <CardTitle className="text-center flex items-center justify-center gap-2">
                  <Users className="h-5 w-5" />
                  Class Ranking
                </CardTitle>
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

            {/* Recent Tests */}
            <Card className="bg-gradient-card shadow-soft border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-accent" />
                  Recent Tests
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {recentTests.map((test, index) => (
                    <div 
                      key={index} 
                      className="p-3 bg-muted/30 rounded-lg cursor-pointer hover:bg-muted/50 transition-colors"
                      onClick={() => navigate(`/test/results/${test.name.replace(/\s+/g, '-').toLowerCase()}`)}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <p className="font-medium text-foreground text-sm">{test.name}</p>
                        <Badge variant="outline" className="text-xs">
                          Rank #{test.rank}
                        </Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <p className="text-xs text-muted-foreground">{test.date}</p>
                        <span className={`font-bold text-sm ${
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
                <Button 
                  variant="outline" 
                  className="w-full mt-4 border-border"
                  onClick={() => navigate("/test")}
                >
                  Take New Test
                </Button>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="bg-gradient-card shadow-soft border-border">
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button 
                  className="w-full bg-gradient-primary text-primary-foreground"
                  onClick={() => navigate("/learning-path")}
                >
                  <Brain className="h-4 w-4 mr-2" />
                  Study Weak Topics
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                  onClick={() => navigate("/test")}
                >
                  <BookOpen className="h-4 w-4 mr-2" />
                  Practice Test
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

export default StudentAnalytics;