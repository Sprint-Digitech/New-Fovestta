import { useState } from "react";
import { motion } from "motion/react";
import {
  MessageSquare, AlertCircle, Clock, CheckCircle2,
  Headphones, Mail, Phone, Globe, HelpCircle,
  Send, Sparkles, ShieldCheck, ChevronDown, ArrowUpRight, Asterisk
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

export function SupportSection() {
  const [submitted, setSubmitted] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [userId, setUserId] = useState("");
  const [issueCategory, setIssueCategory] = useState("");
  const [priorityLevel, setPriorityLevel] = useState("");
  const [subject, setSubject] = useState("");
  const [detailedDescription, setDetailedDescription] = useState("");
  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const userIdValid = /^[A-Za-z0-9-]+$/.test(userId);
  const descriptionValid = detailedDescription.trim().length >= 20;

  return (
    <div id="support" className="bg-[#FCFCFF] overflow-hidden" style={{ perspective: "2000px" }}>
      {/* 1. Premium Hero Header */}
      <section className="relative pt-20 pb-8 lg:pt-28 lg:pb-10 overflow-hidden">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/support_hero_bg_1777973090746.png"
            alt="Support Background"
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#FCFCFF] via-transparent to-[#FCFCFF]"></div>

          {/* Animated Orbs */}
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
            transition={{ duration: 10, repeat: Infinity }}
            className="absolute top-0 right-0 w-96 h-96 bg-[#8B5CF6]/10 rounded-full blur-[100px]"
          />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 lg:px-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm text-[#8B5CF6] text-[16px] font-bold mb-8 border border-purple-100"
          >
            <Headphones className="w-4 h-4 animate-pulse" />
            24/7 Dedicated Assistance
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, rotateX: -20, y: 20 }}
            whileInView={{ opacity: 1, rotateX: 0, y: 0 }}
            viewport={{ once: true }}
            className="text-[40px] lg:text-[52px] font-semibold text-gray-900 leading-[1.2] mb-6 tracking-tighter"
            style={{ transformStyle: "preserve-3d" }}
          >
            How Can We <br />
            <span className="bg-gradient-to-r from-[#8B5CF6] to-[#3B82F6] bg-clip-text text-transparent">Help You Today?</span>
          </motion.h1>

          <motion.p {...fadeIn} className="text-[18px] lg:text-[18px] text-gray-500 font-medium max-w-xl mx-auto leading-relaxed">
            Having trouble with Fovestta™? Create a support ticket and our team will help you resolve it quickly.
          </motion.p>
        </div>
      </section>

      {/* 2. Support Process Steps - 3D Cards */}
      <section className="py-10 relative z-10">
        <div className="max-w-7xl mx-auto px-4 lg:px-10">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              { icon: MessageSquare, color: "text-[#8B5CF6]", bg: "bg-purple-50", step: "Step 1", desc: "Submit your issue details" },
              { icon: AlertCircle, color: "text-[#3B82F6]", bg: "bg-blue-50", step: "Step 2", desc: "We confirm receipt and assign priority" },
              { icon: Clock, color: "text-[#F97316]", bg: "bg-orange-50", step: "Step 3", desc: "Support team investigates your issue" },
              { icon: CheckCircle2, color: "text-[#10B981]", bg: "bg-green-50", step: "Step 4", desc: "Resolution and follow-up support" }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                variants={fadeIn}
                whileHover={{ y: -8, rotateY: 10, translateZ: 15 }}
                className="bg-white rounded-2xl p-6 text-center shadow-[0_4px_30px_rgba(0,0,0,0.02)] border border-gray-100 hover:shadow-[0_15px_40px_rgba(0,0,0,0.05)] transition-all group"
                style={{ transformStyle: "preserve-3d" }}
              >
                <div className={`w-14 h-14 ${item.bg} rounded-xl flex items-center justify-center mx-auto mb-6 transition-transform group-hover:scale-110`} style={{ transform: "translateZ(15px)" }}>
                  <item.icon className={`w-7 h-7 ${item.color}`} strokeWidth={2.5} />
                </div>
                <h4 className="text-[16px] font-bold text-gray-900 mb-2 tracking-wide">{item.step}</h4>
                <p className="text-[18px] text-gray-500 font-bold leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 3. Ticket Form Section - Glassmorphism */}
      <section className="py-10 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 lg:px-10 grid lg:grid-cols-[1.5fr_1fr] gap-12 items-start">

          {/* Left: Form Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-[24px] p-6 lg:p-10 shadow-[0_15px_60px_rgba(0,0,0,0.03)] border border-gray-50 relative overflow-hidden"
          >
            {/* Form Decorative Element */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#8B5CF6]/5 rounded-bl-[100px]"></div>

            <div className="flex items-center gap-4 mb-10">
              <div className="w-12 h-12 bg-[#8B5CF6] rounded-2xl flex items-center justify-center shadow-lg shadow-purple-100">
                <Send className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-[28px] font-bold text-gray-900">Create New Support Ticket</h3>
            </div>

            <form
              className="space-y-8"
              noValidate
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
            >
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="flex items-center gap-2 text-[16px] font-bold text-gray-400 uppercase tracking-widest ml-1">
                    Full Name
                    <Asterisk className="w-3.5 h-3.5 text-red-500" />
                  </label>
                  <input value={fullName} onChange={(e) => setFullName(e.target.value)} type="text" placeholder="John Doe" className="w-full px-5 py-4 bg-gray-50 border border-gray-300 rounded-2xl text-[18px] focus:bg-white focus:border-purple-200 focus:ring-4 focus:ring-purple-50 outline-none transition-all" />
                  {submitted && !fullName.trim() && <p className="text-[12px] font-semibold text-red-500 ml-1">Full name is required.</p>}
                </div>
                <div className="space-y-3">
                  <label className="flex items-center gap-2 text-[16px] font-bold text-gray-400 uppercase tracking-widest ml-1">
                    Email Address
                    <Asterisk className="w-3.5 h-3.5 text-red-500" />
                  </label>
                  <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="john@company.com" className="w-full px-5 py-4 bg-gray-50 border border-gray-300 rounded-2xl text-[18px] focus:bg-white focus:border-purple-200 focus:ring-4 focus:ring-purple-50 outline-none transition-all" />
                  {submitted && !emailValid && <p className="text-[12px] font-semibold text-red-500 ml-1">Please enter a valid email address.</p>}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="flex items-center gap-2 text-[16px] font-bold text-gray-400 uppercase tracking-widest ml-1">
                    Company Name
                    <Asterisk className="w-3.5 h-3.5 text-red-500" />
                  </label>
                  <input value={companyName} onChange={(e) => setCompanyName(e.target.value)} type="text" placeholder="Your Company" className="w-full px-5 py-4 bg-gray-50 border border-gray-300 rounded-2xl text-[18px] focus:bg-white focus:border-purple-200 focus:ring-4 focus:ring-purple-50 outline-none transition-all" />
                  {submitted && !companyName.trim() && <p className="text-[12px] font-semibold text-red-500 ml-1">Company name is required.</p>}
                </div>
                <div className="space-y-3">
                  <label className="flex items-center gap-2 text-[16px] font-bold text-gray-400 uppercase tracking-widest ml-1">
                    Fovestta User ID
                    <Asterisk className="w-3.5 h-3.5 text-red-500" />
                  </label>
                  <input value={userId} onChange={(e) => setUserId(e.target.value)} type="text" placeholder="e.g., USR-12345" className="w-full px-5 py-4 bg-gray-50 border border-gray-300 rounded-2xl text-[18px] focus:bg-white focus:border-purple-200 focus:ring-4 focus:ring-purple-50 outline-none transition-all" />
                  {submitted && (!userId.trim() || !userIdValid) && <p className="text-[12px] font-semibold text-red-500 ml-1">Use letters, numbers, or hyphens only.</p>}
                  <p className="text-[11px] text-gray-400 font-bold italic">Your unique identifier in Fovestta system</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="flex items-center gap-2 text-[16px] font-bold text-gray-400 uppercase tracking-widest ml-1">
                    Issue Category
                    <Asterisk className="w-3.5 h-3.5 text-red-500" />
                  </label>
                  <div className="relative">
                    <select value={issueCategory} onChange={(e) => setIssueCategory(e.target.value)} className="w-full px-5 py-4 bg-gray-50 border border-gray-300 rounded-2xl text-[18px] focus:bg-white focus:border-purple-200 outline-none transition-all appearance-none cursor-pointer">
                      <option value="" disabled>Select category</option>
                      <option>Technical Issue</option>
                      <option>Billing Issue</option>
                      <option>Feature Request</option>
                      <option>Other</option>
                    </select>
                    <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                  </div>
                  {submitted && !issueCategory && <p className="text-[12px] font-semibold text-red-500 ml-1">Please select an issue category.</p>}
                </div>
                <div className="space-y-3">
                  <label className="flex items-center gap-2 text-[16px] font-bold text-gray-400 uppercase tracking-widest ml-1">
                    Priority Level
                    <Asterisk className="w-3.5 h-3.5 text-red-500" />
                  </label>
                  <div className="relative">
                    <select value={priorityLevel} onChange={(e) => setPriorityLevel(e.target.value)} className="w-full px-5 py-4 bg-gray-50 border border-gray-300 rounded-2xl text-[18px] focus:bg-white focus:border-purple-200 outline-none transition-all appearance-none cursor-pointer">
                      <option value="" disabled>Select priority</option>
                      <option>Medium - Issue affecting work</option>
                      <option>Low - General question</option>
                      <option>High - Critical business block</option>
                    </select>
                    <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                  </div>
                  {submitted && !priorityLevel && <p className="text-[12px] font-semibold text-red-500 ml-1">Please select a priority level.</p>}
                </div>
              </div>

              <div className="space-y-3">
                <label className="flex items-center gap-2 text-[16px] font-bold text-gray-400 uppercase tracking-widest ml-1">
                  Subject
                  <Asterisk className="w-3.5 h-3.5 text-red-500" />
                </label>
                <input value={subject} onChange={(e) => setSubject(e.target.value)} type="text" placeholder="Brief summary of your issue" className="w-full px-5 py-4 bg-gray-50 border border-gray-300 rounded-2xl text-[18px] focus:bg-white focus:border-purple-200 outline-none transition-all" />
                {submitted && !subject.trim() && <p className="text-[12px] font-semibold text-red-500 ml-1">Subject is required.</p>}
              </div>

              <div className="space-y-3">
                <label className="flex items-center gap-2 text-[16px] font-bold text-gray-400 uppercase tracking-widest ml-1">
                  Detailed Description
                  <Asterisk className="w-3.5 h-3.5 text-red-500" />
                </label>
                <textarea
                  value={detailedDescription}
                  onChange={(e) => setDetailedDescription(e.target.value)}
                  minLength={20}
                  rows={5}
                  placeholder="Please provide detailed information about your issue..."
                  className="w-full px-5 py-4 bg-gray-50 border border-gray-300 rounded-2xl text-[18px] focus:bg-white focus:border-purple-200 outline-none transition-all resize-none"
                ></textarea>
                {submitted && !descriptionValid && <p className="text-[12px] font-semibold text-red-500 ml-1">Please add at least 20 characters.</p>}
                <p className="text-[11px] text-gray-400 font-bold">The more details you provide, the faster we can help</p>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full py-5 bg-gradient-to-r from-[#8B5CF6] to-[#7C3AED] text-white text-[18px] font-black rounded-2xl shadow-xl shadow-purple-100 hover:shadow-purple-200 transition-all flex items-center justify-center gap-2"
              >
                Create Support Ticket
                <ArrowUpRight className="w-5 h-5" />
              </motion.button>
            </form>
          </motion.div>

          {/* Right: Info & Contact Card */}
          <div className="space-y-8">
            {/* Response Time Card */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-[#111827] rounded-2xl p-8 text-white relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-[50px]"></div>
              <h4 className="text-[18px] font-black mb-8 border-b border-white/10 pb-4">Response Times</h4>
              <div className="space-y-6">
                {[
                  { label: "Low Priority", time: "24-48 hours", color: "text-gray-400" },
                  { label: "Medium Priority", time: "4-12 hours", color: "text-blue-400" },
                  { label: "High Priority", time: "1-4 hours", color: "text-red-400" }
                ].map((item, i) => (
                  <div key={i} className="flex justify-between items-center">
                    <span className="text-gray-400 font-bold text-[18px]">{item.label}</span>
                    <span className={`font-black text-[18px] ${item.color}`}>{item.time}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* AI Image Placeholder for Support */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="rounded-[32px] overflow-hidden shadow-2xl relative aspect-square group"
            >
              <img
                src="/ai_support_abstract_1777973111102.png"
                alt="AI Support"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <span className="text-[9px] font-bold uppercase tracking-widest bg-[#8B5CF6] px-2 py-1 rounded mb-2 inline-block">AI Enhanced</span>
                <h5 className="text-[16px] font-bold">Smart Ticket Routing</h5>
              </div>
            </motion.div>

            {/* Contact Methods */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm"
            >
              <h4 className="text-[18px] font-black text-gray-900 mb-8">Direct Contact</h4>
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-purple-50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-[#8B5CF6]" />
                  </div>
                  <div>
                    <div className="text-[18px] text-gray-400 font-bold uppercase tracking-wider mb-1">Phone Support</div>
                    <a href="tel:+919599342525" className="text-[18px] font-black text-gray-900 hover:text-[#8B5CF6] transition-colors">+91-9599-34-2525</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-[#3B82F6]" />
                  </div>
                  <div>
                    <div className="text-[18px] text-gray-400 font-bold uppercase tracking-wider mb-1">Email Support</div>
                    <a href="mailto:support@fovestta.com" className="text-[18px] font-black text-gray-900 hover:text-[#3B82F6] transition-colors">support@fovestta.com</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-orange-50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-[#F97316]" />
                  </div>
                  <div>
                    <div className="text-[18px] text-gray-400 font-bold uppercase tracking-wider mb-1">Business Hours</div>
                    <div className="text-[18px] font-black text-gray-900">Mon - Fri, 9 AM - 6 PM IST</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>



      {/* 5. Team Section with Generated Image */}
      <section className="py-10 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 lg:px-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-[#8B5CF6] to-[#4F46E5] rounded-[24px] p-6 lg:p-8 flex flex-col lg:grid lg:grid-cols-[1.2fr_0.8fr] gap-8 items-center text-white relative shadow-2xl"
          >
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>

            <div className="relative z-10">
              <h2 className="text-[26px] lg:text-[34px] font-bold mb-4 tracking-tighter leading-tight">
                Always Here for <br />Your Success
              </h2>
              <p className="text-[18px] text-purple-100 font-bold mb-6 leading-relaxed max-w-md">
                Our dedicated success managers and technical experts ensure you get the most out of Fovestta. We don't just solve issues; we build relationships.
              </p>
              <div className="flex items-center gap-4">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map(i => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-purple-400 flex items-center justify-center font-bold text-[10px]">HR</div>
                  ))}
                </div>
                <span className="text-[16px] font-bold text-purple-100">Join 5,000+ HR Teams</span>
              </div>
            </div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="relative rounded-2xl overflow-hidden shadow-xl border-2 border-white/10 w-full h-[240px] lg:h-[280px]"
            >
              <img
                src="/support_human_connection_1777973130573.png"
                alt="Support Team"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-4 left-4 right-4 p-3 bg-white/10 backdrop-blur-md rounded-lg border border-white/20">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-green-400" />
                  <span className="text-[11px] font-bold">Guaranteed SLA Response</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
