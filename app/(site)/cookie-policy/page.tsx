import { getPageMetadata } from "@/lib/seo/data";
import { CookiePolicyPage } from "@/components/fovestta/CookiePolicyPage";

export async function generateMetadata() {
  return getPageMetadata("/cookie-policy");
}

export default function CookiePolicy() {
  return <CookiePolicyPage />;
}
