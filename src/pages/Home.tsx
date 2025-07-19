import Aurora from "../components/Aurora";
import { ColourfulText } from "../components/ColorfulText";
import { ContainerTextFlip } from "../components/Container-text-flip";
import { Meteors } from "../components/Meteors";
import ProfileCard from "../components/ProfileCard/ProfileCard";
import avatarImage from "../assets/my-avatar.jpeg";
import { motion } from "framer-motion";
import Lightning from "../components/Lighting";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen w-full bg-black font-sans relative m-0 p-0">
      <Aurora />
      <Meteors number={20} className="z-10" />
      <div className="absolute inset-0 z-10" style={{ opacity: 0.4 }}>
        <Lightning hue={0} xOffset={0} speed={0.7} intensity={0.6} size={0.8} />
      </div>
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-col md:flex-row items-center justify-between min-h-[90vh] text-white relative z-20 container mx-auto px-6 gap-12"
      >
        <div className="flex flex-col items-center md:items-start md:w-3/5 space-y-6 text-center md:text-left">
          <h1 className="text-2xl md:text-3xl font-semibold drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
            Hello From
          </h1>
          <ColourfulText
            text="Divyansh Muley"
            className="text-4xl md:text-6xl"
          />
          <span className="text-xl md:text-2xl text-teal-400 drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]">
            I am a
          </span>
          <ContainerTextFlip
            words={[
              "Software Engineer",
              "Software Developer",
              "Full Stack Engineer",
              "Backend Engineer"
            ]}
            interval={2500}
            animationDuration={600}
            className="mt-2 text-2xl md:text-3xl"
          />
          <p className="text-base md:text-lg text-gray-300 max-w-md mx-auto md:mx-0">
            I love to Build innovative solutions using code and creativity.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mt-6">
            <a
              href="/Divi/#/projects"
              className="bg-gradient-to-r from-teal-500 to-purple-600 text-white px-6 py-3 rounded-lg hover:from-teal-600 hover:to-purple-700 transition shadow-[0_4px_12px_rgba(16,185,129,0.5)] hover:scale-105"
            >
              View Projects
            </a>
            <a
              href="/Divi/#/profiles"
              className="bg-gradient-to-r from-gray-800 to-gray-900 text-white px-6 py-3 rounded-lg hover:from-gray-900 hover:to-gray-950 transition shadow-[0_4px_12px_rgba(0,0,0,0.5)] hover:scale-105"
            >
              Contact Me
            </a>
          </div>
        </div>
        <div className="w-full md:w-2/5 flex justify-center md:justify-end">
          <ProfileCard
            avatarUrl={avatarImage}
            name="Divyansh Muley"
            className="max-w-sm"
            enableTilt={true}
          />
        </div>
      </motion.section>
    </div>
  );
};

export default Home;
