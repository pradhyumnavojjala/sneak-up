import CategoryCard from "./CategoryCard";
import { categories } from "@/data/categories";

export default function Categories() {
  return (
    <section className="bg-white py-20">

      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-14 text-center">

          <span className="text-sm font-semibold uppercase tracking-widest text-sneakup-purple">
            Categories
          </span>

          <h2 className="mt-3 text-4xl font-bold text-sneakup-dark">
            Shop by Category
          </h2>

          <p className="mt-4 text-gray-500">
            Everything you need, all in one place.
          </p>

        </div>

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">

          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              name={category.name}
              emoji={category.emoji}
              color={category.color}
            />
          ))}

        </div>

      </div>

    </section>
  );
}