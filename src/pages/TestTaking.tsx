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
  const [timeLeft, setTimeLeft] = useState(10800); // 3 hours for NEET

  const questions = [
    // Biology Questions (1-10)
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
      question: "Which hormone is responsible for the development of secondary sexual characteristics in males?",
      options: ["Testosterone", "Estrogen", "Progesterone", "FSH"],
      subject: "Biology",
      section: "Human Physiology"
    },
    {
      id: 4,
      question: "The process by which plants convert light energy into chemical energy is called:",
      options: ["Respiration", "Photosynthesis", "Transpiration", "Fermentation"],
      subject: "Biology",
      section: "Plant Physiology"
    },
    {
      id: 5,
      question: "Which of the following is NOT a part of the human digestive system?",
      options: ["Liver", "Pancreas", "Kidney", "Stomach"],
      subject: "Biology",
      section: "Human Physiology"
    },
    {
      id: 6,
      question: "The genetic material in prokaryotes is:",
      options: ["Circular DNA", "Linear DNA", "RNA", "Protein"],
      subject: "Biology",
      section: "Genetics"
    },
    {
      id: 7,
      question: "Which blood group is considered the universal donor?",
      options: ["A", "B", "AB", "O"],
      subject: "Biology",
      section: "Human Physiology"
    },
    {
      id: 8,
      question: "The process of breakdown of glucose in the absence of oxygen is called:",
      options: ["Aerobic respiration", "Anaerobic respiration", "Photosynthesis", "Transpiration"],
      subject: "Biology",
      section: "Cell Biology"
    },
    {
      id: 9,
      question: "Which part of the brain controls breathing and heart rate?",
      options: ["Cerebrum", "Cerebellum", "Medulla oblongata", "Hypothalamus"],
      subject: "Biology",
      section: "Human Physiology"
    },
    {
      id: 10,
      question: "The number of chromosomes in human gametes is:",
      options: ["23", "46", "44", "22"],
      subject: "Biology",
      section: "Genetics"
    },
    
    // Chemistry Questions (11-20)
    {
      id: 11,
      question: "Which reaction shows nucleophilic substitution mechanism (SN2)?",
      options: ["Primary alkyl halide + OH⁻", "Tertiary alkyl halide + OH⁻", "Alkyl halide + H₂O", "Aromatic halide + NH₃"],
      subject: "Chemistry",
      section: "Organic Chemistry",
      hasImage: true,
      imageDescription: "Mechanism showing backside attack of nucleophile on carbon center"
    },
    {
      id: 12,
      question: "What is the IUPAC name of the compound CH₃-CH(CH₃)-CH₂-CH₃?",
      options: ["2-methylbutane", "3-methylbutane", "Isopentane", "2-methylpropane"],
      subject: "Chemistry",
      section: "Organic Chemistry"
    },
    {
      id: 13,
      question: "The oxidation state of manganese in KMnO₄ is:",
      options: ["+7", "+6", "+5", "+4"],
      subject: "Chemistry",
      section: "Redox Reactions"
    },
    {
      id: 14,
      question: "Which of the following is a strong acid?",
      options: ["CH₃COOH", "H₂CO₃", "HCl", "H₂S"],
      subject: "Chemistry",
      section: "Acids and Bases"
    },
    {
      id: 15,
      question: "The structure of benzene shows:",
      options: ["Resonance", "Tautomerism", "Geometric isomerism", "Optical isomerism"],
      subject: "Chemistry",
      section: "Aromatic Compounds",
      hasImage: true,
      imageDescription: "Benzene ring with delocalized π electrons"
    },
    {
      id: 16,
      question: "Which of the following is NOT a transition metal?",
      options: ["Iron", "Copper", "Zinc", "Sodium"],
      subject: "Chemistry",
      section: "Periodic Table"
    },
    {
      id: 17,
      question: "The molecular formula of ethanol is:",
      options: ["CH₃OH", "C₂H₅OH", "C₃H₇OH", "C₄H₉OH"],
      subject: "Chemistry",
      section: "Organic Chemistry"
    },
    {
      id: 18,
      question: "Which gas is produced when sodium reacts with water?",
      options: ["Oxygen", "Hydrogen", "Chlorine", "Nitrogen"],
      subject: "Chemistry",
      section: "Chemical Reactions"
    },
    {
      id: 19,
      question: "The pH of a neutral solution is:",
      options: ["0", "7", "14", "1"],
      subject: "Chemistry",
      section: "Acids and Bases"
    },
    {
      id: 20,
      question: "Which of the following is an example of a covalent bond?",
      options: ["NaCl", "HCl", "CaCl₂", "MgO"],
      subject: "Chemistry",
      section: "Chemical Bonding"
    },
    
    // Physics Questions (21-30)
    {
      id: 21,
      question: "Two charges +q and -q are placed at distance 2a. The electric field at the midpoint is:",
      options: ["Zero", "kq/a²", "2kq/a²", "4kq/a²"],
      subject: "Physics",
      section: "Electrostatics"
    },
    {
      id: 22,
      question: "A particle moves in a circle of radius R with constant speed v. Its acceleration is:",
      options: ["v²/R towards center", "v²/R tangential", "vR towards center", "Zero"],
      subject: "Physics",
      section: "Circular Motion"
    },
    {
      id: 23,
      question: "Which of the following has the highest frequency?",
      options: ["X-rays", "Visible light", "Radio waves", "Microwaves"],
      subject: "Physics",
      section: "Electromagnetic Waves"
    },
    {
      id: 24,
      question: "The unit of electric current is:",
      options: ["Volt", "Ampere", "Ohm", "Watt"],
      subject: "Physics",
      section: "Electricity"
    },
    {
      id: 25,
      question: "Which law states that the force between two charges is directly proportional to the product of charges?",
      options: ["Ohm's law", "Coulomb's law", "Newton's law", "Faraday's law"],
      subject: "Physics",
      section: "Electrostatics"
    },
    {
      id: 26,
      question: "The speed of light in vacuum is approximately:",
      options: ["3 × 10⁶ m/s", "3 × 10⁸ m/s", "3 × 10¹⁰ m/s", "3 × 10¹² m/s"],
      subject: "Physics",
      section: "Optics"
    },
    {
      id: 27,
      question: "Which of the following is a scalar quantity?",
      options: ["Force", "Velocity", "Speed", "Acceleration"],
      subject: "Physics",
      section: "Mechanics"
    },
    {
      id: 28,
      question: "The work done by a force is zero when:",
      options: ["Force is perpendicular to displacement", "Force is parallel to displacement", "Force is zero", "Displacement is zero"],
      subject: "Physics",
      section: "Work and Energy"
    },
    {
      id: 29,
      question: "Which of the following is NOT a unit of energy?",
      options: ["Joule", "Watt", "Calorie", "Electron volt"],
      subject: "Physics",
      section: "Energy"
    },
    {
      id: 30,
      question: "The resistance of a conductor depends on:",
      options: ["Length only", "Area only", "Both length and area", "Neither length nor area"],
      subject: "Physics",
      section: "Electricity"
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
    // Navigate to test summary page with the specified format
    navigate('/test/results/neet-mock-test-#12');
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
              <p className="text-muted-foreground">Biology (1-10) • Chemistry (11-20) • Physics (21-30)</p>
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
                <div className="bg-muted/30 border-2 border-dashed border-accent/30 rounded-lg p-8 mb-4 text-center">
                  <div className="flex justify-center mb-4">
                    {questions[currentQuestion].id === 1 ? (
                      // Glucose structure representation
                      <svg width="200" height="120" viewBox="0 0 200 120" className="text-foreground">
                        <g stroke="currentColor" strokeWidth="2" fill="none">
                          {/* Glucose ring structure */}
                          <polygon points="40,60 70,40 110,40 140,60 110,80 70,80" strokeWidth="2" />
                          {/* CHO group */}
                          <line x1="140" y1="60" x2="170" y2="60" />
                          <text x="175" y="65" fontSize="12" fill="currentColor">CHO</text>
                          {/* OH groups */}
                          <line x1="70" y1="40" x2="70" y2="20" />
                          <text x="65" y="15" fontSize="10" fill="currentColor">OH</text>
                          <line x1="110" y1="40" x2="130" y2="25" />
                          <text x="135" y="20" fontSize="10" fill="currentColor">OH</text>
                          <line x1="110" y1="80" x2="130" y2="95" />
                          <text x="135" y="110" fontSize="10" fill="currentColor">OH</text>
                          <line x1="70" y1="80" x2="70" y2="100" />
                          <text x="65" y="115" fontSize="10" fill="currentColor">OH</text>
                        </g>
                      </svg>
                    ) : questions[currentQuestion].id === 11 ? (
                      // SN2 mechanism representation
                      <svg width="250" height="100" viewBox="0 0 250 100" className="text-foreground">
                        <g stroke="currentColor" strokeWidth="2" fill="none">
                          {/* Nucleophile approach */}
                          <circle cx="30" cy="50" r="8" />
                          <text x="22" y="55" fontSize="12" fill="currentColor">Nu⁻</text>
                          <line x1="38" y1="50" x2="80" y2="50" strokeDasharray="5,5" />
                          {/* Carbon center */}
                          <circle cx="100" cy="50" r="6" fill="currentColor" />
                          <text x="95" y="55" fontSize="10" fill="white">C</text>
                          {/* Leaving group */}
                          <line x1="120" y1="50" x2="160" y2="50" strokeDasharray="5,5" />
                          <circle cx="180" cy="50" r="8" />
                          <text x="175" y="55" fontSize="12" fill="currentColor">X⁻</text>
                          {/* Backside attack arrow */}
                          <path d="M 40 30 Q 70 20 90 40" markerEnd="url(#arrowhead)" />
                        </g>
                      </svg>
                    ) : questions[currentQuestion].id === 15 ? (
                      // Benzene structure
                      <svg width="150" height="150" viewBox="0 0 150 150" className="text-foreground">
                        <g stroke="currentColor" strokeWidth="2" fill="none">
                          {/* Benzene ring */}
                          <polygon points="75,25 115,50 115,100 75,125 35,100 35,50" />
                          {/* Inner circle representing delocalization */}
                          <circle cx="75" cy="75" r="30" strokeDasharray="8,4" />
                          {/* Carbon labels */}
                          <text x="70" y="20" fontSize="10" fill="currentColor">C</text>
                          <text x="120" y="55" fontSize="10" fill="currentColor">C</text>
                          <text x="120" y="105" fontSize="10" fill="currentColor">C</text>
                          <text x="70" y="135" fontSize="10" fill="currentColor">C</text>
                          <text x="25" y="105" fontSize="10" fill="currentColor">C</text>
                          <text x="25" y="55" fontSize="10" fill="currentColor">C</text>
                        </g>
                      </svg>
                    ) : (
                      // Default chemical structure icon
                      <div className="w-32 h-32 rounded-full bg-accent/20 flex items-center justify-center">
                        <svg width="64" height="64" viewBox="0 0 24 24" fill="none" className="text-accent">
                          <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
                          <circle cx="6" cy="6" r="2" stroke="currentColor" strokeWidth="2"/>
                          <circle cx="18" cy="6" r="2" stroke="currentColor" strokeWidth="2"/>
                          <circle cx="6" cy="18" r="2" stroke="currentColor" strokeWidth="2"/>
                          <circle cx="18" cy="18" r="2" stroke="currentColor" strokeWidth="2"/>
                          <path d="m9 9 6 6" stroke="currentColor" strokeWidth="2"/>
                          <path d="m15 9-6 6" stroke="currentColor" strokeWidth="2"/>
                        </svg>
                      </div>
                    )}
                  </div>
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

        {/* Section Navigation */}
        <Card className="mt-8 bg-gradient-card shadow-soft border-border">
          <CardHeader>
            <CardTitle className="text-lg text-foreground">Section Navigation</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex gap-4 mb-4">
              <Button
                variant={currentQuestion < 10 ? "default" : "outline"}
                onClick={() => setCurrentQuestion(0)}
                className="flex-1"
              >
                Biology (1-10)
              </Button>
              <Button
                variant={currentQuestion >= 10 && currentQuestion < 20 ? "default" : "outline"}
                onClick={() => setCurrentQuestion(10)}
                className="flex-1"
              >
                Chemistry (11-20)
              </Button>
              <Button
                variant={currentQuestion >= 20 ? "default" : "outline"}
                onClick={() => setCurrentQuestion(20)}
                className="flex-1"
              >
                Physics (21-30)
              </Button>
            </div>
            <div className="grid grid-cols-10 gap-1">
              {questions.map((_, index) => (
                <Button
                  key={index}
                  variant={currentQuestion === index ? "default" : "outline"}
                  size="sm"
                  onClick={() => setCurrentQuestion(index)}
                  className={`relative text-xs ${
                    answers[index] 
                      ? "border-success bg-success/10 text-success hover:bg-success/20" 
                      : "border-border"
                  } ${currentQuestion === index ? "bg-primary text-primary-foreground" : ""}`}
                >
                  {index + 1}
                  {answers[index] && (
                    <CheckCircle className="absolute -top-1 -right-1 h-2 w-2 text-success" />
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