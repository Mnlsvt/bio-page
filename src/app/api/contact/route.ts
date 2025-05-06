import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import mailjet from 'node-mailjet';

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { email, message } = body;

  if (!email || !message) {
    return NextResponse.json({ error: 'Email and message are required' }, { status: 400 });
  }

  const mailjetClient = new mailjet({
    apiKey: process.env.MJ_APIKEY_PUBLIC!,
    apiSecret: process.env.MJ_APIKEY_PRIVATE!,
  });

  try {
    await mailjetClient.post('send', { version: 'v3.1' }).request({
      Messages: [
        {
          From: {
            Email: 'manolis277@gmail.com',
            Name: 'Manolis',
          },
          To: [
            {
              Email: 'manosvtt@gmail.com',
              Name: 'Manolis',
            },
          ],
          Subject: 'Mail from CV Page',
          TextPart: message,
          HTMLPart: `<p>email: ${email} <br> <br> ${message}</p>`,
        },
      ],
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Mailjet error:', error);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
