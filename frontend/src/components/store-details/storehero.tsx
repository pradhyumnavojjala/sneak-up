"use client";

import { FiStar, FiTruck, FiLayers, FiCheckCircle } from "react-icons/fi";

interface Props {
  name: string;
  emoji: string;
  rating: number;
  delivery: string;
  products: string;
  color: string; // Expecting tailwind bg classes, e.g., "bg-violet-600" or "bg-amber-500"
}

export default function StoreHero({
  name,
  emoji,
  rating,
  delivery,
  products,
  color,
}: Props) {
  return (
    <section className="relative w-full overflow-hidden bg-gray-50/50 pb-10 font-sans select-none">
      
      {/* Immersive Store Banner Background */}
      <div className={`relative w-full h-48 sm:h-56 ${color} rounded-b-[32px] overflow-hidden`}>
        {/* Abstract design overlay to give the flat banner depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
        <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-2xl" />
      </div>

      {/* Main Stats Panel Container */}
      <div className="mx-auto -mt-16 max-w-7xl px-4 sm:px-6">
        <div className="rounded-2xl border border-gray-100 bg-white p-6 sm:p-8 shadow-xl shadow-gray-200/50">
          
          <div className="flex flex-col gap-6 md:flex-row md:items-center">
            
            {/* Store Identity Emblem Showcase */}
            <div className="relative self-start md:self-auto">
              <div className={`flex h-24 w-24 sm:h-28 sm:w-28 items-center justify-center rounded-2xl ${color} shadow-lg shadow-gray-200 text-5xl sm:text-6xl text-white transformation duration-300 hover:scale-105`}>
                <span className="drop-shadow-md">{emoji}</span>
              </div>
            </div>

            {/* Comprehensive Store Metadata Summary */}
            <div className="flex-1">
              
              {/* Brand Title Frame */}
              <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-gray-900">
                {name}
              </h1>

              {/* Data Metric Badges Grid Array */}
              <div className="mt-3.5 flex flex-wrap items-center gap-2">
                
                {/* Rating Tracker */}
                <div className="flex items-center gap-1.5 rounded-lg border border-amber-100 bg-amber-50/60 px-2.5 py-1 text-xs font-black text-amber-700">
                  <FiStar className="text-xs fill-amber-500 stroke-amber-500" />
                  <span>{rating.toFixed(1)}</span>
                </div>

                {/* Status Switch */}
                <div className="flex items-center gap-1.5 rounded-lg border border-emerald-100 bg-emerald-50/60 px-2.5 py-1 text-xs font-bold text-emerald-700">
                  <FiCheckCircle className="text-xs stroke-[2.5]" />
                  <span>Open Now</span>
                </div>

                {/* Delivery Logistics Metric */}
                <div className="flex items-center gap-1.5 rounded-lg border border-gray-200 bg-gray-50 px-2.5 py-1 text-xs font-semibold text-gray-600">
                  <FiTruck className="text-xs text-gray-400" />
                  <span>{delivery}</span>
                </div>

                {/* Catalog Product Count Label */}
                <div className="flex items-center gap-1.5 rounded-lg border border-gray-200 bg-gray-50 px-2.5 py-1 text-xs font-semibold text-gray-600">
                  <FiLayers className="text-xs text-gray-400" />
                  <span>{products}</span>
                </div>

              </div>

              {/* Marketing Bio Narrative Description */}
              <p className="mt-5 max-w-2xl text-xs sm:text-sm font-medium leading-relaxed text-gray-400">
                Fresh groceries, curated items, and everyday essentials processed directly from elite hubs and delivered straight to your operations footprint with lightning-fast logistics speed.
              </p>

            </div>

          </div>

        </div>
      </div>

    </section>
  );
}