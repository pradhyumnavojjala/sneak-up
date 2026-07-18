"use client";

import { FiShoppingBag, FiStar } from "react-icons/fi";

interface Props {
  id: string; // ◄ Crucial field for database and cart linking!
  name: string;
  emoji: string;
  price: number;
  rating: number;
  storeId?: string; // Optional context, defaults to fallback store if empty
}

export default function MealCard({
  id,
  name,
  emoji,
  price,
  rating,
  storeId = "1",
}: Props) {
  
  const handleAddToCart = () => {
    // 1. Retrieve the existing state buffer from storage
    const currentCartRaw = localStorage.getItem("cart");
    let cart = [];
    
    try {
      cart = currentCartRaw ? JSON.parse(currentCartRaw) : [];
    } catch (e) {
      cart = [];
    }

    // 2. Scan to see if this specific entry already exists in the drawer
    const existingIndex = cart.findIndex((item: any) => item.id === id || item.productId === id);

    if (existingIndex > -1) {
      // If found, safely step up the target item index quantity counter
      cart[existingIndex].quantity += 1;
    } else {
      // 3. Otherwise, append a structural record matching your checkout state rules
      const newCartItem = {
        id: id,            // Internal local state tracker index key
        productId: id,     // Map target tracking ID linked back to Spring Boot
        storeId: storeId,  // Link back to your merchant store entity structure
        name: name,
        price: price,
        quantity: 1,
      };
      cart.push(newCartItem);
    }

    // 4. Commit values down to disk
    localStorage.setItem("cart", JSON.stringify(cart));

    // Optional user feedback confirmation notice
    alert(`Added ${name} to your tray! 🛒`);
    
    // Dispatch custom tracking event so your global navigation header bar counts instantly update
    window.dispatchEvent(new Event("storage"));
  };

  return (
    <div
      className="
        group
        min-w-[240px]
        rounded-3xl
        border
        border-gray-100
        bg-white
        p-5
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-2
        hover:shadow-xl
        select-none
        font-sans
      "
    >
      {/* Visual Canvas Display */}
      <div className="flex justify-center text-6xl transition-transform duration-300 group-hover:scale-105">
        {emoji}
      </div>

      <h3 className="mt-4 text-base font-black tracking-tight text-gray-900 truncate">
        {name}
      </h3>

      {/* Numerical Data Metrics Grid */}
      <div className="mt-2 flex justify-between items-center text-xs font-semibold">
        <span className="flex items-center gap-1 text-amber-500">
          <FiStar className="fill-current" /> {rating.toFixed(1)}
        </span>
        <span className="text-sm font-black text-gray-900">₹{price}</span>
      </div>

      {/* Functional Call To Action Interceptor */}
      <button 
        onClick={handleAddToCart}
        className="
          mt-5 
          group/btn
          flex 
          w-full 
          items-center 
          justify-center 
          gap-2 
          rounded-xl 
          bg-sneakup-purple 
          py-3 
          text-xs 
          font-bold 
          text-white 
          transition-all 
          hover:opacity-95 
          active:scale-98
        "
      >
        <FiShoppingBag className="text-sm transition-transform group-hover/btn:scale-110" />
        <span>Add to Cart</span>
      </button>
    </div>
  );
}