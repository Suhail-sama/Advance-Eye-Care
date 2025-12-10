import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, Calendar } from "lucide-react";

export function DoctorCard({ doctor, onBookAppointment }) {
  return (
    <Card className="overflow-hidden border-2 border-slate-200 dark:border-slate-800 hover:border-teal-500 dark:hover:border-teal-500 transition-colors duration-300 bg-white dark:bg-slate-900 h-full">
      {/* Doctor Image */}
      <div className="relative h-64 bg-linear-to-br from-teal-100 to-cyan-100 dark:from-teal-900/30 dark:to-cyan-900/30 overflow-hidden">
        <img
          src={
            doctor.image ||
            `https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop`
          }
          alt={doctor.name}
          className="w-full h-full object-cover"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-slate-900/40 to-transparent" />

        {/* Rating Badge */}
        <div className="absolute top-4 right-4 flex items-center gap-1 bg-white dark:bg-slate-900 backdrop-blur-sm px-3 py-2 rounded-full shadow-lg border border-slate-200 dark:border-slate-800">
          <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
          <span className="font-bold text-slate-900 dark:text-white">
            {doctor.rating}
          </span>
        </div>
      </div>

      <CardHeader>
        <div className="space-y-2">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
            {doctor.name}
          </h3>
          <p className="text-teal-600 dark:text-teal-400 font-semibold">
            {doctor.specialization}
          </p>
        </div>
      </CardHeader>

      <CardContent>
        <div className="space-y-4">
          {/* Experience */}
          <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
            <div className="w-2 h-2 rounded-full bg-teal-500" />
            <span className="font-medium">
              {doctor.experience} years of experience
            </span>
          </div>

          {/* Bio */}
          <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            {doctor.bio}
          </p>

          {/* Specialties */}
          <div className="pt-4 border-t border-slate-200 dark:border-slate-800">
            <p className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">
              Specialties:
            </p>
            <div className="flex flex-wrap gap-2">
              {doctor.specialties?.map((specialty, idx) => (
                <span
                  key={idx}
                  className="text-xs bg-teal-50 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 px-3 py-1.5 rounded-full font-medium border border-teal-200 dark:border-teal-800"
                >
                  {specialty}
                </span>
              ))}
            </div>
          </div>

          {/* Book Button */}
          <Button
            className="w-full mt-4 bg-linear-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white shadow-md transition-all duration-200"
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
