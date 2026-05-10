import nodemailer from "nodemailer";

import type { LeadFormValues } from "@/types/site";

type SendInquiryEmailInput = {
  inquiryType: string;
  values: LeadFormValues;
};

export function isSmtpConfigured() {
  return Boolean(
    process.env.SMTP_HOST &&
      process.env.SMTP_USER &&
      process.env.SMTP_PASS,
  );
}

function getTransport() {
  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT || "587");
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const secure = process.env.SMTP_SECURE === "true";

  if (!host || !user || !pass) {
    throw new Error(
      "SMTP_NOT_CONFIGURED",
    );
  }

  return nodemailer.createTransport({
    host,
    port,
    secure,
    auth: {
      user,
      pass,
    },
  });
}

function buildHtml({ inquiryType, values }: SendInquiryEmailInput) {
  return `
    <div style="font-family: Arial, sans-serif; color: #111827; line-height: 1.6;">
      <h2 style="margin-bottom: 16px;">New Website Inquiry</h2>
      <p><strong>Inquiry Type:</strong> ${inquiryType}</p>
      <p><strong>Name:</strong> ${values.fullName}</p>
      <p><strong>Shop Name:</strong> ${values.shopName}</p>
      <p><strong>City:</strong> ${values.city}</p>
      <p><strong>Phone / WhatsApp:</strong> ${values.phone}</p>
      <p><strong>Product Interest:</strong> ${values.productInterest}</p>
      <p><strong>Quantity Intent:</strong> ${values.quantityIntent}</p>
      <p><strong>Message:</strong></p>
      <div style="padding: 12px; background: #f3f4f6; border-radius: 8px; white-space: pre-wrap;">${values.message}</div>
    </div>
  `;
}

function buildText({ inquiryType, values }: SendInquiryEmailInput) {
  return [
    "New Website Inquiry",
    "",
    `Inquiry Type: ${inquiryType}`,
    `Name: ${values.fullName}`,
    `Shop Name: ${values.shopName}`,
    `City: ${values.city}`,
    `Phone / WhatsApp: ${values.phone}`,
    `Product Interest: ${values.productInterest}`,
    `Quantity Intent: ${values.quantityIntent}`,
    `Message: ${values.message}`,
  ].join("\n");
}

export async function sendInquiryEmail(input: SendInquiryEmailInput) {
  const transporter = getTransport();
  const fromAddress = process.env.SMTP_FROM || process.env.SMTP_USER;

  await transporter.sendMail({
    from: fromAddress,
    to: "itsmekamal54@gmail.com",
    subject: `${input.inquiryType} - ${input.values.shopName || input.values.fullName}`,
    text: buildText(input),
    html: buildHtml(input),
  });
}
