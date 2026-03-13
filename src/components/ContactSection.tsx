import { useState } from "react";
import { Linkedin, Mail, ArrowUpRight } from "lucide-react";
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
    <section id="contato" className="section-fullscreen bg-background">
      <div className="container-editorial py-24 md:py-32">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-6 font-light">
            Contato
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-16 md:gap-24">
          <div>
            <Reveal delay={100}>
              <h2 className="heading-section text-foreground mb-12">
                Vamos<br />
                <span className="italic">conversar</span>
              </h2>
            </Reveal>

            <Reveal delay={200}>
              <div className="space-y-6">
                <a
                  href="mailto:mezaninoestudio@gmail.com"
                  className="group flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors duration-300 text-base font-light"
                >
                  <Mail size={16} strokeWidth={1.5} />
                  <span>mezaninoestudio@gmail.com</span>
                  <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
                <a
                  href="https://www.linkedin.com/company/mezaninoestudio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors duration-300 text-base font-light"
                >
                  <Linkedin size={16} strokeWidth={1.5} />
                  <span>LinkedIn</span>
                  <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal delay={200}>
            <div>
              {submitted ? (
                <div className="py-16 text-center">
                  <p className="heading-subsection text-foreground mb-3">Obrigado pelo contato.</p>
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
                        className="w-full bg-transparent border-b border-border py-3 text-foreground font-light focus:outline-none focus:border-foreground transition-colors duration-500 placeholder:text-muted-foreground/30"
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
                      rows={4}
                      maxLength={2000}
                      className="w-full bg-transparent border-b border-border py-3 text-foreground font-light focus:outline-none focus:border-foreground transition-colors duration-500 resize-none placeholder:text-muted-foreground/30"
                    />
                  </div>
                  <button
                    type="submit"
                    className="group text-sm uppercase tracking-[0.2em] font-light text-foreground border border-foreground/20 px-10 py-4 hover:bg-foreground hover:text-background transition-all duration-500 mt-4 flex items-center gap-3"
                  >
                    Enviar
                    <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
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
