"use client";

import { motion } from "framer-motion";

export const Logo = ({ className }: { className?: string }) => {
  return (
    <div className={className}>
      <svg
        width="40"
        height="40"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="overflow-visible"
      >
        <defs>
          <linearGradient
            id="logo-gradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#FFE600" />
            <stop offset="50%" stopColor="#FFFFFF" />
            <stop offset="100%" stopColor="#FFE600" />
          </linearGradient>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="4" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Central Hexagon Core */}
        <motion.path
          d="M50 20 L80 35 L80 65 L50 80 L20 65 L20 35 Z"
          stroke="url(#logo-gradient)"
          strokeWidth="4"
          fill="rgba(255, 230, 0, 0.05)"
          filter="url(#glow)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />

        {/* Internal Circuitry / 'M' Shape Abstract */}
        <motion.path
          d="M35 45 L50 60 L65 45 M50 60 L50 35"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
        />

        {/* Orbiting Data Nodes */}
        <motion.circle
          cx="50"
          cy="20"
          r="3"
          fill="#FFE600"
          animate={{
            rotate: 360,
            transformOrigin: "50px 50px",
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.circle
          cx="50"
          cy="80"
          r="3"
          fill="#FFFFFF"
          animate={{
            rotate: 360,
            transformOrigin: "50px 50px",
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "linear",
            delay: 2, // Offset for balance
          }}
        />
      </svg>
    </div>
  );
};
