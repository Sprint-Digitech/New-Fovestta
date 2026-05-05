import { motion } from "motion/react";
import { 
  CheckCircle2, Shield, Zap, Clock, FileCheck, FileText, 
  Calendar, AlertCircle, ClipboardCheck, AlertTriangle, 
  Users, Download, ArrowRight, ShieldAlert, Sparkles,
  ArrowDownCircle, ShieldCheck
} from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  initial: {},
  whileInView: {
    transition: {
      staggerChildren: 0.1
    }
  },
  viewport: { once: true }
};

export function PayrollChecklistSection() {
  return (
    <div id="payroll" className="bg-[#FCFCFF] overflow-hidden" style={{ perspective: "2000px" }}>
      {/* 1. Dynamic Hero Section with 3D Depth */}
      <section className="relative pt-8 pb-16 lg:pt-16 lg:pb-24 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 z-0">
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0],
              opacity: [0.1, 0.2, 0.1],
              z: [0, 50, 0]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#8B5CF6]/20 rounded-full blur-[120px]"
          />
          <motion.div 
            animate={{ 
              scale: [1.2, 1, 1.2],
              rotate: [90, 0, 90],
              opacity: [0.1, 0.15, 0.1],
              z: [0, -50, 0]
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#3B82F6]/20 rounded-full blur-[100px]"
          />
        </div>

        <div className="relative z-10 max-w-[1200px] mx-auto px-6 grid lg:grid-cols-[1.2fr_1fr] gap-16 lg:gap-24 items-center">
          
          {/* Left Content */}
          <motion.div 
            {...fadeIn}
            style={{ transformStyle: "preserve-3d" }}
          >
            <motion.div 
              initial={{ opacity: 0, z: -20 }}
              whileInView={{ opacity: 1, z: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-[0_2px_10px_rgba(139,92,246,0.1)] text-[#8B5CF6] text-[13px] font-bold mb-8 border border-purple-100/50"
            >
              <Sparkles className="w-4 h-4 animate-pulse" />
              2026 Compliance Edition
            </motion.div>
            
            <h1 className="text-[56px] lg:text-[72px] font-bold text-gray-900 leading-[1] mb-8 tracking-tighter">
              Is Your Payroll<br />
              <motion.span 
                initial={{ opacity: 0, rotateX: -20 }}
                whileInView={{ opacity: 1, rotateX: 0 }}
                viewport={{ once: true }}
                className="inline-block bg-gradient-to-r from-[#8B5CF6] to-[#6366F1] bg-clip-text text-transparent"
              >
                100% Compliant?
              </motion.span>
            </h1>
            
            <p className="text-[18px] lg:text-[20px] text-gray-500 leading-relaxed mb-10 font-medium max-w-xl">
              Download the <strong className="text-gray-900">Payroll Compliance Checklist for Indian Companies</strong> and protect your business from statutory penalties.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                { icon: Shield, text: "PF & ESI Audits" },
                { icon: FileCheck, text: "TDS Requirements" },
                { icon: Calendar, text: "Filing Deadlines" },
                { icon: Zap, text: "Instant Download" }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ scale: 1.05, rotateY: 10, translateZ: 20 }}
                  className="flex items-center gap-3 p-4 bg-white/50 backdrop-blur-sm rounded-2xl border border-gray-100 shadow-sm transition-all"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <item.icon className="w-5 h-5 text-[#8B5CF6]" />
                  <span className="text-[15px] text-gray-900 font-bold">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Form Card - 3D Tilt Effect */}
          <motion.div
            initial={{ opacity: 0, x: 50, rotateY: -15 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true }}
            whileHover={{ rotateY: 5, rotateX: -2 }}
            className="relative group cursor-pointer"
            style={{ transformStyle: "preserve-3d" }}
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-[40px] opacity-10 blur-2xl group-hover:opacity-20 transition-opacity"></div>
            <div className="relative bg-white/80 backdrop-blur-xl rounded-[32px] p-8 lg:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-white" style={{ transform: "translateZ(30px)" }}>
              <h3 className="text-[26px] font-bold text-gray-900 mb-2">Get Your Free Checklist</h3>
              <p className="text-[14px] text-gray-500 font-medium mb-8">We'll email the 2026 edition directly to you.</p>
              
              <form className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-[12px] font-bold text-gray-400 uppercase tracking-widest ml-1">Full Name</label>
                    <input type="text" placeholder="John Doe" className="w-full px-4 py-3.5 bg-gray-50 border border-transparent rounded-xl text-[14px] focus:bg-white focus:border-purple-200 focus:ring-4 focus:ring-purple-50 outline-none transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[12px] font-bold text-gray-400 uppercase tracking-widest ml-1">Work Email</label>
                    <input type="email" placeholder="john@company.com" className="w-full px-4 py-3.5 bg-gray-50 border border-transparent rounded-xl text-[14px] focus:bg-white focus:border-purple-200 focus:ring-4 focus:ring-purple-50 outline-none transition-all" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-[12px] font-bold text-gray-400 uppercase tracking-widest ml-1">Company Name</label>
                  <input type="text" placeholder="Your Company" className="w-full px-4 py-3.5 bg-gray-50 border border-transparent rounded-xl text-[14px] focus:bg-white focus:border-purple-200 focus:ring-4 focus:ring-purple-50 outline-none transition-all" />
                </div>
                
                <button type="button" className="w-full py-4 bg-gradient-to-r from-[#8B5CF6] to-[#7C3AED] text-white text-[15px] font-bold rounded-xl hover:shadow-xl hover:shadow-purple-100 transition-all flex items-center justify-center gap-2 mt-4 group">
                  <Download className="w-5 h-5 group-hover:translate-y-0.5 transition-transform" />
                  Download Checklist
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Interactive Feature Grid with 3D Float */}
      <section className="py-16 bg-white relative">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-12">
            <motion.h2 {...fadeIn} className="text-[40px] lg:text-[52px] font-bold text-gray-900 mb-6 tracking-tight">Trusted by HR Specialists</motion.h2>
          </div>
          
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              { icon: Shield, title: "Statutory Compliance", desc: "Avoid PF, ESI, and TDS penalties with our comprehensive guide.", accent: "bg-purple-50" },
              { icon: Zap, title: "Payroll Accuracy", desc: "Ensure correct salary calculations and statutory deductions.", accent: "bg-blue-50" },
              { icon: Clock, title: "Save HR Time", desc: "Reduce manual payroll work and focus on strategic initiatives.", accent: "bg-pink-50" },
              { icon: FileCheck, title: "Audit Ready", desc: "Keep documentation ready for government audits and checks.", accent: "bg-green-50" }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                variants={fadeIn}
                whileHover={{ y: -10, rotateY: 15, scale: 1.05 }}
                className="bg-white rounded-[32px] p-8 border border-gray-100 shadow-[0_4px_30px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.05)] transition-all group"
                style={{ transformStyle: "preserve-3d" }}
              >
                <div className={`w-14 h-14 ${item.accent} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform`} style={{ transform: "translateZ(20px)" }}>
                  <item.icon className="w-7 h-7 text-gray-900" />
                </div>
                <h4 className="text-[18px] font-bold text-gray-900 mb-4">{item.title}</h4>
                <p className="text-[14px] text-gray-500 leading-relaxed font-medium">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 3. Content Breakdown (3D Stack) */}
      <section className="py-16 bg-[#F8F9FF]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid lg:grid-cols-[1fr_1.5fr] gap-16 items-center">
            <motion.div {...fadeIn}>
              <h2 className="text-[40px] lg:text-[48px] font-bold text-gray-900 mb-6 tracking-tight">What's Inside the Checklist?</h2>
              <div className="flex flex-col gap-4">
                 {[
                   { icon: ArrowDownCircle, text: "2026 Statutory Calendar", color: "text-[#8B5CF6]" },
                   { icon: ArrowDownCircle, text: "PF/ESI Filing Guide", color: "text-[#3B82F6]" }
                 ].map((item, i) => (
                   <motion.div 
                    key={i}
                    whileHover={{ x: 10, scale: 1.02 }}
                    className="flex items-center gap-3 p-4 bg-white rounded-2xl border border-gray-100 shadow-sm cursor-pointer"
                   >
                      <item.icon className={`w-5 h-5 ${item.color}`} />
                      <span className="text-[15px] font-bold text-gray-800">{item.text}</span>
                   </motion.div>
                 ))}
              </div>
            </motion.div>
            
            <motion.div 
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              className="grid sm:grid-cols-2 gap-6"
              style={{ perspective: "1000px" }}
            >
              {[
                { icon: CheckCircle2, title: "Monthly Checklist", desc: "Step-by-step guide for monthly payroll processing" },
                { icon: FileText, title: "Statutory Rules", desc: "Complete breakdown of all statutory deductions" },
                { icon: Calendar, title: "Filing Deadlines", desc: "2026 complete calendar with critical dates" },
                { icon: AlertCircle, title: "Common Mistakes", desc: "Learn from mistakes others have made to avoid penalties" },
                { icon: ClipboardCheck, title: "Self-Assessment", desc: "Evaluate your current process compliance level" },
                { icon: Zap, title: "Reference Guide", desc: "Fast lookup for common compliance questions" }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeIn}
                  whileHover={{ rotateX: 5, rotateY: -5, translateZ: 10 }}
                  className="bg-white rounded-[24px] p-6 flex items-start gap-5 border border-gray-100 shadow-sm hover:border-purple-200 transition-all group"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#8B5CF6] transition-colors" style={{ transform: "translateZ(15px)" }}>
                    <item.icon className="w-6 h-6 text-[#8B5CF6] group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h4 className="text-[16px] font-bold text-gray-900 mb-2">{item.title}</h4>
                    <p className="text-[13px] text-gray-500 font-medium leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. Risk Analysis (3D Cards) */}
      <section className="py-16 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="bg-[#111827] rounded-[48px] p-12 lg:p-20 text-white relative overflow-hidden">
             <div className="absolute top-0 right-0 w-96 h-96 bg-[#8B5CF6]/20 rounded-full blur-[100px]"></div>
             <div className="relative z-10 text-center mb-16">
               <h2 className="text-[36px] lg:text-[48px] font-bold mb-6 tracking-tight">Why Payroll Compliance Matters</h2>
             </div>
             
             <div className="relative z-10 grid md:grid-cols-3 gap-8" style={{ perspective: "1000px" }}>
               {[
                 { icon: ShieldAlert, title: "Financial Penalties", desc: "Missed filings can result in penalties ranging from ₹10,000 to ₹1,00,000+.", color: "text-red-400" },
                 { icon: Users, title: "Employee Trust", desc: "Incorrect payroll damages confidence and can lead to legal disputes.", color: "text-blue-400" },
                 { icon: Zap, title: "Operational Risk", desc: "Manual payroll processes create compliance gaps and increase the risk of errors.", color: "text-purple-400" }
               ].map((item, idx) => (
                 <motion.div
                   key={idx}
                   whileHover={{ rotateY: 10, rotateX: 5, translateZ: 30 }}
                   className="bg-white/5 border border-white/10 rounded-[32px] p-8 hover:bg-white/10 transition-colors"
                   style={{ transformStyle: "preserve-3d" }}
                 >
                   <item.icon className={`w-10 h-10 ${item.color} mb-6`} style={{ transform: "translateZ(20px)" }} />
                   <h4 className="text-[20px] font-bold mb-4">{item.title}</h4>
                   <p className="text-[15px] text-gray-400 leading-relaxed font-medium">{item.desc}</p>
                 </motion.div>
               ))}
             </div>
          </div>
        </div>
      </section>

      {/* 5. Modern CTA Section with 3D Depth */}
      <section className="py-16 bg-white relative">
        <div className="max-w-[1200px] mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ rotateX: 2 }}
            className="bg-gradient-to-br from-[#8B5CF6] to-[#4F46E5] rounded-[48px] p-12 lg:p-20 text-center text-white relative overflow-hidden"
            style={{ transformStyle: "preserve-3d" }}
          >
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20"></div>
            <div className="relative z-10" style={{ transform: "translateZ(40px)" }}>
              <h2 className="text-[42px] lg:text-[56px] font-bold mb-8 tracking-tight leading-[1.1]">
                Simplify Your Payroll <br />Compliance Today
              </h2>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <motion.button 
                  whileHover={{ scale: 1.1, translateZ: 20 }}
                  className="px-10 py-5 bg-white text-[#8B5CF6] text-[16px] font-bold rounded-2xl hover:bg-gray-50 transition-all shadow-xl flex items-center gap-2 group"
                >
                  <Download className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
                  Download Now
                </motion.button>
                <motion.button 
                  whileHover={{ scale: 1.1, translateZ: 20 }}
                  className="px-10 py-5 bg-purple-400/20 text-white border border-white/30 text-[16px] font-bold rounded-2xl hover:bg-purple-400/30 transition-all backdrop-blur-md flex items-center gap-2 group"
                >
                   Book Free Demo
                   <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
