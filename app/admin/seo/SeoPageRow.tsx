"use client";

import { useActionState, useState, useTransition } from "react";
import { ChevronDown } from "lucide-react";
import { updateSeoSettings, resetSeoSettings, type SeoActionState } from "@/lib/seo/actions";
import type { SeoDefault, SeoOverride } from "@/lib/seo/data";

const initialState: SeoActionState = null;

export function SeoPageRow({
  page,
  override,
}: {
  page: SeoDefault;
  override?: SeoOverride;
}) {
  const [open, setOpen] = useState(false);
  const [state, formAction, pending] = useActionState(updateSeoSettings, initialState);
  const [isResetting, startResetTransition] = useTransition();

  const hasOverride = Boolean(override?.title || override?.description || override?.og_image_url);

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left"
      >
        <div>
          <div className="flex items-center gap-2">
            <span className="font-bold text-gray-900">{page.label}</span>
            <span className="text-xs text-gray-400 font-mono">{page.path}</span>
            {hasOverride && (
              <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-purple-50 text-[#8B5CF6]">Customized</span>
            )}
          </div>
          <p className="text-sm text-gray-500 mt-0.5 truncate max-w-xl">{override?.title || page.title}</p>
        </div>
        <ChevronDown className={`w-4 h-4 text-gray-400 shrink-0 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <form action={formAction} className="px-6 pb-6 space-y-4 border-t border-gray-50 pt-5">
          <input type="hidden" name="pagePath" value={page.path} />

          <div className="space-y-1.5">
            <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">
              Title <span className="normal-case text-gray-300">(default: {page.title})</span>
            </label>
            <input
              name="title"
              defaultValue={override?.title ?? ""}
              placeholder={page.title}
              className="w-full px-3 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:bg-white focus:border-purple-200 focus:ring-4 focus:ring-purple-50 outline-none transition-all"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">
              Description <span className="normal-case text-gray-300">(default: {page.description})</span>
            </label>
            <textarea
              name="description"
              defaultValue={override?.description ?? ""}
              placeholder={page.description}
              rows={2}
              className="w-full px-3 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:bg-white focus:border-purple-200 focus:ring-4 focus:ring-purple-50 outline-none transition-all resize-none"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Open Graph Image URL</label>
            <input
              name="ogImageUrl"
              defaultValue={override?.og_image_url ?? ""}
              placeholder="/cta_full_banner.webp"
              className="w-full px-3 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:bg-white focus:border-purple-200 focus:ring-4 focus:ring-purple-50 outline-none transition-all"
            />
          </div>

          <div className="flex items-center gap-3 pt-1">
            <button
              type="submit"
              disabled={pending}
              className="px-4 py-2 bg-[#8B5CF6] text-white text-sm font-bold rounded-xl hover:bg-[#7C3AED] transition-colors disabled:opacity-60"
            >
              {pending ? "Saving..." : "Save"}
            </button>
            {hasOverride && (
              <button
                type="button"
                disabled={isResetting}
                onClick={() =>
                  startResetTransition(() => {
                    resetSeoSettings(page.path);
                  })
                }
                className="px-4 py-2 bg-gray-50 text-gray-600 text-sm font-bold rounded-xl hover:bg-gray-100 transition-colors disabled:opacity-60"
              >
                {isResetting ? "Resetting..." : "Reset to Default"}
              </button>
            )}
            {state?.error && <p className="text-xs font-semibold text-red-500">{state.error}</p>}
            {state?.success && <p className="text-xs font-semibold text-green-600">Saved.</p>}
          </div>
        </form>
      )}
    </div>
  );
}
