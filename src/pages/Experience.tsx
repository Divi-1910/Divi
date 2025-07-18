import React from "react";
import Aurora from "../components/Aurora";
import { Meteors } from "../components/Meteors";
import Lightning from "../components/Lighting";
import { ExperienceTimeline } from "../components/ExperienceTimeline";
import { motion } from "framer-motion";
import graasLogo from "../assets/graas_ai_logo.jpeg";
import ewayLogo from "../assets/eway_it_icon.jpeg";
import {
  FaBriefcase,
  FaCode,
  FaLaptopCode,
  FaServer,
  FaMobileAlt,
  FaDatabase,
  FaTools,
  FaUsers
} from "react-icons/fa";

function Experience() {
  const ExperienceTimelineData = [
    {
      title: "July 2025 - Present",
      content: (
        <div className="bg-gradient-to-br from-gray-900 to-gray-950 rounded-xl p-6 border border-blue-500/20 shadow-xl hover:shadow-blue-500/30 transition-all duration-300 group relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-cyan-500 opacity-70"></div>
          <div className="flex items-start">
            <div className="flex-shrink-0 mr-4">
              <div className="bg-gradient-to-br from-blue-600 to-cyan-500 p-3 rounded-full shadow-lg flex items-center justify-center w-16 h-16">
                <img
                  src={graasLogo}
                  alt="Graas"
                  className="w-10 h-10 object-cover rounded-full"
                />
              </div>
            </div>
            <div>
              <h3 className="text-white text-2xl font-bold mb-1 group-hover:text-blue-400 transition-colors">
                Engineer - Product
              </h3>
              <h4 className="text-blue-400 text-xl mb-2">
                Growth as a Service - Graas.ai
              </h4>
              <div className="flex flex-wrap items-center mb-4">
                <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm font-medium mr-2 mb-2">
                  Pune , MH (On-site)
                </span>
                <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-medium mb-2">
                  Present
                </span>
              </div>
            </div>
          </div>

          <div className="border-l-2 border-blue-500/50 pl-4 ml-2 mt-6">
            <h5 className="text-white/90 font-medium mb-3 flex items-center">
              <FaLaptopCode className="mr-2 text-blue-400" /> Responsibilities &
              Achievements
            </h5>
            <ul className="text-white/70 text-base list-disc ml-5 space-y-2">
              <li>
                key maintainer of a in-house chatbot product, contributing to a
                multiple proof of concept that effectively improved user product
                by increasing engagement and performance.
              </li>
              <li>
                Collaborated closely with Product team during agile sprints,
                increasing the reliability of business intelligence systems
                through continuous improvements.
              </li>
              <li>
                Enhanced Agentic Workflows to comply with specified policies
                while maintaining code standards.
              </li>
            </ul>
          </div>

          <div className="border-l-2 border-cyan-500/50 pl-4 ml-2 mt-6">
            <h5 className="text-white/90 font-medium mb-3 flex items-center">
              <FaTools className="mr-2 text-cyan-400" /> Technologies Used
            </h5>
            <div className="flex flex-wrap gap-2">
              <span className="bg-black/50 text-white/80 px-3 py-1 rounded-full text-sm">
                FastAPI
              </span>
              <span className="bg-black/50 text-white/80 px-3 py-1 rounded-full text-sm">
                Python
              </span>
              <span className="bg-black/50 text-white/80 px-3 py-1 rounded-full text-sm">
                Snowflake
              </span>
              <span className="bg-black/50 text-white/80 px-3 py-1 rounded-full text-sm">
                Redis
              </span>
              <span className="bg-black/50 text-white/80 px-3 py-1 rounded-full text-sm">
                Java
              </span>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Dec 2024 - June 2025",
      content: (
        <div className="bg-gradient-to-br from-gray-900 to-gray-950 rounded-xl p-6 border border-purple-500/20 shadow-xl hover:shadow-purple-500/30 transition-all duration-300 group relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-600 to-pink-500 opacity-70"></div>
          <div className="flex items-start">
            <div className="flex-shrink-0 mr-4">
              <div className="bg-gradient-to-br from-purple-600 to-pink-500 p-3 rounded-full shadow-lg flex items-center justify-center w-16 h-16">
                <img
                  src={graasLogo}
                  alt="Graas"
                  className="w-10 h-10 object-cover rounded-full"
                />
              </div>
            </div>
            <div>
              <h3 className="text-white text-2xl font-bold mb-1 group-hover:text-purple-400 transition-colors">
                Engineering Intern
              </h3>
              <h4 className="text-purple-400 text-xl mb-2">
                Growth as a Service - Graas.ai
              </h4>
              <div className="flex flex-wrap items-center mb-4">
                <span className="bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full text-sm font-medium mr-2 mb-2">
                  Pune, MH
                </span>
                <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-medium mb-2">
                  6 months
                </span>
              </div>
            </div>
          </div>

          <div className="border-l-2 border-purple-500/50 pl-4 ml-2 mt-6">
            <h5 className="text-white/90 font-medium mb-3 flex items-center">
              <FaCode className="mr-2 text-purple-400" /> Responsibilities &
              Achievements
            </h5>
            <ul className="text-white/70 text-base list-disc ml-5 space-y-2">
              <li>
                Onboarded TikTok Ads, Magento, and Shopee APIs to the ConnectV2
                Framework, optimizing data ingestion pipelines by 25% and
                integration with Snowflake Data Warehouse.
              </li>
              <li>
                Contributed to optimizing the data connectV2 framework for
                seamless integration with various marketing platforms and ad
                channels.
              </li>
              <li>
                Streamlined onboarding processes for new channels, significantly
                reducing integration time from months to few days.
              </li>
              <li>
                Diagnosed and fixed bugs in the ConnectV2 Framework, improved
                system performance, and wrote JUnit test cases with coverage
                over 85% for multiple modules to enhance code quality and
                stability.
              </li>
            </ul>
          </div>

          <div className="border-l-2 border-pink-500/50 pl-4 ml-2 mt-6">
            <h5 className="text-white/90 font-medium mb-3 flex items-center">
              <FaTools className="mr-2 text-pink-400" /> Technologies Used
            </h5>
            <div className="flex flex-wrap gap-2">
              <span className="bg-black/50 text-white/80 px-3 py-1 rounded-full text-sm">
                React
              </span>
              <span className="bg-black/50 text-white/80 px-3 py-1 rounded-full text-sm">
                Java
              </span>
              <span className="bg-black/50 text-white/80 px-3 py-1 rounded-full text-sm">
                API's
              </span>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Jun 2024 - Jul 2024",
      content: (
        <div className="bg-gradient-to-br from-gray-900 to-gray-950 rounded-xl p-6 border border-teal-500/20 shadow-xl hover:shadow-teal-500/30 transition-all duration-300 group relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal-600 to-green-500 opacity-70"></div>
          <div className="flex items-start">
            <div className="flex-shrink-0 mr-4">
              <div className="bg-gradient-to-br from-teal-600 to-green-500 p-3 rounded-full shadow-lg flex items-center justify-center w-16 h-16">
                <img
                  src={ewayLogo}
                  alt="Eway IT"
                  className="w-10 h-10 object-cover rounded-full"
                />
              </div>
            </div>
            <div>
              <h3 className="text-white text-2xl font-bold mb-1 group-hover:text-teal-400 transition-colors">
                Trainee Intern
              </h3>
              <h4 className="text-teal-400 text-xl mb-2">
                Eway IT Solutions Pvt Ltd
              </h4>
              <div className="flex flex-wrap items-center mb-4">
                <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-medium mb-2">
                  2 months
                </span>
              </div>
            </div>
          </div>

          <div className="border-l-2 border-teal-500/50 pl-4 ml-2 mt-6">
            <h5 className="text-white/90 font-medium mb-3 flex items-center">
              <FaServer className="mr-2 text-teal-400" /> Learnings
            </h5>
            <ul className="text-white/70 text-base list-disc ml-5 space-y-2">
              <li>
                Gained hands-on experience in modern web development
                technologies at Eway IT Solutions Pvt. Ltd.
              </li>
              <li>
                Developed responsive user interfaces using HTML, CSS,
                JavaScript, PHP, and React.
              </li>
              <li>
                Improved application robustness through effective form handling
                and input validation.
              </li>
              <li>
                Explored industry-standard tools to enhance development
                workflows and scalability.
              </li>
            </ul>
          </div>

          <div className="border-l-2 border-green-500/50 pl-4 ml-2 mt-6">
            <h5 className="text-white/90 font-medium mb-3 flex items-center">
              <FaTools className="mr-2 text-green-400" /> Technologies Used
            </h5>
            <div className="flex flex-wrap gap-2">
              <span className="bg-black/50 text-white/80 px-3 py-1 rounded-full text-sm">
                HTML
              </span>
              <span className="bg-black/50 text-white/80 px-3 py-1 rounded-full text-sm">
                CSS
              </span>
              <span className="bg-black/50 text-white/80 px-3 py-1 rounded-full text-sm">
                Javascript
              </span>
              <span className="bg-black/50 text-white/80 px-3 py-1 rounded-full text-sm">
                SQL
              </span>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="min-h-screen w-full bg-black font-sans relative m-0 p-0">
      <Aurora />
      <Meteors number={20} className="z-10" />
      <div className="absolute inset-0 z-10" style={{ opacity: 0.4 }}>
        <Lightning
          hue={120}
          xOffset={0}
          speed={0.7}
          intensity={0.6}
          size={0.8}
        />
      </div>
      <motion.div
        className="relative z-20 pt-16 pb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <ExperienceTimeline data={ExperienceTimelineData} />
      </motion.div>
    </div>
  );
}

export default Experience;
