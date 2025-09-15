"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, PhoneCall, MapPin, ExternalLink } from "lucide-react";

export default function Contact() {
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
        <div className="absolute inset-0 overflow-hidden">
          {/* Decorative gradients */}
          <div className="absolute -top-24 -left-24 w-72 h-72 bg-amber-300/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-green-300/20 rounded-full blur-3xl"></div>

          <svg
            className="absolute bottom-0 left-0 right-0 transform translate-y-1/2 opacity-10"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            style={{ height: "60px" }}
          >
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
          </svg>
        </div>

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
              <Mail className="h-4 w-4 mr-2" />
              <span className="font-medium text-sm">Get in Touch</span>
            </motion.div>

            <motion.h1
              className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-amber-700 via-orange-600 to-green-600 text-transparent bg-clip-text"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.7 }}
            >
              Contact Us
            </motion.h1>

            <motion.p
              className="text-lg text-gray-700 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.7 }}
            >
              Have questions about PAIO 2025? Our team is here to help.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {/* Contact Form Card */}
            <motion.div
              variants={fadeInUp}
              className="bg-gradient-to-br from-white to-amber-50 p-8 rounded-xl shadow-sm border border-amber-100"
            >
              <div className="mb-6 inline-flex items-center justify-center bg-amber-100 p-3 rounded-full text-amber-600">
                <Mail className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-amber-700 to-orange-600 text-transparent bg-clip-text">
                Email Us
              </h3>

              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-medium mb-2">
                    General Inquiries
                  </h4>
                  <motion.div
                    whileHover={{ scale: 1.01 }}
                    className="inline-block"
                  >
                    <Link
                      href="mailto:joel@pafricanoi.com"
                      className="text-amber-600 hover:text-amber-800 flex items-center"
                    >
                      <Mail className="h-4 w-4 mr-2" />
                      joel@pafricanoi.com
                    </Link>
                  </motion.div>
                </div>

                <div>
                  <h4 className="text-lg font-medium mb-2">
                    Registration Support
                  </h4>
                  <motion.div
                    whileHover={{ scale: 1.01 }}
                    className="inline-block"
                  >
                    <Link
                      href="mailto:registration@pafricanoi.com"
                      className="text-amber-600 hover:text-amber-800 flex items-center"
                    >
                      <Mail className="h-4 w-4 mr-2" />
                      registration@pafricanoi.com
                    </Link>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Contact Details Card */}
            <motion.div
              variants={fadeInUp}
              className="bg-gradient-to-br from-white to-green-50 p-8 rounded-xl shadow-sm border border-green-100"
            >
              <div className="mb-6 inline-flex items-center justify-center bg-green-100 p-3 rounded-full text-green-600">
                <PhoneCall className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-green-700 to-emerald-600 text-transparent bg-clip-text">
                Key Contacts
              </h3>

              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-medium mb-2">Joel Lee</h4>
                  <p className="text-gray-700 mb-2">PAIO 2025 Coordinator</p>
                  <motion.div
                    whileHover={{ scale: 1.01 }}
                    className="inline-block"
                  >
                    <Link
                      href="mailto:joel@pafricanoi.com"
                      className="text-green-600 hover:text-green-800 flex items-center"
                    >
                      <Mail className="h-4 w-4 mr-2" />
                      joel@pafricanoi.com
                    </Link>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Social Media Links */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-amber-700 via-orange-600 to-green-600 text-transparent bg-clip-text">
              Follow Us
            </h3>
            <div className="flex items-center justify-center space-x-6"></div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
