import React from "react";
import { HeroSection } from "../components/home/HeroSection";
import { ServicesSection } from "../components/home/ServicesSection";

export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <ServicesSection />

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-slate-900 mb-12">
            What Our Patients Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                text: "Excellent care and attention. My LASIK surgery was painless and the results are amazing!",
                rating: 5,
              },
              {
                name: "Michael Chen",
                text: "The staff is incredibly professional and caring. Dr. Smith explained everything clearly.",
                rating: 5,
              },
              {
                name: "Emily Davis",
                text: "Best eye care center in the city. State-of-the-art equipment and experienced doctors.",
                rating: 5,
              },
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-slate-50 p-6 rounded-lg">
                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-2xl">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-slate-700 mb-4 italic">
                  "{testimonial.text}"
                </p>
                <p className="font-semibold text-slate-900">
                  - {testimonial.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
