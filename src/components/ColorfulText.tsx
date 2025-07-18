import React from "react";
import { motion } from "framer-motion";
import { cn } from "../lib/utils";

interface ColourfulTextProps {
  text: string;
  className?: string;
}

export const ColourfulText: React.FC<ColourfulTextProps> = ({
  text,
  className
}) => {
  return (
    <motion.div
      className={cn(
        "inline-block text-4xl md:text-6xl font-extrabold",
        "bg-gradient-to-r from-teal-400 via-purple-400 to-blue-900 text-transparent bg-clip-text",
        className
      )}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      {text.split("").map((letter, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            delay: index * 0.1,
            duration: 0.5,
            ease: "easeOut"
          }}
        >
          {letter}
        </motion.span>
      ))}
    </motion.div>
  );
};
