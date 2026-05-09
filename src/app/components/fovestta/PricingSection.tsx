import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence, useScroll, useTransform, useSpring, useMotionValue } from "motion/react";
import {
  Check, X, Calculator, IndianRupee, Sparkles,
  ArrowRight, ShieldCheck, Zap, TrendingUp, HelpCircle,
  ChevronDown, Star, Globe, Clock, Headphones, Award,
  MousePointer2, Layers, Cpu, Shield, Activity
} from "lucide-react";

// Helper for 3D Tilt Card
const TiltCard = ({ children, className, popular }: { children: React.ReactNode, className: string, popular?: boolean }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className={`${className} transition-all duration-200`}
    >
      <div style={{ transform: "translateZ(50px)", transformStyle: "preserve-3d" }}>
        {children}
      </div>
    </motion.div>
  );
};

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
    icon: Globe,
    gradient: "from-blue-500/10 to-indigo-500/10"
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
    icon: Star,
    gradient: "from-purple-500/20 to-pink-500/20"
  },
  {
    name: "Enterprise Infinity",
    desc: "For multiple organizations with complex HR needs",
    pricingLine1: "₹250/emp/month (Up to 50)",
    pricingLine2: "₹180/emp/month (Beyond 50)",
    setup: "Setup: ₹10,000",
    orgs: null,
    cta: "Start Free Trial",
    popular: false,
    badge: null,
    features: cardFeatures["Enterprise Infinity"],
    baseRate: 250,
    beyondRate: 180,
    icon: Award,
    gradient: "from-amber-500/10 to-orange-500/10"
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
    icon: Zap,
    gradient: "from-emerald-500/10 to-teal-500/10"
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
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: "easeOut" }
};

const FloatingShape = ({ className, delay = 0 }: { className: string, delay?: number }) => (
  <motion.div
    animate={{
      y: [0, -20, 0],
      rotate: [0, 10, 0],
      scale: [1, 1.05, 1]
    }}
    transition={{
      duration: 5,
      repeat: Infinity,
      delay,
      ease: "easeInOut"
    }}
    className={`absolute rounded-full blur-[60px] opacity-20 ${className}`}
  />
);

