"use client";

import Link from "next/link";
import { motion } from "framer-motion";
// Swapped out FiShop for FiBriefcase and FiFolder
import { FiPlusCircle, FiEdit3, FiTrash2, FiLayers, FiBriefcase, FiShoppingBag, FiArrowRight } from "react-icons/fi";

const adminModules = [
  {
    title: "Products Management",
    description: "Create, read, update, and delete global product listings.",
    href: "/admin/products",
    icon: <FiLayers className="text-xl" />,
    color: "border-blue-100 hover:border-blue-200",
    iconBg: "bg-blue-50 text-blue-600",
    actions: ["Create", "Read", "Update", "Delete"]
  },
  {
    title: "Stores Management",
    description: "Authorize new outlets, edit operational data, or remove vendors.",
    href: "/admin/stores",
    icon: <FiBriefcase className="text-xl" />, // Fixed icon reference here
    color: "border-emerald-100 hover:border-emerald-200",
    iconBg: "bg-emerald-50 text-emerald-600",
    actions: ["Create", "Read", "Update", "Archive"]
  },
  {
    title: "Orders Management",
    description: "Monitor real-time incoming transactions, modify statuses, or handle refunds.",
    href: "/admin/orders",
    icon: <FiShoppingBag className="text-xl" />,
    color: "border-amber-100 hover:border-amber-200",
    iconBg: "bg-amber-50 text-amber-600",
    actions: ["Read", "Update", "Override"]
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 120, damping: 14 } },
};

export default function AdminPage() {
  return (
    <div className="min-h-screen bg-gray-50/60 py-14 px-6 select-none font-sans">
      <div className="mx-auto max-w-6xl">
        
        {/* Command Center Title Section */}
        <div className="mb-10 border-b border-gray-100 pb-6">
          <div className="flex items-center gap-3">
            <span className="flex h-2 w-2 rounded-full bg-red-500 animate-pulse" />
            <h1 className="text-2xl font-black tracking-tight text-gray-900 sm:text-3xl">
              System Control Panel
            </h1>
          </div>
          <p className="mt-2 text-sm font-medium text-gray-400">
            Secure root console for running database updates and managing active catalog operations.
          </p>
        </div>

        {/* Action Grid Layout */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {adminModules.map((module) => (
            <motion.div key={module.title} variants={itemVariants}>
              <Link
                href={module.href}
                className={`group flex h-full flex-col justify-between rounded-xl border bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md ${module.color}`}
              >
                <div>
                  {/* Top Header Row with Icon & Open Trigger */}
                  <div className="flex items-center justify-between">
                    <div className={`flex h-11 w-11 items-center justify-center rounded-xl font-bold ${module.iconBg}`}>
                      {module.icon}
                    </div>
                    <FiArrowRight className="text-gray-300 transition-all duration-200 group-hover:translate-x-1 group-hover:text-gray-600" />
                  </div>

                  {/* Module Labels */}
                  <h2 className="mt-5 text-lg font-bold tracking-tight text-gray-900 group-hover:text-violet-600 transition-colors duration-200">
                    {module.title}
                  </h2>
                  <p className="mt-2 text-xs font-medium leading-relaxed text-gray-400">
                    {module.description}
                  </p>
                </div>

                {/* Scope Matrix Badges: Instantly highlights capability */}
                <div className="mt-8 border-t border-gray-50 pt-4">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 block mb-2">
                    Scope Matrix
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {module.actions.map((action) => (
                      <span 
                        key={action}
                        className="rounded-md bg-gray-50 px-2 py-0.5 text-[10px] font-bold text-gray-500 border border-gray-100 group-hover:border-gray-200 group-hover:bg-gray-100/50 transition-colors duration-200"
                      >
                        {action}
                      </span>
                    ))}
                  </div>
                </div>

              </Link>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </div>
  );
}