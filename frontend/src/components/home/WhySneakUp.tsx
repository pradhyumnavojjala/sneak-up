import { features } from "@/data/features";
import FeatureCard from "./FeatureCard";

export default function WhySneakUp() {
  return (
    <section className="bg-sneakup-background py-16">

      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-14 text-center">

          <p className="font-semibold uppercase tracking-[0.35em] text-sneakup-purple">
            Why Choose Us
          </p>

          <h2 className="mt-3 text-4xl font-bold text-sneakup-dark">
            Why SneakUp?
          </h2>

          <p className="mt-4 text-gray-500">
            Everything you need for a faster, smarter and happier shopping experience.
          </p>

        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

          {features.map((feature) => (
            <FeatureCard
              key={feature.id}
              feature={feature}
            />
          ))}

        </div>

      </div>

    </section>
  );
}