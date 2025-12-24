import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Footer() {
  return (
    <footer className="bg-[#060b24] text-gray-300">
      
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-10 py-16">
        
        <div className="grid grid-cols-4 gap-14">

          {/* Column 1: Logo + About */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="CSC Logo" className="h-12 w-12" />
              <h2
                className="text-2xl font-semibold text-[#17EAEC]"
                style={{ fontFamily: "Orbitron, sans-serif" }}
              >
                CSC NITJ
              </h2>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Cyber Security Club of NIT Jalandhar working to build ethical hackers,
              secure developers, and cyber awareness.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-[#17EAEC]">Home</Link></li>
              <li><Link to="/about" className="hover:text-[#17EAEC]">About</Link></li>
              <li><Link to="/teams" className="hover:text-[#17EAEC]">Teams</Link></li>
              <li><Link to="/blog" className="hover:text-[#17EAEC]">Blog</Link></li>
            </ul>
          </div>

          {/* Column 3: Explore */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Explore
            </h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-[#17EAEC] cursor-pointer">Events</li>
              <li className="hover:text-[#17EAEC] cursor-pointer">Projects</li>
              <li className="hover:text-[#17EAEC] cursor-pointer">Workshops</li>
              <li className="hover:text-[#17EAEC] cursor-pointer">Contact</li>
            </ul>
          </div>

          {/* Column 4: Connect */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Connect
            </h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-[#17EAEC] cursor-pointer">Instagram</li>
              <li className="hover:text-[#17EAEC] cursor-pointer">LinkedIn</li>
              <li className="hover:text-[#17EAEC] cursor-pointer">GitHub</li>
              <li className="hover:text-[#17EAEC] cursor-pointer">Email</li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 text-center py-4 text-xs text-gray-500">
        © {new Date().getFullYear()} CSC NITJ. All rights reserved.
      </div>

    </footer>
  );
}
