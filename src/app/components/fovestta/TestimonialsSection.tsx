import { motion } from "motion/react";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "We transitioned from Saral PayPack to Fovestta HRMS on our own on-premises server. Payroll processing, attendance management, and statutory compliance workflows are now significantly more efficient and streamlined. The performance and reliability have improved considerably.",
    author: "Dinesh Yadav",
    role: "Head IT, Bubna Advertising",
  },
  {
    quote: "We implemented Fovestta HRMS to streamline our human resource operations and improve payroll and employee management efficiency. The platform has automated key HR functions while providing better visibility and control over employee data.",
    author: "Anjali Goel",
    role: "Manager, Stake HR",
  },
  {
    quote: "\"Fovestta's Employee Self Service and geofenced Work From Home attendance system significantly improved coordination and accountability for our remote workforce. It has streamlined attendance tracking and overall HR operations.\"",
    author: "Nirbhay Singh",
    role: "Head Operations, Sprint Digitech",
  },
  {
    quote: "\"Managing employee shifts and overtime was challenging until we implemented Fovestta HRMS. The platform has effectively controlled overtime and streamlined our shift and roster management, significantly improving operational efficiency.\"",
    author: "Amit Srivastava",
    role: "Operations Lead, AM Foods",
  },
  {
    quote: "\"In textile manufacturing, accuracy in payroll and compliance is critical. Fovestta HRMS has made our HR processes much more structured and streamlined, simplifying payroll management and improving overall operational efficiency.\"",
    author: "Mayank Khandelwal",
    role: "Proprietor, Shree Gayatri Textile",
  },
  {
    quote: "\"As a D2C lingerie brand, managing workforce shifts and statutory compliance was complex. Fovestta HRMS made our shift scheduling and compliance management much more structured and efficient, improving workforce coordination.\"",
    author: "Team BeWild",
    role: "Management, BeWild",
  },
];

export function TestimonialsSection() {
  return (
    <section className="relative py-12 bg-[#FCFBFF]">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-[40px] font-bold text-gray-900 mb-4 tracking-tight">Loved by HR Teams Everywhere</h2>
            <p className="text-[18px] text-gray-600 max-w-3xl mx-auto font-medium">
              Join thousands of companies that have transformed their HR operations
            </p>
          </motion.div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <div className="h-full p-8 rounded-[24px] bg-white border border-[#E9E4FF] hover:shadow-lg transition-all duration-300 flex flex-col">
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#8B5CF6] text-[#8B5CF6]" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-[15px] text-gray-600 leading-relaxed mb-8 flex-grow font-medium">
                  {testimonial.quote.startsWith('"') ? testimonial.quote : `"${testimonial.quote}"`}
                </p>

                {/* Author */}
                <div className="mt-auto">
                  <div className="text-[15px] font-bold text-gray-900">{testimonial.author}</div>
                  <div className="text-[13px] text-gray-500 font-medium mt-0.5">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
