const HeroSection = () => {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center section-spacing pt-32">
      <div className="container-editorial">
        <div className="max-w-3xl">
          <h1 className="heading-display text-foreground mb-6">
            Mezanino<br />
            <span className="italic font-light">Estúdio Criativo</span>
          </h1>

          <p className="text-lg md:text-xl font-light text-muted-foreground mb-8 max-w-2xl leading-relaxed">
            Plataforma dedicada à interseção entre estratégia e planejamento criativo.
          </p>

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
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
