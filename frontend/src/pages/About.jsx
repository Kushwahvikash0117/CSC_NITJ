import React, { useEffect, useState } from "react";

const slides = [
  {
    title: "About CSC NITJ",
    content:
      "CSC NITJ is the official Cyber Security Club under the CSE Department of NIT Jalandhar. We focus on building cyber awareness, ethical hacking skills, and hands-on security knowledge through workshops, events, and real-world projects."
  },
  {
    title: "Our Vision",
    content:
      "Our vision is to create a strong cybersecurity culture among students and prepare future professionals who can defend digital infrastructure with ethics, innovation, and responsibility."
  },
  {
    title: "Our Mission",
    content:
      "Our mission is to provide hands-on exposure, organize impactful events, promote ethical hacking, and encourage research-driven cybersecurity solutions that benefit society."
  }
];

export default function About() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Auto slide
  useEffect(() => {
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-tr 
from-[#020617] 
via-[#0A3A5E] 
to-[#1FB6C9]
 flex items-center justify-center px-4">
      {/* group added here */}
      <div className="relative w-full max-w-3xl overflow-hidden group">

        {/* Slides */}
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className="min-w-full bg-[#0b1120]/80 backdrop-blur-md rounded-3xl p-12 shadow-2xl border border-cyan-500 text-center"
            >
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent mb-6">
                {slide.title}
              </h1>
              <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
                {slide.content}
              </p>
            </div>
          ))}
        </div>

        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-4 -translate-y-1/2 
                     opacity-0 group-hover:opacity-100 
                     bg-cyan-500/20 hover:bg-cyan-500/40 
                     text-cyan-300 p-3 rounded-full 
                     backdrop-blur-md transition-all duration-300"
        >
          ❮
        </button>

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-4 -translate-y-1/2 
                     opacity-0 group-hover:opacity-100 
                     bg-cyan-500/20 hover:bg-cyan-500/40 
                     text-cyan-300 p-3 rounded-full 
                     backdrop-blur-md transition-all duration-300"
        >
          ❯
        </button>

        {/* Dots */}
        <div className="flex justify-center mt-6 gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`h-3 rounded-full transition-all duration-300 ${
                current === index
                  ? "bg-cyan-400 w-6"
                  : "bg-gray-500 w-3"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
