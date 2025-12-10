import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Eye, Glasses, Zap, Users, Droplet, Sun } from "lucide-react";

const services = [
  {
    icon: Eye,
    title: "Comprehensive Eye Exams",
    description:
      "Thorough eye health assessments using advanced diagnostic equipment",
    color: "text-blue-600",
  },
  {
    icon: Zap,
    title: "LASIK Surgery",
    description: "Bladeless laser vision correction for freedom from glasses",
    color: "text-purple-600",
  },
  {
    icon: Sun,
    title: "Cataract Surgery",
    description: "Advanced phacoemulsification with premium IOL options",
    color: "text-amber-600",
  },
  {
    icon: Glasses,
    title: "Optical Services",
    description: "Designer frames and precision lens fitting",
    color: "text-green-600",
  },
  {
    icon: Droplet,
    title: "Dry Eye Treatment",
    description: "Specialized care for chronic dry eye conditions",
    color: "text-cyan-600",
  },
  {
    icon: Users,
    title: "Pediatric Eye Care",
    description: "Gentle, comprehensive care for children's vision",
    color: "text-pink-600",
  },
];

export function ServicesSection() {
  return (
    <section className="py-20 px-4 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Our Services
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Comprehensive eye care solutions tailored to your unique vision
            needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="hover:shadow-xl transition-shadow duration-300 border-2 hover:border-blue-200"
              >
                <CardHeader>
                  <div
                    className={`w-14 h-14 rounded-lg bg-slate-100 flex items-center justify-center mb-4 ${service.color}`}
                  >
                    <Icon className="w-8 h-8" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
