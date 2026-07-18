"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  FiUser, 
  FiLogOut, 
  FiSettings, 
  FiShoppingBag, 
  FiMapPin, 
  FiShield, 
  FiChevronRight,
  FiClock
} from "react-icons/fi";

const ADMIN_EMAILS = [
  "admin@gmail.com",
  "sneakup@gmail.com",
];

export default function ProfilePage() {
  // Temporary mock user state matching your existing configuration
  const user = {
    name: "Vojjala Pradhyumna",
    email: "admin@gmail.com",
    phone: "+91 98765 43210",
    joinDate: "Joined January 2026",
  };

  const isAdmin = ADMIN_EMAILS.includes(user.email);

  // Mock data for order cards tracking
  const [mockOrders] = useState([
    { id: "ORD-9842", date: "Jan 24, 2026", total: 4299, status: "Delivered" },
    { id: "ORD-9104", date: "Recent", total: 8450, status: "In Transit" },
  ]);

  return (
    <div className="min-h-screen bg-gray-50/50 py-12 px-4 sm:px-6 select-none font-sans">
      <div className="mx-auto max-w-4xl">
        
        {/* Grid Layout Container */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          
          {/* Left Column: Core Identity Card */}
          <div className="md:col-span-1 space-y-6">
            <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm text-center">
              
              {/* Profile Avatar Canvas */}
              <div className="relative mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-violet-600 text-white shadow-md shadow-violet-500/10">
                <FiUser size={40} />
              </div>

              {/* Identity Typography */}
              <h2 className="mt-4 text-lg font-black tracking-tight text-gray-900">
                {user.name}
              </h2>
              <p className="text-xs font-semibold text-gray-400 mt-0.5">
                {user.email}
              </p>
              
              <div className="mt-4 flex flex-wrap justify-center gap-2">
                <span className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-1 text-2xs font-bold text-gray-500 uppercase tracking-wider">
                  Customer
                </span>
                {isAdmin && (
                  <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-1 text-2xs font-bold text-emerald-600 uppercase tracking-wider border border-emerald-100">
                    <FiShield size={10} /> Admin
                  </span>
                )}
              </div>

              <hr className="my-6 border-gray-50" />

              <p className="text-2xs font-medium text-gray-400">
                {user.joinDate}
              </p>
            </div>

            {/* Quick Actions Panel */}
            <div className="space-y-2">
              {isAdmin && (
                <Link
                  href="/admin"
                  className="flex w-full items-center justify-between rounded-xl bg-violet-600 px-4 py-3 text-sm font-bold text-white shadow-md shadow-violet-500/10 transition-all hover:bg-violet-700 active:scale-98"
                >
                  <div className="flex items-center gap-3">
                    <FiSettings className="text-base" />
                    <span>Admin Dashboard</span>
                  </div>
                  <FiChevronRight className="opacity-70" />
                </Link>
              )}

              <button
                onClick={() => alert("Logging out...")}
                className="flex w-full items-center gap-3 rounded-xl border border-gray-100 bg-white px-4 py-3 text-sm font-bold text-red-500 transition-all hover:bg-red-50/50 active:scale-98"
              >
                <FiLogOut className="text-base" />
                <span>Logout Account</span>
              </button>
            </div>
          </div>

          {/* Right Column: Dynamic Order History & Dashboard Features */}
          <div className="md:col-span-2 space-y-6">
            
            {/* Account Information Panel */}
            <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
              <h3 className="text-sm font-black tracking-tight text-gray-900 mb-4 uppercase tracking-wider text-gray-400">
                Contact Parameters
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                <div className="rounded-xl border border-gray-50 bg-gray-50/30 p-3.5">
                  <span className="block text-2xs font-bold text-gray-400 uppercase">Phone Link</span>
                  <span className="mt-1 block font-semibold text-gray-800">{user.phone}</span>
                </div>
                <div className="rounded-xl border border-gray-50 bg-gray-50/30 p-3.5">
                  <span className="block text-2xs font-bold text-gray-400 uppercase">Default Location</span>
                  <span className="mt-1 block font-semibold text-gray-800 flex items-center gap-1">
                    <FiMapPin className="text-violet-500" /> Managed at checkout
                  </span>
                </div>
              </div>
            </div>

            {/* Order History Ledger Container */}
            <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-sm font-black tracking-tight text-gray-900 uppercase tracking-wider text-gray-400 flex items-center gap-2">
                  <FiShoppingBag className="text-violet-600" /> Recent Shipments
                </h3>
                <span className="text-2xs font-bold text-gray-400">
                  {mockOrders.length} records found
                </span>
              </div>

              {mockOrders.length === 0 ? (
                <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-gray-100 bg-gray-50/30 py-8 text-center">
                  <p className="text-xs font-bold text-gray-400">No transactions recorded yet.</p>
                </div>
              ) : (
                <div className="space-y-3">
                  {mockOrders.map((order) => (
                    <div 
                      key={order.id} 
                      className="flex items-center justify-between rounded-xl border border-gray-50 bg-white p-4 transition-all hover:border-gray-200"
                    >
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-50 text-gray-500">
                          <FiClock />
                        </div>
                        <div>
                          <span className="block text-xs font-bold text-gray-900">{order.id}</span>
                          <span className="block text-2xs font-medium text-gray-400">{order.date}</span>
                        </div>
                      </div>

                      <div className="text-right">
                        <span className="block text-xs font-black text-gray-900">₹{order.total}</span>
                        <span className={`inline-block mt-0.5 rounded px-1.5 py-0.5 text-3xs font-black uppercase tracking-wide ${
                          order.status === "Delivered" 
                            ? "bg-emerald-50 text-emerald-600" 
                            : "bg-amber-50 text-amber-600"
                        }`}>
                          {order.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}