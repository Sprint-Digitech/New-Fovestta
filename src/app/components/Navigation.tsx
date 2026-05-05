import { useState } from "react";
import { motion } from "motion/react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Logo } from "./Logo";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Features", href: "#features" },
    { name: "Solutions", href: "#solutions" },
    { name: "Success Stories", href: "#stories" },
    { name: "Resources", href: "#resources" },
    { name: "Pricing", href: "#pricing" },
  ];

  return (
    <nav className="absolute top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between py-6">
          {/* Logo */}
          <Logo />

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[15px] font-medium text-brand-text hover:text-brand-purple transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-8">
            <a href="#contact" className="text-[15px] font-medium text-brand-text hover:text-brand-purple transition-colors">
              Contact
            </a>
            <button className="flex items-center gap-2 px-6 py-3 bg-brand-purple text-white text-[15px] font-semibold rounded-full shadow-lg shadow-brand-purple/20 hover:bg-brand-purple/90 transition-all duration-300">
              Book Free Demo
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isOpen ? <X className="w-6 h-6 text-brand-text" /> : <Menu className="w-6 h-6 text-brand-text" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-2xl border-t border-gray-100 py-6 px-6"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-lg font-medium text-brand-text hover:text-brand-purple"
                >
                  {link.name}
                </a>
              ))}
              <hr className="border-gray-100" />
              <a href="#contact" className="text-lg font-medium text-brand-text">
                Contact
              </a>
              <button className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-brand-purple text-white font-semibold rounded-xl">
                Book Free Demo
                <ArrowUpRight className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
}
