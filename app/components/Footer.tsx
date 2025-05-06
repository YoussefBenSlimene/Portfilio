import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-10 bg-[#121418] text-white border-t border-[#323544]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0 flex items-center">
            <span className="text-[#0ffbd2] text-xl mr-2">&lt;/&gt;</span>
            <span className="font-medium">YoussefBenSlimene</span>
          </div>

          <div className="flex flex-wrap justify-center gap-6 md:gap-8">
            <a
              href="#"
              className="text-gray-400 hover:text-[#0ffbd2] transition-colors"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-gray-400 hover:text-[#0ffbd2] transition-colors"
            >
              About
            </a>
            <a
              href="#experience"
              className="text-gray-400 hover:text-[#0ffbd2] transition-colors"
            >
              Experience
            </a>
            <a
              href="#projects"
              className="text-gray-400 hover:text-[#0ffbd2] transition-colors"
            >
              Projects
            </a>
            <a
              href="#education"
              className="text-gray-400 hover:text-[#0ffbd2] transition-colors"
            >
              Education
            </a>
          </div>
        </div>

        <div className="border-t border-[#323544] pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} Youssef Ben Slimene. All rights reserved.
          </p>

          <div className="flex gap-4">
            <a
              href="https://www.linkedin.com/in/youssef-ben-slimen-35a545298/ "
              className="p-2 bg-[#1e2029] rounded-full text-gray-400 hover:text-[#0ffbd2] transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
            <a
              href="https://github.com/YoussefBenSlimene"
              className="p-2 bg-[#1e2029] rounded-full text-gray-400 hover:text-[#0ffbd2] transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </a>
            <a
              href="https://www.instagram.com/yukito__24/"
              className="p-2 bg-[#1e2029] rounded-full text-gray-400 hover:text-[#0ffbd2] transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
