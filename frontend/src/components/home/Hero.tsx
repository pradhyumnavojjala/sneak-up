"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-sneakup-background">

      {/* Background Blur Circles */}
      <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-sneakup-purple/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-sneakup-orange/10 blur-3xl" />

      {/* Floating Decorations */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute left-16 top-24 h-5 w-5 rounded-full bg-sneakup-orange"
      />

      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute right-24 top-40 h-3 w-3 rounded-full bg-sneakup-purple"
      />

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 py-24 lg:grid-cols-2">

        {/* LEFT SIDE */}

        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >

          <span className="inline-block rounded-full bg-sneakup-purple/10 px-4 py-2 text-sm font-semibold text-sneakup-purple">
            🥷 Fresh • Fast • Ready Anytime
          </span>

          <h1 className="text-6xl font-extrabold leading-tight text-sneakup-dark">

            Your groceries,

            <br />

            <span className="text-sneakup-purple">
              delivered before
            </span>

            <br />

            your hunger.

          </h1>

          <p className="max-w-lg text-lg leading-8 text-gray-600">
            Shop groceries, frozen meals and ready-to-heat gourmet dishes
            from your favourite nearby stores — all in one place.
          </p>

          <div className="flex flex-wrap gap-4">

            <Link
              href="/stores"
              className="rounded-full bg-sneakup-purple px-8 py-4 font-semibold text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              Explore Stores
            </Link>

            <Link
              href="/categories"
              className="rounded-full border-2 border-sneakup-purple px-8 py-4 font-semibold text-sneakup-purple transition duration-300 hover:bg-sneakup-purple hover:text-white"
            >
              Order Meals
            </Link>

          </div>

          {/* Stats */}

          <div className="flex gap-10 pt-6">

            <div>
              <h3 className="text-2xl font-bold text-sneakup-dark">150+</h3>
              <p className="text-gray-500">Stores</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-sneakup-dark">5K+</h3>
              <p className="text-gray-500">Products</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-sneakup-dark">15 Min</h3>
              <p className="text-gray-500">Delivery</p>
            </div>

          </div>

        </motion.div>

        {/* RIGHT SIDE */}

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: 1,
            scale: 1,
            y: [0, -15, 0],
          }}
          transition={{
            opacity: { duration: 1 },
            scale: { duration: 1 },
            y: {
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
          className="relative flex justify-center"
        >

          {/* Glow Behind Image */}
          <div className="absolute h-96 w-96 rounded-full bg-sneakup-orange/20 blur-3xl" />

          {/* Hero Image */}

          <div className="relative z-10">

            <Image
              src="/images/hero-food-new2.png"
              alt="SneakUp Hero Food"
              width={1020}
              height={1020}
              priority
            />

          </div>

        </motion.div>

      </div>

    </section>
  );
}