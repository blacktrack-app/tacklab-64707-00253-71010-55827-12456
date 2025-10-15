import { Server, Activity, Code } from "lucide-react";

const SignalLab = () => {
  const services = [
    {
      icon: Server,
      title: "Server-Side Tracking",
      description: "Implementação e manutenção completa via GTM Server para máxima precisão.",
      features: ["GTM Server Setup", "Tag Management", "Monitoramento 24/7"],
    },
    {
      icon: Activity,
      title: "Monitoramento e Diagnóstico",
      description: "Auditorias técnicas e manutenção contínua para garantir dados confiáveis.",
      features: ["Health Check", "Relatórios", "Correções proativas"],
    },
    {
      icon: Code,
      title: "Planos Personalizados",
      description: "Estrutura sob medida para o orçamento e volume da sua agência.",
      features: ["Escalável", "Sem contrato", "Setup incluído"],
    },
  ];

  return (
    <section id="signal-lab" className="py-20 px-4 lg:px-8 relative">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-4xl lg:text-5xl mb-4">
            O que desenvolvemos dentro do{" "}
            <span className="accent">laboratório</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Serviços técnicos para transformar dados em performance previsível
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="card hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(155,107,255,0.2)] animate-fade-in-up group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 rounded-xl bg-primary/10 text-primary flex-shrink-0 border border-primary/30 group-hover:shadow-[0_0_20px_rgba(155,107,255,0.4)] transition-shadow">
                  <service.icon size={24} strokeWidth={1.5} />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-display font-bold text-lg mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {service.description}
                  </p>
                </div>
              </div>
              <div className="space-y-2 pt-4 border-t border-border">
                {service.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SignalLab;
