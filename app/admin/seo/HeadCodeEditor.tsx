"use client";

import { useActionState } from "react";
import { AlertTriangle } from "lucide-react";
import { updateCustomHeadCode, type SeoActionState } from "@/lib/seo/actions";

const initialState: SeoActionState = null;

export function HeadCodeEditor({ initialCode }: { initialCode: string }) {
  const [state, formAction, pending] = useActionState(updateCustomHeadCode, initialState);

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden mb-6">
      <div className="px-6 py-4 border-b border-gray-50">
        <h2 className="font-bold text-gray-900">Custom Head Code</h2>
        <p className="text-sm text-gray-500 mt-0.5">
          Raw HTML injected into every page&apos;s <code className="font-mono">&lt;head&gt;</code> — Google Search
          Console verification, Google Analytics/GTM, Meta Pixel, and similar tags.
        </p>
      </div>

      <form action={formAction} className="px-6 py-5 space-y-4">
        <textarea
          name="headCode"
          defaultValue={initialCode}
          placeholder={'<meta name="google-site-verification" content="..." />\n<script>...</script>'}
          rows={8}
          spellCheck={false}
          className="w-full px-3 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm font-mono focus:bg-white focus:border-purple-200 focus:ring-4 focus:ring-purple-50 outline-none transition-all resize-y"
        />

        <div className="flex items-start gap-2 text-xs text-amber-700 bg-amber-50 border border-amber-100 rounded-xl px-3 py-2.5">
          <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5" />
          <span>
            This runs on every visitor&apos;s browser, site-wide, exactly as pasted. Only paste code from a source you
            trust (Google, Meta, etc.).
          </span>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="submit"
            disabled={pending}
            className="px-4 py-2 bg-[#8B5CF6] text-white text-sm font-bold rounded-xl hover:bg-[#7C3AED] transition-colors disabled:opacity-60"
          >
            {pending ? "Saving..." : "Save"}
          </button>
          {state?.error && <p className="text-xs font-semibold text-red-500">{state.error}</p>}
          {state?.success && <p className="text-xs font-semibold text-green-600">Saved.</p>}
        </div>
      </form>
    </div>
  );
}
