"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Book,
  Users,
  Award,
  FileText,
  Download,
  CheckCircle,
  Code,
  FileDown,
  Globe,
  Eye,
} from "lucide-react";

export default function Regulations() {
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

  const highlightedTextStyle = "font-semibold text-amber-700";

  return (
    <div className="overflow-hidden">
      {/* Page Header with Gradient */}
      <section className="relative py-16 bg-gradient-to-br from-amber-50 via-orange-50 to-green-100">
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
              <Book className="h-4 w-4 mr-2" />
              <span className="font-medium text-sm">Official Rules</span>
            </motion.div>

            <motion.h1
              className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-amber-700 to-green-600 text-transparent bg-clip-text"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.7 }}
            >
              PAIO 2025 Regulations
            </motion.h1>

            <motion.p
              className="text-lg text-gray-700 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.7 }}
            >
              Official competition rules and guidelines for the Pan African
              Informatics Olympiad
            </motion.p>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="flex flex-col space-y-8"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {/* Documents in Multiple Languages */}
            <motion.section
              variants={fadeInUp}
              className="bg-gradient-to-br from-white to-green-50 p-8 rounded-xl shadow-sm border border-green-100"
            >
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-br from-green-500 to-green-600 p-3 rounded-lg text-white mr-4">
                  <Globe className="h-6 w-6" />
                </div>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-green-700 to-teal-600 text-transparent bg-clip-text">
                  Official Documents
                </h2>
              </div>

              <div className="space-y-6 text-gray-700">
                <p className="text-lg">
                  Official competition regulations are available in multiple
                  languages:
                </p>

                {/* English Documents */}
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-green-700">
                    English
                  </h3>
                  <div className="flex items-center justify-between bg-white/80 p-4 rounded-lg border border-green-100 hover:shadow-md transition-shadow">
                    <span className="text-lg flex items-center">
                      <FileDown className="h-5 w-5 mr-2 text-green-600" />
                      PAIO-2025-Regulations
                    </span>
                    <motion.a
                      href="https://docs.google.com/document/d/11tjRLzlILvj_6STmVJ3wtYcRDZtmwxWLbZ9L37oEUiU/edit?tab=t.0"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 text-white font-medium rounded-lg transition-all shadow-sm"
                    >
                      <Eye className="mr-2 h-4 w-4" />
                      View
                    </motion.a>
                  </div>
                </div>
          
              </div>
            </motion.section>

            {/* Eligibility */}
            <motion.section
              variants={fadeInUp}
              className="bg-gradient-to-br from-white to-amber-50 p-8 rounded-xl shadow-sm border border-amber-100"
            >
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-br from-amber-600 to-orange-600 p-3 rounded-lg text-white mr-4">
                  <Users className="h-6 w-6" />
                </div>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-amber-700 to-green-600 text-transparent bg-clip-text">
                  Eligibility
                </h2>
              </div>

              <div className="space-y-4 text-gray-700">
                <p className="text-lg">
                  Participation in the Pan African Informatics Olympiad (PAIO)
                  is open to:
                </p>
                <ul className="list-none space-y-3">
                  <li className="flex items-start">
                    <span className="h-2 w-2 rounded-full bg-gradient-to-br from-amber-600 to-orange-600 mr-3 mt-2.5"></span>
                    <p className="text-lg">
                      Students enrolled in secondary education or below in an
                      African country during the competition period.
                    </p>
                  </li>
                  <li className="flex items-start">
                    <span className="h-2 w-2 rounded-full bg-gradient-to-br from-amber-600 to-orange-600 mr-3 mt-2.5"></span>
                    <p className="text-lg">
                      Students must{" "}
                      <span className={highlightedTextStyle}>
                        not have begun their university studies
                      </span>{" "}
                      at the time of the competition.
                    </p>
                  </li>
                  <li className="flex items-start">
                    <span className="h-2 w-2 rounded-full bg-gradient-to-br from-amber-600 to-orange-600 mr-3 mt-2.5"></span>
                    <p className="text-lg">
                      Students must{" "}
                      <span className={highlightedTextStyle}>
                        be under 20 years of age
                      </span>{" "}
                      on July 1st of the competition year.
                    </p>
                  </li>
                </ul>
              </div>
            </motion.section>

            {/* Team Composition */}
            <motion.section
              variants={fadeInUp}
              className="bg-gradient-to-br from-white to-green-50 p-8 rounded-xl shadow-sm border border-green-100"
            >
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-br from-green-600 to-emerald-600 p-3 rounded-lg text-white mr-4">
                  <Users className="h-6 w-6" />
                </div>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-green-700 to-emerald-600 text-transparent bg-clip-text">
                  Team Composition
                </h2>
              </div>

              <div className="space-y-4 text-gray-700">
                <p className="text-lg">
                  Each participating country must adhere to the following team
                  structure:
                </p>
                <ul className="list-none space-y-3">
                  <li className="flex items-start">
                    <span className="h-2 w-2 rounded-full bg-gradient-to-br from-green-600 to-emerald-600 mr-3 mt-2.5"></span>
                    <p className="text-lg">
                      <span className={highlightedTextStyle}>
                        Six contestants
                      </span>
                    </p>
                  </li>
                  <li className="flex items-start">
                    <span className="h-2 w-2 rounded-full bg-gradient-to-br from-green-600 to-emerald-600 mr-3 mt-2.5"></span>
                    <p className="text-lg">
                      One team leader responsible for the preparation of the
                      team.
                    </p>
                  </li>
                  <li className="flex items-start">
                    <span className="h-2 w-2 rounded-full bg-gradient-to-br from-green-600 to-emerald-600 mr-3 mt-2.5"></span>
                    <p className="text-lg">
                      One deputy team leader to assist the team leader.
                    </p>
                  </li>
                  <li className="flex items-start">
                    <span className="h-2 w-2 rounded-full bg-gradient-to-br from-green-600 to-emerald-600 mr-3 mt-2.5"></span>
                    <p className="text-lg">
                      Optional observers (as permitted by the host country).
                    </p>
                  </li>
                </ul>
              </div>
            </motion.section>

            {/* Competition Structure */}
            <motion.section
              variants={fadeInUp}
              className="bg-gradient-to-br from-white to-orange-50 p-8 rounded-xl shadow-sm border border-orange-100"
            >
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-br from-orange-600 to-amber-700 p-3 rounded-lg text-white mr-4">
                  <FileText className="h-6 w-6" />
                </div>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-orange-700 to-amber-700 text-transparent bg-clip-text">
                  Competition Structure
                </h2>
              </div>

              <div className="space-y-4 text-gray-700">
                <p className="text-lg">The competition consists of:</p>
                <ul className="list-none space-y-3">
                  <li className="flex items-start">
                    <span className="h-2 w-2 rounded-full bg-gradient-to-br from-orange-600 to-amber-700 mr-3 mt-2.5"></span>
                    <p className="text-lg">
                      <span className={highlightedTextStyle}>
                        Two online competition days
                      </span>{" "}
                      each with 3 algorithmic problems to be solved in 5 hours.
                    </p>
                  </li>
                  <li className="flex items-start">
                    <span className="h-2 w-2 rounded-full bg-gradient-to-br from-orange-600 to-amber-700 mr-3 mt-2.5"></span>
                    <p className="text-lg">
                      Contestants will work individually on problems using their
                      own computers.
                    </p>
                  </li>
                  <li className="flex items-start">
                    <span className="h-2 w-2 rounded-full bg-gradient-to-br from-orange-600 to-amber-700 mr-3 mt-2.5"></span>
                    <p className="text-lg">
                      Solutions will be submitted through an online judging
                      system that provides immediate feedback.
                    </p>
                  </li>
                </ul>
              </div>
            </motion.section>

            {/* Languages and Tools */}
            <motion.section
              variants={fadeInUp}
              className="bg-gradient-to-br from-white to-amber-50 p-8 rounded-xl shadow-sm border border-amber-100"
            >
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-br from-amber-600 to-orange-600 p-3 rounded-lg text-white mr-4">
                  <Code className="h-6 w-6" />
                </div>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-amber-700 to-green-600 text-transparent bg-clip-text">
                  Programming Languages
                </h2>
              </div>

              <div className="space-y-4 text-gray-700">
                <p className="text-lg">
                  The following programming languages are allowed in the
                  competition:
                </p>
                <ul className="list-none space-y-3">
                  <li className="flex items-start">
                    <span className="h-2 w-2 rounded-full bg-gradient-to-br from-amber-600 to-orange-600 mr-3 mt-2.5"></span>
                    <p className="text-lg">C++ (g++ compiler)</p>
                  </li>
                  <li className="flex items-start">
                    <span className="h-2 w-2 rounded-full bg-gradient-to-br from-amber-600 to-orange-600 mr-3 mt-2.5"></span>
                    <p className="text-lg">Java (OpenJDK)</p>
                  </li>
                  <li className="flex items-start">
                    <span className="h-2 w-2 rounded-full bg-gradient-to-br from-amber-600 to-orange-600 mr-3 mt-2.5"></span>
                    <p className="text-lg">Python (Python 3)</p>
                  </li>
                </ul>
                <p className="text-lg mt-4">
                  Contestants may use standard libraries provided with these
                  languages, but external libraries are prohibited.
                </p>
              </div>
            </motion.section>

            {/* Scoring and Awards */}
            <motion.section
              variants={fadeInUp}
              className="bg-gradient-to-br from-white to-green-50 p-8 rounded-xl shadow-sm border border-green-100"
            >
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-br from-green-600 to-emerald-600 p-3 rounded-lg text-white mr-4">
                  <Award className="h-6 w-6" />
                </div>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-green-700 to-emerald-600 text-transparent bg-clip-text">
                  Scoring and Awards
                </h2>
              </div>

              <div className="space-y-4 text-gray-700">
                <p className="text-lg">
                  Individual and team achievements will be recognized as
                  follows:
                </p>
                <ul className="list-none space-y-3">
                  <li className="flex items-start">
                    <span className="h-2 w-2 rounded-full bg-gradient-to-br from-green-600 to-emerald-600 mr-3 mt-2.5"></span>
                    <p className="text-lg">
                      Individual medals are awarded to approximately{" "}
                      <span className={highlightedTextStyle}>50%</span> of
                      contestants. Top 1/12 Gold, next 1/6 Silver, next 1/4 Bronze.
                    </p>
              
                  </li>
                  
                  <li className="flex items-start mt-4">
                    <span className="h-2 w-2 rounded-full bg-gradient-to-br from-green-600 to-emerald-600 mr-3 mt-2.5"></span>
                    <p className="text-lg">
                      Country rankings are determined by the sum of the scores
                      of all team members.
                    </p>
                  </li>
                  <li className="flex items-start">
                    <span className="h-2 w-2 rounded-full bg-gradient-to-br from-green-600 to-emerald-600 mr-3 mt-2.5"></span>
                    <p className="text-lg">
                      Special awards may be given for outstanding solutions to
                      specific problems.
                    </p>
                  </li>
                </ul>
              </div>
            </motion.section>

            {/* Code of Conduct */}
            <motion.section
              variants={fadeInUp}
              className="bg-gradient-to-br from-white to-orange-50 p-8 rounded-xl shadow-sm border border-orange-100"
            >
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-br from-orange-600 to-amber-700 p-3 rounded-lg text-white mr-4">
                  <CheckCircle className="h-6 w-6" />
                </div>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-orange-700 to-amber-700 text-transparent bg-clip-text">
                  Code of Conduct
                </h2>
              </div>

              <div className="space-y-4 text-gray-700">
                <p className="text-lg">
                  All participants are expected to adhere to the following code
                  of conduct:
                </p>
                <ul className="list-none space-y-3">
                  <li className="flex items-start">
                    <span className="h-2 w-2 rounded-full bg-gradient-to-br from-orange-600 to-amber-700 mr-3 mt-2.5"></span>
                    <p className="text-lg">
                      Participants must act with integrity and honesty at all
                      times.
                    </p>
                  </li>
                  <li className="flex items-start">
                    <span className="h-2 w-2 rounded-full bg-gradient-to-br from-orange-600 to-amber-700 mr-3 mt-2.5"></span>
                    <p className="text-lg">
                      Any form of cheating or plagiarism will result in
                      immediate disqualification.
                    </p>
                  </li>
                  <li className="flex items-start">
                    <span className="h-2 w-2 rounded-full bg-gradient-to-br from-orange-600 to-amber-700 mr-3 mt-2.5"></span>
                    <p className="text-lg">
                      Participants must treat others with respect and courtesy.
                    </p>
                  </li>
                  <li className="flex items-start">
                    <span className="h-2 w-2 rounded-full bg-gradient-to-br from-orange-600 to-amber-700 mr-3 mt-2.5"></span>
                    <p className="text-lg">
                      Any form of harassment or discrimination will not be
                      tolerated.
                    </p>
                  </li>
                </ul>
              </div>
            </motion.section>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
