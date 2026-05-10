import type { Metadata } from "next";

import { absoluteUrl } from "@/lib/utils";

type MetadataOptions = {
  title: string;
  description: string;
  path?: string;
};

export function createPageMetadata({
  title,
  description,
  path = "",
}: MetadataOptions): Metadata {
  const fullTitle = `${title} | VoltVerge Wholesale`;
  const canonical = absoluteUrl(path);

  return {
    title: fullTitle,
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      title: fullTitle,
      description,
      url: canonical,
      siteName: "VoltVerge Wholesale",
      locale: "en_US",
      type: "website",
      images: [
        {
          url: absoluteUrl("/opengraph-image"),
          width: 1200,
          height: 630,
          alt: "VoltVerge Wholesale electronics wholesale website preview",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [absoluteUrl("/twitter-image")],
    },
  };
}
