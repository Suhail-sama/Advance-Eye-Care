import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Calendar,
  Clock,
  User,
  Mail,
  Phone,
  MapPin,
  CheckCircle,
  Sparkles,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function BookingPage() {
  const [step, setStep] = useState(1);
  const [bookingData, setBookingData] = useState({
    // Personal Info
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dateOfBirth: "",

    // Appointment Details
    service: "",
    doctor: "",
    date: "",
    time: "",

    // Additional Info
    reason: "",
    notes: "",
    isNewPatient: true,
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const services = [
    "Comprehensive Eye Exam",
    "LASIK Consultation",
    "Cataract Surgery Consultation",
    "Contact Lens Fitting",
    "Pediatric Eye Care",
    "Glaucoma Treatment",
    "Dry Eye Treatment",
    "Emergency Eye Care",
  ];

  const doctors = [
    { id: 1, name: "Dr. Sarah Mitchell", specialty: "Ophthalmologist" },
    { id: 2, name: "Dr. James Anderson", specialty: "LASIK Surgeon" },
    {
      id: 3,
      name: "Dr. Emily Rodriguez",
      specialty: "Pediatric Ophthalmologist",
    },
  ];

  const timeSlots = [
    "09:00 AM",
    "09:30 AM",
    "10:00 AM",
    "10:30 AM",
    "11:00 AM",
    "11:30 AM",
    "02:00 PM",
    "02:30 PM",
    "03:00 PM",
    "03:30 PM",
    "04:00 PM",
    "04:30 PM",
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Send booking data to backend
    // TODO: Send SMS and Email notifications
    console.log("Booking submitted:", bookingData);
    setIsSubmitted(true);
  };

  const handleInputChange = (field, value) => {
    setBookingData({ ...bookingData, [field]: value });
  };

  const nextStep = () => {
    if (step < 3) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-linear-to-br from-slate-950 via-teal-950 to-slate-950 flex items-center justify-center px-4 py-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-2xl w-full"
        >
          <Card className="border-2 border-teal-500/30 bg-slate-900/80 backdrop-blur-xl shadow-2xl">
            <CardContent className="p-12 text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring" }}
                className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-linear-to-br from-teal-500 to-cyan-500 mb-6"
              >
                <CheckCircle className="w-12 h-12 text-white" />
              </motion.div>

              <h2 className="text-4xl font-bold text-white mb-4">
                Appointment Confirmed!
              </h2>
              <p className="text-xl text-slate-300 mb-8">
                Your appointment has been successfully booked
              </p>

              {/* Appointment Details */}
              <div className="bg-slate-950/50 rounded-xl p-6 mb-8 text-left space-y-4">
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-teal-400" />
                  <div>
                    <p className="text-sm text-slate-400">Date & Time</p>
                    <p className="text-white font-semibold">
                      {bookingData.date} at {bookingData.time}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <User className="w-5 h-5 text-teal-400" />
                  <div>
                    <p className="text-sm text-slate-400">Doctor</p>
                    <p className="text-white font-semibold">
                      {bookingData.doctor}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-teal-400" />
                  <div>
                    <p className="text-sm text-slate-400">Service</p>
                    <p className="text-white font-semibold">
                      {bookingData.service}
                    </p>
                  </div>
                </div>
              </div>

              {/* Notification Info */}
              <div className="bg-teal-500/10 border-2 border-teal-500/30 rounded-xl p-6 mb-8">
                <h3 className="text-lg font-bold text-white mb-4 flex items-center justify-center gap-2">
                  <Sparkles className="w-5 h-5 text-teal-400" />
                  Confirmation Sent
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center justify-center gap-2 text-slate-300">
                    <Mail className="w-4 h-4 text-teal-400" />
                    <span>
                      Email confirmation sent to{" "}
                      <strong className="text-white">
                        {bookingData.email}
                      </strong>
                    </span>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-slate-300">
                    <Phone className="w-4 h-4 text-teal-400" />
                    <span>
                      SMS notification sent to{" "}
                      <strong className="text-white">
                        {bookingData.phone}
                      </strong>
                    </span>
                  </div>
                </div>
              </div>

              {/* Important Notes */}
              <div className="bg-slate-950/50 rounded-xl p-6 mb-8 text-left">
                <h4 className="font-semibold text-white mb-3">
                  Important Notes:
                </h4>
                <ul className="space-y-2 text-sm text-slate-400">
                  <li>• Please arrive 15 minutes early for registration</li>
                  <li>• Bring your insurance card and ID</li>
                  <li>
                    • You'll receive a reminder 24 hours before your appointment
                  </li>
                  <li>• To reschedule, call us at (123) 456-7890</li>
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={() => {
                    setIsSubmitted(false);
                    setStep(1);
                    setBookingData({
                      firstName: "",
                      lastName: "",
                      email: "",
                      phone: "",
                      dateOfBirth: "",
                      service: "",
                      doctor: "",
                      date: "",
                      time: "",
                      reason: "",
                      notes: "",
                      isNewPatient: true,
                    });
                  }}
                  className="flex-1 bg-linear-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white py-6"
                >
                  Book Another Appointment
                </Button>
                <Button
                  onClick={() => (window.location.href = "/")}
                  variant="outline"
                  className="flex-1 border-2 border-slate-700 text-white hover:bg-slate-800 py-6"
                >
                  Back to Home
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 font-semibold mb-4 border border-teal-200 dark:border-teal-800">
            <Calendar className="w-4 h-4" />
            <span className="text-sm">Easy Booking</span>
          </div>
          <h1 className="text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Book Your Appointment
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400">
            Complete the form below and we'll send confirmation to your email
            and phone
          </p>
        </motion.div>

        {/* Progress Steps */}
        <div className="mb-12">
          <div className="flex items-center justify-between max-w-2xl mx-auto">
            {[
              { num: 1, label: "Personal Info" },
              { num: 2, label: "Select Service" },
              { num: 3, label: "Choose Date & Time" },
            ].map((s, idx) => (
              <div key={idx} className="flex items-center flex-1">
                <div className="flex flex-col items-center flex-1">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg transition-all duration-300 ${
                      step >= s.num
                        ? "bg-linear-to-r from-teal-600 to-cyan-600 text-white"
                        : "bg-slate-200 dark:bg-slate-800 text-slate-400"
                    }`}
                  >
                    {s.num}
                  </div>
                  <span
                    className={`text-sm mt-2 font-medium ${
                      step >= s.num
                        ? "text-teal-600 dark:text-teal-400"
                        : "text-slate-400"
                    }`}
                  >
                    {s.label}
                  </span>
                </div>
                {idx < 2 && (
                  <div
                    className={`h-1 flex-1 mx-2 transition-all duration-300 ${
                      step > s.num
                        ? "bg-linear-to-r from-teal-600 to-cyan-600"
                        : "bg-slate-200 dark:bg-slate-800"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Form Card */}
        <Card className="border-2 border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
          <CardContent className="p-8">
            <form onSubmit={handleSubmit}>
              <AnimatePresence mode="wait">
                {/* Step 1: Personal Information */}
                {step === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                      Personal Information
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                          First Name *
                        </label>
                        <Input
                          value={bookingData.firstName}
                          onChange={(e) =>
                            handleInputChange("firstName", e.target.value)
                          }
                          placeholder="John"
                          required
                          className="bg-white dark:bg-slate-950 border-slate-300 dark:border-slate-700"
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                          Last Name *
                        </label>
                        <Input
                          value={bookingData.lastName}
                          onChange={(e) =>
                            handleInputChange("lastName", e.target.value)
                          }
                          placeholder="Doe"
                          required
                          className="bg-white dark:bg-slate-950 border-slate-300 dark:border-slate-700"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                        Email Address *
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                        <Input
                          type="email"
                          value={bookingData.email}
                          onChange={(e) =>
                            handleInputChange("email", e.target.value)
                          }
                          placeholder="you@example.com"
                          className="pl-10 bg-white dark:bg-slate-950 border-slate-300 dark:border-slate-700"
                          required
                        />
                      </div>
                      <p className="text-xs text-slate-500">
                        We'll send confirmation to this email
                      </p>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                        Phone Number *
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                        <Input
                          type="tel"
                          value={bookingData.phone}
                          onChange={(e) =>
                            handleInputChange("phone", e.target.value)
                          }
                          placeholder="(123) 456-7890"
                          className="pl-10 bg-white dark:bg-slate-950 border-slate-300 dark:border-slate-700"
                          required
                        />
                      </div>
                      <p className="text-xs text-slate-500">
                        We'll send SMS reminder to this number
                      </p>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                        Date of Birth *
                      </label>
                      <Input
                        type="date"
                        value={bookingData.dateOfBirth}
                        onChange={(e) =>
                          handleInputChange("dateOfBirth", e.target.value)
                        }
                        className="bg-white dark:bg-slate-950 border-slate-300 dark:border-slate-700"
                        required
                      />
                    </div>

                    <div className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        id="newPatient"
                        checked={bookingData.isNewPatient}
                        onChange={(e) =>
                          handleInputChange("isNewPatient", e.target.checked)
                        }
                        className="w-4 h-4 rounded border-slate-300 dark:border-slate-700 text-teal-600 focus:ring-teal-500"
                      />
                      <label
                        htmlFor="newPatient"
                        className="text-sm text-slate-700 dark:text-slate-300"
                      >
                        I am a new patient
                      </label>
                    </div>
                  </motion.div>
                )}

                {/* Step 2: Select Service */}
                {step === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                      Select Service & Doctor
                    </h3>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                        What service do you need? *
                      </label>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {services.map((service, idx) => (
                          <button
                            key={idx}
                            type="button"
                            onClick={() =>
                              handleInputChange("service", service)
                            }
                            className={`p-4 text-left rounded-lg border-2 transition-all ${
                              bookingData.service === service
                                ? "border-teal-500 bg-teal-50 dark:bg-teal-900/20"
                                : "border-slate-200 dark:border-slate-800 hover:border-teal-300 dark:hover:border-teal-700"
                            }`}
                          >
                            <span
                              className={`font-medium ${
                                bookingData.service === service
                                  ? "text-teal-600 dark:text-teal-400"
                                  : "text-slate-900 dark:text-white"
                              }`}
                            >
                              {service}
                            </span>
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                        Select Doctor (Optional)
                      </label>
                      <div className="grid grid-cols-1 gap-3">
                        {doctors.map((doctor) => (
                          <button
                            key={doctor.id}
                            type="button"
                            onClick={() =>
                              handleInputChange("doctor", doctor.name)
                            }
                            className={`p-4 text-left rounded-lg border-2 transition-all ${
                              bookingData.doctor === doctor.name
                                ? "border-teal-500 bg-teal-50 dark:bg-teal-900/20"
                                : "border-slate-200 dark:border-slate-800 hover:border-teal-300 dark:hover:border-teal-700"
                            }`}
                          >
                            <div className="font-semibold text-slate-900 dark:text-white">
                              {doctor.name}
                            </div>
                            <div className="text-sm text-slate-600 dark:text-slate-400">
                              {doctor.specialty}
                            </div>
                          </button>
                        ))}
                        <button
                          type="button"
                          onClick={() =>
                            handleInputChange("doctor", "Any Available Doctor")
                          }
                          className={`p-4 text-left rounded-lg border-2 transition-all ${
                            bookingData.doctor === "Any Available Doctor"
                              ? "border-teal-500 bg-teal-50 dark:bg-teal-900/20"
                              : "border-slate-200 dark:border-slate-800 hover:border-teal-300 dark:hover:border-teal-700"
                          }`}
                        >
                          <div className="font-semibold text-slate-900 dark:text-white">
                            No Preference
                          </div>
                          <div className="text-sm text-slate-600 dark:text-slate-400">
                            Any available doctor
                          </div>
                        </button>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                        Reason for Visit
                      </label>
                      <textarea
                        value={bookingData.reason}
                        onChange={(e) =>
                          handleInputChange("reason", e.target.value)
                        }
                        placeholder="Brief description of your concern..."
                        rows={3}
                        className="w-full p-3 border-2 border-slate-200 dark:border-slate-800 rounded-lg bg-white dark:bg-slate-950 text-slate-900 dark:text-white focus:border-teal-500 focus:ring-2 focus:ring-teal-500"
                      />
                    </div>
                  </motion.div>
                )}

                {/* Step 3: Date & Time */}
                {step === 3 && (
                  <motion.div
                    key="step3"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                      Choose Date & Time
                    </h3>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                        Preferred Date *
                      </label>
                      <Input
                        type="date"
                        value={bookingData.date}
                        onChange={(e) =>
                          handleInputChange("date", e.target.value)
                        }
                        min={new Date().toISOString().split("T")[0]}
                        className="bg-white dark:bg-slate-950 border-slate-300 dark:border-slate-700"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                        Preferred Time *
                      </label>
                      <div className="grid grid-cols-3 md:grid-cols-4 gap-3">
                        {timeSlots.map((time, idx) => (
                          <button
                            key={idx}
                            type="button"
                            onClick={() => handleInputChange("time", time)}
                            className={`p-3 text-center rounded-lg border-2 transition-all font-medium ${
                              bookingData.time === time
                                ? "border-teal-500 bg-teal-50 dark:bg-teal-900/20 text-teal-600 dark:text-teal-400"
                                : "border-slate-200 dark:border-slate-800 hover:border-teal-300 dark:hover:border-teal-700 text-slate-900 dark:text-white"
                            }`}
                          >
                            {time}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                        Additional Notes
                      </label>
                      <textarea
                        value={bookingData.notes}
                        onChange={(e) =>
                          handleInputChange("notes", e.target.value)
                        }
                        placeholder="Any special requirements or concerns..."
                        rows={3}
                        className="w-full p-3 border-2 border-slate-200 dark:border-slate-800 rounded-lg bg-white dark:bg-slate-950 text-slate-900 dark:text-white focus:border-teal-500 focus:ring-2 focus:ring-teal-500"
                      />
                    </div>

                    {/* Summary */}
                    <div className="bg-teal-50 dark:bg-teal-900/20 border-2 border-teal-200 dark:border-teal-800 rounded-xl p-6">
                      <h4 className="font-bold text-slate-900 dark:text-white mb-4">
                        Appointment Summary
                      </h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-slate-600 dark:text-slate-400">
                            Name:
                          </span>
                          <span className="font-medium text-slate-900 dark:text-white">
                            {bookingData.firstName} {bookingData.lastName}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-600 dark:text-slate-400">
                            Service:
                          </span>
                          <span className="font-medium text-slate-900 dark:text-white">
                            {bookingData.service}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-600 dark:text-slate-400">
                            Doctor:
                          </span>
                          <span className="font-medium text-slate-900 dark:text-white">
                            {bookingData.doctor || "Not selected"}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-600 dark:text-slate-400">
                            Date:
                          </span>
                          <span className="font-medium text-slate-900 dark:text-white">
                            {bookingData.date}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-600 dark:text-slate-400">
                            Time:
                          </span>
                          <span className="font-medium text-slate-900 dark:text-white">
                            {bookingData.time}
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Navigation Buttons */}
              <div className="flex gap-4 mt-8">
                {step > 1 && (
                  <Button
                    type="button"
                    onClick={prevStep}
                    variant="outline"
                    className="flex-1"
                  >
                    Previous
                  </Button>
                )}
                {step < 3 ? (
                  <Button
                    type="button"
                    onClick={nextStep}
                    className="flex-1 bg-linear-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700"
                    disabled={
                      (step === 1 &&
                        (!bookingData.firstName ||
                          !bookingData.lastName ||
                          !bookingData.email ||
                          !bookingData.phone ||
                          !bookingData.dateOfBirth)) ||
                      (step === 2 && !bookingData.service)
                    }
                  >
                    Next
                  </Button>
                ) : (
                  <Button
                    type="submit"
                    className="flex-1 bg-linear-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700"
                    disabled={!bookingData.date || !bookingData.time}
                  >
                    Confirm Booking
                  </Button>
                )}
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
