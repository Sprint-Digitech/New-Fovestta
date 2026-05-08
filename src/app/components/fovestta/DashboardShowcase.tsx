import { motion } from "motion/react";
import { Play, BarChart3, Users, TrendingUp, Clock } from "lucide-react";
import { LazyImage } from "./LazyImage";
import { LoopingVideo } from "./LoopingVideo";
import { PremiumBackground } from "./PremiumBackground";

export function DashboardShowcase() {
  return (
    <section className="relative py-12 overflow-hidden">
      {/* Premium Background */}
      <PremiumBackground variant="luxury" />

      <div className="relative w-full mx-auto px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100/80 backdrop-blur-sm border border-purple-200/50 mb-6">
            <BarChart3 className="w-4 h-4 text-[#7C3AED]" />
            <span className="text-[#7C3AED] text-sm font-medium">Interactive Dashboard</span>
          </div>

          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Powerful Analytics at
            <br />
            <span className="bg-gradient-to-r from-[#7C3AED] to-blue-600 bg-clip-text text-transparent">
              Your Fingertips
            </span>
          </h2>
          <p className="text-2xl text-gray-600 w-full mx-auto">
            Real-time insights, comprehensive reports, and data-driven decisions for your entire workforce
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
            {/* Glow effect behind video */}
            <div className="absolute -inset-8 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-[50px] blur-3xl"></div>

            {/* Video Component */}
            <div className="relative">
              <LoopingVideo
                title="Live Dashboard Demo"
                description="See how Fovestta transforms HR data into actionable insights"
              />
            </div>
          </div>
        </motion.div>

        {/* Feature Grid with Images */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {[
            {
              icon: Users,
              title: "Employee Insights",
              image: "https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?w=600&h=400&fit=crop&q=80",
              metric: "1,247 Active",
            },
            {
              icon: TrendingUp,
              title: "Performance Metrics",
              image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&q=80",
              metric: "96.8% Growth",
            },
            {
              icon: BarChart3,
              title: "Attendance Analytics",
              image: "https://images.unsplash.com/photo-1758876202980-0a28b744fb24?w=600&h=400&fit=crop&q=80",
              metric: "99.2% Present",
            },
            {
              icon: Clock,
              title: "Payroll Reports",
              image: "https://images.unsplash.com/photo-1753955900478-323e4da1eff7?w=600&h=400&fit=crop&q=80",
              metric: "₹42.3L Processed",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              {/* Glow behind card */}
              <div className="absolute -inset-4 bg-gradient-to-br from-purple-500/15 to-blue-500/10 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative h-full rounded-2xl bg-white/80 backdrop-blur-xl border border-gray-200/80 overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                {/* Image */}
                <LazyImage
                  src={item.image}
                  alt={item.title}
                  aspectRatio="aspect-[4/3]"
                  objectFit="cover"
                />

                {/* Content Overlay */}
                <div className="p-6">
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br from-purple-500 to-blue-600 mb-4 shadow-lg`}>
                    <item.icon className="w-6 h-6 text-white" />
                  </div>

                  <h4 className="text-xl text-gray-900 mb-2">{item.title}</h4>
                  <div className="text-2xl font-bold bg-gradient-to-r from-[#7C3AED] to-blue-600 bg-clip-text text-transparent">
                    {item.metric}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Secondary Content with Images */}
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left: Image */}
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

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h3 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Empower Your Team with
              <span className="block bg-gradient-to-r from-[#7C3AED] to-blue-600 bg-clip-text text-transparent">
                Data-Driven Insights
              </span>
            </h3>

            <p className="text-xl text-gray-600 leading-relaxed">
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
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-lg text-gray-700">{item}</span>
                </li>
              ))}
            </ul>


          </motion.div>
        </div>
      </div>
    </section>
  );
}
