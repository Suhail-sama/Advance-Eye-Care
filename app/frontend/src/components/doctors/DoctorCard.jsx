import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, Calendar } from "lucide-react";

export function DoctorCard({ doctor, onBookAppointment }) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative h-64 bg-linear-to-br from-blue-100 to-blue-200">
        <img
          src={
            doctor.image ||
            `https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop`
          }
          alt={doctor.name}
          className="w-full h-full object-cover"
        />
      </div>
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-2xl font-bold text-slate-900">{doctor.name}</h3>
            <p className="text-blue-600 font-medium">{doctor.specialization}</p>
          </div>
          <div className="flex items-center gap-1 bg-yellow-50 px-2 py-1 rounded">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span className="font-semibold">{doctor.rating}</span>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <p className="text-slate-600">
            {doctor.experience} years of experience
          </p>
          <p className="text-sm text-slate-500 line-clamp-2">{doctor.bio}</p>

          <div className="pt-4 border-t">
            <p className="text-sm text-slate-600 mb-2">Specialties:</p>
            <div className="flex flex-wrap gap-2">
              {doctor.specialties?.map((specialty, idx) => (
                <span
                  key={idx}
                  className="text-xs bg-blue-50 text-blue-700 px-3 py-1 rounded-full"
                >
                  {specialty}
                </span>
              ))}
            </div>
          </div>

          <Button
            className="w-full mt-4"
            onClick={() => onBookAppointment(doctor)}
          >
            <Calendar className="mr-2 h-4 w-4" />
            Book Appointment
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
