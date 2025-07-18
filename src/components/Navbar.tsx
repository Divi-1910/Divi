"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import {
  FaHome,
  FaGraduationCap,
  FaBriefcase,
  FaCode,
  FaTools,
  FaIdCard
} from "react-icons/fa";

const Navbar: React.FC = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();
  const [activeTab, setActiveTab] = useState("/");

  useEffect(() => {
    setActiveTab(location.pathname);
  }, [location]);

  const navItems = [
    { path: "/", label: "Home", icon: <FaHome /> },
    { path: "/academics", label: "Academics", icon: <FaGraduationCap /> },
    { path: "/experience", label: "Experience", icon: <FaBriefcase /> },
    { path: "/projects", label: "Projects", icon: <FaCode /> },
    { path: "/skills", label: "Skills", icon: <FaTools /> },
    { path: "/profiles", label: "Profiles", icon: <FaIdCard /> }
  ];

  return (
    <nav className="fixed bottom-0 left-1/2 transform -translate-x-1/2 z-30 mb-6 w-full max-w-4xl">
      <div className="bg-gray-900/80 backdrop-blur-xl shadow-[0_0_15px_rgba(59,130,246,0.5)] rounded-2xl mx-4 overflow-hidden border border-white/10">
        <div className="flex items-center justify-between">
          <button
            className="md:hidden text-white p-4"
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
                d={
                  isMobileOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16m-7 6h7"
                }
              />
            </svg>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex w-full justify-center py-4 relative">
            <div className="flex space-x-1">
              {navItems.map((item) => {
                const isActive = activeTab === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`relative px-4 py-2 rounded-lg flex items-center space-x-1 transition-all duration-300 ${
                      isActive ? "text-white" : "text-white/70 hover:text-white"
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="navbar-active-pill"
                        className="absolute inset-0 bg-gradient-to-r from-blue-600/40 to-purple-600/40 rounded-lg -z-10"
                        transition={{ type: "spring", duration: 0.6 }}
                      />
                    )}
                    <span className={`${isActive ? "text-blue-400" : ""}`}>
                      {item.icon}
                    </span>
                    <span>{item.label}</span>
                  </Link>
                );
              })}
            </div>

            {/* Animated bottom border */}
            <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden backdrop-blur-md p-4 border-t border-white/10"
          >
            <div className="grid grid-cols-3 gap-2">
              {navItems.map((item) => {
                const isActive = activeTab === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsMobileOpen(false)}
                    className={`flex flex-col items-center justify-center p-3 rounded-lg ${
                      isActive
                        ? "bg-gradient-to-br from-blue-600/30 to-purple-600/30 text-white"
                        : "text-white/70 hover:bg-white/5"
                    }`}
                  >
                    <span
                      className={`text-xl mb-1 ${
                        isActive ? "text-blue-400" : ""
                      }`}
                    >
                      {item.icon}
                    </span>
                    <span className="text-xs">{item.label}</span>
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
