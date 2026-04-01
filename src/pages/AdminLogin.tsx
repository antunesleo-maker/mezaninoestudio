import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const { error: authError } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (authError) {
      setError("Credenciais inválidas.");
      setLoading(false);
      return;
    }

    navigate("/admin/ensaios");
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="w-full max-w-sm px-8">
        <h1 className="text-xl font-semibold text-foreground mb-8 tracking-tight">
          Painel Administrativo
        </h1>
        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3 font-light">
              Email
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-transparent border-b border-border py-2.5 text-foreground font-light focus:outline-none focus:border-foreground transition-colors duration-500"
            />
          </div>
          <div>
            <label className="block text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3 font-light">
              Senha
            </label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-transparent border-b border-border py-2.5 text-foreground font-light focus:outline-none focus:border-foreground transition-colors duration-500"
            />
          </div>
          {error && <p className="text-red-400 text-sm font-light">{error}</p>}
          <button
            type="submit"
            disabled={loading}
            className="text-sm uppercase tracking-[0.2em] font-medium text-background bg-foreground px-10 py-4 hover:opacity-80 transition-opacity duration-300 disabled:opacity-50"
          >
            {loading ? "Entrando..." : "Entrar"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
