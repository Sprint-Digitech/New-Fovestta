import { motion } from "motion/react";
import { Cookie, ShieldCheck, Settings, Eye, Globe2, Activity } from "lucide-react";
import { PremiumBackground } from "./PremiumBackground";

export function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-[#fafbfe] pt-20 pb-12 overflow-hidden relative">
      <PremiumBackground variant="luxury" />
      
      {/* 3D Floating Elements Background */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ y: [0, -25, 0], rotateZ: [0, 15, 0] }} 
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[15%] left-[10%] opacity-20"
        >
          <Cookie className="w-40 h-40 text-[#8B5CF6]" />
        </motion.div>
        <motion.div 
          animate={{ y: [0, 30, 0], scale: [1, 1.1, 1] }} 
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-[20%] right-[5%] opacity-10"
        >
          <Globe2 className="w-48 h-48 text-[#3B82F6]" />
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
              className="inline-flex items-center justify-center w-24 h-24 rounded-[2rem] bg-gradient-to-br from-[#8B5CF6] via-[#6B46FF] to-[#3B82F6] mb-8 shadow-[0_15px_40px_rgba(107,70,255,0.4)] rotate-12 hover:rotate-0 transition-transform duration-500"
            >
              <Cookie className="w-12 h-12 text-white" />
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-black text-gray-900 mb-6 tracking-tight leading-tight">
              Cookie <span className="bg-gradient-to-r from-[#8B5CF6] to-[#3B82F6] bg-clip-text text-transparent">Policy</span>
            </h1>
            <p className="text-sm md:text-lg font-bold text-[#6B46FF] uppercase tracking-widest bg-purple-50 inline-block px-6 py-2 rounded-full border border-purple-100">
              Last Updated: March 2026
            </p>
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
                <span className="w-10 h-10 rounded-2xl bg-gradient-to-br from-purple-100 to-blue-50 text-[#6B46FF] flex items-center justify-center text-xl font-black shadow-sm shrink-0">1</span>
                What are Cookies?
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Cookies are small text files stored on your device that help us recognize you and enhance your experience. They contain information about your preferences, session data, and browsing history.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl mb-4 flex items-center gap-4">
                <span className="w-10 h-10 rounded-2xl bg-gradient-to-br from-purple-100 to-blue-50 text-[#6B46FF] flex items-center justify-center text-xl font-black shadow-sm shrink-0">2</span>
                Types of Cookies We Use
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    title: "Essential Cookies",
                    desc: "Required for basic functionality like authentication, security, and session management. Cannot be disabled.",
                    icon: ShieldCheck,
                    color: "text-emerald-500",
                    bg: "bg-emerald-50",
                    border: "border-emerald-100"
                  },
                  {
                    title: "Performance Cookies",
                    desc: "Help us understand how users interact with Fovestta™. Collect anonymous data on page visits, time spent, and bounce rates.",
                    icon: Activity,
                    color: "text-blue-500",
                    bg: "bg-blue-50",
                    border: "border-blue-100"
                  },
                  {
                    title: "Functionality Cookies",
                    desc: "Remember your preferences, language settings, and customizations to personalize your experience.",
                    icon: Settings,
                    color: "text-purple-500",
                    bg: "bg-purple-50",
                    border: "border-purple-100"
                  },
                  {
                    title: "Marketing Cookies",
                    desc: "Used to deliver targeted content and ads based on your interests. Requires your consent.",
                    icon: Eye,
                    color: "text-pink-500",
                    bg: "bg-pink-50",
                    border: "border-pink-100"
                  }
                ].map((cookie, idx) => (
                  <motion.div 
                    key={idx}
                    whileHover={{ y: -5 }}
                    className={`p-4 rounded-3xl ${cookie.bg} border ${cookie.border} transition-all duration-300 hover:shadow-lg`}
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`p-3 rounded-xl bg-white shadow-sm ${cookie.color}`}>
                        <cookie.icon className="w-6 h-6" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 m-0">{cookie.title}</h3>
                    </div>
                    <p className="text-sm text-gray-600 m-0 leading-relaxed">{cookie.desc}</p>
                  </motion.div>
                ))}
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl mb-4 flex items-center gap-4">
                <span className="w-10 h-10 rounded-2xl bg-gradient-to-br from-purple-100 to-blue-50 text-[#6B46FF] flex items-center justify-center text-xl font-black shadow-sm shrink-0">3</span>
                Third-Party Cookies
              </h2>
              <p>We use cookies from trusted third-party services including:</p>
              <div className="mt-6 space-y-4">
                {[
                  { name: "Google Analytics", desc: "Anonymous usage analytics" },
                  { name: "Payment Processors", desc: "Secure transaction handling" },
                  { name: "CDN Services", desc: "Content delivery optimization" },
                  { name: "Security Services", desc: "Fraud detection and DDoS protection" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between p-4 rounded-2xl bg-gray-50 border border-gray-100 hover:bg-white hover:shadow-md transition-all">
                    <span className="font-bold text-gray-900">{item.name}</span>
                    <span className="text-gray-500 text-sm">{item.desc}</span>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl mb-4 flex items-center gap-4">
                <span className="w-10 h-10 rounded-2xl bg-gradient-to-br from-purple-100 to-blue-50 text-[#6B46FF] flex items-center justify-center text-xl font-black shadow-sm shrink-0">4</span>
                Your Cookie Choices
              </h2>
              <p>You can control cookies through:</p>
              <ul className="space-y-3 mt-4 list-disc pl-6 marker:text-[#6B46FF]">
                <li>Browser settings (enable/disable cookies)</li>
                <li>Cookie consent banner on our website</li>
                <li>Your account privacy preferences</li>
                <li>Opt-out links in marketing communications</li>
              </ul>
              <div className="mt-6 p-4 rounded-2xl bg-amber-50 border border-amber-100 text-amber-800 text-sm font-medium flex items-center gap-3 shadow-sm">
                <ShieldCheck className="w-5 h-5 shrink-0" />
                Note: Disabling essential cookies may affect service functionality.
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl mb-4 flex items-center gap-4">
                <span className="w-10 h-10 rounded-2xl bg-gradient-to-br from-purple-100 to-blue-50 text-[#6B46FF] flex items-center justify-center text-xl font-black shadow-sm shrink-0">5</span>
                Cookie Duration
              </h2>
              <p>Cookies expire based on their type:</p>
              <ul className="space-y-3 mt-4 list-none pl-0">
                {[
                  { name: "Session Cookies", desc: "Deleted when you close your browser" },
                  { name: "Persistent Cookies", desc: "Remain for 30 days to 2 years" },
                  { name: "Authentication Cookies", desc: "Valid for your active session" }
                ].map((item, idx) => (
                  <li key={idx} className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 p-3 rounded-xl hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-100">
                    <strong className="text-gray-900 min-w-[200px]">{item.name}:</strong>
                    <span className="text-gray-600">{item.desc}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl mb-4 flex items-center gap-4">
                <span className="w-10 h-10 rounded-2xl bg-gradient-to-br from-purple-100 to-blue-50 text-[#6B46FF] flex items-center justify-center text-xl font-black shadow-sm shrink-0">6</span>
                Security of Cookies
              </h2>
              <p>We protect cookies using:</p>
              <ul className="space-y-3 mt-4 list-disc pl-6 marker:text-[#6B46FF]">
                <li>HTTPS encryption for all cookie transmission</li>
                <li>Secure and HttpOnly flags on sensitive cookies</li>
                <li>Regular security audits and updates</li>
                <li>Compliance with OWASP security standards</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl mb-4 flex items-center gap-4">
                <span className="w-10 h-10 rounded-2xl bg-gradient-to-br from-purple-100 to-blue-50 text-[#6B46FF] flex items-center justify-center text-xl font-black shadow-sm shrink-0">7</span>
                GDPR & DPDP Compliance
              </h2>
              <p>We comply with cookie requirements under:</p>
              <div className="flex flex-wrap gap-4 mt-6">
                {["GDPR (if you're in EU)", "Digital Personal Data Protection Act (India)", "ePrivacy Directive"].map((badge, i) => (
                  <span key={i} className="px-5 py-2.5 rounded-full bg-blue-50 text-blue-700 font-bold text-sm border border-blue-100 shadow-sm">
                    {badge}
                  </span>
                ))}
              </div>
              <p className="mt-6 font-medium text-gray-900 bg-gray-50 p-4 rounded-xl border border-gray-100 inline-block">
                We obtain explicit consent before setting non-essential cookies.
              </p>
            </section>

            <section>
              <h2 className="text-3xl mb-4 flex items-center gap-4">
                <span className="w-10 h-10 rounded-2xl bg-gradient-to-br from-purple-100 to-blue-50 text-[#6B46FF] flex items-center justify-center text-xl font-black shadow-sm shrink-0">8</span>
                Contact & Updates
              </h2>
              <div className="p-5 rounded-3xl bg-gradient-to-br from-[#F5F3FF] to-[#EFF6FF] border border-blue-100 shadow-inner">
                <p className="text-gray-800 mb-4 font-medium text-lg">
                  Questions about our cookie policy? Contact: <a href="mailto:privacy@fovestta.com" className="text-[#6B46FF] hover:underline font-bold">privacy@fovestta.com</a>
                </p>
                <p className="text-gray-600 m-0">
                  We may update this policy periodically. Check back regularly for changes.
                </p>
              </div>
              
              <div className="mt-12 pt-8 border-t border-gray-100">
                <p className="text-sm text-gray-400 mb-4 font-bold uppercase tracking-wider">Related Legal Documents:</p>
                <div className="flex flex-wrap gap-6">
                  <a href="/privacy" className="text-[#6B46FF] font-semibold hover:text-[#3B82F6] transition-colors hover:underline">Privacy Policy</a>
                  <a href="/terms" className="text-[#6B46FF] font-semibold hover:text-[#3B82F6] transition-colors hover:underline">Terms of Service</a>
                  <a href="/#compliance" className="text-[#6B46FF] font-semibold hover:text-[#3B82F6] transition-colors hover:underline">Compliance & Security</a>
                </div>
              </div>
            </section>

          </div>
        </motion.div>
      </div>
    </div>
  );
}
