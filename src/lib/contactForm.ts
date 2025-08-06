"use server";
import { Resend } from 'resend';
import { z } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);

const inputSchema = z.object({
  email: z.string().email(),
  message: z.string(),
  name: z.string(),
});

export async function contactForm(data: object) {
  const safeData = inputSchema.safeParse(data);
  if (!safeData.success) {
    throw new Error("Error al validar los datos de contacto.");
  }

  const subject = "Formulario de contacto";
  const message = `
    <div style="font-family: Arial, sans-serif; color: #333; max-width: 600px; margin: auto;">
      <h2 style="border-bottom: 2px solid #eee; padding-bottom: 10px;">Nuevo mensaje de contacto</h2>

      <table style="width: 100%; margin-bottom: 20px; font-size: 14px;">
        <tr>
          <td style="padding: 8px 0; font-weight: bold; width: 150px;">Nombre:</td>
          <td style="padding: 8px 0;">${safeData.data.name}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; font-weight: bold;">Correo electrónico:</td>
          <td style="padding: 8px 0;">${safeData.data.email}</td>
        </tr>
      </table>

      <div style="background: #f9f9f9; padding: 15px; border-left: 4px solid #007acc; font-size: 14px;">
        <p style="margin-top: 0; margin-bottom: 10px;"><strong>Mensaje:</strong></p>
        <p style="white-space: pre-wrap; margin: 0;">${safeData.data.message}</p>
      </div>
    </div>
  `;

  const email = process.env.CONTACT_EMAIL;
  if (!email) {
    throw new Error("No se encontró la dirección de correo electrónico para el formulario de contacto.");
  }

  try {
    await send({
      email,
      subject: subject,
      message: message,
      replyTo: safeData.data.email,
    });
    return true;
  } catch (error) {
    throw error;
  }
}

async function send(input: { email: string, subject: string, message: string, replyTo?: string | string[] }) {
  const { email, subject, message } = input;

  if (!email || !subject || !message) {
    throw new Error('All fields are required');
  }

  const { data, error } = await resend.emails.send({
    from: 'Ciclos Melilla WEB <no-reply@ouariachi.com>',
    to: [email],
    subject,
    html: message,
    replyTo: input.replyTo,
  });

  if (error) {
    throw new Error(error.message);
  }

  return data;
}