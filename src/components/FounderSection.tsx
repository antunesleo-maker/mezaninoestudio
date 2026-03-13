import founderPhoto from "@/assets/leonardo-antunes.jpeg";
import Reveal from "./Reveal";

const FounderSection = () => (
  <section id="fundador" className="section-light">
    <div className="container-editorial py-24 md:py-32">
      <div className="grid md:grid-cols-2 gap-12 md:gap-24 items-start">
        {/* Photo left */}
        <Reveal>
          <img
            src={founderPhoto}
            alt="Leonardo Antunes — Fundador do Mezanino Estúdio Criativo"
            className="w-full h-auto object-cover object-center"
            style={{ filter: "grayscale(100%)" }}
          />
        </Reveal>

        {/* Text right */}
        <div>
          <Reveal>
            <h2 className="heading-section mb-8">
              Leonardo Antunes
            </h2>
          </Reveal>
          <div className="space-y-6">
            <Reveal delay={100}>
              <p className="body-editorial">
                Leonardo Antunes atua na concepção e condução de projetos estratégicos na interface entre comunicação, planejamento criativo e ambientes digitais.
              </p>
            </Reveal>
            <Reveal delay={180}>
              <p className="body-editorial">
                Designer formado pela UFPE, iniciou a carreira em web design e arquitetura de navegação, base que orienta sua visão sobre sistemas digitais, narrativa e comportamento de público.
              </p>
            </Reveal>
            <Reveal delay={260}>
              <p className="body-editorial">
                Ao longo da trajetória, participou da coordenação de iniciativas culturais e institucionais no setor público e privado, além de integrar processos de curadoria e avaliação de projetos.
              </p>
            </Reveal>
            <Reveal delay={340}>
              <p className="body-editorial">
                No Mezanino Estúdio Criativo, concentra sua atuação no desenvolvimento de pensamento estratégico, planejamento de iniciativas e articulação de projetos em diferentes contextos institucionais.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default FounderSection;
