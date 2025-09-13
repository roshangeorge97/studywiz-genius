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
      question: "Which of the following is the correct structure of glucose?",
      options: ["C6H12O6 with aldehyde group", "C6H12O6 with ketone group", "C5H10O5 with aldehyde group", "C6H10O5 with ketone group"],
      subject: "Biology",
      section: "Biomolecules",
      hasImage: true,
      imageDescription: "Structural formula showing glucose with -CHO group"
    },
    {
      id: 2,
      question: "In mitosis, which phase is characterized by the alignment of chromosomes at the cell's equator?",
      options: ["Prophase", "Metaphase", "Anaphase", "Telophase"],
      subject: "Biology",
      section: "Cell Division"
    },
    {
      id: 3,
      question: "Which reaction shows nucleophilic substitution mechanism (SN2)?",
      options: ["Primary alkyl halide + OH⁻", "Tertiary alkyl halide + OH⁻", "Alkyl halide + H₂O", "Aromatic halide + NH₃"],
      subject: "Chemistry",
      section: "Organic Chemistry",
      hasImage: true,
      imageDescription: "Mechanism showing backside attack of nucleophile on carbon center"
    },
    {
      id: 4,
      question: "What is the IUPAC name of the compound CH₃-CH(CH₃)-CH₂-CH₃?",
      options: ["2-methylbutane", "3-methylbutane", "Isopentane", "2-methylpropane"],
      subject: "Chemistry",
      section: "Organic Chemistry"
    },
    {
      id: 5,
      question: "The oxidation state of manganese in KMnO₄ is:",
      options: ["+7", "+6", "+5", "+4"],
      subject: "Chemistry",
      section: "Redox Reactions"
    },
    {
      id: 6,
      question: "Two charges +q and -q are placed at distance 2a. The electric field at the midpoint is:",
      options: ["Zero", "kq/a²", "2kq/a²", "4kq/a²"],
      subject: "Physics",
      section: "Electrostatics"
    },
    {
      id: 7,
      question: "A particle moves in a circle of radius R with constant speed v. Its acceleration is:",
      options: ["v²/R towards center", "v²/R tangential", "vR towards center", "Zero"],
      subject: "Physics",
      section: "Circular Motion"
    },
    {
      id: 8,
      question: "Which of the following has the highest frequency?",
      options: ["X-rays", "Visible light", "Radio waves", "Microwaves"],
      subject: "Physics",
      section: "Electromagnetic Waves"
    },
    {
      id: 9,
      question: "In humans, which hormone regulates blood glucose levels?",
      options: ["Insulin", "Thyroxine", "Adrenaline", "Growth hormone"],
      subject: "Biology",
      section: "Human Physiology"
    },
    {
      id: 10,
      question: "The structure of benzene shows:",
      options: ["Resonance", "Tautomerism", "Geometric isomerism", "Optical isomerism"],
      subject: "Chemistry",
      section: "Aromatic Compounds",
      hasImage: true,
      imageDescription: "Benzene ring with delocalized π electrons"
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
              <h1 className="text-2xl font-bold text-foreground">NEET Practice Test</h1>
              <p className="text-muted-foreground">Biology • Chemistry • Physics</p>
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
              <div className="flex gap-2">
                <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium">
                  {questions[currentQuestion].subject}
                </span>
                <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm font-medium">
                  {questions[currentQuestion].section}
                </span>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-foreground mb-4">
                {questions[currentQuestion].question}
              </h2>
              
              {questions[currentQuestion].hasImage && (
                <div className="bg-muted/30 border-2 border-dashed border-accent/30 rounded-lg p-4 mb-4 text-center">
                  <div className="text-accent mb-2">🧪 Chemical Structure Image</div>
                  <p className="text-sm text-muted-foreground italic">
                    {questions[currentQuestion].imageDescription}
                  </p>
                </div>
              )}
            </div>
            
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