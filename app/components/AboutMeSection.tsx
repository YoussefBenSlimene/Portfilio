import React from "react";

const AboutMeSection = () => {
  return (
    <section id="about" className="py-20 bg-[#121418] text-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row gap-12 items-start">
          <div className="w-full md:w-1/2">
            <div className="inline-flex items-center bg-[#1e2029] rounded-lg px-4 py-2 mb-6">
              <span className="text-[#0ffbd2] mr-2">About Me</span>
              <div className="h-px w-10 bg-[#0ffbd2]/30"></div>
            </div>

            <div className="bg-[#1e2029] rounded-lg p-6 mb-6">
              <p className="text-sm leading-relaxed text-gray-300 mb-4">
                I&apos;m a full-stack developer with experience in building products,
                features, and websites. I specialize in JavaScript and
                TypeScript, with frameworks like React, Next.js, and Node.js. My
                focus is on creating responsive, user-friendly interfaces with
                clean, efficient code.
              </p>

              <p className="text-sm leading-relaxed text-gray-300">
                I enjoy solving complex problems and learning new technologies.
                My goal is to create software that is both functional and
                visually appealing, while providing an excellent user
                experience.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#1e2029] rounded-lg p-4">
                <h3 className="text-[#0ffbd2] text-lg font-medium mb-2">
                  Frontend Development
                </h3>
                <p className="text-sm text-gray-300">
                  Creating responsive and interactive user interfaces with
                  modern technologies.
                </p>
              </div>
              <div className="bg-[#1e2029] rounded-lg p-4">
                <h3 className="text-[#0ffbd2] text-lg font-medium mb-2">
                  Backend Development
                </h3>
                <p className="text-sm text-gray-300">
                  Building scalable server-side applications and APIs.
                </p>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2">
            <div className="bg-[#1e2029] rounded-lg p-6">
              <div className="mb-6">
                <h3 className="text-[#0ffbd2] text-lg font-medium mb-4">
                  Skills
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm text-gray-300">HTML</span>
                      <span className="text-xs text-[#0ffbd2]">95%</span>
                    </div>
                    <div className="h-1 w-full bg-[#192133] rounded-full">
                      <div
                        className="h-1 bg-[#0ffbd2] rounded-full"
                        style={{ width: "95%" }}
                      ></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm text-gray-300">CSS</span>
                      <span className="text-xs text-[#0ffbd2]">90%</span>
                    </div>
                    <div className="h-1 w-full bg-[#192133] rounded-full">
                      <div
                        className="h-1 bg-[#0ffbd2] rounded-full"
                        style={{ width: "90%" }}
                      ></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm text-gray-300">JavaScript</span>
                      <span className="text-xs text-[#0ffbd2]">85%</span>
                    </div>
                    <div className="h-1 w-full bg-[#192133] rounded-full">
                      <div
                        className="h-1 bg-[#0ffbd2] rounded-full"
                        style={{ width: "85%" }}
                      ></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm text-gray-300">React</span>
                      <span className="text-xs text-[#0ffbd2]">80%</span>
                    </div>
                    <div className="h-1 w-full bg-[#192133] rounded-full">
                      <div
                        className="h-1 bg-[#0ffbd2] rounded-full"
                        style={{ width: "80%" }}
                      ></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm text-gray-300">Flutter</span>
                      <span className="text-xs text-[#0ffbd2]">75%</span>
                    </div>
                    <div className="h-1 w-full bg-[#192133] rounded-full">
                      <div
                        className="h-1 bg-[#0ffbd2] rounded-full"
                        style={{ width: "85%" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-[#0ffbd2] text-lg font-medium mb-4">
                  Technologies
                </h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-[#192133] text-sm rounded">
                    HTML
                  </span>
                  <span className="px-3 py-1 bg-[#192133] text-sm rounded">
                    CSS
                  </span>
                  <span className="px-3 py-1 bg-[#192133] text-sm rounded">
                    JavaScript
                  </span>
                  <span className="px-3 py-1 bg-[#192133] text-sm rounded">
                    React
                  </span>
                  <span className="px-3 py-1 bg-[#192133] text-sm rounded">
                    Node.js
                  </span>
                  <span className="px-3 py-1 bg-[#192133] text-sm rounded">
                    TypeScript
                  </span>
                  <span className="px-3 py-1 bg-[#192133] text-sm rounded">
                    Next.js
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMeSection;
