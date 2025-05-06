import React from "react";

const SkillsSection = () => {
  const skills = [
    {
      name: "HTML",
      icon: (
        <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#302c2c] text-[#e44d27]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M5.08 1.5h13.84l-1.26 14.11-5.67 1.89-5.66-1.89L5.08 1.5zm11.04 3.84H7.88l.54 6.05h5.55l-.19 2.13-1.78.6-1.78-.6-.11-1.27h-1.6l.22 2.48 3.28 1.13 3.28-1.13.44-4.96h-5.88l-.18-2.01h6.24l.2-2.23z"></path>
          </svg>
        </div>
      ),
    },
    {
      name: "CSS",
      icon: (
        <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#302c2c] text-[#304cdc]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M5.08 1.5h13.84l-1.26 14.11-5.67 1.89-5.66-1.89L5.08 1.5zm11.04 3.84H7.88l.54 6.05h5.55l-.19 2.13-1.78.6-1.78-.6-.11-1.27h-1.6l.22 2.48 3.28 1.13 3.28-1.13.44-4.96h-5.88l-.18-2.01h6.24l.2-2.23z"></path>
          </svg>
        </div>
      ),
    },
    {
      name: "JavaScript",
      icon: (
        <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#302c2c] text-[#f7df1e]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M3 3h18v18H3V3zm16.525 13.707c-.131-.821-.666-1.511-2.252-2.155-.552-.259-1.165-.438-1.349-.854-.068-.248-.078-.382-.034-.529.113-.484.687-.629 1.137-.495.293.09.563.315.732.676.775-.507.775-.507 1.316-.844-.203-.314-.304-.451-.439-.586-.473-.528-1.103-.798-2.126-.775l-.528.067c-.507.124-.991.395-1.283.754-.855.968-.608 2.655.427 3.354 1.023.765 2.521.933 2.712 1.653.18.878-.652 1.159-1.475 1.058-.607-.136-.945-.439-1.316-1.002l-1.372.788c.157.359.337.517.607.832 1.305 1.316 4.568 1.249 5.153-.754.021-.067.18-.528.056-1.237l.034.049zm-6.737-5.434h-1.686c0 1.453-.007 2.898-.007 4.354 0 .924.047 1.772-.104 2.033-.247.517-.886.451-1.175.359-.297-.146-.448-.349-.623-.641-.047-.078-.082-.146-.095-.146l-1.368.844c.229.473.563.879.994 1.137.641.383 1.502.507 2.404.305.588-.17 1.095-.519 1.358-1.059.384-.697.302-1.553.299-2.509.008-1.541 0-3.083 0-4.635l.003-.042z"></path>
          </svg>
        </div>
      ),
    },
    {
      name: "React",
      icon: (
        <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#302c2c] text-[#61dafb]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 10.11c1.03 0 1.87.84 1.87 1.89 0 1.04-.84 1.87-1.87 1.87s-1.87-.83-1.87-1.87c0-1.05.84-1.89 1.87-1.89M7.37 20c.63.38 2.01-.2 3.6-1.7-.52-.59-1.03-1.23-1.51-1.9a22.7 22.7 0 01-2.4-.36c-.51 2.14-.32 3.61.31 3.96m.71-5.74l-.29-.51c-.11.29-.22.58-.29.86.27.06.57.11.88.16l-.3-.51m6.54-.76l.81-1.5-.81-1.5c-.3-.53-.62-1-.91-1.47C13.17 9 12.6 9 12 9s-1.17 0-1.71.03c-.29.47-.61.94-.91 1.47L8.57 12l.81 1.5c.3.53.62 1 .91 1.47.54.03 1.11.03 1.71.03s1.17 0 1.71-.03c.29-.47.61-.94.91-1.47M12 6.78c-.19.22-.39.45-.59.72h1.18c-.2-.27-.4-.5-.59-.72m0 10.44c.19-.22.39-.45.59-.72h-1.18c.2.27.4.5.59.72M16.62 4c-.62-.38-2 .2-3.59 1.7.52.59 1.03 1.23 1.51 1.9.82.08 1.63.2 2.4.36.51-2.14.32-3.61-.32-3.96m-.7 5.74l.29.51c.11-.29.22-.58.29-.86-.27-.06-.57-.11-.88-.16l.3.51m1.45-7.05c1.47.84 1.63 3.05 1.01 5.63 2.54.75 4.37 1.99 4.37 3.68 0 1.69-1.83 2.93-4.37 3.68.62 2.58.46 4.79-1.01 5.63-1.46.84-3.45-.12-5.37-1.95-1.92 1.83-3.91 2.79-5.38 1.95-1.46-.84-1.62-3.05-1-5.63-2.54-.75-4.37-1.99-4.37-3.68 0-1.69 1.83-2.93 4.37-3.68-.62-2.58-.46-4.79 1-5.63 1.47-.84 3.46.12 5.38 1.95 1.92-1.83 3.91-2.79 5.37-1.95M17.08 12c.34.75.64 1.5.89 2.26 2.1-.63 3.28-1.53 3.28-2.26 0-.73-1.18-1.63-3.28-2.26-.25.76-.55 1.51-.89 2.26M6.92 12c-.34-.75-.64-1.5-.89-2.26-2.1.63-3.28 1.53-3.28 2.26 0 .73 1.18 1.63 3.28 2.26.25-.76.55-1.51.89-2.26m9 2.26l-.3.51c.31-.05.61-.1.88-.16-.07-.28-.18-.57-.29-.86l-.29.51m-2.89 4.04c1.59 1.5 2.97 2.08 3.59 1.7.64-.35.83-1.82.32-3.96-.77.16-1.58.28-2.4.36-.48.67-.99 1.31-1.51 1.9M8.08 9.74l.3-.51c-.31.05-.61.1-.88.16.07.28.18.57.29.86l.29-.51m2.89-4.04C9.38 4.2 8 3.62 7.37 4c-.63.35-.82 1.82-.31 3.96a22.7 22.7 0 012.4-.36c.48-.67.99-1.31 1.51-1.9z"></path>
          </svg>
        </div>
      ),
    },
  ];

  return (
    <section id="skills" className="py-20 bg-[#121418] text-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex items-center mb-12">
          <h2 className="text-4xl font-bold text-[#0ffbd2] mr-4">Skills</h2>
          <div className="flex-grow h-px bg-[#0ffbd2]/30"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {skills.map((skill, index) => (
            <div key={index} className="flex flex-col items-center">
              {skill.icon}
              <span className="mt-4 font-medium text-center">{skill.name}</span>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[#1e2029] p-6 rounded-lg border border-[#323544]">
            <h3 className="text-xl font-bold mb-4">Frontend Development</h3>
            <p className="text-gray-400 text-sm mb-4">
              Frontend development focuses on the user-facing aspects of a
              website. It involves creating the visual elements that users
              directly interact with, styling the website, and developing
              interactive features using HTML, CSS, and JavaScript.
            </p>
            <div className="mt-4 flex justify-between items-center">
              <button className="px-4 py-2 bg-[#302c2c] rounded-lg text-sm">
                Learn More
              </button>
              <div className="text-[#0ffbd2] text-sm">Web Development</div>
            </div>
          </div>

          <div className="bg-[#1e2029] p-6 rounded-lg border border-[#323544]">
            <h3 className="text-xl font-bold mb-4">App Development</h3>
            <p className="text-gray-400 text-sm mb-4">
              App development involves creating applications that run on mobile
              devices, desktop computers, or web browsers. It includes designing
              user interfaces, implementing business logic, and ensuring the
              application runs smoothly across different platforms.
            </p>
            <div className="mt-4 flex justify-between items-center">
              <button className="px-4 py-2 bg-[#302c2c] rounded-lg text-sm">
                Learn More
              </button>
              <div className="text-[#0ffbd2] text-sm">Mobile Development</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
