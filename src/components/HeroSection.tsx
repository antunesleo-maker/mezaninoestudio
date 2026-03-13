import capaImage from "@/assets/mezaninoestudio_capa.jpeg";
import Reveal from "./Reveal";
import { ChevronDown } from "lucide-react";

const HeroSection = () => {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="section-fullscreen bg-background overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src={capaImage}
          alt="Mezanino Estúdio Criativo — identidade visual"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
      </div>

      <div className="container-editorial relative z-10 flex-1 flex flex-col justify-center py-24">
        <div className="max-w-5xl">
          <Reveal>
            <p className="text-xs md:text-sm uppercase tracking-[0.3em] text-muted-foreground mb-8 md:mb-12 font-light">
              Estúdio Criativo
            </p>
          </Reveal>

          <Reveal delay={200}>
            <h1 className="heading-display text-foreground mb-8 md:mb-12">
              Mezanino
            </h1>
          </Reveal>

          <Reveal delay={400}>
            <div className="max-w-2xl">
              <p className="text-lg md:text-xl lg:text-2xl font-light text-muted-foreground leading-relaxed">
                Plataforma dedicada à interseção entre estratégia e planejamento criativo.
              </p>
            </div>
          </Reveal>

          <Reveal delay={600}>
            <div className="mt-12 md:mt-16 border-t border-subtle pt-8 max-w-2xl">
              <p className="body-editorial mb-4">
                Mezanino Estúdio Criativo é uma plataforma dedicada ao desenvolvimento de pensamento estratégico, planejamento criativo e articulação de projetos em diferentes contextos institucionais.
              </p>
              <p className="body-editorial mb-4">
                Nasce da experiência em produção de projetos, curadoria, gestão de equipes e desenvolvimento de iniciativas que operam na interface entre estratégia, comunicação e inovação.
              </p>
              <p className="body-editorial">
                Seu foco está na tradução de ideias em processos capazes de ganhar consistência institucional, clareza narrativa e continuidade.
              </p>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Scroll indicator */}
      <Reveal delay={800}>
        <button
          onClick={() => scrollTo("#atuacao")}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-foreground transition-colors animate-scroll-bounce"
          aria-label="Scroll para baixo"
        >
          <ChevronDown size={28} strokeWidth={1} />
        </button>
      </Reveal>
    </section>
  );
};

export default HeroSection;
