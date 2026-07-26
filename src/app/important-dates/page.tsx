"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, Users, Award, BookOpen, BookCheck } from "lucide-react";
import Typography from "@/components/Typography";
import { scheduleData, practiceContestInfo } from "../../../data/scheduleData";
import ScheduleSection from "../../components/ScheduleSection";

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

  const [activeTab, setActiveTab] = useState<'overview' | 'criteria' | 'schedule'>('schedule');

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
              <Calendar className="h-4 w-4 mr-2" />
              <span className="font-medium text-sm">PAIO 2025 Calendar</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.7 }}
            >
              <Typography variant="h1" gradient className="mb-4">
                Important Dates
              </Typography>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.7 }}
            >
              <Typography variant="body" className="text-gray-700 max-w-3xl mx-auto">
                Key dates from the Pan African Informatics Olympiad 2025.
                Registration and the call for tasks are closed.
              </Typography>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-10">
        <div className="max-w-4xl mx-auto">
          {/* Tabbed Info Section */}
        <div className="mb-10">
          <div className="flex gap-2 mb-4">
            <button
              className={`px-4 py-2 rounded-t-lg font-semibold border-b-2 transition-colors ${activeTab === 'overview' ? 'border-amber-600 text-amber-700 bg-white' : 'border-transparent text-gray-500 bg-amber-50'}`}
              onClick={() => setActiveTab('overview')}
            >
              Overview
            </button>
            <button
              className={`px-4 py-2 rounded-t-lg font-semibold border-b-2 transition-colors ${activeTab === 'criteria' ? 'border-amber-600 text-amber-700 bg-white' : 'border-transparent text-gray-500 bg-amber-50'}`}
              onClick={() => setActiveTab('criteria')}
            >
              Task Criteria
            </button>
            <button
              className={`px-4 py-2 rounded-t-lg font-semibold border-b-2 transition-colors ${activeTab === 'schedule' ? 'border-amber-600 text-amber-700 bg-white' : 'border-transparent text-gray-500 bg-amber-50'}`}
              onClick={() => setActiveTab('schedule')}
            >
              Schedule
            </button>
          </div>
          <div className="bg-white rounded-b-xl shadow-sm border border-amber-100 p-6">
            {activeTab === 'overview' && (
              <div>
                <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                  These were the key dates for the Pan African Informatics Olympiad 2025.
                  The event has concluded, and registration is closed.
                </p>
              </div>
            )}
            {activeTab === 'criteria' && (
              <div className="prose max-w-3xl mx-auto text-gray-700">
                <h3>Task Criteria</h3>
                <p>Task submission approximately mirrored IOI task submission. The call for tasks is now closed. A task submission had to contain:</p>
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
                <p>As this was the first edition, the ISC reviewed submissions carefully.</p>
                <p>Submitted tasks had to be kept in strict confidence until the end of PAIO 2025. After that, authors were free to use the tasks as they wished, unless asked to keep them confidential for consideration in a later edition.</p>
                <p>The ISC provided feedback on tasks as needed and decided the final tasks used in the competition.</p>
              </div>
            )}
            {activeTab === 'schedule' && (
              <div>
                <div className="mb-8 p-6 bg-amber-50 rounded-xl border border-amber-200">
                  <h3 className="text-xl font-bold mb-4 text-gray-900">{practiceContestInfo.title}</h3>
                  <p className="text-gray-700 mb-4">{practiceContestInfo.description}</p>
                  <p className="text-gray-700">{practiceContestInfo.briefingInfo}</p>
                </div>
                <motion.div
                  initial="initial"
                  animate="animate"
                  variants={staggerContainer}
                >
                  {scheduleData.map((section, index) => (
                    <ScheduleSection key={index} section={section} index={index} />
                  ))}
                </motion.div>
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
          <motion.div variants={fadeInUp} className="mb-8">
            <Typography variant="h2" gradient>
              Key Deadlines
            </Typography>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="p-6 rounded-xl border border-amber-100 bg-white shadow-sm"
          >
            <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
              <div className="bg-amber-600 p-4 rounded-xl text-white flex items-center justify-center min-w-[80px] h-[80px]">
                <BookOpen className="h-10 w-10" />
              </div>
              <div>
                <Typography variant="h3" className="text-gray-900 mb-2">
                  Call For Tasks Opened
                </Typography>
                <Typography variant="body" className="font-semibold text-amber-800 mb-1">
                  April 23, 2025 · Closed
                </Typography>
                <Typography variant="body" className="text-gray-600">
                  The call for task proposals opened on this date. Criteria followed the{" "}
                  <a href="https://ioi2025.bo/call-for-tasks.html" target="_blank" rel="noopener noreferrer" className="text-amber-700 underline">IOI 2025 Call For Tasks</a>.
                  Submissions are no longer accepted.
                </Typography>
              </div>
              
            </div>
            
          </motion.div>
          <motion.div
            variants={fadeInUp}
            className="p-6 rounded-xl border border-amber-100 bg-white shadow-sm my-4"
          >
            <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
              <div className="bg-amber-600 p-4 rounded-xl text-white flex items-center justify-center min-w-[80px] h-[80px]">
                <BookCheck className="h-10 w-10" />
              </div>
              <div>
                <Typography variant="h3" className="text-gray-900 mb-2">
                  Call For Tasks Closed
                </Typography>
                <Typography variant="body" className="font-semibold text-amber-800 mb-1">
                  July 4, 2025 · Closed
                </Typography>
                <Typography variant="body" className="text-gray-600">
                  The call for tasks closed and contest questions were finalized.
                </Typography>
              </div>
              
            </div>
            
          </motion.div>
          <motion.div
            variants={fadeInUp}
            className="p-6 rounded-xl border border-amber-100 bg-white shadow-sm my-4"
          >
            <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
              <div className="bg-amber-600 p-4 rounded-xl text-white flex items-center justify-center min-w-[80px] h-[80px]">
                <Calendar className="h-10 w-10" />
              </div>
              <div>
                <Typography variant="h3" className="text-gray-900 mb-2">
                  Registration Closed
                </Typography>
                <Typography variant="body" className="font-semibold text-amber-800 mb-1">
                  June 30, 2025 · Closed
                </Typography>
                <Typography variant="body" className="text-gray-600">
                  Last day to confirm team participation in PAIO 2025. Registration is no longer open.
                </Typography>
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
          <motion.div variants={fadeInUp} className="mb-8">
            <Typography variant="h2" gradient>
              PAIO 2025 Agenda
            </Typography>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="overflow-x-auto bg-white p-4 md:p-6 rounded-xl border border-amber-100 shadow-sm"
          >
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-amber-50">
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
              <tr className="transition-colors hover:bg-amber-50/30">
                  <td className="py-6 px-6 whitespace-nowrap">
                    <Typography variant="body" className="font-medium text-gray-900">
                      Fri, Sep 12
                    </Typography>
                  </td>
                  <td className="py-6 px-6 whitespace-nowrap">
                    <Typography variant="body" className="text-amber-800 font-medium">
                      Opening Ceremony
                    </Typography>
                  </td>
                  <td className="py-6 px-6">
                    <Typography variant="body" className="text-gray-700">
                      Jury Meeting
                      <br />
                      Opening Ceremony
                    </Typography>
                  </td>
                </tr>
                <tr className="transition-colors hover:bg-amber-50/30">
                  <td className="py-6 px-6 whitespace-nowrap">
                    <Typography variant="body" className="font-medium text-gray-900">
                      Sat, Sep 13
                    </Typography>
                  </td>
                  <td className="py-6 px-6 whitespace-nowrap">
                    <Typography variant="body" className="font-semibold text-amber-800">
                      Contest Day 1
                    </Typography>
                  </td>
                  <td className="py-6 px-6">
                    <Typography variant="body" className="text-gray-700 font-medium">
                      Contest Start
                    </Typography>
                  </td>
                </tr>
                <tr className="bg-amber-50/50 transition-colors hover:bg-amber-50/80">
                  <td className="py-6 px-6 whitespace-nowrap">
                    <Typography variant="body" className="font-medium text-gray-900">
                      Sun, Sep 14
                    </Typography>
                  </td>
                  <td className="py-6 px-6 whitespace-nowrap">
                    <Typography variant="body" className="text-amber-800 font-semibold">
                      Contest Day 2 & Closing Ceremony
                    </Typography>
                  </td>
                  <td className="py-6 px-6">
                    <Typography variant="body" className="text-gray-700">
                      Jury Meeting
                      <br />
                      Closing Ceremony
                    </Typography>
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
          <motion.div variants={fadeInUp} className="mb-8">
            <Typography variant="h2" gradient>
              Key Events
            </Typography>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={staggerContainer}
          >
            <motion.div
              variants={fadeInUp}
              className="p-6 rounded-xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center mb-4">
                <div className="rounded-full bg-amber-100 p-2 mr-3">
                  <Award className="h-6 w-6 text-amber-700" />
                </div>
                <h3 className="font-semibold text-lg text-gray-900">
                  Competition Days
                </h3>
              </div>
              <p className="text-gray-700">
                September 13–14: Contestants solved challenging informatics
                problems across two competition days.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="p-6 rounded-xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center mb-4">
                <div className="rounded-full bg-amber-100 p-2 mr-3">
                  <Users className="h-6 w-6 text-amber-700" />
                </div>
                <h3 className="font-semibold text-lg text-gray-900">
                  Ceremonies
                </h3>
              </div>
              <p className="text-gray-700">
                September 12 & September 14: Opening and closing ceremonies
                celebrated participants and winners.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="p-6 rounded-xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center mb-4">
                <div className="rounded-full bg-amber-100 p-2 mr-3">
                  <Clock className="h-6 w-6 text-amber-700" />
                </div>
                <h3 className="font-semibold text-lg text-gray-900">
                  Registration
                </h3>
              </div>
              <p className="text-gray-700">
                Registration closed on June 30, 2025. Team sign-ups are no
                longer accepted.
              </p>
            </motion.div>
          </motion.div>
          </motion.section>
        </div>
      </div>
    </div>
  );
}
