import { Button } from "@/components/ui/button";
import { Sparkles, Rocket } from "lucide-react";
import Link from "next/link";

export const HeroSection = () => {
  return (
    <section className="container mx-auto px-6 py-20">
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
          From a simple idea to polished content in seconds. Aidea harnesses the
          power of multiple AI models to bring your creative vision to life.
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
            <div className="text-sm text-muted-foreground mt-1">AI Models</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary">5</div>
            <div className="text-sm text-muted-foreground mt-1">
              Tone Styles
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary">4</div>
            <div className="text-sm text-muted-foreground mt-1">Templates</div>
          </div>
        </div>
      </div>
    </section>
  );
};
