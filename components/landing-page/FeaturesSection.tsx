"use client";

import { Zap, Brain, FileText, Wand2, LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const FeaturesSection = () => {
  const features: Feature[] = [
    {
      icon: Zap,
      title: "Instant Generation",
      description:
        "Transform your ideas into polished content in seconds with advanced AI",
    },
    {
      icon: Brain,
      title: "Multiple AI Models",
      description:
        "Choose from GPT-4, Claude, Gemini, and Mistral for different writing styles",
    },
    {
      icon: FileText,
      title: "Versatile Templates",
      description:
        "Blog posts, social media, emails, and product descriptions—all in one place",
    },
    {
      icon: Wand2,
      title: "Tone Control",
      description:
        "Adjust the tone from friendly to formal, funny to persuasive",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="container mx-auto px-6 py-20 border-t border-border/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">
            Everything You Need to <span className="text-primary">Create</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Powerful features designed for creators, marketers, and writers
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="group p-6 rounded-lg border border-border bg-card hover:bg-card-elevated transition-all duration-300 hover:border-primary hover:shadow-lg"
            >
              <motion.div
                whileHover={{ rotate: 360, scale: 1.2 }}
                transition={{ duration: 0.6 }}
                className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center mb-4"
              >
                <feature.icon className="w-6 h-6 text-primary" />
              </motion.div>
              <h3 className="text-xl font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
