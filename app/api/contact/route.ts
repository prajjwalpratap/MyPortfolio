import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

export async function POST(req: NextRequest) {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL || "prajjwalmpi2002@gmail.com";
  const from = process.env.CONTACT_FROM_EMAIL || "Portfolio <onboarding@resend.dev>";

  if (!apiKey) {
    return NextResponse.json(
      { error: "Email not configured. Set RESEND_API_KEY in .env.local" },
      { status: 500 }
    );
  }

  let body: { name?: string; email?: string; subject?: string; message?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const name = (body.name || "").trim();
  const email = (body.email || "").trim();
  const subject = (body.subject || "").trim() || "Portfolio — new message";
  const message = (body.message || "").trim();

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Name, email and message are required." }, { status: 400 });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Invalid email." }, { status: 400 });
  }

  const resend = new Resend(apiKey);

  const html = `
    <div style="font-family:system-ui,sans-serif;max-width:640px;margin:0 auto;padding:24px;border:1px solid #e5e7eb;border-radius:16px">
      <h2 style="margin:0 0 8px">New portfolio message</h2>
      <p style="margin:0 0 16px;color:#6b7280">From your portfolio contact form — reply directly to the sender.</p>
      <table style="width:100%;border-collapse:collapse">
        <tr><td style="padding:8px 0;color:#6b7280;width:110px">Name</td><td style="padding:8px 0;font-weight:600">${escapeHtml(name)}</td></tr>
        <tr><td style="padding:8px 0;color:#6b7280">Email</td><td style="padding:8px 0"><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></td></tr>
        <tr><td style="padding:8px 0;color:#6b7280">Subject</td><td style="padding:8px 0">${escapeHtml(subject)}</td></tr>
      </table>
      <div style="margin-top:16px;padding:16px;background:#f9fafb;border-radius:12px;white-space:pre-wrap">${escapeHtml(message)}</div>
      <p style="margin:16px 0 0;color:#9ca3af;font-size:12px">Sent from ${escapeHtml(req.headers.get("host") || "portfolio")} at ${new Date().toISOString()}</p>
    </div>
  `;

  const text = `New portfolio message\nName: ${name}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${message}\n\n— portfolio`;

  try {
    const { error } = await resend.emails.send({
      from,
      to,
      subject: `[Portfolio] ${subject} — ${name}`,
      html,
      text,
      replyTo: email,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: "Failed to send email." }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Failed to send email." }, { status: 500 });
  }
}

function escapeHtml(s: string) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}
