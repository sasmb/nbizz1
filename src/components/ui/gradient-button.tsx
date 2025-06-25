"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface GradientButtonProps {
  children: ReactNode;
  onClick?: () => void;
  href?: string;
  className?: string;
  size?: "sm" | "md" | "lg";
  variant?: "primary" | "secondary" | "accent";
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  showArrow?: boolean;
}

const sizeClasses = {
  sm: "px-6 py-3 text-sm",
  md: "px-8 py-4 text-base",
  lg: "px-12 py-6 text-lg"
};

const gradientVariants = {
  primary: {
    gradient: "from-blue-500 via-purple-500 to-pink-500",
    hoverGradient: "group-hover:from-blue-600 group-hover:via-purple-600 group-hover:to-pink-600",
    underline: "from-blue-500 to-purple-500"
  },
  secondary: {
    gradient: "from-emerald-500 via-teal-500 to-cyan-500",
    hoverGradient: "group-hover:from-emerald-600 group-hover:via-teal-600 group-hover:to-cyan-600",
    underline: "from-emerald-500 to-teal-500"
  },
  accent: {
    gradient: "from-orange-500 via-red-500 to-pink-500",
    hoverGradient: "group-hover:from-orange-600 group-hover:via-red-600 group-hover:to-pink-600",
    underline: "from-orange-500 to-red-500"
  }
};

export function GradientButton({
  children,
  onClick,
  className,
  size = "md",
  variant = "primary",
  disabled = false,
  type = "button",
  showArrow = true
}: GradientButtonProps) {
  const variantStyles = gradientVariants[variant];
  
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
      className={cn("inline-block group", className)}
    >
      <div className={cn(
        "relative p-[2px] bg-gradient-to-r rounded-2xl transition-all duration-300",
        variantStyles.gradient,
        variantStyles.hoverGradient
      )}>
        <Button
          variant="ghost"
          size="lg"
          onClick={onClick}
          disabled={disabled}
          type={type}
          className={cn(
            "relative rounded-[14px] font-semibold",
            "bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800",
            "text-slate-900 dark:text-white transition-all duration-300",
            "group-hover:-translate-y-1 group-hover:shadow-2xl",
            "border-0 backdrop-blur-sm",
            sizeClasses[size],
            disabled && "opacity-50 cursor-not-allowed"
          )}
        >
          <motion.span 
            className="flex items-center gap-3"
            whileHover={{ x: 2 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <span className="relative">
              {children}
              <motion.span
                className={cn(
                  "absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r group-hover:w-full transition-all duration-300",
                  variantStyles.underline
                )}
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
              />
            </span>
            {showArrow && (
              <motion.span
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="text-xl"
              >
                →
              </motion.span>
            )}
          </motion.span>
        </Button>
      </div>
    </motion.div>
  );
}

export function GradientButtonLink({
  children,
  href,
  className,
  size = "md",
  variant = "primary",
  showArrow = true,
  external = false
}: GradientButtonProps & { external?: boolean }) {
  const variantStyles = gradientVariants[variant];
  
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
      className={cn("inline-block group", className)}
    >
      <div className={cn(
        "relative p-[2px] bg-gradient-to-r rounded-2xl transition-all duration-300",
        variantStyles.gradient,
        variantStyles.hoverGradient
      )}>
        <a
          href={href}
          target={external ? "_blank" : undefined}
          rel={external ? "noopener noreferrer" : undefined}
          className={cn(
            "relative rounded-[14px] font-semibold inline-flex items-center",
            "bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800",
            "text-slate-900 dark:text-white transition-all duration-300",
            "group-hover:-translate-y-1 group-hover:shadow-2xl",
            "border-0 backdrop-blur-sm",
            sizeClasses[size]
          )}
        >
          <motion.span 
            className="flex items-center gap-3"
            whileHover={{ x: 2 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <span className="relative">
              {children}
              <motion.span
                className={cn(
                  "absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r group-hover:w-full transition-all duration-300",
                  variantStyles.underline
                )}
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
              />
            </span>
            {showArrow && (
              <motion.span
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="text-xl"
              >
                →
              </motion.span>
            )}
          </motion.span>
        </a>
      </div>
    </motion.div>
  );
} 