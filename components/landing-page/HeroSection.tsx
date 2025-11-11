"use client";

import { Button } from "@/components/ui/button";
import { Sparkles, Rocket } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.21, 0.47, 0.32, 0.98] as const,
      },
    },
  };

  const statVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 200,
        damping: 15,
      },
    },
  };

  return (
    <section className="container mx-auto px-6 py-20">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl mx-auto text-center space-y-8"
      >
        <motion.div
          variants={itemVariants}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card text-sm text-foreground mb-4 shadow-sm"
        >
          <motion.div
            animate={{
              rotate: [0, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatDelay: 3,
            }}
          >
            <Sparkles className="w-4 h-4 text-primary" />
          </motion.div>
          <span>AI-Powered Writing Studio</span>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl font-bold leading-tight text-foreground"
        >
          Transform Your <span className="text-primary">Ideas</span> Into
          Content
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-xl text-muted-foreground max-w-2xl mx-auto"
        >
          From a simple idea to polished content in seconds. Aidea harnesses the
          power of multiple AI models to bring your creative vision to life.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
        >
          <Link href="/studio">
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="lg"
                className="h-14 px-8 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-sm text-lg"
              >
                <Rocket className="w-5 h-5 mr-2" />
                Start Creating
              </Button>
            </motion.div>
          </Link>
          <motion.div
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <a href="#howItWorks">
              <Button
                size="lg"
                variant="outline"
                className="h-14 px-8 border-border hover:bg-muted"
              >
                See How It Works
              </Button>
            </a>
          </motion.div>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-3 gap-8 pt-12 max-w-2xl mx-auto"
        >
          {[
            { value: "4+", label: "AI Models" },
            { value: "5", label: "Tone Styles" },
            { value: "4", label: "Templates" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              variants={statVariants}
              whileHover={{ scale: 1.1, y: -5 }}
              className="text-center"
            >
              <div className="text-3xl font-bold text-primary">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground mt-1">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};
