import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // Server-side validation
    if (!name || typeof name !== "string" || name.trim().length < 2) {
      return NextResponse.json(
        { success: false, error: "Please provide a valid name (at least 2 characters)." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || typeof email !== "string" || !emailRegex.test(email.trim())) {
      return NextResponse.json(
        { success: false, error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    if (!message || typeof message !== "string" || message.trim().length < 10) {
      return NextResponse.json(
        { success: false, error: "Please provide a message with at least 10 characters." },
        { status: 400 }
      );
    }

    // Check if Web3Forms key is configured
    const web3FormsKey = process.env.WEB3FORMS_KEY || process.env.NEXT_PUBLIC_WEB3FORMS_KEY;
    if (web3FormsKey) {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: web3FormsKey,
          name: name.trim(),
          email: email.trim(),
          message: message.trim(),
          subject: `Portfolio Inquiry from ${name.trim()}`,
          from_name: name.trim(),
        }),
      });

      const data = await response.json();
      if (!response.ok || !data.success) {
        return NextResponse.json(
          { success: false, error: data.message || "Failed to deliver message via Web3Forms." },
          { status: 502 }
        );
      }

      return NextResponse.json({ success: true, message: "Message sent successfully!" });
    }

    // Check if Resend API key is configured
    const resendKey = process.env.RESEND_API_KEY;
    if (resendKey) {
      const response = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${resendKey}`,
        },
        body: JSON.stringify({
          from: "Portfolio Contact <onboarding@resend.dev>",
          to: "georginaramos0317@gmail.com",
          reply_to: email.trim(),
          subject: `Portfolio Inquiry from ${name.trim()}`,
          text: `Name: ${name.trim()}\nEmail: ${email.trim()}\n\nMessage:\n${message.trim()}`,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        return NextResponse.json(
          { success: false, error: errorData.message || "Failed to send email." },
          { status: 502 }
        );
      }

      return NextResponse.json({ success: true, message: "Message sent successfully!" });
    }

    // Default development / demonstration fallback
    console.log("[Portfolio Contact Form Submission]", {
      timestamp: new Date().toISOString(),
      name: name.trim(),
      email: email.trim(),
      message: message.trim(),
    });

    return NextResponse.json({
      success: true,
      message: "Message received successfully!",
    });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { success: false, error: "Something went wrong. Please try emailing directly." },
      { status: 500 }
    );
  }
}
