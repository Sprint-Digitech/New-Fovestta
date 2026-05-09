import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router-dom";
import { Calculator, BookOpen, ArrowRight, ShieldCheck, TrendingUp, Clock, FileText, AlertCircle, Mail, BookCheck, Sparkles, IndianRupee } from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export function PayrollCostCalculatorSection() {
  const [employees, setEmployees] = useState(50);
  const [salary, setSalary] = useState(40000);
  const [isPF, setIsPF] = useState(true);
  const [isESI, setIsESI] = useState(true);
  const [ptax, setPtax] = useState(0);
  const [isDownloaded, setIsDownloaded] = useState(false);

  // Simple calculation logic for UI responsiveness
  const pfContribution = isPF ? (salary * 0.12) : 0;
  const esiContribution = isESI ? (salary * 0.0325) : 0;
  const totalCostPerEmp = salary + pfContribution + esiContribution + ptax;
  const totalMonthlyCost = totalCostPerEmp * employees;

  return (
    <div id="cost" className="bg-[#FCFCFF] scroll-mt-20 overflow-hidden" style={{ perspective: "2000px" }}>
      {/* 1. Dynamic Hero Section */}
      <section className="relative pt-24 pb-10 lg:pt-28 lg:pb-12 overflow-hidden">
        {/* Background Orbs */}
        <div className="absolute inset-0 z-0">
          <motion.div
            animate={{ scale: [1, 1.1, 1], rotate: [0, 45, 0], opacity: [0.1, 0.2, 0.1] }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-[#8B5CF6]/20 rounded-full blur-[120px]"
          />
          <motion.div
            animate={{ scale: [1.1, 1, 1.1], rotate: [45, 0, 45], opacity: [0.1, 0.15, 0.1] }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#3B82F6]/20 rounded-full blur-[100px]"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, z: -20 }}
            whileInView={{ opacity: 1, z: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm text-[#8B5CF6] text-[14px] lg:text-[15px] font-bold mb-6 border border-purple-100"
          >
            <Sparkles className="w-4 h-4 animate-pulse" />
            Free Payroll Tool for India
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, rotateX: -20, y: 20 }}
            whileInView={{ opacity: 1, rotateX: 0, y: 0 }}
            viewport={{ once: true }}
            className="text-[42px] sm:text-[48px] lg:text-[60px] font-bold text-gray-900 leading-[0.95] mb-6 tracking-tighter w-full mx-auto"
            style={{ transformStyle: "preserve-3d" }}
          >
            Payroll <span className="bg-gradient-to-r from-[#8B5CF6] to-[#6366F1] bg-clip-text text-transparent">Cost Calculator</span>
          </motion.h1>

          <motion.p {...fadeIn} transition={{ delay: 0.1 }} className="text-[16px] lg:text-[18px] text-gray-500 font-medium w-full mx-auto mb-8 leading-relaxed">
            Estimate your monthly payroll cost, PF, ESI, and statutory expenses instantly with precision.
          </motion.p>
        </div>
      </section>

      {/* 2. Interactive Calculator Card with 3D Tilt */}
      <section className="pb-10 lg:pb-12 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid lg:grid-cols-[1fr_360px] gap-6 lg:gap-8 items-start">

            {/* Left: Inputs */}
            <motion.div
              initial={{ opacity: 0, x: -50, rotateY: 10 }}
              whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
              viewport={{ once: true }}
              whileHover={{ rotateY: 2, rotateX: -1 }}
              className="bg-white rounded-[36px] p-6 lg:p-8 border border-gray-100 shadow-[0_20px_60px_rgba(0,0,0,0.04)] relative"
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="flex items-center gap-4 mb-8" style={{ transform: "translateZ(20px)" }}>
                <div className="w-11 h-11 bg-[#8B5CF6] rounded-2xl flex items-center justify-center shadow-lg shadow-purple-100">
                  <Calculator className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-[22px] lg:text-[24px] font-bold text-gray-900">Calculator Settings</h2>
              </div>

              <div className="space-y-8">
                {/* Employee Count */}
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <label className="text-[14px] lg:text-[15px] font-bold text-gray-900 uppercase tracking-widest">Team Size: <span className="text-[#8B5CF6] ml-2 text-lg lg:text-xl">{employees}</span></label>
                  </div>
                  <div className="relative">
                    <input
                      type="range" min="1" max="500" value={employees}
                      onChange={(e) => setEmployees(parseInt(e.target.value))}
                      className="w-full h-2 bg-purple-100 rounded-lg appearance-none cursor-pointer accent-[#8B5CF6]"
                    />
                    <div className="flex justify-between text-[10px] lg:text-[11px] text-gray-400 mt-3 font-bold">
                      <span>1 EMPLOYEE</span>
                      <span>500 EMPLOYEES</span>
                    </div>
                  </div>
                </div>

                {/* Salary Input */}
                <div className="space-y-4">
                  <label className="text-[14px] lg:text-[15px] font-bold text-gray-900 uppercase tracking-widest ml-1">Avg. Monthly Salary</label>
                  <div className="relative group">
                    <div className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#8B5CF6] transition-colors">
                      <IndianRupee className="w-4 h-4 lg:w-5 lg:h-5" />
                    </div>
                    <input
                      type="number" value={salary}
                      onChange={(e) => setSalary(parseInt(e.target.value) || 0)}
                      className="w-full pl-14 pr-6 py-4 bg-gray-50 border border-gray-300 rounded-2xl text-[15px] lg:text-[16px] font-bold text-gray-900 focus:bg-white focus:border-purple-200 focus:ring-4 focus:ring-purple-50 outline-none transition-all"
                    />
                  </div>
                </div>

                {/* Statutory Toggles */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <motion.label
                    whileHover={{ scale: 1.02, translateZ: 10 }}
                    className={`flex items-center gap-3 p-4 rounded-2xl border cursor-pointer transition-all ${isPF ? 'bg-purple-50 border-[#8B5CF6] shadow-sm' : 'bg-white border-gray-100'}`}
                  >
                    <input type="checkbox" checked={isPF} onChange={() => setIsPF(!isPF)} className="w-5 h-5 accent-[#8B5CF6]" />
                    <span className="text-[15px] lg:text-[16px] font-bold text-gray-800">Employer PF (12%)</span>
                  </motion.label>
                  <motion.label
                    whileHover={{ scale: 1.02, translateZ: 10 }}
                    className={`flex items-center gap-3 p-4 rounded-2xl border cursor-pointer transition-all ${isESI ? 'bg-blue-50 border-[#3B82F6] shadow-sm' : 'bg-white border-gray-100'}`}
                  >
                    <input type="checkbox" checked={isESI} onChange={() => setIsESI(!isESI)} className="w-5 h-5 accent-[#3B82F6]" />
                    <span className="text-[15px] lg:text-[16px] font-bold text-gray-800">Employer ESI (3.25%)</span>
                  </motion.label>
                </div>
              </div>
            </motion.div>

            {/* Right: Real-time Results Card */}
            <motion.div
              initial={{ opacity: 0, x: 50, rotateY: -10 }}
              whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-[#111827] to-[#1F2937] rounded-[36px] p-6 lg:p-8 text-white shadow-2xl shadow-purple-200 sticky top-24"
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="mb-8" style={{ transform: "translateZ(20px)" }}>
                <p className="text-gray-400 text-[14px] lg:text-[15px] font-bold uppercase tracking-[0.2em] mb-2">Total Monthly Cost</p>
                <motion.div
                  key={totalMonthlyCost}
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="text-[34px] lg:text-[40px] font-black tracking-tighter"
                >
                  ₹{totalMonthlyCost.toLocaleString('en-IN')}
                </motion.div>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex justify-between items-center py-3 border-b border-white/10">
                  <span className="text-gray-400 font-medium">Cost Per Employee</span>
                  <span className="font-bold">₹{totalCostPerEmp.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-white/10">
                  <span className="text-gray-400 font-medium">Total PF Contribution</span>
                  <span className="font-bold text-purple-400">₹{(pfContribution * employees).toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-white/10">
                  <span className="text-gray-400 font-medium">Total ESI Contribution</span>
                  <span className="font-bold text-blue-400">₹{(esiContribution * employees).toLocaleString('en-IN')}</span>
                </div>
              </div>

              <motion.button
                whileHover={!isDownloaded ? { scale: 1.02, translateZ: 10 } : {}}
                whileTap={!isDownloaded ? { scale: 0.98 } : {}}
                onClick={() => {
                  setIsDownloaded(true);
                  setTimeout(() => setIsDownloaded(false), 3000);
                }}
                className={`w-full py-4 text-white font-bold rounded-2xl transition-all shadow-xl flex items-center justify-center gap-2 ${isDownloaded
                    ? "bg-green-500 shadow-green-500/20 cursor-default"
                    : "bg-[#8B5CF6] hover:bg-[#7C3AED] shadow-purple-500/20"
                  }`}
              >
                {isDownloaded ? (
                  <>
                    <ShieldCheck className="w-5 h-5" />
                    Report Downloaded!
                  </>
                ) : (
                  <>
                    Download Detailed Report
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Features Section with 3D Float */}
      <section className="py-10 lg:py-12 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-8">
            <h2 className="text-[30px] sm:text-[34px] lg:text-[42px] font-bold text-gray-900 tracking-tight">Why Use Our Calculator?</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
            {[
              { icon: TrendingUp, title: "Budget Planning", desc: "Know your exact payroll expenses before finalizing fiscal budgets.", accent: "bg-purple-50" },
              { icon: Clock, title: "Instant Results", desc: "No more manual calculations. Get payroll cost breakdowns in seconds.", accent: "bg-blue-50" },
              { icon: ShieldCheck, title: "100% Compliant", desc: "Automatically calculate statutory contributions per Indian labor laws.", accent: "bg-green-50" },
              { icon: AlertCircle, title: "Avoid Errors", desc: "Prevent costly compliance mistakes with accurate contribution estimates.", accent: "bg-red-50" }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -10, rotateY: 10, translateZ: 20 }}
                className="bg-white rounded-[28px] p-6 lg:p-7 border border-gray-100 shadow-[0_4px_30px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.05)] transition-all group"
                style={{ transformStyle: "preserve-3d" }}
              >
                <div className={`w-12 h-12 ${item.accent} rounded-2xl flex items-center justify-center mb-5 transition-transform group-hover:scale-110`} style={{ transform: "translateZ(10px)" }}>
                  <item.icon className="w-6 h-6 text-gray-900" />
                </div>
                <h4 className="text-[15px] lg:text-[16px] font-bold text-gray-900 mb-3">{item.title}</h4>
                <p className="text-[15px] lg:text-[16px] text-gray-500 leading-relaxed font-medium">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Final CTA with 3D Depth */}
      <section className="py-10 lg:py-12 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ rotateX: 2 }}
            className="bg-gradient-to-br from-[#8B5CF6] to-[#4F46E5] rounded-[36px] p-8 lg:p-12 text-center text-white relative overflow-hidden"
            style={{ transformStyle: "preserve-3d" }}
          >
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20"></div>
            <div className="relative z-10" style={{ transform: "translateZ(40px)" }}>
              <h2 className="text-[30px] sm:text-[36px] lg:text-[46px] font-bold mb-5 tracking-tight leading-[1.1]">
                Ready to Automate <br />Your Payroll?
              </h2>
              <p className="text-[15px] lg:text-[16px] text-purple-100 font-medium mb-8 max-w-2xl mx-auto">
                Fovestta handles payroll, compliance, and statutory requirements automatically.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <motion.div whileHover={{ scale: 1.1, translateZ: 20 }}>
                  <Link
                    to="/request-demo"
                    className="px-8 py-4 bg-white text-[#8B5CF6] text-[15px] lg:text-[16px] font-bold rounded-2xl hover:bg-gray-50 transition-all shadow-xl flex items-center gap-2 group inline-flex"
                  >
                    Book Free Demo
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
