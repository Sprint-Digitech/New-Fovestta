import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  ShieldCheck, AlertCircle, CheckCircle2, ChevronRight, 
  RefreshCcw, BookOpen, AlertTriangle, FileText, 
  ShieldAlert, Sparkles, Trophy, ArrowRight, ClipboardCheck
} from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

const questions = [
  {
    id: 1,
    text: "Do you have a registered EPF account for your company and employees?",
    category: "PF Compliance",
    risk: "High - Non-compliance can lead to severe interest and penalties.",
    weight: 15
  },
  {
    id: 2,
    text: "Is ESI contribution deducted and paid for all eligible employees?",
    category: "ESI Compliance",
    risk: "High - Necessary for employee medical benefits and social security.",
    weight: 15
  },
  {
    id: 3,
    text: "Are professional tax (PT) payments being made as per state laws?",
    category: "State Compliance",
    risk: "Medium - State-wise compliance varies and requires regular filing.",
    weight: 10
  },
  {
    id: 4,
    text: "Is TDS being correctly deducted from employee salaries and deposited monthly?",
    category: "Tax Compliance",
    risk: "Critical - Severe penalties from Income Tax department for default.",
    weight: 20
  },
  {
    id: 5,
    text: "Do you maintain updated leave records and attendance logs as per labor laws?",
    category: "HR Documentation",
    risk: "Medium - Important for audit readiness and labor disputes.",
    weight: 10
  },
  {
    id: 6,
    text: "Are you providing monthly pay slips with a clear breakdown of components?",
    category: "Transparency",
    risk: "Low - Important for employee trust and legal clarity.",
    weight: 10
  },
  {
    id: 7,
    text: "Do you have a POSH (Prevention of Sexual Harassment) policy in place?",
    category: "Legal Compliance",
    risk: "Critical - Legal requirement for all companies with 10+ employees.",
    weight: 15
  },
  {
    id: 8,
    text: "Are minimum wage requirements being met for all levels of employees?",
    category: "Labor Laws",
    risk: "High - Direct violation of central and state labor regulations.",
    weight: 15
  }
];

