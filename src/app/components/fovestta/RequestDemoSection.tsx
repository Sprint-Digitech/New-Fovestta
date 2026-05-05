import { motion } from "motion/react";
import { Phone, MessageCircle, Mail, Check, ArrowUpRight } from "lucide-react";

export function RequestDemoSection() {
  return (
    <section id="demo" className="relative min-h-screen bg-[#FDFDFF] py-12 lg:py-24 overflow-hidden scroll-mt-20">
      {/* Background Orbs & Grid */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] bg-[#E0E7FF]/40 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#F5F3FF]/50 rounded-full blur-[100px]"></div>
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#4F46E5 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-6">
        {/* Header Area */}
        <div className="mb-16 lg:mb-20">
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
            className="text-[56px] lg:text-[72px] font-bold text-gray-900 leading-[1.1] mb-6 tracking-tight"
          >
            Ready to Transform <br />
            <span className="font-serif italic text-[#8B5CF6]">Your HR?</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[18px] lg:text-[20px] text-gray-500 font-medium max-w-2xl leading-relaxed"
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
                className="bg-white rounded-2xl p-6 flex items-center gap-5 border border-gray-100 shadow-[0_2px_15px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.05)] transition-all group cursor-pointer"
              >
                <div className={`w-12 h-12 ${item.color} rounded-xl flex items-center justify-center text-white shadow-lg`}>
                  <item.icon className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-[12px] font-bold text-gray-400 uppercase tracking-wider mb-0.5">{item.label}</p>
                  <p className="text-[17px] font-bold text-gray-900 group-hover:text-[#8B5CF6] transition-colors">{item.value}</p>
                </div>
              </motion.div>
            ))}

            {/* Why Book a Demo Block */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-gradient-to-br from-[#8B5CF6] to-[#6366F1] rounded-[32px] p-8 text-white relative overflow-hidden shadow-2xl shadow-purple-200"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
              <h3 className="text-[22px] font-bold mb-6">Why book a demo?</h3>
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
            className="bg-white rounded-[40px] p-8 lg:p-12 border border-gray-100 shadow-[0_20px_60px_rgba(0,0,0,0.04)]"
          >
            <h2 className="text-[32px] font-bold text-gray-900 mb-2">Book Free Demo</h2>
            <p className="text-[15px] text-gray-500 font-medium mb-10">
              Fill in your details and our team will reach out within 24 hours.
            </p>

            <form className="grid sm:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-[13px] font-bold text-gray-900 uppercase tracking-wider ml-1">Full Name</label>
                <input type="text" placeholder="Enter your name" className="w-full px-5 py-4 bg-gray-50 border border-transparent rounded-2xl text-[15px] focus:bg-white focus:border-purple-200 focus:ring-4 focus:ring-purple-50 outline-none transition-all" />
              </div>
              <div className="space-y-2">
                <label className="text-[13px] font-bold text-gray-900 uppercase tracking-wider ml-1">Work Email</label>
                <input type="email" placeholder="Enter work email" className="w-full px-5 py-4 bg-gray-50 border border-transparent rounded-2xl text-[15px] focus:bg-white focus:border-purple-200 focus:ring-4 focus:ring-purple-50 outline-none transition-all" />
              </div>
              <div className="space-y-2">
                <label className="text-[13px] font-bold text-gray-900 uppercase tracking-wider ml-1">Company</label>
                <input type="text" placeholder="Enter company name" className="w-full px-5 py-4 bg-gray-50 border border-transparent rounded-2xl text-[15px] focus:bg-white focus:border-purple-200 focus:ring-4 focus:ring-purple-50 outline-none transition-all" />
              </div>
              <div className="space-y-2">
                <label className="text-[13px] font-bold text-gray-900 uppercase tracking-wider ml-1">Employees</label>
                <select className="w-full px-5 py-4 bg-gray-50 border border-transparent rounded-2xl text-[15px] focus:bg-white focus:border-purple-200 focus:ring-4 focus:ring-purple-50 outline-none appearance-none transition-all cursor-pointer">
                  <option>Select range</option>
                  <option>1-50</option>
                  <option>51-200</option>
                  <option>201-500</option>
                  <option>500+</option>
                </select>
              </div>
              <div className="sm:col-span-2 space-y-2">
                <label className="text-[13px] font-bold text-gray-900 uppercase tracking-wider ml-1">Message</label>
                <textarea placeholder="Tell us more about your needs..." className="w-full px-5 py-4 bg-gray-50 border border-transparent rounded-2xl text-[15px] focus:bg-white focus:border-purple-200 focus:ring-4 focus:ring-purple-50 outline-none min-h-[120px] transition-all resize-none"></textarea>
              </div>

              <div className="sm:col-span-2 pt-4">
                <button type="button" className="w-full py-5 bg-[#8B5CF6] text-white text-[16px] font-bold rounded-2xl hover:bg-[#7C3AED] transition-all shadow-xl shadow-purple-100 flex items-center justify-center gap-3 group">
                  Book Free Demo
                  <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
                <p className="text-center text-[12px] text-gray-400 font-bold mt-6 tracking-wide">
                  NO CREDIT CARD REQUIRED • 14 DAYS FREE ACCESS • CANCEL ANYTIME
                </p>
              </div>
            </form>
          </motion.div>
        </div>

        {/* Re-adding pricing/stats as requested in previous turns but matching new aesthetic */}
        <div className="mt-32 pt-20 border-t border-gray-100">
           <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { label: "Employees Managed", value: "50M+" },
              { label: "Active Companies", value: "10,000+" },
              { label: "Average Rating", value: "4.9★" },
              { label: "Uptime SLA", value: "99.9%" }
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-[32px] font-black text-gray-900 mb-1">{stat.value}</div>
                <div className="text-[12px] font-bold text-gray-400 uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
