import { motion } from "motion/react";
import { Play, Sparkles } from "lucide-react";

export function ModernHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-purple-50/20 to-blue-50/10 pt-24 pb-20">
      {/* Enhanced Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-48 w-[600px] h-[600px] bg-gradient-to-br from-purple-400/20 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-48 w-[600px] h-[600px] bg-gradient-to-br from-blue-400/20 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-purple-300/10 to-blue-300/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center space-y-10">
          {/* Premium Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/80 backdrop-blur-xl border border-purple-200/60 shadow-2xl shadow-purple-500/20"
          >
            <Sparkles className="w-5 h-5 text-[#7C3AED]" />
            <span className="text-[#7C3AED] text-sm tracking-wide">The Future of HR Management</span>
          </motion.div>

          {/* Dramatic Headline */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="space-y-6"
          >
            <h1 className="text-7xl md:text-8xl tracking-tight text-gray-900 leading-tight">
              The #1 HRMS for India
            </h1>
            <h2 className="text-6xl md:text-7xl leading-tight">
              <span className="bg-gradient-to-r from-[#7C3AED] via-purple-600 to-blue-600 bg-clip-text text-transparent">
                Compliance. Automation.
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-[#7C3AED] bg-clip-text text-transparent">
                Results.
              </span>
            </h2>
          </motion.div>

          {/* Enhanced Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed"
          >
            Manage TDS, EPF, ESI, IT compliance automatically. Transform HR from spreadsheets to intelligence. Trusted by 5000+ Indian companies.
          </motion.p>

          {/* Premium CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-6 pt-4"
          >
            <button className="group px-12 py-5 bg-gradient-to-r from-[#7C3AED] to-purple-700 text-white rounded-2xl shadow-2xl shadow-purple-500/40 hover:shadow-3xl hover:shadow-purple-500/60 transition-all duration-500 hover:-translate-y-1 text-lg relative overflow-hidden">
              <span className="relative z-10">Book Free Demo</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-[#7C3AED] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </button>
            <button className="px-12 py-5 bg-white/80 backdrop-blur-xl border-2 border-gray-300 text-gray-800 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 flex items-center gap-3 text-lg">
              <Play className="w-6 h-6 fill-current" />
              Watch Demo
            </button>
          </motion.div>

          {/* Trust Line */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-gray-600"
          >
            Trusted by DPIIT-recognized startups and Indian industries
          </motion.p>

          {/* Premium 3D Illustration Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-20 relative"
          >
            <div className="relative max-w-6xl mx-auto">
              {/* Main Dashboard Mockup */}
              <div className="relative rounded-[32px] bg-gradient-to-br from-white/90 to-gray-50/90 backdrop-blur-2xl border border-white/60 shadow-[0_20px_80px_rgba(124,58,237,0.3)] p-4 md:p-8">
                {/* Inner content area - 3D Placeholder */}
                <div className="relative rounded-3xl bg-gradient-to-br from-purple-100/40 via-blue-100/40 to-purple-100/40 aspect-[16/9] flex items-center justify-center overflow-hidden">
                  {/* Animated gradient background */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 via-transparent to-blue-500/10 animate-pulse"></div>

                  {/* 3D Illustration Placeholder */}
                  <div className="relative z-10 text-center p-12">
                    <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-purple-500/30 to-blue-500/30 flex items-center justify-center backdrop-blur-sm border border-white/40">
                      <svg className="w-16 h-16 text-[#7C3AED]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                    <p className="text-gray-500 text-lg">3D Interactive Dashboard Visualization</p>
                    <p className="text-gray-400 text-sm mt-2">Real-time HR Analytics & Insights</p>
                  </div>
                </div>
              </div>

              {/* Floating Stats Cards with Glass Effect */}
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -left-8 top-12 hidden lg:block"
              >
                <div className="p-6 rounded-3xl bg-white/90 backdrop-blur-xl border border-white/60 shadow-2xl shadow-purple-500/20 min-w-[200px]">
                  <div className="text-4xl bg-gradient-to-r from-[#7C3AED] to-blue-600 bg-clip-text text-transparent mb-2">10,000+</div>
                  <div className="text-gray-600">Companies Trust Us</div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -right-8 top-24 hidden lg:block"
              >
                <div className="p-6 rounded-3xl bg-white/90 backdrop-blur-xl border border-white/60 shadow-2xl shadow-green-500/20 min-w-[200px]">
                  <div className="text-4xl text-green-600 mb-2">99.99%</div>
                  <div className="text-gray-600">System Uptime</div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -left-12 bottom-20 hidden lg:block"
              >
                <div className="p-6 rounded-3xl bg-white/90 backdrop-blur-xl border border-white/60 shadow-2xl shadow-blue-500/20 min-w-[200px]">
                  <div className="text-4xl text-blue-600 mb-2">50M+</div>
                  <div className="text-gray-600">Employees Managed</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
