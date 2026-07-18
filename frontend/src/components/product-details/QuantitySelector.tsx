"use client";

import { useState } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";

export default function QuantitySelector() {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="flex items-center gap-3.5 rounded-xl border border-gray-200 bg-gray-100 p-1 select-none">
      
      {/* Decrease Button */}
      <button
        onClick={() => quantity > 1 && setQuantity(quantity - 1)}
        disabled={quantity <= 1}
        className="flex h-9 w-9 items-center justify-center rounded-lg bg-white border border-gray-200 text-gray-700 transition-all duration-200 hover:bg-violet-600 hover:text-white hover:border-violet-600 active:scale-90 disabled:opacity-40 disabled:pointer-events-none shadow-sm"
        aria-label="Decrease quantity"
      >
        <FiMinus size={14} className="stroke-[3]" />
      </button>

      {/* Numeric Indicator */}
      <span className="w-7 text-center text-sm font-black text-gray-900 tracking-tight">
        {quantity}
      </span>

      {/* Increase Button */}
      <button
        onClick={() => setQuantity(quantity + 1)}
        className="flex h-9 w-9 items-center justify-center rounded-lg bg-white border border-gray-200 text-gray-700 transition-all duration-200 hover:bg-violet-600 hover:text-white hover:border-violet-600 active:scale-90 shadow-sm"
        aria-label="Increase quantity"
      >
        <FiPlus size={14} className="stroke-[3]" />
      </button>

    </div>
  );
}