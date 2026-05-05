import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Instagram } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent mb-2">
                Fovestta
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Transforming HR management with innovative solutions designed for modern workplaces.
              </p>
            </div>
            <div className="flex gap-4">
              {[
                { icon: Linkedin, href: "#" },
                { icon: Twitter, href: "#" },
                { icon: Facebook, href: "#" },
                { icon: Instagram, href: "#" },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-white/20 transition-colors duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg mb-6">Products</h4>
            <ul className="space-y-3">
              {[
                "Employee Management",
                "Attendance System",
                "Payroll Processing",
                "Performance Management",
                "Recruitment",
                "Analytics",
              ].map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors duration-300">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg mb-6">Company</h4>
            <ul className="space-y-3">
              {[
                "About Us",
                "Careers",
                "Press Kit",
                "Blog",
                "Contact",
                "Partners",
              ].map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors duration-300">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-teal-400 mt-0.5" />
                <div>
                  <div className="text-gray-400">Email</div>
                  <a href="mailto:info@fovestta.com" className="text-white hover:text-teal-400 transition-colors">
                    info@fovestta.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-teal-400 mt-0.5" />
                <div>
                  <div className="text-gray-400">Phone</div>
                  <a href="tel:+1234567890" className="text-white hover:text-teal-400 transition-colors">
                    +1 (234) 567-890
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-teal-400 mt-0.5" />
                <div>
                  <div className="text-gray-400">Address</div>
                  <p className="text-white">
                    123 Business Street<br />
                    City, State 12345
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {currentYear} Fovestta HRMS. All rights reserved.
            </p>
            <div className="flex gap-6">
              {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((item, index) => (
                <a
                  key={index}
                  href="#"
                  className="text-gray-400 text-sm hover:text-teal-400 transition-colors duration-300"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
