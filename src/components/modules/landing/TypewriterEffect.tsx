"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface TypewriterEffectProps {
  className?: string;
  cursorClassName?: string;
}

export const TypewriterEffect: React.FC<TypewriterEffectProps> = ({
  className,
  cursorClassName,
}) => {
  const words = [
    {
      text: "Run",
    },
    {
      text: "your",
    },
    {
      text: "agency",
    },
    {
      text: "in",
    },
    {
      text: "just",
    },
    {
      text: "one",
    },
    {
      text: "place.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];

  const wordsArray = words.map((word) => {
    return {
      ...word,
      text: word.text.split(""),
    };
  });

  return (
    <div className={cn("flex justify-center items-center space-x-1", className)}>
      <motion.div
        className="overflow-hidden pb-2"
        initial={{
          width: "0%",
        }}
        whileInView={{
          width: "fit-content",
        }}
        transition={{
          duration: 2,
          ease: "linear",
          delay: 1,
        }}
      >
        <div className="text-base text-center font-medium whitespace-nowrap">
          {wordsArray.map((word, idx) => (
            <span key={`word-${idx}`} className="inline-block">
              {word.text.map((char, index) => (
                <motion.span 
                  key={`char-${index}`} 
                  className={cn("inline-block", word.className)}
                >
                  {char}
                </motion.span>
              ))}
              &nbsp;
            </span>
          ))}
        </div>
      </motion.div>
      <motion.span
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className={cn(
          "block rounded-sm w-[2.5px] h-6 bg-primary",
          cursorClassName
        )}
      />
    </div>
  );
};
