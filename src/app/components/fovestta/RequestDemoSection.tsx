import { motion } from "motion/react";
import { Phone, MessageCircle, Mail, Check, ArrowUpRight } from "lucide-react";

export function RequestDemoSection() {
  return (
    <section id="demo" className="relative min-h-screen bg-[#FDFDFF] py-8 lg:py-16 overflow-hidden scroll-mt-20">
      {/* Background Orbs & Grid */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] bg-[#E0E7FF]/40 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#F5F3FF]/50 rounded-full blur-[100px]"></div>
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#4F46E5 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-6">
        {/* Header Area */}
        <div className="mb-10 lg:mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-purple-50 text-[#8B5CF6] text-[13px] font-bold mb-6 border border-purple-100 uppercase tracking-widest"
          >
            Contact
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[40px] lg:text-[52px] font-semibold text-gray-900 leading-[1.2] mb-4 tracking-tight"
          >
            Ready to Transform <br />
            <span className="font-serif italic text-[#8B5CF6]">Your HR?</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[16px] lg:text-[18px] text-gray-500 font-medium max-w-xl leading-relaxed"
          >
            Join thousands of companies saving time, reducing costs, and empowering their teams with Fovestta™.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-[400px_1fr] gap-12 items-start">
          
          {/* Left Column: Contact Cards + Why Block */}
          <div className="space-y-6">
            {[
              { icon: Phone, label: "Call us", value: "+91-9599-34-2525", color: "bg-[#8B5CF6]" },
              { icon: MessageCircle, label: "WhatsApp", value: "Chat instantly", color: "bg-[#6366F1]" },
              { icon: Mail, label: "Email", value: "info@fovestta.com", color: "bg-[#3B82F6]" }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-xl p-4 flex items-center gap-4 border border-gray-100 shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:shadow-[0_4px_20px_rgba(0,0,0,0.04)] transition-all group cursor-pointer"
              >
                <div className={`w-10 h-10 ${item.color} rounded-lg flex items-center justify-center text-white shadow-md`}>
                  <item.icon className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-0.5">{item.label}</p>
                  <p className="text-[15px] font-semibold text-gray-900 group-hover:text-[#8B5CF6] transition-colors">{item.value}</p>
                </div>
              </motion.div>
            ))}

            {/* Why Book a Demo Block */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-gradient-to-br from-[#8B5CF6] to-[#6366F1] rounded-[24px] p-6 text-white relative overflow-hidden shadow-xl"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
              <h3 className="text-[18px] font-semibold mb-4">Why book a demo?</h3>
              <div className="space-y-4">
                {[
                  "Personalized walkthrough",
                  "ROI analysis for your org",
                  "Compliance gap check",
                  "No credit card required"
                ].map((text, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-purple-200 flex-shrink-0" />
                    <span className="text-[15px] font-medium text-purple-50">{text}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column: Form Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white rounded-[32px] p-6 lg:p-10 border border-gray-100 shadow-[0_10px_40px_rgba(0,0,0,0.03)]"
          >
            <h2 className="text-[26px] font-semibold text-gray-900 mb-2">Book Free Demo</h2>
            <p className="text-[14px] text-gray-500 font-medium mb-8">
              Fill in your details and our team will reach out within 24 hours.
            </p>

            <form className="grid sm:grid-cols-2 gap-5">
              <div className="space-y-1.5">
                <label className="text-[12px] font-bold text-gray-900 uppercase tracking-wider ml-1">Full Name</label>
                <input type="text" placeholder="Enter your name" className="w-full px-4 py-3 bg-gray-50 border border-transparent rounded-xl text-[14px] focus:bg-white focus:border-purple-200 focus:ring-4 focus:ring-purple-50 outline-none transition-all" />
              </div>
              <div className="space-y-1.5">
                <label className="text-[12px] font-bold text-gray-900 uppercase tracking-wider ml-1">Work Email</label>
                <input type="email" placeholder="Enter work email" className="w-full px-4 py-3 bg-gray-50 border border-transparent rounded-xl text-[14px] focus:bg-white focus:border-purple-200 focus:ring-4 focus:ring-purple-50 outline-none transition-all" />
              </div>
              <div className="space-y-1.5">
                <label className="text-[12px] font-bold text-gray-900 uppercase tracking-wider ml-1">Company</label>
                <input type="text" placeholder="Enter company name" className="w-full px-4 py-3 bg-gray-50 border border-transparent rounded-xl text-[14px] focus:bg-white focus:border-purple-200 focus:ring-4 focus:ring-purple-50 outline-none transition-all" />
              </div>
              <div className="space-y-1.5">
                <label className="text-[12px] font-bold text-gray-900 uppercase tracking-wider ml-1">Employees</label>
                <select className="w-full px-4 py-3 bg-gray-50 border border-transparent rounded-xl text-[14px] focus:bg-white focus:border-purple-200 focus:ring-4 focus:ring-purple-50 outline-none appearance-none transition-all cursor-pointer">
                  <option>Select range</option>
                  <option>1-50</option>
                  <option>51-200</option>
                  <option>201-500</option>
                  <option>500+</option>
                </select>
              </div>
              <div className="sm:col-span-2 space-y-1.5">
                <label className="text-[12px] font-bold text-gray-900 uppercase tracking-wider ml-1">Message</label>
                <textarea placeholder="Tell us more about your needs..." className="w-full px-4 py-3 bg-gray-50 border border-transparent rounded-xl text-[14px] focus:bg-white focus:border-purple-200 focus:ring-4 focus:ring-purple-50 outline-none min-h-[100px] transition-all resize-none"></textarea>
              </div>

              <div className="sm:col-span-2 pt-2">
                <button type="button" className="w-full py-4 bg-[#8B5CF6] text-white text-[15px] font-bold rounded-xl hover:bg-[#7C3AED] transition-all shadow-lg shadow-purple-100 flex items-center justify-center gap-2 group">
                  Book Free Demo
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
                <p className="text-center text-[12px] text-gray-400 font-bold mt-6 tracking-wide">
                  NO CREDIT CARD REQUIRED • 14 DAYS FREE ACCESS • CANCEL ANYTIME
                </p>
              </div>
            </form>
          </motion.div>
        </div>

        {/* Re-adding pricing/stats as requested in previous turns but matching new aesthetic */}
        <div className="mt-16 pt-12 border-t border-gray-100">
           <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { label: "Employees Managed", value: "50M+" },
              { label: "Active Companies", value: "10,000+" },
              { label: "Average Rating", value: "4.9★" },
              { label: "Uptime SLA", value: "99.9%" }
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-[24px] font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
