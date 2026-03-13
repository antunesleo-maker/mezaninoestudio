import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const { nome, email, organizacao, mensagem } = await req.json();

    if (!nome || !email || !mensagem) {
      return new Response(
        JSON.stringify({ error: "Campos obrigatórios não preenchidos" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
    const CONTACT_TO_EMAIL = Deno.env.get("CONTACT_TO_EMAIL") || "antunes.leo@gmail.com";
    const CONTACT_FROM_EMAIL =
      Deno.env.get("CONTACT_FROM_EMAIL") || "Mezanino Estúdio <onboarding@resend.dev>";

    if (!RESEND_API_KEY) {
      throw new Error("RESEND_API_KEY não configurada");
    }

    const htmlBody = `
      <h2>Nova mensagem de contato</h2>
      <p><strong>Nome:</strong> ${nome}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Organização:</strong> ${organizacao || "Não informada"}</p>
      <hr />
      <p><strong>Mensagem:</strong></p>
      <p>${mensagem.replace(/\n/g, "<br>")}</p>
    `;

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: CONTACT_FROM_EMAIL,
        to: [CONTACT_TO_EMAIL],
        subject: `Contato — ${nome} (${organizacao || "sem organização"})`,
        html: htmlBody,
        reply_to: email,
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      const resendMessage = data?.message || "Erro no provedor de email";
      const isResendDomainRestriction =
        res.status === 403 &&
        typeof resendMessage === "string" &&
        resendMessage.includes("You can only send testing emails to your own email address");

      if (isResendDomainRestriction) {
        return new Response(
          JSON.stringify({
            error:
              "Conta de email em modo de teste: verifique um domínio no Resend e use um remetente desse domínio, ou mantenha envio apenas para seu próprio email.",
          }),
          { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }

      throw new Error(`Resend error: ${JSON.stringify(data)}`);
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
