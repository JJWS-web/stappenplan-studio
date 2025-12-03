import { Mail, Phone, Send } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
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

    const { name, email, subject, message } = formData;

    if (!name || !email || !subject || !message) {
      setServerError("Vul alle velden in.");
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
          company: subject, // Uses subject as company field in email for now
          message,
          selectedService: "contact",
          selectedServiceLabel: subject,
        }),
      });

      const data = await response.json();

      if (data.status === "success") {
        setServerMessage("Uw bericht is succesvol verzonden!");
        setFormData({ name: "", email: "", subject: "", message: "" });
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

            <div className="space-y-6">
              <a href="mailto:p.v.deutekom@mirada.nl" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Mail className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">E-mail</p>
                  <p className="text-foreground font-medium group-hover:text-primary transition-colors">
                    p.v.deutekom@mirada.nl
                  </p>
                </div>
              </a>

              <a href="tel:+31629531820" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Phone className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Telefoon</p>
                  <p className="text-foreground font-medium group-hover:text-primary transition-colors">
                    +31 6 295 31 820
                  </p>
                </div>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card rounded-2xl p-8 shadow-card">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Naam *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary/50"
                    placeholder="Uw naam"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    E-mail *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary/50"
                    placeholder="uw@email.nl"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Onderwerp *
                </label>
                <input
                  type="text"
                  id="subject"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary/50"
                  placeholder="Waar kunnen we u mee helpen?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Bericht *
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary/50 resize-none"
                  placeholder="Vertel ons meer over uw vraag of project..."
                />
              </div>

              <Button type="submit" variant="hero" size="lg" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Versturen..." : "Verstuur Bericht"}
                {!isSubmitting && <Send className="ml-2 h-5 w-5" />}
              </Button>

              {/* Messages */}
              {serverMessage && (
                <p className="text-emerald-600 text-sm">{serverMessage}</p>
              )}
              {serverError && (
                <p className="text-red-600 text-sm">{serverError}</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
