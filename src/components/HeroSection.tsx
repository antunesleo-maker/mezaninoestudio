import Reveal from "./Reveal";
import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="section-fullscreen bg-background">
      <div className="container-editorial flex-1 flex items-center">
        <div className="max-w-2xl">
          <Reveal delay={300}>
            <h1 className="heading-display text-foreground">
              Plataforma dedicada à interseção entre estratégia e planejamento criativo.
            </h1>
          </Reveal>
        </div>
      </div>

      {/* Scroll arrow — bottom right like mesa.do */}
      <Reveal delay={800}>
        <button
          onClick={() => scrollTo("#about")}
          className="absolute bottom-8 right-8 md:bottom-12 md:right-16 w-12 h-12 rounded-full bg-foreground/10 hover:bg-foreground/20 flex items-center justify-center text-foreground transition-colors duration-300 animate-scroll-bounce"
          aria-label="Scroll"
        >
          <ArrowDown size={20} strokeWidth={1.5} />
        </button>
      </Reveal>
    </section>
  );
};

export default HeroSection;
