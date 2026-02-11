"use server";

import nodemailer from "nodemailer";

interface SendMailParams {
  name: string;
  contact: string;
  email?: string;
  inquiry?: string;
}

export const sendMail = async (params: SendMailParams) => {
  const { name, contact, email, inquiry } = params;

  try {
    if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
      console.error("SMTP configuration missing");
      throw new Error("Email service configuration is not available");
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.verify();

    const now = new Date();
    const pad = (n: number) => n.toString().padStart(2, "0");
    const formattedDate =
      now.getFullYear().toString() +
      pad(now.getMonth() + 1) +
      pad(now.getDate()) +
      pad(now.getHours()) +
      pad(now.getMinutes()) +
      pad(now.getSeconds());

    const result = await transporter.sendMail({
      from: process.env.MAIL_FROM,
      to: process.env.MAIL_TO,
      subject: `STAY-G 문의[${name}] - ${formattedDate}`,
      html: `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>STAY-G 문의[${name}] - ${formattedDate}</title>
        <style>
        body {
          font-family: Arial, sans-serif;
          line-height: 1.6;
          margin: 0;
          padding: 0;
        }
        .container {
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
        }
        .content {
          padding: 0 20px;
        }
        .field {
          margin-bottom: 15px;
        }
        .label {
          font-weight: bold;
        }
        .value {
          padding: 8px 0;
        }
        .details {
          white-space: pre-line;
          margin-top: 5px;
        }
        </style>
      </head>
      <body>
        <div class="container">
        <div class="content">
          <div class="field">
          <div><span class="label">성함:</span> <span class="value">${name}</span></div>
          </div>

          <div class="field">
          <div><span class="label">연락처:</span> <span class="value">${contact}</span></div>
          </div>

          ${
            email
              ? `
          <div class="field">
          <div><span class="label">이메일:</span> <span class="value">${email}</span></div>
          </div>
          `
              : ""
          }

          ${
            inquiry
              ? `
          <div class="field">
          <div class="label">문의 내용:</div>
          <div class="details">${inquiry}</div>
          </div>
          `
              : ""
          }
        </div>
        </div>
      </body>
      </html>
      `,
    });

    return { success: true, messageId: result.messageId };
  } catch (error) {
    console.error("Email sending failed:", error);

    return {
      success: false,
      error: error instanceof Error ? error.message : "Unknown error occurred while sending email",
    };
  }
};
