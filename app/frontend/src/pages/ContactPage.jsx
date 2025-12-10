import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MapPin, Phone, Mail, Clock, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactPage() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! We'll get back to you soon.");
  };

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      {/* Hero */}
      <section className="bg-linear-to-br from-teal-600 via-cyan-600 to-teal-600 text-white py-20 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-7xl mx-auto text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">Get in Touch</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-teal-100 max-w-2xl mx-auto">
            We're here to answer your questions and schedule your appointment
          </p>
        </motion.div>
      </section>

      <section className="py-20 px-4 bg-slate-50 dark:bg-slate-950">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <Card className="border-2 border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
                <CardHeader>
                  <CardTitle className="text-2xl text-slate-900 dark:text-white">
                    Get In Touch
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-linear-to-br from-teal-100 to-cyan-100 dark:from-teal-900/30 dark:to-cyan-900/30 flex items-center justify-center shrink-0">
                      <MapPin className="w-6 h-6 text-teal-600 dark:text-teal-400" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900 dark:text-white mb-1">
                        Address
                      </p>
                      <p className="text-slate-600 dark:text-slate-400">
                        123 Eye Care Street
                        <br />
                        Medical District, NY 10001
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-linear-to-br from-teal-100 to-cyan-100 dark:from-teal-900/30 dark:to-cyan-900/30 flex items-center justify-center shrink-0">
                      <Phone className="w-6 h-6 text-teal-600 dark:text-teal-400" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900 dark:text-white mb-1">
                        Phone
                      </p>
                      <p className="text-slate-600 dark:text-slate-400">
                        (123) 456-7890
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-linear-to-br from-teal-100 to-cyan-100 dark:from-teal-900/30 dark:to-cyan-900/30 flex items-center justify-center shrink-0">
                      <Mail className="w-6 h-6 text-teal-600 dark:text-teal-400" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900 dark:text-white mb-1">
                        Email
                      </p>
                      <p className="text-slate-600 dark:text-slate-400">
                        info@visioncare.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-linear-to-br from-teal-100 to-cyan-100 dark:from-teal-900/30 dark:to-cyan-900/30 flex items-center justify-center shrink-0">
                      <Clock className="w-6 h-6 text-teal-600 dark:text-teal-400" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900 dark:text-white mb-1">
                        Hours
                      </p>
                      <p className="text-slate-600 dark:text-slate-400">
                        Mon-Fri: 8AM - 6PM
                        <br />
                        Sat: 9AM - 2PM
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card className="border-2 border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
                <CardHeader>
                  <CardTitle className="text-2xl text-slate-900 dark:text-white">
                    Send Us a Message
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                        Your Name
                      </label>
                      <Input
                        placeholder="John Doe"
                        required
                        className="bg-white dark:bg-slate-950 border-slate-300 dark:border-slate-700"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                        Email Address
                      </label>
                      <Input
                        type="email"
                        placeholder="john@example.com"
                        required
                        className="bg-white dark:bg-slate-950 border-slate-300 dark:border-slate-700"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                        Phone Number
                      </label>
                      <Input
                        type="tel"
                        placeholder="(123) 456-7890"
                        className="bg-white dark:bg-slate-950 border-slate-300 dark:border-slate-700"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                        Your Message
                      </label>
                      <textarea
                        className="w-full min-h-[120px] p-3 border border-slate-300 dark:border-slate-700 rounded-md bg-white dark:bg-slate-950 text-slate-900 dark:text-white focus:ring-2 focus:ring-teal-500 dark:focus:ring-teal-400 focus:border-transparent"
                        placeholder="How can we help you?"
                        required
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-linear-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
