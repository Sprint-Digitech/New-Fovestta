import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "HR Director",
    company: "TechCorp Inc.",
    image: "https://images.unsplash.com/photo-1590650589327-3f67c43ad8a2?w=200&h=200&fit=crop",
    rating: 5,
    text: "Fovestta has completely transformed how we manage our workforce. The automation features alone have saved us countless hours every week. The analytics dashboard provides insights we never had before.",
  },
  {
    name: "Michael Chen",
    role: "CEO",
    company: "InnovateLabs",
    image: "https://images.unsplash.com/photo-1739298061740-5ed03045b280?w=200&h=200&fit=crop",
    rating: 5,
    text: "The implementation was seamless and the support team is exceptional. Our employees love the self-service portal, and we've seen a significant improvement in HR efficiency across all departments.",
  },
  {
    name: "Emily Rodriguez",
    role: "Operations Manager",
    company: "Global Solutions Ltd.",
    image: "https://images.unsplash.com/photo-1758691736843-90f58dce465e?w=200&h=200&fit=crop",
    rating: 5,
    text: "From attendance tracking to payroll processing, everything is integrated perfectly. The mobile app is a game-changer for our remote workforce. Highly recommend Fovestta to any growing organization.",
  },
];

export function TestimonialsSection() {
  return (
    <section className="relative py-32 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-400/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-teal-400/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm mb-6">
              Customer Success Stories
            </span>
            <h2 className="text-5xl text-gray-900 mb-6">
              Trusted by Industry Leaders
              <span className="block bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                Worldwide
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See what our customers have to say about transforming their HR operations with Fovestta
            </p>
          </motion.div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative h-full p-8 rounded-2xl bg-white/60 backdrop-blur-md border border-white/60 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                {/* Quote Icon */}
                <div className="absolute top-6 right-6 opacity-10">
                  <Quote className="w-16 h-16 text-blue-600" />
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-700 leading-relaxed mb-8 relative z-10">
                  "{testimonial.text}"
                </p>

                {/* Author Info */}
                <div className="flex items-center gap-4 relative z-10">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-teal-500 flex items-center justify-center overflow-hidden">
                    <ImageWithFallback
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">
                      {testimonial.role}, {testimonial.company}
                    </div>
                  </div>
                </div>

                {/* Gradient bottom border on hover */}
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-blue-600 to-teal-600 group-hover:w-full transition-all duration-500 rounded-b-2xl"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20 text-center"
        >
          <p className="text-sm text-gray-500 mb-8">Trusted by 500+ companies worldwide</p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-40">
            {["Company A", "Company B", "Company C", "Company D", "Company E"].map((company, index) => (
              <div key={index} className="text-2xl text-gray-400">{company}</div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
