import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { GraduationCap, Mail, Lock } from "lucide-react";
import { toast } from "sonner";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const demoCredentials = [
    { email: "student@gmail.com", role: "student", redirect: "/" },
    { email: "teacher@gmail.com", role: "teacher", redirect: "/teacher" },
    { email: "admin@gmail.com", role: "admin", redirect: "/admin" }
  ];

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    const credential = demoCredentials.find(cred => cred.email === email);
    
    if (credential) {
      toast.success(`Welcome ${credential.role}!`);
      navigate(credential.redirect);
    } else {
      toast.error("Invalid credentials. Please use demo emails: student@gmail.com, teacher@gmail.com, or admin@gmail.com");
    }
  };

  const handleDemoLogin = (demoEmail: string) => {
    setEmail(demoEmail);
    setPassword("demo123");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-secondary rounded-full flex items-center justify-center mx-auto mb-4">
            <GraduationCap className="h-8 w-8 text-secondary-foreground" />
          </div>
          <h1 className="text-3xl font-bold text-foreground mb-2">EduPlatform</h1>
          <p className="text-muted-foreground">Sign in to continue your learning journey</p>
        </div>

        {/* Login Form */}
        <Card className="bg-gradient-card shadow-glow border-border">
          <CardHeader>
            <CardTitle className="text-center text-foreground">Sign In</CardTitle>
            <CardDescription className="text-center">
              Use demo credentials to explore different roles
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="password" className="flex items-center gap-2">
                  <Lock className="h-4 w-4" />
                  Password
                </Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              <Button type="submit" className="w-full bg-gradient-secondary text-secondary-foreground hover:opacity-90">
                Sign In
              </Button>
            </form>

            {/* Demo Credentials */}
            <div className="mt-6 pt-6 border-t border-border">
              <p className="text-sm text-muted-foreground text-center mb-3">
                Demo Credentials:
              </p>
              <div className="space-y-2">
                {demoCredentials.map((cred) => (
                  <Button
                    key={cred.email}
                    variant="outline"
                    size="sm"
                    className="w-full justify-start text-left hover:bg-accent hover:text-accent-foreground"
                    onClick={() => handleDemoLogin(cred.email)}
                  >
                    <span className="capitalize font-medium">{cred.role}:</span>
                    <span className="ml-2 text-muted-foreground">{cred.email}</span>
                  </Button>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <p className="text-center text-sm text-muted-foreground mt-6">
          This is a demo application with mock authentication
        </p>
      </div>
    </div>
  );
};

export default Login;