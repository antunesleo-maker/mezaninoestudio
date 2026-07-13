import { useState } from "react";
import { MessageCircle, Mail, Menu, X, Compass, Share2, Printer, Camera, ArrowDown } from "lucide-react";
import Reveal from "@/components/Reveal";
import heroBg from "@/assets/cabeca-site-ideias.png.asset.json";
import heroMobileBg from "@/assets/cabeca-site-ideias-mobile.png.asset.json";
import founderPhoto from "@/assets/leonardo-antunes.jpeg";

const WHATSAPP_URL = "https://wa.me/5581991087214";
const EMAIL = "mezaninoestudio@gmail.com";

const scrollToContato = (e?: React.MouseEvent) => {
  e?.preventDefault();
  document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" });
};

const services = [
  {
    icon: Compass,
    title: "Estratégia de Comunicação",
    description:
      "Diagnosticamos sua comunicação e sua atuação política para construir um planejamento alinhado aos objetivos da campanha ou mandato, fortalecendo posicionamento, presença pública e relacionamento com o eleitorado.",
  },
  {
    icon: Share2,
    title: "Produção de Conteúdo Digital",
    description:
      "Planejamento e produção de conteúdos para redes sociais, adaptados às características de cada plataforma, ampliando alcance, engajamento e presença digital.",
  },
  {
    icon: Printer,
    title: "Produção Gráfica",
    description:
      "Desenvolvimento de materiais impressos para campanhas, como santinhos, santões, banners, cartazes, adesivos, praguinhas, materiais de mobilização e demais peças gráficas.",
  },
  {
    icon: Camera,
    title: "Cobertura de Campanha",
    description:
      "Produção de fotografias e vídeos para caminhadas, reuniões, visitas, plenárias, comícios, carreatas e demais atividades de campanha, com edição ágil para publicação nas redes sociais.",
  },
];

