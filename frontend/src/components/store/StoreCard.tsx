import Link from "next/link";
import { Store } from "@/types/store";


interface Props {
  store: Store;
}

export default function StoreCard({ store }: Props) {
  return (
    <Link
  href={`/stores/${store.id}`}
>
    <div 
      className="
        group
        rounded-3xl
        bg-white
        p-6
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-2
        hover:shadow-xl
      "
    >
      {/* Emoji */}

      <div
        className={`
          ${store.color}
          flex h-20 w-20 items-center justify-center
          rounded-2xl
          text-5xl
          transition
          group-hover:scale-110
        `}
      >
        {store.emoji}
      </div>

      {/* Name & Rating */}

      <div className="mt-6 flex items-center justify-between">

        <h3 className="text-2xl font-bold text-sneakup-dark">
          {store.name}
        </h3>

        <span className="rounded-full bg-yellow-100 px-3 py-1 text-sm font-semibold">
          ⭐ {store.rating}
        </span>

      </div>

      {/* Delivery */}

      <div className="mt-5 flex items-center justify-between text-gray-500">

        <span>🚚 {store.delivery}</span>

        <span>{store.products}</span>

      </div>

      {/* Open Status */}

      <div className="mt-5 inline-block rounded-full bg-green-100 px-3 py-1 text-sm font-semibold text-green-700">
        🟢 Open Now
      </div>

      {/* Button */}

      <span
  className="
    mt-8
    inline-flex
    font-semibold
    text-sneakup-purple
    transition
    group-hover:translate-x-2
  "
>
      Visit Store →
    </span>
    </div>
    </Link>
  );
}