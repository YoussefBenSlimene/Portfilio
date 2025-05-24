"use client";
import Image from "next/image";
import React, { useEffect, useState, useMemo } from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  const [text, setText] = useState("");
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [mounted, setMounted] = useState(false);

  const phrases = useMemo(
    () => [
      "I design and code beautifully simple things.",
      "I create amazing web experiences.",
      "I build modern and responsive applications.",
      "I love what I do and do what I love.",
      "I turn ideas into digital reality.",
      "I craft pixel-perfect user interfaces.",
    ],
    []
  );

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const currentPhrase = phrases[currentPhraseIndex];
    const typingSpeed = isDeleting ? 30 : 80;
    const pauseTime = isDeleting ? 500 : 2000;

    const timer = setTimeout(() => {
      if (!isDeleting && text === currentPhrase) {
        // Finished typing, start deleting after pause
        setTimeout(() => setIsDeleting(true), pauseTime);
      } else if (isDeleting && text === "") {
        // Finished deleting, move to next phrase
        setIsDeleting(false);
        setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
      } else {
        // Continue typing or deleting
        setText((prev) => {
          if (isDeleting) {
            return currentPhrase.substring(0, prev.length - 1);
          } else {
            return currentPhrase.substring(0, prev.length + 1);
          }
        });
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [text, currentPhraseIndex, isDeleting, phrases]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  return (
    <section className="min-h-screen relative flex items-center justify-center bg-gradient-to-br from-[#0a0b0f] via-[#121418] to-[#1a1d29] text-white px-6 md:px-12 py-20 overflow-hidden">
      {" "}
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {mounted &&
          Array.from({ length: 50 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-[#00d9ff] rounded-full opacity-60"
              initial={{
                x:
                  typeof window !== "undefined"
                    ? Math.random() * window.innerWidth
                    : Math.random() * 1200,
                y:
                  typeof window !== "undefined"
                    ? window.innerHeight + 100
                    : 900,
              }}
              animate={{
                y: -100,
                x:
                  typeof window !== "undefined"
                    ? Math.random() * window.innerWidth
                    : Math.random() * 1200,
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                ease: "linear",
                delay: Math.random() * 10,
              }}
            />
          ))}
      </div>
      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-[#00d9ff]/20 to-[#0ffbd2]/20 rounded-full filter blur-3xl animate-pulse"></div>
      <div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-[#0ffbd2]/20 to-[#00d9ff]/20 rounded-full filter blur-3xl animate-pulse"
        style={{ animationDelay: "2s" }}
      ></div>
      <motion.div
        className="container mx-auto relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <motion.div
            className="w-full lg:w-1/2 flex flex-col"
            variants={itemVariants}
          >
            <motion.div
              className="glass rounded-2xl p-8 mb-8 flex items-center group hover:scale-105 transition-transform duration-300"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="w-24 h-24 bg-gradient-to-br from-[#252837] to-[#192133] rounded-2xl overflow-hidden mr-6 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#00d9ff]/20 to-[#0ffbd2]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Image
                  src="/me.png"
                  alt="Profile"
                  className="w-full h-full object-cover relative z-10"
                  width={96}
                  height={96}
                />
              </div>
              <div>
                <p className="text-[#8892b0] text-lg">Hey there! 👋</p>
                <p className="text-xl">
                  I&apos;m{" "}
                  <span className="gradient-text font-bold text-2xl">
                    Youssef
                  </span>
                  ,
                </p>
                <p className="font-semibold text-xl mb-4">
                  Full-Stack Developer
                </p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {["NEXT", "REACT", "HTML", "CSS", "JS", "FLUTTER"].map(
                    (tech, index) => (
                      <motion.span
                        key={tech}
                        className="px-3 py-1.5 bg-gradient-to-r from-[#252837] to-[#192133] text-[#00d9ff] text-sm rounded-lg border border-[#00d9ff]/30 hover:border-[#00d9ff] transition-all duration-300 cursor-default"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1 + index * 0.1 }}
                        whileHover={{ scale: 1.1, y: -2 }}
                      >
                        {tech}
                      </motion.span>
                    )
                  )}
                </div>
              </div>
            </motion.div>{" "}
            <motion.div className="mb-8" variants={itemVariants}>
              <div className="relative">
                <p className="text-[#8892b0] text-lg leading-relaxed min-h-[2.5rem]">
                  <span className="inline-block">
                    {text}
                    <motion.span
                      className="inline-block w-0.5 h-6 ml-1 bg-gradient-to-b from-[#00d9ff] to-[#0ffbd2]"
                      animate={{
                        opacity: [1, 1, 0, 0],
                        scaleY: [1, 1, 1, 1],
                      }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                  </span>
                </p>
              </div>
            </motion.div>
            <motion.div variants={itemVariants}>
              <a href="mailto:youssef2004bs@gmail.com">
                <motion.button
                  className="btn-outline group relative overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Let&apos;s Talk
                    <motion.svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      initial={{ x: 0 }}
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </motion.svg>
                  </span>
                </motion.button>
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            className="w-full lg:w-1/2 relative"
            variants={itemVariants}
          >
            <motion.div
              className="w-full aspect-square relative glass overflow-hidden rounded-3xl flex items-center justify-center group"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {/* Floating code background */}
              <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                <motion.div
                  className="text-[#00d9ff] font-mono text-opacity-10 text-8xl select-none"
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  &lt;/&gt;
                </motion.div>
              </div>

              <div className="z-10 text-center">
                <motion.h1
                  className="text-4xl md:text-6xl font-bold mb-6 gradient-text"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                >
                  Developer
                </motion.h1>

                <motion.div
                  className="grid grid-cols-3 gap-6 mt-8"
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                >
                  {[
                    { number: "3+", label: "Years Experience" },
                    { number: "6+", label: "Projects Completed" },
                    { number: "4+", label: "Satisfied Clients" },
                  ].map((stat, index) => (
                    <motion.div
                      key={index}
                      className="text-center group cursor-default"
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <motion.h3
                        className="gradient-text text-2xl md:text-3xl font-bold mb-1"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{
                          delay: 1.2 + index * 0.2,
                          type: "spring",
                          stiffness: 500,
                        }}
                      >
                        {stat.number}
                      </motion.h3>
                      <p className="text-xs md:text-sm text-[#8892b0] group-hover:text-[#00d9ff] transition-colors duration-300">
                        {stat.label}
                      </p>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
      {/* Decorative code background - enhanced */}
      <div className="absolute inset-0 overflow-hidden opacity-5 select-none pointer-events-none">
        <div className="text-xs md:text-sm font-mono">
          {Array.from({ length: 12 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              initial={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: 0,
              }}
              animate={{
                opacity: [0, 0.3, 0],
                y: [-20, 0, 20],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                delay: i * 0.5,
                ease: "easeInOut",
              }}
            >
              <span style={{ color: "#00d9ff" }}>{`const `}</span>
              <span style={{ color: "#f5f5f5" }}>{`developer = `}</span>
              <br />
              <span
                style={{ color: "#f5f5f5", marginLeft: "10px" }}
              >{`{ `}</span>
              <br />
              <span
                style={{ color: "#0ffbd2", marginLeft: "20px" }}
              >{`passion: `}</span>
              <span style={{ color: "#ff8a65" }}>{`"coding"`}</span>
              <span style={{ color: "#f5f5f5" }}>{`,`}</span>
              <br />
              <span
                style={{ color: "#0ffbd2", marginLeft: "20px" }}
              >{`goal: `}</span>
              <span style={{ color: "#ff8a65" }}>{`"innovation"`}</span>
              <br />
              <span
                style={{ color: "#f5f5f5", marginLeft: "10px" }}
              >{`};`}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
