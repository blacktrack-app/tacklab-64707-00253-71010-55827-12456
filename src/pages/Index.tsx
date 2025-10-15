import Header from "@/components/Header";
import HeroSplit from "@/components/HeroSplit";
import About from "@/components/About";
import SignalLab from "@/components/SignalLab";
import ProofPanel from "@/components/ProofPanel";
import Cases from "@/components/Cases";
import FaqCompact from "@/components/FaqCompact";
import CtaSticky from "@/components/CtaSticky";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSplit />
        <About />
        <SignalLab />
        <ProofPanel />
        <Cases />
        <FaqCompact />
        <CtaSticky />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
