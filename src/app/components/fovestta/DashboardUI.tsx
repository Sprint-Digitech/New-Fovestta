import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, TrendingUp } from 'lucide-react';

export function DashboardUI() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ 
        opacity: 1, 
        scale: 1,
        y: [0, -15, 0] // Floating animation for the whole container
      }}
      transition={{ 
        opacity: { duration: 1 },
        scale: { duration: 1 },
        y: { duration: 5, repeat: Infinity, ease: "easeInOut" }
      }}
      className="relative w-full max-w-[540px] ml-auto"
      style={{ perspective: "1000px" }}
    >
      {/* ISO Label - Floating top left */}
      <motion.div 
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-5 -left-8 z-30 px-3 py-1.5 bg-white rounded-full shadow-lg border border-gray-100 flex items-center gap-1.5"
      >
        <div className="flex items-center justify-center p-1 rounded-full border border-purple-100">
          <ShieldCheck className="w-4 h-4 text-[#6B46FF]" />
        </div>
        <span className="text-[12px] font-bold text-gray-900 uppercase">ISO 27001</span>
      </motion.div>

      {/* Main Glassmorphic Container */}
      <div className="relative bg-white/40 backdrop-blur-2xl rounded-[32px] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-white/60 overflow-hidden p-2">
        <div className="bg-white rounded-[28px] overflow-hidden">
          {/* Dashboard Top Header */}
          <div className="px-6 py-3 flex items-center justify-between border-b border-gray-50/50">
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-[#28C840]"></div>
            </div>
            <span className="text-[11px] font-medium text-gray-400">fovestta.app</span>
          </div>

          {/* Internal Cards */}
          <div className="p-6 space-y-4">
            {/* Payroll Central Card */}
            <div className="bg-[#6B46FF] rounded-[24px] p-6 text-white shadow-xl shadow-[#6B46FF]/20 relative overflow-hidden">
              <div className="relative z-10">
                <span className="text-[10px] font-semibold uppercase tracking-wider opacity-80">Payroll This Month</span>
                <div className="text-[36px] font-black mt-1 leading-tight tracking-tight">₹2.48 Cr</div>
                <div className="text-[11px] opacity-80 mt-1 font-medium">2,140 employees • 99% accuracy</div>
              </div>

              {/* Dynamic Bar Chart UI with Live Animation */}
              <div className="flex items-end gap-1.5 h-20 mt-6">
                {[30, 45, 35, 55, 40, 70, 45, 60, 65, 50, 75, 65, 80, 70, 85].map((h, i) => (
                  <motion.div
                    key={i}
                    animate={{ 
                      height: [`${h}%`, `${Math.min(100, h + 15)}%`, `${Math.max(20, h - 10)}%`, `${h}%`] 
                    }}
                    transition={{ 
                      duration: 3 + Math.random() * 2, 
                      repeat: Infinity, 
                      ease: "easeInOut",
                      delay: i * 0.1
                    }}
                    className="flex-1 bg-white/40 rounded-t-sm hover:bg-white/60 transition-colors"
                  ></motion.div>
                ))}
              </div>
            </div>

            {/* Attendance & Compliance side-by-side */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-50/50 rounded-[20px] p-5 border border-gray-100/60 shadow-sm">
                <span className="text-[11px] font-medium text-gray-500">Attendance</span>
                <div className="text-[20px] font-black text-gray-900 mt-1 mb-4">96.4%</div>
                <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
                  <motion.div 
                    animate={{ width: ["96.4%", "92%", "98%", "96.4%"] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="h-full bg-gradient-to-r from-[#6B46FF] to-[#3B82F6] rounded-full"
                  ></motion.div>
                </div>
              </div>
              
              <div className="bg-gray-50/50 rounded-[20px] p-5 border border-gray-100/60 shadow-sm">
                <span className="text-[11px] font-medium text-gray-500">Compliance</span>
                <div className="text-[20px] font-black text-gray-900 mt-1 mb-4">100%</div>
                <div className="flex flex-wrap gap-1.5">
                  {['TDS', 'EPF', 'ESI', 'IT'].map((tag, idx) => (
                    <motion.span 
                      key={tag}
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: idx * 0.5 }}
                      className="px-2 py-0.5 bg-[#DCFCE7] text-[#16A34A] text-[9px] font-bold rounded"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Productivity Badge */}
      <motion.div
        animate={{ y: [0, -10, 0], x: [0, 5, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-4 -right-4 bg-white px-4 py-3 rounded-[16px] shadow-xl border border-gray-100 flex items-center gap-2 z-20"
      >
        <div className="text-[13px] font-bold text-gray-900 flex items-center gap-1.5">
          <TrendingUp className="w-3.5 h-3.5 text-[#3B82F6]" />
          <span className="text-[#3B82F6]">+35%</span> productivity
        </div>
      </motion.div>
    </motion.div>
  );
}
