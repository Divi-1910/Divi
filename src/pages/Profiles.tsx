// React component
import Aurora from "../components/Aurora";
import { Meteors } from "../components/Meteors";
import Lightning from "../components/Lighting";
import { PinContainer } from "../components/ThreeDPin";
import { FaGithub, FaLinkedin, FaCode, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

function Profiles() {
  return (
    <div className="min-h-screen w-full bg-black font-sans relative m-0 p-0">
      <Aurora />
      <Meteors number={20} className="z-10" />
      <div className="absolute inset-0 z-10" style={{ opacity: 0.4 }}>
        <Lightning
          hue={300}
          xOffset={0}
          speed={0.7}
          intensity={0.6}
          size={0.8}
        />
      </div>

      <motion.div 
        className="relative z-20 min-h-screen flex flex-col items-center justify-center px-4 py-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h1 
          className="text-5xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 bg-clip-text text-transparent animate-pulse"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          My Profiles
        </motion.h1>

        <motion.p 
          className="text-xl text-white/80 mb-16 max-w-2xl text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
        >
          Explore my professional journey and connect with me across platforms
        </motion.p>

        <motion.div 
          className="flex flex-wrap justify-center gap-12 md:gap-16 lg:gap-24 mt-8 max-w-7xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
        >
          {/* LinkedIn Profile */}
          <div className="w-64 h-64 transform hover:scale-105 transition-transform duration-300">
            <PinContainer
              title="LinkedIn"
              href="https://www.linkedin.com/in/divyansh-muley/"
            >
              <div className="flex flex-col items-center justify-center w-[300px] h-[300px] p-4 bg-gradient-to-br from-blue-900/90 to-blue-950/90 rounded-2xl relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 via-blue-600/30 to-blue-600/0 opacity-0 group-hover:opacity-100 transform translate-x-full group-hover:translate-x-[-200%] transition-all duration-1500 ease-in-out"></div>
                <FaLinkedin className="text-blue-400 text-7xl mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">LinkedIn</h3>
                <p className="text-blue-200 text-center relative z-10">
                  Connect with me professionally and explore my career journey
                </p>
                <div className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-700 transition-colors">
                  View Profile
                </div>
              </div>
            </PinContainer>
          </div>

          {/* GitHub Profile */}
          <div className="w-64 h-64 transform hover:scale-105 transition-transform duration-300">
            <PinContainer title="GitHub" href="https://github.com/Divi-1910">
              <div className="flex flex-col items-center justify-center w-[300px] h-[300px] p-4 bg-gradient-to-br from-gray-900/90 to-gray-950/90 rounded-2xl relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-gray-600/0 via-gray-600/30 to-gray-600/0 opacity-0 group-hover:opacity-100 transform translate-x-full group-hover:translate-x-[-200%] transition-all duration-1500 ease-in-out"></div>
                <FaGithub className="text-white text-7xl mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">GitHub</h3>
                <p className="text-gray-300 text-center relative z-10">
                  Check out my projects, contributions, and code repositories
                </p>
                <div className="mt-4 bg-gray-700 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-600 transition-colors">
                  View Repositories
                </div>
              </div>
            </PinContainer>
          </div>

          {/* LeetCode Profile */}
          <div className="w-64 h-64 transform hover:scale-105 transition-transform duration-300">
            <PinContainer
              title="LeetCode"
              href="https://leetcode.com/u/divyansh1910/"
            >
              <div className="flex flex-col items-center justify-center w-[300px] h-[300px] p-4 bg-gradient-to-br from-orange-900/90 to-orange-950/90 rounded-2xl relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-600/0 via-orange-600/30 to-orange-600/0 opacity-0 group-hover:opacity-100 transform translate-x-full group-hover:translate-x-[-200%] transition-all duration-1500 ease-in-out"></div>
                <FaCode className="text-orange-400 text-7xl mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">LeetCode</h3>
                <p className="text-orange-200 text-center relative z-10">
                  Explore my problem-solving skills and coding challenges
                </p>
                <div className="mt-4 bg-orange-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-orange-700 transition-colors">
                  View Solutions
                </div>
              </div>
            </PinContainer>
          </div>
        </motion.div>

        <motion.div 
          className="mt-24 mb-8 relative"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
        >
          <div className="absolute inset-0 blur-xl opacity-30 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 rounded-full"></div>
          <div className="relative bg-black/50 backdrop-blur-sm border border-white/10 rounded-full px-8 py-4 flex items-center shadow-lg hover:border-blue-500/30 transition-all duration-300">
            <FaEnvelope className="text-blue-400 text-xl mr-3 animate-bounce" />
            <p className="text-white text-lg">
              Connect with me at my email:{" "}
              <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                dvmuley10@gmail.com
              </span>
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Profiles;
