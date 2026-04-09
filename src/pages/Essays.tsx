import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Link } from "react-router-dom";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Reveal from "@/components/Reveal";

interface Essay {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  published_at: string;
}

const Essays = () => {
  const { data: essays, isLoading } = useQuery({
    queryKey: ["essays"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("essays")
        .select("id, title, slug, excerpt, published_at")
        .order("published_at", { ascending: false });
      if (error) throw error;
      return data as Essay[];
    },
  });

  const formatDate = (dateStr: string) =>
    new Date(dateStr).toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });

  return (
    <>
      <SiteHeader />
      <main className="section-light min-h-screen pt-20 md:pt-24">
        <div className="container-editorial pt-12 md:pt-16 pb-24 md:pb-32">
          <Reveal>
            <h1 className="heading-display mb-4">Ensaios</h1>
            <p className="body-editorial mb-10 md:mb-14 max-w-2xl">
              Ensaios sobre estratégia, projetos e contexto institucional.
            </p>
          </Reveal>

          {isLoading ? (
            <div className="py-16">
              <p className="body-editorial">Carregando...</p>
            </div>
          ) : !essays || essays.length === 0 ? (
            <div className="py-16">
              <p className="body-editorial">Nenhum ensaio publicado ainda.</p>
            </div>
          ) : (
            <div>
              {essays.map((essay, i) => (
                <Reveal key={essay.id} delay={i * 80}>
                  <Link
                    to={`/ensaios/${essay.slug}`}
                    className="group block py-6 md:py-8 border-t border-[hsl(var(--light-border))]"
                  >
                    <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2 md:gap-12">
                      <div className="flex-1">
                        <h3 className="text-lg md:text-xl font-medium group-hover:opacity-70 transition-opacity duration-300">
                          {essay.title}
                        </h3>
                        <p className="text-sm text-[hsl(var(--light-muted))] mt-1 font-light">
                          {formatDate(essay.published_at)}
                        </p>
                      </div>
                      <p className="text-base font-light text-[hsl(var(--light-muted))] max-w-md">
                        {essay.excerpt}
                      </p>
                    </div>
                  </Link>
                </Reveal>
              ))}
              <div className="border-t border-[hsl(var(--light-border))]" />
            </div>
          )}
        </div>
      </main>
      <SiteFooter />
    </>
  );
};

export default Essays;
