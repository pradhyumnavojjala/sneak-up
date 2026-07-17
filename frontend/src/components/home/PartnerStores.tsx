import { stores } from "@/data/stores";
import StoreCard from "./StoreCard";
import Image from "next/image";

export default function PartnerStores() {
  return (
    <section className="relative overflow-hidden bg-sneakup-background py-20">

        <Image
          src="/decor/box1.png"
          alt=""
          width={735}
          height={752}
          priority
          draggable={false}
          className="
            pointer-events-none
            select-none
            absolute
            -right-15
            top-30
            h-auto
            w-[1020px]
            h-auto
            -rotate-[45deg]
            opacity-50
            brightness-90
            saturate-75
            contrast-100
            z-0
          "
        />

      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-12 text-center">

          <p className="font-semibold uppercase tracking-[0.35em] text-sneakup-purple">
            Our Trusted Partners
          </p>

          <h2 className="mt-3 text-4xl font-bold text-sneakup-dark">
            Discover Amazing Stores
          </h2>

          <p className="mt-4 text-gray-500">
            Shop groceries, gourmet meals, bakery items, dairy and much more.
          </p>

        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

          {stores.map((store) => (
            <StoreCard
              key={store.id}
              store={store}
            />
          ))}

        </div>

        <div className="mt-12 flex justify-center">

          <button className="rounded-full border border-sneakup-purple px-8 py-3 font-semibold text-sneakup-purple transition hover:bg-sneakup-purple hover:text-white">
            View All Stores →
          </button>

        </div>

      </div>

    </section>
  );
}