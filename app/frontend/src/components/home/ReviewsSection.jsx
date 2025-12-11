import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, ThumbsUp, Sparkles, Calendar } from "lucide-react";
import { motion } from "framer-motion";

export function ReviewsSection() {
  const [filter, setFilter] = useState("All");

  const reviews = [
    {
      id: 1,
      name: "Michael Thompson",
      service: "LASIK Surgery",
      rating: 5,
      date: "2 weeks ago",
      verified: true,
      review:
        "Life-changing experience! Dr. Anderson and his team were incredible. The procedure was quick, painless, and the results exceeded my expectations. I can finally see 20/20 without glasses!",
      helpful: 24,
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
    },
    {
      id: 2,
      name: "Jennifer Martinez",
      service: "Comprehensive Eye Exam",
      rating: 5,
      date: "1 month ago",
      verified: true,
      review:
        "Dr. Mitchell was thorough and explained everything clearly. The staff is friendly, and the office is modern and clean. Highly recommend for anyone looking for quality eye care!",
      helpful: 18,
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
    },
    {
      id: 3,
      name: "Robert Chen",
      service: "Cataract Surgery",
      rating: 5,
      date: "3 weeks ago",
      verified: true,
      review:
        "Amazing results from my cataract surgery. The entire process was smooth, and the staff made me feel comfortable. My vision is better than it's been in years!",
      helpful: 31,
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop",
    },
    {
      id: 4,
      name: "Lisa Anderson",
      service: "Pediatric Eye Care",
      rating: 5,
      date: "2 months ago",
      verified: true,
      review:
        "Dr. Rodriguez was wonderful with my 6-year-old. She made him feel at ease and caught an issue early. So grateful for the excellent pediatric care!",
      helpful: 15,
      image:
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop",
    },
    {
      id: 5,
      name: "David Wilson",
      service: "Dry Eye Treatment",
      rating: 5,
      date: "1 week ago",
      verified: true,
      review:
        "After years of suffering from dry eyes, the IPL treatment has been a game-changer. Professional staff and state-of-the-art equipment. Highly recommend!",
      helpful: 12,
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop",
    },
    {
      id: 6,
      name: "Amanda Foster",
      service: "Contact Lens Fitting",
      rating: 5,
      date: "3 weeks ago",
      verified: true,
      review:
        "Best contact lens fitting experience I've had. They took time to find the perfect fit and taught me proper care. Very patient and knowledgeable staff!",
      helpful: 9,
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
    },
  ];

  const services = ["All", ...new Set(reviews.map((r) => r.service))];
  const filteredReviews =
    filter === "All" ? reviews : reviews.filter((r) => r.service === filter);

  const averageRating = (
    reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length
  ).toFixed(1);
  const totalReviews = reviews.length;

  return (
    <section className="py-20 px-4 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 font-semibold mb-4 border border-teal-200 dark:border-teal-800">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm">Patient Reviews</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6">
            What Our Patients Say
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Real experiences from real patients
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="border-2 border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-center p-8">
            <div className="text-5xl font-bold bg-linear-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent mb-2">
              {averageRating}
            </div>
            <div className="flex justify-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 fill-amber-400 text-amber-400"
                />
              ))}
            </div>
            <p className="text-slate-600 dark:text-slate-400">Average Rating</p>
          </Card>

          <Card className="border-2 border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-center p-8">
            <div className="text-5xl font-bold bg-linear-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent mb-2">
              {totalReviews}+
            </div>
            <p className="text-slate-600 dark:text-slate-400 mt-2">
              Verified Reviews
            </p>
          </Card>

          <Card className="border-2 border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-center p-8">
            <div className="text-5xl font-bold bg-linear-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent mb-2">
              99%
            </div>
            <p className="text-slate-600 dark:text-slate-400 mt-2">
              Satisfaction Rate
            </p>
          </Card>
        </div>

        {/* Filter */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {services.map((service) => (
            <button
              key={service}
              onClick={() => setFilter(service)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                filter === service
                  ? "bg-linear-to-r from-teal-600 to-cyan-600 text-white"
                  : "bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700 border-2 border-slate-200 dark:border-slate-700"
              }`}
            >
              {service}
            </button>
          ))}
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredReviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="border-2 border-slate-200 dark:border-slate-800 hover:border-teal-500 dark:hover:border-teal-500 transition-colors bg-white dark:bg-slate-900 h-full">
                <CardContent className="p-6">
                  {/* Header */}
                  <div className="flex items-start gap-4 mb-4">
                    <img
                      src={review.image}
                      alt={review.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-semibold text-slate-900 dark:text-white">
                          {review.name}
                        </h4>
                        {review.verified && (
                          <span className="px-2 py-0.5 bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-400 text-xs font-medium rounded-full">
                            Verified
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-slate-500 dark:text-slate-500">
                        {review.service}
                      </p>
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < review.rating
                              ? "fill-amber-400 text-amber-400"
                              : "text-slate-300 dark:text-slate-600"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-slate-500 dark:text-slate-500 flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {review.date}
                    </span>
                  </div>

                  {/* Review Text */}
                  <p className="text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
                    "{review.review}"
                  </p>

                  {/* Helpful */}
                  <div className="flex items-center gap-2 pt-4 border-t border-slate-200 dark:border-slate-800">
                    <button className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-500 hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
                      <ThumbsUp className="w-4 h-4" />
                      Helpful ({review.helpful})
                    </button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button className="bg-linear-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white px-10 py-6 text-lg rounded-full">
            Write a Review
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
