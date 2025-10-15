import { useState } from "react";
import { ChevronDown } from "lucide-react";

const FaqCompact = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Funciona com minha stack?",
      answer: "Sim. Integro com as principais plataformas: Meta, Google, TikTok, Kiwify, Eduzz, Hotmart, Telegram, WhatsApp e mais. Se você usa GTM ou servidor próprio, conectamos facilmente.",
    },
    {
      question: "Precisa de acesso?",
      answer: "Acesso ao GTM e configuração no servidor (se houver). Não quebramos seu site nem alteramos o layout. Apenas conectamos os sinais de forma limpa e auditável.",
    },
    {
      question: "Quando vejo efeito?",
      answer: "Até 7 dias para os primeiros sinais aparecerem. Em 14 dias você já tem dados reconciliados suficientes para começar a otimizar com clareza.",
    },
    {
      question: "E a LGPD?",
      answer: "Seguimos boas práticas: minimização de dados, consentimento, e transparência. O tracking server-side é mais seguro e respeitoso com a privacidade do usuário.",
    },
  ];

  return (
    <section id="faq-compact" className="py-20 px-4 lg:px-8">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="font-display font-bold text-4xl lg:text-5xl mb-4">
            Perguntas <span className="accent">frequentes</span>
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="card animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-start justify-between gap-4 text-left"
              >
                <h3 className="font-display font-semibold text-lg">
                  {faq.question}
                </h3>
                <ChevronDown
                  className={`shrink-0 transition-transform duration-200 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  size={20}
                />
              </button>
              
              {openIndex === index && (
                <div className="mt-4 pt-4 border-t border-border">
                  <p className="muted">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqCompact;
