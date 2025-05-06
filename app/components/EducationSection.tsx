import React from "react";

const EducationSection = () => {
  const education = [
    {
      institution: "Higher Institute of Technological Studies of Mahdia",
      degree: "Web Development",
      period: "2023 – Present",
      description:
        "Focused on full-stack web development, UI/UX design principles, and modern web technologies including React, Next.js, and Node.js.",
      achievements: [],
      courses: [
        "Frontend Development",
        "Backend Systems",
        "Web Design",
        "Database Management",
      ],
    },
    {
      institution: "Online Certifications",
      degree: "Various Tech Certifications",
      period: "2022 – Present",
      description:
        "Self-directed learning through platforms like Udemy, Coursera, and freeCodeCamp to expand knowledge in web technologies.",
      achievements: [],
      courses: [
        "React Master Class",
        "Modern JavaScript",
        "Responsive Web Design",
        "UI/UX Fundamentals",
      ],
    },
  ];

  return (
    <section id="education" className="py-20 bg-[#121418] text-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex items-center mb-12">
          <h2 className="text-4xl font-bold text-[#0ffbd2] mr-4">Education</h2>
          <div className="flex-grow h-px bg-[#0ffbd2]/30"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {education.map((item, index) => (
            <div
              key={index}
              className="bg-[#1e2029] rounded-lg p-6 border border-[#323544] hover:border-[#0ffbd2]/40 transition-all"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold">{item.institution}</h3>
                  <p className="text-[#0ffbd2]">{item.degree}</p>
                </div>
                <span className="inline-block px-3   py-1 bg-[#192133] text-xs rounded-full">
                  {item.period}
                </span>
              </div>

              <p className="text-gray-300 text-sm mb-6">{item.description}</p>

              {item.achievements.length > 0 && (
                <div className="mb-6">
                  <h4 className="text-lg font-medium mb-2">Achievements</h4>
                  <ul className="space-y-1">
                    {item.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-[#0ffbd2] mr-2">▹</span>
                        <span className="text-gray-300 text-sm">
                          {achievement}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div>
                <h4 className="text-lg font-medium mb-2">Key Courses</h4>
                <div className="flex flex-wrap gap-2">
                  {item.courses.map((course, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-[#192133] text-xs rounded"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
