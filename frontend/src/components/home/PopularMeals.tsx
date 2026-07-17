import { meals } from "@/data/meals";
import MealRow from "./MealRow";
import Image from "next/image";

export default function PopularMeals() {
  return (
   <section className="relative overflow-hidden bg-sneakup-background py-20">

      <Image
  src="/decor/chp_1.png"
  alt=""
  width={735}
  height={752}
  priority
  draggable={false}
  className="
    pointer-events-none
    select-none
    absolute
    -left-28
    top-30
    h-auto
    w-[1020px]
    h-auto
    -rotate-[-45deg]
    opacity-50
    brightness-100
    saturate-75
    contrast-90
    z-0
  "
/>

      <div className="relative mx-auto max-w-7xl">

        <div className="mb-14 text-center">

          <p className="font-semibold uppercase tracking-[0.3em] text-sneakup-purple">
            Trending
          </p>

          <h2 className="mt-3 text-4xl font-bold text-sneakup-dark">
            Popular Meals
          </h2>

          <p className="mt-3 text-gray-500">
            Freshly prepared. Loved by everyone.
          </p>

        </div>

        <MealRow meals={meals} />

        <MealRow
          meals={[...meals].reverse()}
          reverse
        />

      </div>

    </section>
  );
}