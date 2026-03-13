const SiteFooter = () => (
  <footer className="section-light border-t border-[hsl(var(--light-border))] py-12">
    <div className="container-editorial flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
      <p className="text-base font-semibold tracking-tight">
        Mezanino Estúdio Criativo
      </p>
      <p className="text-[11px] text-[hsl(var(--light-muted))] font-light tracking-[0.15em] uppercase">
        © {new Date().getFullYear()} Todos os direitos reservados
      </p>
    </div>
  </footer>
);

export default SiteFooter;
