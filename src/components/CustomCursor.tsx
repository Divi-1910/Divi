import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const updateCursorPosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const updateCursorStyle = () => {
      const hoveredElements = document.querySelectorAll("a, button, [role='button'], input, select, textarea, [tabindex]:not([tabindex='-1'])");
      
      const isHovering = Array.from(hoveredElements).some(el => {
        const rect = el.getBoundingClientRect();
        return (
          position.x >= rect.left &&
          position.x <= rect.right &&
          position.y >= rect.top &&
          position.y <= rect.bottom
        );
      });
      
      setIsPointer(isHovering);
    };

    window.addEventListener("mousemove", updateCursorPosition);
    
    const interval = setInterval(updateCursorStyle, 100);

    // Add global style to hide default cursor
    document.body.style.cursor = "none";
    
    return () => {
      window.removeEventListener("mousemove", updateCursorPosition);
      clearInterval(interval);
      document.body.style.cursor = "auto";
    };
  }, [position]);

  return (
    <>
      {/* Main dot cursor */}
      <motion.div
        className="fixed pointer-events-none z-50"
        style={{
          left: position.x,
          top: position.y,
        }}
        animate={{
          scale: isPointer ? 1.5 : 1,
        }}
        transition={{ duration: 0.2 }}
      >
        <div className="relative">
          {/* Star cursor */}
          <div className="absolute -translate-x-1/2 -translate-y-1/2">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path 
                d="M12 0L14.59 8.26L23.41 8.26L16.41 13.48L19.03 21.74L12 16.52L4.97 21.74L7.59 13.48L0.59 8.26L9.41 8.26L12 0Z" 
                fill="white" 
                fillOpacity={isPointer ? "0.8" : "0.5"}
              />
            </svg>
          </div>
          
          {/* Inner dot */}
          <div 
            className={`absolute w-1.5 h-1.5 bg-white rounded-full -translate-x-1/2 -translate-y-1/2 ${
              isPointer ? "bg-blue-400" : "bg-white"
            }`}
          />
        </div>
      </motion.div>
    </>
  );
};

export default CustomCursor;