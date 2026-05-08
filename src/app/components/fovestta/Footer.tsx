import { Link } from "react-router-dom";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="relative bg-[#FFF6F9] text-[#4C1D95] border-t border-[#FCE7F3]">
      <div className="max-w-7xl mx-auto px-4 lg:px-10 py-10">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-7 gap-8 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <Logo />
            </div>
            <p className="text-[18px] text-[#4C1D95] font-medium mb-6 max-w-[200px] leading-relaxed">
              Modern HR & Payroll for growing businesses.
            </p>
            
            <div className="space-y-6 text-[18px] font-medium text-[#4C1D95]">
              <div>
                <strong className="block font-bold mb-1 text-gray-900">Address</strong>
                F-111, 2nd floor, Sector 8,<br />
                Noida, U.P.-201301
              </div>
              
              <div>
                <strong className="block font-bold mb-1 text-gray-900">Contact</strong>
                <a href="mailto:info@fovestta.com" className="block hover:text-[#8B5CF6] transition-colors">info@fovestta.com</a>
                <a href="tel:+919599342525" className="block hover:text-[#8B5CF6] transition-colors">+91-9599-34-2525</a>
              </div>
            </div>
          </div>

          {/* Product Column */}
          <div>
            <h4 className="text-[16px] font-bold text-gray-900 mb-6">Product</h4>
            <ul className="space-y-4 text-[18px] font-medium">
              <li><Link to="/#features" className="hover:text-[#8B5CF6] transition-colors">Features</Link></li>
              <li><Link to="/#pricing" className="hover:text-[#8B5CF6] transition-colors">Pricing</Link></li>
              <li><Link to="/#resources" className="hover:text-[#8B5CF6] transition-colors">Security</Link></li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="text-[16px] font-bold text-gray-900 mb-6">Company</h4>
            <ul className="space-y-4 text-[18px] font-medium">
              <li><Link to="/" className="hover:text-[#8B5CF6] transition-colors">About</Link></li>
              <li><Link to="/blog" className="hover:text-[#8B5CF6] transition-colors">Blog</Link></li>
              <li><Link to="/#careers" className="hover:text-[#8B5CF6] transition-colors">Careers</Link></li>
              <li><Link to="/#contact" className="hover:text-[#8B5CF6] transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h4 className="text-[16px] font-bold text-gray-900 mb-6">Resources</h4>
            <ul className="space-y-4 text-[18px] font-medium">
              <li><Link to="/#resources" className="hover:text-[#8B5CF6] transition-colors">Documentation</Link></li>
              <li><Link to="/#api" className="hover:text-[#8B5CF6] transition-colors">API Reference</Link></li>
              <li><Link to="/" className="hover:text-[#8B5CF6] transition-colors">Status</Link></li>
              <li><Link to="/#support" className="hover:text-[#8B5CF6] transition-colors">Support</Link></li>
            </ul>
          </div>

          {/* Tools Column */}
          <div>
            <h4 className="text-[16px] font-bold text-gray-900 mb-6">Tools</h4>
            <ul className="space-y-4 text-[18px] font-medium">
              <li><Link to="/payroll-checklist" className="hover:text-[#8B5CF6] transition-colors">Payroll Checklist</Link></li>
              <li><Link to="/payroll-calculator" className="hover:text-[#8B5CF6] transition-colors">Cost Calculator</Link></li>
              <li><Link to="/compliance-scorecard" className="hover:text-[#8B5CF6] transition-colors">Compliance Scorecard</Link></li>
              <li><Link to="/admin-auth" className="hover:text-[#8B5CF6] transition-colors">Admin Leads</Link></li>
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h4 className="text-[16px] font-bold text-gray-900 mb-6">Legal</h4>
            <ul className="space-y-4 text-[18px] font-medium">
              <li><Link to="/privacy" className="hover:text-[#8B5CF6] transition-colors">Privacy</Link></li>
              <li><Link to="/terms" className="hover:text-[#8B5CF6] transition-colors">Terms</Link></li>
              <li><Link to="/cookie-policy" className="hover:text-[#8B5CF6] transition-colors">Cookie Policy</Link></li>
              <li><Link to="/compliance" className="hover:text-[#8B5CF6] transition-colors">Compliance</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#FCE7F3] flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[18px] font-medium text-[#4C1D95]">
            © 2026 Fovestta™. All rights reserved.
          </p>
          <div className="flex gap-6 text-[18px] font-medium text-[#4C1D95]">
            <a href="#" className="hover:text-[#8B5CF6] transition-colors">Twitter</a>
            <a href="#" className="hover:text-[#8B5CF6] transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-[#8B5CF6] transition-colors">YouTube</a>
            <a href="#" className="hover:text-[#8B5CF6] transition-colors">GitHub</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
