import { Target, TrendingUp, Shield, DollarSign, Users, Zap } from "lucide-react";

const ProofPanel = () => {
  const benefits = [
    { icon: Target, title: "Decisões baseadas em dados reais", description: "Acabe com o achismo e tome decisões com base em dados precisos e confiáveis." },
    { icon: TrendingUp, title: "ROI comprovado e relatórios confiáveis", description: "Prove resultados reais para seus clientes com relatórios auditáveis." },
    { icon: DollarSign, title: "Redução de custos com mídia", description: "Otimize investimentos e elimine desperdício com dados de atribuição corretos." },
    { icon: Users, title: "Clientes mais satisfeitos e retentivos", description: "Aumente a retenção apresentando resultados claros e mensuráveis." },
    { icon: Shield, title: "Performance previsível", description: "Mantenha a performance estável mesmo com mudanças de algoritmo." },
    { icon: Zap, title: "Escalabilidade confiante", description: "Escale com segurança sabendo exatamente o que funciona." },
  ];

  return (
    <section id="proof-panel" className="py-20 px-4 lg:px-8 relative">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-4xl lg:text-5xl mb-6">
            Quando o tracking funciona, <span className="accent">tudo muda</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Veja o que muda quando você tem controle total sobre seus dados de tráfego
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div key={benefit.title} className="card hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(155,107,255,0.2)] animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="flex flex-col gap-4">
                <div className="p-3 rounded-xl bg-primary/10 text-primary w-fit border border-primary/30"><benefit.icon size={28} strokeWidth={1.5} /></div>
                <div><h3 className="font-display font-bold text-lg mb-2">{benefit.title}</h3><p className="text-sm text-muted-foreground leading-relaxed">{benefit.description}</p></div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-20 grid md:grid-cols-3 gap-8">
          {[{ value: "+32%", label: "Atribuição correta em 14 dias" }, { value: "–18%", label: "CPA médio em funis híbridos" }, { value: "7 dias", label: "ROI visível (server-side)" }].map((stat, index) => (
            <div key={stat.label} className="glass p-8 rounded-2xl text-center animate-fade-in-up" style={{ animationDelay: `${(index + 6) * 0.1}s` }}>
              <div className="text-5xl font-bold text-primary mb-3">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProofPanel;
