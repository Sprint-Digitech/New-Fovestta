import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useLocation } from "react-router-dom";
import { Check, CreditCard, Shield, Zap, ArrowRight, Lock, Calendar, Asterisk } from "lucide-react";
import { PremiumBackground } from "./PremiumBackground";

const plansData: Record<string, any> = {
  "essential-edge": {
    name: "Essential Edge",
    price: 140,
    period: "emp/month",
    features: [
      "Automate Payroll",
      "Employee Self-Service",
      "Stay Compliant With Taxes",
      "LOP and LGP Reversal",
      "Email Support"
    ]
  },
  "growth-catalyst": {
    name: "Growth Catalyst",
    price: 200,
    period: "emp/month",
    features: [
      "All Essential Edge Features",
      "Streamline Hiring",
      "Stay Updated With Labor Laws",
      "Employee Loans/Advances",
      "Phone Support"
    ]
  },
  "enterprise-infinity": {
    name: "Enterprise Infinity",
    price: 250,
    period: "emp/month",
    features: [
      "All Growth Catalyst Features",
      "Workforce Rewards",
      "Salary Revision Approvals",
      "Dedicated Account Manager",
      "Priority Support"
    ]
  },
  "startup-elevate": {
    name: "Startup Elevate",
    price: 0,
    period: "for 3 years",
    features: [
      "All Growth Catalyst Features",
      "Free Payroll Processing",
      "Talent Management",
      "Priority Support",
      "Instant Setup"
    ]
  }
};

