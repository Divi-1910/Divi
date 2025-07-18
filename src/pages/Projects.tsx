import Aurora from "../components/Aurora";
import Lightning from "../components/Lighting";
import { Meteors } from "../components/Meteors";
import { TracingBeam } from "../components/TraceLine";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Content = [
  {
    title: "Codellosium : A Warrior's Coding colosseum",
    description: (
      <>
        <p>
          Codellosium is a full-stack, microservices-based competitive coding
          platform designed with a scalable and secure architecture in mind. It
          features a real-time Coding Playground with Docker-based sandboxed
          code execution, a Coding Arena for solving problems with automated
          test case validation. The system uses Redis with BullMQ for job
          queuing, web sockets(Socket.io) for real-time notifications, and
          JWT-based authentication for secure access. Built with a monorepo
          structure using Turborepo, it follows clean separation of services
          (Auth, Problem, Submission, Worker, Notification) and leverages React,
          Node.js, MongoDB, and Docker Compose for a robust and modular
          deployment.
        </p>
      </>
    ),
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    Tech: [
      "TurboRepo",
      "React",
      "Tailwind",
      "Node",
      "Express",
      "MongoDB",
      "BullMQ",
      "Docker",
      "WebSocket"
    ],
    github: "https://github.com/Divi-1910/Codellosium"
  },
  {
    title: "GreytLeave : Leave WorkFlow Management System",
    description: (
      <>
        <p>
          Developed and launched a scalable Leave Management System, designed to
          streamline leave workflows, multi-level approval processes, and
          real-time notifications. Integrated multi-factor authentication using
          OTP, JWT, and Google OAuth, alongside strict role-based access control
          (RBAC) to ensure enterprise-grade security. Enhanced user experience
          by incorporating React-Big-Calendar for intuitive leave tracking and
          optimized public holiday retrieval with Redis caching, improving
          response times by 60%.
        </p>
      </>
    ),
    image:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    Tech: [
      "React",
      "Tailwind",
      "Node",
      "Express",
      "Postgres",
      "AWS S3",
      "OAuth"
    ],
    github: "https://github.com/Divi-1910/greytLeave-frontend"
  },
  {
    title: "DivDraw.io : An Artist's Whiteboarding Tool",
    description: (
      <>
        <p>
          Developed an interactive hand-feel whiteboard using React.js and
          Rough.js. Features include drawing tools (brush, lines, rectangles,
          circles, arrows), eraser, undo-redo, PNG download, and an intuitive
          toolbar for color, fill style, and size adjustments, enhanced with
          responsive design and smooth animations.
        </p>
      </>
    ),
    image:
      "https://images.unsplash.com/photo-1626785774573-4b799315345d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
    Tech: ["React", "ContextAPI", "Canvas", "Tailwind"],
    github: "https://github.com/Divi-1910/DivDraw.io",
    demo: "https://div-draw-io.vercel.app/"
  }
];

function Projects() {
  return (
    <div className="bg-black">
      <div className="fixed inset-0 z-0">
        <Aurora />
        <Meteors number={20} className="z-10" />
      </div>
      <div className="fixed inset-0 z-10" style={{ opacity: 0.4 }}>
        <Lightning
          hue={180}
          xOffset={0}
          speed={0.7}
          intensity={0.6}
          size={0.8}
        />
      </div>
      <motion.div
        className="relative z-20 container mx-auto p-8 min-h-screen"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="text-5xl font-bold text-white mb-6 text-center bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
          My Projects
        </h1>
        <p className="text-xl text-white/70 text-center mb-12 max-w-2xl mx-auto">
          A showcase of my technical projects and applications built with modern
          technologies
        </p>

        <TracingBeam className="px-6">
          <div className="max-w-4xl mx-auto antialiased pt-4 relative">
            {Content.map((item, index) => (
              <motion.div
                key={`content-${index}`}
                className="mb-32"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <div className="bg-gradient-to-br from-gray-900 to-gray-950 rounded-xl overflow-hidden border border-white/10 shadow-xl hover:shadow-purple-500/20 transition-all duration-300 group">
                  {/* Project Image with Overlay */}
                  <div className="relative overflow-hidden">
                    <img
                      src={item.image}
                      alt={`${item.title} thumbnail`}
                      className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70"></div>

                    {/* Project Title Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h2 className="text-3xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                        {item.title}
                      </h2>

                      {/* Tech Stack Pills */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {item.Tech.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="bg-black/50 backdrop-blur-sm text-white/80 px-3 py-1 rounded-full text-xs font-medium border border-white/10"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Project Description */}
                  <div className="p-6">
                    <div className="text-white/80 text-lg">
                      {item.description}
                    </div>

                    {/* Project Links */}
                    <div className="mt-6 flex gap-4">
                      <a
                        href={item.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-lg transition-colors"
                      >
                        <FaGithub /> View Code
                      </a>
                      {item.demo && (
                        <a
                          href={item.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-4 py-2 rounded-lg transition-colors"
                        >
                          <FaExternalLinkAlt /> Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </TracingBeam>
      </motion.div>
    </div>
  );
}

export default Projects;
