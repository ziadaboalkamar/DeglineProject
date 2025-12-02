import { ArrowRight, Sparkles } from "lucide-react";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden pt-20"
    >
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-[10%] w-4 h-4 bg-primary/30 rounded-sm animate-float" />
        <div className="absolute top-1/3 left-[20%] w-6 h-6 bg-accent/40 rounded-sm animate-float-delayed" />
        <div className="absolute top-1/5 right-[15%] w-5 h-5 bg-primary/25 rounded-sm animate-float-slow" />
        <div className="absolute bottom-1/3 right-[10%] w-4 h-4 bg-accent/35 rounded-sm animate-float" />
        <div className="absolute bottom-1/4 left-[25%] w-3 h-3 bg-primary/20 rounded-sm animate-float-delayed" />
        
        {/* Large gradient orbs */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-8 animate-fade-up opacity-0">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-secondary-foreground">
              Rising Stronger from Gaza
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 animate-fade-up opacity-0 animation-delay-200">
            Crafting Solutions,
            <br />
            <span className="text-gradient">Creating Opportunities</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-up opacity-0 animation-delay-400">
            Like a phoenix rising from the ashes, Digline Technology emerges stronger—delivering 
            innovative IT solutions that transform challenges into opportunities for businesses worldwide.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up opacity-0 animation-delay-600">
            <a
              href="#services"
              className="group bg-gradient-primary text-primary-foreground px-8 py-4 rounded-xl font-semibold text-lg hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2"
            >
              Explore Our Services
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#about"
              className="px-8 py-4 rounded-xl font-semibold text-lg border-2 border-border hover:border-primary hover:text-primary transition-all duration-300"
            >
              Our Story
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 pt-8 border-t border-border animate-fade-in opacity-0 animation-delay-600">
            <p className="text-sm text-muted-foreground mb-4">
              Trusted by teams across the globe
            </p>
            <div className="flex items-center justify-center gap-8 text-muted-foreground/60">
              <div className="text-center">
                <div className="text-3xl font-bold text-foreground">50+</div>
                <div className="text-sm">Projects Delivered</div>
              </div>
              <div className="w-px h-12 bg-border" />
              <div className="text-center">
                <div className="text-3xl font-bold text-foreground">15+</div>
                <div className="text-sm">Team Members</div>
              </div>
              <div className="w-px h-12 bg-border" />
              <div className="text-center">
                <div className="text-3xl font-bold text-foreground">5+</div>
                <div className="text-sm">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
