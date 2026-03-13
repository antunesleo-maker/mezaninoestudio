import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Atuação", href: "#atuacao" },
  { label: "Fundador", href: "#fundador" },
  { label: "Contato", href: "#contato" },
];

const SiteHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 mix-blend-difference">
      <div className="container-editorial flex items-center justify-between h-16 md:h-20">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="font-heading text-xl md:text-2xl font-normal tracking-tight text-white"
        >
          Mezanino
        </button>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => scrollTo(item.href)}
              className="text-[11px] font-light text-white/70 hover:text-white transition-colors duration-300 tracking-[0.2em] uppercase"
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          {menuOpen ? <X size={22} strokeWidth={1.5} /> : <Menu size={22} strokeWidth={1.5} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border">
          <div className="container-editorial py-8 flex flex-col gap-6">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollTo(item.href)}
                className="text-left text-sm font-light text-muted-foreground hover:text-foreground transition-colors tracking-[0.2em] uppercase"
              >
                {item.label}
              </button>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
};

export default SiteHeader;
