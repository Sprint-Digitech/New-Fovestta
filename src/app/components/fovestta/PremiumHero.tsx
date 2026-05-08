import { motion } from "motion/react";
import { Play, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { DashboardUI } from "./DashboardUI";

export function PremiumHero() {
  return (
    <section className="relative min-h-screen w-full flex flex-col overflow-hidden bg-[#fafbfe] pt-36 pb-12 px-4 lg:px-12">
      {/* Background Layer: Blurred office image + purple/blue gradient overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/office_bg.png"
          alt="Office Background"
          className="w-full h-full object-cover opacity-[0.15] grayscale pointer-events-none"
        />
        {/* Gradients */}
        <div className="absolute top-0 left-[-10%] w-[50%] h-[60%] bg-[#8B5CF6]/30 rounded-full blur-[140px]"></div>
        <div className="absolute top-[10%] right-[-10%] w-[50%] h-[60%] bg-[#3B82F6]/20 rounded-full blur-[140px]"></div>
        <div className="absolute bottom-[-20%] left-[20%] w-[40%] h-[40%] bg-[#C084FC]/20 rounded-full blur-[120px]"></div>
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto w-full flex flex-col flex-grow h-full justify-between gap-12">
        {/* Main Hero Content Area */}
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-12 items-center flex-grow">
          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-start w-full"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F5F3FF] shadow-sm mb-4">
              <span className="text-[#6B46FF] text-[13px] font-bold flex items-center gap-1.5">
                <span className="text-lg leading-none">#</span>
                The Future of HR Management
              </span>
            </div>

            {/* Heading */}
            <div className="mb-4">
              <h1 className="text-[56px] lg:text-[72px] xl:text-[88px] leading-[1] font-black text-gray-900 tracking-tight">
                The <span className="bg-gradient-to-r from-[#6B46FF] to-[#3B82F6] bg-clip-text text-transparent">#1 HRMS</span> in <br />
                India
              </h1>
            </div>
            
            {/* Subheading (Serif Italic) */}
            <div className="mb-6">
              <h2 className="text-[36px] lg:text-[48px] xl:text-[56px] font-serif italic text-[#6B46FF] leading-[1.1]">
                Compliance. Automation.<br />
                Results.
              </h2>
            </div>

            {/* Description */}
            <p className="text-[16px] lg:text-[18px] text-gray-600 max-w-[540px] mb-6 leading-relaxed font-medium">
              Manage TDS, EPF, ESI, IT compliance automatically. Transform HR
              from spreadsheets to intelligence. Trusted by 10,000+ Indian companies.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <Link to="/request-demo" className="flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#6B46FF] to-[#4F46E5] text-white text-[16px] font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-center">
                Book Free Demo
                <ArrowUpRight className="w-5 h-5" />
              </Link>
              
              <Link to="/request-demo" className="flex items-center gap-3 px-8 py-4 bg-white border border-gray-200 text-gray-900 text-[16px] font-bold rounded-full shadow-md hover:bg-gray-50 transition-all duration-300 text-center">
                <div className="w-6 h-6 flex items-center justify-center border-2 border-gray-900 rounded-full">
                  <Play className="w-3 h-3 fill-gray-900" />
                </div>
                Watch Demo
              </Link>
            </div>

            {/* Trust Line */}
            <div className="text-[13px] font-bold text-gray-400 uppercase tracking-widest">
              Trusted by 10,000+ companies across 50+ industries
            </div>
          </motion.div>

          {/* Right Side - Dashboard UI */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative w-full h-full flex items-center justify-end"
          >
            <DashboardUI />
          </motion.div>
        </div>

        {/* Stats Bar at the bottom - Matching Screenshot */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-full pb-10"
        >
          <div className="bg-white rounded-[24px] lg:rounded-[32px] p-8 lg:p-10 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.08)] border border-gray-50 mx-auto max-w-[1100px]">
            <div className="grid grid-cols-1 md:grid-cols-3 items-center text-center divide-y md:divide-y-0 md:divide-x divide-gray-100">
              <div className="flex flex-col justify-center px-4 py-4 md:py-0">
                <div className="text-[40px] lg:text-[48px] font-black text-[#6B46FF] leading-none mb-3">50M+</div>
                <div className="text-[14px] lg:text-[16px] font-bold text-gray-500">Employees Managed</div>
              </div>
              <div className="flex flex-col justify-center px-4 py-4 md:py-0">
                <div className="text-[40px] lg:text-[48px] font-black text-[#6B46FF] leading-none mb-3">10,000+</div>
                <div className="text-[14px] lg:text-[16px] font-bold text-gray-500">Companies Trust Us</div>
              </div>
              <div className="flex flex-col justify-center px-4 py-4 md:py-0">
                <div className="text-[40px] lg:text-[48px] font-black text-[#6B46FF] leading-none mb-3">15 Days</div>
                <div className="text-[14px] lg:text-[16px] font-bold text-gray-500">Avg Setup Time</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
