interface Props {
  name: string;
  emoji: string;
  price: number;
  rating: number;
}

export default function MealCard({
  name,
  emoji,
  price,
  rating,
}: Props) {
  return (
    <div
      className="
        group
        min-w-[240px]
        rounded-3xl
        border
        border-gray-100
        bg-white
        p-5
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-2
        hover:shadow-xl
      "
    >
      <div className="flex justify-center text-6xl">
        {emoji}
      </div>

      <h3 className="mt-4 text-lg font-bold">
        {name}
      </h3>

      <div className="mt-2 flex justify-between text-sm text-gray-500">
        <span>⭐ {rating}</span>
        <span>₹{price}</span>
      </div>

      <button className="mt-5 w-full rounded-xl bg-sneakup-purple py-2 font-semibold text-white transition hover:opacity-90">
        Add to Cart
      </button>
    </div>
  );
}