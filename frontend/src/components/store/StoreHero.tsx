"use client";

import { motion } from "framer-motion";

const categories = [
  "🥬 Grocery",
  "🍕 Restaurant",
  "☕ Cafe",
  "🥐 Bakery",
  "🍰 Desserts",
  "💊 Pharmacy",
];

const stats = [
  {
    value: "250+",
    label: "Stores",
  },
  {
    value: "5000+",
    label: "Products",
  },
  {
    value: "4.9★",
    label: "Rating",
  },
  {
    value: "15 Min",
    label: "Delivery",
  },
];

const featuredStores = [
  {
    emoji: "🥬",
    name: "Fresh Mart",
    time: "20 mins",
    color: "bg-green-100",
  },
  {
    emoji: "🍛",
    name: "Paradise",
    time: "25 mins",
    color: "bg-orange-100",
  },
  {
    emoji: "☕",
    name: "Coffee House",
    time: "15 mins",
    color: "bg-amber-100",
  },
];

export default function StoreHero() {
  return (
    <section className="relative overflow-hidden bg-sneakup-background">

      {/* Blur Background */}

      <div className="absolute -top-32 -left-32 h-80 w-80 rounded-full bg-sneakup-purple/10 blur-3xl" />

      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-sneakup-orange/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-20 px-6 py-24 lg:grid-cols-2">

        {/* LEFT */}

        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >

          <span className="inline-flex rounded-full bg-sneakup-purple/10 px-5 py-2 text-sm font-semibold text-sneakup-purple">
            🏪 Store Explorer
          </span>

          <h1 className="mt-6 text-6xl font-extrabold leading-tight text-sneakup-dark">
            Discover Amazing

            <span className="block text-sneakup-purple">
              Stores Near You
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-gray-500">
            Groceries, restaurants, cafés, bakeries and specialty stores —
            everything you need delivered in minutes.
          </p>

          {/* Search */}

          <div className="mt-10">

            <input
              placeholder="🔍 Search stores..."
              className="
                w-full
                rounded-2xl
                border
                border-gray-200
                bg-white
                px-7
                py-5
                text-lg
                shadow-lg
                outline-none
                transition
                focus:border-sneakup-purple
                focus:ring-4
                focus:ring-sneakup-purple/10
              "
            />

          </div>

          {/* Categories */}

          <div className="mt-8 flex flex-wrap gap-3">

            {categories.map((category) => (
              <button
                key={category}
                className="
                  rounded-full
                  bg-white
                  px-5
                  py-3
                  font-medium
                  shadow-sm
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-sneakup-purple
                  hover:text-white
                "
              >
                {category}
              </button>
            ))}

          </div>

          {/* Stats */}

          <div className="mt-10 grid grid-cols-2 gap-5 md:grid-cols-4">

            {stats.map((stat) => (
              <div
                key={stat.label}
                className="
                  rounded-2xl
                  bg-white
                  p-5
                  text-center
                  shadow-md
                "
              >
                <h3 className="text-3xl font-bold text-sneakup-purple">
                  {stat.value}
                </h3>

                <p className="mt-2 text-gray-500">
                  {stat.label}
                </p>

              </div>
            ))}

          </div>

        </motion.div>

        {/* RIGHT */}

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{ duration: 0.8 }}
          className="relative hidden lg:block"
        >

          {/* Main Card */}

          <div className="rounded-[36px] bg-white p-8 shadow-2xl">

            <h3 className="mb-8 text-2xl font-bold text-sneakup-dark">
              Trending Stores
            </h3>

            <div className="space-y-5">

              {featuredStores.map((store, index) => (

                <motion.div
                  key={store.name}
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 4 + index,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="
                    flex
                    items-center
                    justify-between
                    rounded-2xl
                    bg-gray-50
                    p-5
                    shadow-sm
                  "
                >

                  <div className="flex items-center gap-4">

                    <div
                      className={`${store.color} flex h-16 w-16 items-center justify-center rounded-2xl text-4xl`}
                    >
                      {store.emoji}
                    </div>

                    <div>

                      <h4 className="font-bold text-sneakup-dark">
                        {store.name}
                      </h4>

                      <p className="text-gray-500">
                        ⭐ 4.9
                      </p>

                    </div>

                  </div>

                  <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
                    {store.time}
                  </span>

                </motion.div>

              ))}

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}