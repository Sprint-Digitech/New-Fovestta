import { useState } from "react";
import { TrendingUp, ChevronDown } from "lucide-react";

export function ROICalculator() {
  const [employees, setEmployees] = useState(100);
  const [plan, setPlan] = useState("Enterprise");

  return (
    <section className="relative py-12 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-5xl text-gray-900 mb-6">
            📈 Calculate Your ROI with Fovestta™
          </h2>
          <p className="text-xl text-gray-600">
            See exactly how much you can save on HR operations, reduce errors, and stay compliant.
          </p>
        </div>

        {/* Calculator */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Input Section */}
          <div className="space-y-6">
            <h3 className="text-2xl text-gray-900 mb-6">Your Numbers</h3>

            {/* Plan */}
            <div>
              <label className="block text-gray-700 mb-2">PLAN</label>
              <div className="relative">
                <select
                  value={plan}
                  onChange={(e) => setPlan(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white appearance-none cursor-pointer focus:outline-none focus:border-[#7C3AED] transition-colors"
                >
                  <option>Enterprise</option>
                  <option>Growth Catalyst</option>
                  <option>Essential Edge</option>
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
              </div>
            </div>

            {/* Employees */}
            <div>
              <label className="block text-gray-700 mb-2">EMPLOYEES</label>
              <input
                type="range"
                min="10"
                max="1000"
                value={employees}
                onChange={(e) => setEmployees(parseInt(e.target.value))}
                className="w-full h-2 bg-purple-200 rounded-lg appearance-none cursor-pointer accent-[#7C3AED]"
              />
              <div className="flex justify-between items-center mt-2">
                <input
                  type="number"
                  value={employees}
                  onChange={(e) => setEmployees(parseInt(e.target.value))}
                  className="w-24 px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-[#7C3AED]"
                />
                <span className="text-gray-500 text-sm">Employees</span>
              </div>
            </div>

            {/* Additional Inputs */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-600 text-sm mb-2">Work Present</label>
                <input
                  type="number"
                  defaultValue="90"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:border-[#7C3AED]"
                />
              </div>
              <div>
                <label className="block text-gray-600 text-sm mb-2">Gross Present</label>
                <input
                  type="number"
                  defaultValue="200"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:border-[#7C3AED]"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-600 text-sm mb-2">Sick Present</label>
                <input
                  type="number"
                  defaultValue="250"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:border-[#7C3AED]"
                />
              </div>
            </div>
          </div>

          {/* Results Section */}
          <div className="space-y-6">
            <h3 className="text-2xl text-gray-900 mb-6">Projected Savings</h3>

            {/* Main Results */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 rounded-xl bg-purple-50 border border-purple-200">
                <div className="text-sm text-gray-600 mb-2">Annual Savings</div>
                <div className="text-3xl text-[#7C3AED]">₹8.6L</div>
              </div>
              <div className="p-6 rounded-xl bg-blue-50 border border-blue-200">
                <div className="text-sm text-gray-600 mb-2">Monthly Savings Plan</div>
                <div className="text-3xl text-blue-600">₹1.9L</div>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-gray-50 border border-gray-200">
              <div className="text-sm text-gray-600 mb-2">HR Operational Cost</div>
              <div className="text-2xl text-gray-900">₹6.7L</div>
            </div>

            {/* ROI Display */}
            <div className="p-8 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 text-white">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <div className="text-sm mb-1">Break Even</div>
                  <div className="text-2xl">2.7 months</div>
                </div>
                <TrendingUp className="w-12 h-12 opacity-50" />
              </div>
              <div className="pt-4 border-t border-white/30">
                <div className="text-sm mb-1">ROI</div>
                <div className="text-5xl">347%</div>
              </div>
            </div>

            {/* 5 Year Projection */}
            <div className="p-6 rounded-xl bg-purple-50 border border-purple-200">
              <div className="text-sm text-gray-600 mb-2">5-Year Total</div>
              <div className="text-3xl text-[#7C3AED]">₹33L</div>
              <div className="text-sm text-gray-500 mt-1">Cumulative savings</div>
            </div>

            {/* Savings Breakdown */}
            <div className="space-y-3">
              <button className="w-full flex items-center justify-between p-4 rounded-xl bg-white border border-gray-200 hover:border-purple-300 transition-colors">
                <span className="text-gray-700">Savings Breakdown</span>
                <ChevronDown className="w-5 h-5 text-gray-400" />
              </button>

              <div className="space-y-2 p-4 rounded-xl bg-gray-50">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Time Savings</span>
                  <span className="text-green-600">40%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Error Reduction</span>
                  <span className="text-green-600">74%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Compliance Savings</span>
                  <span className="text-green-600">84%</span>
                </div>
              </div>

              <button className="w-full flex items-center justify-between p-4 rounded-xl bg-white border border-gray-200 hover:border-purple-300 transition-colors">
                <span className="text-gray-700">Key Assumptions</span>
                <ChevronDown className="w-5 h-5 text-gray-400" />
              </button>

              <button className="w-full flex items-center justify-between p-4 rounded-xl bg-white border border-gray-200 hover:border-purple-300 transition-colors">
                <span className="text-gray-700">Customize Assumptions</span>
                <ChevronDown className="w-5 h-5 text-gray-400" />
              </button>
            </div>

            {/* CTA */}
            <button className="w-full px-8 py-4 bg-[#7C3AED] text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5">
              GET STARTED - Free Trial
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
