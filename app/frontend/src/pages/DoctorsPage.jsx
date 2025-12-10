import React from "react";
import { DoctorCard } from "../components/doctors/DoctorCard";
import { useNavigate } from "react-router-dom";

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
    <div className="py-20 px-4 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Meet Our Expert Team
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Our board-certified ophthalmologists and optometrists are dedicated
            to providing exceptional eye care
          </p>
        </div>

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
    </div>
  );
}
