"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Book, Github, Languages, Moon } from "lucide-react";
import { Button } from "./ui/Button";

export default function Header() {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "circOut" }}
      className="fixed top-0 right-0 left-0 z-50 flex items-center justify-between border-b border-white/5 bg-[#030305]/50 px-6 py-4 backdrop-blur-md"
    >
      <div className="flex items-center gap-4">
        <span className="font-heading text-xl font-bold tracking-tight text-white">
          MaaEnd
        </span>
      </div>

      <nav className="hidden items-center gap-6 md:flex">
        <Link
          href="https://github.com/MaaEnd/MaaEnd"
          className="flex items-center gap-2 font-mono text-sm transition-colors hover:text-[#FFE600]"
        >
          <Github size={16} /> GITHUB
        </Link>
        <Link
          href="#"
          className="mr-4 flex items-center gap-2 font-mono text-sm transition-colors hover:text-[#FFE600]"
        >
          <Book size={16} /> DOCS
        </Link>

        <div className="flex items-center gap-2 border-l border-white/10 pl-6">
          <Button
            variant="outline"
            className="h-9 w-9 rounded-full border-white/10 p-0 hover:border-[#FFE600] hover:text-[#FFE600]"
          >
            <Languages size={16} />
          </Button>
          <Button
            variant="outline"
            className="h-9 w-9 rounded-full border-white/10 p-0 hover:border-[#FFE600] hover:text-[#FFE600]"
          >
            <Moon size={16} />
          </Button>
        </div>
      </nav>
    </motion.header>
  );
}
