import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";

function Navbar() {
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Team", path: "/teams" },
    { name: "Blog", path: "/blog" },
    { name: "Dashboard", path: "/dashboard" },
  ];

  return (
    <nav
      className="
        sticky top-0 z-50
        bg-[#060b24]/95
        backdrop-blur-md
        border-b border-cyan-400/20
        shadow-[0_0_25px_rgba(23,234,236,0.15)]
      "
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

        {/* Logo + Name */}
        <Link to="/" className="flex items-center gap-4 group">
          <div className="relative">
            <img
              src={logo}
              alt="CSC NITJ Logo"
              className="
                h-12 w-12 object-contain
                drop-shadow-[0_0_10px_rgba(23,234,236,0.8)]
                group-hover:scale-110 transition
              "
            />
            {/* glow ring */}
            <div className="absolute inset-0 rounded-full blur-xl bg-cyan-400/20 opacity-0 group-hover:opacity-100 transition"></div>
          </div>

          <span
            className="
              text-xl md:text-2xl font-bold tracking-widest
              text-[#17EAEC]
              drop-shadow-[0_0_10px_rgba(23,234,236,0.8)]
            "
            style={{ fontFamily: "Orbitron, sans-serif" }}
          >
            CSC NITJ
          </span>
        </Link>

        {/* Nav Links */}
        <ul className="flex gap-10">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;

            return (
              <li key={item.name}>
                <Link
                  to={item.path}
                  className={`
                    relative font-medium tracking-wide transition
                    ${isActive ? "text-[#17EAEC]" : "text-gray-300 hover:text-white"}
                    after:absolute after:left-0 after:-bottom-1
                    after:h-[2px] after:w-0 after:bg-[#17EAEC]
                    after:transition-all after:duration-300
                    hover:after:w-full
                    ${isActive ? "after:w-full" : ""}
                  `}
                >
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>

      </div>
    </nav>
  );
}

export default Navbar;
