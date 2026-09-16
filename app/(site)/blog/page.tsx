import { getPageMetadata } from "@/lib/seo/data";
import { BlogPage } from "@/components/fovestta/BlogPage";

export async function generateMetadata() {
  return getPageMetadata("/blog");
}

export default function Blog() {
  return <BlogPage />;
}
