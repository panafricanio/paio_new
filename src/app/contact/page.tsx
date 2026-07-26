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
      {/* Page Header */}
      <section className="relative py-16 bg-amber-50">

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
              className="text-4xl md:text-5xl font-bold mb-4 text-amber-800"
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
              Have questions about PAIO 2025? Our team is still here to help.
              Registration is closed.
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
              className="bg-white p-8 rounded-xl shadow-sm border border-amber-100"
            >
              <div className="mb-6 inline-flex items-center justify-center bg-amber-100 p-3 rounded-full text-amber-600">
                <Mail className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-amber-800">
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
                    Participant Support
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
              className="bg-white p-8 rounded-xl shadow-sm border border-amber-100"
            >
              <div className="mb-6 inline-flex items-center justify-center bg-amber-100 p-3 rounded-full text-amber-600">
                <PhoneCall className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-amber-800">
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
                      className="text-amber-600 hover:text-amber-800 flex items-center"
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
            <h3 className="text-2xl font-bold mb-6 text-amber-800">
              Follow Us
            </h3>
            <div className="flex items-center justify-center space-x-6"></div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
