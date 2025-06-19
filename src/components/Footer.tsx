"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Mail,
  MapPin,
  ExternalLink,
  Twitter,
  Facebook,
  Instagram,
} from "lucide-react";

// Pull in the same navigation items defined in Navbar
// This ensures consistency between components
type NavItemType = {
  path: string;
  label: string;
  priority: string;
  external?: boolean;
};

const navItems: NavItemType[] = [
  // Home removed as logo will serve this purpose
  { path: "/regulations", label: "Regulations", priority: "high" },
  {
    path: "https://docs.google.com/forms/d/e/1FAIpQLSe6S7qJlBiPr_HlunCuNPiXoGJsYfaV8oOkEhoFouxFTJ_arg/viewform",
    label: "Registration",
    external: true,
    priority: "high",
  },
  { path: "/important-dates", label: "Important Dates", priority: "high" },
  { path: "/committee", label: "Committee", priority: "high" },
  { path: "/faqs", label: "FAQs", priority: "medium" },
  { path: "/sponsors", label: "Sponsors", priority: "medium" },
  { path: "/contact", label: "Contact", priority: "medium" },
  { path: "/media", label: "Media", priority: "low" },
];

// Filter items based on priority levels
const mediumPriorityNavItems = navItems.filter(
  (item) => item.priority === "medium"
);
const lowPriorityNavItems = navItems.filter((item) => item.priority === "low");
const footerNavItems = [...mediumPriorityNavItems, ...lowPriorityNavItems];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <footer className="bg-gradient-to-br from-gray-50 to-blue-50 pt-12 pb-6 border-t border-gray-200">
      <div className="container mx-auto px-4">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* About Section */}
          <motion.div variants={childVariants} className="space-y-4">
            <h3 className="text-lg font-semibold bg-gradient-to-br from-blue-700 to-primary bg-clip-text text-transparent">
              About PAIO
            </h3>
            <p className="text-gray-600 text-sm">
              The Pan African Informatics Olympiad is an informatics
              competition that brings together talented young programmers from
              across the African continent.
            </p>
            <div className="flex space-x-4 pt-2">
              <motion.a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="text-gray-600 hover:text-primary"
              >
                <Twitter size={18} />
                <span className="sr-only">Twitter</span>
              </motion.a>
              <motion.a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="text-gray-600 hover:text-primary"
              >
                <Facebook size={18} />
                <span className="sr-only">Facebook</span>
              </motion.a>
              <motion.a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="text-gray-600 hover:text-primary"
              >
                <Instagram size={18} />
                <span className="sr-only">Instagram</span>
              </motion.a>
            </div>
          </motion.div>

          {/* Quick Links Section */}
          <motion.div variants={childVariants} className="space-y-4">
            <h3 className="text-lg font-semibold bg-gradient-to-br from-blue-700 to-primary bg-clip-text text-transparent">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {footerNavItems.map((item) => (
                <li key={item.path}>
                  {item.external ? (
                    <Link
                      href={item.path}
                      className="text-gray-600 hover:text-primary text-sm flex items-center gap-1 group"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.label}
                      <ExternalLink
                        size={12}
                        className="opacity-0 group-hover:opacity-100 transition-opacity"
                      />
                    </Link>
                  ) : (
                    <Link
                      href={item.path}
                      className="text-gray-600 hover:text-primary text-sm"
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Information */}
          <motion.div variants={childVariants} className="space-y-4">
            <h3 className="text-lg font-semibold bg-gradient-to-br from-blue-700 to-primary bg-clip-text text-transparent">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Mail size={16} className="text-gray-400 mt-1 flex-shrink-0" />
                <a
                  href="mailto:joel@pafricanoi.com"
                  className="text-gray-600 hover:text-primary text-sm"
                >
                  joel@pafricanoi.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin
                  size={16}
                  className="text-gray-400 mt-1 flex-shrink-0"
                />
                <span className="text-gray-600 text-sm">
                  Kigali, Rwanda
                </span>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Copyright Bar */}
        <motion.div
          className="mt-12 pt-6 border-t border-gray-200 flex flex-col md:flex-row justify-center text-center items-center text-sm text-gray-500"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <p>
            © {currentYear}{" "}
            <Link href="/" className="hover:text-primary">
              Pan African Informatics Olympiad
            </Link>{" "}
            • All Rights Reserved
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
