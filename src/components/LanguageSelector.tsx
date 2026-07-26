"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Globe, Check } from "lucide-react";

type Language = {
  code: string;
  name: string;
  flag: string;
};

const languages: Language[] = [
  { code: "en", name: "English", flag: "🇬🇧" },
  { code: "fr", name: "Français", flag: "🇫🇷" },
  { code: "pt", name: "Português", flag: "🇵🇹" },
  { code: "ar", name: "العربية", flag: "🇪🇬" },
  { code: "sw", name: "Kiswahili", flag: "🇰🇪" },
];

export default function LanguageSelector() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleLanguageSelect = (language: Language) => {
    setSelectedLanguage(language);
    setIsOpen(false);
    // In a real implementation, this would change the language of the site
  };

  return (
    <motion.div
      className="fixed bottom-6 right-6 z-50"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative" ref={dropdownRef}>
        <motion.button
          className="flex items-center space-x-2 bg-white border border-amber-200/50 px-4 py-2.5 rounded-full shadow-lg hover:shadow-xl transition-all"
          onClick={toggleDropdown}
          aria-label={`Language selected: ${selectedLanguage.name}`}
          whileHover={{
            scale: 1.02,
            boxShadow: "0 10px 25px -5px rgba(217, 119, 6, 0.2)",
          }}
          whileTap={{ scale: 0.98 }}
        >
          <Globe className="h-4 w-4 text-amber-600 mr-2" />
          <span className="flex items-center">
            <span className="mr-1">{selectedLanguage.flag}</span>
            <span className="font-medium text-sm text-amber-800">
              {selectedLanguage.name}
            </span>
          </span>
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="ml-1 text-amber-500"
            >
              <path
                d="M2.5 4.5L6 8L9.5 4.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.div>
        </motion.button>

        <AnimatePresence>
          {isOpen && (
            <motion.ul
              className="absolute bottom-full mb-2 w-[200px] right-0 bg-white border border-amber-200/50 rounded-lg shadow-lg overflow-hidden"
              role="listbox"
              initial={{ opacity: 0, y: 10, height: 0 }}
              animate={{ opacity: 1, y: 0, height: "auto" }}
              exit={{ opacity: 0, y: 10, height: 0 }}
              transition={{ duration: 0.2 }}
            >
              {languages.map((language, index) => (
                <motion.li
                  key={language.code}
                  className={`px-4 py-3 cursor-pointer hover:bg-amber-50/80 flex items-center justify-between`}
                  onClick={() => handleLanguageSelect(language)}
                  role="option"
                  aria-selected={selectedLanguage.code === language.code}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{
                    backgroundColor: "rgba(255, 251, 235, 1)",
                  }}
                >
                  <span className="flex items-center">
                    <span className="mr-3 text-lg">{language.flag}</span>
                    <span className="text-sm text-gray-800">
                      {language.name}
                    </span>
                  </span>
                  {selectedLanguage.code === language.code && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 17,
                      }}
                    >
                      <Check size={16} className="text-amber-600" />
                    </motion.div>
                  )}
                </motion.li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
