"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, Users, Award, BookOpen, BookCheck } from "lucide-react";

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

  const [activeTab, setActiveTab] = useState<'overview' | 'criteria'>('overview');

  return (
    <div className="overflow-hidden">
      {/* Page Header with Gradient */}
      <section className="relative py-16 bg-gradient-to-br from-blue-50 via-indigo-50 to-blue-100">
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
        {/* Tabbed Info Section */}
        <div className="mb-10">
          <div className="flex gap-2 mb-4">
            <button
              className={`px-4 py-2 rounded-t-lg font-semibold border-b-2 transition-colors ${activeTab === 'overview' ? 'border-blue-600 text-blue-700 bg-white' : 'border-transparent text-gray-500 bg-blue-50'}`}
              onClick={() => setActiveTab('overview')}
            >
              Overview
            </button>
            <button
              className={`px-4 py-2 rounded-t-lg font-semibold border-b-2 transition-colors ${activeTab === 'criteria' ? 'border-blue-600 text-blue-700 bg-white' : 'border-transparent text-gray-500 bg-blue-50'}`}
              onClick={() => setActiveTab('criteria')}
            >
              Task Criteria
            </button>
          </div>
          <div className="bg-white rounded-b-xl shadow-sm border border-blue-100 p-6">
            {activeTab === 'overview' && (
              <div>
                <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                  Mark your calendar with these crucial dates for the Pan African Informatics Olympiad 2025
                </p>
              </div>
            )}
            {activeTab === 'criteria' && (
              <div className="prose max-w-3xl mx-auto text-gray-700">
                <h3>Task Criteria</h3>
                <p>Task submission approximately mirrors IOI task submission - please use the Google Form provided. A task submission must contain:</p>
                <ul>
                  <li>A link to Statement in English, preferably formatted in PDF with required diagrams and pictures included.</li>
                  <li>Description of the desired solution (a description of an algorithm which should get full score).</li>
                  <li>Contact address (preferably an email address) and background information on the task author(s): affiliation, country, and a description of the author's role in national olympiad or similar.</li>
                </ul>
                <p><strong>It is also strongly recommended that it contains:</strong></p>
                <ul>
                  <li>At least one implementation of the desired solution in C++.</li>
                  <li>Analysis of alternative solutions.</li>
                  <li>Suggestions for grading.</li>
                  <li>Test data or ideas for generating test data.</li>
                  <li>The motivation behind the task.</li>
                </ul>
                <p>As this is the first edition the ISC</p>
                <p>Submitted tasks must be kept in strict confidence until the end of PAIO 2025. After that, authors are free to do whatever they wish with the tasks, but may be asked to have them considered for PAIO 2026, in which case strict confidence would have to be maintained through until PAIO 2026.</p>
                <p>ISC will reach out with respect to feedback on tasks as needed and the final tasks used in the competition will be decided by the ISC.</p>
              </div>
            )}
          </div>
        </div>
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
                <BookOpen className="h-10 w-10" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Call For Tasks Open
                </h3>
                <p className="text-xl font-semibold text-primary mb-1">
                  April 23, 2025
                </p>
                <p className="text-gray-600">
                  Submit proposals for contest questions. See <a href="https://ioi2025.bo/call-for-tasks.html" target="_blank" rel="noopener noreferrer" className="text-blue-700 underline">IOI 2025 Call For Tasks</a> for task criteria. Submit <a href="https://docs.google.com/forms/d/1Lsto7UKJrIBOKl5JBcjLyFA4-qfaE5cdeAhYvp-ZnD8/edit" target="_blank" rel="noopener noreferrer" className="text-blue-700 underline">here</a>.
                </p>
              </div>
              
            </div>
            
          </motion.div>
          <motion.div
            variants={fadeInUp}
            className="p-6 rounded-xl border border-blue-100 bg-gradient-to-r from-white to-blue-50 shadow-sm my-4"
          >
            <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
              <div className="bg-gradient-to-br from-blue-500 to-indigo-500 p-4 rounded-xl text-white flex items-center justify-center min-w-[80px] h-[80px]">
                <BookCheck className="h-10 w-10" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Call For Tasks Close
                </h3>
                <p className="text-xl font-semibold text-primary mb-1">
                  July 4, 2025
                </p>
                <p className="text-gray-600">
                  Finalize contest questions
                </p>
              </div>
              
            </div>
            
          </motion.div>
          <motion.div
            variants={fadeInUp}
            className="p-6 rounded-xl border border-blue-100 bg-gradient-to-r from-white to-blue-50 shadow-sm my-4"
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
                  June 30, 2025
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
                    Fri, Sep 12
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
                <tr className="transition-colors hover:bg-blue-50/30">
                  <td className="py-4 px-6 whitespace-nowrap text-sm font-medium text-gray-900">
                    Sat, Sep 13
                  </td>
                  <td className="py-4 px-6 whitespace-nowrap text-sm font-semibold text-primary">
                    Contest Day 1
                  </td>
                  <td className="py-4 px-6 whitespace-nowrap text-sm text-gray-700 font-medium">
                    Contest Start
                  </td>
                </tr>
                <tr className="bg-gradient-to-r from-blue-50/50 to-transparent transition-colors hover:bg-blue-50/80">
                  <td className="py-4 px-6 whitespace-nowrap text-sm font-medium text-gray-900">
                    Sun, Sep 14
                  </td>
                  <td className="py-4 px-6 whitespace-nowrap text-sm text-primary font-semibold">
                    Contest Day 2  & Closing Ceremony
                  </td>
                  <td className="py-4 px-6 whitespace-nowrap text-sm text-gray-700">
                    Jury Meeting
                    <br />
                    Closing Ceremony
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
                September 13: The main competition day where contestants solve
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
                September 12 & September 14: Opening and closing ceremonies to celebrate
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
                July 13: Final deadline to register your team for the
                competition.
              </p>
            </motion.div>
          </motion.div>
        </motion.section>
      </div>
    </div>
  );
}
