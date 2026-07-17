interface Props {
  name: string;
  emoji: string;
  rating: number;
  delivery: string;
  products: string;
  color: string;
}

export default function StoreHero({
  name,
  emoji,
  rating,
  delivery,
  products,
  color,
}: Props) {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-sneakup-background
        pb-12
      "
    >
      {/* Banner */}

      <div
        className={`
          ${color}
          h-56
          w-full
          rounded-b-[40px]
        `}
      />

      <div className="mx-auto -mt-20 max-w-7xl px-6">

        <div
          className="
            rounded-3xl
            bg-white
            p-8
            shadow-xl
          "
        >

          <div className="flex flex-col gap-8 md:flex-row md:items-center">

            {/* Store Icon */}

            <div
              className={`
                ${color}
                flex
                h-32
                w-32
                items-center
                justify-center
                rounded-3xl
                text-7xl
                shadow-md
              `}
            >
              {emoji}
            </div>

            {/* Store Info */}

            <div className="flex-1">

              <h1 className="text-4xl font-bold text-sneakup-dark">
                {name}
              </h1>

              <div className="mt-4 flex flex-wrap gap-4">

                <span className="rounded-full bg-yellow-100 px-4 py-2 font-semibold">
                  ⭐ {rating}
                </span>

                <span className="rounded-full bg-green-100 px-4 py-2 font-semibold text-green-700">
                  🟢 Open Now
                </span>

                <span className="rounded-full bg-gray-100 px-4 py-2">
                  🚚 {delivery}
                </span>

                <span className="rounded-full bg-gray-100 px-4 py-2">
                  📦 {products}
                </span>

              </div>

              <p className="mt-6 max-w-2xl text-gray-500">
                Fresh groceries, delicious meals and everyday essentials
                delivered to your doorstep with lightning-fast delivery.
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}