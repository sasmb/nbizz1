"use client";
import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

export const MenuItem = ({
  setActive,
  active,
  item,
  children,
}: {
  setActive: (item: string) => void;
  active: string | null;
  item: string;
  children?: React.ReactNode;
}) => {
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setActive(item);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActive("");
    }, 150);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <div 
      onMouseEnter={handleMouseEnter} 
      onMouseLeave={handleMouseLeave}
      className="relative"
    >
      <motion.p
        transition={{ duration: 0.3 }}
        className="cursor-pointer text-black hover:opacity-[0.9] dark:text-white text-sm md:text-base"
      >
        {item}
      </motion.p>
      {active !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}
          className="absolute top-[calc(100%_+_0.5rem)] left-1/2 transform -translate-x-1/2 w-auto max-w-sm sm:max-w-md"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {active === item && (
            <motion.div
              transition={transition}
              layoutId="active"
              className="bg-white dark:bg-black backdrop-blur-sm rounded-xl overflow-hidden border border-black/[0.2] dark:border-white/[0.2] shadow-xl z-50 relative mx-2 sm:mx-0"
              style={{ pointerEvents: 'auto' }}
            >
              <motion.div
                layout
                className="w-full h-full p-3"
              >
                {children}
              </motion.div>
            </motion.div>
          )}
        </motion.div>
      )}
    </div>
  );
};

export const Menu = ({
  setActive,
  children,
}: {
  setActive: (item: string | null) => void;
  children: React.ReactNode;
}) => {
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActive(null);
    }, 300);
  };

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <nav
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      className="relative rounded-full border border-transparent dark:bg-black dark:border-white/[0.2] bg-white shadow-input flex justify-center space-x-2 sm:space-x-4 px-4 sm:px-8 py-4 sm:py-6 text-sm sm:text-base"
    >
      {children}
    </nav>
  );
};

export const ProductItem = ({
  title,
  description,
  href,
  src,
}: {
  title: string;
  description: string;
  href: string;
  src: string;
}) => {
  return (
    <Link href={href} className="flex space-x-3 hover:bg-gray-50 dark:hover:bg-gray-800 p-3 rounded-lg transition-colors group w-full">
      <Image
        src={src}
        width={60}
        height={40}
        alt={title}
        className="w-12 h-8 sm:w-15 sm:h-10 object-cover rounded-md shadow-sm flex-shrink-0"
      />
      <div className="flex-1 min-w-0 overflow-hidden">
        <h4 className="text-sm font-semibold mb-1 text-black dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors truncate">
          {title}
        </h4>
        <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-tight overflow-hidden">
          <span className="line-clamp-2 sm:line-clamp-3">
            {description}
          </span>
        </p>
      </div>
    </Link>
  );
};

export const HoveredLink = ({ children, ...rest }: any) => {
  return (
    <Link
      {...rest}
      className="text-sm text-neutral-700 dark:text-neutral-200 hover:text-black hover:bg-gray-50 dark:hover:bg-gray-800 px-3 py-2 rounded-lg transition-colors block truncate"
    >
      {children}
    </Link>
  );
}; 