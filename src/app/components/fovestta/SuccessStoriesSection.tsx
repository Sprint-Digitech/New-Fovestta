import { motion } from "motion/react";
import { Star, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const successStories = [
  {
    company: "Bubna Advertising",
    industry: "Advertising & Marketing • 200+ employees",
    logoNode: (
      <div className="bg-[#F97316] text-white font-black text-[18px] px-3 py-2 rounded-md transform -rotate-12 mr-4 shadow-sm flex-shrink-0">
        BUBNA
      </div>
    ),
    challenge: "Transitioning from legacy payroll system (Saral PayPack) while maintaining data security and control over organizational infrastructure.",
    solution: "Deployed Fovestta™ HRMS on-premises server, allowing complete data control and infrastructure ownership.",
    results: [
      "Payroll processing efficiency improved significantly",
      "Attendance management streamlined",
      "Statutory compliance workflows automated",
      "Complete data control and security maintained"
    ],
    quote: "\"We transitioned from Saral PayPack to Fovestta HRMS on our own on-premises server. Payroll processing, attendance management, and statutory compliance workflows are now significantly more efficient and streamlined.\"",
    author: "Dinesh Yadav, Head IT"
  },
  {
    company: "Stake HR",
    industry: "HR Solutions & Recruitment • 150+ employees",
    logoNode: (
      <div className="flex flex-col text-[11px] leading-tight text-gray-500 font-medium mr-4 flex-shrink-0">
        <span className="text-[#0D9488] font-bold text-[18px]">Stake</span>
        HR logo
      </div>
    ),
    challenge: "Managing HR operations across international teams with different compliance requirements and timezone coordination needs.",
    solution: "Implemented Fovestta™ HRMS to automate HR functions and provide better visibility over employee data and operational workflows.",
    results: [
      "Automated key human resource functions",
      "Better visibility and control over employee data",
      "Streamlined payroll and employee management",
      "Improved operational efficiency"
    ],
    quote: "\"We implemented Fovestta HRMS to streamline our human resource operations. The platform has automated key functions while providing better visibility and control over employee data and operational workflows.\"",
    author: "Anjali Goel, Manager"
  },
  {
    company: "Sprint Digitech",
    industry: "IT Services & Software • 200+ employees",
    logoNode: (
      <div className="flex items-center text-[16px] font-bold italic mr-4 flex-shrink-0">
        <span className="text-[#0369A1]">Sprint</span><span className="text-[#E11D48]">Digitech</span>
      </div>
    ),
    challenge: "Managing distributed remote teams with geofenced attendance tracking and ensuring accountability across different work zones.",
    solution: "Deployed Fovestta™ HRIS with Employee Self Service (ESS) capabilities and geofenced WFH attendance system.",
    results: [
      "Geofenced Work From Home attendance tracking",
      "Improved team coordination and accountability",
      "Streamlined attendance tracking and communication",
      "Enhanced HR operations for remote workforce"
    ],
    quote: "\"Fovestta's Employee Self Service and geofenced WFH attendance system significantly improved coordination and accountability within our remote team. It has streamlined our HR operations effectively.\"",
    author: "Nirbhay Singh, Head Operations"
  },
  {
    company: "AM Foods",
    industry: "Food Manufacturing & Distribution • 800+ employees",
    logoNode: (
      <div className="w-16 h-16 bg-[#2B2623] rounded-full flex flex-col items-center justify-center mr-4 flex-shrink-0 border-2 border-[#C89B3C]">
        <div className="flex gap-[3px] mb-1 items-end h-4">
          <div className="w-1.5 h-3 bg-[#C89B3C] rounded-sm"></div>
          <div className="w-1.5 h-4 bg-[#C89B3C] rounded-sm"></div>
          <div className="w-1.5 h-3 bg-[#C89B3C] rounded-sm"></div>
        </div>
        <span className="text-[#C89B3C] text-[9px] font-bold tracking-wider">AM FOODS</span>
      </div>
    ),
    challenge: "Managing complex shift patterns, overtime coordination, and daily workforce planning in a fast-paced operations environment.",
    solution: "Implemented Fovestta™ HRMS for effective shift management, overtime control, and workforce coordination.",
    results: [
      "Effective overtime control and management",
      "Streamlined shift and roster management",
      "Improved workforce planning accuracy",
      "Significantly enhanced operational efficiency"
    ],
    quote: "\"Managing employee shifts and overtime was increasingly challenging. After implementing Fovestta HRMS, we were able to effectively control overtime and streamline our shift management. It has significantly improved our operational efficiency.\"",
    author: "Amit Srivastava, Operations Lead"
  },
  {
    company: "Shree Gayatri Textile",
    industry: "Textile Manufacturing • 600+ employees",
    logoNode: (
      <div className="text-[10px] text-gray-800 font-serif mr-4 tracking-widest leading-tight uppercase text-center w-20 flex-shrink-0">
        Shree Gayatri<br/>Textile
      </div>
    ),
    challenge: "Managing employee attendance and payroll with strict accuracy requirements while ensuring statutory compliance in textile manufacturing.",
    solution: "Deployed Fovestta™ HRMS to structure HR processes and streamline payroll and compliance management.",
    results: [
      "Structured and streamlined HR processes",
      "Simplified payroll management",
      "Improved statutory compliance tracking",
      "Enhanced overall workforce management efficiency"
    ],
    quote: "\"In textile manufacturing, accuracy and efficiency in attendance, payroll, and compliance are critical. Fovestta HRMS has made our processes much more structured and streamlined, significantly improving operational efficiency.\"",
    author: "Mayank Khandelwal, Proprietor"
  },
  {
    company: "BeWild",
    industry: "D2C Fashion & Lingerie • 300+ employees",
    logoNode: (
      <div className="flex items-center text-[18px] font-medium mr-4 flex-shrink-0 tracking-widest text-gray-800">
        be<span className="font-bold">wild</span>
      </div>
    ),
    challenge: "Managing complex workforce shifts across operations while maintaining strict statutory compliance requirements for a rapidly growing D2C brand.",
    solution: "Implemented Fovestta™ HRMS for structured shift scheduling and automated compliance management.",
    results: [
      "Structured shift scheduling across operations",
      "Efficient compliance management processes",
      "Improved workforce coordination",
      "Streamlined human resource operations"
    ],
    quote: "\"As a growing D2C brand, managing workforce shifts and ensuring statutory compliance was complex. Fovestta HRMS made our shift scheduling and compliance management much more structured and efficient.\"",
    author: "Team BeWild, Management"
  }
];

export function SuccessStoriesSection() {
  return (
    <section className="relative py-10 bg-[#FAFAFA]" id="success-stories">
      <div className="max-w-7xl mx-auto px-4 lg:px-10">
        {/* Header */}
        <div className="text-center mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-[40px] font-bold text-gray-900 mb-4 tracking-tight">
              Success Stories from India's Leading Companies
            </h2>
            <p className="text-[18px] text-gray-600 w-full mx-auto font-medium">
              See how companies across industries transformed their HR operations with Fovestta™
            </p>
          </motion.div>
        </div>

        {/* Stories List (1 column wide cards) */}
        <div className="flex flex-col gap-8">
          {successStories.map((story, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-[24px] border border-[#F0F0F0] p-8 md:p-10 shadow-[0_2px_10px_rgba(0,0,0,0.02)]"
            >
              <div className="grid md:grid-cols-2 gap-10 md:gap-16">
                
                {/* Left Column: Company, Challenge, Solution */}
                <div>
                  <div className="flex items-center mb-8">
                    {story.logoNode}
                    <div>
                      <h3 className="text-[22px] font-bold text-gray-900 leading-tight">{story.company}</h3>
                      <p className="text-[18px] text-gray-500 font-medium mt-1">{story.industry}</p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-[16px] font-bold text-gray-900 mb-2">Challenge</h4>
                    <p className="text-[18px] text-gray-600 leading-relaxed font-medium">
                      {story.challenge}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-[16px] font-bold text-gray-900 mb-2">Solution</h4>
                    <p className="text-[18px] text-gray-600 leading-relaxed font-medium">
                      {story.solution}
                    </p>
                  </div>
                </div>

                {/* Right Column: Results */}
                <div>
                  <h4 className="text-[16px] font-bold text-gray-900 mb-4">Results Achieved</h4>
                  <div className="space-y-3">
                    {story.results.map((result, idx) => (
                      <div key={idx} className="flex items-center gap-3 p-3 bg-[#F0FDF4] border border-[#DCFCE7] rounded-[8px]">
                        <TrendingUp className="w-4 h-4 text-[#16A34A] flex-shrink-0" />
                        <span className="text-[18px] font-medium text-[#15803D]">{result}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Full Width Quote at Bottom */}
              <div className="mt-8 p-8 rounded-[16px] bg-[#F8F5FF] border border-[#F3E8FF]">
                <p className="text-[22px] text-[#4C1D95] italic leading-relaxed mb-6 font-medium">
                  {story.quote}
                </p>
                <p className="text-[16px] font-bold text-gray-900 mb-2">— {story.author}</p>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        {/* Ready to Join These Success Stories? CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 py-12 px-6 bg-[#FFF6F9] rounded-[32px] text-center"
        >
          <h2 className="text-[32px] lg:text-[40px] font-bold text-gray-900 mb-6 tracking-tight">
            Ready to Join These Success Stories?
          </h2>
          <p className="text-[18px] lg:text-[18px] text-gray-600 mb-10 max-w-2xl mx-auto font-medium">
            Experience the same transformation for your organization. Start your free trial today.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link to="/#pricing" className="px-8 py-4 bg-[#8B5CF6] text-white text-[16px] font-bold rounded-xl hover:bg-[#7C3AED] transition-all shadow-lg shadow-purple-100 text-center inline-block">
              Start Free Trial
            </Link>
            <Link to="/request-demo" className="px-8 py-4 bg-white text-gray-900 border border-gray-200 text-[16px] font-bold rounded-xl hover:bg-gray-50 transition-all shadow-sm text-center inline-block">
              Schedule Demo
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
