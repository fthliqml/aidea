import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import Link from "next/link";

export const CTASection = () => {
  return (
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
  );
};
