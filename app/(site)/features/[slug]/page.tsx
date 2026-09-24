import { notFound } from "next/navigation";
import { FEATURES, getFeature } from "@/lib/features-data";
import { FeatureDetailPage } from "@/components/fovestta/FeatureDetailPage";
import { getPageMetadata } from "@/lib/seo/data";

export function generateStaticParams() {
  return FEATURES.map((f) => ({ slug: f.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return getPageMetadata(`/features/${slug}`);
}

export default async function FeatureSlugPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const feature = getFeature(slug);
  if (!feature) notFound();
  return <FeatureDetailPage feature={feature} />;
}
