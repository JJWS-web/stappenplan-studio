import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Stappenplan", href: "/stappenplan", isPage: true },
  { label: "Time It", href: "/time-it", isPage: true },
  { label: "Organisatie", href: "/organisatie", isPage: true },
  { label: "Contact", href: "/contact", isPage: true },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (item: typeof navItems[0]) => {
    setIsMobileMenuOpen(false);
    
    if (item.isPage) {
      navigate(item.href);
      return;
    }
    
    // If we're not on homepage, navigate there first with the hash
    if (location.pathname !== "/") {
      navigate("/" + item.href);
      return;
    }
    
    const element = document.querySelector(item.href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-card/95 backdrop-blur-md shadow-card py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="z-10">
          <Logo />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <Button
              key={item.label}
              variant="nav"
              className={cn(!isScrolled && "text-white hover:text-white/80")}
              onClick={() => handleNavClick(item)}
            >
              {item.label}
            </Button>
          ))}
          <Button 
            variant="hero" 
            size="sm" 
            className="ml-4"
            onClick={() => handleNavClick({ label: "Contact", href: "/contact", isPage: true })}
          >
            Start Nu
          </Button>
        </nav>

        {/* Mobile Menu Toggle */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "md:hidden absolute top-full left-0 right-0 bg-white shadow-card transition-all duration-300 overflow-hidden",

          isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <nav className="container mx-auto px-4 py-4 flex flex-col gap-2">
        {navItems.map((item) => {
  const isActive =
    item.isPage && location.pathname === item.href ||
    (!item.isPage && location.hash === item.href);

  return (
    <Button
      key={item.label}
      variant="ghost"
      className={cn(
        "justify-start transition-colors",
        isActive ? "text-primary font-semibold" : "text-foreground"
      )}
      onClick={() => handleNavClick(item)}
    >
      {item.label}
    </Button>
  );
})}

       
          <Button 
            variant="hero" 
            className="mt-2"
            onClick={() => handleNavClick({ label: "Contact", href: "/contact", isPage: true })}
          >
            Start Nu
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
