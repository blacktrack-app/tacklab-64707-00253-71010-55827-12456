import { Search, Cable, LineChart } from "lucide-react";

const Playbook = () => {
  const steps = [
    {
      icon: Search,
      title: "Scan",
      description: "Leio seus sinais e quebras",
      detail: "Análise profunda do setup atual: eventos, UTMs, pixel, conversões perdidas",
    },
    {
      icon: Cable,
      title: "Wire",
      description: "Conecto eventos, fontes e deduplico",
      detail: "Implementação server-side, reconciliação de dados, atribuição coerente",
    },
    {
      icon: LineChart,
      title: "Prove",
      description: "Painel auditável + rotinas de decisão",
      detail: "Dashboard transparente, funil completo, métricas que guiam otimização",
    },
  ];

  const scrollToContact = () => {
    const element = document.getElementById("cta-sticky");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="playbook" className="py-20 px-4 lg:px-8">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-4xl lg:text-5xl mb-4">
            Playbook de <span className="accent">3 passos</span>
          </h2>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2 hidden sm:block"></div>

          <div className="space-y-12">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className={`flex flex-col md:flex-row gap-8 items-start md:items-center animate-fade-in-up ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Content */}
                <div className="flex-1">
                  <div className="card hover:shadow-lg transition-shadow">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-xl bg-accent/10 text-accent shrink-0">
                        <step.icon size={24} />
                      </div>
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="font-display font-bold text-2xl">
                            {step.title}
                          </h3>
                          <span className="chip text-xs">
                            {index + 1}
                          </span>
                        </div>
                        <p className="font-medium mb-2">{step.description}</p>
                        <p className="text-sm muted">{step.detail}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block flex-1"></div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <button onClick={scrollToContact} className="btn-primary">
            Agendar 30 min
          </button>
        </div>
      </div>
    </section>
  );
};

export default Playbook;
