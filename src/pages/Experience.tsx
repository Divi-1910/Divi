import React from "react";
import Aurora from "../components/Aurora";
import { Meteors } from "../components/Meteors";
import Lightning from "../components/Lighting";
import { ExperienceTimeline } from "../components/ExperienceTimeline";
import { motion } from "framer-motion";
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
      title: "May 2023 - Aug 2023",
      content: (
        <div className="bg-gradient-to-br from-gray-900 to-gray-950 rounded-xl p-6 border border-blue-500/20 shadow-xl hover:shadow-blue-500/30 transition-all duration-300 group relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-cyan-500 opacity-70"></div>
          <div className="flex items-start">
            <div className="flex-shrink-0 mr-4">
              <div className="bg-gradient-to-br from-blue-600 to-cyan-500 p-3 rounded-xl shadow-lg flex items-center justify-center w-16 h-16">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/4/4a/Amazon_icon.svg"
                  alt="Amazon"
                  className="w-10 h-10"
                />
              </div>
            </div>
            <div>
              <h3 className="text-white text-2xl font-bold mb-1 group-hover:text-blue-400 transition-colors">
                Software Development Engineer Intern
              </h3>
              <h4 className="text-blue-400 text-xl mb-2">
                Amazon Web Services (AWS)
              </h4>
              <div className="flex flex-wrap items-center mb-4">
                <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm font-medium mr-2 mb-2">
                  Seattle, WA (Remote)
                </span>
                <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-medium mb-2">
                  3 months
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
                Developed and implemented a high-performance microservice for
                real-time data processing, reducing latency by 40%
              </li>
              <li>
                Collaborated with cross-functional teams to design and deploy
                cloud-native solutions using AWS services
              </li>
              <li>
                Optimized database queries resulting in a 30% improvement in
                response time for critical API endpoints
              </li>
              <li>
                Implemented comprehensive test suites achieving 90%+ code
                coverage
              </li>
              <li>
                Participated in code reviews and agile development processes
              </li>
            </ul>
          </div>

          <div className="border-l-2 border-cyan-500/50 pl-4 ml-2 mt-6">
            <h5 className="text-white/90 font-medium mb-3 flex items-center">
              <FaTools className="mr-2 text-cyan-400" /> Technologies Used
            </h5>
            <div className="flex flex-wrap gap-2">
              <span className="bg-black/50 text-white/80 px-3 py-1 rounded-full text-sm">
                AWS Lambda
              </span>
              <span className="bg-black/50 text-white/80 px-3 py-1 rounded-full text-sm">
                DynamoDB
              </span>
              <span className="bg-black/50 text-white/80 px-3 py-1 rounded-full text-sm">
                API Gateway
              </span>
              <span className="bg-black/50 text-white/80 px-3 py-1 rounded-full text-sm">
                Node.js
              </span>
              <span className="bg-black/50 text-white/80 px-3 py-1 rounded-full text-sm">
                TypeScript
              </span>
              <span className="bg-black/50 text-white/80 px-3 py-1 rounded-full text-sm">
                Jest
              </span>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Jan 2023 - Apr 2023",
      content: (
        <div className="bg-gradient-to-br from-gray-900 to-gray-950 rounded-xl p-6 border border-purple-500/20 shadow-xl hover:shadow-purple-500/30 transition-all duration-300 group relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-600 to-pink-500 opacity-70"></div>
          <div className="flex items-start">
            <div className="flex-shrink-0 mr-4">
              <div className="bg-gradient-to-br from-purple-600 to-pink-500 p-3 rounded-xl shadow-lg flex items-center justify-center w-16 h-16">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                  alt="Google"
                  className="w-10 h-10"
                />
              </div>
            </div>
            <div>
              <h3 className="text-white text-2xl font-bold mb-1 group-hover:text-purple-400 transition-colors">
                Frontend Engineering Intern
              </h3>
              <h4 className="text-purple-400 text-xl mb-2">
                Google Cloud Platform
              </h4>
              <div className="flex flex-wrap items-center mb-4">
                <span className="bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full text-sm font-medium mr-2 mb-2">
                  Bangalore, India
                </span>
                <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-medium mb-2">
                  4 months
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
                Developed responsive UI components for the Google Cloud Console
                using React and TypeScript
              </li>
              <li>
                Implemented accessibility improvements that increased WCAG
                compliance score by 25%
              </li>
              <li>
                Created interactive data visualization dashboards using D3.js
                and Google Charts
              </li>
              <li>
                Reduced bundle size by 20% through code splitting and lazy
                loading techniques
              </li>
              <li>
                Collaborated with UX designers to implement pixel-perfect
                interfaces based on Figma designs
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
                TypeScript
              </span>
              <span className="bg-black/50 text-white/80 px-3 py-1 rounded-full text-sm">
                Material UI
              </span>
              <span className="bg-black/50 text-white/80 px-3 py-1 rounded-full text-sm">
                D3.js
              </span>
              <span className="bg-black/50 text-white/80 px-3 py-1 rounded-full text-sm">
                Jest
              </span>
              <span className="bg-black/50 text-white/80 px-3 py-1 rounded-full text-sm">
                Webpack
              </span>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Jun 2022 - Dec 2022",
      content: (
        <div className="bg-gradient-to-br from-gray-900 to-gray-950 rounded-xl p-6 border border-teal-500/20 shadow-xl hover:shadow-teal-500/30 transition-all duration-300 group relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal-600 to-green-500 opacity-70"></div>
          <div className="flex items-start">
            <div className="flex-shrink-0 mr-4">
              <div className="bg-gradient-to-br from-teal-600 to-green-500 p-3 rounded-xl shadow-lg flex items-center justify-center w-16 h-16">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/e/e3/Microsoft_Azure_Logo.svg"
                  alt="Microsoft"
                  className="w-10 h-10"
                />
              </div>
            </div>
            <div>
              <h3 className="text-white text-2xl font-bold mb-1 group-hover:text-teal-400 transition-colors">
                Full Stack Developer Intern
              </h3>
              <h4 className="text-teal-400 text-xl mb-2">
                Microsoft Azure Team
              </h4>
              <div className="flex flex-wrap items-center mb-4">
                <span className="bg-teal-500/20 text-teal-400 px-3 py-1 rounded-full text-sm font-medium mr-2 mb-2">
                  Hyderabad, India
                </span>
                <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-medium mb-2">
                  6 months
                </span>
              </div>
            </div>
          </div>

          <div className="border-l-2 border-teal-500/50 pl-4 ml-2 mt-6">
            <h5 className="text-white/90 font-medium mb-3 flex items-center">
              <FaServer className="mr-2 text-teal-400" /> Responsibilities &
              Achievements
            </h5>
            <ul className="text-white/70 text-base list-disc ml-5 space-y-2">
              <li>
                Developed a monitoring dashboard for Azure services using .NET
                Core and React
              </li>
              <li>
                Implemented RESTful APIs for data retrieval and processing with
                99.9% uptime
              </li>
              <li>
                Created automated deployment pipelines using Azure DevOps,
                reducing deployment time by 60%
              </li>
              <li>
                Optimized database performance by implementing efficient
                indexing strategies
              </li>
              <li>
                Participated in daily stand-ups and sprint planning meetings as
                part of an agile team
              </li>
            </ul>
          </div>

          <div className="border-l-2 border-green-500/50 pl-4 ml-2 mt-6">
            <h5 className="text-white/90 font-medium mb-3 flex items-center">
              <FaTools className="mr-2 text-green-400" /> Technologies Used
            </h5>
            <div className="flex flex-wrap gap-2">
              <span className="bg-black/50 text-white/80 px-3 py-1 rounded-full text-sm">
                .NET Core
              </span>
              <span className="bg-black/50 text-white/80 px-3 py-1 rounded-full text-sm">
                C#
              </span>
              <span className="bg-black/50 text-white/80 px-3 py-1 rounded-full text-sm">
                React
              </span>
              <span className="bg-black/50 text-white/80 px-3 py-1 rounded-full text-sm">
                SQL Server
              </span>
              <span className="bg-black/50 text-white/80 px-3 py-1 rounded-full text-sm">
                Azure DevOps
              </span>
              <span className="bg-black/50 text-white/80 px-3 py-1 rounded-full text-sm">
                Docker
              </span>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "May 2021 - Aug 2021",
      content: (
        <div className="bg-gradient-to-br from-gray-900 to-gray-950 rounded-xl p-6 border border-orange-500/20 shadow-xl hover:shadow-orange-500/30 transition-all duration-300 group relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-600 to-amber-500 opacity-70"></div>
          <div className="flex items-start">
            <div className="flex-shrink-0 mr-4">
              <div className="bg-gradient-to-br from-orange-600 to-amber-500 p-3 rounded-xl shadow-lg flex items-center justify-center w-16 h-16">
                <FaMobileAlt className="text-white text-3xl" />
              </div>
            </div>
            <div>
              <h3 className="text-white text-2xl font-bold mb-1 group-hover:text-orange-400 transition-colors">
                Mobile App Developer
              </h3>
              <h4 className="text-orange-400 text-xl mb-2">
                TechInnovate Startup
              </h4>
              <div className="flex flex-wrap items-center mb-4">
                <span className="bg-orange-500/20 text-orange-400 px-3 py-1 rounded-full text-sm font-medium mr-2 mb-2">
                  Remote
                </span>
                <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-medium mb-2">
                  3 months
                </span>
              </div>
            </div>
          </div>

          <div className="border-l-2 border-orange-500/50 pl-4 ml-2 mt-6">
            <h5 className="text-white/90 font-medium mb-3 flex items-center">
              <FaUsers className="mr-2 text-orange-400" /> Responsibilities &
              Achievements
            </h5>
            <ul className="text-white/70 text-base list-disc ml-5 space-y-2">
              <li>
                Developed a cross-platform mobile application using Flutter for
                both iOS and Android
              </li>
              <li>
                Implemented real-time chat functionality using Firebase Realtime
                Database
              </li>
              <li>
                Created a custom state management solution for improved
                performance
              </li>
              <li>
                Integrated third-party APIs for payment processing and location
                services
              </li>
              <li>
                Conducted user testing sessions and implemented feedback to
                improve UX
              </li>
            </ul>
          </div>

          <div className="border-l-2 border-amber-500/50 pl-4 ml-2 mt-6">
            <h5 className="text-white/90 font-medium mb-3 flex items-center">
              <FaTools className="mr-2 text-amber-400" /> Technologies Used
            </h5>
            <div className="flex flex-wrap gap-2">
              <span className="bg-black/50 text-white/80 px-3 py-1 rounded-full text-sm">
                Flutter
              </span>
              <span className="bg-black/50 text-white/80 px-3 py-1 rounded-full text-sm">
                Dart
              </span>
              <span className="bg-black/50 text-white/80 px-3 py-1 rounded-full text-sm">
                Firebase
              </span>
              <span className="bg-black/50 text-white/80 px-3 py-1 rounded-full text-sm">
                REST APIs
              </span>
              <span className="bg-black/50 text-white/80 px-3 py-1 rounded-full text-sm">
                Git
              </span>
              <span className="bg-black/50 text-white/80 px-3 py-1 rounded-full text-sm">
                Figma
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
