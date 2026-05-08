import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowUpRight, ChevronDown } from "lucide-react";
import { Logo } from "./Logo";

export function PremiumNav() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Features", to: "/#features" },
    { name: "Solutions", to: "/#solutions" },
    { name: "Success Stories", to: "/#success-stories" },
    { name: "Resources", to: "/#resources" },
    { name: "Demo", to: "/request-demo" },
    { name: "Pricing", to: "/#pricing" },
    { name: "Support", to: "/#support" },
  ];

  // Effect to handle scroll when hash is present in URL
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.substring(1);
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location]);

  return (
    <nav className="fixed top-4 left-0 right-0 z-50 px-3 lg:px-8">
      <div className="max-w-[1400px] mx-auto bg-gray-100/70 backdrop-blur-md border border-gray-200/50 shadow-sm rounded-full px-5 lg:px-7">
        <div className="grid grid-cols-[auto_1fr_auto] items-center gap-4 py-3">
          {/* Logo - Left */}
          <div className="flex-shrink-0">
            <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <Logo />
            </Link>
          </div>

          {/* Navigation Links - Centered */}
          <div className="hidden lg:flex items-center justify-center gap-4 xl:gap-6 min-w-0">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                className="whitespace-nowrap text-[12px] xl:text-[13px] font-bold text-gray-900 hover:text-[#6B46FF] transition-colors uppercase tracking-[0.12em] leading-none"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA & Tools - Right */}
          <div className="hidden lg:flex items-center gap-4 xl:gap-6 flex-shrink-0 justify-self-end">
            <div className="relative group">
              <button className="flex items-center gap-1 text-[13px] xl:text-[14px] font-bold text-[#8B5CF6] hover:text-[#7C3AED] transition-colors py-2 leading-none whitespace-nowrap">
                Tools
                <ChevronDown className="w-4 h-4" />
              </button>

              {/* Dropdown Menu */}
              <div className="absolute top-full right-0 mt-2 w-[220px] bg-white rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-2">
                <Link to="/payroll-checklist" className="block px-5 py-3 text-[18px] font-medium text-gray-900 hover:bg-purple-50 hover:text-[#8B5CF6] transition-colors">
                  Payroll Checklist
                </Link>
                <Link to="/payroll-calculator" className="block px-5 py-3 text-[18px] font-medium text-gray-900 hover:bg-purple-50 hover:text-[#8B5CF6] transition-colors">
                  Cost Calculator
                </Link>
                <Link to="/compliance-scorecard" className="block px-5 py-3 text-[18px] font-medium text-gray-900 hover:bg-purple-50 hover:text-[#8B5CF6] transition-colors">
                  Compliance Scorecard
                </Link>
              </div>
            </div>

            <Link to="/user-auth" className="px-5 xl:px-6 py-2.5 bg-[#8B5CF6] text-white text-[13px] xl:text-[14px] font-bold rounded-xl hover:bg-[#7C3AED] transition-all duration-300 flex items-center gap-2 shadow-lg shadow-purple-100 whitespace-nowrap">
              Get Started
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors">
            {isOpen ? <X className="w-6 h-6 text-gray-900" /> : <Menu className="w-6 h-6 text-gray-900" />}
          </button>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="lg:hidden absolute top-full left-4 right-4 bg-white shadow-xl border border-gray-100 py-6 px-6 rounded-2xl"
            >
              <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.to}
                    onClick={() => setIsOpen(false)}
                    className="text-[15px] font-bold text-gray-900"
                  >
                    {link.name}
                  </Link>
                ))}
                <hr className="border-gray-100" />
                <Link to="/user-auth" onClick={() => setIsOpen(false)} className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-[#8B5CF6] text-white text-[15px] font-bold rounded-xl text-center shadow-lg shadow-purple-100">
                  Get Started
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
