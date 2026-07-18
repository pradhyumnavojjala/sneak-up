"use client";

import { motion } from "framer-motion";
import { FiStar, FiHeart, FiShare2 } from "react-icons/fi";

interface Props {
  image: string;
  name: string;
  rating: number;
  price: number;
  category: string;
}

export default function ProductHero({
  image,
  name,
  rating,
  price,
  category,
}: Props) {
  return (
    <section className="w-full bg-gradient-to-b from-gray-50 to-white py-12 px-4 sm:px-6 select-none font-sans">
      <div className="mx-auto max-w-7xl">
        
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:gap-16 items-center">

          {/* Left Side: Premium Media Presentation Box */}
          <div className="relative flex justify-center">
            {/* Ambient Accent Glow Behind the Image Container */}
            <div className="absolute inset-0 bg-violet-500/5 blur-3xl rounded-full" />
            
            <div className="relative aspect-square w-full max-w-[400px] sm:max-w-[440px] rounded-3xl border border-gray-100 bg-white p-8 shadow-xl shadow-gray-100/70 flex items-center justify-center text-[10rem] sm:text-[12rem] transition-all duration-300 hover:shadow-2xl">
              
              {/* Quick Floating Utilities */}
              <div className="absolute top-4 right-4 flex flex-col gap-2">
                <button className="flex h-9 w-9 items-center justify-center rounded-xl border border-gray-100 bg-white/80 backdrop-blur-sm text-gray-400 shadow-sm transition-colors hover:text-red-500 hover:bg-white active:scale-95">
                  <FiHeart className="text-base" />
                </button>
                <button className="flex h-9 w-9 items-center justify-center rounded-xl border border-gray-100 bg-white/80 backdrop-blur-sm text-gray-400 shadow-sm transition-colors hover:text-violet-600 hover:bg-white active:scale-95">
                  <FiShare2 className="text-base" />
                </button>
              </div>

              {/* Main Display Object (Emoji / Vector Render) */}
              <span className="drop-shadow-xl animate-float selection:bg-transparent">
                {image}
              </span>
            </div>
          </div>

          {/* Right Side: Micro-Structured Typography Profile */}
          <div className="flex flex-col">
            
            {/* Category Breadcrumb / Accent Ribbon */}
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-black uppercase tracking-widest text-violet-600 bg-violet-50 px-2.5 py-1 rounded-md border border-violet-100/60">
                {category}
              </span>
            </div>

            {/* Main Product Header Title */}
            <h1 className="mt-4 text-3xl font-black tracking-tight text-gray-900 sm:text-5xl leading-tight">
              {name}
            </h1>

            {/* Performance Metrics: Ratings Tracker Row */}
            <div className="mt-4 flex items-center gap-4">
              <div className="flex items-center gap-1.5 rounded-lg border border-amber-100 bg-amber-50/50 px-2.5 py-1 text-sm font-black text-amber-700">
                <FiStar className="text-xs fill-amber-500 stroke-amber-500" />
                <span>{rating.toFixed(1)}</span>
              </div>
              <span className="text-xs font-semibold text-gray-400 border-l border-gray-200 pl-4">
                Verified Customer Choice
              </span>
            </div>

            {/* Standout Net Unit Pricing Matrix */}
            <div className="mt-8 border-t border-b border-gray-50 py-5 flex items-baseline gap-2">
              <span className="text-4xl font-black tracking-tight text-violet-600">
                ₹{price}
              </span>
              <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                Inclusive of all logistics taxes
              </span>
            </div>

            {/* Summary Marketing Blurb copy */}
            <p className="mt-6 text-sm font-medium leading-relaxed text-gray-400 max-w-md">
              Freshly prepared using premium source components. Delivered clean, hot, and exceptionally fast directly to your operational location coordinates.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}