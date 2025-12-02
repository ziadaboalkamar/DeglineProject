import { Github, Linkedin, Twitter } from "lucide-react";
import diglineLogo from "@/assets/digline-logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const links = {
    company: [
      { name: "About Us", href: "#about" },
      { name: "Services", href: "#services" },
      { name: "Contact", href: "#contact" },
    ],
    services: [
      { name: "Web Development", href: "#services" },
      { name: "Mobile Apps", href: "#services" },
      { name: "Cloud Services", href: "#services" },
    ],
    social: [
      { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com" },
      { name: "Twitter", icon: Twitter, href: "https://twitter.com" },
      { name: "GitHub", icon: Github, href: "https://github.com" },
    ],
  };

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <img 
              src={diglineLogo} 
              alt="Digline Technology" 
              className="h-12 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-background/70 max-w-md leading-relaxed">
              A Palestinian IT company rising from Gaza, delivering innovative solutions 
              that transform challenges into opportunities for businesses worldwide.
            </p>
            {/* Social Links */}
            <div className="flex gap-4 mt-6">
              {links.social.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-background/10 hover:bg-primary flex items-center justify-center transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Company</h4>
            <ul className="space-y-3">
              {links.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-background/70 hover:text-background transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Services</h4>
            <ul className="space-y-3">
              {links.services.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-background/70 hover:text-background transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-background/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-background/60 text-sm">
            © {currentYear} Digline Technology. All rights reserved.
          </p>
          <p className="text-background/60 text-sm">
            Crafting Solutions, Creating Opportunities 🇵🇸
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
