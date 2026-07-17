"use client";

import { useState } from "react";

const filterCategories = [
  { id: "all", label: "All", icon: "✨" },
  { id: "groceries", label: "Groceries", icon: "🛒" },
  { id: "restaurants", label: "Restaurants", icon: "🍽️" },
  { id: "cafe", label: "Cafe", icon: "☕" },
  { id: "bakery", label: "Bakery", icon: "🥐" },
  { id: "desserts", label: "Desserts", icon: "🍩" },
  { id: "drinks", label: "Drinks", icon: "🥤" },
  { id: "pharmacy", label: "Pharmacy", icon: "💊" },
  { id: "frozen", label: "Frozen", icon: "❄️" },
];

export default function StoreFilters() {
  const [activeFilter, setActiveFilter] = useState("all");

  return (
    <section className="pb-8 select-none">
      <div className="mx-auto max-w-7xl px-6">
        
        {/* Scrollable Track (Hides Scrollbar cleanly) */}
        <div className="flex items-center gap-3 overflow-x-auto pb-4 pt-2 [-ms-overflow-style:'none'] [scrollbar-width:'none'] [&::-webkit-scrollbar]:hidden">
          
          {filterCategories.map((category) => {
            const isActive = activeFilter === category.id;
            
            return (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`group flex shrink-0 items-center gap-2 rounded-2xl border px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${
                  isActive
                    ? "border-transparent bg-violet-600 text-white shadow-md shadow-violet-500/25"
                    : "border-gray-100 bg-white text-gray-600 hover:border-violet-200 hover:bg-violet-50 hover:text-violet-700 hover:shadow-sm"
                }`}
              >
                {/* Animated Icon */}
                <span 
                  className={`text-base transition-transform duration-300 ${
                    isActive ? "scale-110" : "group-hover:scale-110"
                  }`}
                >
                  {category.icon}
                </span>
                
                {/* Label */}
                <span>{category.label}</span>
              </button>
            );
          })}
          
        </div>

      </div>
    </section>
  );
}