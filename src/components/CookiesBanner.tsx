import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

const CookiesBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookies-consent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookies-consent", "accepted");
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookies-consent", "declined");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 animate-fade-in">
      <div className="max-w-4xl mx-auto bg-card border border-border rounded-xl shadow-card p-4 md:p-6">
        <div className="flex flex-col md:flex-row md:items-center gap-4">
          <div className="flex-1">
            <h3 className="font-semibold text-foreground mb-1">
              🍪 Cookies
            </h3>
            <p className="text-sm text-muted-foreground">
              Wij gebruiken cookies om uw ervaring te verbeteren en onze diensten te optimaliseren. 
              Door verder te gaan, gaat u akkoord met ons cookiebeleid.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <Button
              variant="outline"
              size="sm"
              onClick={handleDecline}
              className="text-muted-foreground"
            >
              Weigeren
            </Button>
            <Button
              size="sm"
              onClick={handleAccept}
              className="gradient-primary text-primary-foreground"
            >
              Accepteren
            </Button>
          </div>
          <button
            onClick={handleDecline}
            className="absolute top-2 right-2 md:static p-1 text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Sluiten"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookiesBanner;
