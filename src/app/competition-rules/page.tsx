"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Monitor,
  FileText,
  Video,
  HardDrive,
  Clock,
  Users,
  Shield,
  Download,
  ExternalLink,
  AlertTriangle,
  CheckCircle,
  Camera,
  Keyboard,
  Globe,
  HelpCircle,
  Award,
  BookOpen,
} from "lucide-react";

export default function CompetitionRules() {
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
              <Monitor className="h-4 w-4 mr-2" />
              <span className="font-medium text-sm">Competition Rules</span>
            </motion.div>

            <motion.h1
              className="text-4xl md:text-5xl font-bold mb-4 text-amber-800"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.7 }}
            >
              PAIO 2025 Competition Rules
            </motion.h1>

            <motion.p
              className="text-lg text-gray-700 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.7 }}
            >
              Archive of the rules and procedures that applied during the Pan African Informatics Olympiad 2025 online competition. The event has concluded.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-10">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 rounded-xl border border-amber-200 bg-amber-50 px-5 py-4 text-amber-900">
            <p className="font-semibold">PAIO 2025 has concluded</p>
            <p className="text-sm mt-1 text-amber-800">
              Registration and calls for participation are closed. The rules below are kept for reference.
            </p>
          </div>
          <motion.div
            className="flex flex-col space-y-8"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {/* Online Contest with Proctoring */}
            <motion.section
              variants={fadeInUp}
              className="bg-white p-8 rounded-xl shadow-sm border border-amber-100"
            >
              <div className="flex items-center mb-6">
                <div className="bg-amber-600 p-3 rounded-lg text-white mr-4">
                  <Monitor className="h-6 w-6" />
                </div>
                <h2 className="text-3xl font-bold text-amber-800">
                  Online Competition Format
                </h2>
              </div>

              <div className="space-y-4 text-gray-700">
                <p className="text-lg">
                  The PAIO 2025 was conducted as an <span className={highlightedTextStyle}>online competition with mandatory proctoring</span> to ensure fair competition and academic integrity.
                </p>
                <ul className="list-none space-y-3">
                  <li className="flex items-start">
                    <span className="h-2 w-2 rounded-full bg-amber-600 mr-3 mt-2.5"></span>
                    <p className="text-lg">
                      Contestants participated from their home countries under supervised proctoring
                    </p>
                  </li>
                  <li className="flex items-start">
                    <span className="h-2 w-2 rounded-full bg-amber-600 mr-3 mt-2.5"></span>
                    <p className="text-lg">
                      Real-time monitoring was in place throughout the competition
                    </p>
                  </li>
                  <li className="flex items-start">
                    <span className="h-2 w-2 rounded-full bg-amber-600 mr-3 mt-2.5"></span>
                    <p className="text-lg">
                      Technical support was available via designated communication channels
                    </p>
                  </li>
                </ul>
              </div>
            </motion.section>

            {/* Syllabus Section */}
            <motion.section
              variants={fadeInUp}
              className="bg-white p-8 rounded-xl shadow-sm border border-amber-100"
            >
              <div className="flex items-center mb-6">
                <div className="bg-amber-600 p-3 rounded-lg text-white mr-4">
                  <BookOpen className="h-6 w-6" />
                </div>
                <h2 className="text-3xl font-bold text-amber-800">
                  Competition Syllabus
                </h2>
              </div>

              <div className="space-y-4 text-gray-700">
                <p className="text-lg">
                  The competition syllabus mirrors the <span className={highlightedTextStyle}>International Olympiad in Informatics (IOI) Syllabus</span>.
                </p>
                <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <FileText className="h-5 w-5 mr-2 text-amber-600" />
                      <span className="text-lg font-medium">IOI Syllabus 2025</span>
                    </div>
                    <motion.a
                      href="https://ioinformatics.org/files/ioi-syllabus-2025.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="inline-flex items-center px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white font-medium rounded-lg transition-all shadow-sm"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View PDF
                    </motion.a>
                  </div>
                </div>
                <p className="text-lg">
                  This syllabus defines the scope of knowledge expected from contestants and serves as the foundation for all competition tasks.
                </p>
              </div>
            </motion.section>

            {/* Screen Recording Requirements */}
            <motion.section
              variants={fadeInUp}
              className="bg-white p-8 rounded-xl shadow-sm border border-amber-100"
            >
              <div className="flex items-center mb-6">
                <div className="bg-amber-600 p-3 rounded-lg text-white mr-4">
                  <Video className="h-6 w-6" />
                </div>
                <h2 className="text-3xl font-bold text-amber-800">
                  Screen Recording Requirements
                </h2>
              </div>

              <div className="space-y-4 text-gray-700">
                <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-4">
                  <div className="flex items-center">
                    <AlertTriangle className="h-5 w-5 mr-2 text-amber-600" />
                    <span className="text-lg font-semibold text-amber-800">Mandatory Requirement</span>
                  </div>
                </div>
                <p className="text-lg">
                  All participants are <span className={highlightedTextStyle}>required to use FFmpeg</span> to record their screen throughout the entire competition period. <span className={highlightedTextStyle}>We followed the IOI 2021 Screen Recording Procedures</span> to ensure consistency and compliance.
                </p>
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Camera className="h-5 w-5 mr-2 text-gray-600" />
                      <span className="text-lg font-medium">IOI 2021 Screen Recording Procedures</span>
                    </div>
                    <motion.a
                      href="https://ioi2021.sg/wp-content/uploads/sites/13/2021/06/IOI-2021-Screen-Recording-Procedures-20210624.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="inline-flex items-center px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white font-medium rounded-lg transition-all shadow-sm"
                    >
                      <Download className="mr-2 h-4 w-4" />
                      Guide PDF
                    </motion.a>
                  </div>
                </div>
                <ul className="list-none space-y-3">
                  <li className="flex items-start">
                    <span className="h-2 w-2 rounded-full bg-amber-600 mr-3 mt-2.5"></span>
                    <p className="text-lg">
                      Recording had to begin before the competition started and continue until the submission deadline
                    </p>
                  </li>
                  <li className="flex items-start">
                    <span className="h-2 w-2 rounded-full bg-amber-600 mr-3 mt-2.5"></span>
                    <p className="text-lg">
                      All screen activity, including IDE usage and web browsing, must be captured
                    </p>
                  </li>
                  <li className="flex items-start">
                    <span className="h-2 w-2 rounded-full bg-amber-600 mr-3 mt-2.5"></span>
                    <p className="text-lg">
                      Recordings may be reviewed in case of suspected violations
                    </p>
                  </li>
                </ul>
              </div>
            </motion.section>

            {/* Virtual Machine Requirement */}
            <motion.section
              variants={fadeInUp}
              className="bg-white p-8 rounded-xl shadow-sm border border-amber-100"
            >
              <div className="flex items-center mb-6">
                <div className="bg-amber-600 p-3 rounded-lg text-white mr-4">
                  <HardDrive className="h-6 w-6" />
                </div>
                <h2 className="text-3xl font-bold text-amber-800">
                  Virtual Machine Usage
                </h2>
              </div>

              <div className="space-y-4 text-gray-700">
                <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-4">
                  <div className="flex items-center">
                    <Shield className="h-5 w-5 mr-2 text-amber-600" />
                    <span className="text-lg font-semibold text-amber-800">Compulsory Requirement</span>
                  </div>
                </div>
                <p className="text-lg">
                  The use of a Virtual Machine (VM) was <span className={highlightedTextStyle}>compulsory</span> for all contestants during the competition. <span className={highlightedTextStyle}>PAIO provided the virtual machine</span> to ensure consistency across all participants.
                </p>
                <ul className="list-none space-y-3">
                  <li className="flex items-start">
                    <span className="h-2 w-2 rounded-full bg-amber-600 mr-3 mt-2.5"></span>
                    <p className="text-lg">
                      Provides a controlled and standardized environment for all participants
                    </p>
                  </li>
                  <li className="flex items-start">
                    <span className="h-2 w-2 rounded-full bg-amber-600 mr-3 mt-2.5"></span>
                    <p className="text-lg">
                      Ensures security and prevents unauthorized access to external resources
                    </p>
                  </li>
                  <li className="flex items-start">
                    <span className="h-2 w-2 rounded-full bg-amber-600 mr-3 mt-2.5"></span>
                    <p className="text-lg">
                      <span className={highlightedTextStyle}>More details were published</span> regarding VM configuration and setup instructions
                    </p>
                  </li>
                </ul>
              </div>
            </motion.section>

            {/* Tasks Section */}
            <motion.section
              variants={fadeInUp}
              className="bg-white p-8 rounded-xl shadow-sm border border-amber-100"
            >
              <div className="flex items-center mb-6">
                <div className="bg-amber-600 p-3 rounded-lg text-white mr-4">
                  <FileText className="h-6 w-6" />
                </div>
                <h2 className="text-3xl font-bold text-amber-800">
                  Tasks and Submissions
                </h2>
              </div>

              <div className="space-y-6 text-gray-700">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-amber-700">Source Program Requirements</h3>
                  <ul className="list-none space-y-3">
                    <li className="flex items-start">
                      <span className="h-2 w-2 rounded-full bg-amber-600 mr-3 mt-2.5"></span>
                      <p className="text-lg">
                        The source program must be contained in <span className={highlightedTextStyle}>one source file</span> as specified in the task statement
                      </p>
                    </li>
                    <li className="flex items-start">
                      <span className="h-2 w-2 rounded-full bg-amber-600 mr-3 mt-2.5"></span>
                      <p className="text-lg">
                        Submissions must <span className={highlightedTextStyle}>not perform explicit input and output operations</span>
                      </p>
                    </li>
                    <li className="flex items-start">
                      <span className="h-2 w-2 rounded-full bg-amber-600 mr-3 mt-2.5"></span>
                      <p className="text-lg">
                        Data must only be exchanged through the interfaces specified in the task statement
                      </p>
                    </li>
                    <li className="flex items-start">
                      <span className="h-2 w-2 rounded-full bg-amber-600 mr-3 mt-2.5"></span>
                      <p className="text-lg">
                        Direct access to any file, including standard input or output, is <span className={highlightedTextStyle}>forbidden</span> (though writing to standard error is allowed)
                      </p>
                    </li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-amber-700">Threading and Performance</h3>
                  <ul className="list-none space-y-3">
                    <li className="flex items-start">
                      <span className="h-2 w-2 rounded-full bg-amber-600 mr-3 mt-2.5"></span>
                      <p className="text-lg">
                        Multiple threads are allowed in all programming languages
                      </p>
                    </li>
                    <li className="flex items-start">
                      <span className="h-2 w-2 rounded-full bg-amber-600 mr-3 mt-2.5"></span>
                      <p className="text-lg">
                        Running time is counted as the <span className={highlightedTextStyle}>sum of running times of all threads</span>
                      </p>
                    </li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-amber-700">Subtasks and Limits</h3>
                  <ul className="list-none space-y-3">
                    <li className="flex items-start">
                      <span className="h-2 w-2 rounded-full bg-amber-600 mr-3 mt-2.5"></span>
                      <p className="text-lg">
                        Each task were divided into several subtasks, each worth a portion of the total points
                      </p>
                    </li>
                    <li className="flex items-start">
                      <span className="h-2 w-2 rounded-full bg-amber-600 mr-3 mt-2.5"></span>
                      <p className="text-lg">
                        Time and memory limits were generous (typically double those required by the expected solution)
                      </p>
                    </li>
                    <li className="flex items-start">
                      <span className="h-2 w-2 rounded-full bg-amber-600 mr-3 mt-2.5"></span>
                      <p className="text-lg">
                        Memory limit includes executable code size, stack, heap, etc.
                      </p>
                    </li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-amber-700">Task Materials</h3>
                  <p className="text-lg">
                    For each programming task, contestants can download a zip file containing:
                  </p>
                  <ul className="list-none space-y-3">
                    <li className="flex items-start">
                      <span className="h-2 w-2 rounded-full bg-amber-600 mr-3 mt-2.5"></span>
                      <p className="text-lg">Interface files</p>
                    </li>
                    <li className="flex items-start">
                      <span className="h-2 w-2 rounded-full bg-amber-600 mr-3 mt-2.5"></span>
                      <p className="text-lg">A sample grading program</p>
                    </li>
                    <li className="flex items-start">
                      <span className="h-2 w-2 rounded-full bg-amber-600 mr-3 mt-2.5"></span>
                      <p className="text-lg">A skeleton implementation of the required source file</p>
                    </li>
                  </ul>
                  <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mt-4">
                    <p className="text-lg text-amber-800">
                      <strong>Note:</strong> The sample grader provided on the workstation would not be the same as the official grader used by the grading system.
                    </p>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Practice Session */}
            <motion.section
              variants={fadeInUp}
              className="bg-white p-8 rounded-xl shadow-sm border border-amber-100"
            >
              <div className="flex items-center mb-6">
                <div className="bg-amber-600 p-3 rounded-lg text-white mr-4">
                  <Clock className="h-6 w-6" />
                </div>
                <h2 className="text-3xl font-bold text-amber-800">
                  Practice Session
                </h2>
              </div>

              <div className="space-y-4 text-gray-700">
                <p className="text-lg">
                  There was a <span className={highlightedTextStyle}>2-hour Practice Competition</span> prior to the first competition day to familiarize all contestants with the grading system.
                </p>
                <ul className="list-none space-y-3">
                  <li className="flex items-start">
                    <span className="h-2 w-2 rounded-full bg-amber-600 mr-3 mt-2.5"></span>
                    <p className="text-lg">
                      Practice tasks were published before the IOI
                    </p>
                  </li>
                  <li className="flex items-start">
                    <span className="h-2 w-2 rounded-full bg-amber-600 mr-3 mt-2.5"></span>
                    <p className="text-lg">
                      Contestants may bring <span className={highlightedTextStyle}>printed solutions on paper only</span> during the Practice Competition
                    </p>
                  </li>
                  <li className="flex items-start">
                    <span className="h-2 w-2 rounded-full bg-amber-600 mr-3 mt-2.5"></span>
                    <p className="text-lg">
                      This session helps contestants become familiar with the submission system and interface
                    </p>
                  </li>
                </ul>
              </div>
            </motion.section>

            {/* Quarantine */}
            <motion.section
              variants={fadeInUp}
              className="bg-white p-8 rounded-xl shadow-sm border border-red-100"
            >
              <div className="flex items-center mb-6">
                <div className="bg-red-600 p-3 rounded-lg text-white mr-4">
                  <Shield className="h-6 w-6" />
                </div>
                <h2 className="text-3xl font-bold text-red-800">
                  Quarantine
                </h2>
              </div>

              <div className="space-y-4 text-gray-700">
                <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4">
                  <div className="flex items-center">
                    <AlertTriangle className="h-5 w-5 mr-2 text-red-600" />
                    <span className="text-lg font-semibold text-red-800">Critical Requirement</span>
                  </div>
                </div>
                <p className="text-lg">
                  To protect the confidentiality of the tasks, all direct and indirect contacts and communication between contestants and team leaders are <span className={highlightedTextStyle}>prohibited</span> during specific periods.
                </p>
                <ul className="list-none space-y-3">
                  <li className="flex items-start">
                    <span className="h-2 w-2 rounded-full bg-red-600 mr-3 mt-2.5"></span>
                    <p className="text-lg">
                      Quarantine begins when tasks are presented to GA members and ends at competition start
                    </p>
                  </li>
                  <li className="flex items-start">
                    <span className="h-2 w-2 rounded-full bg-red-600 mr-3 mt-2.5"></span>
                    <p className="text-lg">
                      Contestants cannot communicate with GA members or anyone who knows the tasks
                    </p>
                  </li>
                  <li className="flex items-start">
                    <span className="h-2 w-2 rounded-full bg-red-600 mr-3 mt-2.5"></span>
                    <p className="text-lg">
                      GA members cannot communicate task-related information to unauthorized persons
                    </p>
                  </li>
                  <li className="flex items-start">
                    <span className="h-2 w-2 rounded-full bg-red-600 mr-3 mt-2.5"></span>
                    <p className="text-lg">
                      <span className={highlightedTextStyle}>Violation may result in disqualification</span> of contestants or entire delegations
                    </p>
                  </li>
                </ul>
              </div>
            </motion.section>

            {/* Competition Equipment and Environment */}
            <motion.section
              variants={fadeInUp}
              className="bg-white p-8 rounded-xl shadow-sm border border-amber-100"
            >
              <div className="flex items-center mb-6">
                <div className="bg-amber-600 p-3 rounded-lg text-white mr-4">
                  <Monitor className="h-6 w-6" />
                </div>
                <h2 className="text-3xl font-bold text-amber-800">
                  Competition Equipment and Environment
                </h2>
              </div>

              <div className="space-y-4 text-gray-700">
                <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                  <p className="text-lg text-amber-800 font-medium">
                    <strong>To be determined:</strong> Detailed equipment specifications and environment setup were provided before the competition.
                  </p>
                </div>
              </div>
            </motion.section>

            {/* Task Statements */}
            <motion.section
              variants={fadeInUp}
              className="bg-white p-8 rounded-xl shadow-sm border border-amber-100"
            >
              <div className="flex items-center mb-6">
                <div className="bg-amber-600 p-3 rounded-lg text-white mr-4">
                  <Globe className="h-6 w-6" />
                </div>
                <h2 className="text-3xl font-bold text-amber-800">
                  Task Statements
                </h2>
              </div>

              <div className="space-y-4 text-gray-700">
                <p className="text-lg">
                      Each contestant had online access to the official English version of tasks and all task translations in electronic format (PDF).
                </p>
                <ul className="list-none space-y-3">
                  <li className="flex items-start">
                    <span className="h-2 w-2 rounded-full bg-amber-600 mr-3 mt-2.5"></span>
                    <p className="text-lg">
                      Primary language is English
                    </p>
                  </li>
                  <li className="flex items-start">
                    <span className="h-2 w-2 rounded-full bg-amber-600 mr-3 mt-2.5"></span>
                    <p className="text-lg">
                      Translations available in various African languages where possible
                    </p>
                  </li>
                  <li className="flex items-start">
                    <span className="h-2 w-2 rounded-full bg-amber-600 mr-3 mt-2.5"></span>
                    <p className="text-lg">
                      All statements provided in PDF format through the competition platform
                    </p>
                  </li>
                </ul>
              </div>
            </motion.section>

            {/* Supplies */}
            <motion.section
              variants={fadeInUp}
              className="bg-white p-8 rounded-xl shadow-sm border border-amber-100"
            >
              <div className="flex items-center mb-6">
                <div className="bg-amber-600 p-3 rounded-lg text-white mr-4">
                  <Keyboard className="h-6 w-6" />
                </div>
                <h2 className="text-3xl font-bold text-amber-800">
                  Allowed Supplies
                </h2>
              </div>

              <div className="space-y-4 text-gray-700">
                <p className="text-lg">
                  In the competition room, blank paper, writing tools, snacks and water should be provided by the proctor. Contestants may bring the following items:
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold text-amber-700">Personal Items</h3>
                    <ul className="list-none space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-amber-500 mr-2 mt-1" />
                        <p>Clothing</p>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-amber-500 mr-2 mt-1" />
                        <p>Reasonable jewelry</p>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-amber-500 mr-2 mt-1" />
                        <p>Small mascots</p>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-amber-500 mr-2 mt-1" />
                        <p>Medicine and medical equipment</p>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold text-amber-700">Equipment & Tools</h3>
                    <ul className="list-none space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-amber-500 mr-2 mt-1" />
                        <p>Writing utensils</p>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-amber-500 mr-2 mt-1" />
                        <p>Keyboards (without wireless/calculation/programmable functions)</p>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-amber-500 mr-2 mt-1" />
                        <p>Mouse (without wireless/calculation functions) and mouse pads</p>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-amber-500 mr-2 mt-1" />
                        <p>English dictionaries</p>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-amber-500 mr-2 mt-1" />
                        <p>Snacks, earplugs and earmuffs</p>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mt-4">
                  <p className="text-lg text-amber-800">
                    <strong>Important:</strong> All items must not transmit or store any data in electronic or printed format (other than their designed purpose).
                  </p>
                </div>
              </div>
            </motion.section>

            {/* Assistance and Clarification */}
            <motion.section
              variants={fadeInUp}
              className="bg-white p-8 rounded-xl shadow-sm border border-amber-100"
            >
              <div className="flex items-center mb-6">
                <div className="bg-amber-600 p-3 rounded-lg text-white mr-4">
                  <HelpCircle className="h-6 w-6" />
                </div>
                <h2 className="text-3xl font-bold text-amber-800">
                  Assistance and Clarification
                </h2>
              </div>

              <div className="space-y-6 text-gray-700">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-amber-700">Clarification Requests</h3>
                  <p className="text-lg">
                    During the competition, contestants may ask questions concerning competition tasks, rules and/or grading through the grading system.
                  </p>
                  <ul className="list-none space-y-3">
                    <li className="flex items-start">
                      <span className="h-2 w-2 rounded-full bg-amber-600 mr-3 mt-2.5"></span>
                      <p className="text-lg">
                        Submit clarification requests in English or your preferred language
                      </p>
                    </li>
                    <li className="flex items-start">
                      <span className="h-2 w-2 rounded-full bg-amber-600 mr-3 mt-2.5"></span>
                      <p className="text-lg">
                        If unable to type required characters, write on paper and inform the proctor
                      </p>
                    </li>
                    <li className="flex items-start">
                      <span className="h-2 w-2 rounded-full bg-amber-600 mr-3 mt-2.5"></span>
                      <p className="text-lg">
                        <span className={highlightedTextStyle}>Continue working while waiting for answers</span>
                      </p>
                    </li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-amber-700">Question Guidelines</h3>
                  <ul className="list-none space-y-3">
                    <li className="flex items-start">
                      <span className="h-2 w-2 rounded-full bg-amber-600 mr-3 mt-2.5"></span>
                      <p className="text-lg">
                        Phrase questions so that a yes/no answer will have clear meaning
                      </p>
                    </li>
                    <li className="flex items-start">
                      <span className="h-2 w-2 rounded-full bg-amber-600 mr-3 mt-2.5"></span>
                      <p className="text-lg">
                        <span className={highlightedTextStyle}>Avoid negative questions</span> like "Isn't it true that...?"
                      </p>
                    </li>
                    <li className="flex items-start">
                      <span className="h-2 w-2 rounded-full bg-amber-600 mr-3 mt-2.5"></span>
                      <p className="text-lg">
                        Use positive questions of the form "Is it true that...?"
                      </p>
                    </li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-amber-700">Possible Responses</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white border border-gray-200 rounded-lg p-3">
                      <p className="font-medium text-gray-900">"YES" / "NO"</p>
                      <p className="text-sm text-gray-600">Direct answers</p>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-lg p-3">
                      <p className="font-medium text-gray-900">"ANSWERED IN TASK DESCRIPTION"</p>
                      <p className="text-sm text-gray-600">Information is already provided</p>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-lg p-3">
                      <p className="font-medium text-gray-900">"INVALID QUESTION"</p>
                      <p className="text-sm text-gray-600">Rephrase needed</p>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-lg p-3">
                      <p className="font-medium text-gray-900">"NO COMMENT"</p>
                      <p className="text-sm text-gray-600">Information cannot be given</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-amber-700">Assistance Requests</h3>
                  <p className="text-lg">
                    Questions not concerning competition tasks, rules and/or grading are considered Assistance Requests and must be made via the proctor.
                  </p>
                  <ul className="list-none space-y-3">
                    <li className="flex items-start">
                      <span className="h-2 w-2 rounded-full bg-amber-600 mr-3 mt-2.5"></span>
                      <p className="text-lg">
                        <span className={highlightedTextStyle}>Do not leave your seat</span> until allowed to do so
                      </p>
                    </li>
                    <li className="flex items-start">
                      <span className="h-2 w-2 rounded-full bg-amber-600 mr-3 mt-2.5"></span>
                      <p className="text-lg">
                        Never attempt to fix computer or network problems yourself
                      </p>
                    </li>
                    <li className="flex items-start">
                      <span className="h-2 w-2 rounded-full bg-amber-600 mr-3 mt-2.5"></span>
                      <p className="text-lg">
                        Always ask for assistance through your proctor
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.section>

            {/* Cheating Section */}
            <motion.section
              variants={fadeInUp}
              className="bg-white p-8 rounded-xl shadow-sm border border-red-100"
            >
              <div className="flex items-center mb-6">
                <div className="bg-red-600 p-3 rounded-lg text-white mr-4">
                  <Shield className="h-6 w-6" />
                </div>
                <h2 className="text-3xl font-bold text-red-800">
                  Cheating
                </h2>
              </div>

              <div className="space-y-6 text-gray-700">
                <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4">
                  <div className="flex items-center">
                    <AlertTriangle className="h-5 w-5 mr-2 text-red-600" />
                    <span className="text-lg font-semibold text-red-800">Zero Tolerance Policy</span>
                  </div>
                </div>
                
                <p className="text-lg">
                  Contestants must use only the workstation and account assigned to them on each competition day. <span className={highlightedTextStyle}>All of the following actions are considered cheating and may result in disqualification:</span>
                </p>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-red-700">Prohibited Actions</h3>
                  <ul className="list-none space-y-4">
                    <li className="flex items-start">
                      <span className="h-2 w-2 rounded-full bg-red-600 mr-3 mt-2.5 flex-shrink-0"></span>
                      <p className="text-lg">
                        <span className={highlightedTextStyle}>Submitting illegal programs</span> or attempting to tamper with or compromise the grading system
                      </p>
                    </li>
                    <li className="flex items-start">
                      <span className="h-2 w-2 rounded-full bg-red-600 mr-3 mt-2.5 flex-shrink-0"></span>
                      <p className="text-lg">
                        Attempting to gain access to <span className={highlightedTextStyle}>root or any account other than the one assigned</span> to you
                      </p>
                    </li>
                    <li className="flex items-start">
                      <span className="h-2 w-2 rounded-full bg-red-600 mr-3 mt-2.5 flex-shrink-0"></span>
                      <p className="text-lg">
                        Attempting to store information in any part of the file system <span className={highlightedTextStyle}>other than the home directory or /tmp directory</span>
                      </p>
                    </li>
                    <li className="flex items-start">
                      <span className="h-2 w-2 rounded-full bg-red-600 mr-3 mt-2.5 flex-shrink-0"></span>
                      <p className="text-lg">
                        <span className={highlightedTextStyle}>Touching any workstation other than the one assigned</span> to you
                      </p>
                    </li>
                    <li className="flex items-start">
                      <span className="h-2 w-2 rounded-full bg-red-600 mr-3 mt-2.5 flex-shrink-0"></span>
                      <p className="text-lg">
                        Attempting to <span className={highlightedTextStyle}>access any machine on the network or Internet</span>, other than to access the contest system for usual purposes (e.g., submitting tasks, viewing results, downloading sample data, submitting clarification requests), calling for support staff, and printing documents
                      </p>
                    </li>
                    <li className="flex items-start">
                      <span className="h-2 w-2 rounded-full bg-red-600 mr-3 mt-2.5 flex-shrink-0"></span>
                      <p className="text-lg">
                        Even running a single <span className={highlightedTextStyle}>"ping" command is strictly prohibited</span> and may lead to disqualification
                      </p>
                    </li>
                    <li className="flex items-start">
                      <span className="h-2 w-2 rounded-full bg-red-600 mr-3 mt-2.5 flex-shrink-0"></span>
                      <p className="text-lg">
                        Attempting to <span className={highlightedTextStyle}>reboot or alter the boot sequence</span> of any workstation
                      </p>
                    </li>
                    <li className="flex items-start">
                      <span className="h-2 w-2 rounded-full bg-red-600 mr-3 mt-2.5 flex-shrink-0"></span>
                      <p className="text-lg">
                        <span className={highlightedTextStyle}>Communicating with other people</span> during the competition, other than support staff and/or Scientific/Technical Committee members
                      </p>
                    </li>
                    <li className="flex items-start">
                      <span className="h-2 w-2 rounded-full bg-red-600 mr-3 mt-2.5 flex-shrink-0"></span>
                      <p className="text-lg">
                        <span className={highlightedTextStyle}>Reverse engineering test data</span> to solve problems in highly test-data-dependent manners. This includes using the feedback system to extract test data and building solutions adapted to specific test cases that would solve significantly fewer test cases correctly if the test data were replaced by an equivalent set
                      </p>
                    </li>
                  </ul>
                </div>

                <div className="bg-red-100 border border-red-300 rounded-lg p-4 mt-6">
                  <div className="flex items-center mb-2">
                    <AlertTriangle className="h-5 w-5 mr-2 text-red-700" />
                    <span className="text-lg font-bold text-red-800">Warning</span>
                  </div>
                  <p className="text-lg text-red-800">
                    Violation of any of these rules is considered cheating and <span className="font-semibold">may result in immediate disqualification</span> from the competition.
                  </p>
                </div>
              </div>
            </motion.section>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
