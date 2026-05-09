import { motion } from "motion/react";
import { FileText, Shield, Lock, Eye, Database, BellRing, Scale, Briefcase, Mail, Fingerprint, Search, ShieldCheck } from "lucide-react";
import { PremiumBackground } from "./PremiumBackground";

export function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-[#fafbfe] pt-20 pb-12 overflow-hidden relative">
      <PremiumBackground variant="luxury" />

      {/* 3D Floating Elements Background */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ y: [0, -30, 0], rotateY: [0, 20, 0], rotateX: [0, 10, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[10%] right-[15%] opacity-20"
        >
          <Shield className="w-48 h-48 text-[#6B46FF]" />
        </motion.div>
        <motion.div
          animate={{ y: [0, 25, 0], rotateZ: [0, -10, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-[25%] left-[5%] opacity-15"
        >
          <Eye className="w-40 h-40 text-[#3B82F6]" />
        </motion.div>
      </div>

      <div className="max-w-[90rem] mx-auto px-4 lg:px-8 relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
          className="text-center mb-8 relative"
          style={{ perspective: "1000px" }}
        >
          <div className="inline-block p-8 md:p-12 rounded-[40px] bg-white/60 backdrop-blur-2xl shadow-[0_30px_60px_-15px_rgba(107,70,255,0.15)] border border-white/80">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: "spring" }}
              className="inline-flex items-center justify-center w-24 h-24 rounded-[2rem] bg-gradient-to-br from-[#6B46FF] via-[#8B5CF6] to-[#3B82F6] mb-8 shadow-[0_15px_40px_rgba(107,70,255,0.4)]"
              style={{ transformStyle: "preserve-3d" }}
              whileHover={{ rotateY: 180 }}
            >
              <FileText className="w-12 h-12 text-white" />
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-black text-gray-900 mb-6 tracking-tight leading-tight">
              Privacy <span className="bg-gradient-to-r from-[#6B46FF] to-[#3B82F6] bg-clip-text text-transparent">Policy</span>
            </h1>
            <p className="text-sm md:text-lg font-bold text-[#6B46FF] uppercase tracking-widest bg-purple-50 inline-block px-6 py-2 rounded-full border border-purple-100">
              Last Updated: March 2026
            </p>
          </div>
        </motion.div>

        {/* Image Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="w-full h-[200px] md:h-[250px] rounded-[40px] overflow-hidden mb-8 shadow-2xl relative"
        >
          <img
            src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&h=600&fit=crop&q=80"
            alt="Data Privacy and Security"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent flex items-end p-10">
            <h2 className="text-white text-3xl md:text-4xl font-bold">Your privacy is our highest priority.</h2>
          </div>
        </motion.div>

        {/* Content Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white rounded-[40px] p-6 md:p-10 shadow-[0_20px_50px_-10px_rgba(0,0,0,0.05)] border border-gray-100"
        >
          <div className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-gray-900 prose-p:text-gray-600 prose-p:leading-relaxed prose-li:text-gray-600">

            <section className="mb-8">
              <h2 className="text-3xl mb-4 flex items-center gap-4 text-gray-900">
                <span className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-100 to-blue-50 text-[#6B46FF] flex items-center justify-center text-xl font-black shadow-sm shrink-0">1</span>
                Introduction
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed bg-gray-50 p-6 rounded-2xl border border-gray-100">
                Fovestta™ ("we", "our", or "us") operates the Fovestta HR and Payroll platform. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl mb-4 flex items-center gap-4">
                <span className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-100 to-blue-50 text-[#6B46FF] flex items-center justify-center text-xl font-black shadow-sm shrink-0">2</span>
                Information We Collect
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    title: "Information You Provide",
                    desc: "Name, email, phone, company name, payroll data, employee records, and other HR information you submit.",
                    icon: Briefcase,
                    color: "text-blue-500",
                    bg: "bg-blue-50",
                    border: "border-blue-100"
                  },
                  {
                    title: "Automatically Collected",
                    desc: "IP address, browser type, pages visited, time spent, cookies, and device information.",
                    icon: Search,
                    color: "text-purple-500",
                    bg: "bg-purple-50",
                    border: "border-purple-100"
                  },
                  {
                    title: "Third-Party Data",
                    desc: "Information from payment processors, compliance databases, and integration partners.",
                    icon: Database,
                    color: "text-emerald-500",
                    bg: "bg-emerald-50",
                    border: "border-emerald-100"
                  }
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ y: -5 }}
                    className={`p-4 rounded-3xl ${item.bg} border ${item.border} transition-all duration-300 shadow-sm hover:shadow-lg`}
                  >
                    <item.icon className={`w-8 h-8 ${item.color} mb-4`} />
                    <h3 className="text-xl font-bold text-gray-900 mt-0 mb-3 leading-tight">{item.title}</h3>
                    <p className="text-sm text-gray-700 m-0 leading-relaxed">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl mb-4 flex items-center gap-4">
                <span className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-100 to-blue-50 text-[#6B46FF] flex items-center justify-center text-xl font-black shadow-sm shrink-0">3</span>
                How We Use Your Information
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Providing and improving HR and payroll services",
                  "Processing transactions and sending billing information",
                  "Sending marketing communications (with your consent)",
                  "Compliance with legal obligations (TDS, EPF, ESI, IT regulations)",
                  "Fraud detection and system security",
                  "Customer support and technical assistance"
                ].map((usage, i) => (
                  <div key={i} className="flex items-start gap-4 p-3 rounded-2xl border border-gray-100 hover:border-purple-200 hover:bg-purple-50 transition-colors">
                    <div className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center shrink-0 text-purple-500 mt-1">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    <span className="font-medium text-gray-700">{usage}</span>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl mb-4 flex items-center gap-4">
                <span className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-100 to-blue-50 text-[#6B46FF] flex items-center justify-center text-xl font-black shadow-sm shrink-0">4</span>
                Data Protection & Security
              </h2>
              <div className="p-5 rounded-3xl bg-gray-900 text-white shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
                  <Lock className="w-48 h-48" />
                </div>
                <div className="relative z-10">
                  <p className="text-gray-300 text-lg mb-8">We implement industry-standard security measures:</p>
                  <div className="grid md:grid-cols-2 gap-6">
                    {[
                      "End-to-end encryption for sensitive payroll and employee data",
                      "ISO 27001 certification for information security management",
                      "SOC 2 Type II compliance for service organizations",
                      "Regular security audits and penetration testing",
                      "Secure data centers with 99.9% uptime SLA",
                      "Employee access controls and audit trails"
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-3 bg-white/10 p-3 rounded-xl backdrop-blur-sm border border-white/5">
                        <div className="w-2 h-2 rounded-full bg-blue-400 shrink-0 shadow-[0_0_10px_rgba(96,165,250,0.8)]"></div>
                        <span className="text-sm font-medium text-white">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl mb-4 flex items-center gap-4">
                <span className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-100 to-blue-50 text-[#6B46FF] flex items-center justify-center text-xl font-black shadow-sm shrink-0">5</span>
                Data Retention
              </h2>
              <div className="p-5 rounded-3xl bg-gradient-to-r from-blue-50 to-purple-50 border border-purple-100 shadow-sm text-gray-800 flex flex-col md:flex-row items-center gap-8">
                <div className="p-6 rounded-full bg-white shadow-md">
                  <Database className="w-12 h-12 text-[#6B46FF]" />
                </div>
                <p className="text-lg leading-relaxed m-0 font-medium text-gray-700">
                  We retain your data for as long as necessary to provide our services and comply with legal obligations. Payroll records are retained for <strong className="text-purple-600">7 years</strong> per Indian labor laws. You can request data deletion at any time, subject to legal requirements.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl mb-4 flex items-center gap-4">
                <span className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-100 to-blue-50 text-[#6B46FF] flex items-center justify-center text-xl font-black shadow-sm shrink-0">6</span>
                Your Rights
              </h2>
              <p>Under DPDP Act and GDPR, you have the right to:</p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
                {[
                  "Access your personal data",
                  "Correct inaccurate information",
                  "Request deletion of your data",
                  "Opt-out of marketing communications",
                  "Data portability",
                  "Lodge a complaint with regulatory authorities"
                ].map((right, idx) => (
                  <div key={idx} className="bg-white border border-gray-200 p-3 rounded-xl shadow-sm flex items-center gap-3 hover:border-purple-300 hover:shadow-md transition-all">
                    <div className="w-6 h-6 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center shrink-0">✓</div>
                    <span className="text-sm font-bold text-gray-700">{right}</span>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl mb-4 flex items-center gap-4">
                <span className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-100 to-blue-50 text-[#6B46FF] flex items-center justify-center text-xl font-black shadow-sm shrink-0">7</span>
                India Compliance
              </h2>
              <p>Fovestta™ complies with all Indian data protection and labor laws:</p>
              <div className="flex flex-wrap gap-4 mt-6">
                {[
                  "Digital Personal Data Protection Act (DPDP Act)",
                  "Information Technology Act, 2000",
                  "Employee State Insurance Act",
                  "Provident Fund Act",
                  "Income Tax Act provisions"
                ].map((law, i) => (
                  <span key={i} className="px-5 py-3 rounded-xl bg-gray-50 text-gray-800 font-bold text-sm border border-gray-200 shadow-sm flex items-center gap-2">
                    <Scale className="w-4 h-4 text-[#6B46FF]" /> {law}
                  </span>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-3xl mb-4 flex items-center gap-4">
                <span className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-100 to-blue-50 text-[#6B46FF] flex items-center justify-center text-xl font-black shadow-sm shrink-0">8</span>
                Contact Us
              </h2>
              <p>For privacy concerns or data requests, contact us at:</p>
              <div className="mt-6 p-5 rounded-3xl bg-gradient-to-br from-[#F5F3FF] to-[#EFF6FF] border border-blue-100 shadow-inner flex flex-col md:flex-row items-center gap-8">
                <div className="w-16 h-16 rounded-2xl bg-white shadow-md flex items-center justify-center shrink-0">
                  <Mail className="w-8 h-8 text-[#6B46FF]" />
                </div>
                <div className="space-y-2 text-gray-700 w-full">
                  <h4 className="text-2xl font-bold text-gray-900 mb-4 mt-0">Privacy Officer</h4>
                  <div className="grid sm:grid-cols-3 gap-4">
                    <div className="bg-white/60 p-3 rounded-xl border border-white">
                      <p className="text-sm text-gray-500 uppercase font-bold mb-1 m-0">Email</p>
                      <p className="font-medium text-gray-900 m-0">privacy@fovestta.com</p>
                    </div>
                    <div className="bg-white/60 p-3 rounded-xl border border-white">
                      <p className="text-sm text-gray-500 uppercase font-bold mb-1 m-0">Phone</p>
                      <p className="font-medium text-gray-900 m-0">+91-XXX-XXXX-XXXX</p>
                    </div>
                    <div className="bg-white/60 p-3 rounded-xl border border-white">
                      <p className="text-sm text-gray-500 uppercase font-bold mb-1 m-0">Address</p>
                      <p className="font-medium text-gray-900 m-0">Fovestta, India</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-gray-100">
                <p className="text-sm text-gray-400 mb-4 font-bold uppercase tracking-wider">Related Legal Documents:</p>
                <div className="flex flex-wrap gap-6">
                  <a href="/terms" className="text-[#3B82F6] font-semibold hover:text-[#6B46FF] transition-colors hover:underline">Terms of Service</a>
                  <a href="/cookie-policy" className="text-[#3B82F6] font-semibold hover:text-[#6B46FF] transition-colors hover:underline">Cookie Policy</a>
                  <a href="/compliance" className="text-[#3B82F6] font-semibold hover:text-[#6B46FF] transition-colors hover:underline">Compliance & Security</a>
                </div>
              </div>
            </section>

          </div>
        </motion.div>
      </div>
    </div>
  );
}
