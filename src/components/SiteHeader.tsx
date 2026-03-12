import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
{ label: "Sobre", href: "#sobre" },
{ label: "Atuação", href: "#atuacao" },
{ label: "Fundador", href: "#fundador" },
{ label: "Contato", href: "#contato" }];


const SiteHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-subtle">
      <div className="container-editorial flex items-center justify-between h-16 md:h-20 bg-black">
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="font-heading text-lg md:text-xl font-medium tracking-tight text-foreground">
          Mezanino
        </button>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) =>
          <button
            key={item.href}
            onClick={() => scrollTo(item.href)}
            className="text-sm font-light text-muted-foreground hover:text-foreground transition-colors tracking-wide uppercase">
            
              {item.label}
            </button>
          )}
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu">
          
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen &&
      <nav className="md:hidden bg-background border-b border-subtle">
          <div className="container-editorial py-6 flex flex-col gap-4">
            {navItems.map((item) =>
          <button
            key={item.href}
            onClick={() => scrollTo(item.href)}
            className="text-left text-sm font-light text-muted-foreground hover:text-foreground transition-colors tracking-wide uppercase">
            
                {item.label}
              </button>
          )}
          </div>
        </nav>
      }
    </header>);

};

export default SiteHeader;