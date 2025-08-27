import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Brain, BookOpen, RotateCcw, CheckCircle, Star, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChatBot } from "@/components/ChatBot";

const LearningPath = () => {
  const navigate = useNavigate();
  const [currentCard, setCurrentCard] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [masteredCards, setMasteredCards] = useState<number[]>([]);

  const flashcards = [
    {
      id: 1,
      concept: "Chemical Formulas",
      difficulty: "Easy",
      front: "What is the chemical formula for water?",
      back: "H2O - Two hydrogen atoms bonded to one oxygen atom",
      subject: "Chemistry",
      explanation: "Water is a simple molecule consisting of two hydrogen atoms covalently bonded to a single oxygen atom. The molecular geometry is bent due to the lone pairs on oxygen."
    },
    {
      id: 2,
      concept: "Derivatives",
      difficulty: "Medium",
      front: "What is the derivative of x³?",
      back: "3x² - Using the power rule: d/dx(xⁿ) = n·xⁿ⁻¹",
      subject: "Mathematics",
      explanation: "The power rule is one of the fundamental rules of differentiation. For any term xⁿ, the derivative is n times x raised to the power of (n-1)."
    },
    {
      id: 3,
      concept: "World History",
      difficulty: "Medium",
      front: "When did World War II begin?",
      back: "September 1, 1939 - Germany invaded Poland",
      subject: "History",
      explanation: "World War II officially began when Germany invaded Poland on September 1, 1939. Britain and France declared war on Germany two days later."
    },
    {
      id: 4,
      concept: "Physics Laws",
      difficulty: "Hard",
      front: "State Newton's Second Law of Motion",
      back: "F = ma - Force equals mass times acceleration",
      subject: "Physics",
      explanation: "Newton's second law describes the relationship between force, mass, and acceleration. It's fundamental to understanding motion and dynamics in physics."
    }
  ];

  const notes = [
    {
      title: "Chemical Bonding Fundamentals",
      subject: "Chemistry",
      instructor: "Dr. Sarah Johnson",
      date: "2024-03-15",
      content: "Understanding ionic and covalent bonds is crucial for chemistry success...",
      priority: "High"
    },
    {
      title: "Calculus Applications",
      subject: "Mathematics", 
      instructor: "Prof. Michael Chen",
      date: "2024-03-14",
      content: "Derivatives have practical applications in optimization problems...",
      priority: "Medium"
    },
    {
      title: "WWII Timeline Review",
      subject: "History",
      instructor: "Dr. Emily Davis",
      date: "2024-03-13",
      content: "Key events and dates from 1939-1945 that shaped world history...",
      priority: "Low"
    }
  ];

  const handleCardAction = (action: 'easy' | 'medium' | 'hard') => {
    if (action === 'easy') {
      setMasteredCards(prev => [...prev, currentCard]);
    }
    
    setIsFlipped(false);
    if (currentCard < flashcards.length - 1) {
      setCurrentCard(prev => prev + 1);
    } else {
      setCurrentCard(0);
    }
  };

  const currentFlashcard = flashcards[currentCard];
  const progress = (masteredCards.length / flashcards.length) * 100;

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
                <h1 className="text-2xl font-bold text-foreground">Learning Path</h1>
                <p className="text-muted-foreground">Personalized study materials based on your performance</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-right">
                <p className="text-2xl font-bold text-accent">{masteredCards.length}</p>
                <p className="text-sm text-muted-foreground">Cards Mastered</p>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-secondary">{Math.round(progress)}%</p>
                <p className="text-sm text-muted-foreground">Progress</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-6 py-8">
        <Tabs defaultValue="flashcards" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2 bg-muted">
            <TabsTrigger value="flashcards" className="flex items-center gap-2">
              <Brain className="h-4 w-4" />
              Flashcards
            </TabsTrigger>
            <TabsTrigger value="notes" className="flex items-center gap-2">
              <FileText className="h-4 w-4" />
              Lecture Notes
            </TabsTrigger>
          </TabsList>

          <TabsContent value="flashcards" className="space-y-6">
            {/* Progress */}
            <Card className="bg-gradient-card shadow-soft border-border">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-foreground">Study Progress</h3>
                  <span className="text-sm text-muted-foreground">
                    {currentCard + 1} of {flashcards.length} cards
                  </span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div 
                    className="bg-gradient-secondary h-2 rounded-full transition-all duration-300"
                    style={{ width: `${((currentCard + 1) / flashcards.length) * 100}%` }}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Flashcard */}
            <div className="flex justify-center">
              <Card 
                className={`w-full max-w-2xl h-80 cursor-pointer transition-all duration-300 transform hover:scale-105 ${
                  isFlipped ? 'bg-accent/10' : 'bg-gradient-card'
                } shadow-soft border-border`}
                onClick={() => setIsFlipped(!isFlipped)}
              >
                <CardHeader className="text-center">
                  <div className="flex items-center justify-between">
                    <Badge variant="outline" className="border-accent text-accent">
                      {currentFlashcard.subject}
                    </Badge>
                    <Badge 
                      variant={currentFlashcard.difficulty === "Easy" ? "secondary" : 
                               currentFlashcard.difficulty === "Medium" ? "default" : "destructive"}
                    >
                      {currentFlashcard.difficulty}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg text-accent">
                    {currentFlashcard.concept}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-1 flex items-center justify-center p-8">
                  <div className="text-center">
                    <p className="text-lg text-foreground mb-4">
                      {isFlipped ? currentFlashcard.back : currentFlashcard.front}
                    </p>
                    {isFlipped && (
                      <p className="text-sm text-muted-foreground italic">
                        {currentFlashcard.explanation}
                      </p>
                    )}
                    {!isFlipped && (
                      <p className="text-sm text-muted-foreground">
                        Click to reveal answer
                      </p>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Controls */}
            {isFlipped && (
              <div className="flex justify-center gap-4">
                <Button
                  onClick={() => handleCardAction('hard')}
                  variant="outline"
                  className="border-destructive text-destructive hover:bg-destructive hover:text-destructive-foreground"
                >
                  Hard
                </Button>
                <Button
                  onClick={() => handleCardAction('medium')}
                  variant="outline"
                  className="border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                >
                  Medium
                </Button>
                <Button
                  onClick={() => handleCardAction('easy')}
                  className="bg-success text-success-foreground hover:bg-success/90"
                >
                  <CheckCircle className="h-4 w-4 mr-2" />
                  Easy
                </Button>
              </div>
            )}

            <div className="flex justify-center gap-4">
              <Button
                variant="outline"
                onClick={() => setIsFlipped(false)}
                className="border-border"
              >
                <RotateCcw className="h-4 w-4 mr-2" />
                Reset Card
              </Button>
              <Button
                variant="outline"
                onClick={() => {
                  setCurrentCard(Math.floor(Math.random() * flashcards.length));
                  setIsFlipped(false);
                }}
                className="border-secondary text-secondary-foreground hover:bg-secondary"
              >
                Random Card
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="notes" className="space-y-6">
            <div className="grid gap-6">
              {notes.map((note, index) => (
                <Card key={index} className="bg-gradient-card shadow-soft border-border">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <BookOpen className="h-5 w-5 text-accent" />
                        <div>
                          <CardTitle className="text-lg text-foreground">{note.title}</CardTitle>
                          <p className="text-sm text-muted-foreground">by {note.instructor}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge 
                          variant={note.priority === "High" ? "destructive" : 
                                   note.priority === "Medium" ? "default" : "secondary"}
                        >
                          {note.priority} Priority
                        </Badge>
                        <Badge variant="outline" className="border-accent text-accent">
                          {note.subject}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{note.content}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">{note.date}</span>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
                          <Star className="h-4 w-4 mr-1" />
                          Save
                        </Button>
                        <Button size="sm" className="bg-gradient-secondary text-secondary-foreground hover:opacity-90">
                          View Full Note
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <ChatBot />
    </div>
  );
};

export default LearningPath;