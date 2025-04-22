"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ExternalLink, Building, HeartHandshake } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Sponsors() {
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

  const sponsors = [
    {
      name: "African Olympiad Academy",
      logo: "./AOA.svg",
      url: "https://africanolympiadfoundation.org/",
    },
  ];

  return (
    <div className="overflow-hidden">
      {/* Page Header with Gradient */}
      <section className="relative py-16 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100">
        <div className="absolute inset-0 overflow-hidden">
          {/* Decorative gradients */}
          <div className="absolute -top-24 -left-24 w-72 h-72 bg-blue-300/20 rounded-full blur-3xl"></div>

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
              className="inline-flex items-center justify-center bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full text-primary mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <Building className="h-4 w-4 mr-2" />
              <span className="font-medium text-sm">Our Partners</span>
            </motion.div>

            <motion.h1
              className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-700 to-indigo-600 text-transparent bg-clip-text"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.7 }}
            >
              Sponsors
            </motion.h1>

            <motion.p
              className="text-lg text-gray-700 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.7 }}
            >
              PAIO 2025 would not be possible without the generous support of
              our sponsors
            </motion.p>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {sponsors.map((sponsor, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -5 }}
                className="bg-gradient-to-br from-white to-blue-50 p-6 rounded-xl shadow-md text-center border border-blue-100 transition-all"
              >
                <div className="flex justify-center mb-6">
                  <div className="w-32 h-32 bg-gradient-to-br from-gray-50 to-white rounded-full flex items-center justify-center p-2 shadow-sm">
                    <img
                      src={sponsor.logo}
                      alt={`${sponsor.name} logo`}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3 bg-gradient-to-r from-blue-700 to-indigo-600 text-transparent bg-clip-text">
                  {sponsor.name}
                </h3>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="inline-block"
                >
                  <Link
                    href={sponsor.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-primary hover:text-primary/80 font-medium"
                  >
                    Visit Website
                    <ExternalLink className="h-4 w-4 ml-1" />
                  </Link>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="mt-16 text-center p-8 bg-gradient-to-br from-white to-indigo-50 rounded-xl shadow-sm border border-indigo-100"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center justify-center bg-indigo-100 p-3 rounded-full text-indigo-600 mb-6">
              <HeartHandshake className="h-8 w-8" />
            </div>

            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-700 to-indigo-600 text-transparent bg-clip-text">
              Become a Sponsor
            </h3>
            <p className="text-lg mb-6 text-gray-700">
              Interested in supporting informatics education across Africa?
              Consider becoming a sponsor for future PAIO events.
            </p>
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="inline-block"
            >
              <Link
                href="mailto:joel@pafricanoi.com"
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium px-6 py-3 rounded-lg inline-flex items-center gap-2 transition-all shadow-sm"
              >
                Contact Us About Sponsorship
                <ExternalLink className="h-4 w-4" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
