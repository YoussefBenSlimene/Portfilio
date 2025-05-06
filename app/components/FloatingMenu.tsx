import React from "react";

function FloatingMenu() {
  return (
    <>
      {/* Floating Side Navigation */}
      <div className="fixed right-0 top-1/2 w-[50px] transform -translate-y-1/2 z-40 hidden md:block">
        <div className="flex flex-col items-center space-y-6 py-6 px-3 bg-[#1e2029]/80 backdrop-blur-md rounded-l-lg">
          <a
            href="#"
            className="group relative flex items-center justify-center h-9 w-9 rounded-full hover:bg-[#0ffbd2]/20 transition-all"
            title="Home"
          >
            <span className="absolute right-full mr-4 p-1 px-2 rounded-md bg-[#1e2029] text-white text-sm whitespace-nowrap opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0">
              Home
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-[#0ffbd2]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
              <polyline points="9 22 9 12 15 12 15 22"></polyline>
            </svg>
          </a>

          <a
            href="#about"
            className="group relative flex items-center justify-center h-9 w-9 rounded-full hover:bg-[#0ffbd2]/20 transition-all"
            title="About"
          >
            <span className="absolute right-full mr-4 p-1 px-2 rounded-md bg-[#1e2029] text-white text-sm whitespace-nowrap opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0">
              About
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-[#0ffbd2]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </a>

          <a
            href="#experience"
            className="group relative flex items-center justify-center h-9 w-9 rounded-full hover:bg-[#0ffbd2]/20 transition-all"
            title="Experience"
          >
            <span className="absolute right-full mr-4 p-1 px-2 rounded-md bg-[#1e2029] text-white text-sm whitespace-nowrap opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0">
              Experience
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-[#0ffbd2]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
              <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
            </svg>
          </a>

          <a
            href="#projects"
            className="group relative flex items-center justify-center h-9 w-9 rounded-full hover:bg-[#0ffbd2]/20 transition-all"
            title="Projects"
          >
            <span className="absolute right-full mr-4 p-1 px-2 rounded-md bg-[#1e2029] text-white text-sm whitespace-nowrap opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0">
              Projects
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-[#0ffbd2]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
              <polyline points="2 17 12 22 22 17"></polyline>
              <polyline points="2 12 12 17 22 12"></polyline>
            </svg>
          </a>

          <a
            href="#education"
            className="group relative flex items-center justify-center h-9 w-9 rounded-full hover:bg-[#0ffbd2]/20 transition-all"
            title="Education"
          >
            <span className="absolute right-full mr-4 p-1 px-2 rounded-md bg-[#1e2029] text-white text-sm whitespace-nowrap opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0">
              Education
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-[#0ffbd2]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
              <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
            </svg>
          </a>

          <a
            href="#skills"
            className="group relative flex items-center justify-center h-9 w-9 rounded-full hover:bg-[#0ffbd2]/20 transition-all"
            title="Skills"
          >
            <span className="absolute right-full mr-4 p-1 px-2 rounded-md bg-[#1e2029] text-white text-sm whitespace-nowrap opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0">
              Skills
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-[#0ffbd2]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
            </svg>
          </a>

          <a
            href="#blogs"
            className="group relative flex items-center justify-center h-9 w-9 rounded-full hover:bg-[#0ffbd2]/20 transition-all"
            title="Blogs"
          >
            <span className="absolute right-full mr-4 p-1 px-2 rounded-md bg-[#1e2029] text-white text-sm whitespace-nowrap opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0">
              Blogs
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-[#0ffbd2]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
            </svg>
          </a>
        </div>
      </div>
    </>
  );
}

export default FloatingMenu;
