"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

function FloatingMenu() {
  const [activeSection, setActiveSection] = useState("hero");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const menuItems = [
    {
      id: "hero",
      href: "#",
      icon: "M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z M9 22V12h6v10",
      label: "Home",
    },
    {
      id: "about",
      href: "#about",
      icon: "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2 M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z",
      label: "About",
    },
    {
      id: "experience",
      href: "#experience",
      icon: "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5",
      label: "Experience",
    },
    {
      id: "projects",
      href: "#projects",
      icon: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z M14 2v6h6 M16 13H8 M16 17H8 M10 9H8",
      label: "Projects",
    },
    {
      id: "education",
      href: "#education",
      icon: "M8 4l8 0c1.1 0 2 .9 2 2l0 4L8 10c-1.1 0-2-.9-2-2l0-2c0-1.1.9-2 2-2z M6 14l12 0 M8 18l8 0",
      label: "Education",
    },
    {
      id: "skills",
      href: "#skills",
      icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
      label: "Skills",
    },
  ];

  const containerVariants = {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1],
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { x: 20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed right-6 top-1/2 w-16 transform -translate-y-1/2 z-50 hidden lg:block"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <motion.div className="glass rounded-2xl p-4 space-y-4">
            {menuItems.map((item, index) => (
              <motion.a
                key={item.id}
                href={item.href}
                className={`group relative flex items-center justify-center h-12 w-12 rounded-xl transition-all duration-300 ${
                  activeSection === item.id
                    ? "bg-gradient-to-r from-[#00d9ff] to-[#0ffbd2] text-[#0a0b0f] shadow-lg shadow-[#00d9ff]/25"
                    : "hover:bg-[#00d9ff]/20 text-[#8892b0] hover:text-[#00d9ff]"
                }`}
                title={item.label}
                variants={itemVariants}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveSection(item.id)}
              >
                {/* Tooltip */}
                <motion.span
                  className="absolute right-full mr-4 px-3 py-2 rounded-lg bg-[#1a1d29] text-white text-sm whitespace-nowrap border border-[#303446] shadow-lg opacity-0 -translate-x-2 pointer-events-none"
                  initial={{ opacity: 0, x: -10 }}
                  whileHover={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2 }}
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(26, 29, 41, 0.95), rgba(37, 40, 55, 0.95))",
                    backdropFilter: "blur(20px)",
                  }}
                >
                  {item.label}
                  <div className="absolute top-1/2 left-full transform -translate-y-1/2 border-4 border-transparent border-l-[#1a1d29]"></div>
                </motion.span>

                {/* Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 transition-all duration-300"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d={item.icon} />
                </svg>

                {/* Active indicator */}
                {activeSection === item.id && (
                  <motion.div
                    className="absolute -right-1 top-1/2 transform -translate-y-1/2 w-1 h-6 bg-gradient-to-b from-[#00d9ff] to-[#0ffbd2] rounded-full"
                    layoutId="activeIndicator"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </motion.a>
            ))}

            {/* Progress indicator */}
            <motion.div
              className="w-full h-1 bg-[#252837] rounded-full overflow-hidden mt-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <motion.div
                className="h-full bg-gradient-to-r from-[#00d9ff] to-[#0ffbd2] rounded-full"
                initial={{ width: "0%" }}
                animate={{
                  width: `${
                    ((menuItems.findIndex((item) => item.id === activeSection) +
                      1) /
                      menuItems.length) *
                    100
                  }%`,
                }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default FloatingMenu;
