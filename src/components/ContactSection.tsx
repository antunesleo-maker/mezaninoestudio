import { useState } from "react";
import { Linkedin, Mail } from "lucide-react";
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
    <section id="contato" className="section-spacing border-t border-subtle">
      <div className="container-editorial">
        <Reveal>
          <p className="text-sm uppercase tracking-widest text-muted-foreground mb-8 font-light">Contato</p>
        </Reveal>
        <div className="grid md:grid-cols-2 gap-12 md:gap-20">
          <Reveal delay={100}>
            <div>
              <h2 className="heading-section text-foreground mb-8">
                Entre em contato
              </h2>
              <div className="space-y-4">
                <a
                  href="mailto:mezaninoestudio@gmail.com"
                  className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors body-editorial"
                >
                  <Mail size={18} />
                  mezaninoestudio@gmail.com
                </a>
                <a
                  href="https://www.linkedin.com/company/mezaninoestudio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors body-editorial"
                >
                  <Linkedin size={18} />
                  LinkedIn
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div>
              {submitted ? (
                <div className="py-12 text-center">
                  <p className="heading-subsection text-foreground mb-2">Obrigado pelo contato.</p>
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
                      <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2 font-light">
                        {field.label}
                      </label>
                      <input
                        type={field.type}
                        required={field.required}
                        value={form[field.key]}
                        onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                        className="w-full bg-transparent border-b border-subtle py-3 text-foreground font-light focus:outline-none focus:border-foreground transition-colors placeholder:text-muted-foreground/40"
                        maxLength={field.key === "email" ? 255 : 100}
                      />
                    </div>
                  ))}
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2 font-light">
                      Mensagem
                    </label>
                    <textarea
                      required
                      value={form.mensagem}
                      onChange={(e) => setForm({ ...form, mensagem: e.target.value })}
                      rows={4}
                      maxLength={2000}
                      className="w-full bg-transparent border-b border-subtle py-3 text-foreground font-light focus:outline-none focus:border-foreground transition-colors resize-none placeholder:text-muted-foreground/40"
                    />
                  </div>
                  <button
                    type="submit"
                    className="text-sm uppercase tracking-widest font-light text-foreground border border-foreground/20 px-8 py-3 hover:bg-foreground hover:text-background transition-all duration-300 mt-4"
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
