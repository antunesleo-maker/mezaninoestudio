import founderPhoto from "@/assets/leonardo-antunes.jpeg";
import Reveal from "./Reveal";
import { Linkedin } from "lucide-react";

const FounderSection = () =>
<section id="fundador" className="section-light">
    <div className="container-editorial py-24 md:py-32">
      <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-start">
        {/* Photo left */}
        <Reveal>
          <img
          src={founderPhoto}
          alt="Leonardo Antunes — Fundador do Mezanino Estúdio Criativo"
          className="w-[70%] h-auto object-cover object-center"
          style={{ filter: "grayscale(100%)" }} />
        
        </Reveal>

        {/* Text right */}
        <div>
          <Reveal>
            <h2 className="heading-section mb-2">
              Leonardo Antunes
            </h2>
            <p className="text-sm uppercase tracking-widest text-muted-foreground font-light mb-8">Fundador</p>
          </Reveal>
          <div className="space-y-6">
            <Reveal delay={100}>
              <p className="body-editorial">
                Atua na concepção e condução de projetos estratégicos na interface entre comunicação, planejamento criativo e ambientes digitais.
              </p>
            </Reveal>
            <Reveal delay={180}>
              <p className="body-editorial">
                Designer formado pela UFPE, iniciou a carreira em web design e arquitetura de navegação, base que orienta sua visão sobre sistemas digitais, narrativa e comportamento de público.
              </p>
            </Reveal>
            <Reveal delay={260}>
              <p className="body-editorial">Ao longo da trajetória, coordenou iniciativas em diferentes contextos públicos e privados, e atuou em processos de curadoria e avaliação de projetos em instituições de referência.

            </p>
            </Reveal>
            <Reveal delay={340}>
              <p className="body-editorial">No Mezanino Estúdio Criativo, desenvolve projetos estratégicos a partir de uma visão que integra método, narrativa e leitura de contexto — orientada para dar consistência a iniciativas em ambientes institucionais, políticos, culturais e digitais.

            </p>
            </Reveal>
            <Reveal delay={420}>
              <a
              href="https://www.linkedin.com/in/antunesleo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-2 text-muted-foreground hover:text-black transition-colors"
              aria-label="LinkedIn de Leonardo Antunes">
              
                <Linkedin size={18} strokeWidth={1.5} />
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </div>
  </section>;


export default FounderSection;