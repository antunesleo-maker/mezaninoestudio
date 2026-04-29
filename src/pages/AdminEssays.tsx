import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Plus, Edit, LogOut, ArrowLeft, ArrowUp, ArrowDown } from "lucide-react";
import { Link } from "react-router-dom";
import { toast } from "@/hooks/use-toast";

interface Essay {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  published_at: string;
  display_order: number;
}

const AdminEssays = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (!session) navigate("/admin");
    });
  }, [navigate]);

  const { data: essays, isLoading } = useQuery({
    queryKey: ["admin-essays"],
    queryFn: async () => {
      const { data, error } = await (supabase
        .from("essays")
        .select("id, title, slug, excerpt, published_at, display_order") as any)
        .order("display_order", { ascending: true })
        .order("published_at", { ascending: false });
      if (error) throw error;
      return data as Essay[];
    },
  });

  const swapMutation = useMutation({
    mutationFn: async ({ a, b }: { a: Essay; b: Essay }) => {
      // Swap display_order between two essays
      const { error: e1 } = await (supabase.from("essays") as any)
        .update({ display_order: b.display_order })
        .eq("id", a.id);
      if (e1) throw e1;
      const { error: e2 } = await (supabase.from("essays") as any)
        .update({ display_order: a.display_order })
        .eq("id", b.id);
      if (e2) throw e2;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin-essays"] });
      queryClient.invalidateQueries({ queryKey: ["essays"] });
      queryClient.invalidateQueries({ queryKey: ["essays-home"] });
    },
    onError: (err: any) => {
      toast({
        title: "Erro ao reordenar",
        description: err?.message ?? "Tente novamente.",
        variant: "destructive",
      });
    },
  });

  const handleMove = (index: number, direction: -1 | 1) => {
    if (!essays) return;
    const target = index + direction;
    if (target < 0 || target >= essays.length) return;
    const a = essays[index];
    const b = essays[target];
    // If both have the same display_order (e.g. legacy 0), assign new sequential values first
    if (a.display_order === b.display_order) {
      // Fallback: just reassign based on current array order with swap applied
      const reordered = [...essays];
      [reordered[index], reordered[target]] = [reordered[target], reordered[index]];
      Promise.all(
        reordered.map((e, i) =>
          (supabase.from("essays") as any)
            .update({ display_order: i + 1 })
            .eq("id", e.id)
        )
      ).then(() => {
        queryClient.invalidateQueries({ queryKey: ["admin-essays"] });
        queryClient.invalidateQueries({ queryKey: ["essays"] });
        queryClient.invalidateQueries({ queryKey: ["essays-home"] });
      });
      return;
    }
    swapMutation.mutate({ a, b });
  };

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
            {essays.map((essay, index) => (
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
                <div className="flex items-center gap-2 shrink-0">
                  <button
                    onClick={() => handleMove(index, -1)}
                    disabled={index === 0 || swapMutation.isPending}
                    className="text-muted-foreground hover:text-foreground transition-colors disabled:opacity-30 disabled:cursor-not-allowed p-1"
                    aria-label="Mover para cima"
                  >
                    <ArrowUp size={16} strokeWidth={1.5} />
                  </button>
                  <button
                    onClick={() => handleMove(index, 1)}
                    disabled={index === essays.length - 1 || swapMutation.isPending}
                    className="text-muted-foreground hover:text-foreground transition-colors disabled:opacity-30 disabled:cursor-not-allowed p-1"
                    aria-label="Mover para baixo"
                  >
                    <ArrowDown size={16} strokeWidth={1.5} />
                  </button>
                  <button
                    onClick={() => navigate(`/admin/ensaios/${essay.id}`)}
                    className="text-muted-foreground hover:text-foreground transition-colors p-1 ml-2"
                    aria-label="Editar"
                  >
                    <Edit size={16} strokeWidth={1.5} />
                  </button>
                </div>
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
