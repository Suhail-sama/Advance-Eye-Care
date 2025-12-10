import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Award, Users, Heart, Eye, Zap } from "lucide-react";
import { motion } from "framer-motion";

export default function AboutPage() {
  const values = [
    {
      icon: Heart,
      title: "Patient-Centered Care",
      description:
        "Your comfort and well-being are our top priorities in everything we do.",
    },
    {
      icon: Award,
      title: "Excellence",
      description:
        "We maintain the highest standards of medical care and surgical precision.",
    },
    {
      icon: Shield,
      title: "Trust & Integrity",
      description:
        "Building lasting relationships through honest, transparent communication.",
    },
    {
      icon: Zap,
      title: "Innovation",
      description:
        "Embracing cutting-edge technology to deliver superior outcomes.",
    },
  ];

  const stats = [
    { number: "25+", label: "Years of Experience" },
    { number: "50K+", label: "Happy Patients" },
    { number: "15+", label: "Expert Doctors" },
    { number: "99%", label: "Success Rate" },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      {/* Hero */}
      <section className="bg-linear-to-br from-teal-600 via-cyan-600 to-teal-600 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              About VisionCare Center
            </h1>
            <p className="text-xl text-teal-100 leading-relaxed">
              For over 25 years, we've been dedicated to preserving and
              enhancing vision through compassionate care, advanced technology,
              and unwavering commitment to excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-4 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-5xl font-bold bg-linear-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-slate-600 dark:text-slate-400 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 px-4 bg-slate-50 dark:bg-slate-950">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
                <p>
                  Founded in 2000, VisionCare Center began with a simple
                  mission: to provide world-class eye care that's accessible,
                  affordable, and always patient-focused.
                </p>
                <p>
                  Today, we're proud to be one of the region's most trusted eye
                  care facilities, serving over 50,000 patients with a team of
                  15+ specialized ophthalmologists and optometrists.
                </p>
                <p>
                  Our state-of-the-art facility combines the latest diagnostic
                  equipment with proven treatment protocols, ensuring you
                  receive the highest quality care at every visit.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative h-96 rounded-2xl overflow-hidden shadow-2xl"
            >
              <img
                src="https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?w=800&h=600&fit=crop"
                alt="Modern eye clinic"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-teal-600/20 to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-4 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              These principles guide every decision we make and every
              interaction we have
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="text-center border-2 border-slate-200 dark:border-slate-800 hover:border-teal-500 dark:hover:border-teal-500 transition-all duration-300 hover:-translate-y-2 h-full bg-white dark:bg-slate-900">
                    <CardHeader>
                      <div className="w-16 h-16 bg-linear-to-br from-teal-100 to-cyan-100 dark:from-teal-900/30 dark:to-cyan-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Icon className="w-8 h-8 text-teal-600 dark:text-teal-400" />
                      </div>
                      <CardTitle className="text-xl text-slate-900 dark:text-white">
                        {value.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-slate-600 dark:text-slate-400">
                        {value.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Accreditations */}
      <section className="py-16 px-4 bg-slate-50 dark:bg-slate-950">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">
            Accredited & Certified
          </h3>
          <div className="flex flex-wrap justify-center gap-8 items-center">
            <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-900 px-6 py-3 rounded-full border border-slate-200 dark:border-slate-800">
              <Shield className="w-6 h-6 text-teal-600 dark:text-teal-400" />
              <span className="font-medium">HIPAA Compliant</span>
            </div>
            <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-900 px-6 py-3 rounded-full border border-slate-200 dark:border-slate-800">
              <Award className="w-6 h-6 text-teal-600 dark:text-teal-400" />
              <span className="font-medium">Joint Commission Accredited</span>
            </div>
            <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-900 px-6 py-3 rounded-full border border-slate-200 dark:border-slate-800">
              <Eye className="w-6 h-6 text-teal-600 dark:text-teal-400" />
              <span className="font-medium">AAO Member</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
