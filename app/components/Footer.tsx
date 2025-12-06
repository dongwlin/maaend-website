"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/5 bg-[#030305] py-20">
      {/* Marquee */}
      <div className="group relative mb-16 flex overflow-x-hidden">
        <motion.div
          className="flex gap-12 whitespace-nowrap"
          animate={{ x: [0, -1000] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        >
          {[...Array(4)].map((_, i) => (
            <span
              key={i}
              className="font-syne stroke-text cyber-gradient-text text-[8vw] font-bold text-transparent opacity-30 transition-opacity duration-300 hover:opacity-100"
            >
              LET&apos;S AUTOMATE THE FUTURE OF ARKNIGHTS
            </span>
          ))}
        </motion.div>
      </div>

      <div className="container mx-auto grid grid-cols-1 gap-12 px-6 md:grid-cols-4">
        <div className="col-span-2">
          <h3 className="font-heading mb-4 text-2xl">MaaEnd</h3>
          <p className="max-w-sm text-white/50">
            An advanced AI automation assistant for Endfield. Open source,
            secure, and highly efficient.
          </p>
        </div>
        <div>
          <h4 className="mb-4 font-mono text-[#FFE600]">RESOURCES</h4>
          <ul className="space-y-2 text-sm text-white/70">
            <li>
              <a href="#" className="transition-colors hover:text-[#FFE600]">
                Documentation
              </a>
            </li>
            <li>
              <a href="#" className="transition-colors hover:text-[#FFE600]">
                API Reference
              </a>
            </li>
            <li>
              <a href="#" className="transition-colors hover:text-[#FFE600]">
                Community Guide
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="mb-4 font-mono text-white">PROJECT</h4>
          <ul className="space-y-2 text-sm text-white/70">
            <li>
              <a href="#" className="transition-colors hover:text-[#FFE600]">
                GitHub
              </a>
            </li>
            <li>
              <a href="#" className="transition-colors hover:text-[#FFE600]">
                Releases
              </a>
            </li>
            <li>
              <a href="#" className="transition-colors hover:text-[#FFE600]">
                Issues
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-20 text-center font-mono text-xs text-white/20">
        © {new Date().getFullYear()} MaaEnd TEAM. OPEN SOURCE UNDER AGPL-3.0.
      </div>
    </footer>
  );
}
