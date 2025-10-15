import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { MessageCircle, Mail, Calendar } from "lucide-react";

const CtaSticky = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: "",
    spending: "",
    platform: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Track form submission
    if (typeof window !== "undefined" && (window as any).dataLayer) {
      (window as any).dataLayer.push({
        event: "lead_submit",
        form_name: "diagnostic_form",
      });
    }

    toast({
      title: "Mensagem enviada!",
      description: "Em breve entrarei em contato com você.",
    });

    setFormData({
      name: "",
      email: "",
      whatsapp: "",
      spending: "",
      platform: "",
    });
  };

  const handleWhatsAppClick = () => {
    // Track WhatsApp CTA click
    if (typeof window !== "undefined" && (window as any).dataLayer) {
      (window as any).dataLayer.push({
        event: "cta_click",
        cta_id: "whatsapp_direct",
        cta_section: "cta_sticky",
      });
    }
    window.open("https://wa.me/5511999999999?text=Oi%20TrackHub%2C%20quero%20diagn%C3%B3stico", "_blank");
  };

  return (
    <section id="cta-sticky" className="py-20 px-4 lg:px-8 bg-secondary/30">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="font-display font-bold text-4xl lg:text-5xl mb-4">
            Pronto para dominar o tracking da <span className="accent">sua agência</span>?
          </h2>
          <p className="text-lg text-muted-foreground">
            Solicite um diagnóstico gratuito e veja o que está impedindo seu tráfego de performar
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Quick Contact Options */}
          <div className="space-y-4">
            <div className="card">
              <button
                onClick={handleWhatsAppClick}
                className="w-full flex items-center gap-4 p-4 rounded-xl border-2 border-border hover:border-accent hover:bg-accent/5 transition-all duration-200"
              >
                <div className="p-3 rounded-xl bg-accent/10 text-accent">
                  <MessageCircle size={24} />
                </div>
                <div className="text-left">
                  <h3 className="font-display font-semibold text-lg">WhatsApp</h3>
                  <p className="text-sm muted">Resposta rápida e direta</p>
                </div>
              </button>
            </div>

            <div className="card">
              <a
                href="mailto:julia@tracker.com"
                className="w-full flex items-center gap-4 p-4 rounded-xl border-2 border-border hover:border-accent hover:bg-accent/5 transition-all duration-200"
              >
                <div className="p-3 rounded-xl bg-accent/10 text-accent">
                  <Mail size={24} />
                </div>
                <div className="text-left">
                  <h3 className="font-display font-semibold text-lg">E-mail</h3>
                  <p className="text-sm muted">Para informações detalhadas</p>
                </div>
              </a>
            </div>

            <div className="card">
              <button className="w-full flex items-center gap-4 p-4 rounded-xl border-2 border-border hover:border-accent hover:bg-accent/5 transition-all duration-200">
                <div className="p-3 rounded-xl bg-accent/10 text-accent">
                  <Calendar size={24} />
                </div>
                <div className="text-left">
                  <h3 className="font-display font-semibold text-lg">Agendar 30 min</h3>
                  <p className="text-sm muted">Reunião focada no seu caso</p>
                </div>
              </button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="card">
            <h3 className="font-display font-bold text-xl mb-6">
              Ou preencha o formulário
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Nome"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-border bg-card focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="E-mail"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-border focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                />
              </div>
              <div>
                <input
                  type="tel"
                  placeholder="WhatsApp"
                  value={formData.whatsapp}
                  onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-border focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                />
              </div>
              <div>
                <select
                  value={formData.spending}
                  onChange={(e) => setFormData({ ...formData, spending: e.target.value })}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-border focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                >
                  <option value="">Mídia/mês</option>
                  <option value="0-5k">R$ 0 - 5k</option>
                  <option value="5k-20k">R$ 5k - 20k</option>
                  <option value="20k-50k">R$ 20k - 50k</option>
                  <option value="50k+">R$ 50k+</option>
                </select>
              </div>
              <div>
                <select
                  value={formData.platform}
                  onChange={(e) => setFormData({ ...formData, platform: e.target.value })}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-border focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                >
                  <option value="">Plataforma principal</option>
                  <option value="meta">Meta Ads</option>
                  <option value="google">Google Ads</option>
                  <option value="tiktok">TikTok Ads</option>
                  <option value="multiple">Múltiplas</option>
                </select>
              </div>
              <button type="submit" className="btn-primary w-full">
                Rodar diagnóstico gratuito
              </button>
            </form>
          </div>
        </div>

        {/* Sticky Mobile CTA */}
        <div className="fixed bottom-0 left-0 right-0 p-4 glass border-t border-border md:hidden z-40">
          <button
            onClick={handleWhatsAppClick}
            className="btn-primary w-full"
          >
            Diagnóstico Gratuito
          </button>
        </div>
      </div>
    </section>
  );
};

export default CtaSticky;
