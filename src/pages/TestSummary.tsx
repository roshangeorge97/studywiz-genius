import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, Trophy, Target, TrendingUp, BarChart3, Clock, BookOpen, Award, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { ChatBot } from "@/components/ChatBot";

const TestSummary = () => {
  const navigate = useNavigate();
  const { testId } = useParams();

  // Mock data for test results
  const testResults = {
    testName: "NEET Mock Test #12",
    date: "March 15, 2024",
    totalMarks: 720,
    obtainedMarks: 648,
    percentage: 90,
    rank: 5,
    totalStudents: 45,
    timeTaken: "2h 45m",
    correctAnswers: 162,
    incorrectAnswers: 8,
    unattempted: 0,
    subjects: {
      Biology: {
        total: 90,
        correct: 85,
        incorrect: 5,
        marks: 340,
        percentage: 94.4,
        strongTopics: ["Human Physiology", "Cell Division", "Genetics"],
        weakTopics: ["Plant Physiology", "Ecology"]
      },
      Chemistry: {
        total: 90,
        correct: 78,
        incorrect: 12,
        marks: 304,
        percentage: 84.4,
        strongTopics: ["Organic Chemistry", "Chemical Bonding"],
        weakTopics: ["Coordination Chemistry", "Thermodynamics"]
      },
      Physics: {
        total: 90,
        correct: 79,
        incorrect: 11,
        marks: 316,
        percentage: 87.8,
        strongTopics: ["Mechanics", "Electrostatics"],
        weakTopics: ["Modern Physics", "Optics"]
      }
    },
    overallAnalysis: {
      strongTopics: [
        { topic: "Human Physiology", subject: "Biology", score: 95 },
        { topic: "Organic Chemistry", subject: "Chemistry", score: 92 },
        { topic: "Mechanics", subject: "Physics", score: 89 }
      ],
      weakTopics: [
        { topic: "Plant Physiology", subject: "Biology", score: 65 },
        { topic: "Coordination Chemistry", subject: "Chemistry", score: 68 },
        { topic: "Modern Physics", subject: "Physics", score: 72 }
      ]
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 90) return "text-success";
    if (score >= 80) return "text-accent";
    if (score >= 70) return "text-warning";
    return "text-destructive";
  };

  const getScoreBgColor = (score: number) => {
    if (score >= 90) return "bg-success/10";
    if (score >= 80) return "bg-accent/10";
    if (score >= 70) return "bg-warning/10";
    return "bg-destructive/10";
  };

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
                onClick={() => navigate("/analytics")}
                className="hover:bg-muted"
              >
                <ArrowLeft className="h-5 w-5" />
              </Button>
              <div>
                <h1 className="text-2xl font-bold text-foreground">Test Summary</h1>
                <p className="text-muted-foreground">{testResults.testName} • {testResults.date}</p>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="text-center">
                <p className="text-3xl font-bold text-accent">{testResults.percentage}%</p>
                <p className="text-sm text-muted-foreground">Overall Score</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-primary">#{testResults.rank}</p>
                <p className="text-sm text-muted-foreground">Rank</p>
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
              <Trophy className="h-8 w-8 text-accent mx-auto mb-2" />
              <div className="text-2xl font-bold text-foreground mb-1">{testResults.obtainedMarks}</div>
              <div className="text-sm text-muted-foreground">Marks Obtained</div>
              <div className="text-xs text-muted-foreground">out of {testResults.totalMarks}</div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card shadow-soft border-border">
            <CardContent className="p-6 text-center">
              <BarChart3 className="h-8 w-8 text-success mx-auto mb-2" />
              <div className="text-2xl font-bold text-foreground mb-1">{testResults.correctAnswers}</div>
              <div className="text-sm text-muted-foreground">Correct Answers</div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card shadow-soft border-border">
            <CardContent className="p-6 text-center">
              <AlertTriangle className="h-8 w-8 text-warning mx-auto mb-2" />
              <div className="text-2xl font-bold text-foreground mb-1">{testResults.incorrectAnswers}</div>
              <div className="text-sm text-muted-foreground">Incorrect Answers</div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card shadow-soft border-border">
            <CardContent className="p-6 text-center">
              <Clock className="h-8 w-8 text-secondary mx-auto mb-2" />
              <div className="text-2xl font-bold text-foreground mb-1">{testResults.timeTaken}</div>
              <div className="text-sm text-muted-foreground">Time Taken</div>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Subject-wise Performance */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="bg-gradient-card shadow-soft border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="h-5 w-5 text-accent" />
                  Subject-wise Performance
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {Object.entries(testResults.subjects).map(([subject, data]) => (
                    <div key={subject} className="p-4 rounded-lg border bg-muted/20">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg font-semibold text-foreground">{subject}</h3>
                        <div className="text-right">
                          <div className={`text-2xl font-bold ${getScoreColor(data.percentage)}`}>
                            {data.percentage}%
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {data.marks}/{subject === 'Biology' ? 360 : subject === 'Chemistry' ? 180 : 180} marks
                          </div>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-3 gap-4 mb-4">
                        <div className="text-center p-3 bg-success/10 rounded-lg">
                          <p className="text-lg font-bold text-success">{data.correct}</p>
                          <p className="text-xs text-muted-foreground">Correct</p>
                        </div>
                        <div className="text-center p-3 bg-destructive/10 rounded-lg">
                          <p className="text-lg font-bold text-destructive">{data.incorrect}</p>
                          <p className="text-xs text-muted-foreground">Incorrect</p>
                        </div>
                        <div className="text-center p-3 bg-muted/30 rounded-lg">
                          <p className="text-lg font-bold text-foreground">{data.total - data.correct - data.incorrect}</p>
                          <p className="text-xs text-muted-foreground">Unattempted</p>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <div>
                          <p className="text-sm font-medium text-success mb-2">Strong Topics</p>
                          <div className="flex flex-wrap gap-2">
                            {data.strongTopics.map((topic, index) => (
                              <Badge key={index} variant="outline" className="text-success border-success">
                                {topic}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-warning mb-2">Weak Topics</p>
                          <div className="flex flex-wrap gap-2">
                            {data.weakTopics.map((topic, index) => (
                              <Badge key={index} variant="outline" className="text-warning border-warning">
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

            {/* Overall Analysis */}
            <Card className="bg-gradient-card shadow-soft border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-accent" />
                  Overall Analysis
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-success mb-3">Strong Topics</h4>
                    <div className="space-y-2">
                      {testResults.overallAnalysis.strongTopics.map((topic, index) => (
                        <div key={index} className="flex items-center justify-between p-2 bg-success/10 rounded">
                          <div>
                            <p className="font-medium text-foreground">{topic.topic}</p>
                            <p className="text-sm text-muted-foreground">{topic.subject}</p>
                          </div>
                          <span className="font-bold text-success">{topic.score}%</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-warning mb-3">Areas for Improvement</h4>
                    <div className="space-y-2">
                      {testResults.overallAnalysis.weakTopics.map((topic, index) => (
                        <div key={index} className="flex items-center justify-between p-2 bg-warning/10 rounded">
                          <div>
                            <p className="font-medium text-foreground">{topic.topic}</p>
                            <p className="text-sm text-muted-foreground">{topic.subject}</p>
                          </div>
                          <span className="font-bold text-warning">{topic.score}%</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Rank Card */}
            <Card className="bg-gradient-card shadow-soft border-border">
              <CardHeader>
                <CardTitle className="text-center flex items-center justify-center gap-2">
                  <Award className="h-5 w-5" />
                  Test Ranking
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">#{testResults.rank}</div>
                <div className="text-sm text-muted-foreground mb-4">
                  out of {testResults.totalStudents} students
                </div>
                <div className="w-full bg-muted rounded-full h-2 mb-2">
                  <div 
                    className="bg-gradient-primary h-2 rounded-full"
                    style={{ width: `${((testResults.totalStudents - testResults.rank) / testResults.totalStudents) * 100}%` }}
                  />
                </div>
                <p className="text-xs text-muted-foreground">
                  Top {Math.round(((testResults.totalStudents - testResults.rank) / testResults.totalStudents) * 100)}% of class
                </p>
              </CardContent>
            </Card>

            {/* Performance Insights */}
            <Card className="bg-gradient-card shadow-soft border-border">
              <CardHeader>
                <CardTitle>Performance Insights</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-3 bg-success/10 rounded-lg">
                  <p className="text-sm font-medium text-success">Excellent Performance</p>
                  <p className="text-xs text-muted-foreground">You scored above 90% in Biology</p>
                </div>
                <div className="p-3 bg-warning/10 rounded-lg">
                  <p className="text-sm font-medium text-warning">Needs Attention</p>
                  <p className="text-xs text-muted-foreground">Focus on weak topics for improvement</p>
                </div>
                <div className="p-3 bg-accent/10 rounded-lg">
                  <p className="text-sm font-medium text-accent">Time Management</p>
                  <p className="text-xs text-muted-foreground">Good pace, completed all questions</p>
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
                  className="w-full bg-gradient-primary text-primary-foreground"
                  onClick={() => navigate("/learning-path?mode=grind")}
                >
                  <Target className="h-4 w-4 mr-2" />
                  Study Weak Topics
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                  onClick={() => navigate("/test")}
                >
                  <BookOpen className="h-4 w-4 mr-2" />
                  Take Another Test
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full border-border"
                  onClick={() => navigate("/analytics")}
                >
                  <BarChart3 className="h-4 w-4 mr-2" />
                  View All Analytics
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

export default TestSummary;