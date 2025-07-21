import Aurora from "../components/Aurora";
import GlitchText from "../components/GlitchText";
import { IconCloud } from "../components/IconCloud";
import Lightning from "../components/Lighting";
import { Meteors } from "../components/Meteors";
import { motion } from "framer-motion";

const slugs = [
  "typescript",
  "javascript",
  "java",
  "react",
  "html5",
  "css3",
  "nodedotjs",
  "mongoDb",
  "c",
  "cplusplus",
  "amazonaws",
  "go",
  "redis",
  "python",
  "tailwindcss",
  "prisma",
  "git",
  "github",
  "bitbucket",
  "turborepo",
  "dbt",
  "snowflake",
  "docker",
  "kubernetes",
  "postgresql",
  "mysql",
  "linux",
  "leetcode",
  "openai",
  "ollama"
];

function Skills() {
  const images = slugs.map((slug) => `https://cdn.simpleicons.org/${slug}`);

  const skills = {
    SKILLS: [
      {
        category: "Languages",
        items: [
          "C",
          "C++",
          "Java",
          "Python",
          "Golang",
          "Javascript",
          "Typescript"
        ]
      },
      {
        category: "Technologies",
        items: ["React", "Node", "Express", "Tailwind", "Prisma", "Recoil"]
      },
      {
        category: "Tools",
        items: [
          "Git",
          "GitHub",
          "Bitbucket",
          "Docker",
          "Kubernetes",
          "TurboRepo",
          "Redis"
        ]
      },
      {
        category: "Databases",
        items: ["PostgreSQL", "MySQL", "MongoDB", "Snowflake"]
      },
      { category: "Cloud", items: ["Amazon Web Services(AWS)"] }
    ]
  };

  return (
    <div className="min-h-screen overflow-x-hidden">
      <div className="fixed inset-0 z-0">
        <Aurora />
        <Meteors number={20} className="z-10" />
      </div>
      <motion.div
        className="relative z-20 flex flex-col md:flex-row h-screen overflow-y-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.div
          className="w-full md:w-1/2 flex items-center justify-center py-8 md:py-0"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <div className="w-[90%] h-[300px] md:h-[90%] max-w-[1000px] max-h-[800px]">
            <IconCloud images={images} />
          </div>
        </motion.div>
        <motion.div
          className="w-full md:w-1/2 p-4 md:p-8 flex flex-col justify-center"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
        >
          <GlitchText
            speed={1}
            enableShadows={true}
            enableOnHover={true}
            className="text-center md:text-left mb-4 md:mb-0"
          >
            SKILLS
          </GlitchText>
          <div className="space-y-6 z-40 pb-20 md:pb-0">
            {skills["SKILLS"].map((section, index) => (
              <div key={index}>
                <h2 className="text-lg md:text-xl font-semibold text-teal-400 mb-2 text-center md:text-left">
                  {section.category}
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
                  {section.items.map((skill, idx) => (
                    <button
                      key={idx}
                      className="bg-gray-900/80 border border-teal-500/30 rounded-lg px-3 py-1 text-white text-xs sm:text-sm hover:bg-teal-500/20 hover:border-teal-500/50 transition-all duration-300 shadow-[0_0_8px_rgba(16,185,129,0.3)] hover:shadow-[0_0_12px_rgba(16,185,129,0.5)]"
                    >
                      {skill}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Skills;
