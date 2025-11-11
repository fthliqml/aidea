export const HowItWorksSection = () => {
  const steps = [
    {
      number: 1,
      title: "Enter Your Idea",
      description: "Type a brief description of what you want to create",
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

  return (
    <section className="container mx-auto px-6 py-20 border-t border-border bg-muted/30">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">
            Simple, Fast, Powerful
          </h2>
          <p className="text-lg text-muted-foreground">
            Three steps to amazing content
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div key={step.number} className="text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-2xl font-bold text-primary-foreground mx-auto shadow-sm">
                {step.number}
              </div>
              <h3 className="text-xl font-semibold">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