const ComunicacaoPolitica = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const anchors = [
    { label: "Serviços", href: "#servicos" },
    { label: "Experiência", href: "#experiencia" },
    { label: "Contato", href: "#contato" },
  ];

  const handleAnchor = (href: string) => {
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Top bar */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-subtle">
        <div className="container-editorial flex items-center justify-between h-16 md:h-20">
          <a
            href="#top"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="text-lg md:text-xl font-semibold tracking-tight text-foreground"
          >
            Mezanino
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {anchors.map((a) => (
              <button
                key={a.href}
                onClick={() => handleAnchor(a.href)}
                className="text-[11px] font-light text-muted-foreground hover:text-foreground transition-colors duration-300 tracking-[0.15em] uppercase"
              >
                {a.label}
              </button>
            ))}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] font-medium tracking-[0.15em] uppercase text-background bg-foreground px-5 py-2.5 hover:opacity-80 transition-opacity"
            >
              Vamos conversar
            </a>
          </nav>

          <button
            className="md:hidden text-foreground"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            {menuOpen ? <X size={22} strokeWidth={1.5} /> : <Menu size={22} strokeWidth={1.5} />}
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-background border-t border-subtle">
            <div className="container-editorial py-4 flex flex-col gap-2">
              {anchors.map((a) => (
                <button
                  key={a.href}
                  onClick={() => handleAnchor(a.href)}
                  className="text-left text-sm font-light text-foreground tracking-[0.15em] uppercase bg-secondary px-4 py-3"
                >
                  {a.label}
                </button>
              ))}
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-center text-sm font-medium tracking-[0.15em] uppercase text-background bg-foreground px-4 py-3"
              >
                Vamos conversar
              </a>
            </div>
          </div>
        )}
      </header>

      <main id="top">
        {/* HERO */}
        <section
          className="relative h-screen md:min-h-screen flex flex-col justify-start md:justify-center pt-4 md:pt-28"
        >
          {/* Desktop background */}
          <div
            className="hidden md:block absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('/hero-politica-desktop.png')` }}
          />
          {/* Mobile background */}
          <div
            className="block md:hidden absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url('/hero-politica-mobile.png')` }}
          />

          <div className="w-full px-6 md:px-12 lg:px-16 relative z-10 flex-none md:flex-1 flex items-start justify-start py-8 md:py-24 md:items-center md:justify-start">
            <div className="max-w-xl">
              <Reveal>
                <p
                  className="text-[11px] uppercase tracking-[0.25em] text-white mb-0 md:mb-8 font-light"
                  style={{ textShadow: "0 2px 8px rgba(0,0,0,0.6)" }}
                >
                  Comunicação Política
                </p>
              </Reveal>
              <Reveal delay={150}>
                <h1
                  className="heading-display text-white mb-0 md:mb-8 !text-[1.1rem] sm:!text-[2rem] md:!text-[3rem] !leading-[1.15]"
                  style={{ textShadow: "0 3px 16px rgba(0,0,0,0.7)" }}
                >
                  Comunicação estratégica para campanhas políticas.
                </h1>
              </Reveal>
              <Reveal delay={300}>
                <p
                  className="body-editorial !text-white mb-0 md:mb-10 max-w-lg text-xs md:text-base !leading-[1.25]"
                  style={{ textShadow: "0 2px 10px rgba(0,0,0,0.6)" }}
                >
                  Planejamento, conteúdo e produção para candidaturas, mandatos e projetos políticos.
                </p>
              </Reveal>
              <Reveal delay={450}>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-medium text-background bg-foreground px-5 py-2.5 md:px-8 md:py-4 md:text-sm hover:opacity-80 transition-opacity duration-300"
                >
                  <MessageCircle size={14} strokeWidth={1.5} />
                  Vamos conversar
                </a>
              </Reveal>
            </div>
          </div>

          <button
            onClick={() => document.querySelector("#servicos")?.scrollIntoView({ behavior: "smooth" })}
            className="absolute bottom-8 right-8 md:bottom-12 md:right-16 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors duration-300 animate-scroll-bounce"
            aria-label="Ver serviços"
          >
            <ArrowDown size={20} strokeWidth={1.5} />
          </button>
        </section>

        {/* SERVIÇOS */}
        <section id="servicos" className="section-spacing border-t border-subtle bg-background">
          <div className="container-editorial">
            <Reveal>
              <p className="text-sm uppercase tracking-widest text-muted-foreground mb-8 font-light">
                Nossos Serviços
              </p>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="heading-section text-foreground max-w-3xl mb-16 md:mb-24">
                Queremos ajudar você a conquistar resultados de forma mais rápida e eficiente por meio de estratégias de comunicação, planejamento, produção de conteúdo e mobilização.
              </h2>
            </Reveal>

            <div className="grid md:grid-cols-2 gap-px bg-foreground/10 border border-foreground/10">
              {services.map((s, i) => {
                const Icon = s.icon;
                return (
                  <Reveal key={s.title} delay={i * 80}>
                    <div className="bg-background p-8 md:p-12 h-full flex flex-col gap-6">
                      <Icon size={28} strokeWidth={1.25} className="text-foreground" />
                      <h3 className="heading-subsection text-foreground">{s.title}</h3>
                      <p className="body-editorial">{s.description}</p>
                    </div>
                  </Reveal>
                );
              })}
            </div>

            <Reveal delay={200}>
              <div className="mt-16 md:mt-24 flex justify-center">
                <button
                  onClick={() => scrollToContato()}
                  className="inline-flex items-center gap-3 text-sm uppercase tracking-[0.2em] font-medium text-background bg-foreground px-8 py-4 hover:opacity-80 transition-opacity duration-300"
                >
                  <MessageCircle size={16} strokeWidth={1.5} />
                  Vamos conversar
                </button>
              </div>
            </Reveal>
          </div>
        </section>

        {/* EXPERIÊNCIA */}
        <section id="experiencia" className="section-light">
          <div className="container-editorial py-24 md:py-32">
            <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
              <Reveal>
                <img
                  src={founderPhoto}
                  alt="Leonardo Antunes"
                  className="w-[70%] h-auto object-cover object-center"
                  style={{ filter: "grayscale(100%)" }}
                />
              </Reveal>

              <div>
                <Reveal>
                  <p className="text-sm uppercase tracking-widest text-muted-foreground font-light mb-4">
                    Experiência
                  </p>
                  <h2 className="heading-section mb-8">Leonardo Antunes</h2>
                </Reveal>
                <div className="space-y-6">
                <Reveal delay={100}>
                    <p className="body-editorial">
                      Ao longo da carreira, atuou em campanhas eleitorais, mandatos e projetos institucionais, desenvolvendo estratégias de comunicação, planejamento e coordenação de equipes.
                    </p>
                  </Reveal>
                  <Reveal delay={200}>
                    <p className="body-editorial">
                      Passou por instituições como o Jornal do Commercio, Governo de Pernambuco, Assembleia Legislativa de Pernambuco e Câmara Municipal do Recife, experiência que consolidou uma visão integrada da comunicação política, do planejamento à produção de conteúdo, cobertura audiovisual e materiais gráficos.
                    </p>
                  </Reveal>
                  <Reveal delay={300}>
                    <p className="body-editorial">
                      Designer formado pela UFPE, sua origem em web design e arquitetura da informação orienta até hoje sua leitura sobre narrativa, sistemas digitais e comportamento de público.
                    </p>
                  </Reveal>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CONTATO / CHAMADA FINAL */}
        <section id="contato" className="section-fullscreen bg-background border-t border-subtle">
          <div className="container-editorial py-24 md:py-32">
            <div className="max-w-3xl">
              <Reveal>
                <p className="text-sm uppercase tracking-widest text-muted-foreground mb-8 font-light">
                  Chamada final
                </p>
              </Reveal>
              <Reveal delay={100}>
                <h2 className="heading-section text-foreground mb-8">
                  Vamos conversar sobre sua campanha.
                </h2>
              </Reveal>
              <Reveal delay={200}>
                <p className="body-editorial mb-12 max-w-2xl">
                  Cada campanha possui desafios específicos. Entre em contato para conhecer as possibilidades de atuação e construir uma estratégia de comunicação adequada aos seus objetivos.
                </p>
              </Reveal>

              <Reveal delay={300}>
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-12">
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-3 text-sm uppercase tracking-[0.2em] font-medium text-background bg-foreground px-8 py-4 hover:opacity-80 transition-opacity duration-300"
                  >
                    <MessageCircle size={16} strokeWidth={1.5} />
                    WhatsApp
                  </a>
                  <a
                    href={`mailto:${EMAIL}`}
                    className="inline-flex items-center justify-center gap-3 text-sm uppercase tracking-[0.2em] font-medium text-foreground border border-foreground/30 px-8 py-4 hover:border-foreground transition-colors duration-300"
                  >
                    <Mail size={16} strokeWidth={1.5} />
                    E-mail
                  </a>
                </div>
              </Reveal>

              <Reveal delay={400}>
                <a
                  href={`mailto:${EMAIL}`}
                  className="text-muted-foreground hover:text-foreground transition-colors font-light"
                >
                  {EMAIL}
                </a>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-subtle bg-background py-10">
          <div className="container-editorial flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <p className="text-base font-semibold tracking-tight text-foreground">
              Mezanino Estúdio Criativo
            </p>
            <p className="text-[11px] text-muted-foreground font-light tracking-[0.15em] uppercase">
              © {new Date().getFullYear()} Todos os direitos reservados
            </p>
          </div>
        </footer>
      </main>
    </>
  );
};

export default ComunicacaoPolitica;
