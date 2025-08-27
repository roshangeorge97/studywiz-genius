import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, Trophy, TrendingUp, Target, Brain, CheckCircle, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { ChatBot } from "@/components/ChatBot";

const TestResults = () => {
  const navigate = useNavigate();
  const { testId } = useParams();

  // Mock results data - in real app this would be fetched based on testId
  const results = {
    score: 85,
    totalQuestions: 5,
    correctAnswers: 4,
    timeSpent: "18:45",
    subject: "Mathematics Assessment",
    rank: 12,
    classSize: 45,
    improvement: "+5%"
  };

  const questionResults = [
    {
      question: "What is the derivative of x² + 3x + 5?",
      userAnswer: "2x + 3",
      correctAnswer: "2x + 3",
      isCorrect: true,
      concept: "Derivatives",
      difficulty: "Medium"
    },
    {
      question: "Which law states that energy cannot be created or destroyed?",
      userAnswer: "Law of Conservation of Energy",
      correctAnswer: "Law of Conservation of Energy",
      isCorrect: true,
      concept: "Energy Conservation",
      difficulty: "Easy"
    },
    {
      question: "What is the chemical formula for water?",
      userAnswer: "CO2",
      correctAnswer: "H2O",
      isCorrect: false,
      concept: "Chemical Formulas",
      difficulty: "Easy"
    },
    {
      question: "In which year did World War II end?",
      userAnswer: "1945",
      correctAnswer: "1945",
      isCorrect: true,
      concept: "World History",
      difficulty: "Medium"
    },
    {
      question: "What is the square root of 144?",
      userAnswer: "12",
      correctAnswer: "12",
      isCorrect: true,
      concept: "Square Roots",
      difficulty: "Easy"
    }
  ];

  const weakConcepts = questionResults
    .filter(q => !q.isCorrect)
    .map(q => q.concept);

  const strengths = questionResults
    .filter(q => q.isCorrect)
    .map(q => q.concept);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-gradient-card shadow-soft border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-6">
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
                <h1 className="text-2xl font-bold text-foreground">Test Results</h1>
                <p className="text-muted-foreground">{results.subject}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Trophy className="h-8 w-8 text-accent" />
              <div className="text-right">
                <p className="text-3xl font-bold text-accent">{results.score}%</p>
                <p className="text-sm text-muted-foreground">Your Score</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-6 py-8">
        {/* Score Overview */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gradient-card shadow-soft border-border">
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-success mb-2">{results.correctAnswers}</div>
              <div className="text-sm text-muted-foreground">Correct Answers</div>
              <div className="text-xs text-muted-foreground">out of {results.totalQuestions}</div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card shadow-soft border-border">
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-primary mb-2">#{results.rank}</div>
              <div className="text-sm text-muted-foreground">Class Rank</div>
              <div className="text-xs text-muted-foreground">out of {results.classSize}</div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card shadow-soft border-border">
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-accent mb-2">{results.timeSpent}</div>
              <div className="text-sm text-muted-foreground">Time Spent</div>
              <div className="text-xs text-muted-foreground">out of 30:00</div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card shadow-soft border-border">
            <CardContent className="p-6 text-center">
              <div className="flex items-center justify-center gap-1 mb-2">
                <TrendingUp className="h-5 w-5 text-success" />
                <div className="text-3xl font-bold text-success">{results.improvement}</div>
              </div>
              <div className="text-sm text-muted-foreground">Improvement</div>
              <div className="text-xs text-muted-foreground">from last test</div>
            </CardContent>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Detailed Results */}
          <div className="space-y-6">
            <Card className="bg-gradient-card shadow-soft border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-5 w-5 text-accent" />
                  Question Analysis
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {questionResults.map((result, index) => (
                    <div key={index} className="p-4 border border-border rounded-lg">
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex items-center gap-2">
                          {result.isCorrect ? (
                            <CheckCircle className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                          ) : (
                            <XCircle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                          )}
                          <span className="font-medium text-sm">Question {index + 1}</span>
                        </div>
                        <Badge variant={result.difficulty === "Easy" ? "secondary" : result.difficulty === "Medium" ? "default" : "destructive"}>
                          {result.difficulty}
                        </Badge>
                      </div>
                      
                      <p className="text-sm text-foreground mb-2">{result.question}</p>
                      
                      <div className="space-y-1 text-xs">
                        <div className="flex items-center gap-2">
                          <span className="text-muted-foreground">Your answer:</span>
                          <span className={result.isCorrect ? "text-success" : "text-destructive"}>
                            {result.userAnswer}
                          </span>
                        </div>
                        {!result.isCorrect && (
                          <div className="flex items-center gap-2">
                            <span className="text-muted-foreground">Correct answer:</span>
                            <span className="text-success">{result.correctAnswer}</span>
                          </div>
                        )}
                        <div className="flex items-center gap-2">
                          <span className="text-muted-foreground">Concept:</span>
                          <span className="text-accent">{result.concept}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* AI Analysis */}
          <div className="space-y-6">
            <Card className="bg-gradient-card shadow-soft border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Brain className="h-5 w-5 text-accent" />
                  AI Performance Analysis
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {/* Strengths */}
                  <div>
                    <h4 className="font-semibold text-success mb-3 flex items-center gap-2">
                      <CheckCircle className="h-4 w-4" />
                      Your Strengths
                    </h4>
                    <div className="space-y-2">
                      {strengths.map((strength, index) => (
                        <div key={index} className="flex items-center justify-between p-2 bg-success/10 rounded-lg">
                          <span className="text-sm text-foreground">{strength}</span>
                          <Badge variant="secondary" className="bg-success/20 text-success">
                            Strong
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Weaknesses */}
                  {weakConcepts.length > 0 && (
                    <div>
                      <h4 className="font-semibold text-destructive mb-3 flex items-center gap-2">
                        <XCircle className="h-4 w-4" />
                        Areas to Improve
                      </h4>
                      <div className="space-y-2">
                        {weakConcepts.map((concept, index) => (
                          <div key={index} className="flex items-center justify-between p-2 bg-destructive/10 rounded-lg">
                            <span className="text-sm text-foreground">{concept}</span>
                            <Badge variant="destructive" className="bg-destructive/20">
                              Review Needed
                            </Badge>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Recommendations */}
                  <div>
                    <h4 className="font-semibold text-accent mb-3">AI Recommendations</h4>
                    <div className="space-y-3 text-sm text-muted-foreground">
                      <p>• Focus on chemical formulas in your next study session</p>
                      <p>• You're performing well in mathematical concepts - keep it up!</p>
                      <p>• Try practicing more chemistry problems to improve accuracy</p>
                      <p>• Your problem-solving speed is excellent</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Action Buttons */}
            <div className="space-y-3">
              <Button 
                className="w-full bg-gradient-secondary text-secondary-foreground hover:opacity-90"
                onClick={() => navigate("/learning-path")}
              >
                Start Personalized Learning Path
              </Button>
              <Button 
                variant="outline" 
                className="w-full border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                onClick={() => navigate("/test")}
              >
                Take Another Test
              </Button>
              <Button 
                variant="outline" 
                className="w-full border-border"
                onClick={() => navigate("/summary")}
              >
                View Full Analytics
              </Button>
            </div>
          </div>
        </div>
      </div>

      <ChatBot />
    </div>
  );
};

export default TestResults;