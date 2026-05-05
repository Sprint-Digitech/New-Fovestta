import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Check, X, Calculator, IndianRupee, Sparkles, 
  ArrowRight, ShieldCheck, Zap, TrendingUp, HelpCircle,
  ChevronDown, Star, Globe, Clock, Headphones, Award
} from "lucide-react";

const cardFeatures = {
  "Essential Edge": [
    { text: "Automate Payroll", included: true },
    { text: "Accurate Payments", included: true },
    { text: "Employee Self-Service", included: true },
    { text: "Access HR Reports & Analytics", included: true },
    { text: "Stay Compliant With Taxes", included: true },
    { text: "LOP and LGP Reversal", included: true },
    { text: "Email Support", included: true },
    { text: "Streamline Hiring", included: false },
    { text: "Stay Updated With Labor Laws", included: false },
    { text: "Enhanced Reporting", included: false },
  ],
  "Growth Catalyst": [
    { text: "All Essential Edge Features", included: true },
    { text: "Streamline Hiring", included: true },
    { text: "Stay Updated With Labor Laws", included: true },
    { text: "Enhanced Reporting", included: true },
    { text: "Employee Loans/Advances", included: true },
    { text: "Phone Support", included: true },
    { text: "Workforce Rewards", included: false },
    { text: "Salary Revision Approvals", included: false },
    { text: "Advanced Salary Components", included: false },
    { text: "Custom Fields", included: false },
  ],
  "Enterprise Infinity": [
    { text: "All Growth Catalyst Features", included: true },
    { text: "Workforce Rewards", included: true },
    { text: "Salary Revision Approvals", included: true },
    { text: "Advanced Salary Components", included: true },
    { text: "Custom Fields", included: true },
    { text: "Reminders", included: true },
    { text: "Priority Support", included: true },
    { text: "Dedicated Account Manager", included: true },
    { text: "Custom Integrations", included: false },
    { text: "On-Premises Deployment", included: false },
  ],
  "Startup Elevate": [
    { text: "All Growth Catalyst Features", included: true },
    { text: "Free Payroll Processing", included: true },
    { text: "Compliance Tools", included: true },
    { text: "Workforce Rewards", included: true },
    { text: "Talent Management", included: true },
    { text: "Priority Support", included: true },
    { text: "Dedicated Account Manager", included: true },
    { text: "After 3 years: Transitions to Enterprise Infinity", included: true },
    { text: "Custom Integrations", included: false },
    { text: "On-Premises Deployment", included: false },
  ]
};

const plans = [
  {
    name: "Essential Edge",
    desc: "Perfect for single organizations starting their HRMS journey",
    pricingLine1: "₹140/emp/month (Up to 50)",
    pricingLine2: "₹80/emp/month (Beyond 50)",
    setup: "Setup: ₹10,000",
    orgs: "Organizations: 1",
    cta: "Start Free Trial",
    popular: false,
    badge: null,
    features: cardFeatures["Essential Edge"],
    baseRate: 140,
    beyondRate: 80,
    icon: Globe
  },
  {
    name: "Growth Catalyst",
    badge: "Most Popular",
    desc: "For two organizations with advanced HR requirements",
    pricingLine1: "₹200/emp/month (Up to 50)",
    pricingLine2: "₹120/emp/month (Beyond 50)",
    setup: "Setup: ₹10,000",
    orgs: "Organizations: 2",
    cta: "Start Free Trial",
    popular: true,
    features: cardFeatures["Growth Catalyst"],
    baseRate: 200,
    beyondRate: 120,
    icon: Star
  },
  {
    name: "Enterprise Infinity",
    desc: "For multiple organizations with complex HR needs",
    pricingLine1: "₹250/emp/month (Up to 50)",
    pricingLine2: "₹180/emp/month (Beyond 50)",
    setup: "Setup: ₹10,000",
    orgs: null,
    cta: "Book Demo",
    popular: false,
    badge: null,
    features: cardFeatures["Enterprise Infinity"],
    baseRate: 250,
    beyondRate: 180,
    icon: Award
  },
  {
    name: "Startup Elevate",
    badge: "Special Offer",
    badgeColor: "green",
    desc: "Free for 3 years for first 50 startups under 25 employees",
    pricingLarge: "Free for 3 Years*",
    setup: "Setup: ₹10,000",
    orgs: "Organizations: 1",
    cta: "Apply Now",
    popular: false,
    features: cardFeatures["Startup Elevate"],
    baseRate: 0,
    beyondRate: 0,
    icon: Zap
  }
];

