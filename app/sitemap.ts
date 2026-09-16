import type { MetadataRoute } from "next";
import { SEO_PAGES } from "@/lib/seo/data";

const SITE_URL = "https://www.fovestta.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return SEO_PAGES.map((page) => ({
    url: `${SITE_URL}${page.path}`,
    lastModified: new Date(),
    changeFrequency: page.path === "/" ? "weekly" : "monthly",
    priority: page.path === "/" ? 1 : 0.6,
  }));
}
