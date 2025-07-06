"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface GradientButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

const GradientButton = ({
  children,
  className = "",
  ...props
}: GradientButtonProps) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      className={`
        relative inline-flex items-center justify-center gap-2
        px-6 py-3 rounded-lg font-semibold text-white
        bg-gradient-to-r from-blue-500 via-purple-500 to-purple-600
        shadow-lg shadow-blue-500/40 hover:shadow-purple-500/40
        transition-all duration-300 ease-in-out
        overflow-hidden
        group ${className}
      `}
      {...props}
    >
      {/* Background overlay for a deeper look */}
      <span className="absolute inset-0 w-full h-full bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></span>

      {/* Sweeping shine effect on hover */}
      <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"></span>

      {/* Button Content */}
      <span className="relative z-10">{children}</span>
      <motion.div
        className="relative z-10 transition-transform duration-300 ease-in-out"
        // Animate arrow on parent hover
        animate={{ x: 0 }}
        whileHover={{ x: 4 }}
      >
        <ArrowRight size={20} />
      </motion.div>
    </motion.button>
  );
};

export default GradientButton;
