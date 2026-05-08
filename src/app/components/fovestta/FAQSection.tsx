import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqData = [
  {
    category: "TDS & Payroll",
    questions: [
      {
        q: "How does Fovestta™ handle TDS calculation in payroll?",
        a: "Fovestta™ automatically calculates TDS (Tax Deducted at Source) on payroll transactions as per current Indian tax code. It supports TDS computation, Form 16 generation, and generates necessary reports for tax compliance.",
      },
      {
        q: "Is Fovestta™ compliant with EPF and ESI regulations?",
        a: "Yes, Fovestta is fully compliant with EPF (Employee Provident Fund) and ESI (Employee State Insurance) regulations across all states in India.",
      },
      {
        q: "How are different state tax rules handled?",
        a: "Fovestta automatically applies state-specific tax rules based on employee location and company registration.",
      },
    ],
  },
  {
    category: "Compliance & Regulations",
    questions: [
      {
        q: "Is Fovestta™ DPDP Act compliant?",
        a: "Yes, Fovestta is fully compliant with India's Digital Personal Data Protection (DPDP) Act.",
      },
      {
        q: "What certifications does Fovestta™ have?",
        a: "Fovestta holds ISO 27001, SOC 2 Type II, and GDPR compliance certifications.",
      },
      {
        q: "How does Fovestta™ handle labor law compliance across states?",
        a: "Our platform automatically updates with multi-state labor law requirements and ensures compliance across all Indian states.",
      },
    ],
  },
  {
    category: "Implementation & Support",
    questions: [
      {
        q: "How long does it take to implement Fovestta™?",
        a: "Average implementation time is 15 days for standard configurations.",
      },
      {
        q: "Do you offer support in local languages?",
        a: "Yes, we offer support in multiple Indian regional languages.",
      },
      {
        q: "What if we have custom compliance requirements?",
        a: "Our Enterprise plan includes custom compliance configuration support.",
      },
    ],
  },
  {
    category: "Integration & Data",
    questions: [
      {
        q: "Can Fovestta™ integrate with our existing bank systems?",
        a: "Yes, Fovestta integrates with all major Indian banks for salary disbursement.",
      },
      {
        q: "How is employee data protected and backed up?",
        a: "We use bank-grade 256-bit SSL encryption and maintain automated daily backups.",
      },
      {
        q: "Can we export data from Fovestta™?",
        a: "Yes, you can export all your data in multiple formats including CSV, Excel, and PDF.",
      },
    ],
  },
  {
    category: "Pricing & Billing",
    questions: [
      { q: "Can I change plans later?", a: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle, and any prorated differences will be automatically applied." },
      { q: "What is the one-time setup charge for?", a: "The ₹10,000 one-time setup charge covers complete onboarding assistance. Our team will help you configure payroll, establish compliance rules, import existing employee data, and train your HR team." },
      { q: "How is pricing calculated?", a: "Pricing is calculated per employee per month, with a tiered structure. For the first 50 employees, you pay the base rate. For any employees beyond 50, you pay a discounted rate. The system automatically adjusts your bill based on active employee counts." },
      { q: "What happens if I add or remove employees?", a: "Your monthly billing automatically adjusts based on your active headcount. If you add or remove employees mid-month, your next invoice will reflect the prorated changes. You only pay for active employees." },
      { q: "Do you offer discounts for annual billing?", a: "Yes, we offer custom discounts for annual upfront commitments. Please contact our sales team to discuss the best pricing for your organization's long-term needs." },
      { q: "Is there a free trial?", a: "Yes! We offer a 14-day free trial that gives you full access to all features so you can thoroughly evaluate the platform. No credit card is required to start the trial." },
      { q: "What payment methods do you accept?", a: "We accept all major credit cards, debit cards, UPI, and net banking for monthly subscriptions. For annual enterprise plans, we also accept bank transfers (NEFT/RTGS)." },
    ],
  },
  {
    category: "Support & Ticketing",
    questions: [
      { q: "How quickly will I get a response?", a: "Response time depends on priority level. High priority issues get a response within 1-4 hours, while low priority issues typically get responses within 24-48 hours." },
      { q: "What information should I include in my ticket?", a: "Include a clear subject, detailed description of the issue, steps to reproduce, any error messages, and your Fovestta user ID. Screenshots are helpful too!" },
      { q: "Can I attach files to my support ticket?", a: "Please describe your issue in the description field. For sensitive files, our support team will provide secure upload options after your ticket is created." },
      { q: "Is support available on weekends?", a: "Standard support is available Monday-Friday, 9 AM - 6 PM IST. High priority critical issues are handled 24/7." }
    ]
  }
];

export function FAQSection() {
  const [openCategory, setOpenCategory] = useState<number | null>(null);
  const [openQuestion, setOpenQuestion] = useState<string | null>(null);

  const toggleCategory = (index: number) => {
    setOpenCategory(openCategory === index ? null : index);
  };

  const toggleQuestion = (categoryIndex: number, questionIndex: number) => {
    const key = `${categoryIndex}-${questionIndex}`;
    setOpenQuestion(openQuestion === key ? null : key);
  };

  return (
    <section className="relative py-12 bg-gradient-to-b from-gray-50 to-white">
      <div className="w-full mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-5xl text-gray-900 mb-6">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600">
            Find answers to compliance and implementation questions answered.
          </p>
        </div>

        {/* FAQ Categories */}
        <div className="space-y-4">
          {faqData.map((category, categoryIndex) => (
            <div key={categoryIndex} className="rounded-2xl bg-white border border-gray-200 overflow-hidden">
              {/* Category Header */}
              <button
                onClick={() => toggleCategory(categoryIndex)}
                className="w-full flex items-center justify-between p-6 hover:bg-gray-50 transition-colors"
              >
                <h3 className="text-xl text-gray-900">{category.category}</h3>
                <ChevronDown
                  className={`w-6 h-6 text-gray-400 transition-transform duration-300 ${
                    openCategory === categoryIndex ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Questions */}
              {openCategory === categoryIndex && (
                <div className="border-t border-gray-200">
                  {category.questions.map((item, questionIndex) => (
                    <div key={questionIndex} className="border-b border-gray-200 last:border-b-0">
                      <button
                        onClick={() => toggleQuestion(categoryIndex, questionIndex)}
                        className="w-full flex items-center justify-between p-6 hover:bg-gray-50 transition-colors text-left"
                      >
                        <span className="text-gray-900">{item.q}</span>
                        <ChevronDown
                          className={`w-5 h-5 text-[#7C3AED] transition-transform duration-300 flex-shrink-0 ml-4 ${
                            openQuestion === `${categoryIndex}-${questionIndex}` ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {openQuestion === `${categoryIndex}-${questionIndex}` && (
                        <div className="px-6 pb-6">
                          <p className="text-gray-600 leading-relaxed">{item.a}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Help CTA */}
        <div className="mt-12 text-center p-8 rounded-2xl bg-purple-50/50 border border-purple-100">
          <h3 className="text-2xl text-gray-900 mb-3">Can't find what you're looking for?</h3>
          <p className="text-gray-600 mb-6">
            Our support team is here to help. Contact us for more information.
          </p>
          <a href="#support" className="inline-block px-8 py-4 bg-[#8B5CF6] text-white font-bold rounded-xl shadow-lg shadow-purple-100 hover:bg-[#7C3AED] transition-all duration-300">
            Contact Support
          </a>
        </div>
      </div>
    </section>
  );
}
