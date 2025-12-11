import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, CheckCircle, Phone, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function InsurancePage() {
  const acceptedInsurance = [
    {
      category: "Major Medical Insurance",
      providers: [
        "Blue Cross Blue Shield",
        "Aetna",
        "UnitedHealthcare",
        "Cigna",
        "Humana",
        "Medicare",
        "Medicaid",
      ],
    },
    {
      category: "Vision Insurance",
      providers: [
        "VSP (Vision Service Plan)",
        "EyeMed",
        "Davis Vision",
        "Superior Vision",
        "Spectera",
        "Avesis",
      ],
    },
    {
      category: "Other Plans",
      providers: [
        "TriCare",
        "Workers' Compensation",
        "Auto Insurance (accident-related)",
        "Most PPO Plans",
      ],
    },
  ];

  const services = [
    {
      name: "Comprehensive Eye Exams",
      medical: true,
      vision: true,
      description: "Covered annually by most plans",
    },
    {
      name: "Contact Lens Fitting",
      medical: false,
      vision: true,
      description: "Covered by vision insurance",
    },
    {
      name: "Eyeglasses/Frames",
      medical: false,
      vision: true,
      description: "Allowance varies by plan",
    },
    {
      name: "Cataract Surgery",
      medical: true,
      vision: false,
      description: "Covered by medical insurance",
    },
    {
      name: "LASIK Consultation",
      medical: true,
      vision: false,
      description: "Consultation covered, procedure typically not",
    },
    {
      name: "Glaucoma Treatment",
      medical: true,
      vision: false,
      description: "Covered by medical insurance",
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      {/* Hero */}
      <section className="bg-linear-to-br from-teal-600 via-cyan-600 to-teal-600 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6">
            <Shield className="w-4 h-4" />
            <span className="text-sm font-medium">Insurance Information</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Insurance & Payment Options
          </h1>
          <p className="text-xl text-teal-100 max-w-2xl mx-auto">
            We accept most major insurance plans and offer flexible payment
            options
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-20">
        {/* Accepted Insurance */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Accepted Insurance Plans
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400">
              We work with most major insurance providers
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {acceptedInsurance.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="border-2 border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 h-full">
                  <CardHeader>
                    <CardTitle className="text-2xl text-slate-900 dark:text-white">
                      {category.category}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {category.providers.map((provider, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-teal-600 dark:text-teal-400 shrink-0 mt-0.5" />
                          <span className="text-slate-700 dark:text-slate-300">
                            {provider}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Coverage Guide */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Coverage Guide
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400">
              Understanding what's typically covered by different insurance
              types
            </p>
          </motion.div>

          <Card className="border-2 border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-slate-50 dark:bg-slate-800/50">
                    <tr>
                      <th className="text-left p-4 text-slate-900 dark:text-white font-semibold">
                        Service
                      </th>
                      <th className="text-center p-4 text-slate-900 dark:text-white font-semibold">
                        Medical Insurance
                      </th>
                      <th className="text-center p-4 text-slate-900 dark:text-white font-semibold">
                        Vision Insurance
                      </th>
                      <th className="text-left p-4 text-slate-900 dark:text-white font-semibold">
                        Notes
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {services.map((service, index) => (
                      <tr
                        key={index}
                        className="border-t border-slate-200 dark:border-slate-800"
                      >
                        <td className="p-4 text-slate-900 dark:text-white font-medium">
                          {service.name}
                        </td>
                        <td className="p-4 text-center">
                          {service.medical ? (
                            <CheckCircle className="w-6 h-6 text-teal-600 dark:text-teal-400 mx-auto" />
                          ) : (
                            <span className="text-slate-400">—</span>
                          )}
                        </td>
                        <td className="p-4 text-center">
                          {service.vision ? (
                            <CheckCircle className="w-6 h-6 text-teal-600 dark:text-teal-400 mx-auto" />
                          ) : (
                            <span className="text-slate-400">—</span>
                          )}
                        </td>
                        <td className="p-4 text-slate-600 dark:text-slate-400 text-sm">
                          {service.description}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Payment Options */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Additional Payment Options
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-2 border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                  Payment Methods
                </h3>
                <ul className="space-y-3">
                  {[
                    "Cash",
                    "Credit/Debit Cards",
                    "Personal Checks",
                    "FSA/HSA Cards",
                    "CareCredit",
                    "Payment Plans",
                  ].map((method, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-teal-600 dark:text-teal-400" />
                      <span className="text-slate-700 dark:text-slate-300">
                        {method}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                  Financing Available
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  We offer flexible financing options through CareCredit for
                  qualified procedures:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-teal-600 dark:text-teal-400" />
                    <span className="text-slate-700 dark:text-slate-300">
                      No interest if paid in full within 6-24 months
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-teal-600 dark:text-teal-400" />
                    <span className="text-slate-700 dark:text-slate-300">
                      Extended payment plans available
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-teal-600 dark:text-teal-400" />
                    <span className="text-slate-700 dark:text-slate-300">
                      Quick and easy approval process
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Card className="border-2 border-teal-200 dark:border-teal-800 bg-linear-to-br from-teal-50 to-cyan-50 dark:from-teal-900/20 dark:to-cyan-900/20">
            <CardContent className="p-12">
              <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                Questions About Insurance or Billing?
              </h3>
              <p className="text-xl text-slate-600 dark:text-slate-400 mb-8">
                Our billing specialists are here to help verify your coverage
                and answer any questions
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-linear-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white px-10 py-6 text-lg">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Billing Department
                </Button>
                <Button
                  onClick={() => (window.location.href = "/contact")}
                  variant="outline"
                  className="border-2 border-teal-600 dark:border-teal-500 text-teal-600 dark:text-teal-400 hover:bg-teal-50 dark:hover:bg-teal-900/20 px-10 py-6 text-lg"
                >
                  Contact Us Online
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
