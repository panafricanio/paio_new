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
import { Menu, X, ChevronDown } from "lucide-react";
import { CONFIG } from "@/config/constants";

const navItems = [
  { path: CONFIG.NAVIGATION.TASKS, label: "Tasks", priority: "high" },
  {
    path: CONFIG.NAVIGATION.RESULTS,
    label: "Results",
    external: true,
    priority: "high",
  },
  { path: CONFIG.NAVIGATION.REGULATIONS, label: "Regulations", priority: "high" },
  { path: CONFIG.NAVIGATION.RULES, label: "Rules", priority: "high" },
  {
    path: CONFIG.NAVIGATION.REGISTER,
    label: "Register",
    external: true,
    priority: "high",
  },
  { path: CONFIG.NAVIGATION.IMPORTANT_DATES, label: "Important Dates", priority: "high" },
  { path: CONFIG.NAVIGATION.COMMITTEE, label: "Committee", priority: "high" },
  { path: CONFIG.NAVIGATION.SPONSORS, label: "Sponsors", priority: "high" },
  { path: CONFIG.NAVIGATION.FAQS, label: "FAQs", priority: "high" },
  { path: CONFIG.NAVIGATION.RESOURCES, label: "Resources", priority: "low" },
];

// Filter items for primary navigation (high priority only)
const primaryNavItems = navItems.filter((item) => item.priority === "high");
const othersNavItems = navItems.filter(
  (item) => item.priority === "medium" || item.priority === "low"
);

// For medium screens, show only the most important items
const essentialNavItems = primaryNavItems.slice(0, 5); // Show first 5 items
const overflowNavItems = primaryNavItems.slice(5); // Remaining items go in existing "Others" dropdown

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [othersDropdownOpen, setOthersDropdownOpen] = useState(false);
  const [othersCollapsedMobile, setOthersCollapsedMobile] = useState(true);

  // Close dropdown when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (othersDropdownOpen) {
        setOthersDropdownOpen(false);
      }
    };

    if (othersDropdownOpen) {
      document.addEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [othersDropdownOpen]);
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

  // Handle click outside dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (!target.closest(".others-dropdown")) {
        setOthersDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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
        <Link href="/" className="flex items-center space-x-2 font-semibold">
          {/* <span className="sr-only">Pan African Informatics Olympiad</span> */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center"
          >
            <Image
              src="/images/logo.png"
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
        <div className="hidden md:flex items-center justify-between flex-1 ml-8">
          <nav className="flex-1 flex justify-center">
            <NavigationMenu>
              <NavigationMenuList className="space-x-1">
                {/* Large screens: show all items */}
                <div className="hidden lg:flex">
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
                </div>
                
                {/* Medium screens: show essential items + dropdown */}
                <div className="lg:hidden flex">
                  {essentialNavItems.map((item) => (
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
                  
                </div>
              </NavigationMenuList>
            </NavigationMenu>
          </nav>

          {/* Menu Icon Dropdown */}
          <div className="relative others-dropdown">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setOthersDropdownOpen(!othersDropdownOpen)}
              className="flex items-center justify-center p-2 bg-gray-100 hover:bg-gray-200 rounded-md border border-gray-300 transition-all"
              aria-label="More options"
            >
              <Menu className="h-4 w-4 text-gray-600" />
            </motion.button>

            {othersDropdownOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg border border-gray-100 py-1 z-50"
              >
                {/* Show overflow items on medium screens */}
                {overflowNavItems.length > 0 && (
                  <>
                    {overflowNavItems.map((item) => (
                      <Link
                        key={item.path}
                        href={item.path}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-amber-500/5 hover:to-green-500/10 hover:text-amber-700 transition-all"
                        onClick={() => setOthersDropdownOpen(false)}
                        target={item.external ? "_blank" : undefined}
                        rel={item.external ? "noopener noreferrer" : undefined}
                      >
                        {item.label}
                      </Link>
                    ))}
                    {othersNavItems.length > 0 && <div className="border-t border-gray-100 my-1"></div>}
                  </>
                )}
                
                {/* Show original low-priority items */}
                {othersNavItems.map((item) => (
                  <Link
                    key={item.path}
                    href={item.path}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-amber-500/5 hover:to-green-500/10 hover:text-amber-700 transition-all"
                    onClick={() => setOthersDropdownOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </motion.div>
            )}
          </div>
        </div>

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
              {primaryNavItems.map((item) => (
                <motion.li
                  key={item.path}
                  className="py-2 border-b border-gray-100"
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

              {/* Others Section in Mobile */}
              <motion.li className="py-2 border-b border-gray-100">
                <button
                  onClick={() =>
                    setOthersCollapsedMobile(!othersCollapsedMobile)
                  }
                  className="text-gray-800 hover:text-amber-700 font-medium flex items-center justify-between w-full"
                >
                  <span>Others</span>
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${
                      othersCollapsedMobile ? "" : "rotate-180"
                    }`}
                  />
                </button>
                {!othersCollapsedMobile && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className="mt-2 ml-4 space-y-2"
                  >
                    {othersNavItems.map((item) => (
                      <Link
                        key={item.path}
                        href={item.path}
                        className="block py-1 text-sm text-gray-600 hover:text-amber-700"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </motion.li>
            </ul>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Navbar;
