import type { APIRoute } from "astro";
import { Resend } from "resend";

const resend = new Resend(import.meta.env.RESEND_API_KEY || 're_123');

export const POST: APIRoute = async ({ request }) => {
    try {
        const data = await request.json();
        const { name, lastname, email, message } = data;

        if (!name || !email || !message) {
            return new Response(
                JSON.stringify({ message: "Faltan campos requeridos" }),
                { status: 400 }
            );
        }

        const { data: emailData, error } = await resend.emails.send({
            from: "Solicitud de Contacto <contacto@send.devinci.cl>",
            to: ["contacto@devinci.cl"],
            replyTo: email,
            subject: `Nuevo Contacto: ${name} ${lastname || ''}`,
            html: `
        <h2>Nuevo mensaje desde el sitio web</h2>
        <p><strong>Nombre:</strong> ${name} ${lastname || ''}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensaje:</strong></p>
        <blockquote style="background: #f9f9f9; padding: 10px; border-left: 5px solid #ccc;">
          ${message.replace(/\n/g, '<br>')}
        </blockquote>
      `,
        });

        if (error) {
            console.error("Resend Error:", error);
            return new Response(
                JSON.stringify({ message: "Error al enviar el correo", error }),
                { status: 500 }
            );
        }

        return new Response(
            JSON.stringify({ message: "Mensaje enviado exitosamente", id: emailData?.id }),
            { status: 200 }
        );
    } catch (e) {
        console.error("Server Error:", e);
        return new Response(
            JSON.stringify({ message: "Error interno del servidor" }),
            { status: 500 }
        );
    }
};
