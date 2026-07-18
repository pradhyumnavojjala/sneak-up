"use client";

import { useRouter } from "next/navigation";
import { FiArrowLeft, FiLayers, FiArrowRight } from "react-icons/fi";
import Link from "next/link";
import { groceryCategories, groceryProducts } from "@/data/groceryData";

export default function CategoryShowroom() {
  const router = useRouter();
  
  // Dual sequences for infinite seamless sliding rings
  const ribbonTierOne = [...groceryCategories, ...groceryCategories];
  const ribbonTierTwo = [...groceryCategories].reverse().concat([...groceryCategories].reverse());

  // Simple helper function to calculate real-time inventories
  const getProductCount = (catId: string) => {
    return groceryProducts.filter((p) => p.categoryId === catId).length;
  };

  return (
    <div className="min-h-screen bg-gray-50/40 py-16 px-4 sm:px-6 select-none font-sans overflow-hidden">
      <div className="mx-auto max-w-7xl">
        
        {/* Navigation Breadcrumb */}
        <div className="mb-6">
          <button
            onClick={() => router.back()}
            className="inline-flex items-center gap-2 rounded-xl border border-gray-100 bg-white px-4 py-2.5 text-xs font-bold text-gray-500 shadow-2xs transition-all hover:border-gray-200 hover:text-gray-900 active:scale-98"
          >
            <FiArrowLeft className="text-sm" />
            <span>Return to Dashboard</span>
          </button>
        </div>

        {/* Header Block */}
        <div className="mb-14 border-b border-gray-100 pb-8">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-0.5 text-3xs font-black text-emerald-700 uppercase tracking-widest border border-emerald-100/40">
            <FiLayers size={10} /> Shop by Category
          </div>
          <h1 className="mt-3 text-3xl font-black tracking-tight text-gray-950 sm:text-4xl">
            Curated Collections
          </h1>
          <p className="mt-2 text-sm font-medium text-gray-400 max-w-xl leading-relaxed">
            Browse our catalog rows tailored by lifestyle preference. Hover over any card block to pause the ribbon.
          </p>
        </div>

        {/* Ribbon Tracks Viewport Container */}
        <div className="relative w-screen left-1/2 right-1/2 -mx-[50vw] space-y-8 py-4">
          
          {/* Glass Overlay Fog Edges */}
          <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-16 bg-gradient-to-r from-gray-50 via-gray-50/60 to-transparent sm:w-40" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-16 bg-gradient-to-l from-gray-50 via-gray-50/60 to-transparent sm:w-40" />

          {/* Ribbon One: Left Conveyor Belt */}
          <div className="overflow-hidden">
            <div 
              className="flex gap-6 w-max animate-marquee py-2 hover:[animation-play-state:paused]"
              style={{ animationDuration: "38s" }}
            >
              {ribbonTierOne.map((cat, index) => {
                const count = getProductCount(cat.id);
                return (
                  <div 
                    key={`tier1-${cat.id}-${index}`} 
                    className={`w-[290px] shrink-0 rounded-2xl border border-gray-100 bg-gradient-to-br ${cat.bgGradient} p-6 shadow-2xs transition-all hover:shadow-md hover:scale-[1.01] bg-white`}
                  >
                    <div className="text-4xl mb-4">{cat.emoji}</div>
                    <h3 className="text-lg font-black text-gray-950">{cat.name}</h3>
                    <span className="text-2xs font-bold text-gray-400 block mt-0.5">{count} Items Available</span>
                    <p className="mt-3 text-xs font-medium text-gray-500 min-h-[36px] line-clamp-2">
                      {cat.description}
                    </p>
                    <Link 
                      href={`/category/${cat.id}`}
                      className="mt-5 inline-flex w-full items-center justify-between rounded-xl bg-white border border-gray-100 px-4 py-2.5 text-xs font-bold text-gray-700 transition-all hover:bg-gray-950 hover:text-white group"
                    >
                      <span>Explore Collection</span>
                      <FiArrowRight className="transition-transform group-hover:translate-x-0.5" />
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Ribbon Two: Right Counter-Conveyor Belt */}
          <div className="overflow-hidden">
            <div 
              className="flex gap-6 w-max animate-marquee-reverse py-2 hover:[animation-play-state:paused]"
              style={{ animationDuration: "42s" }}
            >
              {ribbonTierTwo.map((cat, index) => {
                const count = getProductCount(cat.id);
                return (
                  <div 
                    key={`tier2-${cat.id}-${index}`} 
                    className={`w-[290px] shrink-0 rounded-2xl border border-gray-100 bg-gradient-to-br ${cat.bgGradient} p-6 shadow-2xs transition-all hover:shadow-md hover:scale-[1.01] bg-white`}
                  >
                    <div className="text-4xl mb-4">{cat.emoji}</div>
                    <h3 className="text-lg font-black text-gray-950">{cat.name}</h3>
                    <span className="text-2xs font-bold text-gray-400 block mt-0.5">{count} Items Available</span>
                    <p className="mt-3 text-xs font-medium text-gray-500 min-h-[36px] line-clamp-2">
                      {cat.description}
                    </p>
                    <Link 
                      href={`/category/${cat.id}`}
                      className="mt-5 inline-flex w-full items-center justify-between rounded-xl bg-white border border-gray-100 px-4 py-2.5 text-xs font-bold text-gray-700 transition-all hover:bg-gray-950 hover:text-white group"
                    >
                      <span>Explore Collection</span>
                      <FiArrowRight className="transition-transform group-hover:translate-x-0.5" />
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}