export function PricingSection() {
  const [employees, setEmployees] = useState(125);
  const [selectedPlanIndex, setSelectedPlanIndex] = useState(1);
  const [workPresent, setWorkPresent] = useState(90);
  const [grossPresent, setGrossPresent] = useState(200);
  const [sickPresent, setSickPresent] = useState(250);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const heroY = useTransform(scrollYProgress, [0, 0.2], [0, -100]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

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

  const savingsFactor = (workPresent + grossPresent + sickPresent) / 540;
  const planMultiplier = selectedPlan.baseRate > 0 ? (selectedPlan.baseRate / 140) : 1.5;
  const annualSavings = (employees * 2400 * planMultiplier) * savingsFactor;
  const roiPercent = Math.round(((annualSavings - totalFirstYear) / Math.max(1, totalFirstYear)) * 100);

  return (
    <div id="pricing" ref={containerRef} className="bg-[#fafbfe] text-gray-900 overflow-hidden selection:bg-purple-100">
      {/* 1. Premium Hero Header with AI Image */}
      <section className="relative min-h-[90vh] flex flex-col justify-center items-center pt-20 pb-10 lg:pt-28 lg:pb-12 overflow-hidden">
        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="absolute inset-0 z-0"
        >
          <img
            src="/enterprise_global_visual_1777974111779.png"
            className="w-full h-full object-cover object-center opacity-25 scale-110 grayscale brightness-110"
            alt="Pricing Background"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/20 to-[#fafbfe]"></div>

          <FloatingShape className="top-[20%] left-[10%] w-[300px] h-[300px] bg-purple-200" delay={0} />
          <FloatingShape className="bottom-[20%] right-[10%] w-[400px] h-[400px] bg-blue-100" delay={1} />
        </motion.div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 lg:px-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-white/40 backdrop-blur-xl border border-white text-purple-600 text-[16px] font-bold mb-10 shadow-sm"
          >
            <IndianRupee className="w-4 h-4" />
            <span className="tracking-widest uppercase">Transparent Pricing. No Hidden Costs.</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-[48px] lg:text-[64px] font-bold leading-[1.1] mb-8 tracking-tight text-gray-900"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Plans Built for <br />
            <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">Every Organization</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-[18px] lg:text-[18px] text-gray-600 font-medium max-w-2xl mx-auto leading-relaxed mb-10"
          >
            From startups to enterprises, we have the perfect plan for your HRMS needs.
            All plans include ₹10,000 one-time setup charge.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <a href="#plans-grid" className="inline-block px-8 py-4 bg-[#6B46FF] text-white rounded-xl font-bold text-[18px] hover:bg-indigo-700 transition-all shadow-lg">
              Explore Our Plans
            </a>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50"
        >
          <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-gray-400 to-transparent"></div>
          <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-gray-500">Scroll Down</span>
        </motion.div>
      </section>

      {/* 2. Pricing Cards Grid - Interactive 3D */}
      <section id="plans-grid" className="py-14 relative z-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-10">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-10">
            {plans.map((plan, index) => (
              <TiltCard
                key={index}
                popular={plan.popular}
                className={`group relative rounded-[32px] p-8 flex flex-col border transition-all cursor-pointer ${plan.popular
                  ? "bg-white border-purple-200 shadow-[0_20px_60px_rgba(107,70,255,0.06)] ring-1 ring-purple-100"
                  : "bg-[#fafbfe]/50 border-gray-100 hover:border-purple-200"
                  }`}
              >
                {/* Background Gradient Glow */}
                <div className={`absolute inset-0 rounded-[48px] bg-gradient-to-br ${plan.gradient} opacity-30 blur-3xl group-hover:opacity-60 transition-opacity`}></div>

                <div className="relative z-10 flex flex-col h-full">
                  {plan.badge && (
                    <div className={`self-start px-5 py-2 rounded-full text-[11px] font-black uppercase tracking-[0.2em] text-white mb-8 ${plan.badgeColor === 'green' ? 'bg-emerald-500 shadow-sm' : 'bg-[#6B46FF] shadow-sm'
                      }`}>
                      {plan.badge}
                    </div>
                  )}

                  <div className="mb-6">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${plan.popular ? 'bg-purple-100 text-purple-600' : 'bg-gray-100 text-gray-600'}`}>
                      <plan.icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-[26px] font-bold tracking-tight mb-3 group-hover:text-purple-600 transition-colors text-gray-900">{plan.name}</h3>
                    <p className="text-[18px] font-semibold text-gray-500 leading-relaxed">{plan.desc}</p>
                  </div>

                  <div className="mb-8 flex-grow">
                    {plan.pricingLarge ? (
                      <div className="text-[32px] font-bold text-emerald-600 leading-tight mb-2">
                        {plan.pricingLarge}
                      </div>
                    ) : (
                      <div className="space-y-1">
                        <div className="text-[16px] font-bold tracking-wide text-gray-900">{plan.pricingLine1}</div>
                        <div className="text-[18px] font-semibold text-gray-400">{plan.pricingLine2}</div>
                      </div>
                    )}

                    <div className="mt-8 pt-8 border-t border-gray-100 space-y-4">
                      <div className="text-[16px] font-bold flex items-center gap-3 text-gray-600">
                        <div className="p-2 rounded-lg bg-gray-50"><Clock className="w-4 h-4 text-purple-600" /></div> {plan.setup}
                      </div>
                      {plan.orgs && (
                        <div className="text-[16px] font-bold flex items-center gap-3 text-gray-600">
                          <div className="p-2 rounded-lg bg-gray-50"><Globe className="w-4 h-4 text-blue-600" /></div> {plan.orgs}
                        </div>
                      )}
                    </div>

                    <ul className="mt-10 space-y-5">
                      {plan.features.slice(0, 6).map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-4">
                          <div className={`mt-1 flex-shrink-0 ${feat.included ? 'text-purple-600' : 'text-gray-300'}`}>
                            {feat.included ? <Check className="w-4 h-4" strokeWidth={4} /> : <X className="w-4 h-4" />}
                          </div>
                          <span className={`text-[16px] font-bold ${feat.included ? 'text-gray-700' : 'text-gray-300 line-through decoration-gray-200'}`}>
                            {feat.text}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    to="/request-demo"
                    className={`w-full py-4 rounded-xl font-bold text-[18px] transition-all relative overflow-hidden group/btn flex items-center justify-center gap-2 ${plan.popular
                      ? "bg-[#6B46FF] text-white shadow-md hover:bg-indigo-700"
                      : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                      }`}
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      {plan.cta}
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </span>
                  </Link>
                </div>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* 2b. Detailed Feature Comparison - Glass Dashboard Style (Combined with Pricing Cards) */}
      <section className="pb-20 pt-8 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 lg:px-10">
          <div className="text-center mb-8">
            <motion.h3 {...fadeIn} className="text-[36px] lg:text-[48px] font-bold text-gray-900 tracking-tight leading-tight mb-4">Deep Feature Analysis</motion.h3>
            <motion.p {...fadeIn} className="text-gray-500 font-medium text-[18px]">Every detail covered, every requirement met.</motion.p>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto mt-6 rounded-full"></div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gray-50/50 rounded-[56px] border border-gray-100 overflow-hidden shadow-sm backdrop-blur-3xl"
          >
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gray-100/50 border-b border-gray-100">
                    <th className="py-6 px-6 lg:px-8 font-bold text-gray-400 text-[11px] uppercase tracking-[0.3em] min-w-[300px]">Functional Capabilities</th>
                    {plans.map((p, i) => (
                      <th key={i} className="py-6 px-6 text-center min-w-[180px]">
                        <div className={`text-[16px] font-bold mb-1 ${p.popular ? 'text-purple-600' : 'text-gray-900'}`}>{p.name}</div>
                        {p.popular && <div className="text-[9px] text-purple-600 font-bold uppercase tracking-[0.2em]">Priority</div>}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {compareFeatures.map((feature, idx) => (
                    <motion.tr
                      key={idx}
                      whileHover={{ backgroundColor: "rgba(107,70,255,0.02)" }}
                      className="transition-colors border-b border-gray-50 last:border-0"
                    >
                      <td className="py-5 px-6 lg:px-8 text-[18px] font-semibold text-gray-700 flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-purple-400/50"></div>
                        {feature}
                      </td>
                      {plans.map((p, pIdx) => (
                        <td key={pIdx} className="py-5 px-6 text-center">
                          {compareMatrix[p.name][idx] ? (
                            <div className="flex justify-center">
                              <motion.div
                                initial={{ scale: 0, rotate: -45 }}
                                whileInView={{ scale: 0.9, rotate: 0 }}
                                className="w-7 h-7 rounded-full bg-purple-100 flex items-center justify-center border border-purple-200/50"
                              >
                                <Check className="w-3.5 h-3.5 text-purple-600" strokeWidth={4} />
                              </motion.div>
                            </div>
                          ) : (
                            <X className="w-4 h-4 text-gray-200 mx-auto" strokeWidth={2} />
                          )}
                        </td>
                      ))}
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. Pricing Calculator - Control Center Aesthetic */}
      <section className="py-24 bg-[#fafbfe] relative overflow-hidden">
        {/* Animated Background Decor */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(107,70,255,0.03),transparent_50%)]"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-16 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div {...fadeIn}>
              <div className="inline-flex items-center gap-3 text-purple-600 font-black text-[18px] uppercase tracking-[0.3em] mb-8">
                <div className="w-12 h-[1px] bg-purple-200"></div>
                Interactive Estimator
              </div>
              <h2 className="text-[40px] lg:text-[56px] font-bold mb-6 leading-[1.2] text-gray-900" style={{ fontFamily: "'Outfit', sans-serif" }}>
                ROI & Cost <br />
                <span className="text-gray-300">Prediction</span>
              </h2>
              <p className="text-gray-500 text-[18px] font-medium leading-relaxed mb-10 max-w-xl">
                Get an instant breakdown of your investment based on your organization's specific needs and employee count.
              </p>

              <div className="flex items-center gap-8 p-8 rounded-[32px] bg-white border border-gray-100 shadow-sm">
                <img src="/pricing_calculator_3d_icon_1777976037448.png" className="w-24 h-24 object-contain" alt="3D Calculator" />
                <div>
                  <h4 className="text-[18px] font-black text-gray-900 mb-2">Smart Prediction Engine</h4>
                  <p className="text-gray-500 text-[16px] font-bold">Our algorithm adjusts tiered pricing in real-time as you scale your team.</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-[40px] p-8 md:p-10 shadow-[0_20px_60px_rgba(0,0,0,0.04)] border border-gray-100 relative"
            >
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-purple-100 blur-3xl"></div>
              <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-blue-50 blur-3xl"></div>

              <div className="space-y-12">
                {/* Plan Selector Buttons */}
                <div>
                  <label className="block text-[11px] font-black text-gray-400 uppercase tracking-[0.4em] mb-8">Select Deployment Tier</label>
                  <div className="grid grid-cols-2 gap-4">
                    {plans.map((p, i) => (
                      <button
                        key={i}
                        onClick={() => setSelectedPlanIndex(i)}
                        className={`py-5 px-6 rounded-3xl text-left transition-all border relative overflow-hidden group ${selectedPlanIndex === i
                          ? "bg-[#6B46FF] border-purple-500 shadow-md text-white"
                          : "bg-gray-50 border-gray-100 hover:border-purple-200 text-gray-600"
                          }`}
                      >
                        <div className="font-black text-[18px] mb-1">{p.name}</div>
                        <div className={`text-[11px] font-bold ${selectedPlanIndex === i ? 'text-purple-100' : 'text-gray-400'}`}>
                          {i === 0 ? "Single Org" : i === 1 ? "Two Orgs" : i === 2 ? "Multi-Entity" : "Startup Tier"}
                        </div>
                        {selectedPlanIndex === i && (
                          <motion.div layoutId="calc-check" className="absolute top-4 right-4"><Activity className="w-5 h-5 text-white" /></motion.div>
                        )}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Employee Count Input/Slider */}
                <div className="p-10 rounded-[40px] bg-gray-50 border border-gray-100">
                  <div className="flex justify-between items-end mb-10">
                    <div>
                      <label className="text-[11px] font-black text-gray-400 uppercase tracking-[0.4em] mb-2 block">Active Nodes</label>
                      <div className="text-[16px] font-bold text-gray-500">Employee Capacity</div>
                    </div>
                    <div className="text-right">
                      <motion.div
                        key={employees}
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="text-[36px] font-bold text-gray-900 leading-none mb-1"
                      >
                        {employees}
                      </motion.div>
                      <span className="text-purple-600 font-bold text-[11px] uppercase">Members</span>
                    </div>
                  </div>

                  <div className="relative pt-4">
                    <input
                      type="range" min="1" max="500" value={employees}
                      onChange={(e) => setEmployees(parseInt(e.target.value))}
                      className="w-full h-2 bg-gray-200 rounded-full appearance-none cursor-pointer accent-purple-600 transition-all hover:h-3"
                    />
                    <div className="flex justify-between text-[10px] font-black text-gray-400 mt-6 uppercase tracking-widest">
                      <span>Base Line</span>
                      <span>Scaling Up</span>
                    </div>
                  </div>
                </div>

                {/* Customize Assumptions Panel */}
                <div className="p-8 rounded-[32px] bg-white border border-purple-100 shadow-[0_4px_20px_rgba(107,70,255,0.05)]">
                  <h4 className="text-[18px] font-black text-gray-900 mb-6 flex items-center gap-2">
                    <Activity className="w-5 h-5 text-purple-600" />
                    Customize Assumptions
                  </h4>
                  <div className="grid grid-cols-3 gap-6">
                    <div>
                      <label className="text-[11px] font-black text-gray-400 uppercase tracking-[0.2em] mb-2 block">Work Present</label>
                      <input
                        type="number"
                        value={workPresent}
                        onChange={e => setWorkPresent(Number(e.target.value) || 0)}
                        className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-100 font-bold text-gray-900 transition-all"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] font-black text-gray-400 uppercase tracking-[0.2em] mb-2 block">Gross Present</label>
                      <input
                        type="number"
                        value={grossPresent}
                        onChange={e => setGrossPresent(Number(e.target.value) || 0)}
                        className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-100 font-bold text-gray-900 transition-all"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] font-black text-gray-400 uppercase tracking-[0.2em] mb-2 block">Sick Present</label>
                      <input
                        type="number"
                        value={sickPresent}
                        onChange={e => setSickPresent(Number(e.target.value) || 0)}
                        className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-100 font-bold text-gray-900 transition-all"
                      />
                    </div>
                  </div>
                </div>

                {/* Cost Dashboard */}
                <div className="grid grid-cols-2 gap-6">
                  <div className="p-8 rounded-[32px] bg-gradient-to-br from-[#6B46FF] to-indigo-600 shadow-lg shadow-purple-200/50">
                    <p className="text-[10px] font-bold text-purple-100 uppercase tracking-[0.2em] mb-4">Monthly Burn</p>
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={monthlyCost}
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        className="text-[28px] font-bold text-white"
                      >
                        ₹{monthlyCost.toLocaleString('en-IN')}
                      </motion.div>
                    </AnimatePresence>
                    <p className="text-[10px] font-bold text-white/60 mt-2 italic">{calculationText || "Included in plan"}</p>
                  </div>

                  <div className="p-8 rounded-[32px] bg-gray-50 border border-gray-100">
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] mb-4">Annual Commitment</p>
                    <div className="text-[28px] font-bold text-gray-900">₹{annualCost.toLocaleString('en-IN')}</div>
                    <p className="text-[10px] font-bold text-purple-600 mt-2 uppercase tracking-widest">+ Setup Investment</p>
                  </div>

                  <div className="p-8 rounded-[32px] bg-emerald-50 border border-emerald-100 col-span-2 flex items-center justify-between">
                    <div>
                      <p className="text-[10px] font-bold text-emerald-600 uppercase tracking-[0.2em] mb-2">Projected Annual Savings</p>
                      <div className="text-[28px] font-bold text-emerald-700">₹{Math.round(annualSavings).toLocaleString('en-IN')}</div>
                    </div>
                    <div className="text-right">
                      <p className="text-[10px] font-bold text-emerald-600 uppercase tracking-[0.2em] mb-2">ROI</p>
                      <div className="text-[36px] font-black text-emerald-600">{roiPercent > 0 ? `+${roiPercent}` : roiPercent}%</div>
                    </div>
                  </div>
                </div>

                <div className="p-8 rounded-[32px] bg-gray-50 border border-gray-100 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-2xl bg-purple-100"><ShieldCheck className="w-6 h-6 text-purple-600" /></div>
                    <div>
                      <div className="text-[16px] font-bold text-gray-400 uppercase tracking-widest">Setup Investment</div>
                      <div className="text-[16px] font-bold text-gray-900">₹{oneTimeSetup.toLocaleString('en-IN')}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-[16px] font-bold text-gray-400 uppercase tracking-widest">First Year Total</div>
                    <div className="text-[28px] font-bold text-emerald-600">₹{totalFirstYear.toLocaleString('en-IN')}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>



      {/* 5. Implementation Roadmap - with New 3D Visuals */}
      <section className="py-10 bg-[#fafbfe] relative">
        <div className="max-w-7xl mx-auto px-4 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-10 mb-12">
            {/* Startup Growth Card */}
            <motion.div
              whileHover={{ y: -12 }}
              className="bg-white rounded-[40px] overflow-hidden border border-gray-100 group shadow-sm"
            >
              <div className="h-[220px] relative overflow-hidden">
                <img
                  src="/startup_growth_visual_3d_1777976005894.png"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  alt="Startup Growth"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-80"></div>
              </div>
              <div className="p-6 md:p-8">
                <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center mb-4 border border-purple-200/50">
                  <Zap className="w-5 h-5 text-purple-600" />
                </div>
                <h4 className="text-[16px] font-bold mb-2 tracking-tight text-gray-900">Startup Ready</h4>
                <p className="text-gray-500 font-semibold text-[18px] leading-relaxed">
                  Dedicated tools and pricing to help you scale from day one without financial friction.
                </p>
              </div>
            </motion.div>

            {/* Enterprise Global Card */}
            <motion.div
              whileHover={{ y: -12 }}
              className="bg-white rounded-[40px] overflow-hidden border border-gray-100 group shadow-sm"
            >
              <div className="h-[220px] relative overflow-hidden">
                <img
                  src="/enterprise_global_visual_3d_1777976020887.png"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  alt="Enterprise Global"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-80"></div>
              </div>
              <div className="p-6 md:p-8">
                <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center mb-4 border border-blue-200/50">
                  <Globe className="w-5 h-5 text-blue-600" />
                </div>
                <h4 className="text-[16px] font-bold mb-2 tracking-tight text-gray-900">Enterprise Power</h4>
                <p className="text-gray-500 font-semibold text-[18px] leading-relaxed">
                  Scale across multiple organizations and geographies with robust security and compliance.
                </p>
              </div>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Globe, time: "14 Days", title: "Free Trial", desc: "Full access to all features for 14 days.", color: "text-purple-600" },
              { icon: Zap, time: "1 Day", title: "Setup Assistance", desc: "Our team helps you configure everything in 24h.", color: "text-blue-600" },
              { icon: TrendingUp, time: "3-5 Days", title: "Full Deployment", desc: "Your team is trained and ready to go.", color: "text-emerald-600" },
              { icon: Headphones, time: "∞", title: "Ongoing Support", desc: "Email, chat, and phone support available.", color: "text-amber-600" }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -4, backgroundColor: "white" }}
                className="bg-white/50 p-6 rounded-2xl border border-gray-100 transition-all shadow-sm"
              >
                <item.icon className={`w-6 h-6 ${item.color} mb-4`} />
                <div className={`text-[16px] font-bold text-gray-900 mb-2`}>{item.time}</div>
                <h4 className="text-[16px] font-bold text-gray-800 mb-1 tracking-tight">{item.title}</h4>
                <p className="text-[18px] text-gray-400 leading-relaxed font-semibold">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* CTA Banner */}
      <section className="py-10 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 lg:px-10">
          <motion.a
            href="/request-demo"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="block w-full rounded-[48px] overflow-hidden shadow-[0_20px_60px_rgba(107,70,255,0.08)] border border-purple-50 transition-all focus:outline-none focus:ring-4 focus:ring-purple-500/20"
          >
            <img
              src="/cta_full_banner.png"
              alt="Ready to transform your HR? Start your 14-day free trial today. Book Free Demo"
              className="w-full h-auto object-cover"
            />
          </motion.a>
        </div>
      </section>
    </div>
  );
}
