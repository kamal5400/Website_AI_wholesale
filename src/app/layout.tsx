import type { Metadata } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { FloatingWhatsApp } from "@/components/layout/floating-whatsapp";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { StickyMobileCta } from "@/components/layout/sticky-mobile-cta";
import { siteConfig } from "@/data/site";
import { absoluteUrl } from "@/lib/utils";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(absoluteUrl()),
  title: "VoltVerge Wholesale | Trending Electronics Wholesale Partner in Nepal",
  description: siteConfig.description,
  applicationName: siteConfig.name,
  icons: {
    icon: [
      { url: "/Logo.png", type: "image/png" },
      { url: "/Logo.png", sizes: "32x32", type: "image/png" },
      { url: "/Logo.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [{ url: "/Logo.png", sizes: "180x180", type: "image/png" }],
    shortcut: ["/Logo.png"],
  },
  keywords: [
    "wholesale electronics Nepal",
    "smart watches wholesale Kathmandu",
    "smart phones wholesale Nepal",
    "viral gadgets supplier Nepal",
    "retail partner electronics Kathmandu",
  ],
  alternates: {
    canonical: absoluteUrl("/"),
  },
  openGraph: {
    title: "VoltVerge Wholesale | Trending Electronics Wholesale Partner in Nepal",
    description: siteConfig.description,
    url: absoluteUrl("/"),
    siteName: siteConfig.name,
    type: "website",
    locale: "en_US",
    images: [
      {
        url: absoluteUrl("/opengraph-image"),
        width: 1200,
        height: 630,
        alt: "VoltVerge Wholesale website preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "VoltVerge Wholesale | Trending Electronics Wholesale Partner in Nepal",
    description: siteConfig.description,
    images: [absoluteUrl("/twitter-image")],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${spaceGrotesk.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full bg-slate-950 font-sans text-white">
        <div className="relative flex min-h-screen flex-col bg-[linear-gradient(180deg,_rgba(15,23,42,1)_0%,_rgba(2,6,23,1)_100%)]">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(52,211,153,0.14),_transparent_30%),radial-gradient(circle_at_82%_0%,_rgba(59,130,246,0.14),_transparent_22%),radial-gradient(circle_at_20%_80%,_rgba(255,255,255,0.06),_transparent_18%)]" />
          <SiteHeader />
          <main className="relative z-10 flex-1">{children}</main>
          <SiteFooter />
          <FloatingWhatsApp />
          <StickyMobileCta />
        </div>
      </body>
    </html>
  );
}
