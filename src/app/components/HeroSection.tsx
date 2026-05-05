import { motion } from "motion/react";
import { Play, ArrowRight } from "lucide-react";
import { DashboardUI } from "./DashboardUI";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden bg-white">
      {/* Background Image with Blur */}
      <div className="absolute inset-0 z-0">
        <img
          src="/office_bg.png"
          alt="Office Background"
          className="w-full h-full object-cover opacity-[0.03] grayscale"
        />
        {/* Soft Purple/Blue Blobs */}
        <div className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] bg-purple-200/40 rounded-full blur-[120px]"></div>
        <div className="absolute top-[20%] -right-[10%] w-[40%] h-[40%] bg-blue-100/40 rounded-full blur-[120px]"></div>
        <div className="absolute -bottom-[10%] left-[20%] w-[30%] h-[30%] bg-indigo-100/30 rounded-full blur-[100px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-[1.1fr,0.9fr] gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-start"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-purple/5 border border-brand-purple/10 mb-8">
              <span className="text-brand-purple text-xs font-bold uppercase tracking-wider"># The Future of HR Management</span>
            </div>

            {/* Heading */}
            <h1 className="text-[56px] lg:text-[72px] leading-[1.1] font-bold text-brand-text mb-4 tracking-tight">
              The <span className="text-brand-purple">#1 HRMS</span> <br />
              for India
            </h1>

            {/* Sub-heading (Serif Italic) */}
            <h2 className="text-4xl lg:text-5xl font-serif italic text-brand-purple mb-8 leading-tight">
              Compliance. Automation. Results.
            </h2>

            {/* Sub-text */}
            <p className="text-lg text-brand-muted max-w-xl mb-10 leading-relaxed font-medium">
              Manage TDS, EPF, ESI, IT compliance automatically. Transform HR
              from spreadsheets to intelligence. Trusted by 10,000+ Indian companies.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-5 mb-10">
              <button className="flex items-center gap-2 px-8 py-4 bg-brand-purple text-white font-bold rounded-full shadow-2xl shadow-brand-purple/30 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300">
                Book Free Demo
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="flex items-center gap-2 px-8 py-4 bg-white border border-gray-200 text-brand-text font-bold rounded-full shadow-lg shadow-gray-100 hover:bg-gray-50 transition-all duration-300">
                <div className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded-full">
                  <Play className="w-3.5 h-3.5 fill-current" />
                </div>
                Watch Demo
              </button>
            </div>

            {/* Trust Text */}
            <div className="flex items-center gap-2 text-sm text-gray-400 font-medium">
              <span>Trusted by 10,000+ companies across 50+ industries</span>
            </div>
          </motion.div>

          {/* Right Visual (Dashboard Preview) */}
          <div className="relative">
            <DashboardUI />
          </div>
        </div>

        {/* Bottom Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-24 max-w-4xl mx-auto"
        >
          <div className="bg-white/40 backdrop-blur-2xl border border-white/60 rounded-[32px] p-8 lg:p-12 shadow-2xl shadow-purple-500/5">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-4 items-center">
              {/* Stat 1 */}
              <div className="flex flex-col items-center text-center px-4">
                <div className="text-4xl lg:text-5xl font-bold text-brand-text mb-2">50M+</div>
                <div className="text-sm font-semibold text-brand-muted uppercase tracking-wider">Employees Managed</div>
              </div>

              {/* Divider */}
              <div className="hidden md:block w-px h-16 bg-gray-200/50 mx-auto"></div>

              {/* Stat 2 */}
              <div className="flex flex-col items-center text-center px-4">
                <div className="text-4xl lg:text-5xl font-bold text-brand-text mb-2">10,000+</div>
                <div className="text-sm font-semibold text-brand-muted uppercase tracking-wider">Companies Trust Us</div>
              </div>

              {/* Divider */}
              <div className="hidden md:block w-px h-16 bg-gray-200/50 mx-auto"></div>

              {/* Stat 3 */}
              <div className="flex flex-col items-center text-center px-4">
                <div className="text-4xl lg:text-5xl font-bold text-brand-text mb-2">15 Days</div>
                <div className="text-sm font-semibold text-brand-muted uppercase tracking-wider">Avg Setup Time</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
