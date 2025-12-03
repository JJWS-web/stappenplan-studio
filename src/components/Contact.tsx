import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "./ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Content */}
          <div>
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Contact
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6">
              Klaar om te beginnen?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Neem vrijblijvend contact met ons op. Wij bespreken graag de mogelijkheden voor uw situatie.
            </p>

            {/* Contact Info */}
            <div className="space-y-6">
              <a href="mailto:p.v.deutekom@mirada.nl" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Mail className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">E-mail</p>
                  <p className="text-foreground font-medium group-hover:text-primary transition-colors">p.v.deutekom@mirada.nl</p>
                </div>
              </a>

              <a href="tel:+31629531820" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Phone className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Telefoon</p>
                  <p className="text-foreground font-medium group-hover:text-primary transition-colors">+31 6 295 31 820</p>
                </div>
              </a>
            </div>
          </div>

          {/* Right Content - Contact Form */}
          <div className="bg-card rounded-2xl p-8 shadow-card">
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Naam
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    placeholder="Uw naam"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    E-mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    placeholder="uw@email.nl"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                  Onderwerp
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  placeholder="Waar kunnen we u mee helpen?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Bericht
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                  placeholder="Vertel ons meer over uw vraag of project..."
                />
              </div>

              <Button variant="hero" size="lg" className="w-full">
                Verstuur Bericht
                <Send className="ml-2 h-5 w-5" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
