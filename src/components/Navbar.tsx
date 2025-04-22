"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
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
  {
    path: "https://docs.google.com/forms/d/e/1FAIpQLSe6S7qJlBiPr_HlunCuNPiXoGJsYfaV8oOkEhoFouxFTJ_arg/viewform",
    label: "Registration",
    external: true,
    priority: "high",
  },
  { path: "/important-dates", label: "Important Dates", priority: "high" },
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
          ? "bg-gradient-to-r from-white/95 to-blue-50/95 backdrop-blur-md shadow-sm"
          : "bg-gradient-to-r from-white to-blue-50/40"
      }`}
    >
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center space-x-2 font-semibold text-primary"
        >
          <span className="sr-only">Pan African Informatics Olympiad</span>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center"
          >
            {/* You could add a logo SVG here */}
            <span className="text-xl md:text-2xl font-bold bg-gradient-to-br from-primary via-blue-600 to-purple-600 bg-clip-text text-transparent">
              PAIO
            </span>
            <span className="hidden md:inline-block ml-2">
              Pan African Informatics Olympiad
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
                        className={`${navigationMenuTriggerStyle()} bg-transparent hover:bg-gradient-to-r hover:from-primary/5 hover:to-blue-500/10`}
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
                        className={`${navigationMenuTriggerStyle()} bg-transparent hover:bg-gradient-to-r hover:from-primary/5 hover:to-blue-500/10`}
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
          className="md:hidden flex items-center p-2 rounded-md hover:bg-blue-50"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="h-5 w-5 text-primary" />
          ) : (
            <Menu className="h-5 w-5 text-primary" />
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
          className="md:hidden bg-gradient-to-b from-white to-blue-50/50 border-t border-gray-100 shadow-sm"
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
                      className="text-gray-800 hover:text-primary font-medium flex items-center justify-between"
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
                      className="text-gray-800 hover:text-primary font-medium block w-full"
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
