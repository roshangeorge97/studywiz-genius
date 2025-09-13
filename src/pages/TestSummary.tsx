import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, Trophy, TrendingUp, Target, BarChart3, Users, BookOpen, Brain } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { ChatBot } from "@/components/ChatBot";

const TestSummary = () => {
  const navigate = useNavigate();
  const { testId } = useParams();

  // Mock test data based on testId
  const testData = {
    name: "NEET Mock Test #12",
    date: "March 15, 2024",
    duration: "3h 0m",
    totalQuestions: 180,
    attemptedQuestions: 175,
    correctAnswers: 156,
    totalMarks: 720,
    scoredMarks: 624,
    percentage: 87,
    rank: 5,
    totalStudents: 45
  };

  const subjectWisePerformance = [
    {
      subject: "Physics",
      totalQuestions: 45,
      attempted: 43,
      correct: 38,
      marks: 152,
      totalMarks: 180,
      percentage: 84,
      rank: 7,
      color: "text-accent"
    },
    {
      subject: "Chemistry", 
      totalQuestions: 45,
      attempted: 44,
      correct: 41,
      marks: 164,
      totalMarks: 180,
      percentage: 91,
      rank: 3,
      color: "text-success"
    },
    {
      subject: "Biology",
      totalQuestions: 90,
      attempted: 88,
      correct: 77,
      marks: 308,
      totalMarks: 360,
      percentage: 86,
      rank: 6,
      color: "text-secondary"
    }
  ];

  const strongTopics = [
    { topic: "Organic Chemistry", subject: "Chemistry", score: 95, questionsAttempted: 12 },
    { topic: "Human Physiology", subject: "Biology", score: 92, questionsAttempted: 15 },
    { topic: "Electromagnetism", subject: "Physics", score: 89, questionsAttempted: 8 },
    { topic: "Plant Kingdom", subject: "Biology", score: 88, questionsAttempted: 10 }
  ];

  const weakTopics = [
    { topic: "Thermodynamics", subject: "Physics", score: 58, questionsAttempted: 7 },
    { topic: "Coordination Chemistry", subject: "Chemistry", score: 62, questionsAttempted: 6 },
    { topic: "Genetics", subject: "Biology", score: 65, questionsAttempted: 9 },
    { topic: "Atomic Structure", subject: "Chemistry", score: 68, questionsAttempted: 5 }
  ];

  const timeAnalysis = [
    { subject: "Physics", timeSpent: "58m", avgTimePerQ: "1.3m", efficiency: "Good" },
    { subject: "Chemistry", timeSpent: "52m", avgTimePerQ: "1.2m", efficiency: "Excellent" },
    { subject: "Biology", timeSpent: "70m", avgTimePerQ: "0.8m", efficiency: "Good" }
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
                onClick={() => navigate("/analytics")}
                className="hover:bg-muted"
              >
                <ArrowLeft className="h-5 w-5" />
              </Button>
              <div>
                <h1 className="text-2xl font-bold text-foreground">{testData.name}</h1>
                <p className="text-muted-foreground">Detailed performance analysis • {testData.date}</p>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="text-center">
                <p className="text-3xl font-bold text-accent">{testData.percentage}%</p>
                <p className="text-sm text-muted-foreground">Score</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-primary">#{testData.rank}</p>
                <p className="text-sm text-muted-foreground">Rank</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Test Overview */}
        <div className="grid md:grid-cols-5 gap-6 mb-8">
          <Card className="bg-gradient-card shadow-soft border-border">
            <CardContent className="p-6 text-center">
              <Trophy className="h-8 w-8 text-accent mx-auto mb-2" />
              <div className="text-2xl font-bold text-foreground mb-1">{testData.scoredMarks}</div>
              <div className="text-sm text-muted-foreground">Total Marks</div>
              <div className="text-xs text-muted-foreground">out of {testData.totalMarks}</div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card shadow-soft border-border">
            <CardContent className="p-6 text-center">
              <BarChart3 className="h-8 w-8 text-secondary mx-auto mb-2" />
              <div className="text-2xl font-bold text-foreground mb-1">{testData.correctAnswers}</div>
              <div className="text-sm text-muted-foreground">Correct</div>
              <div className="text-xs text-muted-foreground">out of {testData.attemptedQuestions}</div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card shadow-soft border-border">
            <CardContent className="p-6 text-center">
              <Users className="h-8 w-8 text-success mx-auto mb-2" />
              <div className="text-2xl font-bold text-foreground mb-1">#{testData.rank}</div>
              <div className="text-sm text-muted-foreground">Rank</div>
              <div className="text-xs text-muted-foreground">out of {testData.totalStudents}</div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card shadow-soft border-border">
            <CardContent className="p-6 text-center">
              <BookOpen className="h-8 w-8 text-warning mx-auto mb-2" />
              <div className="text-2xl font-bold text-foreground mb-1">{testData.attemptedQuestions}</div>
              <div className="text-sm text-muted-foreground">Attempted</div>
              <div className="text-xs text-muted-foreground">out of {testData.totalQuestions}</div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card shadow-soft border-border">
            <CardContent className="p-6 text-center">
              <div className="text-2xl font-bold text-foreground mb-1">{testData.duration}</div>
              <div className="text-sm text-muted-foreground">Duration</div>
              <div className="text-xs text-muted-foreground">Time Taken</div>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Subject Performance */}
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
                  {subjectWisePerformance.map((subject, index) => (
                    <div key={index} className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <span className="font-semibold text-foreground">{subject.subject}</span>
                          <Badge variant="outline" className="border-border">
                            Rank #{subject.rank}
                          </Badge>
                        </div>
                        <div className="text-right">
                          <span className={`font-bold ${subject.color}`}>{subject.percentage}%</span>
                          <div className="text-xs text-muted-foreground">
                            {subject.marks}/{subject.totalMarks} marks
                          </div>
                        </div>
                      </div>
                      <Progress value={subject.percentage} className="h-2" />
                      <div className="flex justify-between text-xs text-muted-foreground">
                        <span>Attempted: {subject.attempted}/{subject.totalQuestions}</span>
                        <span>Correct: {subject.correct}/{subject.attempted}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Time Analysis */}
            <Card className="bg-gradient-card shadow-soft border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-5 w-5 text-accent" />
                  Time Analysis
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {timeAnalysis.map((analysis, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                      <div>
                        <p className="font-medium text-foreground">{analysis.subject}</p>
                        <p className="text-sm text-muted-foreground">Avg: {analysis.avgTimePerQ} per question</p>
                      </div>
                      <div className="text-right">
                        <span className="font-bold text-foreground">{analysis.timeSpent}</span>
                        <div className={`text-xs ${
                          analysis.efficiency === 'Excellent' ? 'text-success' :
                          analysis.efficiency === 'Good' ? 'text-accent' : 'text-warning'
                        }`}>
                          {analysis.efficiency}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Strong Topics */}
            <Card className="bg-gradient-card shadow-soft border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Trophy className="h-5 w-5 text-success" />
                  Strong Topics
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {strongTopics.map((topic, index) => (
                    <div key={index} className="p-2 bg-success/10 rounded-lg">
                      <div className="flex items-center justify-between mb-1">
                        <p className="font-medium text-foreground text-sm">{topic.topic}</p>
                        <span className="font-bold text-success text-sm">{topic.score}%</span>
                      </div>
                      <div className="flex justify-between text-xs text-muted-foreground">
                        <span>{topic.subject}</span>
                        <span>{topic.questionsAttempted} questions</span>
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
                  Areas to Improve
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {weakTopics.map((topic, index) => (
                    <div key={index} className="p-2 bg-warning/10 rounded-lg">
                      <div className="flex items-center justify-between mb-1">
                        <p className="font-medium text-foreground text-sm">{topic.topic}</p>
                        <span className="font-bold text-warning text-sm">{topic.score}%</span>
                      </div>
                      <div className="flex justify-between text-xs text-muted-foreground">
                        <span>{topic.subject}</span>
                        <span>{topic.questionsAttempted} questions</span>
                      </div>
                    </div>
                  ))}
                </div>
                <Button 
                  className="w-full mt-4 bg-gradient-secondary text-secondary-foreground"
                  onClick={() => navigate("/learning-path?mode=grind")}
                >
                  <Brain className="h-4 w-4 mr-2" />
                  Focus Study on Weak Topics
                </Button>
              </CardContent>
            </Card>

            {/* Actions */}
            <Card className="bg-gradient-card shadow-soft border-border">
              <CardHeader>
                <CardTitle>Next Steps</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button 
                  className="w-full bg-gradient-primary text-primary-foreground"
                  onClick={() => navigate("/learning-path")}
                >
                  <TrendingUp className="h-4 w-4 mr-2" />
                  Improve Performance
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