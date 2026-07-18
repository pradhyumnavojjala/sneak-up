import MealCard from "./MealCard";
import { Meal } from "@/data/meals";

interface Props {
  meals: Meal[];
  reverse?: boolean;
}

export default function MealRow({
  meals,
  reverse = false,
}: Props) {
  // Double the list array buffer to feed a seamless infinite loop animation
  const items = [...meals, ...meals];

  return (
    <div className="overflow-hidden w-full">
      <div
        className={`
          flex
          gap-6
          w-max
          py-4
          ${
            reverse
              ? "animate-marquee-reverse"
              : "animate-marquee"
          }
          hover:[animation-play-state:paused]
        `}
      >
        {items.map((meal, index) => (
          <MealCard
            key={`${meal.id}-${index}`}
            id={meal.id.toString()} // ✅ Explicit conversion guarantees matching your strict cart schema
            name={meal.name}
            emoji={meal.emoji}
            price={meal.price}
            rating={meal.rating}
            storeId={meal.storeId?.toString() || "1"} // Safe optional mapping defaults to fallback context
          />
        ))}
      </div>
    </div>
  );
}