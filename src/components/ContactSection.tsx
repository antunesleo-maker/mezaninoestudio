import { useState } from "react";
import { Mail, Linkedin } from "lucide-react";
import Reveal from "./Reveal";

const ContactSection = () => {
  const [form, setForm] = useState({ nome: "", email: "", organizacao: "", mensagem: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Contato — ${form.nome} (${form.organizacao || "sem organização"})`);
    const body = encodeURIComponent(
      `Nome: ${form.nome}\nEmail: ${form.email}\nOrganização: ${form.organizacao}\n\nMensagem:\n${form.mensagem}`
    );
    window.location.href = `mailto:mezaninoestudio@gmail.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <section id="contato" className="min-h-screen flex flex-col justify-center bg-background text-foreground">
      <div className="container-editorial py-24 md:py-32">
        <Reveal>
          <h2 className="heading-section text-foreground mb-16 md:mb-24">
            Vamos conversar?
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-16 md:gap-24">
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
                <form onSubmit={handleSubmit} className="space-y-8">
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
                        className="w-full bg-transparent border-b border-[hsl(var(--light-border))] py-3 text-[hsl(var(--light-fg))] font-light focus:outline-none focus:border-[hsl(var(--light-fg))] transition-colors duration-500"
                        maxLength={field.key === "email" ? 255 : 100}
                      />
                    </div>
                  ))}
                  <div>
                    <label className="block text-xs uppercase tracking-[0.2em] text-[hsl(var(--light-muted))] mb-3 font-light">
                      Mensagem
                    </label>
                    <textarea
                      required
                      value={form.mensagem}
                      onChange={(e) => setForm({ ...form, mensagem: e.target.value })}
                      rows={4}
                      maxLength={2000}
                      className="w-full bg-transparent border-b border-[hsl(var(--light-border))] py-3 text-[hsl(var(--light-fg))] font-light focus:outline-none focus:border-[hsl(var(--light-fg))] transition-colors duration-500 resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="text-sm uppercase tracking-[0.2em] font-medium text-[hsl(var(--light-bg))] bg-[hsl(var(--light-fg))] px-10 py-4 hover:opacity-80 transition-opacity duration-300"
                  >
                    Enviar
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
