"use client";

import { FiCheckCircle, FiInfo } from "react-icons/fi";

interface Props {
  description: string;
}

const keyHighlights = [
  "100% organic & sustainably sourced components",
  "Free from artificial preservation compounds",
  "Prepared matching exact culinary safety protocols",
  "Freshly packed in eco-friendly thermal layers",
];

export default function ProductInfo({ description }: Props) {
  return (
    <div className="space-y-6 font-sans">
      
      {/* Description Block */}
      <div className="flex items-start gap-3">
        <FiInfo className="mt-1 text-lg text-violet-500 flex-shrink-0" />
        <p className="text-sm font-medium leading-relaxed text-gray-500">
          {description}
        </p>
      </div>

      {/* Structured Separation Track */}
      <hr className="border-gray-100" />

      {/* Dynamic Key Product Highlights Matrix */}
      <div>
        <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3.5">
          Dietary & Preparation Notes
        </h3>
        
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {keyHighlights.map((highlight) => (
            <li 
              key={highlight} 
              className="flex items-center gap-2.5 text-xs font-semibold text-gray-600 transition-colors duration-200 hover:text-gray-900"
            >
              <FiCheckCircle className="text-base text-emerald-500 flex-shrink-0" />
              <span>{highlight}</span>
            </li>
          ))}
        </ul>
      </div>

    </div>
  );
}