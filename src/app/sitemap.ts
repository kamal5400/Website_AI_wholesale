import type { MetadataRoute } from "next";

import { absoluteUrl } from "@/lib/utils";

const routes = [
  "",
  "/products",
  "/about",
  "/retail-partner-program",
  "/contact",
  "/wholesale-inquiry",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: absoluteUrl(route),
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
