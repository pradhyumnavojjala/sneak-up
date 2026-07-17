export interface Meal {
  id: number;
  name: string;
  emoji: string;
  price: number;
  rating: number;
}

export const meals: Meal[] = [
  {
    id: 1,
    name: "Chicken Biryani",
    emoji: "🍛",
    price: 249,
    rating: 4.9,
  },
  {
    id: 2,
    name: "Pizza",
    emoji: "🍕",
    price: 299,
    rating: 4.8,
  },
  {
    id: 3,
    name: "Burger",
    emoji: "🍔",
    price: 179,
    rating: 4.7,
  },
  {
    id: 4,
    name: "Noodles",
    emoji: "🍜",
    price: 199,
    rating: 4.8,
  },
  {
    id: 5,
    name: "Veg Thali",
    emoji: "🍱",
    price: 229,
    rating: 4.9,
  },
  {
    id: 6,
    name: "Coffee",
    emoji: "☕",
    price: 149,
    rating: 4.8,
  },
  {
    id: 7,
    name: "Fries",
    emoji: "🍟",
    price: 129,
    rating: 4.6,
  },
  {
    id: 8,
    name: "Ice Cream",
    emoji: "🍨",
    price: 99,
    rating: 4.8,
  },
];