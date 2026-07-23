// src/app/api/contact/route.ts
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(req: Request) {
  try {
    // 1. Next.js environment variable check
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      console.error('❌ RESEND_API_KEY is not defined in .env.local');
      return NextResponse.json(
        { error: 'Server configuration error: RESEND_API_KEY missing.' },
        { status: 500 }
      );
    }

    // 2. Initialize Resend safely inside the request handler
    const resend = new Resend(apiKey);

    // 3. Parse incoming request body
    const body = await req.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Please fill in all required fields.' },
        { status: 400 }
      );
    }

    // 4. Send Email via Resend
    const data = await resend.emails.send({
  from: 'Portfolio Contact <onboarding@resend.dev>',
  to: 'uznainrashid5@gmail.com', // 👈 Update this to match your Resend account email exactly
  subject: `📩 Portfolio Message: ${subject || name}`,
  html: `
    <div style="font-family: Arial, sans-serif; padding: 20px; color: #0f172a; max-width: 600px; border: 1px solid #e2e8f0; border-radius: 12px;">
      <h2 style="color: #06b6d4; margin-bottom: 16px;">New Portfolio Message!</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Subject:</strong> ${subject || 'N/A'}</p>
      <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 16px 0;" />
      <p><strong>Message:</strong></p>
      <div style="background-color: #f8fafc; padding: 16px; border-radius: 8px; border-left: 4px solid #06b6d4; white-space: pre-wrap;">
        ${message}
      </div>
    </div>
  `,
});
    return NextResponse.json(
      { success: true, message: 'Message sent successfully!', data },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('Resend Route Error:', error);
    return NextResponse.json(
      { error: error?.message || 'Internal Server Error' },
      { status: 500 }
    );
  }
}