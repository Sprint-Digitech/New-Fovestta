import { motion } from "motion/react";
import { BarChart3, Users, TrendingUp, Clock } from "lucide-react";

export function DashboardPreview() {
  return (
    <section className="relative py-32 bg-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-400/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-teal-100 text-teal-700 text-sm mb-6">
              Intuitive Dashboard
            </span>
            <h2 className="text-5xl text-gray-900 mb-6">
              Make Data-Driven Decisions with
              <span className="block bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                Real-Time Insights
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Monitor your workforce metrics at a glance with our comprehensive analytics dashboard
            </p>
          </motion.div>
        </div>

        {/* Dashboard Preview */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          {/* Main Dashboard Card */}
          <div className="relative rounded-3xl bg-gradient-to-br from-white/80 to-gray-50/80 backdrop-blur-xl border border-white/60 shadow-2xl p-8">
            {/* Stats Cards */}
            <div className="grid md:grid-cols-4 gap-6 mb-8">
              {[
                { icon: Users, label: "Total Employees", value: "1,247", change: "+12%", color: "blue" },
                { icon: TrendingUp, label: "Attendance Rate", value: "96.8%", change: "+2.4%", color: "teal" },
                { icon: Clock, label: "Avg. Working Hours", value: "42.5h", change: "-1.2h", color: "cyan" },
                { icon: BarChart3, label: "Open Positions", value: "23", change: "+5", color: "blue" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative p-6 rounded-xl bg-white/70 backdrop-blur-md border border-white/60 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className={`inline-flex p-3 rounded-lg bg-${stat.color}-50 mb-4`}>
                    <stat.icon className={`w-5 h-5 text-${stat.color}-600`} />
                  </div>
                  <div className="text-sm text-gray-500 mb-1">{stat.label}</div>
                  <div className="flex items-end justify-between">
                    <div className="text-3xl text-gray-900">{stat.value}</div>
                    <div className={`text-sm ${stat.change.startsWith('+') ? 'text-green-600' : 'text-orange-600'}`}>
                      {stat.change}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Chart Placeholder */}
            <div className="grid lg:grid-cols-2 gap-6">
              {/* Bar Chart */}
              <div className="p-6 rounded-xl bg-white/70 backdrop-blur-md border border-white/60 shadow-lg">
                <h4 className="text-gray-900 mb-6">Department-wise Headcount</h4>
                <div className="space-y-4">
                  {[
                    { dept: "Engineering", count: 342, percentage: 75 },
                    { dept: "Sales", count: 245, percentage: 55 },
                    { dept: "Marketing", count: 156, percentage: 35 },
                    { dept: "HR", count: 89, percentage: 20 },
                    { dept: "Finance", count: 124, percentage: 28 },
                  ].map((item, index) => (
                    <div key={index}>
                      <div className="flex justify-between text-sm mb-1.5">
                        <span className="text-gray-700">{item.dept}</span>
                        <span className="text-gray-900">{item.count}</span>
                      </div>
                      <div className="h-2.5 bg-gray-100 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${item.percentage}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                          className="h-full bg-gradient-to-r from-blue-500 to-teal-500 rounded-full"
                        ></motion.div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pie Chart Placeholder */}
              <div className="p-6 rounded-xl bg-white/70 backdrop-blur-md border border-white/60 shadow-lg">
                <h4 className="text-gray-900 mb-6">Leave Status Overview</h4>
                <div className="flex items-center justify-center h-64">
                  <div className="relative w-48 h-48">
                    {/* Simplified pie chart visual */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500 to-blue-600" style={{ clipPath: 'polygon(50% 50%, 50% 0%, 100% 0%, 100% 100%, 50% 100%)' }}></div>
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-teal-500 to-teal-600" style={{ clipPath: 'polygon(50% 50%, 50% 0%, 0% 0%, 0% 100%, 30% 100%)' }}></div>
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-500 to-cyan-600" style={{ clipPath: 'polygon(50% 50%, 30% 100%, 50% 100%)' }}></div>
                    <div className="absolute inset-4 rounded-full bg-white/90 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-2xl text-gray-900">87%</div>
                        <div className="text-sm text-gray-500">Active</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center gap-6 mt-4">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                    <span className="text-sm text-gray-600">Active</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-teal-500"></div>
                    <span className="text-sm text-gray-600">Pending</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-cyan-500"></div>
                    <span className="text-sm text-gray-600">Approved</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
