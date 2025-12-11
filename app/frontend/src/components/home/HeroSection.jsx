import { motion } from "framer-motion";
import React from "react";
import { HeroGeometric } from "@/components/ui/shape-landing-hero";
import { Button } from "@/components/ui/button";
import { Calendar, Eye, Shield, Star, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@/context/ThemeContext";
import { cn } from "@/lib/utils";

export function HeroSection() {
  const navigate = useNavigate();
  const { theme } = useTheme();

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
            className={cn(
              "flex items-center gap-2 px-4 py-2 rounded-full border transition-all duration-300",
              theme === "dark"
                ? "bg-white/8 backdrop-blur-md border-white/12 hover:bg-white/12"
                : "bg-white/70 backdrop-blur-md border-teal-200/60 hover:bg-white/90 shadow-lg shadow-teal-500/10"
            )}
          >
            <item.icon className={`w-4 h-4 ${item.color}`} />
            <span
              className={cn(
                "text-sm font-medium",
                theme === "dark" ? "text-white/90" : "text-slate-900"
              )}
            >
              {item.text}
            </span>
          </div>
        ))}
      </div>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button
          size="lg"
          className="relative bg-linear-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white px-10 py-6 text-lg rounded-full shadow-2xl shadow-teal-500/30 transition-all duration-300 group border-0"
          onClick={() => navigate("/book-appointment")}
        >
          <Calendar className="mr-2 h-5 w-5" />
          Book Appointment
          <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
        </Button>
        <Button
          size="lg"
          className={cn(
            "border-2 px-10 py-6 text-lg rounded-full transition-all duration-300",
            theme === "dark"
              ? "border-white/20 bg-white/8 backdrop-blur-md text-white hover:bg-white/15"
              : "border-teal-600/60 bg-white/70 backdrop-blur-md text-teal-700 hover:bg-white shadow-lg shadow-teal-500/10"
          )}
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
            <div
              className={cn(
                "absolute inset-0 rounded-2xl blur-xl transition-all",
                theme === "dark"
                  ? "bg-linear-to-r from-teal-500/10 to-cyan-500/10 group-hover:blur-2xl"
                  : "bg-linear-to-r from-teal-400/20 to-cyan-400/20 group-hover:blur-2xl"
              )}
            />
            <div
              className={cn(
                "relative p-4 md:p-6 rounded-2xl border text-center transition-all duration-300",
                theme === "dark"
                  ? "bg-white/5 backdrop-blur-xl border-white/12 hover:border-white/20"
                  : "bg-white/70 backdrop-blur-xl border-teal-200/60 hover:border-teal-300/80 shadow-lg shadow-teal-500/10"
              )}
            >
              <div
                className={`text-2xl md:text-4xl font-bold bg-linear-to-r ${stat.gradient} bg-clip-text text-transparent mb-2`}
              >
                {stat.number}
              </div>
              <div
                className={cn(
                  "text-xs md:text-sm font-medium",
                  theme === "dark" ? "text-white/60" : "text-slate-700"
                )}
              >
                {stat.label}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </HeroGeometric>
  );
}
