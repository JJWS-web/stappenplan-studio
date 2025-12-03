import { Link } from "react-router-dom";
import { Mail, Phone, Linkedin, Twitter } from "lucide-react";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="relative flex items-end gap-0.5">
                <div className="w-2 h-3 rounded-sm bg-primary" />
                <div className="w-2 h-5 rounded-sm bg-primary" />
                <div className="w-2 h-7 rounded-sm bg-primary" />
                <div className="w-2 h-9 rounded-sm bg-accent" />
              </div>
              <span className="text-xl font-bold tracking-tight text-primary-foreground">
                UW<span className="text-primary">Stappenplan</span>
              </span>
            </div>
            <p className="text-primary-foreground/70 max-w-md mb-6">
              Wij helpen organisaties en individuen hun ambities te realiseren door complexe processen om te zetten in concrete, uitvoerbare stappen.
            </p>

            {/* Social Links */}
            <div className="flex gap-4">
              <a
                href="https://wa.me/31201234567"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-primary-foreground/10 hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-all duration-300"
                aria-label="WhatsApp"
              >
                <Phone className="h-5 w-5" />
              </a>
              <a
                href="mailto:info@uwstappenplan.nl"
                className="w-10 h-10 rounded-lg bg-primary-foreground/10 hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-all duration-300"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com/uwstappenplan"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-primary-foreground/10 hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-all duration-300"
                aria-label="X (Twitter)"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com/company/uwstappenplan"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-primary-foreground/10 hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-6">Navigatie</h3>
            <ul className="space-y-3">
              <li>
                <a href="#stappenplan" className="text-primary-foreground/70 hover:text-primary transition-colors">
                  Stappenplan
                </a>
              </li>
              <li>
                <a href="#time-it" className="text-primary-foreground/70 hover:text-primary transition-colors">
                  Time It
                </a>
              </li>
              <li>
                <a href="#organisatie" className="text-primary-foreground/70 hover:text-primary transition-colors">
                  Organisatie
                </a>
              </li>
              <li>
                <a href="#contact" className="text-primary-foreground/70 hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-bold text-lg mb-6">Juridisch</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/privacy" className="text-primary-foreground/70 hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/voorwaarden" className="text-primary-foreground/70 hover:text-primary transition-colors">
                  Algemene Voorwaarden
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-primary-foreground/50 text-sm">
            © {new Date().getFullYear()} UW Stappenplan. Alle rechten voorbehouden.
          </p>
          <p className="text-primary-foreground/50 text-sm">
            Gemaakt met ❤️ in Nederland
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
