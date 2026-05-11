import { useState } from "react";
import { motion } from "motion/react";
import { Mail, Lock, ArrowRight, UserCircle, CheckCircle2 } from "lucide-react";

export function UserAuthSection() {
  return (
    <section id="user-auth" className="min-h-[90vh] relative py-12 lg:py-24 bg-[#F8F9FF] flex items-center overflow-hidden">
      <div className="relative z-10 max-w-[90rem] mx-auto px-4 lg:px-12 w-full">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Side: Brand Message */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="hidden lg:block"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-100 shadow-sm mb-8">
              <UserCircle className="w-5 h-5 text-[#8B5CF6]" />
              <span className="text-[14px] font-black text-gray-900 uppercase tracking-[0.2em]">User Portal</span>
            </div>
            
            <h2 className="text-[64px] font-bold text-gray-900 leading-[1.05] mb-8 tracking-tight">
              Welcome to Your <br />
              <span className="text-[#8B5CF6]">HR Workspace.</span>
            </h2>
            
            <p className="text-[18px] text-gray-500 font-medium leading-relaxed mb-12 max-w-lg">
              Securely access your Fovestta™ employee dashboard to manage leaves, view payslips, and connect with your team.
            </p>

            <div className="space-y-6">
              {[
                "Access your digital payslips",
                "Apply for leaves instantly",
                "Update your profile details"
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-6 h-6 rounded-full bg-[#8B5CF6]/10 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-[#8B5CF6]"></div>
                  </div>
                  <span className="text-[17px] font-bold text-gray-700">{text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Side: Employee Sign In Card */}
          <div className="flex justify-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="w-full max-w-[500px] bg-white rounded-[32px] p-10 lg:p-14 shadow-[0_30px_80px_rgba(0,0,0,0.04)] border border-gray-50"
            >
              <h3 className="text-[36px] font-bold text-gray-900 mb-2">Employee Sign In</h3>
              <p className="text-[18px] text-gray-500 font-medium mb-10">Sign in to your Fovestta™ account</p>

              <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                {/* Email */}
                <div className="space-y-3">
                  <label className="block text-[14px] font-black text-gray-600 uppercase tracking-widest ml-1">
                    EMAIL <span className="text-red-500">*</span>
                  </label>
                  <div className="relative group">
                    <Mail className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-[#8B5CF6] transition-colors" />
                    <input 
                      type="email" 
                      placeholder="you@company.com" 
                      className="w-full pl-14 pr-6 py-4.5 bg-gray-50/50 border border-gray-200 rounded-2xl text-[16px] font-medium focus:bg-white focus:border-[#8B5CF6] outline-none transition-all" 
                    />
                  </div>
                </div>

                {/* Password */}
                <div className="space-y-3">
                  <div className="flex justify-between items-center px-1">
                    <label className="block text-[14px] font-black text-gray-600 uppercase tracking-widest">
                      PASSWORD <span className="text-red-500">*</span>
                    </label>
                    <button type="button" className="text-[14px] font-bold text-[#8B5CF6] hover:underline">Forgot?</button>
                  </div>
                  <div className="relative group">
                    <Lock className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-[#8B5CF6] transition-colors" />
                    <input 
                      type="password" 
                      placeholder="••••••••" 
                      className="w-full pl-14 pr-6 py-4.5 bg-gray-50/50 border border-gray-200 rounded-2xl text-[16px] font-medium focus:bg-white focus:border-[#8B5CF6] outline-none transition-all" 
                    />
                  </div>
                </div>

                <button className="w-full py-5 bg-[#8B5CF6] text-white text-[18px] font-bold rounded-2xl hover:bg-[#7C3AED] transition-all flex items-center justify-center gap-3 group mt-6">
                  Sign In
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>

              <div className="text-center mt-10">
                <p className="text-[16px] font-bold text-gray-400">
                  Don't have an account?{" "}
                  <button className="text-[#8B5CF6] hover:underline">Sign up</button>
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
