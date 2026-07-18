"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMinus, FiPlus, FiTrash2, FiShoppingBag, FiArrowRight, FiPercent } from "react-icons/fi";
import Link from "next/link";

// --- Types ---
interface ItemData {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image?: string;
  category?: string;
}

// --- Mock Initial Data ---
const initialCartItems: ItemData[] = [
  {
    id: "prod-1",
    name: "Gourmet Ribeye Steak Special",
    price: 899,
    quantity: 1,
    category: "Ready-to-Heat Meals",
  },
  {
    id: "prod-2",
    name: "Organic Farm-Fresh Avocados",
    price: 249,
    quantity: 2,
    category: "Fresh Vegetables",
  },
];

export default function CartPage() {
  const [cartItems, setCartItems] = useState<ItemData[]>(initialCartItems);
  const [promoCode, setPromoCode] = useState("");

  // --- Handlers ---
  const handleIncrease = (id: string) => {
    setCartItems(prev =>
      prev.map(item => (item.id === id ? { ...item, quantity: item.quantity + 1 } : item))
    );
  };

  const handleDecrease = (id: string) => {
    setCartItems(prev =>
      prev
        .map(item => {
          if (item.id === id) {
            return item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : null;
          }
          return item;
        })
        .filter((item): item is ItemData => item !== null)
    );
  };

  const handleRemove = (id: string) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  // --- Pricing Metrics Calculation ---
  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const deliveryFee = subtotal >= 499 ? 0 : 49; 
  const total = subtotal + deliveryFee;

  return (
    <div className="min-h-screen bg-gray-50/50 py-12 px-4 sm:px-6 select-none font-sans">
      <div className="mx-auto max-w-6xl">
        
        {/* Page Header */}
        <div className="mb-10 border-b border-gray-100 pb-6 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-black tracking-tight text-gray-900 sm:text-3xl">
              Shopping Cart
            </h1>
            <p className="mt-2 text-sm font-medium text-gray-400">
              Review your items and complete your order.
            </p>
          </div>
          <span className="rounded-full bg-violet-50 px-3 py-1 text-xs font-bold text-violet-600">
            {cartItems.reduce((acc, item) => acc + item.quantity, 0)} Items
          </span>
        </div>

        <AnimatePresence mode="wait">
          {cartItems.length === 0 ? (
            /* --- Empty Cart Screen State --- */
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-gray-200 bg-white py-20 px-4 text-center"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gray-50 text-gray-400 mb-6">
                <FiShoppingBag className="text-2xl" />
              </div>
              <h2 className="text-xl font-bold text-gray-900">Your cart is empty</h2>
              <p className="mt-2 max-w-xs text-sm font-medium text-gray-400">
                Looks like you haven't added anything to your cart yet.
              </p>
              <Link
                href="/stores"
                className="mt-6 rounded-xl bg-violet-600 px-6 py-3 text-sm font-bold text-white shadow-md shadow-violet-500/20 transition-all hover:bg-violet-700 active:scale-98"
              >
                Explore Stores
              </Link>
            </motion.div>
          ) : (
            /* --- Main Grid Content Layout --- */
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              
              {/* Left Side: Items Sequence Stack */}
              <div className="lg:col-span-2 space-y-4">
                <AnimatePresence>
                  {cartItems.map((item) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      layout
                      className="group flex items-center justify-between rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition-all duration-300 hover:border-gray-200 hover:shadow-md"
                    >
                      {/* Product Descriptions Block */}
                      <div className="flex flex-col">
                        {item.category && (
                          <span className="text-[10px] font-extrabold uppercase tracking-wider text-violet-500 mb-1">
                            {item.category}
                          </span>
                        )}
                        <h2 className="font-bold text-base text-gray-900 tracking-tight group-hover:text-violet-600 transition-colors duration-200">
                          {item.name}
                        </h2>
                        <p className="mt-1 text-sm font-bold text-gray-400">
                          ₹{item.price}
                        </p>
                      </div>

                      {/* Right Control Interactive Pod */}
                      <div className="flex items-center gap-5">
                        <div className="flex items-center gap-3.5 rounded-xl border border-gray-100 bg-gray-50/50 p-1">
                          <button
                            onClick={() => handleDecrease(item.id)}
                            className="flex h-8 w-8 items-center justify-center rounded-lg bg-white border border-gray-100 text-gray-500 transition-all hover:bg-gray-50 hover:text-gray-900 active:scale-90 shadow-sm"
                            aria-label="Decrease quantity"
                          >
                            <FiMinus size={14} />
                          </button>

                          <span className="w-6 text-center text-sm font-black text-gray-800">
                            {item.quantity}
                          </span>

                          <button
                            onClick={() => handleIncrease(item.id)}
                            className="flex h-8 w-8 items-center justify-center rounded-lg bg-white border border-gray-100 text-gray-500 transition-all hover:bg-gray-50 hover:text-gray-900 active:scale-90 shadow-sm"
                            aria-label="Increase quantity"
                          >
                            <FiPlus size={14} />
                          </button>
                        </div>

                        {/* Instant Trash Override Action */}
                        <button
                          onClick={() => handleRemove(item.id)}
                          className="flex h-9 w-9 items-center justify-center rounded-xl text-gray-300 transition-all duration-200 hover:bg-red-50 hover:text-red-500"
                          aria-label="Remove item"
                        >
                          <FiTrash2 className="text-lg" />
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>

              {/* Right Side: Order Summary Summary Drawer Panel */}
              <div className="space-y-6">
                <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
                  <h2 className="text-base font-bold tracking-tight text-gray-900 mb-4">
                    Bill Summary
                  </h2>

                  {/* Calculations Ledger */}
                  <div className="space-y-3 border-b border-gray-50 pb-4 text-sm font-medium">
                    <div className="flex justify-between text-gray-400">
                      <span>Item Subtotal</span>
                      <span className="text-gray-900 font-bold">₹{subtotal}</span>
                    </div>
                    <div className="flex justify-between text-gray-400">
                      <span>Delivery Partner Fee</span>
                      {deliveryFee === 0 ? (
                        <span className="text-emerald-500 font-bold text-xs uppercase tracking-wider bg-emerald-50 px-1.5 py-0.5 rounded-md">
                          Free Delivery
                        </span>
                      ) : (
                        <span className="text-gray-900 font-bold">₹{deliveryFee}</span>
                      )}
                    </div>
                  </div>

                  {/* Absolute Net Pricing Value */}
                  <div className="mt-4 flex justify-between items-center text-gray-900">
                    <span className="text-sm font-bold">Grand Total</span>
                    <span className="text-2xl font-black tracking-tight text-violet-600">
                      ₹{total}
                    </span>
                  </div>

                  {/* Checkout CTA */}
                  
                  <button onClick={() => window.location.href = "/checkout"} className="group mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-violet-600 py-4 text-sm font-bold text-white shadow-md shadow-violet-500/20 transition-all hover:bg-violet-700 active:scale-98">
                    <span>Proceed to Payment</span>
                    <FiArrowRight className="text-base transition-transform duration-200 group-hover:translate-x-1" />
                  </button>
                </div>

                {/* Voucher / Coupons Box Layout */}
                <div className="flex items-center gap-2 rounded-xl border border-gray-100 bg-white p-2 shadow-sm focus-within:border-violet-200">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-gray-50 text-gray-400">
                    <FiPercent className="text-lg" />
                  </div>
                  <input
                    type="text"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    placeholder="Apply store coupon code..."
                    className="w-full bg-transparent px-2 text-xs font-semibold text-gray-800 placeholder-gray-400 outline-none uppercase"
                  />
                  <button className="rounded-lg bg-gray-50 px-3 py-2 text-xs font-bold text-gray-700 hover:bg-violet-50 hover:text-violet-600 transition-colors">
                    Apply
                  </button>
                </div>
              </div>

            </div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}