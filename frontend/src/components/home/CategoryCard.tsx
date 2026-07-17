"use client";

import { motion } from "framer-motion";

interface Props {
  name: string;
  emoji: string;
  color: string;
}

export default function CategoryCard({
  name,
  emoji,
  color,
}: Props) {
  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.03,
      }}
      transition={{ duration: 0.2 }}
      className="group cursor-pointer rounded-3xl border border-gray-100 bg-white p-6 shadow-sm transition hover:border-sneakup-purple/20 hover:shadow-xl"
    >
      <div
        className={`mx-auto flex h-24 w-24 items-center justify-center rounded-full ${color}`}
      >
        <span className="text-5xl transition duration-300 group-hover:scale-110">
          {emoji}
        </span>
      </div>

      <h3 className="mt-5 text-center text-lg font-semibold text-sneakup-dark">
        {name}
      </h3>

      <p className="mt-2 text-center text-sm text-gray-500 opacity-0 transition duration-300 group-hover:opacity-100">
        Explore →
      </p>
    </motion.div>
  );
}