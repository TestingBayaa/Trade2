import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button-variants";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../firebase"; // adjust the path if needed

import { Mail, ArrowLeft, CheckCircle } from "lucide-react";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
  
    try {
      await sendPasswordResetEmail(auth, email); // Firebase method
  
      setIsSubmitted(true);
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "Failed to send reset email",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };
  

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md"
      >
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 mb-8">
          <div className="h-8 w-8 rounded-lg gradient-primary flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-lg">V</span>
          </div>
          <span className="text-xl font-bold text-foreground">TradoGate</span>
        </Link>

        {!isSubmitted ? (
          <>
            <Link
              to="/login"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to login
            </Link>

            <h1 className="text-3xl font-bold">Forgot password?</h1>
            <p className="mt-2 text-muted-foreground">
              No worries, we'll send you reset instructions.
            </p>

            <form onSubmit={handleResetPassword} className="mt-8 space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10"
                    required
                  />
                </div>
              </div>

              <Button type="submit" variant="gradient" className="w-full" disabled={isLoading}>
                {isLoading ? "Sending..." : "Reset password"}
              </Button>
            </form>
          </>
        ) : (
          <div className="text-center">
            <div className="h-16 w-16 rounded-full bg-success/20 flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="h-8 w-8 text-success" />
            </div>
            <h1 className="text-3xl font-bold">Check your email</h1>
            <p className="mt-2 text-muted-foreground">
              We sent a password reset link to
              <br />
              <span className="text-foreground font-medium">{email}</span>
            </p>

            <Button
              variant="outline"
              className="mt-8"
              onClick={() => setIsSubmitted(false)}
            >
              Didn't receive the email? Click to resend
            </Button>

            <p className="mt-8 text-sm text-muted-foreground">
              <Link to="/login" className="text-primary hover:underline">
                Back to login
              </Link>
            </p>
          </div>
        )}
      </motion.div>
    </div>
  );
}