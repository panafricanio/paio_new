"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Newspaper, Mail, Download, ChevronRight } from "lucide-react";

export default function Media() {
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

  // Updated PAIO news items (instead of PAMO)
  const newsItems = [
    {
      title: "PAIO 2025 Registration Now Open",
      date: "April 1, 2025",
      excerpt:
        "Registration for the Pan African Informatics Olympiad 2025 is now open. Teams from all African countries are invited to participate.",
      link: "#",
    },
    {
      title: "South Africa to Host PAIO 2025",
      date: "January 15, 2025",
      excerpt:
        "The University of the Witwatersrand in Johannesburg, South Africa, has been selected as the host for PAIO 2025.",
      link: "#",
    },
    {
      title: "Results of PAIO 2024",
      date: "August 25, 2024",
      excerpt:
        "Congratulations to all participants of PAIO 2024. The full results and medal winners are now available.",
      link: "#",
    },
  ];

  const mediaContacts = [
    {
      name: "Dr. Jonathan Kariv",
      role: "Media Coordinator",
      email: "jonathan.kariv@wits.ac.za",
    },
  ];

  return (
    <div className="overflow-hidden">
      {/* Page Header with Gradient */}
      <section className="relative py-16 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100">
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
              <Newspaper className="h-4 w-4 mr-2" />
              <span className="font-medium text-sm">News & Press</span>
            </motion.div>

            <motion.h1
              className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-700 to-indigo-600 text-transparent bg-clip-text"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.7 }}
            >
              Media
            </motion.h1>

            <motion.p
              className="text-lg text-gray-700 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.7 }}
            >
              Latest news, press releases and media resources for the Pan
              African Informatics Olympiad
            </motion.p>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-10">
        <div className="max-w-4xl mx-auto">
          {/* Press Releases Section */}
          <motion.section
            className="mb-16"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-700 to-indigo-600 text-transparent bg-clip-text"
            >
              Press Releases & News
            </motion.h2>

            <motion.div className="space-y-6">
              {newsItems.map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-gradient-to-br from-white to-blue-50 border border-blue-100 p-6 rounded-xl shadow-sm hover:shadow-md transition-all"
                  variants={fadeInUp}
                  whileHover={{ y: -5 }}
                >
                  <h3 className="text-xl font-semibold mb-2 bg-gradient-to-r from-blue-700 to-indigo-600 bg-clip-text text-transparent">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 mb-3 text-sm">{item.date}</p>
                  <p className="mb-4 text-gray-700">{item.excerpt}</p>
                  <Button asChild variant="outline" className="group">
                    <Link href={item.link} className="flex items-center">
                      Read More
                      <ChevronRight className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-0.5" />
                    </Link>
                  </Button>
                </motion.div>
              ))}
            </motion.div>
          </motion.section>

          {/* Media Contacts Section */}
          <motion.section
            className="mb-16"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-700 to-indigo-600 text-transparent bg-clip-text"
            >
              Media Contacts
            </motion.h2>

            <motion.div className="space-y-4" variants={staggerContainer}>
              {mediaContacts.map((contact, index) => (
                <motion.div
                  key={index}
                  className="bg-gradient-to-br from-white to-indigo-50 border border-indigo-100 p-6 rounded-xl shadow-sm"
                  variants={fadeInUp}
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        {contact.name}
                      </h3>
                      <p className="mb-3 text-gray-700">{contact.role}</p>
                    </div>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="mt-4 md:mt-0"
                    >
                      <Link
                        href={`mailto:${contact.email}`}
                        className="inline-flex items-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all"
                      >
                        <Mail className="h-4 w-4 mr-2" />
                        Contact
                      </Link>
                    </motion.div>
                  </div>
                  <p className="mt-2 text-indigo-600">
                    <Link href={`mailto:${contact.email}`}>
                      {contact.email}
                    </Link>
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.section>

          {/* Media Resources Section */}
          <motion.section
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-700 to-indigo-600 text-transparent bg-clip-text"
            >
              Media Resources
            </motion.h2>

            <motion.div
              variants={fadeInUp}
              className="bg-gradient-to-br from-white to-purple-50 border border-purple-100 p-8 rounded-xl shadow-sm"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold mb-4">Press Kit</h3>
                  <p className="mb-6 text-gray-700">
                    Download our press kit with logos, images, and fact sheets
                    for your coverage of PAIO 2025.
                  </p>
                  <Button asChild variant="outline" className="group">
                    <Link href="#" className="flex items-center">
                      <Download className="h-4 w-4 mr-2" />
                      Download Press Kit
                    </Link>
                  </Button>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-4">
                    Media Inquiries
                  </h3>
                  <p className="mb-6 text-gray-700">
                    For interview requests, high-resolution photos, or other
                    media needs, please contact our media team.
                  </p>
                  <Button
                    asChild
                    className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
                  >
                    <Link
                      href="mailto:jonathan.kariv@wits.ac.za"
                      className="flex items-center"
                    >
                      <Mail className="h-4 w-4 mr-2" />
                      Contact Media Team
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.section>
        </div>
      </div>
    </div>
  );
}
