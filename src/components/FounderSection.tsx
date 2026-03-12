import founderPhoto from "@/assets/leonardo-antunes.jpeg";

const FounderSection = () => (
  <section id="fundador" className="section-spacing border-t border-subtle">
    <div className="container-editorial">
      <p className="text-sm uppercase tracking-widest text-muted-foreground mb-8 font-light">Fundador</p>
      <div className="grid md:grid-cols-2 gap-12 md:gap-20">
        <div>
          <img
            src={founderPhoto}
            alt="Leonardo Antunes — Fundador do Mezanino Estúdio Criativo"
            className="w-full max-w-sm aspect-[3/4] object-cover object-top grayscale hover:grayscale-0 transition-all duration-700"
          />
          <h2 className="heading-section text-foreground mt-8">
            Leonardo Antunes
          </h2>
        </div>
        <div className="space-y-6">
          <p className="body-editorial">
            Leonardo Antunes atua na concepção e condução de projetos estratégicos na interface entre comunicação, planejamento criativo e ambientes digitais.
          </p>
          <p className="body-editorial">
            Designer formado pela UFPE, iniciou a carreira em web design e arquitetura de navegação, base que orienta sua visão sobre sistemas digitais, narrativa e comportamento de público.
          </p>
          <p className="body-editorial">
            Ao longo da trajetória, participou da coordenação de iniciativas culturais e institucionais no setor público e privado, além de integrar processos de curadoria e avaliação de projetos. Também atuou em comunicação institucional em instituições de grande relevância em Pernambuco.
          </p>
          <p className="body-editorial">
            No Mezanino Estúdio Criativo, concentra sua atuação no desenvolvimento de pensamento estratégico, planejamento de iniciativas e articulação de projetos em diferentes contextos institucionais, integrando produção de projetos, curadoria e gestão de equipes.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default FounderSection;
