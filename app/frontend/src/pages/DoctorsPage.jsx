import React from "react";
import { DoctorCard } from "../components/doctors/DoctorCard";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const doctors = [
  {
    id: 1,
    name: "Dr. Sarah Mitchell",
    specialization: "Ophthalmologist",
    experience: 15,
    rating: 4.9,
    bio: "Specializing in cataract surgery and retinal disorders with advanced surgical techniques.",
    specialties: [
      "Cataract Surgery",
      "Retinal Diseases",
      "Macular Degeneration",
    ],
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop",
  },
  {
    id: 2,
    name: "Dr. James Anderson",
    specialization: "LASIK Surgeon",
    experience: 12,
    rating: 4.8,
    bio: "Expert in laser vision correction with over 10,000 successful LASIK procedures.",
    specialties: ["LASIK", "PRK", "Refractive Surgery"],
    image:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop",
  },
  {
    id: 3,
    name: "Dr. Emily Rodriguez",
    specialization: "Pediatric Ophthalmologist",
    experience: 10,
    rating: 5.0,
    bio: "Compassionate care for children's vision with expertise in pediatric eye conditions.",
    specialties: ["Pediatric Care", "Strabismus", "Amblyopia"],
    image:
      "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=400&fit=crop",
  },
];

export default function DoctorsPage() {
  const navigate = useNavigate();

  const handleBookAppointment = (doctor) => {
    navigate("/book-appointment", { state: { selectedDoctor: doctor } });
  };

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      {/* Hero Section */}
      <section className="bg-linear-to-br from-teal-600 via-cyan-600 to-teal-600 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">Expert Team</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Meet Our Expert Team
          </h1>
          <p className="text-xl text-teal-100 max-w-2xl mx-auto">
            Our board-certified ophthalmologists and optometrists are dedicated
            to providing exceptional eye care
          </p>
        </div>
      </section>

      {/* Doctors Grid */}
      <section className="py-20 px-4 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {doctors.map((doctor) => (
              <DoctorCard
                key={doctor.id}
                doctor={doctor}
                onBookAppointment={handleBookAppointment}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-linear-to-br from-teal-600 via-cyan-600 to-teal-600 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Schedule Your Appointment?
          </h2>
          <p className="text-xl text-teal-100 mb-8">
            Choose from our expert team and book your consultation today
          </p>
          <button
            onClick={() => navigate("/book-appointment")}
            className="bg-white text-teal-600 hover:bg-teal-50 px-10 py-4 rounded-full font-semibold text-lg shadow-lg transition-colors duration-200"
          >
            Book Appointment
          </button>
        </div>
      </section>
    </div>
  );
}
