"use client";

import Link from "next/link";
import { FiStar, FiPlus } from "react-icons/fi";
import { Product } from "@/data/products";

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  return (
    <Link href={`/product/${product.id}`} className="group block h-full">
      <div className="relative flex h-full flex-col justify-between rounded-2xl border border-gray-100 bg-white p-3.5 sm:p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-gray-200 hover:shadow-md">
        
        <div>
          {/* Media Deck Frame Layer */}
          <div className="relative flex h-32 w-full items-center justify-center rounded-xl bg-gray-50 text-5xl sm:text-6xl transition-transform duration-300 group-hover:scale-[1.02] select-none">
            {/* Inline Absolute Category Tag */}
            <span className="absolute top-2 left-2 rounded-md bg-white/80 backdrop-blur-xs px-2 py-0.5 text-[9px] font-extrabold uppercase tracking-wider text-violet-600 border border-gray-100 shadow-2xs">
              {product.category}
            </span>
            
            {/* Display Graphic object */}
            <span className="drop-shadow-md">{product.image}</span>
          </div>

          {/* Star Review Score Bar */}
          <div className="mt-3 flex items-center gap-1 text-amber-600">
            <FiStar className="text-xs fill-amber-500 stroke-amber-500" />
            <span className="text-[11px] font-black">{product.rating.toFixed(1)}</span>
          </div>

          {/* Product String Title Description */}
          <h3 className="mt-1.5 text-sm sm:text-base font-bold tracking-tight text-gray-900 line-clamp-2 leading-snug group-hover:text-violet-600 transition-colors duration-200">
            {product.name}
          </h3>
        </div>

        {/* Purchase Value Row Matrix */}
        <div className="mt-4 flex items-center justify-between gap-2 border-t border-gray-50 pt-3">
          <span className="text-base sm:text-lg font-black tracking-tight text-gray-900">
            ₹{product.price}
          </span>

          {/* Plus Trigger Button Asset */}
          <button 
            className="flex h-8 w-8 items-center justify-center rounded-lg bg-violet-600 font-bold text-white shadow-sm shadow-violet-500/10 transition-all duration-200 hover:bg-violet-700 hover:shadow-md group-hover:scale-105 active:scale-90"
            onClick={(e) => {
              // Prevents standard link route action from firing if they hit the fast add button trigger directly
              e.preventDefault();
              // Add custom fast-action inline cart hook dispatcher logic here if needed!
            }}
          >
            <FiPlus size={16} className="stroke-[3]" />
          </button>
        </div>

      </div>
    </Link>
  );
}