"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HelpCircle, ChevronDown, ChevronUp } from "lucide-react";

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Who can participate in PAIO?",
      answer:
        "The Pan African Informatics Olympiad (PAIO) is open to high school students from African countries.",
    },
    {
      question: "How are teams composed?",
      answer:
        "Each participating country team consists of up to six contestants, a team leader, a deputy team leader and observers.",
    },
    {
      question: "What is the format of the competition?",
      answer:
        "The competition usually spans two days and includes five hours of problems that test various areas of computer science such as algorithms, data structures, and programming.",
    },
    {
      question: "When and where is PAIO 2025 taking place?",
      answer: "PAIO 2025 will take place on 13th September online.",
    },
    {
      question: "How do countries register for PAIO?",
      answer:
        "Countries register through their national informatics olympiad organization or designated educational body. National coordinators will then fill the registration form on this website.",
    },
    {
      question: "What programming languages are allowed?",
      answer:
        "Typically, participants may use C++, Java, and Python. The specific allowed languages for PAIO 2025 will be confirmed in the official regulations document.",
    },
    {
      question: "Is there a registration fee?",
      answer:
        "There is currently no registration fee this year thanks to our generous sponsor, African Olympiad Academy. There may be a fee in subsequent years though.",
    },
  ];

  // Animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <div className="overflow-hidden">
      {/* Page Header with Gradient */}
      <section className="relative py-16 bg-gradient-to-br from-amber-50 via-orange-50 to-green-100">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <motion.div
              className="inline-flex items-center justify-center bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full text-amber-800 mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <HelpCircle className="h-4 w-4 mr-2" />
              <span className="font-medium text-sm">Knowledge Base</span>
            </motion.div>

            <motion.h1
              className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-amber-700 to-green-600 text-transparent bg-clip-text"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.7 }}
            >
              Frequently Asked Questions
            </motion.h1>

            <motion.p
              className="text-lg text-gray-700 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.7 }}
            >
              Find answers to common questions about the Pan African Informatics
              Olympiad
            </motion.p>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="space-y-6"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-gradient-to-br from-white to-amber-50 rounded-xl shadow-sm border border-amber-100 overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-5 flex items-center justify-between text-left focus:outline-none transition-all"
                >
                  <span className="text-xl font-semibold bg-gradient-to-r from-amber-700 to-green-600 text-transparent bg-clip-text">
                    {faq.question}
                  </span>
                  <div className="flex-shrink-0">
                    {openIndex === index ? (
                      <ChevronUp className="h-5 w-5 text-amber-600" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-amber-600" />
                    )}
                  </div>
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="p-5 pt-0 border-t border-amber-100">
                        <p className="text-lg text-gray-700">{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>

          {/* Contact section */}
          <motion.div
            className="mt-16 p-8 bg-gradient-to-br from-white to-green-50 rounded-xl shadow-sm border border-green-100 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-green-700 to-emerald-600 text-transparent bg-clip-text">
              Still Have Questions?
            </h3>
            <p className="text-lg mb-6 text-gray-700">
              If you couldn't find the answer to your question, feel free to
              contact us directly.
            </p>
            <motion.a
              href="mailto:joel@pafricanoi.com"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white font-medium rounded-lg transition-all shadow-sm"
            >
              Contact Us
              <svg
                className="ml-2 h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
