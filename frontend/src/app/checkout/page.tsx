"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { FiMapPin, FiPhone, FiUser, FiCompass, FiShoppingBag, FiTruck, FiCreditCard } from "react-icons/fi";

interface CartItem {
  id: string;
  productId: string;
  storeId: string;
  name: string;
  price: number;
  quantity: number;
}

export default function CheckoutPage() {
  const router = useRouter();

  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [landmark, setLandmark] = useState("");
  
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  // Sync with localStorage safely on the client
  useEffect(() => {
    const localCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(localCart);
  }, []);

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shippingFee = cart.length > 0 ? 40 : 0;
  const totalAmount = subtotal + shippingFee;

  const placeOrder = async () => {
    if (cart.length === 0) {
      alert("Your cart is empty");
      return;
    }

    if (!fullName || !phone || !address) {
      alert("Please fill out all required fields (Name, Phone, and Address)");
      return;
    }

    // 🕵️‍♂️ DIAGNOSTIC PRE-CHECK LOG
    console.log("RAW CART STATE DATA:", cart);

    setIsLoading(true);

    const order = {
      customerName: fullName,
      phone,
      address,
      landmark,
      totalAmount,
      store: {
        // Safe fallback if structure changes down the pipeline
        id: Number(cart[0].storeId),
      },
      items: cart.map((item) => {
        // Detect either naming scheme used on the product item page
        const actualProductId = item.productId || item.id;
        
        return {
          quantity: item.quantity,
          price: item.price,
          product: {
            id: Number(actualProductId), // Ensure parsed as a clean number primitive
          },
        };
      }),
    };

    console.log("FINAL OUTBOUND SPRING BOOT PAYLOAD:", JSON.stringify(order, null, 2));

    try {
      const response = await fetch("http://localhost:8080/api/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(order),
      });

      if (response.ok) {
        localStorage.removeItem("cart");
        alert("Order Placed Successfully 🎉");
        router.push("/");
      } else {
        const error = await response.text();
        alert(`Status: ${response.status}\nError: ${error || "No message from backend"}`);
      }
    } catch (err) {
      alert(String(err));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50/50 py-12 px-4 sm:px-6 select-none font-sans">
      <div className="mx-auto max-w-5xl">
        
        {/* Title Block */}
        <div className="mb-10 border-b border-gray-100 pb-6">
          <h1 className="text-2xl font-black tracking-tight text-gray-900 sm:text-3xl">
            Secure Checkout
          </h1>
          <p className="mt-2 text-sm font-medium text-gray-400">
            Provide your shipping logistics to dispatch your delivery.
          </p>
        </div>

        {/* 2-Column Split Console */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          
          {/* Left Side: Delivery Forms */}
          <div className="lg:col-span-2 space-y-6">
            <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
              <h2 className="text-base font-bold tracking-tight text-gray-900 mb-6 flex items-center gap-2">
                <FiTruck className="text-violet-600" /> Shipping Details
              </h2>
              
              <div className="space-y-4">
                {/* Full Name */}
                <div className="relative flex items-center rounded-xl border border-gray-100 bg-gray-50/30 transition-all focus-within:border-violet-500 focus-within:ring-4 focus-within:ring-violet-500/5">
                  <div className="flex h-12 w-12 items-center justify-center text-gray-400">
                    <FiUser className="text-lg" />
                  </div>
                  <input
                    placeholder="Full Name"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full bg-transparent py-3 pr-4 text-sm font-medium text-gray-800 outline-none placeholder:text-gray-400"
                  />
                </div>

                {/* Phone Number */}
                <div className="relative flex items-center rounded-xl border border-gray-100 bg-gray-50/30 transition-all focus-within:border-violet-500 focus-within:ring-4 focus-within:ring-violet-500/5">
                  <div className="flex h-12 w-12 items-center justify-center text-gray-400">
                    <FiPhone className="text-lg" />
                  </div>
                  <input
                    placeholder="Phone Number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-transparent py-3 pr-4 text-sm font-medium text-gray-800 outline-none placeholder:text-gray-400"
                  />
                </div>

                {/* Delivery Address */}
                <div className="relative flex rounded-xl border border-gray-100 bg-gray-50/30 transition-all focus-within:border-violet-500 focus-within:ring-4 focus-within:ring-violet-500/5">
                  <div className="flex h-12 w-12 items-center justify-center text-gray-400 mt-1">
                    <FiMapPin className="text-lg" />
                  </div>
                  <textarea
                    placeholder="Complete Delivery Address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="h-32 w-full bg-transparent py-3 pr-4 text-sm font-medium text-gray-800 outline-none resize-none placeholder:text-gray-400"
                  />
                </div>

                {/* Landmark */}
                <div className="relative flex items-center rounded-xl border border-gray-100 bg-gray-50/30 transition-all focus-within:border-violet-500 focus-within:ring-4 focus-within:ring-violet-500/5">
                  <div className="flex h-12 w-12 items-center justify-center text-gray-400">
                    <FiCompass className="text-lg" />
                  </div>
                  <input
                    placeholder="Landmark (Optional)"
                    value={landmark}
                    onChange={(e) => setLandmark(e.target.value)}
                    className="w-full bg-transparent py-3 pr-4 text-sm font-medium text-gray-800 outline-none placeholder:text-gray-400"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Order Review Panel Drawer */}
          <div className="space-y-6">
            <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm lg:sticky lg:top-24">
              <h2 className="text-base font-bold tracking-tight text-gray-900 mb-4 flex items-center gap-2">
                <FiShoppingBag className="text-violet-600" /> Order Summary
              </h2>

              {/* Items Dynamic Visual List */}
              <div className="max-h-40 overflow-y-auto mb-4 space-y-2 border-b border-gray-50 pb-4 pr-1 scrollbar-thin">
                {cart.map((item) => (
                  <div key={item.id} className="flex justify-between text-xs font-semibold text-gray-600">
                    <span className="truncate max-w-[180px]">
                      {item.name} <span className="text-gray-400 font-normal">x{item.quantity}</span>
                    </span>
                    <span className="text-gray-900">₹{item.price * item.quantity}</span>
                  </div>
                ))}
              </div>

              {/* Financial Ledger Calculation */}
              <div className="space-y-3 border-b border-gray-50 pb-4 text-sm font-medium">
                <div className="flex justify-between text-gray-400">
                  <span>Subtotal</span>
                  <span className="text-gray-900 font-bold">₹{subtotal}</span>
                </div>
                <div className="flex justify-between text-gray-400">
                  <span>Shipping Fee</span>
                  <span className="text-gray-900 font-bold">₹{shippingFee}</span>
                </div>
              </div>

              {/* Total Due */}
              <div className="mt-4 flex justify-between items-center text-gray-900 mb-6">
                <span className="text-sm font-bold">Total Amount</span>
                <span className="text-2xl font-black tracking-tight text-violet-600">
                  ₹{totalAmount}
                </span>
              </div>

              {/* Submit CTA */}
              <button
                onClick={placeOrder}
                disabled={isLoading || cart.length === 0}
                className="group flex w-full items-center justify-center gap-2 rounded-xl bg-violet-600 py-4 text-sm font-bold text-white shadow-md shadow-violet-500/20 transition-all hover:bg-violet-700 active:scale-98 disabled:opacity-50 disabled:pointer-events-none"
              >
                <FiCreditCard className="text-base" />
                <span>{isLoading ? "Processing..." : "Place Order"}</span>
              </button>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}