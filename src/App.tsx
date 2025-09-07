import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Login from "./pages/Login";
import TestTaking from "./pages/TestTaking";
import TestResults from "./pages/TestResults";
import LearningPath from "./pages/LearningPath";
import Summary from "./pages/Summary";
import TeacherDashboard from "./pages/TeacherDashboard";
import DoubtQueue from "./pages/DoubtQueue";
import AdminDashboard from "./pages/AdminDashboard";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Index />} />
          <Route path="/test" element={<TestTaking />} />
          <Route path="/test/results/:testId" element={<TestResults />} />
          <Route path="/learning-path" element={<LearningPath />} />
          <Route path="/summary" element={<Summary />} />
          <Route path="/teacher" element={<TeacherDashboard />} />
          <Route path="/teacher/doubts" element={<DoubtQueue />} />
          <Route path="/admin" element={<AdminDashboard />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
