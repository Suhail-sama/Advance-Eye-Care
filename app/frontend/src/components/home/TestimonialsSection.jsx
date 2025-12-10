import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "LASIK Patient",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
    text: "Life-changing experience! The LASIK procedure was quick and painless. I can finally see clearly without glasses. The team was professional and caring throughout.",
    rating: 5,
    gradient: "from-teal-500 to-cyan-500",
  },
  {
    name: "Michael Chen",
    role: "Cataract Surgery Patient",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
    text: "Dr. Smith and the team provided exceptional care during my cataract surgery. The results exceeded my expectations. Crystal clear vision at 65!",
    rating: 5,
    gradient: "from-cyan-500 to-teal-600",
  },
  {
    name: "Emily Davis",
    role: "Regular Patient",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
    text: "Best eye care center in the city. State-of-the-art equipment, experienced doctors, and a warm, welcoming environment. Highly recommended!",
    rating: 5,
    gradient: "from-teal-600 to-cyan-600",
  },
];

export function TestimonialsSection() {
  return (
    <section className="relative py-24 px-4 bg-linear-to-br from-slate-900 via-teal-950 to-slate-900 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 -top-48 -left-48 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob" />
        <div className="absolute w-96 h-96 -top-48 -right-48 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/12 text-white font-semibold mb-4">
            <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
            <span className="text-sm">Testimonials</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Trusted by Thousands
          </h2>
          <p className="text-xl text-teal-100 max-w-2xl mx-auto">
            Don't just take our word for it — hear what our patients have to say
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
            >
              <Card className="relative bg-white/5 backdrop-blur-xl border border-white/12 hover:bg-white/8 hover:border-teal-500/30 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-teal-500/10 h-full">
                {/* Quote Icon */}
                <div className="absolute top-6 right-6 opacity-10">
                  <Quote className="w-12 h-12 text-white" />
                </div>

                <CardContent className="p-8">
                  {/* Rating Stars */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-white/90 text-lg leading-relaxed mb-6 relative z-10">
                    "{testimonial.text}"
                  </p>

                  {/* Author Info */}
                  <div className="flex items-center gap-4">
                    <div
                      className={`relative w-14 h-14 rounded-full overflow-hidden ring-2 ring-teal-500/30`}
                    >
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-semibold text-white">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-teal-300">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </CardContent>

                {/* Bottom Gradient Accent */}
                <div
                  className={`absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r ${testimonial.gradient}`}
                />
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
