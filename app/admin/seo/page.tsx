import { SEO_PAGES, getAllSeoOverrides } from "@/lib/seo/data";
import { getRawCustomHeadCode } from "@/lib/seo/head-code";
import { SeoPageRow } from "./SeoPageRow";
import { HeadCodeEditor } from "./HeadCodeEditor";

export const dynamic = "force-dynamic";

export default async function AdminSeoPage() {
  const [overrides, headCode] = await Promise.all([getAllSeoOverrides(), getRawCustomHeadCode()]);

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-1">SEO</h1>
      <p className="text-gray-500 font-medium mb-8">
        Override the title, description, and Open Graph image for any page. Changes apply within an hour, or
        immediately after a save.
      </p>

      <HeadCodeEditor initialCode={headCode} />

      <div className="space-y-3">
        {SEO_PAGES.map((page) => (
          <SeoPageRow key={page.path} page={page} override={overrides[page.path]} />
        ))}
      </div>
    </div>
  );
}
