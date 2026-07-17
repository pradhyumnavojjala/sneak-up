import { reviews } from "@/data/reviews";
import ReviewCard from "./ReviewCard";

export default function CustomerReviews() {
  return (
    <section className="relative overflow-hidden bg-sneakup-background py-20">

      {/* Decorative Blobs */}

      <div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-sneakup-purple/10 blur-3xl" />

      <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-sneakup-orange/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">

        <div className="mb-14 text-center">

          <p className="font-semibold uppercase tracking-[0.35em] text-sneakup-purple">
            Testimonials
          </p>

          <h2 className="mt-3 text-4xl font-bold text-sneakup-dark">
            What Our Customers Say
          </h2>

          <p className="mt-4 text-gray-500">
            Thousands of happy customers trust SneakUp every day.
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {reviews.map((review) => (

            <ReviewCard
              key={review.id}
              review={review}
            />

          ))}

        </div>

      </div>

    </section>
  );
}