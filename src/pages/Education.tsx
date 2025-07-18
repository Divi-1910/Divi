// React component
import Aurora from "../components/Aurora";
import { Meteors } from "../components/Meteors";
import Lightning from "../components/Lighting";
import { EducationTimeline } from "../components/EducationTimeline";
import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaSchool,
  FaCode,
  FaChalkboardTeacher,
  FaUserGraduate
} from "react-icons/fa";

function Education() {
  const EducationTimelineData = [
    {
      title: "2021 - 2025",
      content: (
        <div className="bg-gradient-to-br from-gray-900 to-gray-950 rounded-xl p-6 border border-purple-500/20 shadow-xl hover:shadow-purple-500/30 transition-all duration-300 group relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-600 to-blue-500 opacity-70"></div>
          <div className="flex items-start">
            <div className="bg-gradient-to-br from-purple-600 to-blue-500 p-3 rounded-xl mr-4 shadow-lg">
              <FaGraduationCap className="text-white text-2xl" />
            </div>
            <div>
              <h3 className="text-white text-2xl font-bold mb-2 group-hover:text-blue-400 transition-colors">
                Bachelor's in Computer Science and Engineering
              </h3>
              <h4 className="text-blue-400 text-xl mb-4">
                Shri G S Institute of Technology and Science (SGSITS)
              </h4>
            </div>
          </div>

          <div className="flex flex-wrap items-center mb-4 mt-2">
            <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-medium mr-2 mb-2">
              CGPA: 7.85/10
            </span>
            <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm font-medium mr-2 mb-2">
              Indore, Madhya Pradesh
            </span>
            <span className="bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full text-sm font-medium mb-2">
              2021 - Present
            </span>
          </div>

          <div className="border-l-2 border-blue-500/50 pl-4 ml-2 mt-6">
            <h5 className="text-white/90 font-medium mb-2 flex items-center">
              <FaCode className="mr-2 text-blue-400" /> Key Coursework
            </h5>
            <ul className="text-white/70 text-base list-disc ml-5 space-y-1">
              <li>Data Structures</li>
              <li>Design and Analysis of Algorithms</li>
              <li>Database Management Systems</li>
              <li>Operating Systems</li>
              <li>Computer Networks</li>
              <li>Discrete Mathematics</li>
              <li>Programming Practices</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      title: "2018-2020",
      content: (
        <div className="bg-gradient-to-br from-gray-900 to-gray-950 rounded-xl p-6 border border-blue-500/20 shadow-xl hover:shadow-blue-500/30 transition-all duration-300 group relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-cyan-500 opacity-70"></div>
          <div className="flex items-start">
            <div className="bg-gradient-to-br from-blue-600 to-cyan-500 p-3 rounded-xl mr-4 shadow-lg">
              <FaUserGraduate className="text-white text-2xl" />
            </div>
            <div>
              <h3 className="text-white text-2xl font-bold mb-2 group-hover:text-blue-400 transition-colors">
                Higher Secondary Education (12th)
              </h3>
              <h4 className="text-blue-400 text-xl mb-4">
                St Paul's Convent Senior Secondary School
              </h4>
            </div>
          </div>

          <div className="flex flex-wrap items-center mb-4 mt-2">
            <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-medium mr-2 mb-2">
              Percentage: 92.6%
            </span>
            <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm font-medium mr-2 mb-2">
              CBSE Board
            </span>
            <span className="bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full text-sm font-medium mb-2">
              Ujjain, Madhya Pradesh
            </span>
          </div>

          <div className="border-l-2 border-blue-500/50 pl-4 ml-2 mt-6">
            <h5 className="text-white/90 font-medium mb-2 flex items-center">
              <FaChalkboardTeacher className="mr-2 text-blue-400" /> Subjects
            </h5>
            <ul className="text-white/70 text-base list-disc ml-5 space-y-1">
              <li>Physics</li>
              <li>Chemistry</li>
              <li>Mathematics</li>
              <li>Computer Science</li>
              <li>English</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      title: "2018",
      content: (
        <div className="bg-gradient-to-br from-gray-900 to-gray-950 rounded-xl p-6 border border-cyan-500/20 shadow-xl hover:shadow-cyan-500/30 transition-all duration-300 group relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-600 to-teal-500 opacity-70"></div>
          <div className="flex items-start">
            <div className="bg-gradient-to-br from-cyan-600 to-teal-500 p-3 rounded-xl mr-4 shadow-lg">
              <FaSchool className="text-white text-2xl" />
            </div>
            <div>
              <h3 className="text-white text-2xl font-bold mb-2 group-hover:text-blue-400 transition-colors">
                Secondary Education (10th)
              </h3>
              <h4 className="text-blue-400 text-xl mb-4">
                St Paul's Convent Senior Secondary School
              </h4>
            </div>
          </div>

          <div className="flex flex-wrap items-center mb-4 mt-2">
            <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-medium mr-2 mb-2">
              Percentage: 91.2%
            </span>
            <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm font-medium mr-2 mb-2">
              CBSE Board
            </span>
            <span className="bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full text-sm font-medium mb-2">
              Ujjain, Madhya Pradesh
            </span>
          </div>

          <div className="border-l-2 border-blue-500/50 pl-4 ml-2 mt-6">
            <h5 className="text-white/90 font-medium mb-2 flex items-center">
              <FaChalkboardTeacher className="mr-2 text-blue-400" /> Subjects
            </h5>
            <ul className="text-white/70 text-base list-disc ml-5 space-y-1">
              <li>Science</li>
              <li>Mathematics</li>
              <li>Social Science</li>
              <li>Hindi</li>
              <li>English</li>
            </ul>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="min-h-screen w-full bg-black font-sans relative m-0 p-0">
      <Aurora />
      <Meteors number={60} className="z-10" />
      <div className="absolute inset-0 z-10" style={{ opacity: 0.4 }}>
        <Lightning
          hue={280}
          xOffset={0}
          speed={0.4}
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
        <EducationTimeline data={EducationTimelineData} />
      </motion.div>
    </div>
  );
}

export default Education;
