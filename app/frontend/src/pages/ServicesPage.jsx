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
  Heart,
  Stethoscope,
  Sparkles,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const services = [
  {
    icon: Eye,
    title: "Comprehensive Eye Exams",
    description:
      "Thorough eye health assessments using advanced diagnostic equipment to detect early signs of eye conditions.",
    features: [
      "Visual acuity testing",
      "Retinal examination",
      "Glaucoma screening",
      "Prescription updates",
    ],
    color: "text-teal-600 dark:text-teal-400",
    bgColor: "bg-teal-50 dark:bg-teal-900/20",
  },
  {
    icon: Zap,
    title: "LASIK Surgery",
    description:
      "Bladeless laser vision correction for freedom from glasses and contact lenses.",
    features: [
      "Wavefront-guided LASIK",
      "Custom LASIK",
      "PRK",
      "Free lifetime enhancements",
    ],
    color: "text-cyan-600 dark:text-cyan-400",
    bgColor: "bg-cyan-50 dark:bg-cyan-900/20",
  },
  {
    icon: Sun,
    title: "Cataract Surgery",
    description:
      "Advanced phacoemulsification with premium IOL options for crystal clear vision.",
    features: [
      "Micro-incision surgery",
      "Premium IOLs",
      "Multifocal lenses",
      "Same-day procedure",
    ],
    color: "text-teal-600 dark:text-teal-400",
    bgColor: "bg-teal-50 dark:bg-teal-900/20",
  },
  {
    icon: Glasses,
    title: "Optical Services",
    description:
      "Designer frames and precision lens fitting with the latest eyewear technology.",
    features: [
      "Designer frames",
      "Blue light blocking",
      "Progressive lenses",
      "Sports eyewear",
    ],
    color: "text-cyan-600 dark:text-cyan-400",
    bgColor: "bg-cyan-50 dark:bg-cyan-900/20",
  },
  {
    icon: Droplet,
    title: "Dry Eye Treatment",
    description:
      "Specialized care for chronic dry eye conditions using advanced treatment protocols.",
    features: [
      "IPL therapy",
      "LipiFlow treatment",
      "Punctal plugs",
      "Prescription therapy",
    ],
    color: "text-teal-600 dark:text-teal-400",
    bgColor: "bg-teal-50 dark:bg-teal-900/20",
  },
  {
    icon: Users,
    title: "Pediatric Eye Care",
    description:
      "Gentle, comprehensive care for children's vision with specialized pediatric expertise.",
    features: [
      "Vision screening",
      "Amblyopia treatment",
      "Strabismus care",
      "Myopia control",
    ],
    color: "text-cyan-600 dark:text-cyan-400",
    bgColor: "bg-cyan-50 dark:bg-cyan-900/20",
  },
  {
    icon: Heart,
    title: "Retinal Care",
    description:
      "Expert diagnosis and treatment of retinal conditions including diabetic retinopathy.",
    features: [
      "Retinal imaging",
      "Injection therapy",
      "Laser treatment",
      "Surgical repair",
    ],
    color: "text-teal-600 dark:text-teal-400",
    bgColor: "bg-teal-50 dark:bg-teal-900/20",
  },
  {
    icon: Stethoscope,
    title: "Glaucoma Management",
    description:
      "Comprehensive glaucoma care to preserve your vision for life.",
    features: [
      "Pressure monitoring",
      "Visual field testing",
      "Medication management",
      "Laser therapy",
    ],
    color: "text-cyan-600 dark:text-cyan-400",
    bgColor: "bg-cyan-50 dark:bg-cyan-900/20",
  },
];

export default function ServicesPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      {/* Hero Section */}
      <section className="bg-linear-to-br from-teal-600 via-cyan-600 to-teal-600 text-white py-20 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-7xl mx-auto text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">Comprehensive Care</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Services</h1>
          <p className="text-xl md:text-2xl text-teal-100 max-w-3xl mx-auto">
            Comprehensive eye care solutions backed by cutting-edge technology
            and decades of expertise
          </p>
        </motion.div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 bg-slate-50 dark:bg-slate-950">
        <div className="max-w-7xl mx-auto">
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
                  <Card className="hover:shadow-2xl dark:hover:shadow-teal-500/10 transition-all duration-300 hover:-translate-y-1 border-2 border-slate-200 dark:border-slate-800 hover:border-teal-500 dark:hover:border-teal-500 h-full bg-white dark:bg-slate-900">
                    <CardHeader>
                      <div
                        className={`w-16 h-16 rounded-xl ${service.bgColor} flex items-center justify-center mb-4`}
                      >
                        <Icon className={`w-9 h-9 ${service.color}`} />
                      </div>
                      <CardTitle className="text-2xl mb-2 text-slate-900 dark:text-white">
                        {service.title}
                      </CardTitle>
                      <CardDescription className="text-base text-slate-600 dark:text-slate-400">
                        {service.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <p className="font-semibold text-sm text-slate-700 dark:text-slate-300 mb-2">
                          What we offer:
                        </p>
                        <ul className="space-y-2">
                          {service.features.map((feature, idx) => (
                            <li
                              key={idx}
                              className="flex items-start text-sm text-slate-600 dark:text-slate-400"
                            >
                              <span className={`mr-2 mt-1 ${service.color}`}>
                                ✓
                              </span>
                              {feature}
                            </li>
                          ))}
                        </ul>
                        <Button
                          variant="outline"
                          className="w-full mt-4 border-teal-500 text-teal-600 hover:bg-teal-50 dark:border-teal-500 dark:text-teal-400 dark:hover:bg-teal-900/20"
                          onClick={() => navigate("/book-appointment")}
                        >
                          Book Consultation
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-linear-to-br from-teal-600 via-cyan-600 to-teal-600 text-white py-16 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl font-bold mb-4">
            Not Sure Which Service You Need?
          </h2>
          <p className="text-xl text-teal-100 mb-8">
            Schedule a comprehensive consultation with our experts to determine
            the best care plan for your vision
          </p>
          <Button
            size="lg"
            className="bg-white text-teal-600 hover:bg-slate-100 text-lg px-8 py-6 rounded-full shadow-xl hover:scale-105 transition-all duration-300"
            onClick={() => navigate("/book-appointment")}
          >
            Schedule Consultation
          </Button>
        </motion.div>
      </section>
    </div>
  );
}
