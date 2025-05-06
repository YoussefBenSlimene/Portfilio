"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ImageCarousel from "./ImageCarousel";

interface ProjectShowcaseProps {
  name: string;
  description: string;
  imageUrls: string[];
  link: string;
  technologies: string[];
  isOpen: boolean;
  onClose: () => void;
}

const ProjectShowcase = ({
  name,
  description,
  imageUrls,
  link,
  technologies,
  isOpen,
  onClose,
}: ProjectShowcaseProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % imageUrls.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? imageUrls.length - 1 : prev - 1
    );
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#121418]/80 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="relative w-full max-w-4xl bg-[#1e2029] rounded-lg overflow-hidden border border-[#32443f] shadow-2xl max-h-[90vh] flex flex-col"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute z-50 top-4 right-4  p-2 rounded-full bg-[#1e2029]/80 text-white hover:bg-[#0ffbd2]/20 transition-colors"
              aria-label="Close project details"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>

            <ImageCarousel imageUrls={imageUrls} name={name} />

            {/* Content */}
            <div className="p-6 overflow-y-auto">
              <h2 className="text-2xl font-bold text-white mb-3">{name}</h2>

              <div className="flex flex-wrap gap-2 mb-5">
                {technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 bg-[#192133] text-xs rounded text-[#0ffbd2]"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="text-gray-400 mb-6">
                <p className="leading-relaxed">{description}</p>
              </div>

              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block py-2 px-6 border border-[#0ffbd2] text-[#0ffbd2] rounded text-center hover:bg-[#0ffbd2]/10 transition-colors"
              >
                Visit Project
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-2 inline"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectShowcase;
