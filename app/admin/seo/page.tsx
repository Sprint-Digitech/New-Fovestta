import { SEO_PAGES, getAllSeoOverrides } from "@/lib/seo/data";
import { SeoPageRow } from "./SeoPageRow";

export const dynamic = "force-dynamic";

export default async function AdminSeoPage() {
  const overrides = await getAllSeoOverrides();

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-1">SEO</h1>
      <p className="text-gray-500 font-medium mb-8">
        Override the title, description, and Open Graph image for any page. Changes apply within an hour, or
        immediately after a save.
      </p>

      <div className="space-y-3">
        {SEO_PAGES.map((page) => (
          <SeoPageRow key={page.path} page={page} override={overrides[page.path]} />
        ))}
      </div>
    </div>
  );
}
