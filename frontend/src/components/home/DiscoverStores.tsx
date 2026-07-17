import Link from "next/link";
import StoreCard from "./StoreCard";
import { stores } from "@/data/stores";

export default function DiscoverStores() {

  const featuredStores = stores.slice(0, 4);

  return (
    <section className="bg-sneakup-background py-16">

      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-10 flex items-end justify-between">

          <div>

            <p className="font-semibold uppercase tracking-[0.35em] text-sneakup-purple">
              Discover
            </p>

            <h2 className="mt-3 text-4xl font-bold text-sneakup-dark">
              Amazing Stores
            </h2>

            <p className="mt-3 text-gray-500">
              Explore your favourite nearby stores.
            </p>

          </div>

          <Link
            href="/stores"
            className="hidden font-semibold text-sneakup-purple transition hover:translate-x-1 md:block"
          >
            View All →
          </Link>

        </div>

        {/* Filters */}

        <div className="mb-10 flex flex-wrap gap-3">

          {[
            "All",
            "Meals",
            "Cafe",
            "Bakery",
            "Grocery",
          ].map((filter) => (

            <button
              key={filter}
              className="rounded-full border border-gray-300 px-5 py-2 text-sm font-medium transition hover:bg-sneakup-purple hover:text-white"
            >
              {filter}
            </button>

          ))}

        </div>

        {/* Store Grid */}

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">

          {featuredStores.map((store) => (

            <StoreCard
              key={store.id}
              store={store}
            />

          ))}

        </div>

        <div className="mt-10 text-center md:hidden">

          <Link
            href="/stores"
            className="font-semibold text-sneakup-purple"
          >
            View All Stores →
          </Link>

        </div>

      </div>

    </section>
  );
}