import { Database, GitBranch, BarChart3 } from "lucide-react";

const ClarityStack = () => {
  const layers = [
    {
      icon: Database,
      title: "Coleta",
      description: "GTM, server, APIs (Meta/Google/TikTok/WhatsApp/Telegram)",
    },
    {
      icon: GitBranch,
      title: "Atribuição",
      description: "Deduplicação, janela/coerência, UTM/ID persistentes",
    },
    {
      icon: BarChart3,
      title: "Leitura",
      description: "Dashboards auditáveis, funil de verdade e LTV",
    },
  ];

  return (
    <section id="clarity-stack" className="py-20 px-4 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-4xl lg:text-5xl mb-4">
            The <span className="accent">Clarity Stack</span>
          </h2>
          <p className="text-lg muted">Sem achismo. Só sinal confiável.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {layers.map((layer, index) => (
            <div
              key={layer.title}
              className="card hover:shadow-lg transition-shadow animate-fade-in-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-accent/10 text-accent flex-shrink-0">
                  <layer.icon size={24} />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-display font-bold text-xl mb-2">
                    {layer.title}
                  </h3>
                  <p className="text-sm muted leading-relaxed">{layer.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Connection lines visualization */}
        <div className="relative py-8">
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accent via-accent to-transparent -translate-x-1/2 hidden md:block"></div>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <span className="chip">Sinal limpo</span>
            <span className="text-accent">→</span>
            <span className="chip">Decisão clara</span>
            <span className="text-accent">→</span>
            <span className="chip">Escala previsível</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClarityStack;
