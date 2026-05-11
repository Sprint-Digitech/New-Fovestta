import { motion } from "motion/react";

export function AdminAuthSection() {
  return (
    <section className="min-h-[90vh] flex items-center justify-center px-4 py-10 bg-[#F8F9FF]">
      <div className="w-full max-w-[560px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-[22px] p-8 md:p-10 shadow-[0_10px_30px_rgba(15,23,42,0.06)] border border-gray-100"
        >
          <h1 className="text-[32px] md:text-[38px] font-bold text-gray-900 leading-tight mb-3">
            Create Admin Account
          </h1>
          <p className="text-[16px] md:text-[18px] text-gray-600 mb-8">
            Sign up to manage Fovestta™ blog posts
          </p>

          <form className="space-y-7" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-2">
              <label className="block text-[16px] font-medium text-gray-900">Email</label>
              <input
                type="email"
                placeholder="admin@fovestta.com"
                className="w-full px-4 py-3.5 rounded-xl border border-gray-100 bg-white text-[16px] text-gray-900 outline-none transition-all placeholder:text-gray-500 focus:border-[#8B5CF6] focus:ring-4 focus:ring-purple-50"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-[16px] font-medium text-gray-900">Password</label>
              <input
                type="password"
                placeholder="At least 8 characters"
                className="w-full px-4 py-3.5 rounded-xl border border-gray-100 bg-white text-[16px] text-gray-900 outline-none transition-all placeholder:text-gray-500 focus:border-[#8B5CF6] focus:ring-4 focus:ring-purple-50"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-[16px] font-medium text-gray-900">Confirm Password</label>
              <input
                type="password"
                className="w-full px-4 py-3.5 rounded-xl border border-gray-100 bg-white text-[16px] text-gray-900 outline-none transition-all focus:border-[#8B5CF6] focus:ring-4 focus:ring-purple-50"
              />
            </div>

            <button className="w-full mt-1 py-4 rounded-xl bg-[#8B5CF6] text-white text-[18px] font-semibold transition-all hover:bg-[#7C3AED]">
              Sign Up
            </button>
          </form>

          <div className="text-center mt-6">
            <p className="text-[16px] text-gray-900">
              Already have an account?{" "}
              <button type="button" className="text-[#8B5CF6] hover:underline">
                Sign in
              </button>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
