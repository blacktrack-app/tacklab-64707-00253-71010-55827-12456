import { Building2, ShoppingBag, Megaphone } from "lucide-react";

const Cases = () => {
  const cases = [
    {
      icon: Megaphone,
      context: "Agência de performance",
      noise: "Conversões sub-reportadas em 40%",
      intervention: "Server-side + dedup cross-platform",
      impact: "+32% atribuição corrigida em 14 dias",
    },
    {
      icon: Building2,
      context: "Infoproduto",
      noise: "Funil Telegram invisível no pixel",
      intervention: "Eventos customizados + API Conversions",
      impact: "100% das vendas rastreadas, –22% CPA",
    },
    {
      icon: ShoppingBag,
      context: "E-commerce multi-canal",
      noise: "WhatsApp = buraco negro de atribuição",
      intervention: "UTM persistente + reconciliação server",
      impact: "ROI por canal, escala 2.3x em 30 dias",
    },
  ];

  const scrollToContact = () => {
    const element = document.getElementById("cta-sticky");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="cases" className="py-20 px-4 lg:px-8 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-4xl lg:text-5xl mb-4">
            3 mini-cases, <span className="accent">3 contextos</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {cases.map((item, index) => (
            <div
              key={item.context}
              className="card hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="p-3 rounded-xl bg-accent/10 text-accent w-fit mb-4">
                <item.icon size={24} />
              </div>
              
              <h3 className="font-display font-bold text-lg mb-4">
                {item.context}
              </h3>

              <div className="space-y-3 text-sm">
                <div>
                  <div className="chip mb-2">Ruído</div>
                  <p className="muted">{item.noise}</p>
                </div>

                <div>
                  <div className="chip mb-2">Intervenção</div>
                  <p className="muted">{item.intervention}</p>
                </div>

                <div>
                  <div className="chip mb-2">Impacto</div>
                  <p className="font-semibold accent">{item.impact}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button onClick={scrollToContact} className="btn-primary">
            Quero um case no meu negócio
          </button>
        </div>
      </div>
    </section>
  );
};

export default Cases;
