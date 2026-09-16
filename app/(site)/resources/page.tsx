import { getPageMetadata } from "@/lib/seo/data";
import { ResourcesSection } from "@/components/fovestta/ResourcesSection";

export async function generateMetadata() {
  return getPageMetadata("/resources");
}

export default function ResourcesPage() {
  return <ResourcesSection />;
}
