import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="relative bg-[#FFF6F9] text-[#4C1D95] border-t border-[#FCE7F3]">
      <div className="max-w-[1200px] mx-auto px-6 py-12">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-7 gap-8 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <Logo />
            </div>
            <p className="text-[14px] text-[#4C1D95] font-medium mb-6 max-w-[200px] leading-relaxed">
              Modern HR & Payroll for growing businesses.
            </p>
            
            <div className="space-y-6 text-[14px] font-medium text-[#4C1D95]">
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
            <h4 className="text-[15px] font-bold text-gray-900 mb-6">Product</h4>
            <ul className="space-y-4 text-[14px] font-medium">
              <li><a href="#features" className="hover:text-[#8B5CF6] transition-colors">Features</a></li>
              <li><a href="#pricing" className="hover:text-[#8B5CF6] transition-colors">Pricing</a></li>
              <li><a href="#security" className="hover:text-[#8B5CF6] transition-colors">Security</a></li>
              <li><a href="#roadmap" className="hover:text-[#8B5CF6] transition-colors">Roadmap</a></li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="text-[15px] font-bold text-gray-900 mb-6">Company</h4>
            <ul className="space-y-4 text-[14px] font-medium">
              <li><a href="#about" className="hover:text-[#8B5CF6] transition-colors">About</a></li>
              <li><a href="#blog" className="hover:text-[#8B5CF6] transition-colors">Blog</a></li>
              <li><a href="#careers" className="hover:text-[#8B5CF6] transition-colors">Careers</a></li>
              <li><a href="#contact" className="hover:text-[#8B5CF6] transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h4 className="text-[15px] font-bold text-gray-900 mb-6">Resources</h4>
            <ul className="space-y-4 text-[14px] font-medium">
              <li><a href="#documentation" className="hover:text-[#8B5CF6] transition-colors">Documentation</a></li>
              <li><a href="#api" className="hover:text-[#8B5CF6] transition-colors">API Reference</a></li>
              <li><a href="#status" className="hover:text-[#8B5CF6] transition-colors">Status</a></li>
              <li><a href="#support" className="hover:text-[#8B5CF6] transition-colors">Support</a></li>
            </ul>
          </div>

          {/* Tools Column */}
          <div>
            <h4 className="text-[15px] font-bold text-gray-900 mb-6">Tools</h4>
            <ul className="space-y-4 text-[14px] font-medium">
              <li><a href="#payroll" className="hover:text-[#8B5CF6] transition-colors">Payroll Checklist</a></li>
              <li><a href="#cost" className="hover:text-[#8B5CF6] transition-colors">Cost Calculator</a></li>
              <li><a href="#compliance-scorecard" className="hover:text-[#8B5CF6] transition-colors">Compliance Scorecard</a></li>
              <li><a href="#admin" className="hover:text-[#8B5CF6] transition-colors">Admin Leads</a></li>
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h4 className="text-[15px] font-bold text-gray-900 mb-6">Legal</h4>
            <ul className="space-y-4 text-[14px] font-medium">
              <li><a href="#privacy" className="hover:text-[#8B5CF6] transition-colors">Privacy</a></li>
              <li><a href="#terms" className="hover:text-[#8B5CF6] transition-colors">Terms</a></li>
              <li><a href="#cookie" className="hover:text-[#8B5CF6] transition-colors">Cookie Policy</a></li>
              <li><a href="#compliance" className="hover:text-[#8B5CF6] transition-colors">Compliance</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#FCE7F3] flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[14px] font-medium text-[#4C1D95]">
            © 2026 Fovestta™. All rights reserved.
          </p>
          <div className="flex gap-6 text-[14px] font-medium text-[#4C1D95]">
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
