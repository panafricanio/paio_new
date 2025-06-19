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

      {/* Host Scientific Committee Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-green-50/50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-green-700 to-emerald-600 bg-clip-text text-transparent">
              Host Scientific Committee
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the local scientific committee members who ensure the quality of PAIO
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
              className="bg-gradient-to-br from-white to-green-50 border border-green-100 rounded-xl p-8 shadow-sm hover:shadow-md transition-all"
              variants={fadeInUp}
              whileHover={{ y: -5 }}
            >
              <div className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-green-100">
                <Image
                  src=""
                  alt="Dr. Papias Niyigena"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center bg-gradient-to-r from-green-700 to-emerald-500 bg-clip-text text-transparent">
                Dr. Papias Niyigena
              </h3>
              <p className="text-gray-600 text-center mb-4">Host Scientific Committee</p>
            </motion.div>
            {/* Hirwa Arnold Card */}
            <motion.div
              className="bg-gradient-to-br from-white to-green-50 border border-green-100 rounded-xl p-8 shadow-sm hover:shadow-md transition-all"
              variants={fadeInUp}
              whileHover={{ y: -5 }}
            >
              <div className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-green-100">
                <Image
                  src="https://pbs.twimg.com/profile_images/1710422070792761344/7ZYj0MHk_400x400.jpg"
                  alt="Hirwa Arnold"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center bg-gradient-to-r from-green-700 to-emerald-500 bg-clip-text text-transparent">
                Hirwa Arnold
              </h3>
              <p className="text-gray-600 text-center mb-4">Host Scientific Committee</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* International Scientific Committee Section */}
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
            <motion.div
              className="bg-gradient-to-br from-white to-blue-50 border border-blue-100 rounded-xl p-8 shadow-sm hover:shadow-md transition-all"
              variants={fadeInUp}
              whileHover={{ y: -5 }}
            >
              <div className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-blue-100">
                <Image
                  src="https://stats.ioinformatics.org/img/photos/2023/6337.png"
                  alt=""
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center bg-gradient-to-r from-blue-700 to-blue-500 bg-clip-text text-transparent">
              Tamio-Vesa Nakajima
              </h3>
              <div className="space-y-2">
                <div className="flex items-center text-gray-700">
                  <Award className="h-5 w-5 mr-2 text-blue-500" />
                  <span>IOI 2017 Gold Medalist </span>
                </div>
                <div className="flex items-center text-gray-700">
                  <GraduationCap className="h-5 w-5 mr-2 text-blue-500" />
                  <span>Head of Romanian Scientific Committee</span>
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
                  src="https://avatars.githubusercontent.com/u/140616733?v=4"
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
            {/* TBD Rwanda Team Leader Card */}
            <motion.div
              className="bg-gradient-to-br from-white to-blue-50 border border-blue-100 rounded-xl p-8 shadow-sm hover:shadow-md transition-all"
              variants={fadeInUp}
              whileHover={{ y: -5 }}
            >
              <div className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-blue-100">
                <Image
                  src="data:image/jpeg;base64,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"
                  alt="Kagaba Etienne"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center bg-gradient-to-r from-blue-700 to-blue-500 bg-clip-text text-transparent">
              Etienne Kagaba
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
                  src="https://i1.rgstatic.net/ii/profile.image/11431281084327962-1663145452994_Q128/James-Katende-3.jpg"
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