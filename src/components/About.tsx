import { Microscope, TrendingUp, Shield } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Microscope,
      title: "Laboratório de Performance",
      description: "Estrutura técnica sólida para transformar dados em decisões estratégicas.",
    },
    {
      icon: TrendingUp,
      title: "Previsibilidade Garantida",
      description: "Rastreamento preciso que funciona mesmo quando os algoritmos mudam.",
    },
    {
      icon: Shield,
      title: "Controle Total",
      description: "Volte a escalar com confiança, sem depender da sorte do algoritmo.",
    },
  ];

  return (
    <section id="about" className="py-20 px-4 lg:px-8 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-4xl lg:text-5xl mb-6">
            Mais do que uma agência, um{" "}
            <span className="accent">laboratório de performance</span>
          </h2>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Na TrackHub, transformamos dados em decisões estratégicas.
            Enquanto os algoritmos mudam, oferecemos estrutura técnica sólida e rastreamento preciso para garantir previsibilidade em cada campanha.
          </p>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto mt-4 leading-relaxed">
            <span className="text-primary font-semibold">Nosso propósito é permitir que agências voltem a escalar com confiança</span> — sem depender da sorte do algoritmo.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="card hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(155,107,255,0.2)] animate-fade-in-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="flex flex-col items-center text-center gap-4">
                <div className="p-4 rounded-2xl bg-primary/10 text-primary border border-primary/30">
                  <feature.icon size={32} strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
