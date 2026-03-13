import Reveal from "./Reveal";

const AboutSection = () =>
<section id="sobre" className="section-spacing border-t border-subtle bg-primary-foreground">
    <div className="container-editorial">
      <Reveal>
        <p className="text-sm uppercase tracking-widest text-muted-foreground mb-8 font-light">Sobre</p>
      </Reveal>
      <div className="grid md:grid-cols-2 gap-12 md:gap-20">
        <Reveal delay={100}>
          <h2 className="heading-section text-foreground">
            Pensamento estratégico e articulação de projetos.
          </h2>
        </Reveal>
        <Reveal delay={200}>
          <div className="space-y-6">
            <p className="body-editorial">
              Seu trabalho se concentra em estruturar ideias, organizar processos e desenvolver iniciativas capazes de alcançar consistência institucional, clareza narrativa e continuidade.
            </p>
          </div>
        </Reveal>
      </div>
    </div>
  </section>;


export default AboutSection;