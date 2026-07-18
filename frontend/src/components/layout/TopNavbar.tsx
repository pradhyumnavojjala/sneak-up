"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { FiHeart, FiShoppingCart, FiUser } from "react-icons/fi";

import Logo from "@/components/common/Logo";
import SearchBar from "@/components/common/SearchBar";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Stores", href: "/stores" },
  { name: "Categories", href: "/categories" },
  { name: "Offers", href: "/offers" },
  { name: "About", href: "/about" },
];

export default function TopNavbar() {
  const [cartCount, setCartCount] = useState(0);

  // Safely calculate cart totals on client mount and update dynamically
  useEffect(() => {
    const updateCartCount = () => {
      try {
        const localCart = JSON.parse(localStorage.getItem("cart") || "[]");
        // Sum total quantities of all line items
        const count = localCart.reduce((sum: number, item: any) => sum + (item.quantity || 0), 0);
        setCartCount(count);
      } catch (e) {
        setCartCount(0);
      }
    };

    // Initialize count on mount
    updateCartCount();

    // Listen to local triggers dispatched via hand-off event calls
    window.addEventListener("storage", updateCartCount);
    return () => window.removeEventListener("storage", updateCartCount);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/80 backdrop-blur-md select-none font-sans">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex h-20 items-center justify-between gap-8">
          
          {/* Logo + Navigation */}
          <div className="flex items-center gap-10">
            <div className="shrink-0">
              <Logo />
            </div>

            <nav className="hidden xl:flex items-center gap-6 text-sm font-medium text-gray-600">
              {navLinks.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="
                    relative py-2
                    transition-colors duration-200
                    hover:text-sneakup-purple
                    after:absolute
                    after:bottom-0
                    after:left-0
                    after:h-[2px]
                    after:w-0
                    after:bg-sneakup-purple
                    after:transition-all
                    after:duration-200
                    hover:after:w-full
                  "
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Search Bar Input Container */}
          <div className="max-w-xl flex-1">
            <SearchBar />
          </div>

          {/* User Console Actions Link Hub */}
          <div className="flex items-center gap-4">
            
            {/* Wishlist Icon */}
            <button
              aria-label="Wishlist"
              className="group rounded-full p-2 text-gray-600 transition-all duration-200 hover:bg-sneakup-purple/10 hover:text-sneakup-purple"
            >
              <FiHeart className="text-xl transition-transform duration-200 group-hover:scale-110" />
            </button>

            {/* ✅ FIXED CART ACTION MODULE */}
            <Link
              href="/cart"
              aria-label="Shopping Cart Container View"
              className="
                group relative rounded-full p-2
                text-gray-600
                transition-all duration-200
                hover:bg-sneakup-purple/10
                hover:text-sneakup-purple
              "
            >
              <FiShoppingCart className="text-xl transition-transform duration-200 group-hover:scale-110" />
              
              {/* Dynamic Notification Counter Pill */}
              {cartCount > 0 && (
                <span
                  className="
                    absolute
                    -right-0.5
                    -top-0.5
                    flex
                    h-4
                    w-4
                    items-center
                    justify-center
                    rounded-full
                    bg-sneakup-orange
                    text-[9px]
                    font-black
                    text-white
                    shadow-sm
                  "
                >
                  {cartCount}
                </span>
              )}
            </Link>

            {/* User Profile Navigation Link */}
            <Link
              href="/profile"
              aria-label="User Account"
              className="group rounded-full p-2 text-gray-600 transition-all duration-200 hover:bg-sneakup-purple/10 hover:text-sneakup-purple"
            >
              <FiUser className="text-xl transition-transform duration-200 group-hover:scale-110" />
            </Link>

          </div>
        </div>
      </div>
    </header>
  );
}