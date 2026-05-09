import { motion } from "motion/react";
import { Star, TrendingUp, Check } from "lucide-react";
import { Link } from "react-router-dom";

const successStories = [
  {
    company: "Bubna Advertising",
    industry: "Advertising • 200+ employees",
    logoNode: (
      <div className="bg-[#F97316] text-white font-black text-[14px] px-2 py-1 rounded-md transform -rotate-12 mr-3 shadow-sm flex-shrink-0">
        BUBNA
      </div>
    ),
    challenge: "Transitioning from legacy payroll system (Saral PayPack) while maintaining data security.",
    solution: "Deployed Fovestta™ HRMS on-premises server for complete data control.",
    results: [
      "Payroll efficiency improved",
      "Attendance streamlined",
      "Compliance automated",
    ],
    quote: "\"Payroll and compliance workflows are now significantly more efficient and streamlined.\"",
    author: "Dinesh Yadav, Head IT"
  },
  {
    company: "Stake HR",
    industry: "HR Solutions • 150+ employees",
    logoNode: (
      <div className="flex flex-col text-[9px] leading-tight text-gray-500 font-medium mr-3 flex-shrink-0">
        <span className="text-[#0D9488] font-bold text-[14px]">Stake</span>
        HR
      </div>
    ),
    challenge: "Managing HR operations across international teams with different compliance needs.",
    solution: "Implemented Fovestta™ HRMS to automate functions and provide better visibility.",
    results: [
      "Automated key functions",
      "Better visibility & control",
      "Streamlined payroll",
    ],
    quote: "\"The platform has automated key functions while providing better visibility and control over employee data.\"",
    author: "Anjali Goel, Manager"
  },
  {
    company: "Sprint Digitech",
    industry: "IT Services • 200+ employees",
    logoNode: (
      <div className="flex items-center text-[14px] font-bold italic mr-3 flex-shrink-0">
        <span className="text-[#0369A1]">Sprint</span><span className="text-[#E11D48]">Digitech</span>
      </div>
    ),
    challenge: "Managing distributed remote teams with geofenced attendance tracking requirements.",
    solution: "Deployed Fovestta™ HRIS with geofenced WFH attendance system.",
    results: [
      "Geofenced WFH tracking",
      "Improved accountability",
      "Streamlined attendance",
    ],
    quote: "\"Fovestta's ESS and geofenced attendance system significantly improved coordination within our remote team.\"",
    author: "Nirbhay Singh, Head Ops"
  },
  {
    company: "AM Foods",
    industry: "Manufacturing • 800+ employees",
    logoNode: (
      <div className="w-10 h-10 bg-[#2B2623] rounded-full flex flex-col items-center justify-center mr-3 flex-shrink-0 border border-[#C89B3C]">
        <span className="text-[#C89B3C] text-[7px] font-bold tracking-tighter">AM FOODS</span>
      </div>
    ),
    challenge: "Managing complex shift patterns and daily workforce planning in operations.",
    solution: "Implemented Fovestta™ HRMS for effective shift management and overtime control.",
    results: [
      "Effective overtime control",
      "Streamlined shift management",
      "Improved planning accuracy",
    ],
    quote: "\"After implementing Fovestta, we were able to effectively control overtime and streamline shift management.\"",
    author: "Amit Srivastava, Ops Lead"
  }
];

export function SuccessStoriesSection() {
  return (
    <section className="relative py-8 overflow-hidden bg-[#FAFAFA]" id="success-stories">
      <div className="relative w-full mx-auto">
        {/* Header */}
        <div className="text-center mb-6 px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl lg:text-[32px] font-bold text-gray-900 mb-2 tracking-tight">
              Success Stories
            </h2>
            <p className="text-lg text-gray-600 font-medium">
              How leading companies transformed with Fovestta™
            </p>
          </motion.div>
        </div>

        {/* Compact Scrolling Row */}
        <div className="py-4">
          <div className="flex overflow-hidden relative group">
            <style>
              {`
                @keyframes scrollStories {
                  0% { transform: translateX(0); }
                  100% { transform: translateX(-2400px); }
                }
                .stories-scrolling-content {
                  animation: scrollStories 45s linear infinite;
                }
                .stories-scrolling-container:hover .stories-scrolling-content {
                  animation-play-state: paused;
                }
              `}
            </style>
            <div className="stories-scrolling-container flex overflow-hidden">
              <div className="stories-scrolling-content flex gap-6 flex-nowrap px-6">
                {[...successStories, ...successStories, ...successStories].map((story, index) => (
                  <div key={index} className="w-[450px] flex-shrink-0">
                    <div className="bg-white rounded-3xl border border-gray-100 p-6 shadow-md hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                      {/* Header */}
                      <div className="flex items-center mb-4 pb-4 border-b border-gray-50">
                        {story.logoNode}
                        <div>
                          <h3 className="text-lg font-bold text-gray-900 leading-tight">{story.company}</h3>
                          <p className="text-sm text-gray-500 font-medium">{story.industry}</p>
                        </div>
                      </div>
                      
                      {/* Content Stack */}
                      <div className="space-y-4 mb-4">
                        <div>
                          <h4 className="text-[11px] font-bold text-purple-600 uppercase tracking-widest mb-1">Challenge</h4>
                          <p className="text-sm text-gray-700 leading-relaxed font-medium line-clamp-2">
                            {story.challenge}
                          </p>
                        </div>
                        <div>
                          <h4 className="text-[11px] font-bold text-blue-600 uppercase tracking-widest mb-1">Results</h4>
                          <div className="flex flex-wrap gap-2">
                            {story.results.map((result, idx) => (
                              <div key={idx} className="flex items-center gap-1 px-2 py-1 bg-green-50 rounded-lg">
                                <TrendingUp className="w-3 h-3 text-green-600" />
                                <span className="text-[12px] font-bold text-green-700">{result}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Quote Area */}
                      <div className="mt-auto p-4 rounded-xl bg-purple-50/50 border border-purple-100">
                        <p className="text-sm text-purple-900 italic font-medium mb-3">
                          {story.quote}
                        </p>
                        <div className="flex items-center justify-between">
                          <p className="text-[12px] font-bold text-gray-900">— {story.author}</p>
                          <div className="flex gap-0.5">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
