import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Reveal from "./Reveal";

interface Essay {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  thumbnail_url: string | null;
  published_at: string;
}

const EssaysSection = () => {
  const { data: essays } = useQuery({
    queryKey: ["essays-home"],
    queryFn: async () => {
      const { data, error } = await (supabase
        .from("essays")
        .select("id, title, slug, excerpt, published_at, thumbnail_url") as any)
        .order("published_at", { ascending: false })
        .limit(4);
      if (error) throw error;
      return data as Essay[];
    },
  });

  if (!essays || essays.length === 0) return null;

  const formatDate = (dateStr: string) =>
    new Date(dateStr).toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });

  return (
    <section id="ensaios" className="section-light">
      <div className="container-editorial py-24 md:py-32">
        <Reveal>
          <h2 className="heading-section mb-8 md:mb-12">Ensaios</h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {essays.map((essay, i) => (
            <Reveal key={essay.id} delay={i * 80}>
              <Link
                to={`/ensaios/${essay.slug}`}
                className="group block"
              >
                {essay.thumbnail_url && (
                  <div className="aspect-[16/9] overflow-hidden mb-4">
                    <img
                      src={essay.thumbnail_url}
                      alt={essay.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                )}
                <h3 className="text-lg md:text-xl font-medium group-hover:opacity-70 transition-opacity duration-300">
                  {essay.title}
                </h3>
                <p className="text-sm text-[hsl(var(--light-muted))] mt-1 font-light line-clamp-2">
                  {essay.excerpt}
                </p>
                <p className="text-xs text-[hsl(var(--light-muted))] mt-2 font-light tracking-wide">
                  {formatDate(essay.published_at)}
                </p>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal delay={400}>
          <div className="mt-12">
            <Link
              to="/ensaios"
              className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.2em] font-medium hover:opacity-70 transition-opacity duration-300"
            >
              Ver todos os ensaios
              <ArrowRight size={16} strokeWidth={1.5} />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default EssaysSection;
