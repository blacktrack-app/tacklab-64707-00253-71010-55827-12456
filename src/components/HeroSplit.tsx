import { Sparkles, ArrowRight } from "lucide-react";

const HeroSplit = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="hero-split" className="min-h-screen pt-32 pb-20 px-4 lg:px-8 relative overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="flex justify-center items-center max-w-4xl mx-auto">
          {/* Content */}
          <div className="space-y-8 animate-fade-in-up text-center">
            <h1 className="font-display font-bold text-5xl lg:text-7xl leading-tight tracking-tight">
              Seu laboratório de{" "}
              <span className="accent glow-text">dados</span> para performance{" "}
              <span className="accent glow-text">previsível</span>.
            </h1>
            
            <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto">
              Implementamos traqueamento avançado para agências que precisam de{" "}
              <span className="font-medium text-foreground">clareza, resultados e controle total</span> sobre o funil de conversão.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <button
                onClick={() => scrollToSection("cta-sticky")}
                className="btn-primary group"
              >
                Falar com um especialista
                <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => scrollToSection("signal-lab")}
                className="btn-ghost"
              >
                Ver planos mensais
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSplit;