const compareFeatures = [
  "Automate Payroll",
  "Accurate Payments",
  "Employee Self-Service",
  "HR Reports & Analytics",
  "Tax Compliance",
  "LOP and LGP Reversal",
  "Streamline Hiring",
  "Stay Updated With Labor Laws"
];

const compareMatrix: Record<string, boolean[]> = {
  "Essential Edge": [true, true, true, true, true, true, false, false],
  "Growth Catalyst": [true, true, true, true, true, true, true, true],
  "Enterprise Infinity": [true, true, true, true, true, true, true, true],
  "Startup Elevate": [true, true, true, true, true, true, true, true]
};

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

export function PricingSection() {
  const [employees, setEmployees] = useState(125);
  const [selectedPlanIndex, setSelectedPlanIndex] = useState(1);

  const selectedPlan = plans[selectedPlanIndex];

  let monthlyCost = 0;
  let calculationText = "";
  
  if (selectedPlan.baseRate > 0) {
    if (employees <= 50) {
      monthlyCost = employees * selectedPlan.baseRate;
      calculationText = `${employees} × ₹${selectedPlan.baseRate}`;
    } else {
      const baseCost = 50 * selectedPlan.baseRate;
      const beyondCount = employees - 50;
      const beyondCost = beyondCount * selectedPlan.beyondRate;
      monthlyCost = baseCost + beyondCost;
      calculationText = `50 × ₹${selectedPlan.baseRate} + ${beyondCount} × ₹${selectedPlan.beyondRate}`;
    }
  }

  const annualCost = monthlyCost * 12;
  const oneTimeSetup = 10000;
  const totalFirstYear = annualCost + oneTimeSetup;

  return (
    <div id="pricing" className="bg-[#FCFCFF] overflow-hidden" style={{ perspective: "2000px" }}>
      {/* 1. Premium Hero Header with AI Image */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/pricing_hero_bg_1777974067930.png" 
            className="w-full h-full object-cover opacity-20 grayscale brightness-125"
            alt="Pricing Background"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#FCFCFF] via-transparent to-[#FCFCFF]"></div>
          <motion.div 
            animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0], opacity: [0.1, 0.2, 0.1] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#8B5CF6]/20 rounded-full blur-[120px]"
          />
        </div>

        <div className="relative z-10 max-w-[1200px] mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm text-[#8B5CF6] text-[13px] font-bold mb-8 border border-purple-100"
          >
            <IndianRupee className="w-4 h-4" />
            Transparent Pricing. No Hidden Costs.
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, rotateX: -20, y: 20 }}
            whileInView={{ opacity: 1, rotateX: 0, y: 0 }}
            viewport={{ once: true }}
            className="text-[56px] lg:text-[72px] font-bold text-gray-900 leading-[1] mb-8 tracking-tighter"
            style={{ transformStyle: "preserve-3d" }}
          >
            Plans Built for <br />
            <span className="bg-gradient-to-r from-[#8B5CF6] to-[#3B82F6] bg-clip-text text-transparent">Every Organization</span>
          </motion.h1>

          <motion.p {...fadeIn} className="text-[18px] lg:text-[22px] text-gray-500 font-medium max-w-3xl mx-auto leading-relaxed">
            From startups to enterprises, we have the perfect plan for your HRMS needs. All plans include ₹10,000 one-time setup charge.
          </motion.p>
        </div>
      </section>

      {/* 2. Pricing Cards Grid - 3D Perspective */}
      <section className="pb-24 relative z-10">
        <div className="max-w-[1400px] mx-auto px-6">
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid lg:grid-cols-4 md:grid-cols-2 gap-8"
          >
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                whileHover={{ y: -12, rotateY: 10, translateZ: 30 }}
                className={`relative rounded-[40px] p-8 lg:p-10 flex flex-col border transition-all cursor-pointer group ${
                  plan.popular ? "bg-[#111827] text-white border-[#8B5CF6] shadow-2xl shadow-purple-500/20" : "bg-white text-gray-900 border-gray-100 shadow-sm"
                }`}
                style={{ transformStyle: "preserve-3d" }}
              >
                {plan.badge && (
                  <div className={`absolute top-8 left-8 px-4 py-1.5 rounded-full text-[12px] font-black uppercase tracking-[0.15em] text-white shadow-lg ${
                    plan.badgeColor === 'green' ? 'bg-[#10B981]' : 'bg-[#8B5CF6]'
                  }`} style={{ transform: "translateZ(20px)" }}>
                    {plan.badge}
                  </div>
                )}

                <div className={`mt-${plan.badge ? '16' : '0'} mb-10`}>
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 ${plan.popular ? 'bg-white/10' : 'bg-purple-50'}`}>
                    <plan.icon className={`w-6 h-6 ${plan.popular ? 'text-white' : 'text-[#8B5CF6]'}`} />
                  </div>
                  <h3 className="text-[26px] font-black tracking-tight mb-3">{plan.name}</h3>
                  <p className={`text-[14px] font-bold leading-relaxed ${plan.popular ? 'text-gray-400' : 'text-gray-500'}`}>{plan.desc}</p>
                </div>

                <div className="mb-10">
                  {plan.pricingLarge ? (
                    <div className="text-[32px] font-black text-[#10B981] leading-tight mb-2">
                      {plan.pricingLarge}
                    </div>
                  ) : (
                    <div className="space-y-1">
                      <div className="text-[16px] font-black tracking-wide">{plan.pricingLine1}</div>
                      <div className={`text-[14px] font-bold ${plan.popular ? 'text-gray-400' : 'text-gray-500'}`}>{plan.pricingLine2}</div>
                    </div>
                  )}
                  
                  <div className="mt-6 pt-6 border-t border-current opacity-10 space-y-2">
                    <div className="text-[13px] font-bold flex items-center gap-2">
                       <Clock className="w-4 h-4" /> {plan.setup}
                    </div>
                    {plan.orgs && (
                       <div className="text-[13px] font-bold flex items-center gap-2">
                         <Globe className="w-4 h-4" /> {plan.orgs}
                       </div>
                    )}
                  </div>
                </div>

                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full py-4 rounded-2xl font-black text-[15px] mb-10 transition-all shadow-xl ${
                  plan.popular 
                    ? "bg-[#8B5CF6] text-white shadow-purple-500/20 hover:bg-[#7C3AED]" 
                    : "bg-gray-900 text-white hover:bg-black shadow-gray-200/50"
                }`}>
                  {plan.cta}
                </motion.button>

                <div className="flex-grow">
                  <ul className="space-y-4">
                    {plan.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${feat.included ? (plan.popular ? 'bg-purple-500/20' : 'bg-purple-50') : 'opacity-20'}`}>
                          {feat.included ? (
                            <Check className={`w-3.5 h-3.5 ${plan.popular ? 'text-purple-400' : 'text-[#8B5CF6]'}`} strokeWidth={3} />
                          ) : (
                            <X className="w-3.5 h-3.5 text-gray-400" strokeWidth={3} />
                          )}
                        </div>
                        <span className={`text-[14px] leading-snug font-bold ${feat.included ? (plan.popular ? 'text-gray-300' : 'text-gray-700') : 'text-gray-400 opacity-50'}`}>
                          {feat.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.p {...fadeIn} className="text-center text-[13px] text-gray-500 font-bold mt-12 mb-16 italic opacity-70">
            *First 50 startups with fewer than 25 employees. After 3 years or exceeding 25 employees, transitions to Enterprise Infinity plan.
          </motion.p>
        </div>
      </section>

      {/* 3. Pricing Calculator - Upgraded Premium UI */}
      <section className="py-24 bg-[#F8F9FF] relative overflow-hidden">
        <div className="absolute inset-0 z-0">
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[url('/grid.svg')] opacity-[0.03]"></div>
        </div>
        
        <div className="max-w-[1000px] mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <motion.div {...fadeIn} className="inline-flex items-center gap-2 text-[#8B5CF6] font-bold text-[14px] uppercase tracking-widest mb-4">
               <Calculator className="w-5 h-5" /> Cost Estimator
            </motion.div>
            <motion.h3 {...fadeIn} className="text-[40px] lg:text-[48px] font-black text-gray-900 tracking-tight">Interactive Price Calculator</motion.h3>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ rotateX: 1 }}
            className="bg-white rounded-[48px] p-8 md:p-12 shadow-[0_40px_100px_rgba(0,0,0,0.06)] border border-gray-100"
            style={{ transformStyle: "preserve-3d" }}
          >
            <div className="grid lg:grid-cols-[1fr_340px] gap-16 items-start">
              <div className="space-y-12">
                {/* Plan Selection */}
                <div>
                  <label className="block text-[13px] font-black text-gray-400 uppercase tracking-[0.2em] mb-6">Select Your Plan</label>
                  <div className="grid grid-cols-2 gap-4">
                    {plans.map((p, i) => (
                      <button
                        key={i}
                        onClick={() => setSelectedPlanIndex(i)}
                        className={`py-5 px-6 rounded-2xl text-left transition-all border-2 relative overflow-hidden group ${
                          selectedPlanIndex === i 
                            ? "bg-gray-900 text-white border-gray-900 shadow-xl" 
                            : "bg-white text-gray-600 border-gray-100 hover:border-purple-200"
                        }`}
                      >
                        <div className="font-black text-[16px] mb-1">{p.name}</div>
                        <div className={`text-[12px] font-bold ${selectedPlanIndex === i ? 'text-gray-400' : 'text-gray-400'}`}>
                          {i === 0 ? "Single Org" : i === 1 ? "Two Orgs" : i === 2 ? "Multiple Orgs" : "Free/3 yrs"}
                        </div>
                        {selectedPlanIndex === i && (
                           <motion.div layoutId="plan-check" className="absolute top-4 right-4"><ShieldCheck className="w-5 h-5 text-purple-400" /></motion.div>
                        )}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Employee Slider */}
                <div>
                  <div className="flex justify-between items-end mb-8">
                    <label className="text-[13px] font-black text-gray-400 uppercase tracking-[0.2em]">Employee Count</label>
                    <div className="text-[32px] font-black text-[#8B5CF6] leading-none">{employees}</div>
                  </div>
                  <div className="relative pt-2">
                    <input
                      type="range" min="1" max="500" value={employees}
                      onChange={(e) => setEmployees(parseInt(e.target.value))}
                      className="w-full h-3 bg-purple-50 rounded-full appearance-none cursor-pointer accent-[#8B5CF6] transition-all"
                    />
                    <div className="flex justify-between text-[11px] font-black text-gray-300 mt-4 uppercase tracking-widest">
                      <span>1 Team Member</span>
                      <span>500+ Enterprise</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Cost Summary Box */}
              <div className="bg-[#111827] rounded-[32px] p-10 text-white shadow-2xl relative overflow-hidden" style={{ transform: "translateZ(20px)" }}>
                 <div className="absolute top-0 right-0 w-32 h-32 bg-[#8B5CF6]/20 rounded-full blur-[60px]"></div>
                 
                 {selectedPlan.baseRate > 0 ? (
                   <div className="space-y-10 relative z-10">
                      <div>
                         <p className="text-[11px] font-black text-gray-400 uppercase tracking-widest mb-2">Monthly Investment</p>
                         <AnimatePresence mode="wait">
                            <motion.div 
                              key={monthlyCost} 
                              initial={{ y: 10, opacity: 0 }} 
                              animate={{ y: 0, opacity: 1 }}
                              className="text-[44px] font-black leading-none"
                            >
                               ₹{monthlyCost.toLocaleString('en-IN')}
                            </motion.div>
                         </AnimatePresence>
                         <p className="text-[11px] font-bold text-gray-500 mt-4 italic">{calculationText}</p>
                      </div>

                      <div className="space-y-4 pt-10 border-t border-white/10">
                         <div className="flex justify-between text-[14px]">
                            <span className="text-gray-400 font-bold">Annual Cost</span>
                            <span className="font-black">₹{annualCost.toLocaleString('en-IN')}</span>
                         </div>
                         <div className="flex justify-between text-[14px]">
                            <span className="text-gray-400 font-bold">Setup Fee</span>
                            <span className="font-black text-purple-400">₹{oneTimeSetup.toLocaleString('en-IN')}</span>
                         </div>
                      </div>

                      <div className="pt-8">
                         <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
                            <div className="text-[12px] font-bold text-gray-400 mb-1">Total First Year</div>
                            <div className="text-[24px] font-black text-[#10B981]">₹{totalFirstYear.toLocaleString('en-IN')}</div>
                         </div>
                      </div>
                   </div>
                 ) : (
                   <div className="text-center py-10 relative z-10">
                      <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                         <Zap className="w-8 h-8 text-[#10B981]" />
                      </div>
                      <h4 className="text-[24px] font-black mb-4">Start for Free!</h4>
                      <p className="text-gray-400 font-bold text-[14px]">Your startup qualifies for 3 years of free payroll processing.</p>
                   </div>
                 )}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 4. Detailed Feature Comparison - Premium Glass Table */}
      <section className="py-24 bg-white">
        <div className="max-w-[1100px] mx-auto px-6">
          <div className="text-center mb-20">
            <h3 className="text-[40px] font-black text-gray-900 tracking-tight">Feature-by-Feature Comparison</h3>
            <div className="w-20 h-1.5 bg-[#8B5CF6] mx-auto mt-6 rounded-full"></div>
          </div>

          <div className="bg-white rounded-[40px] border border-gray-100 overflow-hidden shadow-[0_10px_60px_rgba(0,0,0,0.03)]">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gray-50/50 border-b border-gray-100">
                    <th className="py-8 px-10 font-black text-gray-900 text-[14px] uppercase tracking-widest min-w-[240px]">Platform Features</th>
                    {plans.map((p, i) => (
                       <th key={i} className="py-8 px-6 font-black text-gray-900 text-center min-w-[160px]">
                          <div className="text-[14px] mb-1">{p.name}</div>
                          <div className="text-[10px] text-[#8B5CF6] uppercase">{i === 1 ? "POPULAR" : ""}</div>
                       </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {compareFeatures.map((feature, idx) => (
                    <tr key={idx} className="hover:bg-purple-50/30 transition-colors">
                      <td className="py-6 px-10 text-[15px] font-bold text-gray-800">{feature}</td>
                      {plans.map((p, pIdx) => (
                        <td key={pIdx} className="py-6 px-6 text-center">
                          {compareMatrix[p.name][idx] ? (
                            <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} className="flex justify-center">
                              <Check className="w-5 h-5 text-[#8B5CF6] bg-purple-50 rounded-full p-1" strokeWidth={4} />
                            </motion.div>
                          ) : (
                            <X className="w-5 h-5 text-gray-200 mx-auto" strokeWidth={3} />
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Implementation Timeline - with AI Images */}
      <section className="py-24 bg-[#F8F9FF] relative overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <h3 className="text-[40px] font-black text-gray-900 tracking-tight">Speedy Implementation</h3>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
             {/* Startup Growth Card */}
             <motion.div 
               whileHover={{ y: -10 }}
               className="bg-white rounded-[48px] overflow-hidden shadow-xl flex flex-col md:flex-row border border-gray-100"
             >
                <div className="md:w-1/2 aspect-square">
                   <img src="/startup_growth_visual_1777974091721.png" className="w-full h-full object-cover" alt="Startup Growth" />
                </div>
                <div className="md:w-1/2 p-10 flex flex-col justify-center">
                   <div className="w-12 h-12 bg-purple-50 rounded-2xl flex items-center justify-center mb-6">
                      <Zap className="w-6 h-6 text-[#8B5CF6]" />
                   </div>
                   <h4 className="text-[24px] font-black mb-4">Startup Ready</h4>
                   <p className="text-gray-500 font-bold leading-relaxed">Dedicated tools and pricing to help you scale from day one without financial friction.</p>
                </div>
             </motion.div>

             {/* Enterprise Global Card */}
             <motion.div 
               whileHover={{ y: -10 }}
               className="bg-white rounded-[48px] overflow-hidden shadow-xl flex flex-col md:flex-row border border-gray-100"
             >
                <div className="md:w-1/2 p-10 flex flex-col justify-center order-2 md:order-1">
                   <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center mb-6">
                      <Globe className="w-6 h-6 text-[#3B82F6]" />
                   </div>
                   <h4 className="text-[24px] font-black mb-4">Enterprise Power</h4>
                   <p className="text-gray-500 font-bold leading-relaxed">Scale across multiple organizations and geographies with robust security and compliance.</p>
                </div>
                <div className="md:w-1/2 aspect-square order-1 md:order-2">
                   <img src="/enterprise_global_visual_1777974111779.png" className="w-full h-full object-cover" alt="Enterprise Global" />
                </div>
             </motion.div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Globe, time: "14 Days", title: "Free Trial", desc: "Full access to all features for 14 days.", color: "text-purple-500" },
              { icon: Zap, time: "1 Day", title: "Setup Assistance", desc: "Our team helps you configure everything in 24h.", color: "text-blue-500" },
              { icon: TrendingUp, time: "3-5 Days", title: "Full Deployment", desc: "Your team is trained and ready to go.", color: "text-green-500" },
              { icon: Headphones, time: "∞", title: "Ongoing Support", desc: "Email, chat, and phone support available.", color: "text-orange-500" }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm transition-all"
              >
                <div className={`text-[32px] font-black ${item.color} mb-6`}>{item.time}</div>
                <h4 className="text-[18px] font-black text-gray-900 mb-4">{item.title}</h4>
                <p className="text-[14px] text-gray-500 leading-relaxed font-bold">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Pricing FAQs - Sleek Accordion */}
      <section className="py-24 bg-white">
        <div className="max-w-[800px] mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="text-[40px] font-black text-gray-900 tracking-tight">Pricing FAQs</h3>
          </div>

          <div className="space-y-6">
            {[
              { q: "Can I change plans later?", a: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle, and any prorated differences will be automatically applied." },
              { q: "What is the one-time setup charge for?", a: "The ₹10,000 one-time setup charge covers complete onboarding assistance. Our team will help you configure payroll, establish compliance rules, import existing employee data, and train your HR team." },
              { q: "How is pricing calculated?", a: "Pricing is calculated per employee per month, with a tiered structure. For the first 50 employees, you pay the base rate. For any employees beyond 50, you pay a discounted rate. The system automatically adjusts your bill based on active employee counts." },
              { q: "What happens if I add or remove employees?", a: "Your monthly billing automatically adjusts based on your active headcount. If you add or remove employees mid-month, your next invoice will reflect the prorated changes. You only pay for active employees." },
              { q: "Do you offer discounts for annual billing?", a: "Yes, we offer custom discounts for annual upfront commitments. Please contact our sales team to discuss the best pricing for your organization's long-term needs." },
              { q: "Is there a free trial?", a: "Yes! We offer a 14-day free trial that gives you full access to all features so you can thoroughly evaluate the platform. No credit card is required to start the trial." },
              { q: "What payment methods do you accept?", a: "We accept all major credit cards, debit cards, UPI, and net banking for monthly subscriptions. For annual enterprise plans, we also accept bank transfers (NEFT/RTGS)." },
              { q: "Can you help migrate data?", a: "Absolutely. Our implementation team will assist you in migrating employee records, payroll history, and compliance data from your legacy systems during the setup phase." }
            ].map((faq, idx) => (
              <motion.details 
                key={idx} 
                whileHover={{ x: 5 }}
                className="group bg-white rounded-[24px] border border-gray-100 shadow-sm open:shadow-xl transition-all overflow-hidden"
              >
                <summary className="flex items-center justify-between p-8 cursor-pointer list-none font-black text-[17px] text-gray-900 group-open:bg-purple-50/50 group-open:text-[#8B5CF6]">
                  {faq.q}
                  <div className="w-8 h-8 rounded-full border border-current flex items-center justify-center transition group-open:rotate-180">
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </summary>
                <div className="px-8 pb-8 pt-2 text-[16px] text-gray-500 leading-relaxed font-bold bg-white">
                  {faq.a}
                </div>
              </motion.details>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Final Ready CTA - 3D Glow */}
      <section className="py-24 bg-white relative">
        <div className="max-w-[1000px] mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ rotateX: 2 }}
            className="bg-gradient-to-br from-[#111827] to-[#1F2937] rounded-[48px] p-12 lg:p-20 text-center text-white relative overflow-hidden"
            style={{ transformStyle: "preserve-3d" }}
          >
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
            <div className="absolute top-0 right-0 w-80 h-80 bg-purple-600/20 rounded-full blur-[80px]"></div>
            
            <div className="relative z-10" style={{ transform: "translateZ(40px)" }}>
              <h2 className="text-[42px] lg:text-[56px] font-black mb-6 tracking-tight leading-tight">
                Ready to transform <br />your HR?
              </h2>
              <p className="text-[18px] text-gray-400 font-bold mb-12 max-w-2xl mx-auto">
                Start your 14-day free trial today. No credit card required.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <motion.button 
                  whileHover={{ scale: 1.1, translateZ: 20 }}
                  className="px-10 py-5 bg-[#8B5CF6] text-white text-[16px] font-black rounded-2xl hover:bg-[#7C3AED] transition-all shadow-xl shadow-purple-500/20 flex items-center gap-2 group"
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
