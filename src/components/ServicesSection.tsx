import Reveal from "./Reveal";

const services = [
  {
    title: "Estratégia",
    description: "Desenvolvimento de estratégias para projetos institucionais, culturais, políticos e digitais.",
  },
  {
    title: "Planejamento Criativo",
    description: "Estruturação de conceitos, narrativas e direções criativas para iniciativas e programas.",
  },
  {
    title: "Articulação de Projetos",
    description: "Concepção e organização de iniciativas em ambientes institucionais, políticos e culturais.",
  },
  {
    title: "Curadoria",
    description: "Participação em processos de seleção, curadoria de eventos e análise de projetos.",
  },
  {
    title: "Comunicação Institucional",
    description: "Estratégias de posicionamento, branding, narrativa institucional e gestão de comunicação.",
  },
];

const ServicesSection = () => (
  <section id="atuacao" className="section-fullscreen bg-background">
    <div className="container-editorial py-24 md:py-32">
      <Reveal>
        <h2 className="heading-section text-foreground mb-16 md:mb-24">
          Seu foco está na tradução de ideias em processos capazes de ganhar consistência institucional, clareza narrativa e continuidade.
        </h2>
      </Reveal>

      <div>
        {services.map((service, i) => (
          <Reveal key={i} delay={i * 80}>
            <div className="group py-6 md:py-8 border-t border-foreground/10 flex flex-col md:flex-row md:items-baseline md:justify-between gap-2 md:gap-12">
              <h3 className="text-lg md:text-xl font-medium text-foreground">
                {service.title}
              </h3>
              <p className="text-base md:text-lg font-light text-muted-foreground max-w-md">
                {service.description}
              </p>
            </div>
          </Reveal>
        ))}
        <div className="border-t border-foreground/10" />
      </div>
    </div>
  </section>
);

export default ServicesSection;
