import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { useParams, Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { ArrowLeft, Linkedin } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Reveal from "@/components/Reveal";

interface Essay {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  image_url: string | null;
  linkedin_url: string | null;
  published_at: string;
}

const EssayDetail = () => {
  const { slug } = useParams<{ slug: string }>();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  const { data: essay, isLoading } = useQuery({
    queryKey: ["essay", slug],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("essays")
        .select("*")
        .eq("slug", slug!)
        .single();
      if (error) throw error;
      return data as Essay;
    },
    enabled: !!slug,
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
        <div className="container-editorial py-24 md:py-32">
          {isLoading ? (
            <p className="body-editorial">Carregando...</p>
          ) : !essay ? (
            <div>
              <p className="body-editorial mb-8">Ensaio não encontrado.</p>
              <Link
                to="/ensaios"
                className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.2em] font-medium hover:opacity-70 transition-opacity"
              >
                <ArrowLeft size={16} strokeWidth={1.5} />
                Voltar aos ensaios
              </Link>
            </div>
          ) : (
            <article>
              <Reveal>
                <Link
                  to="/ensaios"
                  className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.2em] font-light text-[hsl(var(--light-muted))] hover:opacity-70 transition-opacity mb-12 block"
                >
                  <ArrowLeft size={14} strokeWidth={1.5} />
                  Ensaios
                </Link>
              </Reveal>

              <Reveal delay={100}>
                <header className="mb-12 md:mb-16">
                  <h1 className="heading-display mb-4 text-[calc(2rem-4px)] sm:text-[calc(2.5rem-4px)] md:text-[calc(3rem-4px)] lg:text-[calc(3.5rem-4px)]">{essay.title}</h1>
                  <p className="text-sm text-[hsl(var(--light-muted))] font-light tracking-wide">
                    {formatDate(essay.published_at)}
                  </p>
                </header>
              </Reveal>

              <Reveal delay={200}>
                <div className="max-w-3xl">
                  {essay.image_url ? (
                    <div className="md:float-right md:ml-8 md:mb-6 md:w-[35%] mb-8">
                      <img
                        src={essay.image_url}
                        alt={essay.title}
                        className="w-full aspect-square object-cover"
                      />
                    </div>
                  ) : null}

                  <div className="prose-editorial space-y-6">
                    {essay.content.split("\n\n").map((paragraph, i) => (
                      <p
                        key={i}
                        className="text-base md:text-lg leading-relaxed font-light text-[hsl(var(--light-muted))]"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>

                  {/* Clear float */}
                  <div className="clear-both" />

                  {essay.linkedin_url && (
                    <div className="mt-16 pt-8 border-t border-[hsl(var(--light-border))]">
                      <a
                        href={essay.linkedin_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 text-[hsl(var(--light-muted))] hover:opacity-70 transition-opacity text-sm font-light"
                      >
                        <Linkedin size={16} strokeWidth={1.5} />
                        Ver publicação original no LinkedIn
                      </a>
                    </div>
                  )}
                </div>
              </Reveal>
            </article>
          )}
        </div>
      </main>
      <SiteFooter />
    </>
  );
};

export default EssayDetail;
