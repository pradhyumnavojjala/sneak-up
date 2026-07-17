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

  const items = [...meals, ...meals];

  return (
    <div className="overflow-hidden">

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
            {...meal}
          />
        ))}
      </div>

    </div>
  );
}