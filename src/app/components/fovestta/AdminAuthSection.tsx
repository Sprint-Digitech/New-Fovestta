import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Mail, Lock, Eye, EyeOff, ArrowRight, ShieldCheck } from "lucide-react";

export function AdminAuthSection() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <section id="admin-auth" className="relative py-8 lg:py-16 bg-[#F8F9FF] overflow-hidden scroll-mt-20">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[40%] bg-purple-100/50 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[40%] h-[40%] bg-blue-100/50 rounded-full blur-[100px]"></div>
      </div>

      <div className="relative z-10 w-full mx-auto px-6 lg:px-12 xl:px-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Branding/Value Prop */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="hidden lg:block"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-100 shadow-sm mb-8">
              <ShieldCheck className="w-5 h-5 text-[#8B5CF6]" />
              <span className="text-[20px] font-bold text-gray-900 uppercase tracking-widest">Admin Portal</span>
            </div>
            <h2 className="text-[48px] lg:text-[56px] font-bold text-gray-900 leading-[1.1] mb-8 tracking-tight">
              Manage Your Content <br />
              <span className="text-[#8B5CF6]">With Precision.</span>
            </h2>
            <p className="text-[20px] text-gray-500 font-medium leading-relaxed mb-10 max-w-md">
              Securely access your Fovestta™ administrative dashboard to manage blog posts, resources, and company updates.
            </p>
            
            <div className="space-y-6">
              {[
                "Advanced content management",
                "Secure multi-factor authentication",
                "Real-time analytics & reporting"
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-6 h-6 rounded-full bg-[#8B5CF6]/10 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-[#8B5CF6]"></div>
                  </div>
                  <span className="text-[20px] font-bold text-gray-700">{text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Auth Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="w-full max-w-[480px] bg-white rounded-[32px] p-8 lg:p-12 border border-gray-100 shadow-[0_20px_50px_rgba(0,0,0,0.04)] relative">
              
              <AnimatePresence mode="wait">
                {isLogin ? (
                  <motion.div
                    key="login"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="text-[32px] font-bold text-gray-900 mb-2">Blog Admin Login</h3>
                    <p className="text-[20px] text-gray-500 font-medium mb-10">Sign in to manage Fovestta™ blog posts</p>
                    
                    <form className="space-y-6">
                      <div className="space-y-2">
                        <label className="text-[20px] font-bold text-gray-900 uppercase tracking-wider ml-1">Email</label>
                        <div className="relative">
                          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <input type="email" placeholder="admin@fovestta.com" className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-transparent rounded-2xl text-[20px] focus:bg-white focus:border-purple-200 focus:ring-4 focus:ring-purple-50 outline-none transition-all" />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex justify-between items-center ml-1">
                          <label className="text-[20px] font-bold text-gray-900 uppercase tracking-wider">Password</label>
                          <button type="button" className="text-[20px] font-bold text-[#8B5CF6] hover:underline">Forgot?</button>
                        </div>
                        <div className="relative">
                          <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <input type="password" placeholder="••••••••" className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-transparent rounded-2xl text-[20px] focus:bg-white focus:border-purple-200 focus:ring-4 focus:ring-purple-50 outline-none transition-all" />
                        </div>
                      </div>

                      <button type="button" className="w-full py-5 bg-[#8B5CF6] text-white text-[20px] font-bold rounded-2xl hover:bg-[#7C3AED] transition-all shadow-xl shadow-purple-100 flex items-center justify-center gap-2 group">
                        Sign In
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </form>
                    
                    <p className="text-center text-[20px] font-medium text-gray-500 mt-8">
                      Don't have an account?{" "}
                      <button onClick={() => setIsLogin(false)} className="text-[#8B5CF6] font-bold hover:underline">Sign up</button>
                    </p>
                  </motion.div>
                ) : (
                  <motion.div
                    key="signup"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="text-[32px] font-bold text-gray-900 mb-2">Create Admin Account</h3>
                    <p className="text-[20px] text-gray-500 font-medium mb-10">Sign up to manage Fovestta™ blog posts</p>
                    
                    <form className="space-y-6">
                      <div className="space-y-2">
                        <label className="text-[20px] font-bold text-gray-900 uppercase tracking-wider ml-1">Email</label>
                        <div className="relative">
                          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <input type="email" placeholder="admin@fovestta.com" className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-transparent rounded-2xl text-[20px] focus:bg-white focus:border-purple-200 focus:ring-4 focus:ring-purple-50 outline-none transition-all" />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <label className="text-[20px] font-bold text-gray-900 uppercase tracking-wider ml-1">Password</label>
                        <div className="relative">
                          <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <input type="password" placeholder="At least 8 characters" className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-transparent rounded-2xl text-[20px] focus:bg-white focus:border-purple-200 focus:ring-4 focus:ring-purple-50 outline-none transition-all" />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-[20px] font-bold text-gray-900 uppercase tracking-wider ml-1">Confirm Password</label>
                        <div className="relative">
                          <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <input type="password" placeholder="Confirm your password" className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-transparent rounded-2xl text-[20px] focus:bg-white focus:border-purple-200 focus:ring-4 focus:ring-purple-50 outline-none transition-all" />
                        </div>
                      </div>

                      <button type="button" className="w-full py-5 bg-[#8B5CF6] text-white text-[20px] font-bold rounded-2xl hover:bg-[#7C3AED] transition-all shadow-xl shadow-purple-100 flex items-center justify-center gap-2 group">
                        Sign Up
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </form>
                    
                    <p className="text-center text-[20px] font-medium text-gray-500 mt-8">
                      Already have an account?{" "}
                      <button onClick={() => setIsLogin(true)} className="text-[#8B5CF6] font-bold hover:underline">Sign in</button>
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
