"use client";

import { motion } from "framer-motion";

export const HowItWorksSection = () => {
  const steps = [
    {
      number: 1,
      title: "Sign In or Try as Guest",
      description:
        "Create an account to save your work or start immediately as a guest",
    },
    {
      number: 2,
      title: "Choose Your Style",
      description: "Select template, tone, and AI model that fits your needs",
    },
    {
      number: 3,
      title: "Get Results",
      description: "Edit, regenerate, or save your perfectly crafted content",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const stepVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 30 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section
      id="howItWorks"
      className="container mx-auto px-6 py-20 border-t border-border bg-muted/30"
    >
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">
            Simple, Fast, Powerful
          </h2>
          <p className="text-lg text-muted-foreground">
            Three steps to amazing content
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-3 gap-8"
        >
          {steps.map((step) => (
            <motion.div
              key={step.number}
              variants={stepVariants}
              whileHover={{ y: -10, scale: 1.05 }}
              className="text-center space-y-4"
            >
              <motion.div
                whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.2 }}
                transition={{ duration: 0.5 }}
                className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-2xl font-bold text-primary-foreground mx-auto shadow-sm cursor-pointer"
              >
                {step.number}
              </motion.div>
              <h3 className="text-xl font-semibold">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
