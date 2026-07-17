"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronDown, FiSliders } from "react-icons/fi";

const sortOptions = [
  { label: "Popular", value: "popular" },
  { label: "Rating", value: "rating" },
  { label: "Delivery Time", value: "delivery_time" },
  { label: "Alphabetical (A-Z)", value: "a-z" },
  { label: "Newest", value: "newest" },
];

export default function StoreSort() {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(sortOptions[0]);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <section className="pb-10 select-none">
      <div className="mx-auto flex max-w-7xl justify-end px-6">
        <div ref={dropdownRef} className="relative z-30">
          
          {/* Custom Trigger Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`flex items-center gap-3 rounded-xl border bg-white/80 px-5 py-3 text-sm font-semibold tracking-tight text-gray-700 backdrop-blur-md transition-all duration-300 hover:border-violet-200 hover:bg-white hover:text-violet-600 hover:shadow-sm ${
              isOpen ? "border-violet-500 ring-2 ring-violet-500/10 text-violet-600" : "border-gray-100"
            }`}
          >
            <FiSliders className={`text-base transition-colors duration-200 ${isOpen ? "text-violet-600" : "text-gray-400"}`} />
            <span>Sort by: <span className="font-bold text-gray-900 group-hover:text-violet-600">{selected.label}</span></span>
            <FiChevronDown className={`text-base text-gray-400 transition-transform duration-300 ${isOpen ? "rotate-180 text-violet-600" : ""}`} />
          </button>

          {/* Animated Options Menu */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: 8, scale: 0.95 }}
                animate={{ opacity: 1, y: 4, scale: 1 }}
                exit={{ opacity: 0, y: 8, scale: 0.95 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="absolute right-0 mt-2 w-56 origin-top-right rounded-xl border border-gray-100 bg-white p-1.5 shadow-xl backdrop-blur-xl"
              >
                {sortOptions.map((option) => {
                  const isSelected = selected.value === option.value;
                  return (
                    <button
                      key={option.value}
                      onClick={() => {
                        setSelected(option);
                        setIsOpen(false);
                      }}
                      className={`w-full rounded-lg px-4 py-2.5 text-left text-sm font-medium transition-all duration-200 flex items-center justify-between ${
                        isSelected
                          ? "bg-violet-50 text-violet-600 font-bold"
                          : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                      }`}
                    >
                      {option.label}
                      {isSelected && (
                        <span className="h-1.5 w-1.5 rounded-full bg-violet-600" />
                      )}
                    </button>
                  );
                })}
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </div>
    </section>
  );
}