"use client";

import { motion } from "framer-motion";
import ProductCard from "./ProductCard";
// ✅ Import the true Product interface from your core definitions file
import { Product } from "@/data/products"; 

interface Props {
  products: Product[];
}

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.05 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 15 } },
};

export default function ProductGrid({ products }: Props) {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 py-12 select-none font-sans">
      
      {/* Header Info Hub */}
      <div className="mb-8 flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between border-b border-gray-100 pb-5">
        <div>
          <h2 className="text-xl font-black tracking-tight text-gray-900 sm:text-2xl">
            Popular Selections
          </h2>
          <p className="mt-1 text-xs font-medium text-gray-400">
            Top-rated customer catalog updates dispatched daily.
          </p>
        </div>
        
        <span className="text-xs font-bold text-gray-400 uppercase tracking-wider mt-2 sm:mt-0">
          Showing {products.length} Items
        </span>
      </div>

      {/* Grid Layout Canvas */}
      {products.length === 0 ? (
        /* Empty State */
        <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-gray-200 bg-white py-16 text-center">
          <p className="text-sm font-bold text-gray-400">No matching products found.</p>
        </div>
      ) : (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-3 xl:grid-cols-4"
        >
          {products.map((product) => (
            <motion.div key={product.id} variants={itemVariants}>
              <ProductCard product={product} />
            </motion.div>
          ))}
        </motion.div>
      )}

    </section>
  );
}