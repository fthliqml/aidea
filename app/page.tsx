import { Button } from "@/components/ui/button";
import { Sparkles, Zap, Brain, Rocket, FileText, Wand2 } from "lucide-react";
import Link from "next/link";

const LandingPage = () => {
  const features = [
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

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center shadow-sm">
                <Sparkles className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground">Aidea</h1>
              </div>
            </div>
            <Link href="/studio">
              <Button
                variant="outline"
                className="border-primary hover:bg-muted"
              >
                Launch Studio
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card text-sm text-foreground mb-4 shadow-sm">
            <Sparkles className="w-4 h-4 text-primary" />
            <span>AI-Powered Writing Studio</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight text-foreground">
            Transform Your <span className="text-primary">Ideas</span> Into
            Content
          </h1>

          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From a simple idea to polished content in seconds. Aidea harnesses
            the power of multiple AI models to bring your creative vision to
            life.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Link href="/studio">
              <Button
                size="lg"
                className="h-14 px-8 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-sm text-lg"
              >
                <Rocket className="w-5 h-5 mr-2" />
                Start Creating
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              className="h-14 px-8 border-border hover:bg-muted"
            >
              See How It Works
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 pt-12 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">4+</div>
              <div className="text-sm text-muted-foreground mt-1">
                AI Models
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">5</div>
              <div className="text-sm text-muted-foreground mt-1">
                Tone Styles
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">4</div>
              <div className="text-sm text-muted-foreground mt-1">
                Templates
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-6 py-20 border-t border-border/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">
              Everything You Need to{" "}
              <span className="text-primary">Create</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Powerful features designed for creators, marketers, and writers
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group p-6 rounded-lg border border-border bg-card hover:bg-card-elevated transition-all duration-300 hover:border-primary hover:shadow-sm"
              >
                <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
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
            <div className="text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-2xl font-bold text-primary-foreground mx-auto shadow-sm">
                1
              </div>
              <h3 className="text-xl font-semibold">Enter Your Idea</h3>
              <p className="text-muted-foreground">
                Type a brief description of what you want to create
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-2xl font-bold text-primary-foreground mx-auto shadow-sm">
                2
              </div>
              <h3 className="text-xl font-semibold">Choose Your Style</h3>
              <p className="text-muted-foreground">
                Select template, tone, and AI model that fits your needs
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-2xl font-bold text-primary-foreground mx-auto shadow-sm">
                3
              </div>
              <h3 className="text-xl font-semibold">Get Results</h3>
              <p className="text-muted-foreground">
                Edit, regenerate, or save your perfectly crafted content
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-6 py-20 border-t border-border">
        <div className="max-w-4xl mx-auto">
          <div className="relative overflow-hidden rounded-lg border border-border bg-card p-12 text-center shadow-sm">
            <div className="relative z-10 space-y-6">
              <h2 className="text-3xl md:text-5xl font-bold text-foreground">
                Ready to Create Something{" "}
                <span className="text-primary">Amazing?</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Join creators who are transforming their ideas into professional
                content with Aidea
              </p>
              <Link href="/studio">
                <Button
                  size="lg"
                  className="h-14 px-8 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-sm text-lg"
                >
                  <Sparkles className="w-5 h-5 mr-2" />
                  Launch Aidea Studio
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card mt-20">
        <div className="container mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-primary-foreground" />
              </div>
              <span className="font-semibold text-foreground">Aidea</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2024 Aidea. AI Writing Studio for Everyone.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
