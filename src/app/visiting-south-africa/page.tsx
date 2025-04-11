"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  MapPin,
  Plane,
  Hotel,
  CreditCard,
  Sun,
  Bus,
  ExternalLink,
} from "lucide-react";

export default function VisitingSouthAfrica() {
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
      <section className="relative py-16 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100">
        <div className="absolute inset-0 overflow-hidden">
          {/* Decorative gradients */}
          <div className="absolute -top-24 -left-24 w-72 h-72 bg-blue-300/20 rounded-full blur-3xl"></div>

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
              <MapPin className="h-4 w-4 mr-2" />
              <span className="font-medium text-sm">Travel Information</span>
            </motion.div>

            <motion.h1
              className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-700 to-indigo-600 text-transparent bg-clip-text"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.7 }}
            >
              Visiting South Africa
            </motion.h1>

            <motion.p
              className="text-lg text-gray-700 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.7 }}
            >
              Essential information for PAIO participants and visitors traveling
              to South Africa
            </motion.p>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-10">
        <div className="max-w-4xl mx-auto">
          {/* Visa Information */}
          <motion.section
            className="mb-16"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div className="flex items-center mb-6" variants={fadeInUp}>
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-3 rounded-lg text-white mr-4">
                <Plane className="h-6 w-6" />
              </div>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-700 to-indigo-600 text-transparent bg-clip-text">
                Visa Information
              </h2>
            </motion.div>

            <motion.div
              className="bg-gradient-to-br from-white to-blue-50 p-6 rounded-xl shadow-sm border border-blue-100"
              variants={fadeInUp}
            >
              <p className="text-lg mb-4">
                Visitors to South Africa may require a visa depending on their
                nationality. Please check with the South African embassy or
                consulate in your country to determine visa requirements.
              </p>
              <p className="text-lg mb-4">
                For PAIO participants, invitation letters will be provided upon
                request to assist with the visa application process.
              </p>
              <p className="text-lg">
                For visa information, please visit the
                <Link
                  href="http://www.dha.gov.za/index.php/immigration-services/apply-for-a-south-african-visa"
                  className="text-blue-600 hover:text-blue-800 mx-1 inline-flex items-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Department of Home Affairs website
                  <ExternalLink className="h-3 w-3 ml-1" />
                </Link>
                .
              </p>
            </motion.div>
          </motion.section>

          {/* Accommodation */}
          <motion.section
            className="mb-16"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div className="flex items-center mb-6" variants={fadeInUp}>
              <div className="bg-gradient-to-br from-indigo-500 to-indigo-600 p-3 rounded-lg text-white mr-4">
                <Hotel className="h-6 w-6" />
              </div>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-indigo-700 to-indigo-600 text-transparent bg-clip-text">
                Accommodation
              </h2>
            </motion.div>

            <motion.div
              className="bg-gradient-to-br from-white to-indigo-50 p-6 rounded-xl shadow-sm border border-indigo-100"
              variants={fadeInUp}
            >
              <p className="text-lg mb-4">
                Accommodation for PAIO participants will be arranged at the
                University of the Witwatersrand campus. Details will be provided
                to registered participants.
              </p>
              <p className="text-lg">
                For accompanying persons or those seeking alternative
                accommodation, there are numerous hotels and guest houses in the
                vicinity of the university.
              </p>
            </motion.div>
          </motion.section>

          {/* Transportation */}
          <motion.section
            className="mb-16"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div className="flex items-center mb-6" variants={fadeInUp}>
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 p-3 rounded-lg text-white mr-4">
                <Bus className="h-6 w-6" />
              </div>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-700 to-purple-600 text-transparent bg-clip-text">
                Transportation
              </h2>
            </motion.div>

            <motion.div
              className="bg-gradient-to-br from-white to-purple-50 p-6 rounded-xl shadow-sm border border-purple-100"
              variants={fadeInUp}
            >
              <p className="text-lg mb-4">
                O.R. Tambo International Airport is the main port of entry to
                Johannesburg. Transportation between the airport and the
                university will be arranged for PAIO participants.
              </p>
              <p className="text-lg mb-4">
                For local transportation around Johannesburg, options include:
              </p>
              <ul className="list-none space-y-3">
                <li className="flex items-center text-lg">
                  <span className="h-2 w-2 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 mr-3"></span>
                  Gautrain - rapid rail system
                </li>
                <li className="flex items-center text-lg">
                  <span className="h-2 w-2 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 mr-3"></span>
                  Uber and other ride-sharing services
                </li>
                <li className="flex items-center text-lg">
                  <span className="h-2 w-2 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 mr-3"></span>
                  Metered taxis
                </li>
              </ul>
            </motion.div>
          </motion.section>

          {/* Two-column layout for Weather and Currency */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Weather */}
            <motion.section
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.div
                className="flex items-center mb-6"
                variants={fadeInUp}
              >
                <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-3 rounded-lg text-white mr-4">
                  <Sun className="h-6 w-6" />
                </div>
                <h2 className="text-2xl font-bold bg-gradient-to-r from-orange-700 to-orange-600 text-transparent bg-clip-text">
                  Weather
                </h2>
              </motion.div>

              <motion.div
                className="bg-gradient-to-br from-white to-orange-50 h-full p-6 rounded-xl shadow-sm border border-orange-100"
                variants={fadeInUp}
              >
                <p className="text-lg mb-4">
                  August is winter in South Africa. In Johannesburg, you can
                  expect the following weather conditions:
                </p>
                <ul className="list-none space-y-3">
                  <li className="flex items-center text-lg">
                    <span className="h-2 w-2 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 mr-3"></span>
                    Average daytime temperatures: 15-20°C (59-68°F)
                  </li>
                  <li className="flex items-center text-lg">
                    <span className="h-2 w-2 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 mr-3"></span>
                    Average nighttime temperatures: 3-10°C (37-50°F)
                  </li>
                  <li className="flex items-center text-lg">
                    <span className="h-2 w-2 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 mr-3"></span>
                    Generally dry with low humidity
                  </li>
                  <li className="flex items-center text-lg">
                    <span className="h-2 w-2 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 mr-3"></span>
                    Sunny days but cool mornings and evenings
                  </li>
                </ul>
                <p className="text-lg mt-4">
                  It is advisable to bring warm clothing, especially for
                  evenings and early mornings.
                </p>
              </motion.div>
            </motion.section>

            {/* Currency */}
            <motion.section
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.div
                className="flex items-center mb-6"
                variants={fadeInUp}
              >
                <div className="bg-gradient-to-br from-green-500 to-green-600 p-3 rounded-lg text-white mr-4">
                  <CreditCard className="h-6 w-6" />
                </div>
                <h2 className="text-2xl font-bold bg-gradient-to-r from-green-700 to-green-600 text-transparent bg-clip-text">
                  Currency
                </h2>
              </motion.div>

              <motion.div
                className="bg-gradient-to-br from-white to-green-50 h-full p-6 rounded-xl shadow-sm border border-green-100"
                variants={fadeInUp}
              >
                <p className="text-lg mb-4">
                  The currency of South Africa is the South African Rand (ZAR).
                  Foreign currency can be exchanged at banks, bureaux de change,
                  and many hotels.
                </p>
                <p className="text-lg">
                  Major credit cards (Visa, MasterCard) are widely accepted
                  throughout the country. ATMs are readily available in urban
                  areas.
                </p>
              </motion.div>
            </motion.section>
          </div>

          {/* Tourist Information */}
          <motion.section
            className="mb-8"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div className="flex items-center mb-6" variants={fadeInUp}>
              <div className="bg-gradient-to-br from-blue-500 to-indigo-600 p-3 rounded-lg text-white mr-4">
                <MapPin className="h-6 w-6" />
              </div>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-700 to-indigo-600 text-transparent bg-clip-text">
                Tourist Information
              </h2>
            </motion.div>

            <motion.div
              className="bg-gradient-to-br from-white to-blue-50 p-6 rounded-xl shadow-sm border border-blue-100"
              variants={fadeInUp}
            >
              <p className="text-lg mb-4">
                South Africa offers numerous tourist attractions. Some popular
                destinations in and around Johannesburg include:
              </p>
              <ul className="list-none space-y-3 mb-6">
                <li className="flex items-center text-lg">
                  <span className="h-2 w-2 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 mr-3"></span>
                  Apartheid Museum
                </li>
                <li className="flex items-center text-lg">
                  <span className="h-2 w-2 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 mr-3"></span>
                  Constitution Hill
                </li>
                <li className="flex items-center text-lg">
                  <span className="h-2 w-2 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 mr-3"></span>
                  Soweto Township Tours
                </li>
                <li className="flex items-center text-lg">
                  <span className="h-2 w-2 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 mr-3"></span>
                  Cradle of Humankind World Heritage Site
                </li>
                <li className="flex items-center text-lg">
                  <span className="h-2 w-2 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 mr-3"></span>
                  Lion & Safari Park
                </li>
              </ul>
              <p className="text-lg">
                For more information about tourism in South Africa, please visit
                <Link
                  href="https://www.southafrica.net/"
                  className="text-blue-600 hover:text-blue-800 mx-1 inline-flex items-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  South African Tourism
                  <ExternalLink className="h-3 w-3 ml-1" />
                </Link>
                .
              </p>
            </motion.div>
          </motion.section>
        </div>
      </div>
    </div>
  );
}
