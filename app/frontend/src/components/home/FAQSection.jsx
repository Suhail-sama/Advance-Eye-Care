import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronDown, Search, Sparkles } from "lucide-react";
import { Input } from "@/components/ui/input";
import { motion, AnimatePresence } from "framer-motion";

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const faqs = [
    {
      category: "General",
      questions: [
        {
          q: "What are your operating hours?",
          a: "We are open Monday to Friday from 8:00 AM to 6:00 PM, and Saturdays from 9:00 AM to 2:00 PM. We're closed on Sundays and major holidays.",
        },
        {
          q: "Do you accept insurance?",
          a: "Yes, we accept most major insurance plans including Medicare and Medicaid. Please contact our office with your insurance information to verify coverage before your appointment.",
        },
        {
          q: "How do I book an appointment?",
          a: "You can book an appointment through our online booking system, by calling our office at (123) 456-7890, or by visiting us in person. Online booking is available 24/7.",
        },
      ],
    },
    {
      category: "Services",
      questions: [
        {
          q: "What is LASIK and am I a good candidate?",
          a: "LASIK is a laser vision correction procedure that reshapes the cornea to improve vision. Good candidates are typically over 18, have stable vision for at least a year, and have healthy eyes. Schedule a consultation to determine if LASIK is right for you.",
        },
        {
          q: "How long does a comprehensive eye exam take?",
          a: "A comprehensive eye exam typically takes 45-60 minutes. This includes vision testing, eye health evaluation, and consultation with the doctor.",
        },
        {
          q: "Do you offer emergency eye care?",
          a: "Yes, we provide emergency eye care services during business hours. For after-hours emergencies, please call our emergency line at (123) 456-7891.",
        },
      ],
    },
    {
      category: "Payment & Billing",
      questions: [
        {
          q: "What payment methods do you accept?",
          a: "We accept cash, credit/debit cards (Visa, MasterCard, American Express), checks, and offer financing options through CareCredit for qualified procedures.",
        },
        {
          q: "Do you offer payment plans?",
          a: "Yes, we offer flexible payment plans for procedures not covered by insurance. Our staff can discuss available options during your consultation.",
        },
        {
          q: "Will I receive an itemized bill?",
          a: "Yes, you will receive a detailed, itemized bill for all services. We can also provide this information to your insurance company for reimbursement purposes.",
        },
      ],
    },
    {
      category: "Eye Health",
      questions: [
        {
          q: "How often should I get an eye exam?",
          a: "Adults should have comprehensive eye exams every 1-2 years, or annually if you're over 60, wear contacts, or have existing eye conditions. Children should have their first exam at 6 months, then at age 3, and before starting school.",
        },
        {
          q: "What are the signs of cataracts?",
          a: "Common signs include cloudy or blurry vision, increased sensitivity to glare, difficulty seeing at night, fading of colors, and frequent changes in eyeglass prescription.",
        },
        {
          q: "Can dry eyes be treated?",
          a: "Yes, we offer several treatments for dry eyes including prescription eye drops, punctal plugs, IPL therapy, and LipiFlow treatment. The best option depends on the severity and cause of your condition.",
        },
      ],
    },
  ];

  const filteredFAQs = faqs
    .map((category) => ({
      ...category,
      questions: category.questions.filter(
        (faq) =>
          faq.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
          faq.a.toLowerCase().includes(searchQuery.toLowerCase())
      ),
    }))
    .filter((category) => category.questions.length > 0);

  const toggleFAQ = (categoryIndex, questionIndex) => {
    const index = `${categoryIndex}-${questionIndex}`;
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 px-4 bg-white dark:bg-slate-950">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 font-semibold mb-4 border border-teal-200 dark:border-teal-800">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm">FAQ</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Find answers to common questions about our services
          </p>
        </motion.div>

        {/* Search */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <Input
              type="text"
              placeholder="Search for answers..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 h-12 text-base border-2 border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 focus:border-teal-500"
            />
          </div>
        </motion.div>

        {/* FAQ Categories */}
        <div className="space-y-6">
          {filteredFAQs.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1 }}
            >
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                {category.category}
              </h3>
              <div className="space-y-2">
                {category.questions.map((faq, questionIndex) => {
                  const isOpen =
                    openIndex === `${categoryIndex}-${questionIndex}`;
                  return (
                    <Card
                      key={questionIndex}
                      className="border-2 border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden"
                    >
                      <button
                        onClick={() => toggleFAQ(categoryIndex, questionIndex)}
                        className="w-full text-left p-4 flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
                      >
                        <span className="font-semibold text-slate-900 dark:text-white pr-4 text-sm md:text-base">
                          {faq.q}
                        </span>
                        <ChevronDown
                          className={`w-5 h-5 text-teal-600 dark:text-teal-400 shrink-0 transition-transform duration-200 ${
                            isOpen ? "transform rotate-180" : ""
                          }`}
                        />
                      </button>
                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            <CardContent className="pt-0 pb-4 px-4 text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                              {faq.a}
                            </CardContent>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </Card>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>

        {/* No Results */}
        {filteredFAQs.length === 0 && (
          <div className="text-center py-12">
            <p className="text-slate-600 dark:text-slate-400 text-base">
              No results found for "{searchQuery}". Try a different search term.
            </p>
          </div>
        )}

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 text-center p-6 bg-linear-to-r from-teal-50 to-cyan-50 dark:from-teal-900/20 dark:to-cyan-900/20 rounded-xl border-2 border-teal-200 dark:border-teal-800"
        >
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
            Still have questions?
          </h3>
          <p className="text-slate-600 dark:text-slate-400 mb-5 text-sm">
            Our team is here to help. Contact us for personalized assistance.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="/contact">
              <button className="px-6 py-2.5 bg-linear-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white font-semibold rounded-full transition-all duration-200 text-sm">
                Contact Us
              </button>
            </a>
            <a href="tel:+1234567890">
              <button className="px-6 py-2.5 border-2 border-teal-600 dark:border-teal-500 text-teal-600 dark:text-teal-400 hover:bg-teal-50 dark:hover:bg-teal-900/20 font-semibold rounded-full transition-all duration-200 text-sm">
                Call (123) 456-7890
              </button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
