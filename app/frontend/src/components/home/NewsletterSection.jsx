import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

export function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Send to backend
    console.log("Newsletter signup:", email);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setEmail("");
    }, 3000);
  };

  return (
    <section className="py-20 px-4 bg-linear-to-br from-teal-600 via-cyan-600 to-teal-600">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Card className="border-2 border-white/20 bg-white/10 backdrop-blur-xl shadow-2xl">
            <CardContent className="p-12 text-center">
              {!isSubmitted ? (
                <>
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center mx-auto mb-6">
                    <Mail className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-4xl font-bold text-white mb-4">
                    Stay Informed About Your Eye Health
                  </h2>
                  <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto">
                    Subscribe to our newsletter for expert eye care tips, latest
                    treatments, and exclusive offers
                  </p>

                  <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                    <div className="flex gap-3">
                      <Input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        required
                        className="flex-1 h-14 bg-white dark:bg-slate-900 border-0 text-lg"
                      />
                      <Button
                        type="submit"
                        className="bg-slate-900 hover:bg-slate-800 text-white px-8 h-14"
                      >
                        Subscribe
                      </Button>
                    </div>
                    <p className="text-sm text-teal-100 mt-4">
                      We respect your privacy. Unsubscribe at any time.
                    </p>
                  </form>
                </>
              ) : (
                <div className="py-8">
                  <CheckCircle className="w-16 h-16 text-white mx-auto mb-4" />
                  <h3 className="text-3xl font-bold text-white mb-2">
                    Thank You!
                  </h3>
                  <p className="text-xl text-teal-100">
                    You're now subscribed to our newsletter
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
