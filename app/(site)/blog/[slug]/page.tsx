import { articlesData } from "@/lib/blog-data";
import { ArticlePage } from "@/components/fovestta/ArticlePage";
import { getPageMetadata } from "@/lib/seo/data";

export function generateStaticParams() {
  return Object.keys(articlesData).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return getPageMetadata(`/blog/${slug}`);
}

export default function BlogArticlePage() {
  return <ArticlePage />;
}
