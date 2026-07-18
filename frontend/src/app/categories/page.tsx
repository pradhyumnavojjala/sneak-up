"use client";

import * as React from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { FiArrowLeft, FiLayers, FiArrowRight, FiPlus, FiMinus, FiShoppingBag } from "react-icons/fi";
import Link from "next/link";
import { groceryCategories, groceryProducts } from "@/data/groceryData";

// Structure definition for our live checkout rows
interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  emoji: string;
}

export default function CategoriesUnifiedPage() {
  const searchParams = useSearchParams();
  const router = useRouter();

  // 1. Core State Handlers
  const [cart, setCart] = React.useState<CartItem[]>([]);
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const selectedCategoryType = searchParams.get("type")?.toLowerCase() || null;

  const ribbonTierOne = [...groceryCategories, ...groceryCategories];
  const ribbonTierTwo = [...groceryCategories].reverse().concat([...groceryCategories].reverse());

  const getProductCount = (catId: string) => {
    return groceryProducts.filter((p) => p.categoryId === catId).length;
  };

  // 2. Cart Modifier Logic
  const addToCart = (product: typeof groceryProducts[0]) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { id: product.id, name: product.name, price: product.price, quantity: 1, emoji: product.emoji }];
    });
  };

  const removeFromCart = (productId: string) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === productId);
      if (existing?.quantity === 1) {
        return prev.filter((item) => item.id !== productId);
      }
      return prev.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
      );
    });
  };

  const orderTotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  // 3. SQL Database Push Handler
  const handleCheckoutSubmit = async () => {
    if (cart.length === 0) return;
    
    setIsSubmitting(true);
    try {
      // Point this directly to your local API route handling your SQL client (Prisma/Drizzle/etc.)
      const response = await fetch("/api/orders/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          items: cart,
          totalAmount: orderTotal,
        }),
      });

      if (!response.ok) throw new Error("Database transaction rejected.");

      alert("Order successfully logged to SQL database!");
      setCart([]); // Reset local state wrapper
    } catch (error) {
      console.error("SQL Save Error:", error);
      alert("Failed to sync structural order parameters with database layer.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // 4. VIEW MODE: Individual Aisle Showcase
  if (selectedCategoryType) {
    const currentCategory = groceryCategories.find((c) => c.id === selectedCategoryType);
    const targetedProducts = groceryProducts.filter((p) => p.categoryId === selectedCategoryType);

    if (!currentCategory) {
      return (
        <div className="min-h-screen flex flex-col items-center justify-center gap-3 bg-zinc-50/60 text-xs font-bold text-zinc-400 font-sans">
          <span>Aisle "{selectedCategoryType}" not recognized.</span>
          <button 
            onClick={() => router.push("/categories")}
            className="rounded-xl border border-zinc-200 bg-white px-4 py-2 text-3xs font-black uppercase text-zinc-700 shadow-xs hover:bg-zinc-50"
          >
            Back to Showroom
          </button>
        </div>
      );
    }

    return (
      <div className="min-h-screen bg-zinc-50/60 py-16 px-4 sm:px-6 font-sans text-zinc-900">
        <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          
          {/* Main Inventory Column */}
          <div className="lg:col-span-2">
            <button
              onClick={() => router.push("/categories")}
              className="mb-8 inline-flex items-center gap-2 rounded-xl border border-zinc-200/60 bg-white px-4 py-2.5 text-xs font-bold text-zinc-500 shadow-xs transition-all hover:text-zinc-900 hover:border-zinc-300"
            >
              <FiArrowLeft /> Back to Collections
            </button>

            <div className="mb-10 border-b border-zinc-200/60 pb-8">
              <span className="text-4xl">{currentCategory.emoji}</span>
              <h1 className="text-3xl font-black text-zinc-900 mt-3 tracking-tight">{currentCategory.name}</h1>
              <p className="text-xs font-semibold text-zinc-400 mt-1.5 max-w-xl leading-relaxed">{currentCategory.description}</p>
            </div>

            {targetedProducts.length === 0 ? (
              <div className="rounded-2xl border border-dashed border-zinc-200 bg-white p-12 text-center text-xs font-bold text-zinc-400">
                No active products logged inside this aisle yet.
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {targetedProducts.map((product) => {
                  const cartItem = cart.find((item) => item.id === product.id);
                  return (
                    <div 
                      key={product.id} 
                      className="rounded-2xl border border-zinc-100 bg-white p-5 shadow-xs flex items-center justify-between transition-all hover:border-zinc-200 hover:shadow-sm"
                    >
                      <div className="flex items-center gap-4">
                        <div className="text-3xl bg-zinc-50 p-2.5 rounded-xl border border-zinc-100">{product.emoji}</div>
                        <div>
                          <h4 className="text-sm font-bold text-zinc-900">{product.name}</h4>
                          <span className="text-3xs font-bold text-zinc-400 uppercase tracking-wide block mt-0.5">Unit: {product.unit}</span>
                        </div>
                      </div>
                      
                      <div className="text-right flex flex-col items-end gap-1.5">
                        <span className="text-sm font-black text-zinc-900">${product.price.toFixed(2)}</span>
                        
                        {cartItem ? (
                          <div className="flex items-center gap-2 rounded-lg bg-zinc-100 p-1 border border-zinc-200">
                            <button 
                              onClick={() => removeFromCart(product.id)}
                              className="p-1 text-zinc-600 hover:text-zinc-900 transition-colors"
                            >
                              <FiMinus size={10} />
                            </button>
                            <span className="text-2xs font-black px-1 min-w-[12px] text-center">{cartItem.quantity}</span>
                            <button 
                              onClick={() => addToCart(product)}
                              className="p-1 text-zinc-600 hover:text-zinc-900 transition-colors"
                            >
                              <FiPlus size={10} />
                            </button>
                          </div>
                        ) : (
                          <button 
                            onClick={() => addToCart(product)}
                            className="inline-flex items-center gap-1 rounded-lg bg-indigo-600 text-white px-3 py-1.5 text-3xs font-black uppercase tracking-wider transition-all hover:bg-indigo-700 active:scale-95 shadow-xs"
                          >
                            <FiPlus size={10} /> Add
                          </button>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {/* Persistent Order Summary Panel */}
          <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm sticky top-8">
            <h3 className="text-xs font-black uppercase tracking-wider text-zinc-400 flex items-center gap-2 mb-4">
              <FiShoppingBag /> Order Parameters
            </h3>
            
            {cart.length === 0 ? (
              <p className="text-xs font-bold text-zinc-400 text-center py-8 border border-dashed border-zinc-100 rounded-xl">
                No items selected yet.
              </p>
            ) : (
              <div className="space-y-3 max-h-[320px] overflow-y-auto mb-4 pr-1">
                {cart.map((item) => (
                  <div key={item.id} className="flex items-center justify-between text-xs border-b border-zinc-50 pb-2">
                    <span className="font-bold text-zinc-800">{item.emoji} {item.name} <span className="text-zinc-400">x{item.quantity}</span></span>
                    <span className="font-black text-zinc-950">${(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                ))}
              </div>
            )}

            <div className="border-t border-zinc-100 pt-4 mt-4 flex items-center justify-between mb-6">
              <span className="text-xs font-bold text-zinc-500">Subtotal Amount:</span>
              <span className="text-lg font-black text-zinc-950">${orderTotal.toFixed(2)}</span>
            </div>

            <button
              onClick={handleCheckoutSubmit}
              disabled={cart.length === 0 || isSubmitting}
              className="w-full text-center rounded-xl bg-zinc-950 text-white py-3 text-2xs font-black uppercase tracking-widest transition-all hover:bg-zinc-800 disabled:opacity-40 disabled:cursor-not-allowed active:scale-[0.99]"
            >
              {isSubmitting ? "Syncing SQL Entry..." : "Commit Order to SQL"}
            </button>
          </div>

        </div>
      </div>
    );
  }

  // 5. SHOWROOM MODE: Conveyor Belts Default View
  return (
    <div className="min-h-screen bg-zinc-50/60 py-16 px-4 sm:px-6 select-none font-sans overflow-hidden text-zinc-900">
      <div className="mx-auto max-w-7xl">
        
        <div className="mb-6">
          <button
            onClick={() => router.back()}
            className="inline-flex items-center gap-2 rounded-xl border border-zinc-200/60 bg-white px-4 py-2.5 text-xs font-bold text-zinc-500 shadow-xs transition-all hover:border-zinc-300 hover:text-zinc-900 active:scale-98"
          >
            <FiArrowLeft className="text-sm" />
            <span>Return to Dashboard</span>
          </button>
        </div>

        <div className="mb-14 border-b border-zinc-200/60 pb-8">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-indigo-50 px-2.5 py-0.5 text-3xs font-black text-indigo-600 uppercase tracking-widest border border-indigo-100">
            <FiLayers size={10} /> Shop by Category
          </div>
          <h1 className="mt-3 text-3xl font-black tracking-tight text-zinc-900 sm:text-4xl">
            Curated Collections
          </h1>
          <p className="mt-2 text-sm font-medium text-zinc-400 max-w-xl leading-relaxed">
            Browse our catalog rows tailored by lifestyle preference. Hover over any card block to pause the ribbon.
          </p>
        </div>

        <div className="relative w-screen left-1/2 right-1/2 -mx-[50vw] space-y-8 py-4">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-16 bg-gradient-to-r from-zinc-50 via-zinc-50/40 to-transparent sm:w-40" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-16 bg-gradient-to-l from-zinc-50 via-zinc-50/40 to-transparent sm:w-40" />

          {/* Ribbon One */}
          <div className="overflow-hidden">
            <div 
              className="flex gap-6 w-max animate-marquee py-2 hover:[animation-play-state:paused]"
              style={{ animationDuration: "38s" }}
            >
              {ribbonTierOne.map((cat, index) => {
                const count = getProductCount(cat.id);
                return (
                  <div 
                    key={`tier1-${cat.id}-${index}`} 
                    className="w-[290px] shrink-0 rounded-2xl border border-zinc-100 bg-white p-6 shadow-xs transition-all hover:border-zinc-200/80 hover:shadow-md hover:scale-[1.01]"
                  >
                    <div className="text-4xl mb-4">{cat.emoji}</div>
                    <h3 className="text-lg font-black text-zinc-900">{cat.name}</h3>
                    <span className="text-2xs font-bold text-zinc-400 block mt-0.5">{count} Items Available</span>
                    <p className="mt-3 text-xs font-medium text-zinc-400 min-h-[36px] line-clamp-2 leading-relaxed">
                      {cat.description}
                    </p>
                    <Link 
                      href={`/categories?type=${cat.id}`}
                      className="mt-5 inline-flex w-full items-center justify-between rounded-xl bg-zinc-50 border border-zinc-100 px-4 py-2.5 text-xs font-bold text-zinc-600 transition-all hover:bg-indigo-600 hover:text-white hover:border-indigo-600 group"
                    >
                      <span>Explore Collection</span>
                      <FiArrowRight className="transition-transform group-hover:translate-x-0.5" />
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Ribbon Two */}
          <div className="overflow-hidden">
            <div 
              className="flex gap-6 w-max animate-marquee-reverse py-2 hover:[animation-play-state:paused]"
              style={{ animationDuration: "42s" }}
            >
              {ribbonTierTwo.map((cat, index) => {
                const count = getProductCount(cat.id);
                return (
                  <div 
                    key={`tier2-${cat.id}-${index}`} 
                    className="w-[290px] shrink-0 rounded-2xl border border-zinc-100 bg-white p-6 shadow-xs transition-all hover:border-zinc-200/80 hover:shadow-md hover:scale-[1.01]"
                  >
                    <div className="text-4xl mb-4">{cat.emoji}</div>
                    <h3 className="text-lg font-black text-zinc-900">{cat.name}</h3>
                    <span className="text-2xs font-bold text-zinc-400 block mt-0.5">{count} Items Available</span>
                    <p className="mt-3 text-xs font-medium text-zinc-400 min-h-[36px] line-clamp-2 leading-relaxed">
                      {cat.description}
                    </p>
                    <Link 
                      href={`/categories?type=${cat.id}`}
                      className="mt-5 inline-flex w-full items-center justify-between rounded-xl bg-zinc-50 border border-zinc-100 px-4 py-2.5 text-xs font-bold text-zinc-600 transition-all hover:bg-indigo-600 hover:text-white hover:border-indigo-600 group"
                    >
                      <span>Explore Collection</span>
                      <FiArrowRight className="transition-transform group-hover:translate-x-0.5" />
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}