import CategoryCard from "./CategoryCard";
import { categories } from "@/data/categories";

export default function Categories() {
  return (
    <section className="bg-gray-50/50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14">
          <h2 className="text-3xl font-black tracking-tight text-gray-900">
            Shop by Category
          </h2>
          <p className="mt-2 text-gray-500 font-medium">
            Browse our curated collections by lifestyle preference.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              name={category.name}
              emoji={category.emoji}
              color={category.color} // Ensure these are utility classes like 'bg-purple-100'
              count={category.count || "0"} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}