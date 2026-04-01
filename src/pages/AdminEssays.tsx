import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Plus, Edit, LogOut, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

interface Essay {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  published_at: string;
}

const AdminEssays = () => {
  const navigate = useNavigate();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (!session) navigate("/admin");
    });
  }, [navigate]);

  const { data: essays, isLoading } = useQuery({
    queryKey: ["admin-essays"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("essays")
        .select("id, title, slug, excerpt, published_at")
        .order("published_at", { ascending: false });
      if (error) throw error;
      return data as Essay[];
    },
  });

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/admin");
  };

  const formatDate = (dateStr: string) =>
    new Date(dateStr).toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border">
        <div className="container-editorial flex items-center justify-between h-16">
          <div className="flex items-center gap-4">
            <Link
              to="/"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft size={18} strokeWidth={1.5} />
            </Link>
            <h1 className="text-base font-semibold tracking-tight">Ensaios</h1>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={() => navigate("/admin/ensaios/novo")}
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.15em] font-medium text-background bg-foreground px-6 py-2.5 hover:opacity-80 transition-opacity"
            >
              <Plus size={14} strokeWidth={1.5} />
              Novo ensaio
            </button>
            <button
              onClick={handleLogout}
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Sair"
            >
              <LogOut size={18} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </header>

      <div className="container-editorial py-12">
        {isLoading ? (
          <p className="text-muted-foreground font-light">Carregando...</p>
        ) : !essays || essays.length === 0 ? (
          <p className="text-muted-foreground font-light">
            Nenhum ensaio criado ainda.
          </p>
        ) : (
          <div>
            {essays.map((essay) => (
              <div
                key={essay.id}
                className="py-5 border-t border-border flex items-center justify-between gap-4"
              >
                <div className="flex-1 min-w-0">
                  <h3 className="text-base font-medium truncate">
                    {essay.title}
                  </h3>
                  <p className="text-sm text-muted-foreground font-light mt-0.5">
                    {formatDate(essay.published_at)}
                  </p>
                </div>
                <button
                  onClick={() => navigate(`/admin/ensaios/${essay.id}`)}
                  className="text-muted-foreground hover:text-foreground transition-colors shrink-0"
                >
                  <Edit size={16} strokeWidth={1.5} />
                </button>
              </div>
            ))}
            <div className="border-t border-border" />
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminEssays;
