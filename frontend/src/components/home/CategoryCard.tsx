"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

interface Props {
  name: string;
  emoji: string;
  color: string;
  count: string; // Add this!
}

export default function CategoryCard({ name, emoji, color, count }: Props) {
  return (
    <Link href={`/category/${name.toLowerCase()}`}>
      <motion.div
        whileHover={{ y: -5 }}
        whileTap={{ scale: 0.98 }}
        className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-gray-100 bg-white p-6 shadow-sm transition-all hover:border-gray-200 hover:shadow-lg"
      >
        {/* Background Accent */}
        <div className={`absolute inset-0 z-0 opacity-0 transition-opacity duration-300 group-hover:opacity-10 ${color}`} />

        {/* Emoji Container */}
        <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-gray-50 text-3xl shadow-inner transition-transform duration-500 group-hover:rotate-12">
          {emoji}
        </div>

        {/* Text Content */}
        <div className="relative z-10 mt-6 flex-grow">
          <h3 className="text-lg font-bold text-gray-900">{name}</h3>
          <p className="mt-1 text-sm font-medium text-gray-400">{count} Items</p>
        </div>

        {/* Bottom Bar */}
        <div className="relative z-10 mt-6 flex items-center justify-between text-sneakup-purple font-bold text-sm">
          <span>Explore</span>
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-50 transition-colors group-hover:bg-sneakup-purple group-hover:text-white">
            <FiArrowRight />
          </div>
        </div>
      </motion.div>
    </Link>
  );
}