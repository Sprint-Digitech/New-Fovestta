import "server-only";
import { unstable_cache } from "next/cache";
import { getSupabaseAdmin } from "@/lib/supabase/server";

export const HEAD_CODE_CACHE_TAG = "custom-head-code";
const SETTINGS_KEY = "custom_head_code";

async function fetchHeadCode(): Promise<string> {
  try {
    const supabase = getSupabaseAdmin();
    const { data, error } = await supabase
      .from("site_settings")
      .select("value")
      .eq("key", SETTINGS_KEY)
      .maybeSingle();
    if (error || !data) return "";
    return data.value ?? "";
  } catch (err) {
    console.error("Failed to load custom head code:", err);
    return "";
  }
}

const getCachedHeadCode = unstable_cache(fetchHeadCode, ["custom-head-code"], {
  tags: [HEAD_CODE_CACHE_TAG],
  revalidate: 3600,
});

/** The site-wide custom <head> snippet (verification tags, analytics, etc.), rendered into every page. */
export async function getCustomHeadCode(): Promise<string> {
  return getCachedHeadCode();
}

/** Uncached read for the admin editor, so it always shows the latest saved value. */
export async function getRawCustomHeadCode(): Promise<string> {
  return fetchHeadCode();
}
