import { motion } from "framer-motion";
import React from "react";
import { HeroGeometric } from "@/components/ui/shape-landing-hero";
import { Button } from "@/components/ui/button";
import { Calendar, Eye, Shield, Star, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export function HeroSection() {
  const navigate = useNavigate();

  return (
    <HeroGeometric
      badge="Advanced Eye Care Technology"
      title1="Your Vision,"
      title2="Our Mission"
      description="Transforming lives through exceptional eye care with cutting-edge technology and compassionate service"
    >
      {/* Trust Indicators */}
      <div className="flex flex-wrap gap-4 justify-center items-center mb-8">
        {[
          { icon: Shield, text: "HIPAA Compliant", color: "text-teal-400" },
          { icon: Star, text: "4.9/5 Rating", color: "text-amber-400" },
          { icon: Eye, text: "25+ Years", color: "text-cyan-400" },
        ].map((item, idx) => (
          <div
            key={idx}
            className="flex items-center gap-2 px-4 py-2 bg-white/8 backdrop-blur-md rounded-full border border-white/12 hover:bg-white/12 transition-all duration-300"
          >
            <item.icon className={`w-4 h-4 ${item.color}`} />
            <span className="text-sm font-medium text-white/90">
              {item.text}
            </span>
          </div>
        ))}
      </div>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button
          size="lg"
          className="relative bg-linear-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white px-10 py-6 text-lg rounded-full shadow-2xl shadow-teal-500/30 transition-all duration-300 hover:scale-105 hover:shadow-teal-500/50 group border-0"
          onClick={() => navigate("/book-appointment")}
        >
          <Calendar className="mr-2 h-5 w-5" />
          Book Appointment
          <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
        </Button>
        <Button
          size="lg"
          className="border-2 border-white/20 bg-white/8 backdrop-blur-md text-white hover:bg-white/15 px-10 py-6 text-lg rounded-full transition-all duration-300 hover:scale-105"
          onClick={() => navigate("/services")}
        >
          Explore Services
        </Button>
      </div>

      {/* Floating Stats Cards */}
      <div className="grid grid-cols-3 gap-4 md:gap-8 mt-16">
        {[
          {
            number: "50K+",
            label: "Happy Patients",
            gradient: "from-teal-400 to-cyan-400",
          },
          {
            number: "15+",
            label: "Expert Doctors",
            gradient: "from-cyan-400 to-teal-400",
          },
          {
            number: "20+",
            label: "Specializations",
            gradient: "from-teal-300 to-cyan-300",
          },
        ].map((stat, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 + idx * 0.1 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-linear-to-r from-teal-500/10 to-cyan-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
            <div className="relative bg-white/5 backdrop-blur-xl p-4 md:p-6 rounded-2xl border border-white/12 hover:border-white/20 text-center hover:scale-105 transition-all duration-300">
              <div
                className={`text-2xl md:text-4xl font-bold bg-linear-to-r ${stat.gradient} bg-clip-text text-transparent mb-2`}
              >
                {stat.number}
              </div>
              <div className="text-xs md:text-sm text-white/60 font-medium">
                {stat.label}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </HeroGeometric>
  );
}
