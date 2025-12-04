import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mail, Phone, Send, Clock, MessageCircle } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [serverMessage, setServerMessage] = useState<string | null>(null);
  const [serverError, setServerError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setServerMessage(null);
    setServerError(null);

    const { name, email, company, subject, message } = formData;

    if (!name || !email || !company || !subject || !message) {
      setServerError("Vul alle verplichte velden in.");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("http://localhost/mail/send-email.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          company: formData.company,
          message,
          selectedService: "contact",
          selectedServiceLabel: subject,
        }),
      });

      const data = await response.json();

      if (data.status === "success") {
        setServerMessage("Uw bericht is succesvol verzonden!");
        setFormData({ name: "", email: "", company: "", subject: "", message: "" });
        setServerError(null);
      } else {
        setServerError(data.message || "Fout bij verzenden.");
      }

    } catch (err) {
      setServerError("Er is een fout opgetreden. Probeer het opnieuw.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-foreground via-foreground/95 to-primary/30 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-full px-4 py-2 mb-8 animate-fade-up">
              <MessageCircle className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary-foreground/90">
                Wij staan voor u klaar
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6 animate-fade-up" style={{ animationDelay: "100ms" }}>
              Neem <span className="text-gradient">Contact</span> Op
            </h1>

            <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-3xl mx-auto animate-fade-up" style={{ animationDelay: "200ms" }}>
              Heeft u vragen over Time IT of onze diensten? Wij helpen u graag verder.
            </p>

            <div className="bg-primary/10 backdrop-blur-sm border border-primary/20 rounded-2xl p-6 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: "300ms" }}>
              <p className="text-primary-foreground/90 font-medium">
                Op basis van veel ervaring in het vakgebied hebben wij het product <span className="text-primary font-bold">Time IT</span> laten ontwikkelen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
              {/* Contact Info */}
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                    Contactgegevens
                  </h2>
                  <p className="text-muted-foreground">
                    Neem contact met ons op via onderstaande mogelijkheden.
                  </p>
                </div>

                <div className="space-y-4">
                  <a 
                    href="mailto:service@uwstappenplan.nl" 
                    className="flex items-center gap-4 bg-card rounded-xl p-4 shadow-card hover:shadow-glow transition-all duration-300 hover:-translate-y-1 group"
                  >
                    <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <Mail className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">E-mail</h3>
                      <p className="text-primary text-sm group-hover:underline">
                        service@uwstappenplan.nl
                      </p>
                    </div>
                  </a>

                  <a 
                    href="tel:0850046524" 
                    className="flex items-center gap-4 bg-card rounded-xl p-4 shadow-card hover:shadow-glow transition-all duration-300 hover:-translate-y-1 group"
                  >
                    <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <Phone className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Telefoon</h3>
                      <p className="text-primary text-sm group-hover:underline">
                        085 004 6524
                      </p>
                    </div>
                  </a>

                  <div className="flex items-center gap-4 bg-card rounded-xl p-4 shadow-card">
                    <div className="w-12 h-12 rounded-xl gradient-accent flex items-center justify-center flex-shrink-0">
                      <Clock className="h-6 w-6 text-accent-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Bereikbaar</h3>
                      <p className="text-muted-foreground text-sm">
                        Ma - Vr: 9:00 - 17:00
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-card rounded-2xl p-6 md:p-8 shadow-card">
                <h2 className="text-xl font-bold text-foreground mb-6">
                  Stuur een bericht
                </h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Naam *
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                        placeholder="Uw naam"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        E-mail *
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                        placeholder="uw@email.nl"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                      Bedrijfsnaam *
                    </label>
                    <input
                      type="text"
                      id="company"
                      required
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                      placeholder="Uw bedrijfsnaam"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                      Onderwerp *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                      placeholder="Onderwerp"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Bericht *
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none transition-all"
                      placeholder="Uw bericht..."
                    />
                  </div>

                  <Button type="submit" variant="hero" size="lg" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? "Versturen..." : "Verstuur Bericht"}
                    {!isSubmitting && <Send className="ml-2 h-5 w-5" />}
                  </Button>

                  {serverMessage && (
                    <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-lg p-4">
                      <p className="text-emerald-600 text-sm text-center">{serverMessage}</p>
                    </div>
                  )}
                  {serverError && (
                    <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
                      <p className="text-red-600 text-sm text-center">{serverError}</p>
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default ContactPage;
