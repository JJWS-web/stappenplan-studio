import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground">
      {/* Link Column Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-xs">
          <h3 className="font-bold text-lg mb-6">Diensten</h3>
          <ul className="space-y-3">
            <li>
              <Link to="/#services" className="text-primary-foreground/70 hover:text-primary transition-colors">
                Contractmanagement
              </Link>
            </li>
            <li>
              <Link to="/#services" className="text-primary-foreground/70 hover:text-primary transition-colors">
                Personal Assistant
              </Link>
            </li>
            <li>
              <Link to="/#services" className="text-primary-foreground/70 hover:text-primary transition-colors">
                Marketing
              </Link>
            </li>
            <li>
              <Link to="/#services" className="text-primary-foreground/70 hover:text-primary transition-colors">
                Disaster Recovery
              </Link>
            </li>
            <li>
              <Link to="/#services" className="text-primary-foreground/70 hover:text-primary transition-colors">
                Implementatie
              </Link>
            </li>
            <li>
              <Link to="/#services" className="text-primary-foreground/70 hover:text-primary transition-colors">
                Migratie
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Brand & Contact Section */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="relative flex items-end gap-0.5">
                <div className="w-2 h-3 rounded-sm bg-primary" />
                <div className="w-2 h-5 rounded-sm bg-primary" />
                <div className="w-2 h-7 rounded-sm bg-primary" />
                <div className="w-2 h-9 rounded-sm bg-accent" />
              </div>
              <span className="text-xl font-bold tracking-tight text-primary-foreground">
                Uw<span className="text-primary">stappenplan</span>
              </span>
            </div>
            <p className="text-primary-foreground/70 max-w-md mx-auto">
              Uw betrouwbare partner voor projectmanagement en implementatie oplossingen.
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-16">
            {/* Contact */}
            <div>
              <h4 className="font-semibold mb-4 text-center md:text-left">Neem contact op:</h4>
              <ul className="space-y-3">
                <li>
                  <a 
                    href="mailto:service@uwstappenplan.nl" 
                    className="text-primary-foreground/70 hover:text-primary transition-colors flex items-center gap-2"
                  >
                    <Mail className="h-4 w-4" />
                    service@uwstappenplan.nl
                  </a>
                </li>
                <li>
                  <a 
                    href="tel:0850046524" 
                    className="text-primary-foreground/70 hover:text-primary transition-colors flex items-center gap-2"
                  >
                    <Phone className="h-4 w-4" />
                    085 004 6524
                  </a>
                </li>
              </ul>
            </div>

            {/* Location */}
            <div>
              <h4 className="font-semibold mb-4 text-center md:text-left">Locatie:</h4>
              <ul className="space-y-3">
                <li className="text-primary-foreground/70 flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  Nederland
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-primary-foreground/50 text-sm">
              © {new Date().getFullYear()} UW Stappenplan. Alle rechten voorbehouden.
            </p>
            <div className="flex items-center gap-4 text-sm">
              <Link to="/privacy" className="text-primary-foreground/50 hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <span className="text-primary-foreground/30">|</span>
              <Link to="/voorwaarden" className="text-primary-foreground/50 hover:text-primary transition-colors">
                Algemene Voorwaarden
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
