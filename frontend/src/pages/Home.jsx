import React from "react";
import heroImg from "../assets/hero-bg.jpeg"; // Add suitable hero image
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="text-gray-300">

      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-screen flex items-center justify-center"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative text-center px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
            CSC NITJ
          </h1>

          <p className="text-lg md:text-2xl mb-8  bg-clip-text text-[#17EAECff]">
            Building Cyber Awareness & Ethical Hacking Skills
          </p>
          <Link
            to="/about"
            className="bg-[#17EAECff] text-black font-bold py-3 px-6 rounded-lg hover:bg-cyan-500 transition"
          >
            Learn More
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-[#0b1120]">
        <div className="max-w-5xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold text-cyan-400 mb-6">About Us</h2>
          <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-6">
            CSC NITJ is the official Cyber Security Club under the CSE Department. 
            We organize workshops, hackathons, and projects to enhance students' 
            cyber skills and awareness. Join us to explore the world of cybersecurity!
          </p>
          <Link
            to="/teams"
            className="text-cyan-400 font-semibold hover:underline"
          >
            Meet Our Teams
          </Link>
        </div>
      </section>

      {/* Teams Preview */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-cyan-400 mb-12 text-center">Our Leaders</h2>
          <div className="flex flex-wrap justify-center gap-8">
            {/* Example card */}
            <div className="bg-primary rounded-2xl p-6 w-60 text-center shadow-lg hover:scale-105 transition">
              <img
                src="/src/assets/members/vikash.jpeg"
                alt="Vikash Kushwah"
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-4 border-yellow-400"
              />
              <h3 className="text-xl font-bold text-cyan-400 mb-1">Vikash Kushwah</h3>
              <p className="text-gray-300">Student Coordinator</p>
            </div>

            <div className="bg-primary rounded-2xl p-6 w-60 text-center shadow-lg hover:scale-105 transition">
              <img
                src="/src/assets/members/kritika.jpeg"
                alt="Kritika Joshi"
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-4 border-yellow-400"
              />
              <h3 className="text-xl font-bold text-cyan-400 mb-1">Kritika Joshi</h3>
              <p className="text-gray-300">Student Coordinator</p>
            </div>
          </div>
        </div>
      </section>

      {/* Events / Projects Section */}
      <section className="py-20 bg-[#0b1120]">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-cyan-400 mb-12">Our Events</h2>
          <div className="flex flex-wrap justify-center gap-8">
            {/* Example Event Card */}
            <div className="bg-primary rounded-2xl p-6 w-72 text-center shadow-lg hover:scale-105 transition">
              <h3 className="text-xl font-bold text-cyan-400 mb-2">Hackathon 2025</h3>
              <p className="text-gray-300">Join us for 24 hours of coding challenges and prizes!</p>
            </div>
            <div className="bg-primary rounded-2xl p-6 w-72 text-center shadow-lg hover:scale-105 transition">
              <h3 className="text-xl font-bold text-cyan-400 mb-2">Cyber Workshop</h3>
              <p className="text-gray-300">Hands-on sessions on ethical hacking and penetration testing.</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
