import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [toolsOpen, setToolsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-200/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg"></div>
            <span className="text-xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Fovestta
            </span>
            <span className="text-xs text-gray-500">HR SOFTWARE</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <a href="#features" className="text-gray-700 hover:text-[#7C3AED] transition-colors">
              Features
            </a>
            <a href="#solutions" className="text-gray-700 hover:text-[#7C3AED] transition-colors">
              Solutions
            </a>
            <a href="#success-stories" className="text-gray-700 hover:text-[#7C3AED] transition-colors">
              Success Stories
            </a>
            <a href="#resources" className="text-gray-700 hover:text-[#7C3AED] transition-colors">
              Resources
            </a>
            <a href="#demo" className="text-gray-700 hover:text-[#7C3AED] transition-colors">
              Demo
            </a>
            <a href="#pricing" className="text-gray-700 hover:text-[#7C3AED] transition-colors">
              Pricing
            </a>
            <a href="#support" className="text-gray-700 hover:text-[#7C3AED] transition-colors">
              Support
            </a>

            {/* Tools Dropdown */}
            <div className="relative">
              <button
                onClick={() => setToolsOpen(!toolsOpen)}
                className="flex items-center gap-1 text-gray-700 hover:text-[#7C3AED] transition-colors"
              >
                Tools
                <ChevronDown className="w-4 h-4" />
              </button>
              {toolsOpen && (
                <div className="absolute top-full right-0 mt-2 w-56 bg-white/95 backdrop-blur-xl border border-gray-200 rounded-xl shadow-lg py-2">
                  <a href="#payroll-checklist" className="block px-4 py-2 text-gray-700 hover:bg-purple-50 hover:text-[#7C3AED] transition-colors">
                    Payroll Checklist
                  </a>
                  <a href="#cost-calculator" className="block px-4 py-2 text-gray-700 hover:bg-purple-50 hover:text-[#7C3AED] transition-colors">
                    Cost Calculator
                  </a>
                  <a href="#compliance-scorecard" className="block px-4 py-2 text-gray-700 hover:bg-purple-50 hover:text-[#7C3AED] transition-colors">
                    Compliance Scorecard
                  </a>
                </div>
              )}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <button className="px-6 py-2.5 bg-[#7C3AED] text-white rounded-lg hover:bg-[#6D28D9] transition-all duration-300 shadow-lg shadow-purple-500/30 hover:shadow-xl hover:shadow-purple-500/40 hover:-translate-y-0.5">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col gap-4">
              <a href="#features" className="text-gray-700 hover:text-[#7C3AED]">Features</a>
              <a href="#solutions" className="text-gray-700 hover:text-[#7C3AED]">Solutions</a>
              <a href="#success-stories" className="text-gray-700 hover:text-[#7C3AED]">Success Stories</a>
              <a href="#resources" className="text-gray-700 hover:text-[#7C3AED]">Resources</a>
              <a href="#demo" className="text-gray-700 hover:text-[#7C3AED]">Demo</a>
              <a href="#pricing" className="text-gray-700 hover:text-[#7C3AED]">Pricing</a>
              <a href="#support" className="text-gray-700 hover:text-[#7C3AED]">Support</a>
              <button className="w-full px-6 py-2.5 bg-[#7C3AED] text-white rounded-lg">
                Get Started
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
