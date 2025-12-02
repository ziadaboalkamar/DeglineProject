import { Heart, Target, Users, Flame } from "lucide-react";

const AboutSection = () => {
  const values = [
    {
      icon: Flame,
      title: "Resilience",
      description: "Rising stronger from every challenge, we transform adversity into innovation.",
    },
    {
      icon: Heart,
      title: "Passion",
      description: "Gaza loves science and knowledge—we channel that passion into every solution.",
    },
    {
      icon: Target,
      title: "Excellence",
      description: "Competing with the best locally and internationally, we never settle for less.",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Built on teamwork, we believe great solutions come from great partnerships.",
    },
  ];

  return (
    <section id="about" className="py-24 bg-card relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-secondary/50 to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <span className="inline-block text-primary font-semibold mb-4 tracking-wide uppercase text-sm">
              Our Story
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              From Gaza to the World:
              <br />
              <span className="text-gradient">A Phoenix Rising</span>
            </h2>
            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
              <p>
                <strong className="text-foreground">Digline Technology</strong> is a Palestinian IT company 
                born from the resilient spirit of Gaza. Before the war, we were a dedicated collaborative 
                team, working on diverse projects and building partnerships that spanned beyond borders.
              </p>
              <p>
                When we lost everything we had built, we made a choice—not to be defined by our 
                circumstances, but by our response to them. Like a phoenix emerging from the ashes, 
                we returned stronger, more determined, and ready to compete on the global stage.
              </p>
              <p>
                Today, we stand as a testament to what passion, knowledge, and fair competition can 
                achieve. Gaza loves science, and we carry that love in every line of code we write, 
                every solution we craft, and every opportunity we create.
              </p>
            </div>
          </div>

          {/* Values Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="group p-6 rounded-2xl bg-background border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-heading text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
