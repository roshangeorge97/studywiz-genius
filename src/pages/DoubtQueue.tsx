import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, Clock, CheckCircle, AlertTriangle, MessageSquare, Filter, ArrowLeft } from "lucide-react"

const doubts = [
  {
    id: 1,
    student: "Alex Johnson",
    batch: "Batch A",
    subject: "Mathematics",
    topic: "Calculus - Integration",
    question: "How do I solve integration by parts when the polynomial degree is higher?",
    aiSuggestion: "For integration by parts with higher degree polynomials, apply the rule recursively: ∫u dv = uv - ∫v du. Choose u as the polynomial (reduce degree each time) and dv as the exponential/trig function.",
    timestamp: "2 minutes ago",
    priority: "urgent",
    status: "pending"
  },
  {
    id: 2, 
    student: "Sarah Chen",
    batch: "Batch B",
    subject: "Chemistry",
    topic: "Organic Chemistry - Reactions",
    question: "What's the mechanism for SN2 reaction and how does steric hindrance affect it?",
    aiSuggestion: "SN2 mechanism involves backside attack by nucleophile. Steric hindrance from bulky groups reduces reaction rate: Primary > Secondary >> Tertiary alkyl halides.",
    timestamp: "5 minutes ago", 
    priority: "high",
    status: "pending"
  },
  {
    id: 3,
    student: "Michael Rodriguez", 
    batch: "Batch A",
    subject: "Physics",
    topic: "Waves - Interference",
    question: "Can you explain constructive and destructive interference with examples?",
    aiSuggestion: "Constructive interference occurs when waves are in phase (path difference = nλ), amplitudes add. Destructive interference when out of phase (path difference = (n+0.5)λ), amplitudes cancel.",
    timestamp: "12 minutes ago",
    priority: "medium", 
    status: "pending"
  },
  {
    id: 4,
    student: "Emma Williams",
    batch: "Batch C", 
    subject: "Biology",
    topic: "Cell Biology - Mitosis",
    question: "What are the checkpoints in cell cycle and their importance?",
    aiSuggestion: "Three main checkpoints: G1/S (DNA damage check), G2/M (DNA replication check), and Spindle checkpoint (chromosome attachment). They prevent errors and maintain genomic stability.",
    timestamp: "18 minutes ago",
    priority: "medium",
    status: "approved"
  }
]

const getPriorityColor = (priority: string) => {
  switch (priority) {
    case 'urgent': return 'destructive'
    case 'high': return 'warning'
    case 'medium': return 'secondary'
    default: return 'secondary'
  }
}

const getPriorityIcon = (priority: string) => {
  switch (priority) {
    case 'urgent': return AlertTriangle
    case 'high': return Clock
    default: return MessageSquare
  }
}

export default function DoubtQueue() {
  const navigate = useNavigate()
  const [filter, setFilter] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')

  const filteredDoubts = doubts.filter(doubt => {
    const matchesFilter = filter === 'all' || doubt.priority === filter || doubt.status === filter
    const matchesSearch = doubt.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         doubt.topic.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         doubt.student.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesFilter && matchesSearch
  })

  const urgentDoubts = doubts.filter(d => d.priority === 'urgent' && d.status === 'pending').length

  return (
    <div className="flex-1 space-y-6 p-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button 
            variant="outline" 
            size="sm" 
            onClick={() => navigate('/teacher')}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Dashboard
          </Button>
          <div>
            <h1 className="text-3xl font-bold">Doubt Resolution Queue</h1>
            <p className="text-muted-foreground">
              Manage and resolve student doubts with AI assistance
            </p>
          </div>
        </div>
        {urgentDoubts > 0 && (
          <Badge variant="destructive" className="text-sm">
            {urgentDoubts} urgent doubts
          </Badge>
        )}
      </div>

      {/* Filters and Search */}
      <Card>
        <CardContent className="p-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search doubts by question, topic, or student..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <Select value={filter} onValueChange={setFilter}>
              <SelectTrigger className="w-[200px]">
                <Filter className="h-4 w-4 mr-2" />
                <SelectValue placeholder="Filter doubts" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Doubts</SelectItem>
                <SelectItem value="urgent">Urgent Only</SelectItem>
                <SelectItem value="high">High Priority</SelectItem>
                <SelectItem value="pending">Pending Review</SelectItem>
                <SelectItem value="approved">Approved</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Doubt Cards */}
      <div className="space-y-4">
        {filteredDoubts.map((doubt) => {
          const PriorityIcon = getPriorityIcon(doubt.priority)
          return (
            <Card key={doubt.id} className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="space-y-4">
                  {/* Header */}
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <PriorityIcon className="h-5 w-5 text-warning" />
                      <div>
                        <h3 className="font-semibold">{doubt.student}</h3>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <span>{doubt.batch}</span>
                          <span>•</span>
                          <span>{doubt.subject}</span>
                          <span>•</span>
                          <span>{doubt.timestamp}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant={getPriorityColor(doubt.priority) as any}>
                        {doubt.priority}
                      </Badge>
                      <Badge variant={doubt.status === 'approved' ? 'default' : 'secondary'} className={doubt.status === 'approved' ? 'bg-success text-success-foreground' : ''}>
                        {doubt.status}
                      </Badge>
                    </div>
                  </div>

                  {/* Topic */}
                  <div className="bg-muted/50 rounded-md p-3">
                    <p className="text-sm font-medium text-muted-foreground mb-1">Topic</p>
                    <p className="font-medium">{doubt.topic}</p>
                  </div>

                  {/* Question */}
                  <div>
                    <p className="text-sm font-medium text-muted-foreground mb-2">Student's Question</p>
                    <p className="text-sm leading-relaxed">{doubt.question}</p>
                  </div>

                  {/* AI Suggestion */}
                  <div className="border-l-4 border-primary pl-4">
                    <p className="text-sm font-medium text-primary mb-2">AI Suggested Solution</p>
                    <p className="text-sm leading-relaxed text-muted-foreground">{doubt.aiSuggestion}</p>
                  </div>

                  {/* Actions */}
                  {doubt.status === 'pending' && (
                    <div className="flex items-center justify-end gap-3 pt-2">
                      <Button variant="outline" size="sm">
                        Modify Solution
                      </Button>
                      <Button variant="outline" size="sm">
                        Flag for Class
                      </Button>
                      <Button size="sm">
                        Approve & Send
                      </Button>
                    </div>
                  )}

                  {doubt.status === 'approved' && (
                    <div className="flex items-center justify-end pt-2">
                      <div className="flex items-center gap-2 text-sm text-success">
                        <CheckCircle className="h-4 w-4" />
                        Solution approved and sent to student
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {filteredDoubts.length === 0 && (
        <Card>
          <CardContent className="p-12 text-center">
            <MessageSquare className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">No doubts found</h3>
            <p className="text-muted-foreground">
              {searchTerm || filter !== 'all' 
                ? "Try adjusting your search or filter criteria"
                : "All caught up! No pending doubts at the moment."
              }
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
