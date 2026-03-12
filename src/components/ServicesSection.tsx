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
  <section id="atuacao" className="section-spacing border-t border-subtle">
    <div className="container-editorial">
      <p className="text-sm uppercase tracking-widest text-muted-foreground mb-8 font-light">Atuação</p>
      <h2 className="heading-section text-foreground mb-16 max-w-xl">
        Áreas de atuação
      </h2>
      <div className="space-y-0">
        {services.map((service, i) => (
          <div
            key={i}
            className="grid md:grid-cols-3 gap-4 md:gap-12 py-8 border-t border-subtle group"
          >
            <div className="flex items-baseline gap-4">
              <span className="text-xs text-muted-foreground font-light tabular-nums">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="heading-subsection text-foreground group-hover:opacity-70 transition-opacity">
                {service.title}
              </h3>
            </div>
            <p className="body-editorial md:col-span-2">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
