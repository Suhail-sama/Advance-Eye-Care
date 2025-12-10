import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { Button } from "@/components/ui/button";
import { Calendar, Eye, Shield, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";

export function HeroSection() {
  const navigate = useNavigate();

  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-6 items-center justify-center px-4 z-10"
      >
        {/* Main Heading */}
        <div className="text-4xl md:text-7xl font-bold dark:text-white text-center text-slate-900 max-w-4xl">
          Your Vision, Our Priority
        </div>

        {/* Subheading */}
        <div className="font-light text-lg md:text-2xl dark:text-neutral-200 text-slate-700 py-2 text-center max-w-2xl">
          Comprehensive Eye Care with State-of-the-Art Technology and
          Compassionate Service
        </div>

        {/* Trust Indicators */}
        <div className="flex flex-wrap gap-6 justify-center items-center text-sm md:text-base text-slate-600 dark:text-slate-300">
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-blue-600" />
            <span>HIPAA Compliant</span>
          </div>
          <div className="flex items-center gap-2">
            <Star className="w-5 h-5 text-yellow-500" />
            <span>4.9/5 Rating</span>
          </div>
          <div className="flex items-center gap-2">
            <Eye className="w-5 h-5 text-blue-600" />
            <span>25+ Years Experience</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          <Button
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-full shadow-lg"
            onClick={() => navigate("/book-appointment")}
          >
            <Calendar className="mr-2 h-5 w-5" />
            Book Appointment
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-6 text-lg rounded-full"
            onClick={() => navigate("/services")}
          >
            Our Services
          </Button>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-8 mt-8 text-center">
          <div>
            <div className="text-3xl md:text-4xl font-bold text-blue-600">
              50K+
            </div>
            <div className="text-sm md:text-base text-slate-600 dark:text-slate-400">
              Happy Patients
            </div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-blue-600">
              15+
            </div>
            <div className="text-sm md:text-base text-slate-600 dark:text-slate-400">
              Expert Doctors
            </div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-blue-600">
              20+
            </div>
            <div className="text-sm md:text-base text-slate-600 dark:text-slate-400">
              Specializations
            </div>
          </div>
        </div>
      </motion.div>
    </AuroraBackground>
  );
}
