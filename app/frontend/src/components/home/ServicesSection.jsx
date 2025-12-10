import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Eye,
  Glasses,
  Zap,
  Users,
  Droplet,
  Sun,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const services = [
  {
    icon: Eye,
    title: "Comprehensive Eye Exams",
    description:
      "Advanced diagnostic assessments using state-of-the-art technology to ensure optimal eye health",
    gradient: "from-teal-500 to-cyan-500",
    iconBg:
      "bg-gradient-to-br from-teal-100 to-cyan-100 dark:from-teal-900/30 dark:to-cyan-900/30",
    features: [
      "Digital Retinal Imaging",
      "OCT Scanning",
      "Visual Field Testing",
    ],
  },
  {
    icon: Zap,
    title: "LASIK Surgery",
    description:
      "Blade-free laser vision correction with the latest wavefront-guided technology",
    gradient: "from-cyan-500 to-teal-600",
    iconBg:
      "bg-gradient-to-br from-cyan-100 to-teal-100 dark:from-cyan-900/30 dark:to-teal-900/30",
    features: ["Bladeless Technology", "Custom Treatment", "Quick Recovery"],
  },
  {
    icon: Sun,
    title: "Cataract Surgery",
    description:
      "Micro-incision surgery with premium IOL options for crystal-clear vision",
    gradient: "from-teal-600 to-cyan-600",
    iconBg:
      "bg-gradient-to-br from-teal-100 to-cyan-100 dark:from-teal-900/30 dark:to-cyan-900/30",
    features: ["Premium IOLs", "Same-Day Procedure", "Fast Recovery"],
  },
  {
    icon: Glasses,
    title: "Designer Eyewear",
    description:
      "Premium frames and precision lens fitting with the latest optical technology",
    gradient: "from-cyan-600 to-teal-500",
    iconBg:
      "bg-gradient-to-br from-cyan-100 to-teal-100 dark:from-cyan-900/30 dark:to-teal-900/30",
    features: [
      "Designer Brands",
      "Blue Light Protection",
      "Progressive Lenses",
    ],
  },
  {
    icon: Droplet,
    title: "Dry Eye Treatment",
    description:
      "Advanced therapies for chronic dry eye including IPL and LipiFlow treatments",
    gradient: "from-teal-400 to-cyan-400",
    iconBg:
      "bg-gradient-to-br from-teal-100 to-cyan-100 dark:from-teal-900/30 dark:to-cyan-900/30",
    features: ["IPL Therapy", "LipiFlow", "Custom Treatment Plans"],
  },
  {
    icon: Users,
    title: "Pediatric Care",
    description:
      "Gentle, specialized eye care for children with a focus on early detection",
    gradient: "from-cyan-400 to-teal-400",
    iconBg:
      "bg-gradient-to-br from-cyan-100 to-teal-100 dark:from-cyan-900/30 dark:to-teal-900/30",
    features: ["Vision Screening", "Myopia Control", "Amblyopia Treatment"],
  },
];

export function ServicesSection() {
  const navigate = useNavigate();

  return (
    <section className="relative py-24 px-4 bg-linear-to-b from-white via-slate-50 to-white dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-teal-200 dark:bg-teal-900/20 rounded-full mix-blend-multiply dark:mix-blend-lighten filter blur-3xl opacity-20 animate-blob" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-200 dark:bg-cyan-900/20 rounded-full mix-blend-multiply dark:mix-blend-lighten filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
      <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-teal-300 dark:bg-teal-800/20 rounded-full mix-blend-multiply dark:mix-blend-lighten filter blur-3xl opacity-20 animate-blob animation-delay-4000" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 font-semibold mb-4 border border-teal-200 dark:border-teal-800">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm">Our Services</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6">
            Comprehensive Eye Care
            <br />
            <span className="bg-linear-to-r from-teal-600 via-cyan-600 to-teal-600 bg-clip-text text-transparent">
              Solutions
            </span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            Experience world-class eye care with cutting-edge technology and
            personalized treatment plans
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="relative group hover:shadow-2xl dark:hover:shadow-teal-500/10 transition-all duration-500 border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm overflow-hidden h-full hover:-translate-y-2">
                  {/* Card Glow Effect */}
                  <div
                    className={`absolute inset-0 bg-linear-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                  />

                  <CardHeader className="relative">
                    {/* Animated Icon Container */}
                    <div
                      className={`w-16 h-16 rounded-2xl ${service.iconBg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                    >
                      <Icon className="w-8 h-8 text-teal-600 dark:text-teal-400" />
                    </div>
                    <CardTitle className="text-2xl mb-3 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="relative">
                    {/* Features List */}
                    <div className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400"
                        >
                          <div
                            className={`w-1.5 h-1.5 rounded-full bg-linear-to-r ${service.gradient}`}
                          />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Learn More Button */}
                    <Button
                      variant="ghost"
                      className="group/btn w-full justify-between hover:bg-teal-50 dark:hover:bg-teal-900/20 hover:text-teal-600 dark:hover:text-teal-400"
                      onClick={() => navigate("/services")}
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>

                  {/* Corner Accent */}
                  <div
                    className={`absolute top-0 right-0 w-20 h-20 bg-linear-to-br ${service.gradient} opacity-10 blur-2xl`}
                  />
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Button
            size="lg"
            className="bg-linear-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white px-10 py-6 text-lg rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
            onClick={() => navigate("/services")}
          >
            View All Services
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
