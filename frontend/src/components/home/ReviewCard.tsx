import { Review } from "@/data/reviews";

interface Props {
  review: Review;
}

export default function ReviewCard({ review }: Props) {
  return (
    <div className="group relative overflow-hidden rounded-3xl bg-white p-8 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">

      <div className="absolute right-6 top-6 text-6xl opacity-5">
        💬
      </div>

      <div className="flex items-center gap-4">

        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-sneakup-purple/10 text-4xl">
          {review.avatar}
        </div>

        <div>

          <h3 className="font-bold text-sneakup-dark">
            {review.name}
          </h3>

          <p className="text-sm text-gray-500">
            {review.city}
          </p>

        </div>

      </div>

      <div className="mt-6 text-xl">

        {"⭐".repeat(review.rating)}

      </div>

      <p className="mt-5 leading-8 text-gray-600">
        "{review.review}"
      </p>

    </div>
  );
}