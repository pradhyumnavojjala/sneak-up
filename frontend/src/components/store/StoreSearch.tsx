"use client";

import { useState } from "react";
import { FiSearch, FiX } from "react-icons/fi";

export default function StoreSearch() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <section className="pb-8 select-none">
      <div className="mx-auto max-w-7xl px-6">
        
        {/* Main Search Interactive Wrapper */}
        <div className="group relative flex items-center rounded-2xl border border-gray-100 bg-white/80 p-1.5 shadow-sm backdrop-blur-md transition-all duration-300 focus-within:border-violet-500 focus-within:ring-4 focus-within:ring-violet-500/5 hover:border-gray-200 hover:shadow-md">
          
          {/* Left Magnifying Icon */}
          <div className="flex h-12 w-12 items-center justify-center rounded-xl text-gray-400 transition-colors duration-300 group-focus-within:text-violet-600">
            <FiSearch className="text-xl" />
          </div>

          {/* Core Input Field */}
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search stores, brands, or dishes..."
            className="w-full bg-transparent py-3 pr-4 text-base font-medium text-gray-800 placeholder-gray-400 outline-none"
          />

          {/* Right Action: Clear Button (Only shows when user typing) */}
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="mr-1.5 flex h-9 w-9 items-center justify-center rounded-lg text-gray-400 transition-all duration-200 hover:bg-gray-50 hover:text-gray-600 active:scale-95"
              aria-label="Clear search input"
            >
              <FiX className="text-lg" />
            </button>
          )}

        </div>

      </div>
    </section>
  );
}