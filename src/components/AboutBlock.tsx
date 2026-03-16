import capaImage from "@/assets/mezaninoestudio_capa.jpeg";
import Reveal from "./Reveal";

const AboutBlock = () => (
  <>
    {/* Image section — full width */}
    <section className="bg-background">
      <Reveal>
        <div className="w-full">
          <img
            src={capaImage}
            alt="Mezanino Estúdio Criativo — identidade visual"
            className="w-full h-[50vh] md:h-[70vh] object-cover"
          />
        </div>
      </Reveal>
    </section>

    {/* About text — white bg, black text */}
    <section id="about" className="section-fullscreen section-light">
      <div className="container-editorial py-24 md:py-32">
        <div className="max-w-3xl space-y-8">
          <Reveal>
            <p className="text-[1.75rem] sm:text-[2.15rem] md:text-[2.65rem] lg:text-[3.15rem] font-semibold leading-[1.15] tracking-tight text-[hsl(var(--light-fg))]">
              Mezanino Estúdio Criativo é uma plataforma dedicada ao desenvolvimento de pensamento estratégico, planejamento criativo e articulação de projetos em diferentes contextos institucionais.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <p className="heading-display text-[hsl(var(--light-fg))]">
              Nasce da experiência em produção de projetos, curadoria, gestão de equipes e desenvolvimento de iniciativas que operam na interface entre estratégia, comunicação e inovação.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  </>
);

export default AboutBlock;
