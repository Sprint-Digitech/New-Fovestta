import { Link } from "react-router-dom";
import { Logo } from "./Logo";
import { 
  Mail, Phone, MapPin, Linkedin, 
  Youtube, Github, ArrowUpRight 
} from "lucide-react";
import { motion } from "motion/react";

export function Footer() {
  return (
    <footer className="relative bg-[#FFF6F9] text-[#4C1D95] border-t border-[#FCE7F3] pt-10 pb-6 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-[#8B5CF6]/30 to-transparent"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#8B5CF6]/5 rounded-full blur-[120px] -mr-48 -mb-48"></div>
      
      <div className="relative z-10 max-w-[90rem] mx-auto px-4 lg:px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-8 mb-6">
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <div className="mb-3">
              <Logo />
            </div>
            <p className="text-[15px] text-[#4C1D95]/80 font-medium mb-4 max-w-sm leading-relaxed">
              Empowering organizations with next-generation HR & Payroll intelligence. Seamless, compliant, and built for growth.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-start gap-4 group">
                <div className="p-2.5 rounded-xl bg-white border border-[#FCE7F3] text-[#8B5CF6] group-hover:bg-[#8B5CF6] group-hover:text-white transition-all duration-300 shadow-sm">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-[14px] font-black text-[#4C1D95]/40 uppercase tracking-widest mb-1">Headquarters</span>
                  <p className="text-[16px] font-bold text-[#4C1D95]">F-111, 2nd floor, Sector 8, Noida, U.P.-201301</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 group">
                <div className="p-2.5 rounded-xl bg-white border border-[#FCE7F3] text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300 shadow-sm">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-[14px] font-black text-[#4C1D95]/40 uppercase tracking-widest mb-1">Email Us</span>
                  <a href="mailto:info@fovestta.com" className="text-[16px] font-bold text-[#4C1D95] hover:text-[#8B5CF6] transition-colors">info@fovestta.com</a>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="p-2.5 rounded-xl bg-white border border-[#FCE7F3] text-emerald-500 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300 shadow-sm">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-[14px] font-black text-[#4C1D95]/40 uppercase tracking-widest mb-1">Call Support</span>
                  <a href="tel:+919599342525" className="text-[16px] font-bold text-[#4C1D95] hover:text-[#8B5CF6] transition-colors">+91-9599-34-2525</a>
                </div>
              </div>
            </div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* Product Column */}
            <div>
              <h4 className="text-[12px] font-black text-[#4C1D95] uppercase tracking-[0.2em] mb-3">Product</h4>
              <ul className="space-y-2">
                <li><FooterLink to="/#features">Features</FooterLink></li>
                <li><FooterLink to="/#pricing">Pricing</FooterLink></li>
                <li><FooterLink to="/#resources">Security</FooterLink></li>
              </ul>
            </div>

            {/* Company Column */}
            <div>
              <h4 className="text-[12px] font-black text-[#4C1D95] uppercase tracking-[0.2em] mb-3">Company</h4>
              <ul className="space-y-2">
                <li><FooterLink to="/">About</FooterLink></li>
                <li><FooterLink to="/blog">Blog</FooterLink></li>
                <li><FooterLink to="/#careers">Careers</FooterLink></li>
                <li><FooterLink to="/#contact">Contact</FooterLink></li>
              </ul>
            </div>

            {/* Resources Column */}
            <div>
              <h4 className="text-[12px] font-black text-[#4C1D95] uppercase tracking-[0.2em] mb-3">Resources</h4>
              <ul className="space-y-2">
                <li><FooterLink to="/#resources">Documentation</FooterLink></li>
                <li><FooterLink to="/#api">API Reference</FooterLink></li>
                <li><FooterLink to="/">Status</FooterLink></li>
                <li><FooterLink to="/#support">Support</FooterLink></li>
              </ul>
            </div>

            {/* Legal Column */}
            <div>
              <h4 className="text-[12px] font-black text-[#4C1D95] uppercase tracking-[0.2em] mb-3">Legal</h4>
              <ul className="space-y-2">
                <li><FooterLink to="/privacy">Privacy</FooterLink></li>
                <li><FooterLink to="/terms">Terms</FooterLink></li>
                <li><FooterLink to="/cookie-policy">Cookie Policy</FooterLink></li>
                <li><FooterLink to="/compliance">Compliance</FooterLink></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-4 border-t border-[#FCE7F3] flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <p className="text-[15px] font-bold text-[#4C1D95]/60">
              © 2026 Fovestta™. Built with precision in India.
            </p>
            <div className="flex gap-6">
              <Link to="/terms" className="text-[13px] font-bold text-[#4C1D95]/40 hover:text-[#8B5CF6] transition-colors uppercase tracking-widest">Terms</Link>
              <Link to="/privacy" className="text-[13px] font-bold text-[#4C1D95]/40 hover:text-[#8B5CF6] transition-colors uppercase tracking-widest">Privacy</Link>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <SocialLink href="https://www.linkedin.com/company/fovesttahrmssolution/" icon={Linkedin} />
            <SocialLink href="https://www.youtube.com/channel/UCw8feE-iKyZfvWC5JUnWO9A" icon={Youtube} />
            <SocialLink href="https://github.com/fovestta" icon={Github} />
          </div>
        </div>
      </div>
    </footer>
  );
}

const FooterLink = ({ to, children }: { to: string, children: React.ReactNode }) => (
  <Link 
    to={to} 
    className="group flex items-center gap-1 text-[16px] font-bold text-[#4C1D95]/60 hover:text-[#8B5CF6] transition-all duration-300"
  >
    {children}
    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
  </Link>
);

const SocialLink = ({ href, icon: Icon }: { href: string, icon: any }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ y: -4 }}
    whileTap={{ scale: 0.9 }}
    className="p-3 rounded-xl bg-white border border-[#FCE7F3] text-[#4C1D95]/40 hover:bg-[#8B5CF6] hover:text-white hover:border-[#8B5CF6] transition-all duration-300 shadow-sm cursor-pointer inline-flex"
  >
    <Icon className="w-5 h-5" />
  </motion.a>
);
