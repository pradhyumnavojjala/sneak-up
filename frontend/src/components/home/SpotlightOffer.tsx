import { offers } from "@/data/offers";

export default function SpotlightOffer() {
  const today = new Date().getDate();

  const firstOffer = offers[today % offers.length];
  const secondOffer = offers[(today + 1) % offers.length];

  return (
    <section className="bg-sneakup-background py-24">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 md:grid-cols-2">

        {/* First Offer */}

        <div
          className={`
            relative
            overflow-hidden
            rounded-[40px]
            bg-gradient-to-r
            ${firstOffer.color}
            p-10
            text-white
            shadow-2xl
            animate-float
          `}
        >
          <span className="text-7xl">
            {firstOffer.emoji}
          </span>

          <p className="mt-5 uppercase tracking-[0.35em] text-white/80">
            {firstOffer.subtitle}
          </p>

          <h2 className="mt-2 text-4xl font-bold">
            {firstOffer.title}
          </h2>

          <h3 className="mt-6 text-3xl font-bold">
            {firstOffer.discount}
          </h3>

          <button className="mt-8 rounded-full bg-white px-8 py-3 font-bold text-black transition hover:scale-105">
            {firstOffer.button}
          </button>

          <div className="absolute -right-8 -bottom-8 text-[180px] opacity-10">
            {firstOffer.emoji}
          </div>
        </div>

        {/* Second Offer */}

        <div
          className={`
            relative
            overflow-hidden
            rounded-[40px]
            bg-gradient-to-r
            ${secondOffer.color}
            p-10
            text-white
            shadow-2xl
            animate-float-reverse
          `}
        >
          <span className="text-7xl">
            {secondOffer.emoji}
          </span>

          <p className="mt-5 uppercase tracking-[0.35em] text-white/80">
            {secondOffer.subtitle}
          </p>

          <h2 className="mt-2 text-4xl font-bold">
            {secondOffer.title}
          </h2>

          <h3 className="mt-6 text-3xl font-bold">
            {secondOffer.discount}
          </h3>

          <button className="mt-8 rounded-full bg-white px-8 py-3 font-bold text-black transition hover:scale-105">
            {secondOffer.button}
          </button>

          <div className="absolute -right-8 -bottom-8 text-[180px] opacity-10">
            {secondOffer.emoji}
          </div>
        </div>

      </div>
    </section>
  );
}