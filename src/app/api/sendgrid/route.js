import sgMail from "@sendgrid/mail";
import { NextResponse } from "next/server";

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export async function POST(req) {
  const { name, email, mensaje, sender, recipient } = await req.json();

  const msg = {
    to: recipient, // Destinatario dinámico
    from: sender, // Remitente dinámico
    subject: `Formulario de Contacto de ${name}`,
    text: `Tienes una nueva solicitud del formulario de contacto de:
           Nombre: ${name}
           Correo electrónico: ${email}
           Mensaje: ${mensaje}`,
    html: `<p>Tienes una nueva solicitud del formulario de contacto de:</p>
           <p><strong>Nombre:</strong> ${name}</p>
           <p><strong>Correo electrónico:</strong> ${email}</p>
           <p><strong>Mensaje:</strong> ${mensaje}</p>`,
  };

  try {
    await sgMail.send(msg);
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
