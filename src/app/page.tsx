"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Typography from "@/components/Typography";
import {
  Calendar,
  MapPin,
  Award,
  BookOpen,
  Users,
  ChevronRight,
  Code,
  Brain,
  GraduationCap,
} from "lucide-react";
import { countries } from "../../data/Countries";

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
  const sortedCountries = countries.sort((a, b) =>
    a.name.localeCompare(b.name)
  );

   const totalCountries = countries.length; // -1 for Pakistan (Guest)


  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-amber-50 pt-20 pb-16 md:pt-28 md:pb-24">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            {/* PAIO Logo */}
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <Image
                src="/images/logo.png"
                alt="PAIO 2025 Logo"
                width={120}
                height={120}
                className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40"
              />
            </motion.div>

            <motion.div
              className="flex justify-center items-center mb-6 bg-white/80 backdrop-blur-sm p-2 rounded-full text-amber-800 font-medium text-sm"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <Calendar className="h-4 w-4 mr-2" />
              <span>September 12–14, 2025 · Concluded</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
            >
              <Typography variant="h1" className="mb-6 tracking-tight text-4xl md:text-5xl lg:text-6xl text-amber-900">
                Pan African Informatics Olympiad
              </Typography>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.7 }}
            >
              <Typography variant="lead" className="text-gray-700 mb-8 max-w-3xl">
                An informatics competition that brought together talented young
                programmers from across the African continent for two days of
                excellence and innovation. Registration is now closed.
              </Typography>
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              <Link
                href="/results"
                className="bg-amber-600 hover:bg-amber-700 text-white font-medium px-8 py-3 rounded-lg flex items-center justify-center transition-all shadow-lg hover:shadow-xl"
              >
                View Results
                <ChevronRight className="h-4 w-4 ml-2" />
              </Link>

              <Link
                href="/tasks"
                className="bg-white hover:bg-gray-50 text-amber-800 border border-amber-200 font-medium px-8 py-3 rounded-lg flex items-center justify-center transition-colors hover:border-amber-300"
              >
                View Tasks
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
              <div className="absolute inset-0 bg-amber-700"></div>

              {/* Content */}
              <div className="relative z-10 h-full flex flex-col justify-center items-center text-white p-8">
                <motion.div
                  className="text-center mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1, duration: 0.8 }}
                >
                  <div className="text-4xl md:text-5xl font-bold mb-2">
                    Participating Countries
                  </div>
                  <div className="text-lg md:text-xl opacity-90">
                    {totalCountries} Nations Took Part
                  </div>
                </motion.div>

                {/* Country flags grid */}
                <motion.div
                  className="grid grid-cols-5 md:grid-cols-8 gap-3 md:gap-4 items-center justify-center max-w-full"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2, duration: 0.8 }}
                >
                  {/* Country flags with names */}
                  {sortedCountries.map((country, index) =>
                    country.flag && country.flag !== "" ? (
                      <motion.div
                        key={index}
                        className="relative group text-3xl md:text-4xl hover:scale-110 transition-transform cursor-pointer flex justify-center"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                          delay: 1.3 + index * 0.08,
                          duration: 0.3,
                        }}
                        whileHover={{ scale: 1.2 }}
                      >
                        {country.flag}
                        {/* Tooltip on hover */}
                        <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black/80 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none z-20">
                          {country.name}
                        </div>
                      </motion.div>
                    ) : null
                  )}
                </motion.div>

                {/* Total count display */}
                <motion.div
                  className="mt-6 text-center"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 2.5, duration: 0.6 }}
                >
                  <div className="text-sm md:text-base opacity-75">
                    <span className="font-semibold">
                      {totalCountries - 1} African Countries + 1 Guest Country.
                    </span>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <Typography variant="h2" gradient className="mb-4">
              Highlights of PAIO 2025
            </Typography>
            <Typography variant="lead" className="text-gray-600 max-w-3xl mx-auto">
              The Pan African Informatics Olympiad gave young programmers a
              platform to grow, compete, and connect across Africa
            </Typography>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div
              className="bg-white border border-amber-100 rounded-xl p-8 shadow-sm hover:shadow-md transition-all"
              variants={fadeIn}
              whileHover={{ y: -5 }}
            >
              <div className="bg-amber-600 p-3 rounded-lg inline-block mb-4 text-white">
                <Award className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-amber-800">
                Recognition & Achievement
              </h3>
              <p className="text-gray-600">
                Contestants earned awards and recognition at a continental level
                for their programming abilities.
              </p>
            </motion.div>

            <motion.div
              className="bg-white border border-amber-100 rounded-xl p-8 shadow-sm hover:shadow-md transition-all"
              variants={fadeIn}
              whileHover={{ y: -5 }}
            >
              <div className="bg-amber-600 p-3 rounded-lg inline-block mb-4 text-white">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-amber-800">
                Community
              </h3>
              <p className="text-gray-600">
                Participants connected with peers from across Africa, shared
                knowledge, and collaborated on challenging problems.
              </p>
            </motion.div>

            <motion.div
              className="bg-white border border-amber-100 rounded-xl p-8 shadow-sm hover:shadow-md transition-all"
              variants={fadeIn}
              whileHover={{ y: -5 }}
            >
              <div className="bg-amber-600 p-3 rounded-lg inline-block mb-4 text-white">
                <Brain className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-amber-800">
                Problem-Solving Skills
              </h3>
              <p className="text-gray-600">
                Contestants tackled complex algorithms that deepened their
                understanding of computational concepts.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Key Information */}
      <section className="py-16 md:py-24 relative bg-amber-50/40">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <Typography variant="h2" gradient className="mb-10 text-center">
              Key Information
            </Typography>

            <div className="space-y-8">
              <motion.div
                className="bg-white p-6 rounded-xl border-l-4 border-amber-500 shadow-sm border border-amber-100"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.5 }}
              >
                <h3 className="text-xl font-semibold mb-4 flex items-center text-amber-800">
                  <Calendar className="h-5 w-5 mr-2 text-amber-500" />
                  Date & Format
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="h-5 w-5 rounded-full bg-amber-600 flex items-center justify-center text-xs text-white font-bold mr-2 mt-0.5">
                      •
                    </span>
                    <span>
                      <strong>Date:</strong> September 12 - 14, 2025
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="h-5 w-5 rounded-full bg-amber-600 flex items-center justify-center text-xs text-white font-bold mr-2 mt-0.5">
                      •
                    </span>
                    <span>
                      <strong>Format:</strong> Online competition
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="h-5 w-5 rounded-full bg-amber-600 flex items-center justify-center text-xs text-white font-bold mr-2 mt-0.5">
                      •
                    </span>
                    <span>
                      <strong>Duration:</strong> Three-day event with two rounds
                      of five hours each
                    </span>
                  </li>
                </ul>
              </motion.div>

              <motion.div
                className="bg-white p-6 rounded-xl border-l-4 border-amber-500 shadow-sm border border-amber-100"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <h3 className="text-xl font-semibold mb-4 flex items-center text-amber-800">
                  <GraduationCap className="h-5 w-5 mr-2 text-amber-500" />
                  Participation
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="h-5 w-5 rounded-full bg-amber-600 flex items-center justify-center text-xs text-white font-bold mr-2 mt-0.5">
                      •
                    </span>
                    <span>
                      <strong>Eligibility:</strong> High school students from
                      African countries
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="h-5 w-5 rounded-full bg-amber-600 flex items-center justify-center text-xs text-white font-bold mr-2 mt-0.5">
                      •
                    </span>
                    <span>
                      <strong>Team Composition:</strong> up to six contestants
                      per country
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="h-5 w-5 rounded-full bg-amber-600 flex items-center justify-center text-xs text-white font-bold mr-2 mt-0.5">
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
                className="text-amber-800 hover:text-amber-900 font-medium flex items-center transition-colors bg-white py-2 px-4 rounded-full shadow-sm border border-amber-100"
              >
                View all important dates
                <ChevronRight className="h-4 w-4 ml-1" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-amber-700 text-white relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <Typography variant="h2" className="mb-6 text-white">
              PAIO 2025 Has Concluded
            </Typography>
            <Typography variant="lead" className="mb-8 text-amber-100">
              Thank you to every contestant, leader, and supporter who made the
              first Pan African Informatics Olympiad a success. Registration and
              calls for participation are closed.
            </Typography>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Link
                href="/results"
                className="inline-flex items-center bg-white/95 text-amber-700 font-medium px-8 py-3 rounded-lg hover:bg-amber-50 transition-all shadow-lg"
              >
                Explore the Results
                <ChevronRight className="h-4 w-4 ml-2" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
