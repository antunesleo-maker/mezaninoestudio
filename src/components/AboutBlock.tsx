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

    {/* About text — black bg */}
    <section id="about" className="section-fullscreen bg-background">
      <div className="container-editorial py-24 md:py-32">
        <div className="max-w-3xl">
          <Reveal>
            <p className="heading-display text-foreground">
              Mezanino Estúdio Criativo é uma plataforma dedicada ao desenvolvimento de pensamento estratégico, planejamento criativo e articulação de projetos em diferentes contextos institucionais.
            </p>
          </Reveal>
        </div>
      </div>
    </section>

    {/* Second text block */}
    <section className="section-fullscreen bg-background">
      <div className="container-editorial py-24 md:py-32">
        <div className="max-w-3xl">
          <Reveal>
            <p className="heading-display text-foreground">
              Nasce da experiência em produção de projetos, curadoria, gestão de equipes e desenvolvimento de iniciativas que operam na interface entre estratégia, comunicação e inovação.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  </>
);

export default AboutBlock;
