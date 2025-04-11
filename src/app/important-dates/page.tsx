"use client";

import React from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, Users, Award } from "lucide-react";

export default function ImportantDates() {
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
      <section className="relative py-16 bg-gradient-to-br from-blue-50 via-indigo-50 to-blue-100">
        <div className="absolute inset-0 overflow-hidden">
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
              <Calendar className="h-4 w-4 mr-2" />
              <span className="font-medium text-sm">PAIO 2025 Calendar</span>
            </motion.div>

            <motion.h1
              className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-700 to-indigo-600 text-transparent bg-clip-text"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.7 }}
            >
              Important Dates
            </motion.h1>

            <motion.p
              className="text-lg text-gray-700 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.7 }}
            >
              Mark your calendar with these crucial dates for the Pan African
              Informatics Olympiad 2025
            </motion.p>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-10">
        {/* Key Deadlines Section */}
        <motion.section
          className="mb-16"
          initial="initial"
          animate="animate"
          variants={staggerContainer}
        >
          <motion.h2
            variants={fadeInUp}
            className="text-3xl font-bold mb-8 bg-gradient-to-br from-blue-700 to-indigo-600 text-transparent bg-clip-text inline-block"
          >
            Key Deadlines
          </motion.h2>

          <motion.div
            variants={fadeInUp}
            className="p-6 rounded-xl border border-blue-100 bg-gradient-to-r from-white to-blue-50 shadow-sm"
          >
            <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
              <div className="bg-gradient-to-br from-blue-500 to-indigo-500 p-4 rounded-xl text-white flex items-center justify-center min-w-[80px] h-[80px]">
                <Calendar className="h-10 w-10" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Registration Deadline
                </h3>
                <p className="text-xl font-semibold text-primary mb-1">
                  September 13, 2025
                </p>
                <p className="text-gray-600">
                  Last day to confirm your team's participation in PAIO 2025
                </p>
              </div>
            </div>
          </motion.div>
        </motion.section>

        {/* Agenda Section with Gradient Table */}
        <motion.section
          initial="initial"
          animate="animate"
          variants={staggerContainer}
          className="mb-12"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-3xl font-bold mb-8 bg-gradient-to-br from-blue-700 to-indigo-600 text-transparent bg-clip-text inline-block"
          >
            PAIO 2025 Agenda
          </motion.h2>

          <motion.div
            variants={fadeInUp}
            className="overflow-x-auto bg-white p-4 md:p-6 rounded-xl border border-blue-100 shadow-sm"
          >
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gradient-to-r from-blue-50 to-indigo-50">
                <tr>
                  <th
                    scope="col"
                    className="py-4 px-6 text-left text-sm font-semibold text-gray-900 rounded-tl-lg"
                  >
                    Date
                  </th>
                  <th
                    scope="col"
                    className="py-4 px-6 text-left text-sm font-semibold text-gray-900"
                  >
                    Contestants & Deputies
                  </th>
                  <th
                    scope="col"
                    className="py-4 px-6 text-left text-sm font-semibold text-gray-900 rounded-tr-lg"
                  >
                    Leaders & PSC
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-100">
                <tr className="transition-colors hover:bg-blue-50/30">
                  <td className="py-4 px-6 whitespace-nowrap text-sm font-medium text-gray-900">
                    Sat, Sep 13
                  </td>
                  <td className="py-4 px-6 whitespace-nowrap text-sm text-gray-500">
                    —
                  </td>
                  <td className="py-4 px-6 whitespace-nowrap text-sm text-gray-700 font-medium">
                    Contest Start
                  </td>
                </tr>
                <tr className="transition-colors hover:bg-blue-50/30">
                  <td className="py-4 px-6 whitespace-nowrap text-sm font-medium text-gray-900">
                    Sun, Aug 11
                  </td>
                  <td className="py-4 px-6 whitespace-nowrap text-sm text-gray-500">
                    —
                  </td>
                  <td className="py-4 px-6 whitespace-nowrap text-sm text-gray-700 font-medium">
                    Leaders Arrive
                  </td>
                </tr>
                <tr className="transition-colors hover:bg-blue-50/30">
                  <td className="py-4 px-6 whitespace-nowrap text-sm font-medium text-gray-900">
                    Mon, Aug 12
                  </td>
                  <td className="py-4 px-6 whitespace-nowrap text-sm text-gray-500">
                    —
                  </td>
                  <td className="py-4 px-6 whitespace-nowrap text-sm text-gray-700 font-medium">
                    Jury Meeting
                  </td>
                </tr>
                <tr className="bg-gradient-to-r from-blue-50/50 to-transparent transition-colors hover:bg-blue-50/80">
                  <td className="py-4 px-6 whitespace-nowrap text-sm font-medium text-gray-900">
                    Tue, Aug 13
                  </td>
                  <td className="py-4 px-6 whitespace-nowrap text-sm text-primary font-medium">
                    Arrival
                  </td>
                  <td className="py-4 px-6 whitespace-nowrap text-sm text-gray-700 font-medium">
                    Jury Meeting
                  </td>
                </tr>
                <tr className="transition-colors hover:bg-blue-50/30">
                  <td className="py-4 px-6 whitespace-nowrap text-sm font-medium text-gray-900">
                    Wed, Aug 14
                  </td>
                  <td className="py-4 px-6 whitespace-nowrap text-sm text-primary font-medium">
                    Opening Ceremony
                  </td>
                  <td className="py-4 px-6 whitespace-nowrap text-sm text-gray-700">
                    Jury Meeting
                    <br />
                    Opening Ceremony
                  </td>
                </tr>
                <tr className="bg-gradient-to-r from-blue-50/50 to-transparent transition-colors hover:bg-blue-50/80">
                  <td className="py-4 px-6 whitespace-nowrap text-sm font-medium text-gray-900">
                    Thu, Aug 15
                  </td>
                  <td className="py-4 px-6 whitespace-nowrap text-sm font-semibold text-primary">
                    Paper 1
                  </td>
                  <td className="py-4 px-6 whitespace-nowrap text-sm text-gray-700">
                    Marking Schemes
                    <br />
                    Small excursion
                  </td>
                </tr>
                <tr className="transition-colors hover:bg-blue-50/30">
                  <td className="py-4 px-6 whitespace-nowrap text-sm font-medium text-gray-900">
                    Fri, Aug 16
                  </td>
                  <td className="py-4 px-6 whitespace-nowrap text-sm font-semibold text-primary">
                    Paper 2
                  </td>
                  <td className="py-4 px-6 whitespace-nowrap text-sm text-gray-700">
                    Marking Schemes
                    <br />
                    Coordination
                  </td>
                </tr>
                <tr className="bg-gradient-to-r from-blue-50/50 to-transparent transition-colors hover:bg-blue-50/80">
                  <td className="py-4 px-6 whitespace-nowrap text-sm font-medium text-gray-900">
                    Sat, Aug 17
                  </td>
                  <td className="py-4 px-6 whitespace-nowrap text-sm text-primary font-medium">
                    Excursion
                  </td>
                  <td className="py-4 px-6 whitespace-nowrap text-sm text-gray-700 font-medium">
                    Coordination
                  </td>
                </tr>
                <tr className="transition-colors hover:bg-blue-50/30">
                  <td className="py-4 px-6 whitespace-nowrap text-sm font-medium text-gray-900">
                    Sun, Aug 18
                  </td>
                  <td className="py-4 px-6 whitespace-nowrap text-sm text-primary font-medium">
                    Excursion
                  </td>
                  <td className="py-4 px-6 whitespace-nowrap text-sm text-gray-700">
                    Coordination
                    <br />
                    Jury Meeting
                  </td>
                </tr>
                <tr className="bg-gradient-to-r from-blue-50/50 to-transparent transition-colors hover:bg-blue-50/80">
                  <td className="py-4 px-6 whitespace-nowrap text-sm font-medium text-gray-900">
                    Mon, Aug 19
                  </td>
                  <td className="py-4 px-6 whitespace-nowrap text-sm text-primary font-semibold">
                    Closing Ceremony
                  </td>
                  <td className="py-4 px-6 whitespace-nowrap text-sm text-gray-700">
                    Jury Meeting
                    <br />
                    Closing Ceremony
                  </td>
                </tr>
                <tr className="transition-colors hover:bg-blue-50/30">
                  <td className="py-4 px-6 whitespace-nowrap text-sm font-medium text-gray-900">
                    Tue, Aug 20
                  </td>
                  <td className="py-4 px-6 whitespace-nowrap text-sm text-gray-500">
                    Departure
                  </td>
                  <td className="py-4 px-6 whitespace-nowrap text-sm text-gray-500">
                    Departure
                  </td>
                </tr>
              </tbody>
            </table>
          </motion.div>
        </motion.section>

        {/* Key Events Cards */}
        <motion.section
          initial="initial"
          animate="animate"
          variants={staggerContainer}
        >
          <motion.h2
            variants={fadeInUp}
            className="text-3xl font-bold mb-8 bg-gradient-to-br from-blue-700 to-indigo-600 text-transparent bg-clip-text inline-block"
          >
            Key Events
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={staggerContainer}
          >
            <motion.div
              variants={fadeInUp}
              className="p-6 rounded-xl border border-blue-100 bg-gradient-to-br from-blue-50 to-indigo-50/50 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center mb-4">
                <div className="rounded-full bg-blue-100 p-2 mr-3">
                  <Award className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-lg text-gray-900">
                  Competition Days
                </h3>
              </div>
              <p className="text-gray-700">
                August 15-16: The main competition days where contestants solve
                challenging informatics problems.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="p-6 rounded-xl border border-blue-100 bg-gradient-to-br from-purple-50 to-blue-50/50 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center mb-4">
                <div className="rounded-full bg-purple-100 p-2 mr-3">
                  <Users className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="font-semibold text-lg text-gray-900">
                  Ceremonies
                </h3>
              </div>
              <p className="text-gray-700">
                August 14 & 19: Opening and closing ceremonies to celebrate
                participants and winners.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="p-6 rounded-xl border border-blue-100 bg-gradient-to-br from-indigo-50 to-blue-50/50 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center mb-4">
                <div className="rounded-full bg-indigo-100 p-2 mr-3">
                  <Clock className="h-6 w-6 text-indigo-600" />
                </div>
                <h3 className="font-semibold text-lg text-gray-900">
                  Registration
                </h3>
              </div>
              <p className="text-gray-700">
                September 13: Final deadline to register your team for the
                competition.
              </p>
            </motion.div>
          </motion.div>
        </motion.section>
      </div>
    </div>
  );
}
