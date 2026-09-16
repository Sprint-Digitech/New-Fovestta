"use server";

import { revalidateTag } from "next/cache";
import { verifyAdminSession } from "@/lib/admin/session";
import { getSupabaseAdmin } from "@/lib/supabase/server";
import { SEO_CACHE_TAG, SEO_PAGES } from "./data";

export type SeoActionState = { error?: string; success?: boolean } | null;

export async function updateSeoSettings(
  _prevState: SeoActionState,
  formData: FormData
): Promise<SeoActionState> {
  const isAdmin = await verifyAdminSession();
  if (!isAdmin) {
    return { error: "Not authorized." };
  }

  const pagePath = formData.get("pagePath");
  const title = formData.get("title");
  const description = formData.get("description");
  const ogImageUrl = formData.get("ogImageUrl");

  if (typeof pagePath !== "string" || !SEO_PAGES.some((p) => p.path === pagePath)) {
    return { error: "Unknown page." };
  }

  try {
    const supabase = getSupabaseAdmin();
    const { error } = await supabase.from("seo_settings").upsert(
      {
        page_path: pagePath,
        title: typeof title === "string" && title.trim() ? title.trim() : null,
        description: typeof description === "string" && description.trim() ? description.trim() : null,
        og_image_url: typeof ogImageUrl === "string" && ogImageUrl.trim() ? ogImageUrl.trim() : null,
        updated_at: new Date().toISOString(),
      },
      { onConflict: "page_path" }
    );

    if (error) {
      console.error("updateSeoSettings failed:", error.message);
      return { error: "Failed to save. Please try again." };
    }

    revalidateTag(SEO_CACHE_TAG, { expire: 0 });
    return { success: true };
  } catch (err) {
    console.error("updateSeoSettings failed:", err);
    return { error: "Failed to save. Please try again." };
  }
}

export async function resetSeoSettings(pagePath: string): Promise<SeoActionState> {
  const isAdmin = await verifyAdminSession();
  if (!isAdmin) {
    return { error: "Not authorized." };
  }

  try {
    const supabase = getSupabaseAdmin();
    const { error } = await supabase.from("seo_settings").delete().eq("page_path", pagePath);
    if (error) {
      console.error("resetSeoSettings failed:", error.message);
      return { error: "Failed to reset. Please try again." };
    }
    revalidateTag(SEO_CACHE_TAG, { expire: 0 });
    return { success: true };
  } catch (err) {
    console.error("resetSeoSettings failed:", err);
    return { error: "Failed to reset. Please try again." };
  }
}
