import { contactEmailTemplate } from "@/lib/contactEmailTemplate";
import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { firstName, lastName, email, phone, subject, message } = req.body;
  if (!firstName || !lastName || !email || !phone || !subject || !message) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.resend.com",
      port: 465,
      secure: true,
      auth: {
        user: "resend",
        pass: process.env.RESEND_API_KEY,
      },
    });

    const mailOptions = {
      from: "Vendibly Contact <noreply@email.vendibly.ai>",
      to: "anil@mathews.com",
      subject: `Vendibly Contact: ${subject}`,
      html: contactEmailTemplate({
        firstName,
        lastName,
        email,
        phone,
        subject,
        message,
      }),
      replyTo: `${firstName} ${lastName} <${email}>`,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("Message sent: %s", info.messageId);
    return res.status(200).json({ success: true });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Failed to send email" });
  }
}
