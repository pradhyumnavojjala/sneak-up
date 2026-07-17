"use client";

import { bannerOffers } from "@/data/offer";
import { motion } from "framer-motion";
import Link from "next/link";

export default function OfferBanner() {

  const today = new Date().getDate();

const offer = bannerOffers[
  today % bannerOffers.length
];
  return (

    <section className="bg-sneakup-background py-24">

      <div className="mx-auto max-w-7xl px-6">

        <motion.div

          initial={{ opacity: 0, y: 50 }}

          whileInView={{ opacity: 1, y: 0 }}

          transition={{ duration: 0.7 }}

          viewport={{ once: true }}

          className={`
            relative
            overflow-hidden
            rounded-[40px]
            bg-gradient-to-r
            ${offer.color}
            p-12
            shadow-2xl
          `}
        >

          {/* Decorative Blur */}

          <div className="absolute -left-16 -top-16 h-52 w-52 rounded-full bg-white/10 blur-3xl" />

          <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-white/10 blur-3xl" />



          <div className="relative z-10 grid items-center gap-10 lg:grid-cols-2">

            {/* LEFT */}

            <div>

              <p className="uppercase tracking-[0.35em] text-sm font-semibold text-white/80">

                🔥 Today's Big Offer

              </p>

              <h2 className="mt-4 text-5xl font-extrabold text-white">

                {offer.title}

              </h2>

              <h3 className="mt-3 text-2xl font-semibold text-white">

                {offer.subtitle}

              </h3>

              <p className="mt-5 max-w-md text-white/90 leading-8">

                {offer.description}

              </p>

              <div className="mt-8 flex flex-wrap gap-4">

                <Link

                  href="/stores"

                  className="rounded-full bg-white px-8 py-3 font-bold text-black transition hover:scale-105"

                >

                  {offer.button}

                </Link>

                <div className="rounded-full border border-white/40 px-6 py-3 font-semibold text-white">

                  Code: {offer.coupon}

                </div>

              </div>

            </div>

            {/* RIGHT */}

            <motion.div

              animate={{ y: [0, -15, 0] }}

              transition={{

                duration: 4,

                repeat: Infinity,

                ease: "easeInOut",

              }}

              className="flex justify-center"

            >

              <span className="text-[220px] drop-shadow-2xl">

                {offer.emoji}

              </span>

            </motion.div>

          </div>

        </motion.div>

      </div>

    </section>

  );

}