export function ComplianceScorecardSection() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, boolean>>({});
  const [isFinished, setIsFinished] = useState(false);

  const handleAnswer = (answer: boolean) => {
    setAnswers({ ...answers, [questions[currentStep].id]: answer });
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsFinished(true);
    }
  };

  const calculateScore = () => {
    let score = 0;
    questions.forEach(q => {
      if (answers[q.id]) score += q.weight;
    });
    return score;
  };

  const score = calculateScore();
  const getScoreColor = () => {
    if (score >= 80) return "text-green-500";
    if (score >= 50) return "text-orange-500";
    return "text-red-500";
  };

  const getScoreLabel = () => {
    if (score >= 80) return "Excellent - You are mostly compliant!";
    if (score >= 50) return "Moderate - Action required to fix gaps.";
    return "High Risk - Critical compliance issues detected!";
  };

  return (
    <div id="compliance" className="bg-[#F8F9FF] scroll-mt-20 overflow-hidden" style={{ perspective: "2000px" }}>
      {/* 1. Hero Section */}
      <section className="relative pt-12 pb-16 lg:pt-24 lg:pb-24 overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute inset-0 z-0">
          <motion.div 
            animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0], opacity: [0.1, 0.2, 0.1] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-100 rounded-full blur-[120px]"
          />
          <motion.div 
            animate={{ scale: [1.2, 1, 1.2], rotate: [90, 0, 90], opacity: [0.1, 0.15, 0.1] }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-100 rounded-full blur-[100px]"
          />
        </div>

        <div className="relative z-10 max-w-[1200px] mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, z: -20 }}
            whileInView={{ opacity: 1, z: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm text-[#8B5CF6] text-[13px] font-bold mb-8 border border-purple-100"
          >
            <ShieldCheck className="w-4 h-4" />
            Compliance Health Check
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, rotateX: -20, y: 20 }}
            whileInView={{ opacity: 1, rotateX: 0, y: 0 }}
            viewport={{ once: true }}
            className="text-[56px] lg:text-[72px] font-bold text-gray-900 leading-[1] mb-8 tracking-tighter"
            style={{ transformStyle: "preserve-3d" }}
          >
            HR Compliance <span className="bg-gradient-to-r from-blue-600 to-[#8B5CF6] bg-clip-text text-transparent">Scorecard</span>
          </motion.h1>

          <motion.p {...fadeIn} transition={{ delay: 0.1 }} className="text-[18px] lg:text-[22px] text-gray-500 font-medium max-w-3xl mx-auto leading-relaxed">
            Quickly assess your company's HR and payroll compliance health with our interactive 2-minute diagnostic tool.
          </motion.p>
        </div>
      </section>

      {/* 2. Scorecard Interface - 3D Card */}
      <section className="pb-32 bg-transparent">
        <div className="max-w-[800px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, rotateY: 10 }}
            whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
            viewport={{ once: true }}
            whileHover={{ rotateY: 2, rotateX: -1 }}
            className="bg-white rounded-[40px] p-8 lg:p-12 shadow-[0_30px_100px_rgba(0,0,0,0.06)] border border-gray-100 relative min-h-[500px] flex flex-col justify-center"
            style={{ transformStyle: "preserve-3d" }}
          >
            <AnimatePresence mode="wait">
              {!isFinished ? (
                <motion.div
                  key={currentStep}
                  initial={{ opacity: 0, x: 50, rotateY: 20 }}
                  animate={{ opacity: 1, x: 0, rotateY: 0 }}
                  exit={{ opacity: 0, x: -50, rotateY: -20 }}
                  transition={{ type: "spring", stiffness: 100, damping: 20 }}
                  className="space-y-10"
                >
                  <div className="flex justify-between items-center mb-8">
                    <span className="px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-[13px] font-bold uppercase tracking-widest">{questions[currentStep].category}</span>
                    <span className="text-gray-400 font-bold">{currentStep + 1} / {questions.length}</span>
                  </div>

                  <h3 className="text-[28px] lg:text-[34px] font-bold text-gray-900 leading-tight">
                    {questions[currentStep].text}
                  </h3>

                  <div className="grid grid-cols-2 gap-6 pt-4">
                    <motion.button
                      whileHover={{ scale: 1.05, translateZ: 10 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleAnswer(true)}
                      className="py-5 bg-blue-600 text-white font-bold rounded-2xl shadow-lg shadow-blue-100 flex items-center justify-center gap-2 group"
                    >
                      Yes, Definitely
                      <CheckCircle2 className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05, translateZ: 10 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleAnswer(false)}
                      className="py-5 bg-gray-50 text-gray-900 font-bold rounded-2xl border border-gray-200 hover:bg-gray-100 transition-all flex items-center justify-center gap-2 group"
                    >
                      Not Yet
                      <AlertCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    </motion.button>
                  </div>

                  <div className="flex items-center gap-3 p-4 bg-orange-50 rounded-2xl border border-orange-100 mt-8">
                    <AlertTriangle className="w-5 h-5 text-orange-500 flex-shrink-0" />
                    <p className="text-[13px] text-orange-800 font-medium"><strong>Risk Factor:</strong> {questions[currentStep].risk}</p>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="results"
                  initial={{ opacity: 0, scale: 0.8, rotateX: 20 }}
                  animate={{ opacity: 1, scale: 1, rotateX: 0 }}
                  className="text-center space-y-8"
                >
                  <div className="w-24 h-24 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Trophy className="w-12 h-12 text-blue-600" />
                  </div>
                  <h3 className="text-[32px] font-bold text-gray-900">Your Compliance Score</h3>
                  
                  <div className={`text-[96px] font-black leading-none ${getScoreColor()}`}>
                    {score}%
                  </div>
                  
                  <p className="text-[20px] font-bold text-gray-700 max-w-md mx-auto">{getScoreLabel()}</p>
                  
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
                    <a href="/demo" className="px-8 py-4 bg-[#8B5CF6] text-white font-bold rounded-xl shadow-lg shadow-purple-100 flex items-center gap-2">
                      Book a Free Audit
                      <ArrowRight className="w-5 h-5" />
                    </a>
                    <button onClick={() => { setCurrentStep(0); setIsFinished(false); setAnswers({}); }} className="px-8 py-4 bg-gray-50 text-gray-900 font-bold rounded-xl border border-gray-200 flex items-center gap-2">
                      <RefreshCcw className="w-4 h-4" />
                      Retake Quiz
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Progress Bar */}
            {!isFinished && (
              <div className="absolute bottom-0 left-0 right-0 h-2 bg-gray-100 rounded-b-[40px] overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: `${((currentStep + 1) / questions.length) * 100}%` }}
                  className="h-full bg-blue-600"
                />
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* 3. Risk Categories - 3D Cards */}
      <section className="py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-[40px] font-bold text-gray-900 tracking-tight">Compliance Risk Categories</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: ShieldAlert, title: "Statutory Risks", desc: "Non-payment of PF, ESI, or PT leads to legal notices, heavy fines, and operational bans.", color: "text-red-500", bg: "bg-red-50" },
              { icon: FileText, title: "Tax Compliance", desc: "Incorrect TDS filing results in severe penalties and scrutiny from the Income Tax department.", color: "text-orange-500", bg: "bg-orange-50" },
              { icon: ClipboardCheck, title: "Operational Audit", desc: "Improper HR documentation makes your company vulnerable during government labor audits.", color: "text-blue-500", bg: "bg-blue-50" }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ rotateY: 10, rotateX: 5, translateZ: 20 }}
                className="bg-white rounded-[32px] p-8 border border-gray-100 shadow-[0_10px_40px_rgba(0,0,0,0.03)] hover:shadow-[0_25px_60px_rgba(0,0,0,0.06)] transition-all"
                style={{ transformStyle: "preserve-3d" }}
              >
                <div className={`w-14 h-14 ${item.bg} rounded-2xl flex items-center justify-center mb-8`} style={{ transform: "translateZ(10px)" }}>
                  <item.icon className={`w-7 h-7 ${item.color}`} />
                </div>
                <h4 className="text-[20px] font-bold text-gray-900 mb-4">{item.title}</h4>
                <p className="text-[15px] text-gray-500 leading-relaxed font-medium">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CTA Section */}
      <section className="py-24 bg-white relative">
        <div className="max-w-[1000px] mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#111827] rounded-[48px] p-12 lg:p-16 text-center text-white relative overflow-hidden"
          >
             <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/10 rounded-full blur-[80px]"></div>
             <h2 className="text-[36px] lg:text-[48px] font-bold mb-6 tracking-tight leading-tight">
               Don't Leave Compliance to Chance
             </h2>
             <p className="text-[18px] text-gray-400 font-medium mb-10 max-w-2xl mx-auto">
               Join 10,000+ companies using Fovestta to automate statutory compliance and protect their business.
             </p>
             <a href="/demo" className="inline-flex items-center gap-2 px-10 py-5 bg-white text-gray-900 text-[16px] font-bold rounded-2xl hover:bg-gray-100 transition-all shadow-xl">
               Get Your Compliance Audit
               <ChevronRight className="w-5 h-5" />
             </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
