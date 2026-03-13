const SiteFooter = () => (
  <footer className="border-t border-border py-12 bg-background">
    <div className="container-editorial flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
      <p className="font-heading text-lg font-normal text-foreground tracking-tight">
        Mezanino Estúdio Criativo
      </p>
      <p className="text-[11px] text-muted-foreground font-light tracking-[0.15em] uppercase">
        © {new Date().getFullYear()} Todos os direitos reservados
      </p>
    </div>
  </footer>
);

export default SiteFooter;
