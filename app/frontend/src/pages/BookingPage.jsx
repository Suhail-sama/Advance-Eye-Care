import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { BookingForm } from "../components/appointments/BookingForm";
import { toast } from "sonner";

export default function BookingPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const selectedDoctor = location.state?.selectedDoctor;

  const handleSubmit = async (appointmentData) => {
    try {
      // Here you would make an API call to your backend
      console.log("Booking appointment:", appointmentData);

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      alert(
        "Appointment booked successfully! You will receive a confirmation email shortly."
      );
      navigate("/");
    } catch (error) {
      alert("Failed to book appointment. Please try again.");
    }
  };

  return (
    <div className="py-20 px-4 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">
            Book an Appointment
          </h1>
          <p className="text-lg text-blue-100">
            Schedule your visit with us - we're here to help with all your eye
            care needs
          </p>
        </div>

        <BookingForm selectedDoctor={selectedDoctor} onSubmit={handleSubmit} />
      </div>
    </div>
  );
}
