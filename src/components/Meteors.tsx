import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { cn } from "../lib/utils";

interface MeteorsProps {
  number?: number;
  className?: string;
}

export const Meteors: React.FC<MeteorsProps> = ({ number = 20, className }) => {
  const [meteorStyles, setMeteorStyles] = useState<Array<React.CSSProperties>>(
    []
  );

  useEffect(() => {
    const updateMeteorStyles = () => {
      const styles = [...new Array(number)].map((_, idx) => {
        const viewportWidth = window.innerWidth;
        const position = (idx / (number - 1)) * viewportWidth; // Evenly distribute across viewport
        const randomOffset = Math.random() * 50 - 25; // Small random offset
        return {
          top: "-40px", // Start above viewport
          left: `calc(${position}px + ${randomOffset}px)`, // Stay within viewport
          animationDelay: `${Math.random() * 2}s`, // Random delay 0-2s
          animationDuration: `${Math.random() * (6 - 3) + 3}s` // Duration 3-6s
        };
      });
      setMeteorStyles(styles);
    };

    updateMeteorStyles();
    window.addEventListener("resize", updateMeteorStyles);

    return () => window.removeEventListener("resize", updateMeteorStyles);
  }, [number]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={cn("absolute inset-0 z-10 overflow-hidden", className)}
    >
      {meteorStyles.map((style, idx) => {
        const colors = ["teal-400", "purple-400"];
        const color = colors[Math.floor(Math.random() * colors.length)];
        return (
          <span
            key={"meteor" + idx}
            style={{ ...style }}
            className={cn(
              "absolute h-1 w-1 rotate-[225deg] animate-meteor-effect rounded-full bg-white shadow-[0_0_8px_2px_rgba(45,212,191,0.9)]",
              color === "purple-400" &&
                "shadow-[0_0_8px_2px_rgba(168,85,247,0.9)]"
            )}
          >
            {/* Primary Trail */}
            <div
              className={cn(
                "absolute top-1/2 -z-10 h-px w-[600px] -translate-y-1/2 bg-gradient-to-r",
                `from-${color} to-transparent`
              )}
            />
            {/* Secondary Trail (longer, fainter) */}
            <div
              className={cn(
                "absolute top-1/2 -z-20 h-px w-[100px] -translate-y-1/2 bg-gradient-to-r",
                `from-${color}/50 to-transparent`
              )}
            />
          </span>
        );
      })}
    </motion.div>
  );
};
