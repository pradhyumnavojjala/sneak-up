import Link from "next/link";
import { Store } from "@/data/stores";

interface Props {
  store: Store;
}

export default function StoreCard({ store }: Props) {
  return (
    <div className="group overflow-hidden rounded-3xl bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

      <div
        className={`flex h-36 items-center justify-center ${store.color}`}
      >
        <span className="text-7xl transition duration-500 group-hover:scale-110">
          {store.emoji}
        </span>
      </div>

      <div className="space-y-3 p-5">

        <div className="flex items-center justify-between">

          <span className="rounded-full bg-yellow-100 px-3 py-1 text-sm font-semibold text-yellow-700">
            ⭐ {store.rating}
          </span>

          <span className="text-sm text-gray-500">
            🚴 {store.delivery}
          </span>

        </div>

        <h3 className="text-xl font-bold text-sneakup-dark">
          {store.name}
        </h3>

        <p className="text-gray-500">
          {store.products}
        </p>

        <Link
          href="/stores"
          className="inline-flex items-center gap-2 font-semibold text-sneakup-purple transition-all group-hover:gap-3"
        >
          Visit Store →
        </Link>

      </div>

    </div>
  );
}