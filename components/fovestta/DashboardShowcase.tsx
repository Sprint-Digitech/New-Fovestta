"use client";

import { motion } from "motion/react";
import { BarChart3, Users, MapPin, CalendarCheck, Check } from "lucide-react";
import { LazyImage } from "./LazyImage";
import { LoopingVideo } from "./LoopingVideo";
import { PremiumBackground } from "./PremiumBackground";

const showcaseItems = [
  {
    icon: Users,
    title: "Employee Dashboard",
    image: "/app_screenshot_dashboard.webp",
    tagline: "Check in, view payslips, and request leave in one tap",
  },
  {
    icon: MapPin,
    title: "Live Field Tracking",
    image: "/app_screenshot_field_tracking.webp",
    tagline: "GPS-verified attendance for field and remote teams",
  },
  {
    icon: BarChart3,
    title: "Team Dashboard",
    image: "/app_screenshot_team_dashboard.webp",
    tagline: "Real-time check-in status across your whole team",
  },
  {
    icon: CalendarCheck,
    title: "Monthly Attendance",
    image: "/app_screenshot_attendance.webp",
    tagline: "Full attendance history with one-tap regularization",
  },
];

export function DashboardShowcase() {
  return (
    <section className="relative pt-10 pb-6 overflow-hidden">
      {/* Premium Background */}
      <PremiumBackground variant="luxury" />

      <div className="relative w-full mx-auto px-4 lg:px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100/80 backdrop-blur-sm border border-purple-200/50 mb-3">
            <BarChart3 className="w-4 h-4 text-[#7C3AED]" />
            <span className="text-[#7C3AED] text-sm font-medium">Interactive Dashboard</span>
          </div>

          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-2 leading-tight">
            Powerful Analytics at
            <br />
            <span className="bg-gradient-to-r from-[#7C3AED] to-blue-600 bg-clip-text text-transparent">
              Your Fingertips
            </span>
          </h2>
          <p className="text-xl text-gray-600 w-full mx-auto font-medium">
            Real-time insights, comprehensive reports, and data-driven decisions
          </p>
        </motion.div>

        {/* Main Demo Video */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <div className="relative">
            <div className="absolute -inset-8 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-[50px] blur-3xl"></div>
            <div className="relative">
              <LoopingVideo
                title="Live Dashboard Demo"
                description="See how Fovestta transforms HR data into actionable insights"
              />
            </div>
          </div>
        </motion.div>

        {/* Premium Scrolling Row with Pause on Hover */}
        <div className="py-8">
          <div className="flex overflow-hidden relative group">
            <style>
              {`
                @keyframes scrollDashboard {
                  0% { transform: translateX(0); }
                  100% { transform: translateX(-1600px); }
                }
                .dashboard-scrolling-content {
                  animation: scrollDashboard 25s linear infinite;
                }
                .dashboard-scrolling-container:hover .dashboard-scrolling-content {
                  animation-play-state: paused;
                }
              `}
            </style>
            <div className="dashboard-scrolling-container flex overflow-hidden">
              <div className="dashboard-scrolling-content flex gap-8 flex-nowrap">
                {[...showcaseItems, ...showcaseItems, ...showcaseItems, ...showcaseItems].map((item, index) => (
                  <div key={index} className="w-[400px] flex-shrink-0">
                    <div className="group relative h-full rounded-2xl bg-white/80 backdrop-blur-xl border border-gray-200/80 overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                      {/* Image Area (real app screenshot, shown in full) */}
                      <div className="relative">
                        <LazyImage
                          src={item.image}
                          alt={item.title}
                          aspectRatio="aspect-[4/5]"
                          objectFit="contain"
                          className="opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                        />
                      </div>

                      {/* Content */}
                      <div className="p-6">
                        <div className="flex items-center gap-4">
                          <div className="relative inline-flex p-3 rounded-xl bg-gradient-to-br from-[#7C3AED] to-blue-600 shadow-lg">
                            <item.icon className="w-6 h-6 text-white" />
                          </div>
                          <h4 className="text-xl font-bold text-gray-900">{item.title}</h4>
                        </div>
                        <div className="mt-4 text-[15px] font-semibold text-gray-500 leading-snug">
                          {item.tagline}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Secondary Content with Images */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mt-20">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -inset-6 bg-gradient-to-br from-purple-500/20 to-blue-500/15 rounded-[40px] blur-3xl"></div>
            <div className="relative rounded-3xl overflow-hidden bg-white/80 backdrop-blur-xl border border-gray-200/60 shadow-2xl">
              <LazyImage
                src="https://images.unsplash.com/photo-1739298061740-5ed03045b280?w=800&h=600&fit=crop&q=80"
                alt="Team collaboration"
                aspectRatio="aspect-[4/3]"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              Empower Your Team with
              <span className="block bg-gradient-to-r from-[#7C3AED] to-blue-600 bg-clip-text text-transparent">
                Data-Driven Insights
              </span>
            </h3>

            <p className="text-xl text-gray-600 leading-relaxed font-medium">
              Make informed decisions with comprehensive analytics, real-time reporting, and predictive workforce intelligence.
            </p>

            <ul className="space-y-4">
              {[
                "Real-time attendance and productivity tracking",
                "Customizable dashboards for every role",
                "Advanced payroll analytics and forecasting",
                "Compliance monitoring and alerts",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="mt-1 w-6 h-6 rounded-lg bg-gradient-to-br from-[#7C3AED] to-blue-600 flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-white" strokeWidth={3} />
                  </div>
                  <span className="text-lg text-gray-700 font-bold">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}