export function CheckoutPage() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const planId = searchParams.get("plan") || "growth-catalyst";
  const [selectedPlan, setSelectedPlan] = useState<any>(plansData[planId] || plansData["growth-catalyst"]);
  const [employeeCount, setEmployeeCount] = useState(50);
  
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    expiry: "",
    cvc: ""
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    if (plansData[planId]) {
      setSelectedPlan(plansData[planId]);
    }
  }, [planId]);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (planId === 'startup-elevate') return true;

    if (!formData.name.trim()) newErrors.name = "Cardholder name is required";
    if (!formData.number.trim()) {
      newErrors.number = "Card number is required";
    } else if (!/^\d{16}$/.test(formData.number.replace(/\s/g, ''))) {
      newErrors.number = "Enter a valid 16-digit card number";
    }
    
    if (!formData.expiry.trim()) {
      newErrors.expiry = "Expiry date is required";
    } else if (!/^\d{2}\/\d{2}$/.test(formData.expiry)) {
      newErrors.expiry = "Use MM/YY format";
    }

    if (!formData.cvc.trim()) {
      newErrors.cvc = "CVC is required";
    } else if (!/^\d{3,4}$/.test(formData.cvc)) {
      newErrors.cvc = "Invalid CVC";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
        setShowSuccess(true);
      }, 2000);
    }
  };

  return (
    <div className="min-h-screen bg-[#fafbfe] pt-32 pb-20 relative overflow-hidden">
      <PremiumBackground variant="luxury" />
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <AnimatePresence mode="wait">
          {!showSuccess ? (
            <motion.div 
              key="checkout-form"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="grid lg:grid-cols-12 gap-12"
            >
              {/* Left Column: Checkout Details */}
              <div className="lg:col-span-7">
                <div className="bg-white/70 backdrop-blur-xl rounded-[32px] p-8 md:p-12 border border-white shadow-2xl shadow-purple-200/50">
                  <h1 className="text-3xl font-black text-gray-900 mb-8 flex items-center gap-3">
                    <Shield className="w-8 h-8 text-[#6B46FF]" />
                    Complete Your Setup
                  </h1>

                  {/* Step 1: Trial Period */}
                  <div className="mb-10 p-6 bg-purple-50 rounded-2xl border border-purple-100 flex items-center gap-6">
                    <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center shadow-sm">
                      <Calendar className="w-7 h-7 text-[#6B46FF]" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-lg">14-Day Free Trial</h3>
                      <p className="text-purple-600 font-medium">Your subscription starts today for ₹0.00</p>
                    </div>
                    <div className="ml-auto hidden sm:block">
                      <span className="px-3 py-1 bg-white text-[#6B46FF] text-xs font-bold rounded-full border border-purple-100 uppercase">Active</span>
                    </div>
                  </div>

                  {/* Step 1.5: Employee Count Adjustment */}
                  <div className="mb-10 p-8 bg-gray-50 rounded-[24px] border border-gray-100">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="font-bold text-gray-900 text-lg">Number of Employees</h3>
                      <div className="px-4 py-2 bg-white rounded-xl border border-purple-100 shadow-sm text-[#6B46FF] font-black text-xl">
                        {employeeCount}
                      </div>
                    </div>
                    <input 
                      type="range" 
                      min="1" 
                      max="500" 
                      value={employeeCount} 
                      onChange={(e) => setEmployeeCount(parseInt(e.target.value))}
                      className="w-full h-2 bg-purple-100 rounded-lg appearance-none cursor-pointer accent-[#6B46FF]"
                    />
                    <div className="flex justify-between mt-3 text-xs font-bold text-gray-400 uppercase tracking-widest">
                      <span>1 Employee</span>
                      <span>500 Employees</span>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <h3 className="text-xl font-bold text-gray-900">Payment Details</h3>
                    <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className={`text-[12px] font-black uppercase tracking-[0.2em] flex items-center gap-1 ${errors.name ? 'text-red-500' : 'text-gray-400'}`}>
                          Cardholder Name
                          {planId !== 'startup-elevate' && <Asterisk className="w-3 h-3 text-red-500" />}
                        </label>
                        <input 
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          type="text" placeholder="John Doe" 
                          className={`w-full px-6 py-4 rounded-xl border focus:outline-none focus:ring-4 transition-all bg-white/50 ${errors.name ? 'border-red-300 focus:ring-red-50' : 'border-gray-200 focus:ring-purple-50 focus:border-[#6B46FF]'}`} 
                        />
                        {errors.name && <p className="text-xs font-bold text-red-500">{errors.name}</p>}
                      </div>

                      <div className="space-y-2">
                        <label className={`text-[12px] font-black uppercase tracking-[0.2em] flex items-center gap-1 ${errors.number ? 'text-red-500' : 'text-gray-400'}`}>
                          Card Number
                          {planId !== 'startup-elevate' && <Asterisk className="w-3 h-3 text-red-500" />}
                        </label>
                        <div className="relative">
                          <input 
                            value={formData.number}
                            onChange={(e) => setFormData({...formData, number: e.target.value})}
                            type="text" placeholder="0000 0000 0000 0000" 
                            className={`w-full px-6 py-4 rounded-xl border focus:outline-none focus:ring-4 transition-all bg-white/50 ${errors.number ? 'border-red-300 focus:ring-red-50' : 'border-gray-200 focus:ring-purple-50 focus:border-[#6B46FF]'}`} 
                          />
                          <CreditCard className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        </div>
                        {errors.number && <p className="text-xs font-bold text-red-500">{errors.number}</p>}
                      </div>

                      <div className="space-y-2">
                        <label className={`text-[12px] font-black uppercase tracking-[0.2em] flex items-center gap-1 ${errors.expiry ? 'text-red-500' : 'text-gray-400'}`}>
                          Expiry Date
                          {planId !== 'startup-elevate' && <Asterisk className="w-3 h-3 text-red-500" />}
                        </label>
                        <input 
                          value={formData.expiry}
                          onChange={(e) => setFormData({...formData, expiry: e.target.value})}
                          type="text" placeholder="MM / YY" 
                          className={`w-full px-6 py-4 rounded-xl border focus:outline-none focus:ring-4 transition-all bg-white/50 ${errors.expiry ? 'border-red-300 focus:ring-red-50' : 'border-gray-200 focus:ring-purple-50 focus:border-[#6B46FF]'}`} 
                        />
                        {errors.expiry && <p className="text-xs font-bold text-red-500">{errors.expiry}</p>}
                      </div>

                      <div className="space-y-2">
                        <label className={`text-[12px] font-black uppercase tracking-[0.2em] flex items-center gap-1 ${errors.cvc ? 'text-red-500' : 'text-gray-400'}`}>
                          CVC / CVV
                          {planId !== 'startup-elevate' && <Asterisk className="w-3 h-3 text-red-500" />}
                        </label>
                        <div className="relative">
                          <input 
                            value={formData.cvc}
                            onChange={(e) => setFormData({...formData, cvc: e.target.value})}
                            type="text" placeholder="123" 
                            className={`w-full px-6 py-4 rounded-xl border focus:outline-none focus:ring-4 transition-all bg-white/50 ${errors.cvc ? 'border-red-300 focus:ring-red-50' : 'border-gray-200 focus:ring-purple-50 focus:border-[#6B46FF]'}`} 
                          />
                          <Lock className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        </div>
                        {errors.cvc && <p className="text-xs font-bold text-red-500">{errors.cvc}</p>}
                      </div>

                      <div className="col-span-1 md:col-span-2 pt-4">
                        <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100 mb-8">
                          <Lock className="w-4 h-4 text-gray-400" />
                          <p className="text-sm text-gray-500 font-medium">Your payment information is encrypted and secure.</p>
                        </div>

                        <button 
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full py-5 bg-[#6B46FF] text-white font-black text-xl rounded-2xl shadow-[0_20px_40px_-10px_rgba(107,70,255,0.4)] hover:scale-[1.02] active:scale-100 transition-all flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed"
                        >
                          {isSubmitting ? "Processing..." : "Start My Free Trial"}
                          {!isSubmitting && <ArrowRight className="w-6 h-6" />}
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>

              {/* Right Column: Order Summary */}
              <div className="lg:col-span-5">
                <div className="sticky top-32 space-y-8">
                  <div className="bg-white rounded-[32px] p-8 border border-gray-100 shadow-xl shadow-gray-200/40">
                    <h3 className="text-xl font-bold text-gray-900 mb-6">Plan Summary</h3>
                    
                    <div className="flex items-center justify-between mb-8">
                      <div>
                        <h4 className="text-2xl font-black text-[#6B46FF]">{selectedPlan?.name}</h4>
                        <p className="text-gray-500 text-sm">Standard Tier</p>
                      </div>
                      <div className="text-right">
                        <span className="text-3xl font-black text-gray-900">₹{selectedPlan?.price}</span>
                        <p className="text-gray-400 text-sm">/emp/mo</p>
                      </div>
                    </div>

                    <div className="p-4 bg-purple-50/50 rounded-2xl border border-purple-100/50 mb-8">
                      <div className="flex justify-between items-center text-sm font-bold text-purple-600 uppercase tracking-wider mb-2">
                        <span>Billing for</span>
                        <span>{employeeCount} Employees</span>
                      </div>
                    </div>

                    <ul className="space-y-4 mb-8">
                      {selectedPlan?.features.map((feature: string, idx: number) => (
                        <li key={idx} className="flex items-center gap-3 text-gray-600 font-medium">
                          <div className="w-5 h-5 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                            <Check className="w-3 h-3 text-[#6B46FF]" />
                          </div>
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <div className="border-t border-gray-100 pt-6 space-y-4">
                      <div className="flex justify-between text-gray-600 font-medium">
                        <span>Base Rate (₹{selectedPlan?.price} x {employeeCount})</span>
                        <span>₹{(selectedPlan?.price * employeeCount).toLocaleString()}.00</span>
                      </div>
                      <div className="flex justify-between text-green-600 font-bold">
                        <span>Due Today (Trial)</span>
                        <span>₹0.00</span>
                      </div>
                      <div className="flex justify-between text-gray-900 font-black text-xl pt-2 border-t border-gray-50 mt-2">
                        <span>Total after trial</span>
                        <span>₹{(selectedPlan?.price * employeeCount).toLocaleString()}.00</span>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-6 bg-white rounded-3xl border border-gray-100 text-center flex flex-col items-center gap-3">
                      <Shield className="w-8 h-8 text-green-500" />
                      <p className="text-sm font-bold text-gray-600 uppercase tracking-tighter leading-tight">ISO 27001 Certified</p>
                    </div>
                    <div className="p-6 bg-white rounded-3xl border border-gray-100 text-center flex flex-col items-center gap-3">
                      <Zap className="w-8 h-8 text-yellow-500" />
                      <p className="text-sm font-bold text-gray-600 uppercase tracking-tighter leading-tight">Instant Activation</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div 
              key="success-screen"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white rounded-[40px] p-16 text-center shadow-2xl border border-white"
            >
              <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8">
                <Check className="w-12 h-12" strokeWidth={3} />
              </div>
              <h2 className="text-4xl font-black text-gray-900 mb-6">Subscription Started!</h2>
              <p className="text-gray-500 font-medium text-xl max-w-xl mx-auto mb-10">
                Your 14-day free trial for <strong>{selectedPlan?.name}</strong> has been successfully activated.
              </p>
              <button onClick={() => window.location.href = "/"} className="px-12 py-5 bg-[#6B46FF] text-white font-bold rounded-2xl shadow-lg hover:scale-105 transition-all">
                Go to Dashboard
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
