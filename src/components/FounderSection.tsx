import founderPhoto from "@/assets/leonardo-antunes.jpeg";
import Reveal from "./Reveal";

const FounderSection = () => (
  <section id="fundador" className="section-fullscreen bg-background">
    <div className="container-editorial py-24 md:py-32">
      <Reveal>
        <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-6 font-light">
          Fundador
        </p>
      </Reveal>

      <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
        <div>
          <Reveal delay={100}>
            <h2 className="heading-section text-foreground mb-8">
              Leonardo<br />
              <span className="italic">Antunes</span>
            </h2>
          </Reveal>

          <div className="space-y-6">
            <Reveal delay={200}>
              <p className="body-editorial">
                Leonardo Antunes atua na concepção e condução de projetos estratégicos na interface entre comunicação, planejamento criativo e ambientes digitais.
              </p>
            </Reveal>
            <Reveal delay={280}>
              <p className="body-editorial">
                Designer formado pela UFPE, iniciou a carreira em web design e arquitetura de navegação, base que orienta sua visão sobre sistemas digitais, narrativa e comportamento de público.
              </p>
            </Reveal>
            <Reveal delay={360}>
              <p className="body-editorial">
                Ao longo da trajetória, participou da coordenação de iniciativas culturais e institucionais no setor público e privado, além de integrar processos de curadoria e avaliação de projetos.
              </p>
            </Reveal>
            <Reveal delay={440}>
              <p className="body-editorial">
                No Mezanino Estúdio Criativo, concentra sua atuação no desenvolvimento de pensamento estratégico, planejamento de iniciativas e articulação de projetos em diferentes contextos institucionais.
              </p>
            </Reveal>
          </div>
        </div>

        <Reveal delay={200}>
          <div className="relative">
            <img
              src={founderPhoto}
              alt="Leonardo Antunes — Fundador do Mezanino Estúdio Criativo"
              className="w-full max-w-md aspect-[3/4] object-cover object-top grayscale hover:grayscale-0 transition-all duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent pointer-events-none" />
          </div>
        </Reveal>
      </div>
    </div>
  </section>
);

export default FounderSection;
