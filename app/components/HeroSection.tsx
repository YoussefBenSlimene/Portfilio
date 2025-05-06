import React from "react";

const HeroSection = () => {
  return (
    <section className="min-h-screen relative flex items-center justify-center bg-[#121418] text-white px-6 md:px-12 py-20">
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="w-full md:w-1/2 flex flex-col">
            <div className="bg-[#1e2029] rounded-lg p-6 mb-8 flex items-center">
              <div className="w-20 h-20 bg-[#192133] rounded-lg overflow-hidden mr-4">
                <img
                  src="/me.png"
                  alt="Profile"
                  className="w-full h-full object-cover"
                  width={80}
                  height={80}
                />
              </div>
              <div>
                <p className="text-gray-400">Hey</p>
                <p>
                  I&apos;m <span className="text-[#0ffbd2]">Youssef</span>,
                </p>
                <p className="font-semibold">Full-Stack Developer</p>
                <div className="flex mt-2 space-x-2">
                  <span className="px-2 py-0.5 bg-[#192133] text-[#0ffbd2] text-xs rounded">
                    NEXT
                  </span>
                  <span className="px-2 py-0.5 bg-[#192133] text-[#0ffbd2] text-xs rounded">
                    REACT
                  </span>
                  <span className="px-2 py-0.5 bg-[#192133] text-[#0ffbd2] text-xs rounded">
                    HTML
                  </span>
                  <span className="px-2 py-0.5 bg-[#192133] text-[#0ffbd2] text-xs rounded">
                    CSS
                  </span>
                  <span className="px-2 py-0.5 bg-[#192133] text-[#0ffbd2] text-xs rounded">
                    JS
                  </span>
                  <span className="px-2 py-0.5 bg-[#192133] text-[#0ffbd2] text-xs rounded">
                    FLUTTER
                  </span>
                </div>
              </div>
            </div>

            <p className="text-gray-400 mb-6">
              I design and code beautifully simple things, and I love what I do.
            </p>

            <a href="mailto:youssef2004bs@gmail.com">
              <button className="w-40 py-2 bg-transparent border border-[#0ffbd2] text-[#0ffbd2] rounded hover:bg-[#0ffbd2]/10 transition-all">
                Let&apos;s Talk
              </button>
            </a>
          </div>

          <div className="w-full md:w-1/2 relative">
            <div className="w-full aspect-square relative bg-gradient-to-br from-[#121418] to-[#1e2029] overflow-hidden rounded-lg flex items-center justify-center">
              <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                <div className="text-[#0ffbd2] font-mono text-opacity-5 text-8xl select-none">
                  &lt;/&gt;
                </div>
              </div>
              <div className="z-10 text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                  Developer
                </h1>
                <div className="flex justify-center space-x-4 mt-8">
                  <div className="text-center">
                    <h3 className="text-[#0ffbd2] text-2xl font-bold">3</h3>
                    <p className="text-xs text-gray-400">Years Experience</p>
                  </div>
                  <div className="text-center">
                    <h3 className="text-[#0ffbd2] text-2xl font-bold">6</h3>
                    <p className="text-xs text-gray-400">Projects Completed</p>
                  </div>
                  <div className="text-center">
                    <h3 className="text-[#0ffbd2] text-2xl font-bold">4</h3>
                    <p className="text-xs text-gray-400">Satisfied Clients</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative code background */}
      <div className="absolute inset-0 overflow-hidden opacity-5 select-none pointer-events-none">
        <div className="text-xs md:text-sm font-mono">
          {Array.from({ length: 15 }).map((_, i) => (
            <div
              key={i}
              className="absolute"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
            >
              <span style={{ color: "#0ffbd2" }}>{`function `}</span>
              <span style={{ color: "#f5f5f5" }}>{`Main() `}</span>
              <br />
              <span
                style={{ color: "#f5f5f5", marginLeft: "10px" }}
              >{`return `}</span>
              <span style={{ color: "#ff8a65" }}>{`{ "Hello World" }`}</span>
              <span style={{ color: "#f5f5f5" }}>{`;`}</span>
              <br />
              <span style={{ color: "#f5f5f5" }}>{`}`}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
