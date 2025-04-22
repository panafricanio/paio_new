"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Calendar,
  MapPin,
  Award,
  BookOpen,
  Users,
  ChevronRight,
  ExternalLink,
  Code,
  Brain,
  GraduationCap,
} from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section with Enhanced Gradients */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100 pt-20 pb-16 md:pt-28 md:pb-24">
        <div className="absolute inset-0 overflow-hidden">
          {/* Decorative gradients */}
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-indigo-300/20 rounded-full blur-3xl"></div>

          <svg
            className="absolute bottom-0 left-0 right-0 transform translate-y-1/2 opacity-10"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
          </svg>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <motion.div
              className="flex justify-center items-center mb-6 bg-white/80 backdrop-blur-sm p-2 rounded-full text-primary font-medium text-sm"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <Calendar className="h-4 w-4 mr-2" />
              <span>September 13, 2025</span>
            </motion.div>

            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
            >
              <span className="bg-gradient-to-r from-primary via-blue-600 to-purple-600 bg-clip-text text-transparent">
                Pan African
              </span>{" "}
              <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                Informatics Olympiad
              </span>
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-gray-700 mb-8 max-w-3xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.7 }}
            >
              Discover the premier informatics competition bringing together
              talented young programmers from across the African continent to
              showcase excellence and innovation.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              <Link
                href="https://docs.google.com/forms/d/e/1FAIpQLSe6S7qJlBiPr_HlunCuNPiXoGJsYfaV8oOkEhoFouxFTJ_arg/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium px-8 py-3 rounded-lg flex items-center justify-center transition-all"
              >
                Register Now
                <ChevronRight className="h-4 w-4 ml-2" />
              </Link>

              <Link
                href="/regulations"
                className="bg-white hover:bg-gray-50 text-gray-900 border border-gray-200 font-medium px-8 py-3 rounded-lg flex items-center justify-center transition-colors"
              >
                Learn More
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            className="mt-8 flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.7 }}
          >
            <div className="relative h-[240px] sm:h-[300px] md:h-[380px] w-full max-w-[800px] rounded-xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-blue-900/20 z-10 flex items-center justify-center">
                <div className="bg-gradient-to-r from-white/90 to-white/80 backdrop-blur-sm rounded-lg p-4 px-6 shadow-lg">
                  <p className="text-lg md:text-xl font-medium bg-gradient-to-r from-blue-700 to-indigo-600 bg-clip-text text-transparent">
                    Join us at PAIO 2025 - Online
                  </p>
                </div>
              </div>
              {/* Animated gradient background */}
              <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-500">
                  <div className="absolute inset-0 opacity-30">
                    <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/10 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-20">
                  <Code className="h-48 w-48 text-white" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section with Gradient Cards */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-blue-50/50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-700 to-indigo-600 bg-clip-text text-transparent">
              Why Participate?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The Pan African Informatics Olympiad offers unique opportunities
              for young programmers to grow and excel
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div
              className="bg-gradient-to-br from-white to-blue-50 border border-blue-100 rounded-xl p-8 shadow-sm hover:shadow-md transition-all"
              variants={fadeIn}
              whileHover={{ y: -5 }}
            >
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-3 rounded-lg inline-block mb-4 text-white">
                <Award className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3 bg-gradient-to-r from-blue-700 to-blue-500 bg-clip-text text-transparent">
                Recognition & Achievement
              </h3>
              <p className="text-gray-600">
                Earn prestigious awards and recognition at a continental level
                for your programming abilities.
              </p>
            </motion.div>

            <motion.div
              className="bg-gradient-to-br from-white to-indigo-50 border border-indigo-100 rounded-xl p-8 shadow-sm hover:shadow-md transition-all"
              variants={fadeIn}
              whileHover={{ y: -5 }}
            >
              <div className="bg-gradient-to-br from-indigo-500 to-indigo-600 p-3 rounded-lg inline-block mb-4 text-white">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3 bg-gradient-to-r from-indigo-700 to-indigo-500 bg-clip-text text-transparent">
                Networking
              </h3>
              <p className="text-gray-600">
                Connect with like-minded peers and build relationships with
                fellow programming enthusiasts from across Africa.
              </p>
            </motion.div>

            <motion.div
              className="bg-gradient-to-br from-white to-purple-50 border border-purple-100 rounded-xl p-8 shadow-sm hover:shadow-md transition-all"
              variants={fadeIn}
              whileHover={{ y: -5 }}
            >
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 p-3 rounded-lg inline-block mb-4 text-white">
                <Brain className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3 bg-gradient-to-r from-purple-700 to-purple-500 bg-clip-text text-transparent">
                Problem-Solving Skills
              </h3>
              <p className="text-gray-600">
                Challenge yourself with complex algorithms that deepen your
                understanding of computational concepts.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Key Information with Curved Gradient Border */}
      <section className="py-16 md:py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50/70 to-indigo-50/50"></div>
        <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-white to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center bg-gradient-to-r from-blue-700 to-indigo-600 bg-clip-text text-transparent">
              Key Information
            </h2>

            <div className="space-y-8">
              <motion.div
                className="bg-white p-6 rounded-xl border-l-4 border-blue-500 shadow-sm border border-blue-100"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.5 }}
              >
                <h3 className="text-xl font-semibold mb-4 flex items-center bg-gradient-to-r from-blue-700 to-blue-500 bg-clip-text text-transparent">
                  <Calendar className="h-5 w-5 mr-2 text-blue-500" />
                  Date & Format
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="h-5 w-5 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center text-xs text-white font-bold mr-2 mt-0.5">
                      •
                    </span>
                    <span>
                      <strong>Date:</strong> September 12 - 14, 2025
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="h-5 w-5 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center text-xs text-white font-bold mr-2 mt-0.5">
                      •
                    </span>
                    <span>
                      <strong>Format:</strong> Online competition
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="h-5 w-5 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center text-xs text-white font-bold mr-2 mt-0.5">
                      •
                    </span>
                    <span>
                      <strong>Duration:</strong> Three-day event with challenging
                      rounds
                    </span>
                  </li>
                </ul>
              </motion.div>

              <motion.div
                className="bg-white p-6 rounded-xl border-l-4 border-indigo-500 shadow-sm border border-indigo-100"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <h3 className="text-xl font-semibold mb-4 flex items-center bg-gradient-to-r from-indigo-700 to-indigo-500 bg-clip-text text-transparent">
                  <GraduationCap className="h-5 w-5 mr-2 text-indigo-500" />
                  Participation
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="h-5 w-5 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-xs text-white font-bold mr-2 mt-0.5">
                      •
                    </span>
                    <span>
                      <strong>Eligibility:</strong> Open to high school students
                      from African countries
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="h-5 w-5 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-xs text-white font-bold mr-2 mt-0.5">
                      •
                    </span>
                    <span>
                      <strong>Team Composition:</strong> Four contestants per
                      country 
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="h-5 w-5 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-xs text-white font-bold mr-2 mt-0.5">
                      •
                    </span>
                    <span>
                      <strong>Leadership:</strong> Team leader, deputy team
                      leader, and observers
                    </span>
                  </li>
                </ul>
              </motion.div>
            </div>

            <motion.div
              className="mt-10 flex justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <Link
                href="/important-dates"
                className="text-primary hover:text-primary/80 font-medium flex items-center transition-colors bg-white py-2 px-4 rounded-full shadow-sm border border-blue-100"
              >
                View all important dates
                <ChevronRight className="h-4 w-4 ml-1" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section with Enhanced Gradient */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          {/* Decorative gradient overlays */}
          <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-white/10 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/10 to-transparent"></div>
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Participate?
            </h2>
            <p className="text-lg md:text-xl mb-8 text-blue-100">
              Join the Pan African Informatics Olympiad and be part of this
              prestigious educational event that celebrates programming
              excellence across Africa.
            </p>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Link
                href="https://docs.google.com/forms/d/e/1FAIpQLSe6S7qJlBiPr_HlunCuNPiXoGJsYfaV8oOkEhoFouxFTJ_arg/viewform"
                className="inline-flex items-center bg-gradient-to-r from-white/95 to-blue-50/95 text-indigo-700 font-medium px-8 py-3 rounded-lg hover:from-white hover:to-blue-100 transition-all shadow-lg"
                target="_blank"
                rel="noopener noreferrer"
              >
                Register Your Team
                <ExternalLink className="h-4 w-4 ml-2" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
