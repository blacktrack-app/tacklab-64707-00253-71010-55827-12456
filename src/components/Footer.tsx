import { Instagram, Linkedin, MessageCircle } from "lucide-react";
import trackLabLogo from "@/assets/trackhub-logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-12 px-4 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <img src={trackLabLogo} alt="TrackHub" className="h-16 mb-4" />
            <p className="text-sm muted">
              Especialista em tracking server-side para mídia paga.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display font-semibold mb-4">Links</h4>
            <div className="space-y-2 text-sm">
              <a href="#" className="block muted hover:text-accent transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="block muted hover:text-accent transition-colors">
                Termos de Uso
              </a>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-display font-semibold mb-4">Conecte-se</h4>
            <div className="flex gap-4">
              <a
                href="https://instagram.com/julia.tracker"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-secondary hover:bg-accent hover:text-accent-foreground transition-all duration-200"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-secondary hover:bg-accent hover:text-accent-foreground transition-all duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-secondary hover:bg-accent hover:text-accent-foreground transition-all duration-200"
                aria-label="WhatsApp"
              >
                <MessageCircle size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border text-center text-sm muted">
          <p>© {currentYear} TrackHub. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
