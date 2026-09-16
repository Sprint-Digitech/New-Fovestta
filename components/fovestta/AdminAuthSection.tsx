"use client";

import { useActionState } from "react";
import { motion } from "motion/react";
import { adminLogin, type AdminLoginState } from "@/lib/admin/actions";

const initialState: AdminLoginState = null;

export function AdminAuthSection() {
  const [state, formAction, pending] = useActionState(adminLogin, initialState);

  return (
    <section className="min-h-[90vh] flex items-center justify-center px-4 py-10 bg-[#F8F9FF]">
      <div className="w-full max-w-[480px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-[22px] p-8 md:p-10 shadow-[0_10px_30px_rgba(15,23,42,0.06)] border border-gray-100"
        >
          <h1 className="text-[24px] md:text-[28px] font-bold text-gray-900 leading-tight mb-3">
            Admin Sign In
          </h1>
          <p className="text-[16px] md:text-[18px] text-gray-600 mb-8">
            Enter the admin password to access the Fovestta™ dashboard.
          </p>

          <form className="space-y-6" action={formAction}>
            <div className="space-y-2">
              <label htmlFor="password" className="block text-[16px] font-medium text-gray-900">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                autoFocus
                placeholder="Enter admin password"
                className="w-full px-4 py-3.5 rounded-xl border border-gray-100 bg-white text-[16px] text-gray-900 outline-none transition-all placeholder:text-gray-500 focus:border-[#8B5CF6] focus:ring-4 focus:ring-purple-50"
              />
              {state?.error && (
                <p className="text-[14px] font-semibold text-red-500">{state.error}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={pending}
              className="w-full mt-1 py-4 rounded-xl bg-[#8B5CF6] text-white text-[18px] font-semibold transition-all hover:bg-[#7C3AED] disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {pending ? "Signing in..." : "Sign In"}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
