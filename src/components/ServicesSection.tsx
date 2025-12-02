import { 
  Globe, 
  Smartphone, 
  Database, 
  Cloud, 
  Shield, 
  Lightbulb,
  ArrowRight,
  DraftingCompass
} from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Globe,
      title: "Web Development",
      description: "Custom websites and web applications built with modern technologies for optimal performance and user experience.",
      features: ["React & Next.js", "Responsive Design", "SEO Optimization"],
    },
    {
      icon: Smartphone,
      title: "Mobile Applications",
      description: "Native and cross-platform mobile apps that deliver seamless experiences on iOS and Android devices.",
      features: ["React Native", "Flutter", "Native iOS/Android"],
    },
    {
      icon: Database,
      title: "Backend Solutions",
      description: "Robust server-side architectures, APIs, and database systems that power your applications.",
      features: ["Node.js & Python", "RESTful APIs", "Database Design"],
    },
    {
      icon: Cloud,
      title: "Cloud Services",
      description: "Scalable cloud infrastructure and DevOps solutions to ensure your applications run smoothly.",
      features: ["AWS & Azure", "CI/CD Pipelines", "Cloud Migration"],
    },
    {
      icon: DraftingCompass,
      title: "UI/UX Design",
      description: "Intuitive and engaging user interfaces designed to enhance user satisfaction and drive conversions.",
      features: ["User Research", "Wireframing & Prototyping", "Visual Design"],
    },
    {
      icon: Lightbulb,
      title: "IT Consulting",
      description: "Strategic technology consulting to help you make informed decisions for your business.",
      features: ["Tech Strategy", "Digital Transformation", "Process Optimization"],
    },
  ];

  return (
    <section id="services" className="py-24 bg-gradient-hero relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-[5%] w-3 h-3 bg-primary/20 rounded-sm animate-float" />
        <div className="absolute bottom-32 right-[8%] w-4 h-4 bg-accent/25 rounded-sm animate-float-delayed" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-primary font-semibold mb-4 tracking-wide uppercase text-sm">
            What We Offer
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Solutions That Drive
            <span className="text-gradient"> Success</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            From concept to deployment, we provide end-to-end IT services that help businesses 
            thrive in the digital age. Every solution is crafted with precision and passion.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative bg-card rounded-2xl p-8 border border-border hover:border-primary/50 transition-all duration-500 hover:shadow-xl overflow-hidden"
            >
              {/* Hover gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl bg-gradient-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <service.icon className="w-7 h-7 text-primary-foreground" />
                </div>

                {/* Content */}
                <h3 className="font-heading text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-5 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Learn More Link */}
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-primary font-medium group/link"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
