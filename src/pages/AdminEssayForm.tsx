import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { ArrowLeft } from "lucide-react";

const slugify = (text: string) =>
  text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

interface EssayForm {
  title: string;
  content: string;
  excerpt: string;
  image_url: string;
  linkedin_url: string;
  published_at: string;
}

const emptyForm: EssayForm = {
  title: "",
  content: "",
  excerpt: "",
  image_url: "",
  linkedin_url: "",
  published_at: new Date().toISOString().slice(0, 16),
};

const AdminEssayForm = () => {
  const { id } = useParams<{ id: string }>();
  const isEditing = !!id && id !== "novo";
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const [form, setForm] = useState<EssayForm>(emptyForm);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (!session) navigate("/admin");
    });
  }, [navigate]);

  // Load existing essay
  const { isLoading } = useQuery({
    queryKey: ["admin-essay", id],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("essays")
        .select("*")
        .eq("id", id!)
        .single();
      if (error) throw error;
      setForm({
        title: data.title,
        content: data.content,
        excerpt: data.excerpt,
        image_url: data.image_url || "",
        linkedin_url: data.linkedin_url || "",
        published_at: new Date(data.published_at).toISOString().slice(0, 16),
      });
      return data;
    },
    enabled: isEditing,
  });

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    const ext = file.name.split(".").pop();
    const fileName = `${Date.now()}.${ext}`;

    const { error: uploadError } = await supabase.storage
      .from("essay-images")
      .upload(fileName, file);

    if (uploadError) {
      setError("Erro ao enviar imagem.");
      setUploading(false);
      return;
    }

    const { data: urlData } = supabase.storage
      .from("essay-images")
      .getPublicUrl(fileName);

    setForm((prev) => ({ ...prev, image_url: urlData.publicUrl }));
    setUploading(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setError("");

    const slug = slugify(form.title);
    const payload = {
      title: form.title.trim(),
      slug,
      content: form.content.trim(),
      excerpt: form.excerpt.trim(),
      image_url: form.image_url.trim() || null,
      linkedin_url: form.linkedin_url.trim() || null,
      published_at: new Date(form.published_at).toISOString(),
      updated_at: new Date().toISOString(),
    };

    let result;
    if (isEditing) {
      result = await supabase.from("essays").update(payload).eq("id", id!);
    } else {
      result = await supabase.from("essays").insert(payload);
    }

    if (result.error) {
      setError(result.error.message);
      setSaving(false);
      return;
    }

    queryClient.invalidateQueries({ queryKey: ["admin-essays"] });
    queryClient.invalidateQueries({ queryKey: ["essays"] });
    queryClient.invalidateQueries({ queryKey: ["essays-home"] });
    navigate("/admin/ensaios");
  };

  const fieldClass =
    "w-full bg-transparent border-b border-border py-2.5 text-foreground font-light focus:outline-none focus:border-foreground transition-colors duration-500";

  if (isEditing && isLoading) {
    return (
      <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
        <p className="text-muted-foreground font-light">Carregando...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border">
        <div className="container-editorial flex items-center justify-between h-16">
          <div className="flex items-center gap-4">
            <button
              onClick={() => navigate("/admin/ensaios")}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft size={18} strokeWidth={1.5} />
            </button>
            <h1 className="text-base font-semibold tracking-tight">
              {isEditing ? "Editar ensaio" : "Novo ensaio"}
            </h1>
          </div>
        </div>
      </header>

      <div className="container-editorial py-12 max-w-2xl">
        <form onSubmit={handleSubmit} className="space-y-8">
          <div>
            <label className="block text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3 font-light">
              Título *
            </label>
            <input
              type="text"
              required
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
              className={fieldClass}
              maxLength={200}
            />
          </div>

          <div>
            <label className="block text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3 font-light">
              Trecho (excerpt) *
            </label>
            <textarea
              required
              value={form.excerpt}
              onChange={(e) => setForm({ ...form, excerpt: e.target.value })}
              rows={2}
              className={`${fieldClass} resize-none`}
              maxLength={300}
            />
          </div>

          <div>
            <label className="block text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3 font-light">
              Conteúdo *
            </label>
            <textarea
              required
              value={form.content}
              onChange={(e) => setForm({ ...form, content: e.target.value })}
              rows={16}
              className={`${fieldClass} resize-y`}
            />
            <p className="text-xs text-muted-foreground mt-2 font-light">
              Separe parágrafos com uma linha em branco.
            </p>
          </div>

          <div>
            <label className="block text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3 font-light">
              Imagem
            </label>
            {form.image_url && (
              <div className="mb-4">
                <img
                  src={form.image_url}
                  alt="Preview"
                  className="w-32 h-32 object-cover"
                />
              </div>
            )}
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="text-sm text-muted-foreground font-light"
            />
            {uploading && (
              <p className="text-xs text-muted-foreground mt-2">Enviando...</p>
            )}
            <div className="mt-3">
              <label className="block text-xs text-muted-foreground mb-1 font-light">
                ou cole a URL da imagem:
              </label>
              <input
                type="url"
                value={form.image_url}
                onChange={(e) =>
                  setForm({ ...form, image_url: e.target.value })
                }
                className={fieldClass}
                placeholder="https://..."
              />
            </div>
          </div>

          <div>
            <label className="block text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3 font-light">
              Data de publicação *
            </label>
            <input
              type="datetime-local"
              required
              value={form.published_at}
              onChange={(e) =>
                setForm({ ...form, published_at: e.target.value })
              }
              className={fieldClass}
            />
          </div>

          <div>
            <label className="block text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3 font-light">
              Link externo (LinkedIn)
            </label>
            <input
              type="url"
              value={form.linkedin_url}
              onChange={(e) =>
                setForm({ ...form, linkedin_url: e.target.value })
              }
              className={fieldClass}
              placeholder="https://linkedin.com/..."
            />
          </div>

          {error && <p className="text-red-400 text-sm font-light">{error}</p>}

          <button
            type="submit"
            disabled={saving || uploading}
            className="text-sm uppercase tracking-[0.2em] font-medium text-background bg-foreground px-10 py-4 hover:opacity-80 transition-opacity duration-300 disabled:opacity-50"
          >
            {saving ? "Salvando..." : isEditing ? "Salvar alterações" : "Publicar"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminEssayForm;
