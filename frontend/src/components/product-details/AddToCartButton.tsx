"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Product } from "@/data/products";
import { addToCart } from "@/utils/cart";
import { FiShoppingBag, FiCheck, FiLoader } from "react-icons/fi";

interface Props {
  product: Product;
}

export default function AddToCartButton({ product }: Props) {
  const router = useRouter();
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  async function handleAddToCart() {
    setStatus("loading");

    // Simulate a tiny, premium network delay for the micro-interaction
    await new Promise((resolve) => setTimeout(resolve, 600));

    try {
      addToCart(product);
      setStatus("success");

      // Reset back to idle or redirect after showing the success checkmark
      setTimeout(() => {
        setStatus("idle");
        router.push("/cart");
      }, 800);
    } catch (error) {
      console.error(error);
      setStatus("idle");
    }
  }

  return (
    <button
      onClick={handleAddToCart}
      disabled={status !== "idle"}
      className={`
        relative flex w-full items-center justify-center gap-2 rounded-xl py-4 text-base font-bold text-white transition-all duration-300 select-none active:scale-[0.98] disabled:pointer-events-none
        ${
          status === "success"
            ? "bg-emerald-600 shadow-lg shadow-emerald-500/20"
            : "bg-violet-600 shadow-md shadow-violet-500/10 hover:bg-violet-700 hover:shadow-lg hover:shadow-violet-500/20"
        }
      `}
    >
      {status === "idle" && (
        <>
          <FiShoppingBag className="text-lg transition-transform duration-200 group-hover:scale-110" />
          <span>Add to Cart</span>
        </>
      )}

      {status === "loading" && (
        <>
          <FiLoader className="text-lg animate-spin" />
          <span>Securing item...</span>
        </>
      )}

      {status === "success" && (
        <>
          <FiCheck className="text-lg stroke-[3] animate-bounce" />
          <span>Added to Bag!</span>
        </>
      )}
    </button>
  );
}