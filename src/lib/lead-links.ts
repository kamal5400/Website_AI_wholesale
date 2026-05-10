import type { LeadFormValues } from "@/types/site";

const whatsappNumber =
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "9779851105404";
const salesEmail =
  process.env.NEXT_PUBLIC_SALES_EMAIL || "itsmekamal54@gmail.com";

export function buildWhatsAppLink(message: string) {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function buildProductInquiryMessage(productName: string) {
  return `Namaste, I want wholesale pricing and stock details for ${productName}. Please share MOQ, warranty support, and available models.`;
}

export function buildLeadMessage(values: LeadFormValues, subject: string) {
  return [
    `Inquiry Type: ${subject}`,
    `Name: ${values.fullName}`,
    `Shop Name: ${values.shopName}`,
    `City: ${values.city}`,
    `Phone: ${values.phone}`,
    `Product Interest: ${values.productInterest}`,
    `Quantity Intent: ${values.quantityIntent}`,
    `Message: ${values.message}`,
  ].join("\n");
}

export function buildMailToLink(subject: string, body: string) {
  const params = new URLSearchParams({
    subject,
    body,
  });

  return `mailto:${salesEmail}?${params.toString()}`;
}
