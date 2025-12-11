import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Eye, AlertCircle, CheckCircle, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function VisionTestPage() {
  const [testType, setTestType] = useState(null);
  const [testComplete, setTestComplete] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);

  const tests = [
    {
      id: "visual-acuity",
      name: "Visual Acuity Test",
      description: "Test your ability to see details at various distances",
      icon: Eye,
      color: "from-teal-500 to-cyan-500",
    },
    {
      id: "color-blind",
      name: "Color Blindness Test",
      description: "Check for color vision deficiencies",
      icon: Eye,
      color: "from-cyan-500 to-teal-600",
    },
    {
      id: "astigmatism",
      name: "Astigmatism Test",
      description: "Screen for astigmatism in your vision",
      icon: Eye,
      color: "from-teal-600 to-cyan-600",
    },
  ];

  const startTest = (testId) => {
    setTestType(testId);
    setCurrentStep(1);
  };

  const completeTest = () => {
    setTestComplete(true);
  };

  if (testComplete) {
    return (
      <div className="min-h-screen bg-linear-to-br from-slate-950 via-teal-950 to-slate-950 flex items-center justify-center px-4 py-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-2xl w-full"
        >
          <Card className="border-2 border-teal-500/30 bg-slate-900/80 backdrop-blur-xl shadow-2xl">
            <CardContent className="p-12 text-center">
              <CheckCircle className="w-20 h-20 text-teal-400 mx-auto mb-6" />
              <h2 className="text-4xl font-bold text-white mb-4">
                Test Complete!
              </h2>
              <p className="text-xl text-slate-300 mb-8">
                Your vision screening results are ready
              </p>

              <div className="bg-slate-950/50 rounded-xl p-6 mb-8 text-left">
                <h3 className="text-lg font-bold text-white mb-4">
                  Important Notice:
                </h3>
                <ul className="space-y-2 text-sm text-slate-400">
                  <li className="flex items-start gap-2">
                    <AlertCircle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                    <span>
                      This is a basic screening tool, not a substitute for a
                      professional eye exam
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertCircle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                    <span>
                      If you notice any vision changes, schedule an appointment
                      immediately
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertCircle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                    <span>
                      We recommend comprehensive eye exams every 1-2 years
                    </span>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={() => (window.location.href = "/book-appointment")}
                  className="flex-1 bg-linear-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white py-6"
                >
                  Schedule Professional Exam
                </Button>
                <Button
                  onClick={() => {
                    setTestType(null);
                    setTestComplete(false);
                    setCurrentStep(0);
                  }}
                  variant="outline"
                  className="flex-1 border-2 border-slate-700 text-white hover:bg-slate-800 py-6"
                >
                  Take Another Test
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    );
  }

  if (testType) {
    return (
      <div className="min-h-screen bg-white dark:bg-slate-950 py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="border-2 border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
            <CardHeader>
              <CardTitle className="text-3xl text-slate-900 dark:text-white">
                {tests.find((t) => t.id === testType)?.name}
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              {/* Test Content */}
              <div className="text-center py-20">
                {testType === "visual-acuity" && (
                  <div className="space-y-8">
                    <p className="text-slate-600 dark:text-slate-400 mb-8">
                      Cover one eye and read the letters below from top to
                      bottom
                    </p>
                    <div className="space-y-6">
                      <div className="text-8xl font-bold text-slate-900 dark:text-white">
                        E
                      </div>
                      <div className="text-6xl font-bold text-slate-900 dark:text-white">
                        F P
                      </div>
                      <div className="text-4xl font-bold text-slate-900 dark:text-white">
                        T O Z
                      </div>
                      <div className="text-2xl font-bold text-slate-900 dark:text-white">
                        L P E D
                      </div>
                      <div className="text-xl font-bold text-slate-900 dark:text-white">
                        P E C F D
                      </div>
                    </div>
                  </div>
                )}

                {testType === "color-blind" && (
                  <div className="space-y-8">
                    <p className="text-slate-600 dark:text-slate-400 mb-8">
                      What number do you see in the circle below?
                    </p>
                    <div className="w-64 h-64 mx-auto rounded-full bg-linear-to-br from-red-400 via-orange-400 to-yellow-400 flex items-center justify-center">
                      <span className="text-6xl font-bold text-green-700">
                        12
                      </span>
                    </div>
                  </div>
                )}

                {testType === "astigmatism" && (
                  <div className="space-y-8">
                    <p className="text-slate-600 dark:text-slate-400 mb-8">
                      Look at the lines below. Do any appear darker or sharper
                      than others?
                    </p>
                    <svg width="300" height="300" className="mx-auto">
                      {[...Array(12)].map((_, i) => {
                        const angle = (i * 30 * Math.PI) / 180;
                        const x1 = 150 + 50 * Math.cos(angle);
                        const y1 = 150 + 50 * Math.sin(angle);
                        const x2 = 150 + 140 * Math.cos(angle);
                        const y2 = 150 + 140 * Math.sin(angle);
                        return (
                          <line
                            key={i}
                            x1={x1}
                            y1={y1}
                            x2={x2}
                            y2={y2}
                            stroke="currentColor"
                            strokeWidth="3"
                            className="text-slate-900 dark:text-white"
                          />
                        );
                      })}
                    </svg>
                  </div>
                )}
              </div>

              {/* Disclaimer */}
              <div className="bg-amber-50 dark:bg-amber-900/20 border-2 border-amber-200 dark:border-amber-800 rounded-xl p-4 mt-8">
                <div className="flex gap-3">
                  <AlertCircle className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                  <p className="text-sm text-amber-800 dark:text-amber-300">
                    This is a basic screening tool. For accurate results and
                    proper diagnosis, please schedule a comprehensive eye
                    examination with one of our doctors.
                  </p>
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-4 mt-8">
                <Button
                  onClick={() => setTestType(null)}
                  variant="outline"
                  className="flex-1"
                >
                  Back
                </Button>
                <Button
                  onClick={completeTest}
                  className="flex-1 bg-linear-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700"
                >
                  Complete Test
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      {/* Hero */}
      <section className="bg-linear-to-br from-teal-600 via-cyan-600 to-teal-600 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">Online Screening</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Vision Test</h1>
          <p className="text-xl text-teal-100 max-w-2xl mx-auto">
            Quick online screening tools to check your vision. Not a substitute
            for professional care.
          </p>
        </div>
      </section>

      {/* Tests */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tests.map((test, index) => {
              const Icon = test.icon;
              return (
                <motion.div
                  key={test.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="border-2 border-slate-200 dark:border-slate-800 hover:border-teal-500 dark:hover:border-teal-500 transition-colors bg-white dark:bg-slate-900 h-full">
                    <CardContent className="p-8 text-center">
                      <div
                        className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-linear-to-br ${test.color} flex items-center justify-center`}
                      >
                        <Icon className="w-10 h-10 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                        {test.name}
                      </h3>
                      <p className="text-slate-600 dark:text-slate-400 mb-6">
                        {test.description}
                      </p>
                      <Button
                        onClick={() => startTest(test.id)}
                        className="w-full bg-linear-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700"
                      >
                        Start Test
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          {/* Important Notice */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-12"
          >
            <Card className="border-2 border-amber-200 dark:border-amber-800 bg-amber-50 dark:bg-amber-900/20">
              <CardContent className="p-8">
                <div className="flex gap-4">
                  <AlertCircle className="w-8 h-8 text-amber-600 dark:text-amber-400 shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-amber-900 dark:text-amber-200 mb-2">
                      Important Disclaimer
                    </h3>
                    <p className="text-amber-800 dark:text-amber-300 leading-relaxed">
                      These online vision tests are basic screening tools and
                      should not replace professional eye examinations. They
                      cannot detect all vision problems or eye diseases. For
                      accurate diagnosis and treatment, please schedule a
                      comprehensive eye exam with one of our qualified
                      ophthalmologists.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
