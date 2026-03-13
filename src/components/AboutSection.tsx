import Reveal from "./Reveal";

const AboutSection = () =>
<section id="sobre" className="section-spacing border-t border-subtle bg-primary-foreground">
    <div className="container-editorial">
      <Reveal>
        <p className="text-sm uppercase tracking-widest text-muted-foreground mb-8 font-light">Sobre</p>
      </Reveal>
      <Reveal delay={100}>
        <h2 className="heading-section text-foreground">
          Pensamento estratégico e articulação de projetos.
        </h2>
      </Reveal>
    </div>
  </section>;


export default AboutSection;