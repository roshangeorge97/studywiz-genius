import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Clock, BookOpen, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { ChatBot } from "@/components/ChatBot";

const TestTaking = () => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [timeLeft, setTimeLeft] = useState(1800); // 30 minutes

  const questions = [
    {
      id: 1,
      question: "What is the derivative of x² + 3x + 5?",
      options: ["2x + 3", "x² + 3", "2x + 5", "3x + 5"],
      subject: "Mathematics"
    },
    {
      id: 2,
      question: "Which law states that energy cannot be created or destroyed?",
      options: ["Newton's First Law", "Law of Conservation of Energy", "Ohm's Law", "Boyle's Law"],
      subject: "Physics"
    },
    {
      id: 3,
      question: "What is the chemical formula for water?",
      options: ["H2O", "CO2", "NaCl", "CH4"],
      subject: "Chemistry"
    },
    {
      id: 4,
      question: "In which year did World War II end?",
      options: ["1944", "1945", "1946", "1947"],
      subject: "History"
    },
    {
      id: 5,
      question: "What is the square root of 144?",
      options: ["11", "12", "13", "14"],
      subject: "Mathematics"
    }
  ];

  const handleAnswerChange = (questionIndex: number, answer: string) => {
    setAnswers(prev => ({ ...prev, [questionIndex]: answer }));
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
    }
  };

  const handleSubmit = () => {
    // Generate a test ID and navigate to results
    const testId = Date.now().toString();
    navigate(`/test/results/${testId}`);
  };

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;
  const answeredQuestions = Object.keys(answers).length;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-gradient-card shadow-soft border-b border-border">
        <div className="max-w-4xl mx-auto px-6 py-4">
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
                <h1 className="text-2xl font-bold text-foreground">Mathematics Assessment</h1>
                <p className="text-muted-foreground">Mixed Topics Test</p>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2 text-accent">
                <Clock className="h-5 w-5" />
                <span className="font-mono text-lg">{formatTime(timeLeft)}</span>
              </div>
              <div className="flex items-center gap-2 text-primary">
                <BookOpen className="h-5 w-5" />
                <span>{currentQuestion + 1} of {questions.length}</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-6 py-8">
        {/* Progress */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-foreground">Progress</span>
            <span className="text-sm text-muted-foreground">
              {answeredQuestions} of {questions.length} answered
            </span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        {/* Question Card */}
        <Card className="bg-gradient-card shadow-soft border-border mb-8">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg text-foreground">
                Question {currentQuestion + 1}
              </CardTitle>
              <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium">
                {questions[currentQuestion].subject}
              </span>
            </div>
          </CardHeader>
          <CardContent>
            <h2 className="text-xl font-semibold text-foreground mb-6">
              {questions[currentQuestion].question}
            </h2>
            
            <RadioGroup
              value={answers[currentQuestion] || ""}
              onValueChange={(value) => handleAnswerChange(currentQuestion, value)}
            >
              {questions[currentQuestion].options.map((option, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                  <RadioGroupItem
                    value={option}
                    id={`option-${index}`}
                    className="border-accent data-[state=checked]:bg-accent data-[state=checked]:border-accent"
                  />
                  <Label
                    htmlFor={`option-${index}`}
                    className="flex-1 cursor-pointer text-foreground"
                  >
                    {option}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex items-center justify-between">
          <Button
            variant="outline"
            onClick={handlePrevious}
            disabled={currentQuestion === 0}
            className="border-border"
          >
            Previous
          </Button>

          <div className="flex items-center gap-2">
            {answers[currentQuestion] && (
              <CheckCircle className="h-5 w-5 text-success" />
            )}
            <span className="text-sm text-muted-foreground">
              {answers[currentQuestion] ? "Answered" : "Not answered"}
            </span>
          </div>

          {currentQuestion === questions.length - 1 ? (
            <Button
              onClick={handleSubmit}
              className="bg-gradient-primary text-primary-foreground"
              disabled={answeredQuestions < questions.length}
            >
              Submit Test
            </Button>
          ) : (
            <Button
              onClick={handleNext}
              className="bg-accent text-accent-foreground"
            >
              Next
            </Button>
          )}
        </div>

        {/* Question Navigation */}
        <Card className="mt-8 bg-gradient-card shadow-soft border-border">
          <CardHeader>
            <CardTitle className="text-lg text-foreground">Question Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-5 gap-2">
              {questions.map((_, index) => (
                <Button
                  key={index}
                  variant={currentQuestion === index ? "default" : "outline"}
                  size="sm"
                  onClick={() => setCurrentQuestion(index)}
                  className={`relative ${
                    answers[index] 
                      ? "border-success bg-success/10 text-success hover:bg-success/20" 
                      : "border-border"
                  } ${currentQuestion === index ? "bg-primary text-primary-foreground" : ""}`}
                >
                  {index + 1}
                  {answers[index] && (
                    <CheckCircle className="absolute -top-1 -right-1 h-3 w-3 text-success" />
                  )}
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <ChatBot />
    </div>
  );
};

export default TestTaking;