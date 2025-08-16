"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Menu, X } from "lucide-react";

// Define which items should be moved to footer - removed Home as logo serves this purpose
const navItems = [
  // Home removed as logo will serve this purpose
  { path: "/regulations", label: "Regulations", priority: "high" },
  { path: "/competition-rules", label: "Competition Rules", priority: "high" },
  {
    path: "https://docs.google.com/forms/d/e/1FAIpQLSe6S7qJlBiPr_HlunCuNPiXoGJsYfaV8oOkEhoFouxFTJ_arg/viewform",
    label: "Registration",
    external: true,
    priority: "high",
  },
  { path: "/important-dates", label: "Important Dates", priority: "high" },
  { path: "/committee", label: "Committee", priority: "high" },
  { path: "/sponsors", label: "Sponsors", priority: "high" },
  { path: "/faqs", label: "FAQs", priority: "high" },
  { path: "/contact", label: "Contact", priority: "medium" },
  { path: "/media", label: "Media", priority: "low" },
];

// Filter items for primary navigation (high priority only)
const primaryNavItems = navItems.filter((item) => item.priority === "high");

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  return (
    <motion.header
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`w-full sticky top-0 z-50 transition-all duration-300 border-b ${
        scrolled
          ? "bg-gradient-to-r from-white/95 to-amber-50/95 backdrop-blur-md shadow-sm"
          : "bg-gradient-to-r from-white to-amber-50/40"
      }`}
    >
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center space-x-2 font-semibold"
        >
          <span className="sr-only">Pan African Informatics Olympiad</span>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center"
          >
            <Image
              src="/logo.png"
              alt="PAIO 2025 Logo"
              width={40}
              height={40}
              className="w-8 h-8 md:w-10 md:h-10"
            />
            <span className="text-xl md:text-2xl font-bold bg-gradient-to-br from-amber-700 via-orange-600 to-green-600 bg-clip-text text-transparent ml-2">
              PAIO
            </span>
            <span className="hidden lg:inline-block ml-2 text-amber-800 font-medium">
              2025
            </span>
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <NavigationMenu>
            <NavigationMenuList className="space-x-1">
              {primaryNavItems.map((item) => (
                <NavigationMenuItem key={item.path}>
                  {item.external ? (
                    <motion.div whileHover={{ scale: 1.05 }}>
                      <Link
                        href={item.path}
                        className={`${navigationMenuTriggerStyle()} bg-transparent hover:bg-gradient-to-r hover:from-amber-500/5 hover:to-green-500/10`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  ) : (
                    <motion.div whileHover={{ scale: 1.05 }}>
                      <Link
                        href={item.path}
                        className={`${navigationMenuTriggerStyle()} bg-transparent hover:bg-gradient-to-r hover:from-amber-500/5 hover:to-green-500/10`}
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </nav>

        {/* Mobile Menu Button */}
        <motion.button
          whileTap={{ scale: 0.95 }}
          className="md:hidden flex items-center p-2 rounded-md hover:bg-amber-50"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="h-5 w-5 text-amber-700" />
          ) : (
            <Menu className="h-5 w-5 text-amber-700" />
          )}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-gradient-to-b from-white to-amber-50/50 border-t border-gray-100 shadow-sm"
        >
          <div className="container mx-auto py-3 px-4">
            <ul className="space-y-3">
              {navItems.map((item) => (
                <motion.li
                  key={item.path}
                  className="py-2 border-b border-gray-100 last:border-0"
                  whileTap={{ scale: 0.98 }}
                >
                  {item.external ? (
                    <Link
                      href={item.path}
                      className="text-gray-800 hover:text-amber-700 font-medium flex items-center justify-between"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <span>{item.label}</span>
                      <span className="text-xs text-gray-500">↗</span>
                    </Link>
                  ) : (
                    <Link
                      href={item.path}
                      className="text-gray-800 hover:text-amber-700 font-medium block w-full"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  )}
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Navbar;
