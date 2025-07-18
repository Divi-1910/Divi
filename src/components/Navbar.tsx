"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <nav className="bg-gray-900/90 m-6 backdrop-blur-md shadow-lg rounded-full mx-auto max-w-4xl px-6 py-4 fixed bottom-0 left-1/2 transform -translate-x-1/2 z-30 ">
      <div className="flex items-center justify-between">
        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
        <div className="hidden md:flex space-x-6">
          <Link
            to="/"
            className="text-white hover:text-teal-400 transition-colors"
          >
            Home
          </Link>
          <Link
            to="/education"
            className="text-white hover:text-teal-400 transition-colors"
          >
            Education
          </Link>
          <Link
            to="/experience"
            className="text-white hover:text-teal-400 transition-colors"
          >
            Experience
          </Link>
          <Link
            to="/projects"
            className="text-white hover:text-teal-400 transition-colors"
          >
            Work Showcase
          </Link>
          <Link
            to="/skills"
            className="text-white hover:text-teal-400 transition-colors"
          >
            Skills
          </Link>
          <Link
            to="/profiles"
            className="text-white hover:text-teal-400 transition-colors"
          >
            Profiles
          </Link>
        </div>
      </div>
      {isMobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-gray-900/90 backdrop-blur-md rounded-xl border border-teal-500/20 p-4 mt-2"
        >
          <div className="flex flex-col space-y-2">
            <Link to="/" className="text-white hover:text-teal-400 py-2">
              Home
            </Link>
            <Link to="/about" className="text-white hover:text-teal-400 py-2">
              About
            </Link>
            <Link
              to="/projects"
              className="text-white hover:text-teal-400 py-2"
            >
              Work Showcase
            </Link>
            <Link to="/skills" className="text-white hover:text-teal-400 py-2">
              Skills
            </Link>
            <Link
              to="/achievements"
              className="text-white hover:text-teal-400 py-2"
            >
              Achievements
            </Link>
            <Link to="/contact" className="text-white hover:text-teal-400 py-2">
              Contact
            </Link>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
