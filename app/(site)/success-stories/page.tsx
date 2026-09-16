import { getPageMetadata } from "@/lib/seo/data";
import { SuccessStoriesSection } from "@/components/fovestta/SuccessStoriesSection";

export async function generateMetadata() {
  return getPageMetadata("/success-stories");
}

export default function SuccessStoriesPage() {
  return <SuccessStoriesSection />;
}
