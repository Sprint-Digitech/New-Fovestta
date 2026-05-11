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

const PremiumCheckmark = ({ className = "", type = "check" }: { className?: string, type?: "check" | "cross" }) => (
  <motion.div
    initial={{ scale: 0, rotate: type === "check" ? -20 : 20 }}
    whileInView={{ scale: 1, rotate: 0 }}
    viewport={{ once: true }}
    transition={{ 
      type: "spring",
      stiffness: 260,
      damping: 20
    }}
    className={`w-6 h-6 rounded-full flex items-center justify-center border ${
      type === "check" 
        ? "bg-gradient-to-br from-[#6B46FF] to-[#8B5CF6] border-white/20 shadow-[0_4px_12px_rgba(107,70,255,0.3)]" 
        : "bg-gray-50 border-gray-100"
    } ${className}`}
  >
    {type === "check" ? (
      <motion.svg 
        viewBox="0 0 24 24" 
        className="w-3.5 h-3.5 text-white"
        fill="none" 
        stroke="currentColor" 
        strokeWidth="4" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      >
        <motion.path 
          d="M20 6L9 17L4 12"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        />
      </motion.svg>
    ) : (
      <X className="w-3 h-3 text-gray-300" strokeWidth={3} />
    )}
  </motion.div>
);

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

        <div className="relative z-10 max-w-[90rem] mx-auto px-4 lg:px-4 text-center">
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
        <div className="max-w-[90rem] mx-auto px-4 lg:px-4">
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


                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${plan.popular ? 'bg-purple-100 text-purple-600' : 'bg-gray-100 text-gray-600'}`}>
                        <plan.icon className="w-5 h-5" />
                      </div>
                      {plan.badge && (
                        <div className={`px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-[0.1em] text-white ${plan.badgeColor === 'green' ? 'bg-emerald-500 shadow-sm' : 'bg-[#6B46FF] shadow-sm'}`}>
                          {plan.badge}
                        </div>
                      )}
                    </div>
                    <h3 className="text-[22px] font-bold tracking-tight mb-1 group-hover:text-purple-600 transition-colors text-gray-900 min-h-[48px] flex items-center">{plan.name}</h3>
                    <p className="text-[15px] font-semibold text-gray-500 leading-tight min-h-[60px]">{plan.desc}</p>
                  </div>

                  <div className="mb-4 flex-grow">
                    <div className="min-h-[50px] flex flex-col justify-center">
                      {plan.pricingLarge ? (
                        <div className="text-[28px] font-bold text-emerald-600 leading-tight">
                          {plan.pricingLarge}
                        </div>
                      ) : (
                        <div className="space-y-0.5">
                          <div className="text-[15px] font-bold tracking-wide text-gray-900">{plan.pricingLine1}</div>
                          <div className="text-[16px] font-semibold text-gray-400">{plan.pricingLine2}</div>
                        </div>
                      )}
                    </div>

                    <div className="mt-4 pt-4 border-t border-gray-100 space-y-3 min-h-[90px]">
                      <div className="text-[16px] font-bold flex items-center gap-3 text-gray-600">
                        <div className="p-2 rounded-lg bg-gray-50"><Clock className="w-4 h-4 text-purple-600" /></div> {plan.setup}
                      </div>
                      {plan.orgs ? (
                        <div className="text-[16px] font-bold flex items-center gap-3 text-gray-600">
                          <div className="p-2 rounded-lg bg-gray-50"><Globe className="w-4 h-4 text-blue-600" /></div> {plan.orgs}
                        </div>
                      ) : (
                        <div className="h-[40px]"></div>
                      )}
                    </div>

                    <ul className="mt-6 space-y-4 flex-grow">
                      {plan.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-4">
                          <div className="mt-1 flex-shrink-0">
                            <PremiumCheckmark type={feat.included ? "check" : "cross"} />
                          </div>
                          <span className={`text-[15px] font-bold ${feat.included ? 'text-gray-700' : 'text-gray-300 line-through decoration-gray-200'}`}>
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
        <div className="max-w-[90rem] mx-auto px-4 lg:px-4">
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
                              <PremiumCheckmark type="check" />
                            </div>
                          ) : (
                            <div className="flex justify-center">
                              <PremiumCheckmark type="cross" />
                            </div>
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





      {/* 5. Implementation Roadmap - with New 3D Visuals */}
      <section className="py-10 bg-[#fafbfe] relative">
        <div className="max-w-[90rem] mx-auto px-4 lg:px-4">
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
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center border border-purple-200/50 flex-shrink-0">
                    <Zap className="w-5 h-5 text-purple-600" />
                  </div>
                  <h4 className="text-[18px] font-bold tracking-tight text-gray-900">Startup Ready</h4>
                </div>
                <p className="text-gray-500 font-semibold text-[16px] leading-relaxed">
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
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center border border-blue-200/50 flex-shrink-0">
                    <Globe className="w-5 h-5 text-blue-600" />
                  </div>
                  <h4 className="text-[18px] font-bold tracking-tight text-gray-900">Enterprise Power</h4>
                </div>
                <p className="text-gray-500 font-semibold text-[16px] leading-relaxed">
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
                <div className="flex items-center gap-4 mb-3">
                  <item.icon className={`w-6 h-6 flex-shrink-0 ${item.color}`} />
                  <div>
                    <div className="text-[16px] font-bold text-gray-900 leading-tight">{item.time}</div>
                    <div className="text-[14px] font-bold text-gray-800">{item.title}</div>
                  </div>
                </div>
                <p className="text-[14px] text-gray-400 leading-relaxed font-semibold">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* CTA Banner */}
      <section className="py-10 bg-white relative">
        <div className="max-w-[90rem] mx-auto px-4 lg:px-4">
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
