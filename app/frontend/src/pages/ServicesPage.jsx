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
} from "lucide-react";
import { useNavigate } from "react-router-dom";

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
    color: "text-blue-600",
    bgColor: "bg-blue-50",
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
    color: "text-purple-600",
    bgColor: "bg-purple-50",
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
    color: "text-amber-600",
    bgColor: "bg-amber-50",
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
    color: "text-green-600",
    bgColor: "bg-green-50",
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
    color: "text-cyan-600",
    bgColor: "bg-cyan-50",
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
    color: "text-pink-600",
    bgColor: "bg-pink-50",
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
    color: "text-red-600",
    bgColor: "bg-red-50",
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
    color: "text-indigo-600",
    bgColor: "bg-indigo-50",
  },
];

export default function ServicesPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="bg-linear-to-br from-blue-600 to-blue-800 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Services</h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            Comprehensive eye care solutions backed by cutting-edge technology
            and decades of expertise
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card
                  key={index}
                  className="hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border-2"
                >
                  <CardHeader>
                    <div
                      className={`w-16 h-16 rounded-xl ${service.bgColor} flex items-center justify-center mb-4`}
                    >
                      <Icon className={`w-9 h-9 ${service.color}`} />
                    </div>
                    <CardTitle className="text-2xl mb-2">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-base">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <p className="font-semibold text-sm text-slate-700 mb-2">
                        What we offer:
                      </p>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li
                            key={idx}
                            className="flex items-start text-sm text-slate-600"
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
                        className="w-full mt-4"
                        onClick={() => navigate("/book-appointment")}
                      >
                        Book Consultation
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">
            Not Sure Which Service You Need?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Schedule a comprehensive consultation with our experts to determine
            the best care plan for your vision
          </p>
          <Button
            size="lg"
            variant="secondary"
            className="text-lg px-8 py-6"
            onClick={() => navigate("/book-appointment")}
          >
            Schedule Consultation
          </Button>
        </div>
      </section>
    </div>
  );
}
