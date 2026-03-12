import capaImage from "@/assets/mezaninoestudio_capa.jpeg";
import Reveal from "./Reveal";

const HeroSection = () => {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex flex-col pt-16 md:pt-20">
      <Reveal>
        <div className="w-full overflow-hidden">
          <img
            src={capaImage}
            alt="Mezanino Estúdio Criativo — identidade visual com formas geométricas"
            className="w-full h-48 md:h-72 lg:h-96 object-cover"
          />
        </div>
      </Reveal>

      <div className="flex-1 flex items-center section-spacing">
        <div className="container-editorial">
          <div className="max-w-3xl">
            <Reveal delay={100}>
              <h1 className="heading-display text-foreground mb-6">
                Mezanino<br />
                <span className="italic font-light">Estúdio Criativo</span>
              </h1>
            </Reveal>

            <Reveal delay={200}>
              <p className="text-lg md:text-xl font-light text-muted-foreground mb-8 max-w-2xl leading-relaxed">
                Plataforma dedicada à interseção entre estratégia e planejamento criativo.
              </p>
            </Reveal>

            <Reveal delay={300}>
              <div className="border-t border-subtle pt-8 max-w-2xl">
                <p className="body-editorial mb-4">
                  Mezanino Estúdio Criativo é uma plataforma dedicada ao desenvolvimento de pensamento estratégico, planejamento criativo e articulação de projetos em diferentes contextos institucionais.
                </p>
                <p className="body-editorial mb-4">
                  Nasce da experiência em produção de projetos, curadoria, gestão de equipes e desenvolvimento de iniciativas que operam na interface entre estratégia, comunicação e inovação.
                </p>
                <p className="body-editorial mb-10">
                  Seu foco está na tradução de ideias em processos capazes de ganhar consistência institucional, clareza narrativa e continuidade.
                </p>
              </div>
            </Reveal>

            <Reveal delay={400}>
              <div className="flex flex-wrap gap-4">
                {[
                  { label: "Sobre", href: "#sobre" },
                  { label: "Atuação", href: "#atuacao" },
                  { label: "Contato", href: "#contato" },
                ].map((item) => (
                  <button
                    key={item.href}
                    onClick={() => scrollTo(item.href)}
                    className="text-sm uppercase tracking-widest font-light text-foreground border border-foreground/20 px-6 py-3 hover:bg-foreground hover:text-background transition-all duration-300"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
