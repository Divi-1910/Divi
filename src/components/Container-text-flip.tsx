import React, { useState, useEffect, useId } from "react";
import { motion } from "framer-motion";
import { cn } from "../lib/utils";

export interface ContainerTextFlipProps {
  words?: string[];
  interval?: number;
  className?: string;
  textClassName?: string;
  animationDuration?: number;
}

export function ContainerTextFlip({
  words = [
    "Software Engineer",
    "Software Developer",
    "Full Stack Engineer",
    "Backend Engineer"
  ],
  interval = 3000,
  className,
  textClassName,
  animationDuration = 700
}: ContainerTextFlipProps) {
  const id = useId();
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [width, setWidth] = useState(100);
  const textRef = React.useRef(null);

  const updateWidthForWord = () => {
    if (textRef.current) {
      // @ts-ignore
      const textWidth = textRef.current.scrollWidth + 40; // Increased padding
      setWidth(textWidth);
    }
  };

  useEffect(() => {
    updateWidthForWord();
  }, [currentWordIndex]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, interval);

    return () => clearInterval(intervalId);
  }, [words, interval]);

  return (
    <motion.p
      layout
      layoutId={`words-here-${id}`}
      animate={{ width }}
      transition={{ duration: animationDuration / 2000, ease: "easeInOut" }}
      className={cn(
        "relative inline-block rounded-lg px-4 py-3 text-center text-3xl md:text-5xl font-bold",
        "bg-gradient-to-r from-teal-500 to-purple-500 text-transparent bg-clip-text",
        "shadow-[0_0_10px_rgba(16,185,129,0.8),0_0_20px_rgba(168,85,247,0.6)]",
        className
      )}
      key={words[currentWordIndex]}
    >
      <motion.div
        transition={{ duration: animationDuration / 1000, ease: "easeInOut" }}
        className={cn("inline-block", textClassName)}
        ref={textRef}
        layoutId={`word-div-${words[currentWordIndex]}-${id}`}
      >
        <motion.div
          className="inline-block"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: animationDuration / 1000, ease: "easeOut" }}
        >
          {words[currentWordIndex].split("").map((letter, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, filter: "blur(8px)", y: 20 }}
              animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
              transition={{
                delay: index * 0.05,
                duration: animationDuration / 2000,
                ease: "easeOut"
              }}
              className="text-white"
            >
              {letter}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>
    </motion.p>
  );
}
