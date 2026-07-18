"use client";

import { useRouter } from "next/navigation";

interface Props {
  subtotal: number;
  delivery: number;
}

export default function CartSummary({
  subtotal,
  delivery,
}: Props) {

    const router = useRouter();

  const total = subtotal + delivery;

  return (

    <div className="rounded-3xl bg-white p-8 shadow-md">

      <h2 className="text-2xl font-bold">
        Order Summary
      </h2>

      <div className="mt-6 space-y-4">

        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>₹{subtotal}</span>
        </div>

        <div className="flex justify-between">
          <span>Delivery</span>
          <span>₹{delivery}</span>
        </div>

        <hr />

        <div className="flex justify-between text-2xl font-bold">
          <span>Total</span>
          <span>₹{total}</span>
        </div>

      </div>

      <button
    onClick={() => router.push("/checkout")}
    className="
        mt-8
        w-full
        rounded-2xl
        bg-sneakup-primary
        py-4
        text-white
        font-semibold
    "
>
    Proceed to Checkout
</button>

    </div>

  );

}