import { motion } from "motion/react";
import { FileSignature, CheckCircle2, ShieldAlert, BadgeCheck, Scale, Globe, CreditCard, Shield, UserX, PenTool, Gavel, Mail, Database } from "lucide-react";
import { PremiumBackground } from "./PremiumBackground";

export function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-[#fafbfe] pt-32 pb-24 overflow-hidden relative">
      <PremiumBackground variant="luxury" />
      
      {/* 3D Floating Elements Background */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ y: [0, -40, 0], rotateX: [0, 20, 0], rotateY: [0, -15, 0] }} 
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[15%] right-[10%] opacity-20"
        >
          <FileSignature className="w-48 h-48 text-[#6B46FF]" />
        </motion.div>
        <motion.div 
          animate={{ y: [0, 30, 0], rotateZ: [0, 10, 0] }} 
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-[20%] left-[8%] opacity-15"
        >
          <Scale className="w-40 h-40 text-[#3B82F6]" />
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 50, rotateX: 20 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
          className="text-center mb-16 relative"
          style={{ perspective: "1000px" }}
        >
          <div className="inline-block p-16 md:p-20 rounded-[40px] bg-white/60 backdrop-blur-2xl shadow-[0_30px_60px_-15px_rgba(107,70,255,0.15)] border border-white/80">
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: "spring" }}
              className="inline-flex items-center justify-center w-24 h-24 rounded-[2rem] bg-gradient-to-br from-[#3B82F6] via-[#6B46FF] to-[#8B5CF6] mb-8 shadow-[0_15px_40px_rgba(107,70,255,0.4)]"
              style={{ transformStyle: "preserve-3d" }}
              whileHover={{ rotateY: 180 }}
            >
              <FileSignature className="w-12 h-12 text-white" />
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-black text-gray-900 mb-6 tracking-tight leading-tight">
              Terms of <span className="bg-gradient-to-r from-[#6B46FF] to-[#3B82F6] bg-clip-text text-transparent">Service</span>
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
          className="w-full h-[300px] md:h-[400px] rounded-[40px] overflow-hidden mb-16 shadow-2xl relative group"
        >
          <img 
            src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&h=600&fit=crop&q=80" 
            alt="Legal Agreements and Handshake" 
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/40 to-transparent flex items-end p-10">
            <div className="max-w-2xl">
              <h2 className="text-white text-3xl md:text-5xl font-black mb-4">The foundation of our partnership.</h2>
              <p className="text-gray-200 text-lg font-medium">Please read these terms carefully before using our services.</p>
            </div>
          </div>
        </motion.div>

        {/* Content Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white rounded-[40px] p-8 md:p-16 shadow-[0_20px_50px_-10px_rgba(0,0,0,0.05)] border border-gray-100"
        >
          <div className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-gray-900 prose-p:text-gray-600 prose-p:leading-relaxed prose-li:text-gray-600">
            
            <section className="mb-16">
              <h2 className="text-3xl mb-6 flex items-center gap-4">
                <span className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-100 to-blue-50 text-[#6B46FF] flex items-center justify-center text-xl font-black shadow-sm shrink-0">1</span>
                Acceptance of Terms
              </h2>
              <div className="p-8 rounded-3xl bg-gray-50 border border-gray-100 text-xl text-gray-700 leading-relaxed font-medium">
                By accessing and using Fovestta™, you accept and agree to be bound by these terms and conditions. If you do not agree to abide by the above, please do not use this service.
              </div>
            </section>

            <section className="mb-16">
              <h2 className="text-3xl mb-6 flex items-center gap-4">
                <span className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-100 to-blue-50 text-[#6B46FF] flex items-center justify-center text-xl font-black shadow-sm shrink-0">2</span>
                Service Description
              </h2>
              <div className="flex flex-col md:flex-row gap-8 items-center bg-blue-50 p-8 rounded-3xl border border-blue-100">
                <div className="flex-1">
                  <p className="text-lg text-blue-900 m-0 font-medium">
                    Fovestta™ provides cloud-based HR and payroll management software designed for Indian companies. Services include payroll processing, attendance tracking, compliance management, and employee self-service portals.
                  </p>
                </div>
                <div className="w-24 h-24 rounded-full bg-white shadow-md flex items-center justify-center shrink-0">
                  <Globe className="w-10 h-10 text-blue-500" />
                </div>
              </div>
            </section>

            <section className="mb-16">
              <h2 className="text-3xl mb-8 flex items-center gap-4">
                <span className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-100 to-blue-50 text-[#6B46FF] flex items-center justify-center text-xl font-black shadow-sm shrink-0">3</span>
                User Accounts
              </h2>
              <p>You are responsible for:</p>
              <div className="grid sm:grid-cols-2 gap-4 mt-6">
                {[
                  "Providing accurate account information",
                  "Maintaining confidential login credentials",
                  "Notifying us of unauthorized access immediately",
                  "Complying with all laws applicable to your use"
                ].map((item, idx) => (
                  <motion.div 
                    key={idx}
                    whileHover={{ scale: 1.02 }}
                    className="flex items-center gap-4 bg-white p-5 rounded-2xl border border-gray-200 shadow-sm"
                  >
                    <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center shrink-0 text-green-500">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <span className="font-bold text-gray-800">{item}</span>
                  </motion.div>
                ))}
              </div>
            </section>

            <section className="mb-16">
              <h2 className="text-3xl mb-8 flex items-center gap-4">
                <span className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-100 to-blue-50 text-[#6B46FF] flex items-center justify-center text-xl font-black shadow-sm shrink-0">4</span>
                Acceptable Use
              </h2>
              <p>You agree not to:</p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                {[
                  "Violate any applicable laws or regulations",
                  "Infringe on intellectual property rights",
                  "Transmit malware or harmful code",
                  "Attempt unauthorized access or data breaches",
                  "Reverse engineer or decompile our software",
                  "Use the service for unlawful purposes"
                ].map((item, i) => (
                  <div key={i} className="p-6 rounded-3xl bg-red-50/50 border border-red-100 flex flex-col items-center text-center gap-3 hover:bg-red-50 hover:shadow-md transition-all">
                    <ShieldAlert className="w-8 h-8 text-red-500 shrink-0" />
                    <span className="text-sm font-bold text-gray-900">{item}</span>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-16">
              <h2 className="text-3xl mb-6 flex items-center gap-4">
                <span className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-100 to-blue-50 text-[#6B46FF] flex items-center justify-center text-xl font-black shadow-sm shrink-0">5</span>
                Data Ownership
              </h2>
              <div className="p-8 md:p-10 rounded-3xl bg-gray-900 text-white shadow-xl relative overflow-hidden">
                <div className="absolute -right-10 -bottom-10 opacity-20 pointer-events-none">
                  <Database className="w-64 h-64 text-blue-400" />
                </div>
                <div className="relative z-10">
                  <p className="text-xl font-medium leading-relaxed m-0 text-blue-50">
                    You retain ownership of all data you upload to Fovestta™. We have the right to use anonymized and aggregated data for analytics and service improvement. All employee data remains confidential and is protected under applicable data protection laws.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-16">
              <h2 className="text-3xl mb-8 flex items-center gap-4">
                <span className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-100 to-blue-50 text-[#6B46FF] flex items-center justify-center text-xl font-black shadow-sm shrink-0">6</span>
                Service Availability
              </h2>
              <p>Fovestta™ maintains a <strong>99.9% uptime SLA</strong>. We reserve the right to suspend services for:</p>
              <div className="grid sm:grid-cols-2 gap-4 mt-6">
                {[
                  { icon: PenTool, text: "Scheduled maintenance" },
                  { icon: Shield, text: "Security incidents" },
                  { icon: UserX, text: "Account violations" },
                  { icon: CreditCard, text: "Non-payment of invoices" }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4 p-4 rounded-2xl bg-gray-50 border border-gray-100">
                    <div className="p-3 rounded-xl bg-white shadow-sm">
                      <item.icon className="w-5 h-5 text-gray-700" />
                    </div>
                    <span className="font-semibold text-gray-800">{item.text}</span>
                  </div>
                ))}
              </div>
            </section>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <section className="p-8 rounded-3xl bg-white border border-gray-200 shadow-sm hover:shadow-lg transition-shadow">
                <h2 className="text-2xl mb-4 flex items-center gap-3">
                  <span className="text-[#6B46FF] font-black">7.</span> Payment Terms
                </h2>
                <p className="text-gray-600 m-0">
                  Subscription fees are billed monthly or annually as selected. Payment must be received within 30 days of invoice. Late payments may result in service suspension. Refunds are provided only if explicitly stated in your subscription plan.
                </p>
              </section>

              <section className="p-8 rounded-3xl bg-white border border-gray-200 shadow-sm hover:shadow-lg transition-shadow">
                <h2 className="text-2xl mb-4 flex items-center gap-3">
                  <span className="text-[#6B46FF] font-black">8.</span> Limitation of Liability
                </h2>
                <p className="text-gray-600 m-0">
                  To the maximum extent permitted by law, Fovestta™ shall not be liable for indirect, incidental, special, or consequential damages arising from your use of the service, even if advised of such damages.
                </p>
              </section>
            </div>

            <section className="mb-16">
              <h2 className="text-3xl mb-6 flex items-center gap-4">
                <span className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-100 to-blue-50 text-[#6B46FF] flex items-center justify-center text-xl font-black shadow-sm shrink-0">9</span>
                Indemnification
              </h2>
              <div className="p-6 border-l-4 border-[#6B46FF] bg-purple-50/50 rounded-r-2xl">
                <p className="m-0 text-lg text-gray-800 font-medium">
                  You agree to indemnify and hold harmless Fovestta™ from any claims, damages, or losses arising from your use of the service or violation of these terms.
                </p>
              </div>
            </section>

            <div className="grid md:grid-cols-3 gap-6 mb-16">
              <section className="p-6 rounded-3xl bg-gray-50 border border-gray-100">
                <h2 className="text-xl mb-3 text-gray-900 font-bold">10. Termination</h2>
                <p className="text-sm text-gray-600 m-0">
                  Either party may terminate the service with 30 days written notice. Upon termination, your data will be available for export for 30 days, after which it will be securely deleted.
                </p>
              </section>

              <section className="p-6 rounded-3xl bg-gray-50 border border-gray-100">
                <h2 className="text-xl mb-3 text-gray-900 font-bold">11. Changes to Terms</h2>
                <p className="text-sm text-gray-600 m-0">
                  We reserve the right to modify these terms at any time. Changes become effective upon notification. Continued use constitutes acceptance.
                </p>
              </section>

              <section className="p-6 rounded-3xl bg-gray-50 border border-gray-100 relative overflow-hidden">
                <Gavel className="absolute -right-4 -bottom-4 w-24 h-24 text-gray-200 opacity-50" />
                <h2 className="text-xl mb-3 text-gray-900 font-bold relative z-10">12. Governing Law</h2>
                <p className="text-sm text-gray-600 m-0 relative z-10">
                  These terms are governed by Indian law and comply with all applicable regulations including labor laws, tax laws, and data protection statutes.
                </p>
              </section>
            </div>

            <section>
              <div className="p-10 rounded-3xl bg-gradient-to-br from-[#F5F3FF] to-[#EFF6FF] border border-blue-100 shadow-inner flex flex-col md:flex-row items-center justify-between gap-8">
                <div>
                  <h3 className="text-3xl font-black text-gray-900 mb-2 mt-0">Contact Legal Team</h3>
                  <p className="text-gray-600 mb-0 text-lg">
                    For questions about these terms, please contact us.
                  </p>
                </div>
                <a href="mailto:legal@fovestta.com" className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gray-900 text-white font-bold hover:bg-[#6B46FF] transition-colors shadow-xl shrink-0">
                  <Mail className="w-5 h-5" />
                  legal@fovestta.com
                </a>
              </div>
              
              <div className="mt-12 pt-8 border-t border-gray-100">
                <p className="text-sm text-gray-400 mb-4 font-bold uppercase tracking-wider">Related Legal Documents:</p>
                <div className="flex flex-wrap gap-6">
                  <a href="/privacy" className="text-[#3B82F6] font-semibold hover:text-[#6B46FF] transition-colors hover:underline">Privacy Policy</a>
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
