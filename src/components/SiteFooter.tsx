const SiteFooter = () => (
  <footer className="border-t border-subtle py-12">
    <div className="container-editorial flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
      <p className="font-heading text-lg font-medium text-foreground tracking-tight">
        Mezanino Estúdio Criativo
      </p>
      <p className="text-xs text-muted-foreground font-light tracking-wide">
        © {new Date().getFullYear()} Todos os direitos reservados.
      </p>
    </div>
  </footer>
);

export default SiteFooter;
