import React from "react";

const ExperienceSection = () => {
  const experiences = [
    {
      company: "Sync",
      duration: "Jan 2025 – Present",
      role: "Web Developer",
      details: [
        "Built responsive web apps using React.js & Next.js",
        "Integrated MongoDB and PHP backend solutions",
        "Implemented SEO best practices resulting in 35% traffic increase",
      ],
    },
    {
      company: "Tunisie Telecom",
      duration: "Jan 2024 – Dec 2024",
      role: "Intern Developer",
      details: [
        "Developed and maintained company&apos;s internal tools",
        "Gained experience in telecom infrastructure and API integrations",
        "Collaborated with cross-functional teams to improve user experience",
      ],
    },
    {
      company: "ISET Mahdia",
      duration: "Jan 2023 – Dec 2023",
      role: "Student Developer",
      details: [
        "Worked on web development projects and gained hands-on frontend experience",
        "Participated in hackathons and coding competitions",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-[#121418] text-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex items-center mb-12">
          <h2 className="text-4xl font-bold text-[#0ffbd2] mr-4">Experience</h2>
          <div className="flex-grow h-px bg-[#0ffbd2]/30"></div>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-[#1e2029] rounded-lg p-6 border border-[#323544] hover:border-[#0ffbd2]/40 transition-all"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <h3 className="text-xl font-bold">{exp.company}</h3>
                <span className="inline-block px-3 py-1 bg-[#192133] text-[#0ffbd2] text-sm rounded-full">
                  {exp.duration}
                </span>
              </div>

              <p className="text-[#0ffbd2] mb-4">{exp.role}</p>

              <ul className="space-y-2">
                {exp.details.map((detail, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-[#0ffbd2] mr-2">▹</span>
                    <span className="text-gray-300 text-sm">{detail}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 pt-4 border-t border-[#323544] flex justify-end">
                <div className="flex space-x-3">
                  <span className="px-2 py-1 bg-[#192133] text-xs rounded">
                    React
                  </span>
                  <span className="px-2 py-1 bg-[#192133] text-xs rounded">
                    Next.js
                  </span>
                  <span className="px-2 py-1 bg-[#192133] text-xs rounded">
                    MongoDB
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
