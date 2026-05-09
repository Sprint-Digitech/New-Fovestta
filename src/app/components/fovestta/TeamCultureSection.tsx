import { motion } from "motion/react";
import { Heart, Award, Zap, Users } from "lucide-react";
import { LazyImage } from "./LazyImage";
import { LoopingVideo } from "./LoopingVideo";
import { PremiumBackground } from "./PremiumBackground";

export function TeamCultureSection() {
  return (
    <section className="relative py-10 overflow-hidden">
      {/* Premium Background */}
      <PremiumBackground variant="luxury" />

      <div className="relative w-full mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100/80 backdrop-blur-sm border border-purple-200/50 mb-6">
            <Heart className="w-4 h-4 text-[#7C3AED]" />
            <span className="text-[#7C3AED] text-sm font-medium">About Fovestta</span>
          </div>

          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Built by HR Experts,
            <br />
            <span className="bg-gradient-to-r from-[#7C3AED] to-blue-600 bg-clip-text text-transparent">
              For HR Teams
            </span>
          </h2>
          <p className="text-2xl text-gray-600 w-full mx-auto">
            We understand the challenges of modern HR management because we've lived them
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-10 mb-8 items-center">
          {/* Video */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <div className="absolute -inset-6 bg-gradient-to-br from-purple-500/20 to-blue-500/15 rounded-[40px] blur-3xl"></div>
              <div className="relative rounded-[32px] overflow-hidden bg-white/80 backdrop-blur-xl border border-gray-200/60 shadow-2xl">
                <LazyImage
                  src="/team_culture_hero.png"
                  alt="Our Team in Action"
                  aspectRatio="aspect-video"
                />
                <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/90 to-transparent">
                  <h4 className="text-white text-3xl font-bold mb-3">Our Team in Action</h4>
                  <p className="text-gray-300 text-xl font-medium">See how we work together to build the future of HRMS</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-4xl font-bold text-gray-900 mb-4">
                Empowering 5000+ Companies Across India
              </h3>
              <p className="text-xl text-gray-600 leading-relaxed">
                Founded with a mission to simplify HR operations, Fovestta combines cutting-edge technology with deep HR expertise to deliver a platform that truly understands your needs.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              {[
                { icon: Users, value: "150+", label: "Team Members" },
                { icon: Award, value: "50M+", label: "Users Managed" },
                { icon: Zap, value: "99.99%", label: "Uptime" },
                { icon: Heart, value: "4.9/5", label: "Customer Rating" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="p-6 rounded-2xl bg-white/70 backdrop-blur-xl border border-gray-200/60 shadow-lg"
                >
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br from-purple-500 to-blue-600 mb-4`}>
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-3xl font-bold bg-gradient-to-r from-[#7C3AED] to-blue-600 bg-clip-text text-transparent mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Image Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              image: "/innovation_first.png",
              title: "Innovation First",
              description: "Constantly evolving to meet modern HR needs",
            },
            {
              image: "/customer_focused.png",
              title: "Customer Focused",
              description: "Your success is our priority",
            },
            {
              image: "/team_collaboration_stat.png",
              title: "Team Collaboration",
              description: "Working together for excellence",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-br from-purple-500/15 to-blue-500/10 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative rounded-2xl overflow-hidden bg-white/80 backdrop-blur-xl border border-gray-200/80 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <LazyImage
                  src={item.image}
                  alt={item.title}
                  aspectRatio="aspect-[3/4]"
                  objectFit="cover"
                />

                {/* Overlay Content */}
                <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/90 via-black/60 to-transparent">
                  <h4 className="text-3xl lg:text-4xl font-bold text-white mb-3">{item.title}</h4>
                  <p className="text-gray-300 text-xl font-medium leading-relaxed">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
