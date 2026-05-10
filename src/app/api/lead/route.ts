import { NextResponse } from "next/server";
import { z } from "zod";

import { isSmtpConfigured, sendInquiryEmail } from "@/lib/email";

const leadSchema = z.object({
  inquiryType: z.string().min(1),
  fullName: z.string().min(2),
  shopName: z.string().min(2),
  city: z.string().min(2),
  phone: z.string().min(7),
  productInterest: z.string().min(2),
  quantityIntent: z.string().min(2),
  message: z.string().min(10),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = leadSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        {
          success: false,
          message: "Please fill all required fields correctly.",
        },
        { status: 400 },
      );
    }

    if (!isSmtpConfigured()) {
      return NextResponse.json(
        {
          success: false,
          code: "SMTP_NOT_CONFIGURED",
          message:
            "Email sending is not configured yet. Add SMTP settings in .env.local, or use the WhatsApp fallback below for now.",
        },
        { status: 503 },
      );
    }

    await sendInquiryEmail({
      inquiryType: parsed.data.inquiryType,
      values: {
        fullName: parsed.data.fullName,
        shopName: parsed.data.shopName,
        city: parsed.data.city,
        phone: parsed.data.phone,
        productInterest: parsed.data.productInterest,
        quantityIntent: parsed.data.quantityIntent,
        message: parsed.data.message,
      },
    });

    return NextResponse.json({
      success: true,
      message: "Inquiry submitted successfully.",
    });
  } catch (error) {
    console.error("Lead submission failed", error);

    if (error instanceof Error && error.message === "SMTP_NOT_CONFIGURED") {
      return NextResponse.json(
        {
          success: false,
          code: "SMTP_NOT_CONFIGURED",
          message:
            "Email sending is not configured yet. Add SMTP settings in .env.local, or use the WhatsApp fallback below for now.",
        },
        { status: 503 },
      );
    }

    return NextResponse.json(
      {
        success: false,
        code: "EMAIL_SEND_FAILED",
        message:
          "We could not send the email right now. Please use WhatsApp below and check your SMTP settings.",
      },
      { status: 500 },
    );
  }
}
