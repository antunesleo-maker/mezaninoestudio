import Reveal from "./Reveal";

const services = [
  {
    title: "Planejamento Estratégico",
    description: "Desenvolvimento de estratégias para projetos institucionais, culturais e digitais.",
  },
  {
    title: "Planejamento Criativo",
    description: "Estruturação de conceitos, narrativas e direções criativas para iniciativas e programas.",
  },
  {
    title: "Articulação de Projetos",
    description: "Concepção e organização de iniciativas em ambientes institucionais e culturais.",
  },
  {
    title: "Curadoria e Avaliação",
    description: "Participação em processos de seleção, curadoria e análise de projetos.",
  },
  {
    title: "Comunicação Institucional",
    description: "Estratégias de posicionamento, narrativa institucional e organização de comunicação.",
  },
];

const ServicesSection = () => (
  <section id="atuacao" className="section-fullscreen bg-background">
    <div className="container-editorial py-24 md:py-32">
      <Reveal>
        <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-6 font-light">
          Atuação
        </p>
      </Reveal>
      <Reveal delay={100}>
        <h2 className="heading-section text-foreground mb-16 md:mb-24 max-w-2xl">
          Áreas de atuação
        </h2>
      </Reveal>

      <div className="space-y-0">
        {services.map((service, i) => (
          <Reveal key={i} delay={150 + i * 100}>
            <div className="group grid md:grid-cols-[auto_1fr_1.5fr] gap-4 md:gap-12 py-8 md:py-10 border-t border-subtle items-baseline">
              <span className="text-xs text-muted-foreground/50 font-light tabular-nums tracking-wider">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="text-xl md:text-2xl font-heading text-foreground group-hover:text-muted-foreground transition-colors duration-500">
                {service.title}
              </h3>
              <p className="body-editorial opacity-0 group-hover:opacity-100 transition-opacity duration-500 hidden md:block">
                {service.description}
              </p>
              <p className="body-editorial md:hidden">
                {service.description}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
