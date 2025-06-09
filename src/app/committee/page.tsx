"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Users, Award, GraduationCap } from "lucide-react";

export default function Committee() {
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
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100 pt-20 pb-16 md:pt-28 md:pb-24">
        <div className="absolute inset-0 overflow-hidden">
          {/* Decorative gradients */}
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-indigo-300/20 rounded-full blur-3xl"></div>
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
              <Users className="h-4 w-4 mr-2" />
              <span className="font-medium text-sm">Our Committee</span>
            </motion.div>

            <motion.h1
              className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-700 to-indigo-600 text-transparent bg-clip-text"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.7 }}
            >
              Committee Members
            </motion.h1>

            <motion.p
              className="text-lg text-gray-700 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.7 }}
            >
              Meet the dedicated professionals who make PAIO possible
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Committee Members Section */}
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
              International Scientific Committee
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our committee members bring extensive experience and expertise to ensure the highest standards of competition
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Anton Tsypko Card */}
            <motion.div
              className="bg-gradient-to-br from-white to-blue-50 border border-blue-100 rounded-xl p-8 shadow-sm hover:shadow-md transition-all"
              variants={fadeInUp}
              whileHover={{ y: -5 }}
            >
              <div className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-blue-100">
                <Image
                  src="https://stats.ioinformatics.org/img/photos/2024/6044.png"
                  alt="Anton Tsypko"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center bg-gradient-to-r from-blue-700 to-blue-500 bg-clip-text text-transparent">
                Anton Tsypko
              </h3>
              <div className="space-y-2">
                <div className="flex items-center text-gray-700">
                  <Award className="h-5 w-5 mr-2 text-blue-500" />
                  <span>IOI 2017 Gold Medalist</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <GraduationCap className="h-5 w-5 mr-2 text-blue-500" />
                  <span>Team Leader, Ukraine</span>
                </div>
              </div>
            </motion.div>
            <motion.div
              className="bg-gradient-to-br from-white to-blue-50 border border-blue-100 rounded-xl p-8 shadow-sm hover:shadow-md transition-all"
              variants={fadeInUp}
              whileHover={{ y: -5 }}
            >
              <div className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-blue-100">
                <Image
                  src="https://www.cs.princeton.edu/~pparedes/images/photo01.jpg"
                  alt="Prof Pedro Paredes"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center bg-gradient-to-r from-blue-700 to-blue-500 bg-clip-text text-transparent">
                Prof Pedro Paredes
              </h3>
              <div className="space-y-2">
                <div className="flex items-center text-gray-700">
                  <Award className="h-5 w-5 mr-2 text-blue-500" />
                  <span>Teaching Professor, Princeton</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <GraduationCap className="h-5 w-5 mr-2 text-blue-500" />
                  <span>Head of Portugal International Scientific Committee</span>
                </div>
              </div>
            </motion.div>
            <motion.div
              className="bg-gradient-to-br from-white to-blue-50 border border-blue-100 rounded-xl p-8 shadow-sm hover:shadow-md transition-all"
              variants={fadeInUp}
              whileHover={{ y: -5 }}
            >
              <div className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-blue-100">
                <Image
                  src="https://stats.ioinformatics.org/img/photos/2024/5997.png"
                  alt=""
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center bg-gradient-to-r from-blue-700 to-blue-500 bg-clip-text text-transparent">
              Bartosz Kostka
              </h3>
              <div className="space-y-2">
                <div className="flex items-center text-gray-700">
                  <Award className="h-5 w-5 mr-2 text-blue-500" />
                  <span>Software Engineer, Google </span>
                </div>
                <div className="flex items-center text-gray-700">
                  <GraduationCap className="h-5 w-5 mr-2 text-blue-500" />
                  <span>International Olympiad for Informatics Scientific Committee</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Organizing Committee Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-purple-50/50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-700 to-indigo-600 bg-clip-text text-transparent">
              Organizing Committee
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the team behind the organization and website of PAIO
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Joel Lee Card */}
            <motion.div
              className="bg-gradient-to-br from-white to-purple-50 border border-purple-100 rounded-xl p-8 shadow-sm hover:shadow-md transition-all"
              variants={fadeInUp}
              whileHover={{ y: -5 }}
            >
              <div className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-purple-100">
                <Image
                  src="https://pbs.twimg.com/profile_images/1909628827371741184/cQcKA3j1_400x400.jpg"
                  alt="Joel Lee"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center bg-gradient-to-r from-purple-700 to-indigo-500 bg-clip-text text-transparent">
                Joel Lee
              </h3>
              <p className="text-gray-600 text-center mb-4">Software Engineer</p>
            </motion.div>

            {/* NIYOKWIZERWA Jean Paul Elisa Card */}
            <motion.div
              className="bg-gradient-to-br from-white to-purple-50 border border-purple-100 rounded-xl p-8 shadow-sm hover:shadow-md transition-all"
              variants={fadeInUp}
              whileHover={{ y: -5 }}
            >
              <div className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-purple-100">
                <Image
                  src="https://www.linkedin.com/in/jean-paul-elisa/overlay/photo/"
                  alt="NIYOKWIZERWA Jean Paul Elisa"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center bg-gradient-to-r from-purple-700 to-indigo-500 bg-clip-text text-transparent">
                NIYOKWIZERWA Jean Paul Elisa
              </h3>
              <p className="text-gray-600 text-center mb-4">Software Engineer, Website Creator</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Team Leaders Section */}
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
              Team Leaders
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the team leaders from participating countries
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Hirwa Arnold Card */}
            <motion.div
              className="bg-gradient-to-br from-white to-blue-50 border border-blue-100 rounded-xl p-8 shadow-sm hover:shadow-md transition-all"
              variants={fadeInUp}
              whileHover={{ y: -5 }}
            >
              <div className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-blue-100">
                <Image
                  src="/placeholder-profile.png"
                  alt="Hirwa Arnold"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center bg-gradient-to-r from-blue-700 to-blue-500 bg-clip-text text-transparent">
                Hirwa Arnold
              </h3>
              <p className="text-gray-600 text-center mb-4">Rwanda</p>
            </motion.div>

            {/* Raouf Ould ali Card */}
            <motion.div
              className="bg-gradient-to-br from-white to-blue-50 border border-blue-100 rounded-xl p-8 shadow-sm hover:shadow-md transition-all"
              variants={fadeInUp}
              whileHover={{ y: -5 }}
            >
              <div className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-blue-100">
                <Image
                  src="https://stats.ioinformatics.org/img/photos/2024/8241.png"
                  alt="Raouf Ould ali"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center bg-gradient-to-r from-blue-700 to-blue-500 bg-clip-text text-transparent">
                Raouf Ould ali
              </h3>
              <p className="text-gray-600 text-center mb-4">Algeria</p>
            </motion.div>

            {/* Prof James Katende Card */}
            <motion.div
              className="bg-gradient-to-br from-white to-blue-50 border border-blue-100 rounded-xl p-8 shadow-sm hover:shadow-md transition-all"
              variants={fadeInUp}
              whileHover={{ y: -5 }}
            >
              <div className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-blue-100">
                <Image
                  src="/placeholder-profile.png"
                  alt="Prof James Katende"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center bg-gradient-to-r from-blue-700 to-blue-500 bg-clip-text text-transparent">
                Prof James Katende
              </h3>
              <p className="text-gray-600 text-center mb-4">Kenya</p>
            </motion.div>
            <motion.div
              className="bg-gradient-to-br from-white to-blue-50 border border-blue-100 rounded-xl p-8 shadow-sm hover:shadow-md transition-all"
              variants={fadeInUp}
              whileHover={{ y: -5 }}
            >
              <div className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-blue-100">
                <Image
                  src="/placeholder-profile.png"
                  alt=""
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center bg-gradient-to-r from-blue-700 to-blue-500 bg-clip-text text-transparent">
                Dalton Omondi
              </h3>
              <p className="text-gray-600 text-center mb-4">Ghana</p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 