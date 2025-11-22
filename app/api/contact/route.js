import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { name, email, message } = await request.json();

    await fetch("https://api.brevo.com/v3/smtp/email", {
        method: "POST",
        headers: {
            "api-key": process.env.BREVO_API_KEY,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            sender: { email: "you@yourdomain.com" },
            to: [{ email: "you@yourdomain.com" }],
            subject: "New Contact Form",
            htmlContent: `<p>Name: ${name}</p><p>Email: ${email}</p><p>${message}</p>`,
        }),
        });

    console.log("New contact form submission:", { name, email, message });

    // For now just pretend it worked:
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error in contact API:", error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
