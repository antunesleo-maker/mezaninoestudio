import { useState } from "react";
import { Mail, Linkedin } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import Reveal from "./Reveal";

const ContactSection = () => {
  const [form, setForm] = useState({ nome: "", email: "", organizacao: "", mensagem: "" });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setError("");

    try {
      const { data, error: fnError } = await supabase.functions.invoke("send-contact", {
        body: form,
      });

      if (fnError) throw fnError;
      setSubmitted(true);
    } catch (err: any) {
      console.error("Erro ao enviar:", err);
      setError("Erro ao enviar mensagem. Tente novamente.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contato" className="min-h-screen flex flex-col justify-center bg-background text-foreground">
      <div className="container-editorial py-24 md:py-32">
        <Reveal>
          <h2 className="heading-section text-foreground mb-10 md:mb-14">
            Vamos conversar?
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-[1fr_2fr] gap-16 md:gap-24">
          <div>
            <Reveal delay={100}>
              <div className="space-y-6">
                <a
                  href="mailto:mezaninoestudio@gmail.com"
                  className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors duration-300 text-base font-light"
                >
                  <Mail size={18} strokeWidth={1.5} />
                  mezaninoestudio@gmail.com
                </a>
                <a
                  href="https://www.linkedin.com/company/mezaninoestudio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors duration-300 text-base font-light"
                >
                  <Linkedin size={18} strokeWidth={1.5} />
                  LinkedIn
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal delay={200}>
            <div>
              {submitted ? (
                <div className="py-16">
                  <p className="heading-subsection mb-3">Obrigado pelo contato.</p>
                  <p className="body-editorial">Retornaremos em breve.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {[
                    { key: "nome" as const, label: "Nome", type: "text", required: true },
                    { key: "email" as const, label: "Email", type: "email", required: true },
                    { key: "organizacao" as const, label: "Organização", type: "text", required: false },
                  ].map((field) => (
                    <div key={field.key}>
                      <label className="block text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3 font-light">
                        {field.label}
                      </label>
                      <input
                        type={field.type}
                        required={field.required}
                        value={form[field.key]}
                        onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                        className="w-full bg-transparent border-b border-border py-3 text-foreground font-light focus:outline-none focus:border-foreground transition-colors duration-500"
                        maxLength={field.key === "email" ? 255 : 100}
                      />
                    </div>
                  ))}
                  <div>
                    <label className="block text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3 font-light">
                      Mensagem
                    </label>
                    <textarea
                      required
                      value={form.mensagem}
                      onChange={(e) => setForm({ ...form, mensagem: e.target.value })}
                      rows={2}
                      maxLength={2000}
                      className="w-full bg-transparent border-b border-border py-3 text-foreground font-light focus:outline-none focus:border-foreground transition-colors duration-500 resize-none"
                    />
                  </div>
                  {error && (
                    <p className="text-red-400 text-sm font-light">{error}</p>
                  )}
                  <button
                    type="submit"
                    disabled={sending}
                    className="text-sm uppercase tracking-[0.2em] font-medium text-background bg-foreground px-10 py-4 hover:opacity-80 transition-opacity duration-300 disabled:opacity-50"
                  >
                    {sending ? "Enviando..." : "Enviar"}
                  </button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
