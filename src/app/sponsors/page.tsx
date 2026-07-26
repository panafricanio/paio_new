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
      logo: "/images/AOA.svg",
      url: "https://africanolympiadfoundation.org/",
    },
  ];

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
              <Building className="h-4 w-4 mr-2" />
              <span className="font-medium text-sm">Our Partners</span>
            </motion.div>

            <motion.h1
              className="text-4xl md:text-5xl font-bold mb-4 text-amber-800"
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
              PAIO 2025 would not have been possible without the generous
              support of our sponsors
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
                className="bg-white p-6 rounded-xl shadow-sm text-center border border-amber-100 transition-all"
              >
                <div className="flex justify-center mb-6">
                  <div className="w-32 h-32 bg-gray-50 rounded-full flex items-center justify-center p-2 shadow-sm">
                    <Image
                      src={sponsor.logo}
                      alt={`${sponsor.name} logo`}
                      width={128}
                      height={128}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-amber-800">
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
                    className="inline-flex items-center text-amber-700 hover:text-amber-600 font-medium"
                  >
                    Visit Website
                    <ExternalLink className="h-4 w-4 ml-1" />
                  </Link>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="mt-16 text-center p-8 bg-white rounded-xl shadow-sm border border-amber-100"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center justify-center bg-amber-100 p-3 rounded-full text-amber-600 mb-6">
              <HeartHandshake className="h-8 w-8" />
            </div>

            <h3 className="text-2xl font-bold mb-4 text-amber-800">
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
                className="bg-amber-600 hover:bg-amber-700 text-white font-medium px-6 py-3 rounded-lg inline-flex items-center gap-2 transition-all shadow-sm"
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
