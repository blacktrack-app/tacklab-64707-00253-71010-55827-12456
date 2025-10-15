import { useState } from "react";
import { Menu, X } from "lucide-react";
import trackLabLogo from "@/assets/trackhub-new-logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-border/50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <button
            onClick={() => scrollToSection("hero-split")}
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
          >
            <img src={trackLabLogo} alt="TrackHub" className="h-24" />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection("about")} className="text-sm font-medium hover:text-primary transition-colors">
              Sobre
            </button>
            <button onClick={() => scrollToSection("signal-lab")} className="text-sm font-medium hover:text-primary transition-colors">
              Serviços
            </button>
            <button onClick={() => scrollToSection("proof-panel")} className="text-sm font-medium hover:text-primary transition-colors">
              Resultados
            </button>
            <button onClick={() => scrollToSection("cases")} className="text-sm font-medium hover:text-primary transition-colors">
              Cases
            </button>
            <button onClick={() => scrollToSection("faq-compact")} className="text-sm font-medium hover:text-primary transition-colors">
              FAQ
            </button>
            <button
              onClick={() => scrollToSection("cta-sticky")}
              className="btn-primary !py-2 !px-6"
            >
              Diagnóstico Gratuito
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 space-y-2 border-t border-border/50">
            <button onClick={() => scrollToSection("about")} className="block w-full text-left py-2 text-sm font-medium hover:text-primary transition-colors">
              Sobre
            </button>
            <button onClick={() => scrollToSection("signal-lab")} className="block w-full text-left py-2 text-sm font-medium hover:text-primary transition-colors">
              Serviços
            </button>
            <button onClick={() => scrollToSection("proof-panel")} className="block w-full text-left py-2 text-sm font-medium hover:text-primary transition-colors">
              Resultados
            </button>
            <button onClick={() => scrollToSection("cases")} className="block w-full text-left py-2 text-sm font-medium hover:text-primary transition-colors">
              Cases
            </button>
            <button onClick={() => scrollToSection("faq-compact")} className="block w-full text-left py-2 text-sm font-medium hover:text-primary transition-colors">
              FAQ
            </button>
            <button
              onClick={() => scrollToSection("cta-sticky")}
              className="btn-primary w-full mt-4"
            >
              Diagnóstico Gratuito
            </button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
