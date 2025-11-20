"use client";

import Link from "next/link";
import { Sparkles, Mail, Lock, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ThemeToggle } from "@/components/ui/theme-toggle";

interface FormInput {
  email: string;
  password: string;
}

const SignInPage = () => {
  const [isSignUp, setIsSignUp] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInput>();

  const onSubmit: SubmitHandler<FormInput> = (data) => {
    console.log(data);
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-6 relative overflow-hidden">
      {/* Animated Background */}
      <motion.div
        animate={{
          background: [
            "radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.15) 0%, transparent 50%)",
            "radial-gradient(circle at 80% 50%, rgba(120, 119, 198, 0.15) 0%, transparent 50%)",
            "radial-gradient(circle at 50% 80%, rgba(120, 119, 198, 0.15) 0%, transparent 50%)",
            "radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.15) 0%, transparent 50%)",
          ],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute inset-0 pointer-events-none"
      />

      {/* Back to Home */}
      <Link href="/">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="absolute top-6 left-6 flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="text-sm">Back to Home</span>
        </motion.div>
      </Link>

      {/* Theme Toggle */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="absolute top-6 right-6"
      >
        <ThemeToggle />
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full max-w-md relative z-10"
      >
        {/* Card */}
        <motion.div
          variants={itemVariants}
          className="bg-card border border-border rounded-xl shadow-lg p-8 space-y-6"
        >
          {/* Logo & Title */}
          <div className="text-center space-y-4">
            <motion.div
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.6 }}
              className="w-16 h-16 rounded-xl bg-primary flex items-center justify-center mx-auto shadow-sm"
            >
              <Sparkles className="w-8 h-8 text-primary-foreground" />
            </motion.div>
            <div>
              <h1 className="text-2xl font-bold text-foreground">
                {isSignUp ? "Create Account" : "Welcome Back"}
              </h1>
              <p className="text-sm text-muted-foreground mt-2">
                {isSignUp
                  ? "Sign up to save and manage your AI-generated content"
                  : "Sign in to access your AI writing studio"}
              </p>
            </div>
          </div>

          {/* Form */}
          <motion.form
            variants={itemVariants}
            className="space-y-4"
            onSubmit={handleSubmit(onSubmit)}
          >
            {/* Email Input */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">
                Email
              </label>
              <div className="relative flex items-center">
                <Mail className="absolute left-3 w-4 h-4 text-muted-foreground pointer-events-none" />
                <Input
                  {...register("email", { required: "Email is required" })}
                  type="email"
                  placeholder="your@email.com"
                  aria-invalid={!!errors.email}
                  className="h-11 pl-10 w-full"
                />
              </div>
              {errors.email && (
                <p className="text-xs text-destructive">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Password Input */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">
                Password
              </label>
              <div className="relative flex items-center">
                <Lock className="absolute left-3 w-4 h-4 text-muted-foreground pointer-events-none" />
                <Input
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters",
                    },
                  })}
                  type="password"
                  placeholder="••••••••"
                  aria-invalid={!!errors.password}
                  className="h-11 pl-10 w-full"
                />
              </div>
              {errors.password && (
                <p className="text-xs text-destructive">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Forgot Password */}
            {!isSignUp && (
              <div className="text-right">
                <a href="#" className="text-sm text-primary hover:underline">
                  Forgot password?
                </a>
              </div>
            )}

            {/* Sign In Button */}
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button
                type="submit"
                size="lg"
                className="w-full h-11 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
              >
                {isSignUp ? "Create Account" : "Sign In"}
              </Button>
            </motion.div>

            {/* Divider */}
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-border"></div>
              </div>
              <div className="relative flex justify-center text-xs">
                <span className="bg-card px-2 text-muted-foreground">OR</span>
              </div>
            </div>

            {/* Guest Access */}
            <Link href="/studio">
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full h-11 border-border hover:bg-muted"
                >
                  Continue as Guest
                </Button>
              </motion.div>
            </Link>
          </motion.form>

          {/* Toggle Sign In/Up */}
          <motion.div
            variants={itemVariants}
            className="text-center text-sm text-muted-foreground"
          >
            {isSignUp ? "Already have an account? " : "Don't have an account? "}
            <button
              onClick={() => setIsSignUp(!isSignUp)}
              className="text-primary hover:underline font-medium"
            >
              {isSignUp ? "Sign In" : "Sign Up"}
            </button>
          </motion.div>
        </motion.div>

        {/* Benefits */}
        <motion.div
          variants={itemVariants}
          className="mt-6 text-center space-y-3"
        >
          <p className="text-sm text-muted-foreground">
            Create an account to unlock:
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-xs text-muted-foreground">
            <span className="flex items-center gap-1">
              <span className="text-primary">✓</span> Save your content
            </span>
            <span className="flex items-center gap-1">
              <span className="text-primary">✓</span> History tracking
            </span>
            <span className="flex items-center gap-1">
              <span className="text-primary">✓</span> Premium features
            </span>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default SignInPage;
