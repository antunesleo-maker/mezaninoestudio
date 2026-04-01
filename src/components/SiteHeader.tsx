import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Sobre", href: "#about" },
  { label: "Atuação", href: "#atuacao" },
  { label: "Ensaios", href: "#ensaios", route: "/ensaios" },
  { label: "Fundador", href: "#fundador" },
  { label: "Contato", href: "#contato" },
];

const SiteHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === "/";

  const handleNav = (item: typeof navItems[0]) => {
    setMenuOpen(false);
    if ('route' in item && item.route) {
      if (isHome) {
        const el = document.querySelector(item.href);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
          return;
        }
      }
      navigate(item.route);
    } else if (isHome) {
      document.querySelector(item.href)?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/" + item.href);
    }
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 mix-blend-difference pointer-events-none">
        <div className="container-editorial flex items-center justify-between h-16 md:h-20 pointer-events-auto">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-lg md:text-xl font-semibold tracking-tight text-white"
          >
            Mezanino
          </button>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-10">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNav(item)}
                className="text-[11px] font-light text-white/60 hover:text-white transition-colors duration-300 tracking-[0.15em] uppercase"
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
      </header>

      {/* Mobile menu - outside mix-blend-difference */}
      {menuOpen && (
        <div className="fixed top-16 left-0 right-0 z-50 md:hidden">
          <nav className="bg-black">
            <div className="container-editorial py-4 flex flex-col gap-2">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollTo(item.href)}
                  className="text-left text-sm font-light text-white/80 hover:text-white transition-colors tracking-[0.15em] uppercase bg-[#111] px-4 py-3"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </nav>
        </div>
      )}
    </>
  );
};

export default SiteHeader;
