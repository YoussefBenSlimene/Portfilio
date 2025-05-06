"use client";
import React, { useState } from "react";
import ProjectShowcase from "./ProjectShowcase";
import { motion } from "framer-motion";
import Image from "next/image";

interface Project {
  title: string;
  image: string;
  description: string;
  technologies: string[];
  link: string;
  featured: boolean;
  gallery: string[];
}

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects = [
    {
      title: "Replay Dreams AI",
      image: "/project1_1.png",
      description: `An AI-powered platform that transforms your dreams and thoughts into stunning visual stories. Currently in active development, this platform combines React, Next.js, and advanced AI technologies to create personalized dream visualizations with custom art styles and multi-language support.
This is still very much a work in progress, and I&apos;m continuously adding new features and refining the user experience. Looking forward to sharing more updates as the project evolves!`,
      technologies: ["React", "Next.js", "AI", "TailwindCSS"],
      link: "https://replaydreams.ai",
      featured: true,
      gallery: ["/project1_1.png", "/project1_2.png", "/replaydreamsai.jpeg"],
    },
    {
      title: "EduQuest",
      image: "/project2_logo.jpg",
      description:
        "A mobile application built with Flutter that gamifies the academic experience. Students earn rewards for completing missions assigned by professors, encouraging engagement and participation. Features include real-time mission tracking, achievement badges, and a reward marketplace.",
      technologies: ["Flutter", "Dart", "Firebase", "Mobile Development"],
      link: "https://github.com/youssefbenslimene/academireward",
      featured: false,
      gallery: ["/project2_logo.jpg", "/st.png", "/profile_project2.png"],
    },
  ];

  const openProject = (project: any) => {
    setSelectedProject(project);
  };

  const closeProject = () => {
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="py-20 bg-[#121418] text-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex items-center mb-12">
          <h2 className="text-4xl font-bold text-[#0ffbd2] mr-4">Projects</h2>
          <div className="flex-grow h-px bg-[#0ffbd2]/30"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className={`bg-[#1e2029] rounded-lg overflow-hidden border border-[#323544] hover:border-[#0ffbd2]/40 transition-all flex flex-col ${
                project.featured ? "md:col-span-2 md:row-span-2" : ""
              }`}
              whileHover={{
                y: -5,
                boxShadow: "0 10px 30px -10px rgba(15, 251, 210, 0.15)",
              }}
              transition={{ duration: 0.3 }}
            >
              <div className="h-48 overflow-hidden relative">
                <Image
                  src={project.image}
                  alt={project.title}
                  className="object-cover transition-transform duration-700 hover:scale-110"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1e2029] to-transparent opacity-60"></div>
                {project.featured && (
                  <div className="absolute top-4 right-4 bg-[#0ffbd2] text-[#121418] text-xs px-3 py-1 rounded-full">
                    Featured
                  </div>
                )}
              </div>

              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-6 flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-[#192133] text-xs rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => openProject(project)}
                  className="w-full py-2 border border-[#0ffbd2] text-[#0ffbd2] rounded text-center hover:bg-[#0ffbd2]/10 transition-colors"
                >
                  View Project
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://github.com/youssefbenslimene"
            className="inline-flex items-center text-[#0ffbd2] hover:underline"
          >
            <span>View More on GitHub</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 ml-2"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>

      {selectedProject && (
        <ProjectShowcase
          name={selectedProject.title}
          description={selectedProject.description}
          imageUrls={selectedProject.gallery}
          link={selectedProject.link}
          technologies={selectedProject.technologies}
          isOpen={!!selectedProject}
          onClose={closeProject}
        />
      )}
    </section>
  );
};

export default ProjectsSection;
