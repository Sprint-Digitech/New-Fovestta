import { motion } from "motion/react";
import { Shield, Lock, Server, FileCheck2, Fingerprint, DatabaseBackup, Activity, BellRing, Scale } from "lucide-react";
import { PremiumBackground } from "./PremiumBackground";

export function ComplianceSecurityPage() {
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
          <Lock className="w-40 h-40 text-[#3B82F6]" />
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
              className="inline-flex items-center justify-center w-24 h-24 rounded-[2rem] bg-gradient-to-br from-[#3B82F6] via-[#6B46FF] to-[#8B5CF6] mb-8 shadow-[0_15px_40px_rgba(59,130,246,0.4)]"
              style={{ transformStyle: "preserve-3d" }}
              whileHover={{ rotateY: 180 }}
            >
              <Fingerprint className="w-12 h-12 text-white" />
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-black text-gray-900 mb-6 tracking-tight leading-tight">
              Compliance & <span className="bg-gradient-to-r from-[#3B82F6] to-[#6B46FF] bg-clip-text text-transparent">Security</span>
            </h1>
            <p className="text-sm md:text-lg font-bold text-[#6B46FF] uppercase tracking-widest bg-blue-50 inline-block px-6 py-2 rounded-full border border-blue-100">
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
            src="https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200&h=600&fit=crop&q=80"
            alt="Secure Data Server"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent flex items-end p-10">
            <h2 className="text-white text-3xl md:text-4xl font-bold">Enterprise-grade security you can trust.</h2>
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
                <span className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-100 to-purple-50 text-[#3B82F6] flex items-center justify-center text-xl font-black shadow-sm shrink-0">1</span>
                Certifications & Standards
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { title: "ISO 27001", desc: "Information Security Management System certification ensuring we maintain highest data protection standards." },
                  { title: "SOC 2 Type II", desc: "Service Organization Control audit confirming our security, availability, and confidentiality controls." },
                  { title: "GDPR Compliant", desc: "Full compliance with General Data Protection Regulation for EU data subjects." },
                  { title: "DPDP Act Compliant", desc: "Adherence to India's Digital Personal Data Protection Act 2023." }
                ].map((cert, idx) => (
                  <div key={idx} className="p-4 rounded-3xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 hover:border-blue-200 hover:shadow-md transition-all">
                    <div className="flex items-center gap-3 mb-3">
                      <FileCheck2 className="w-6 h-6 text-[#3B82F6]" />
                      <h3 className="text-xl font-bold text-gray-900 m-0">{cert.title}</h3>
                    </div>
                    <p className="text-gray-600 m-0">{cert.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl mb-4 flex items-center gap-4">
                <span className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-100 to-purple-50 text-[#3B82F6] flex items-center justify-center text-xl font-black shadow-sm shrink-0">2</span>
                Indian Labor Law Compliance
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { title: "Employees State Insurance Act", desc: "Automated ESI calculations, employer-employee registration, and compliance tracking for all covered employees." },
                  { title: "Provident Fund Act", desc: "EPF contribution calculations, employee declarations, and monthly compliance reporting to EPFO." },
                  { title: "Income Tax Act", desc: "Automatic TDS deductions, Form 16 generation, and IT compliance for all employees." },
                  { title: "Gratuity Act", desc: "Gratuity calculations, accruals, and settlement processing." },
                  { title: "Leave Act", desc: "Compliance with state-specific leave rules, encashment policies, and payment obligations." },
                  { title: "Minimum Wages Act", desc: "Automatic validation against state-wise minimum wage requirements." }
                ].map((law, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ y: -5 }}
                    className="p-4 rounded-3xl bg-white border border-gray-100 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_10px_30px_-10px_rgba(59,130,246,0.15)] transition-all"
                  >
                    <Scale className="w-8 h-8 text-[#6B46FF] mb-4" />
                    <h3 className="text-lg font-bold text-gray-900 mb-2 leading-tight">{law.title}</h3>
                    <p className="text-sm text-gray-500 m-0 leading-relaxed">{law.desc}</p>
                  </motion.div>
                ))}
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl mb-4 flex items-center gap-4">
                <span className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-100 to-purple-50 text-[#3B82F6] flex items-center justify-center text-xl font-black shadow-sm shrink-0">3</span>
                Data Security Measures
              </h2>
              <div className="space-y-6">
                <div className="p-5 rounded-3xl bg-gray-50 border border-gray-100 flex flex-col md:flex-row gap-6 items-start">
                  <div className="p-4 rounded-2xl bg-white shadow-sm shrink-0">
                    <Lock className="w-8 h-8 text-blue-500" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mt-0 mb-4">Encryption</h3>
                    <ul className="list-disc pl-6 marker:text-blue-500 space-y-2 m-0">
                      <li>AES-256 encryption for data at rest</li>
                      <li>TLS 1.3 encryption for data in transit</li>
                      <li>End-to-end encryption for sensitive communications</li>
                    </ul>
                  </div>
                </div>

                <div className="p-5 rounded-3xl bg-gray-50 border border-gray-100 flex flex-col md:flex-row gap-6 items-start">
                  <div className="p-4 rounded-2xl bg-white shadow-sm shrink-0">
                    <Fingerprint className="w-8 h-8 text-purple-500" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mt-0 mb-4">Access Control</h3>
                    <ul className="list-disc pl-6 marker:text-purple-500 space-y-2 m-0">
                      <li>Role-based access control (RBAC)</li>
                      <li>Multi-factor authentication (MFA)</li>
                      <li>Principle of least privilege</li>
                      <li>Regular access reviews and audits</li>
                    </ul>
                  </div>
                </div>

                <div className="p-5 rounded-3xl bg-gray-50 border border-gray-100 flex flex-col md:flex-row gap-6 items-start">
                  <div className="p-4 rounded-2xl bg-white shadow-sm shrink-0">
                    <Server className="w-8 h-8 text-emerald-500" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mt-0 mb-4">Infrastructure Security</h3>
                    <ul className="list-disc pl-6 marker:text-emerald-500 space-y-2 m-0">
                      <li>ISO 27001 certified data centers</li>
                      <li>Redundant systems and automatic failover</li>
                      <li>DDoS protection and intrusion detection</li>
                      <li>Regular vulnerability assessments</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl mb-4 flex items-center gap-4">
                <span className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-100 to-purple-50 text-[#3B82F6] flex items-center justify-center text-xl font-black shadow-sm shrink-0">4</span>
                Backup & Disaster Recovery
              </h2>
              <p>We maintain:</p>
              <div className="grid sm:grid-cols-2 gap-4 mt-6">
                {[
                  "Real-time continuous backups",
                  "Geographically redundant backup locations",
                  "Recovery time objective (RTO): 4 hours",
                  "Recovery point objective (RPO): 1 hour",
                  "Regular disaster recovery drills"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 bg-blue-50/50 p-4 rounded-xl border border-blue-100 text-blue-900 font-medium">
                    <DatabaseBackup className="w-5 h-5 text-blue-500 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl mb-4 flex items-center gap-4">
                <span className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-100 to-purple-50 text-[#3B82F6] flex items-center justify-center text-xl font-black shadow-sm shrink-0">5</span>
                Audit & Monitoring
              </h2>
              <p>Fovestta™ maintains comprehensive monitoring:</p>
              <ul className="space-y-3 mt-4 list-disc pl-6 marker:text-[#3B82F6]">
                <li>24/7 security operations center (SOC)</li>
                <li>Real-time threat detection and response</li>
                <li>Annual third-party security audits</li>
                <li>Comprehensive audit trails for all data access</li>
                <li>Compliance reports available to customers</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl mb-4 flex items-center gap-4">
                <span className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-100 to-purple-50 text-[#3B82F6] flex items-center justify-center text-xl font-black shadow-sm shrink-0">6</span>
                Data Breach Notification
              </h2>
              <p>In case of a security incident affecting your data:</p>
              <div className="bg-red-50 p-4 rounded-3xl border border-red-100 mt-6">
                <ul className="space-y-2 list-disc pl-6 marker:text-red-500 m-0 text-red-900">
                  <li>Notification within 72 hours (GDPR requirement)</li>
                  <li>Clear explanation of the incident</li>
                  <li>Steps we're taking to remediate</li>
                  <li>Recommendations for your protection</li>
                  <li>Dedicated support contact</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl mb-4 flex items-center gap-4">
                <span className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-100 to-purple-50 text-[#3B82F6] flex items-center justify-center text-xl font-black shadow-sm shrink-0">7</span>
                Service Level Agreement (SLA)
              </h2>
              <p>Fovestta™ guarantees:</p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
                {[
                  { value: "99.9%", label: "uptime availability" },
                  { value: "99.99%", label: "data durability" },
                  { value: "4-hour", label: "response time for critical issues" },
                  { value: "24/7", label: "customer support availability" },
                  { value: "Credits", label: "for downtime beyond SLA" }
                ].map((sla, i) => (
                  <div key={i} className="bg-white p-4 rounded-2xl border border-gray-200 shadow-sm text-center flex flex-col items-center justify-center">
                    <Activity className="w-6 h-6 text-emerald-500 mb-2" />
                    <span className="text-2xl font-black text-gray-900 mb-1">{sla.value}</span>
                    <span className="text-sm text-gray-500 font-medium">{sla.label}</span>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl mb-4 flex items-center gap-4">
                <span className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-100 to-purple-50 text-[#3B82F6] flex items-center justify-center text-xl font-black shadow-sm shrink-0">8</span>
                Regulatory Authority Contacts
              </h2>
              <div className="space-y-4">
                {[
                  {
                    title: "Data Protection Authority (India)",
                    desc: "Digital Personal Data Protection Act Grievance Redressal",
                    bg: "bg-purple-50",
                    border: "border-purple-100"
                  },
                  {
                    title: "EU Data Protection Authorities",
                    desc: "GDPR compliance and complaint filing",
                    bg: "bg-purple-50",
                    border: "border-purple-100"
                  },
                  {
                    title: "Fovestta™ Compliance Officer",
                    desc: "Email: compliance@fovestta.com\nPhone: +91-XXX-XXXX-XXXX",
                    bg: "bg-purple-50",
                    border: "border-purple-100"
                  }
                ].map((auth, i) => (
                  <div key={i} className={`p-4 rounded-2xl ${auth.bg} border ${auth.border}`}>
                    <h3 className="text-xl font-bold text-gray-900 mt-0 mb-2">{auth.title}</h3>
                    <p className="text-gray-700 m-0 whitespace-pre-line leading-relaxed">{auth.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-3xl mb-4 flex items-center gap-4">
                <span className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-100 to-purple-50 text-[#3B82F6] flex items-center justify-center text-xl font-black shadow-sm shrink-0">9</span>
                Compliance Updates
              </h2>
              <div className="p-5 rounded-3xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 flex items-start gap-4">
                <BellRing className="w-8 h-8 text-blue-500 shrink-0 mt-1" />
                <p className="text-gray-800 font-medium text-lg leading-relaxed m-0">
                  Fovestta™ regularly updates its compliance to reflect new regulations including TDS deduction rules, updated EPF regulations, and emerging security threats. Subscribe to our compliance newsletter for updates.
                </p>
              </div>

              <div className="mt-12 pt-8 border-t border-gray-100">
                <p className="text-sm text-gray-400 mb-4 font-bold uppercase tracking-wider">Related Legal Documents:</p>
                <div className="flex flex-wrap gap-6">
                  <a href="/privacy" className="text-[#3B82F6] font-semibold hover:text-[#6B46FF] transition-colors hover:underline">Privacy Policy</a>
                  <a href="/terms" className="text-[#3B82F6] font-semibold hover:text-[#6B46FF] transition-colors hover:underline">Terms of Service</a>
                  <a href="/cookie-policy" className="text-[#3B82F6] font-semibold hover:text-[#6B46FF] transition-colors hover:underline">Cookie Policy</a>
                </div>
              </div>
            </section>

          </div>
        </motion.div>
      </div>
    </div>
  );
}
