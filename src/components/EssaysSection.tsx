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
  published_at: string;
}

const EssaysSection = () => {
  const { data: essays } = useQuery({
    queryKey: ["essays-home"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("essays")
        .select("id, title, slug, excerpt, published_at")
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

        <div>
          {essays.map((essay, i) => (
            <Reveal key={essay.id} delay={i * 80}>
              <Link
                to={`/ensaios/${essay.slug}`}
                className="group block py-6 md:py-8 border-t border-[hsl(var(--light-border))]"
              >
                <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-12">
                  <div className="flex-1">
                    <h3 className="text-lg md:text-xl font-medium group-hover:opacity-70 transition-opacity duration-300">
                      {essay.title}
                    </h3>
                    <p className="text-sm text-[hsl(var(--light-muted))] mt-1 font-light">
                      {formatDate(essay.published_at)}
                    </p>
                  </div>
                  <p className="text-base md:text-lg font-light text-[hsl(var(--light-muted))] max-w-md">
                    {essay.excerpt}
                  </p>
                </div>
              </Link>
            </Reveal>
          ))}
          <div className="border-t border-[hsl(var(--light-border))]" />
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
