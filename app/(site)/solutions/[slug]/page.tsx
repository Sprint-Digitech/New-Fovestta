import { notFound } from "next/navigation";
import { SOLUTIONS, getSolution } from "@/lib/solutions-data";
import { SolutionDetailPage } from "@/components/fovestta/SolutionDetailPage";
import { getPageMetadata } from "@/lib/seo/data";

export function generateStaticParams() {
  return SOLUTIONS.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return getPageMetadata(`/solutions/${slug}`);
}

export default async function SolutionSlugPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const solution = getSolution(slug);
  if (!solution) notFound();
  return <SolutionDetailPage solution={solution} />;
}
