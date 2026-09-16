import type { MetadataRoute } from "next";

const SITE_URL = "https://www.fovestta.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/admin", "/admin/", "/admin-auth"],
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
