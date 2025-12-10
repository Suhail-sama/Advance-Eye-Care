import React from "react";
import { HeroSection } from "../components/home/HeroSection";
import { ServicesSection } from "../components/home/ServicesSection";
import { TestimonialsSection } from "../components/home/TestimonialsSection";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="overflow-hidden">
      <HeroSection />
      <ServicesSection />
      <TestimonialsSection />

      {/* Final CTA Section */}
      <section className="relative py-24 px-4 bg-linear-to-br from-teal-600 via-cyan-600 to-teal-600 overflow-hidden">
        {/* Animated Circles */}
        <div className="absolute inset-0">
          <div className="absolute w-96 h-96 bg-white/10 rounded-full -top-48 -left-48 animate-pulse" />
          <div className="absolute w-96 h-96 bg-white/10 rounded-full -bottom-48 -right-48 animate-pulse animation-delay-2000" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center relative z-10"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Ready to See Clearly?
          </h2>
          <p className="text-xl md:text-2xl text-white/90 mb-10 leading-relaxed">
            Schedule your comprehensive eye examination today and take the first
            step towards perfect vision
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-teal-600 hover:bg-slate-100 px-10 py-7 text-lg rounded-full shadow-2xl hover:scale-105 transition-all duration-300 group"
              onClick={() => navigate("/book-appointment")}
            >
              <Calendar className="mr-2 h-6 w-6" />
              Book Your Appointment
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              className="border-2 border-white text-white bg-white/10 backdrop-blur-md hover:bg-white/20 px-10 py-7 text-lg rounded-full hover:scale-105 transition-all duration-300"
              onClick={() => navigate("/contact")}
            >
              Contact Us
            </Button>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-8 mt-12 text-white/80">
            <div className="text-center">
              <div className="text-3xl font-bold text-white">50K+</div>
              <div className="text-sm">Satisfied Patients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">99%</div>
              <div className="text-sm">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">25+</div>
              <div className="text-sm">Years Experience</div>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
