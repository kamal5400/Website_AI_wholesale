"use client";

import { Mail, MessageCircleMore, SendHorizontal } from "lucide-react";
import { useMemo, useState } from "react";

import { buildLeadMessage, buildMailToLink, buildWhatsAppLink } from "@/lib/lead-links";
import type { LeadFormValues } from "@/types/site";

const initialValues: LeadFormValues = {
  fullName: "",
  shopName: "",
  city: "",
  phone: "",
  productInterest: "",
  quantityIntent: "",
  message: "",
};

type LeadFormProps = {
  inquiryType: string;
  title: string;
  description: string;
};

export function LeadForm({ inquiryType, title, description }: LeadFormProps) {
  const [values, setValues] = useState<LeadFormValues>(initialValues);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [fallbackMode, setFallbackMode] = useState<"none" | "smtp" | "send">("none");

  const leadMessage = useMemo(
    () => buildLeadMessage(values, inquiryType),
    [inquiryType, values],
  );

  const whatsappLink = buildWhatsAppLink(leadMessage);
  const mailtoLink = buildMailToLink(`${inquiryType} - VoltVerge Wholesale`, leadMessage);

  return (
    <section className="rounded-[32px] border border-white/10 bg-white/6 p-6 shadow-[0_24px_80px_rgba(8,15,32,0.42)] backdrop-blur-xl sm:p-8">
      <div className="max-w-2xl space-y-3">
        <h2 className="font-display text-3xl text-white">{title}</h2>
        <p className="text-sm leading-7 text-slate-300">{description}</p>
      </div>

      <form
        className="mt-8 grid gap-5 md:grid-cols-2"
        onSubmit={async (event) => {
          event.preventDefault();
          setSubmitting(true);
          setErrorMessage("");

          try {
            const response = await fetch("/api/lead", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                inquiryType,
                ...values,
              }),
            });

            const result = (await response.json()) as {
              success: boolean;
              code?: string;
              message?: string;
            };

            if (!response.ok || !result.success) {
              if (result.code === "SMTP_NOT_CONFIGURED") {
                setFallbackMode("smtp");
                setSubmitted(true);
                setErrorMessage(
                  result.message ||
                    "Email sending is not configured yet. Please use WhatsApp for now.",
                );
                window.open(whatsappLink, "_blank", "noopener,noreferrer");
                return;
              }

              setFallbackMode("send");
              setSubmitted(true);
              setErrorMessage(
                result.message ||
                  "We could not send the email right now. Please use WhatsApp below.",
              );
              return;
            }

            setFallbackMode("none");
            setSubmitted(true);
            window.open(whatsappLink, "_blank", "noopener,noreferrer");
          } catch (error) {
            setFallbackMode("send");
            setSubmitted(true);
            setErrorMessage(
              error instanceof Error
                ? error.message
                : "We could not send the email right now. Please use WhatsApp below.",
            );
          } finally {
            setSubmitting(false);
          }
        }}
      >
        <Field
          label="Your Name"
          value={values.fullName}
          onChange={(value) => setValues((current) => ({ ...current, fullName: value }))}
          placeholder="Enter your name"
          required
        />
        <Field
          label="Shop Name"
          value={values.shopName}
          onChange={(value) => setValues((current) => ({ ...current, shopName: value }))}
          placeholder="Example: Kathmandu Mobile Hub"
          required
        />
        <Field
          label="City"
          value={values.city}
          onChange={(value) => setValues((current) => ({ ...current, city: value }))}
          placeholder="Kathmandu / Pokhara / Butwal"
          required
        />
        <Field
          label="Phone / WhatsApp"
          value={values.phone}
          onChange={(value) => setValues((current) => ({ ...current, phone: value }))}
          placeholder="+977 98XXXXXXXX"
          required
        />
        <Field
          label="Product Interest"
          value={values.productInterest}
          onChange={(value) =>
            setValues((current) => ({ ...current, productInterest: value }))
          }
          placeholder="Smart watches, phones, accessories..."
          required
        />
        <Field
          label="Quantity Intent"
          value={values.quantityIntent}
          onChange={(value) =>
            setValues((current) => ({ ...current, quantityIntent: value }))
          }
          placeholder="Starter order / monthly volume"
          required
        />
        <label className="md:col-span-2">
          <span className="mb-2 block text-sm font-medium text-slate-200">Message</span>
          <textarea
            value={values.message}
            onChange={(event) =>
              setValues((current) => ({ ...current, message: event.target.value }))
            }
            required
            rows={6}
            placeholder="Tell us what kind of products or retailer support you need."
            className="w-full rounded-[24px] border border-white/10 bg-slate-950/60 px-4 py-4 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300/40 focus:ring-2 focus:ring-cyan-300/25"
          />
        </label>

        <div className="md:col-span-2 flex flex-col gap-3 sm:flex-row">
          <button
            type="submit"
            disabled={submitting}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-emerald-300/70 bg-linear-to-r from-emerald-400 via-sky-300 to-blue-600 px-5 py-3 text-sm font-semibold text-slate-950 shadow-[0_18px_45px_rgba(52,211,153,0.22)] transition hover:-translate-y-0.5"
          >
            <SendHorizontal className="size-4" />
            {submitting ? "Submitting Inquiry..." : "Submit Inquiry"}
          </button>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/8 px-5 py-3 text-sm font-semibold text-white transition hover:border-emerald-300/40 hover:bg-white/12"
          >
            <MessageCircleMore className="size-4" />
            Message Us on WhatsApp
          </a>
        </div>
      </form>

      {errorMessage ? (
        <div className="mt-6 rounded-[26px] border border-rose-300/20 bg-rose-400/8 p-5 text-sm leading-7 text-rose-100">
          {errorMessage}
        </div>
      ) : null}

      {submitted ? (
        <div className="mt-6 rounded-[26px] border border-emerald-300/20 bg-white/8 p-5">
          <p className="text-sm leading-7 text-slate-200">
            {fallbackMode === "none"
              ? "Your inquiry has been emailed to our sales inbox. For the fastest follow-up, open WhatsApp below to send the same inquiry message directly as well."
              : "Your inquiry details are ready. Use WhatsApp below right now, and if you want email sending from the website, add the SMTP settings shown in .env.example to your .env.local file."}
          </p>
          <div className="mt-4 flex flex-col gap-3 sm:flex-row">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-emerald-300/50 bg-white/10 px-5 py-3 text-sm font-semibold text-emerald-100 transition hover:bg-emerald-400/12"
            >
              <MessageCircleMore className="size-4" />
              Send on WhatsApp
            </a>
            <a
              href={mailtoLink}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/12 bg-white/6 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              <Mail className="size-4" />
              Open Email Draft
            </a>
          </div>
        </div>
      ) : null}
    </section>
  );
}

type FieldProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  required?: boolean;
};

function Field({ label, value, onChange, placeholder, required }: FieldProps) {
  return (
    <label>
      <span className="mb-2 block text-sm font-medium text-slate-200">{label}</span>
      <input
        value={value}
        onChange={(event) => onChange(event.target.value)}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-[24px] border border-white/10 bg-slate-950/60 px-4 py-4 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-emerald-300/40 focus:ring-2 focus:ring-emerald-300/25"
      />
    </label>
  );
}
