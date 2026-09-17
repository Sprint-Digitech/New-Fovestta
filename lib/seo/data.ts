import "server-only";
import { unstable_cache } from "next/cache";
import type { Metadata } from "next";
import { getSupabaseAdmin } from "@/lib/supabase/server";

export const SEO_CACHE_TAG = "seo-settings";

export type SeoOverride = {
  page_path: string;
  title: string | null;
  description: string | null;
  og_image_url: string | null;
  updated_at: string;
};

export type SeoDefault = {
  path: string;
  label: string;
  title: string;
  description: string;
};

/** Every public page this site has, used both for the admin SEO panel and for merging overrides into real page metadata. */
export const SEO_PAGES: SeoDefault[] = [
  { path: "/", label: "Home", title: "Fovestta™ | The #1 HRMS in India", description: "Manage TDS, EPF, ESI, IT compliance automatically. Transform HR from spreadsheets to intelligence. Trusted by 10,000+ Indian companies." },
  { path: "/features", label: "Features", title: "Features | Fovestta™", description: "Seven powerful modules working together to transform your HR operations, including touchless face recognition attendance." },
  { path: "/solutions", label: "Solutions", title: "Solutions | Fovestta™", description: "Built for every HR challenge — growing companies, data-driven leaders, compliance teams, and remote workforces." },
  { path: "/success-stories", label: "Success Stories", title: "Success Stories | Fovestta™", description: "How leading Indian companies transformed HR and payroll operations with Fovestta™." },
  { path: "/resources", label: "Resources", title: "Resources | Fovestta™", description: "Learn from HR experts and compliance specialists." },
  { path: "/pricing", label: "Pricing", title: "Pricing | Fovestta™", description: "Transparent HRMS pricing plans built for every organization, from startups to enterprises." },
  { path: "/support", label: "Support", title: "Support | Fovestta™", description: "Create a support ticket and get help from the Fovestta™ team." },
  { path: "/request-demo", label: "Request Demo", title: "Request a Demo | Fovestta™", description: "Book a free demo and see how Fovestta™ can transform your HR operations." },
  { path: "/blog", label: "Blog", title: "Blog | Fovestta™", description: "Insights, strategies, and industry news to help you build a better workplace." },
  { path: "/privacy", label: "Privacy Policy", title: "Privacy Policy | Fovestta™", description: "How Fovestta™ collects, uses, and protects your data." },
  { path: "/terms", label: "Terms of Service", title: "Terms of Service | Fovestta™", description: "The terms governing use of the Fovestta™ platform." },
  { path: "/cookie-policy", label: "Cookie Policy", title: "Cookie Policy | Fovestta™", description: "How Fovestta™ uses cookies." },
  { path: "/compliance", label: "Compliance & Security", title: "Compliance & Security | Fovestta™", description: "Enterprise-grade security and compliance for Indian HR and payroll." },
  { path: "/payroll-checklist", label: "Payroll Checklist", title: "Payroll Checklist | Fovestta™", description: "The 2026 India HRMS compliance checklist." },
  { path: "/payroll-calculator", label: "Payroll Calculator", title: "Payroll Cost Calculator | Fovestta™", description: "Estimate your payroll costs and savings with Fovestta™." },
  { path: "/compliance-scorecard", label: "Compliance Scorecard", title: "Compliance Scorecard | Fovestta™", description: "Assess your company's HR and payroll compliance health." },
  { path: "/checkout", label: "Checkout", title: "Checkout | Fovestta™", description: "Complete your Fovestta™ subscription." },
];

const getCachedOverrides = unstable_cache(
  async (): Promise<Record<string, SeoOverride>> => {
    try {
      const supabase = getSupabaseAdmin();
      const { data, error } = await supabase.from("seo_settings").select("*");
      if (error || !data) return {};
      return Object.fromEntries(data.map((row) => [row.page_path, row as SeoOverride]));
    } catch (err) {
      console.error("Failed to load SEO overrides:", err);
      return {};
    }
  },
  ["seo-overrides"],
  { tags: [SEO_CACHE_TAG], revalidate: 3600 }
);

/** Resolves a page's metadata: an admin-saved override if present, else the hardcoded default. */
export async function getPageMetadata(path: string): Promise<Metadata> {
  const fallback = SEO_PAGES.find((p) => p.path === path);
  const title = fallback?.title ?? "Fovestta™";
  const description = fallback?.description ?? "";

  const overrides = await getCachedOverrides();
  const override = overrides[path];

  return {
    title: override?.title || title,
    description: override?.description || description,
    openGraph: {
      title: override?.title || title,
      description: override?.description || description,
      images: override?.og_image_url ? [override.og_image_url] : undefined,
    },
  };
}

/** All saved overrides, for the admin SEO panel. Not cached -- always fresh for the editor. */
export async function getAllSeoOverrides(): Promise<Record<string, SeoOverride>> {
  try {
    const supabase = getSupabaseAdmin();
    const { data, error } = await supabase.from("seo_settings").select("*");
    if (error || !data) return {};
    return Object.fromEntries(data.map((row) => [row.page_path, row as SeoOverride]));
  } catch (err) {
    console.error("Failed to load SEO overrides:", err);
    return {};
  }
}
