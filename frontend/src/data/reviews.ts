export interface Review {
  id: number;
  name: string;
  city: string;
  avatar: string;
  rating: number;
  review: string;
}

export const reviews: Review[] = [
  {
    id: 1,
    name: "Rahul Sharma",
    city: "Hyderabad",
    avatar: "👨🏻",
    rating: 5,
    review:
      "Fresh groceries arrived in just 15 minutes. Everything was perfectly packed and super fresh.",
  },
  {
    id: 2,
    name: "Priya Reddy",
    city: "Bengaluru",
    avatar: "👩🏻",
    rating: 5,
    review:
      "The food was still hot when it reached me. SneakUp has become my favourite delivery app.",
  },
  {
    id: 3,
    name: "Arjun Patel",
    city: "Chennai",
    avatar: "🧑🏻",
    rating: 5,
    review:
      "One app for groceries, meals and cafés. Smooth ordering experience and very fast delivery.",
  },
];