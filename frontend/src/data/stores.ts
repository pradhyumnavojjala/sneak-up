export interface Store {
  id: number;
  name: string;
  emoji: string;
  rating: number;
  delivery: string;
  products: string;
  color: string;
}

export const stores: Store[] = [
  {
    id: 1,
    name: "Fresh Mart",
    emoji: "🥬",
    rating: 4.9,
    delivery: "20 mins",
    products: "1500+ Products",
    color: "bg-green-100",
  },
  {
    id: 2,
    name: "Paradise",
    emoji: "🍛",
    rating: 4.8,
    delivery: "25 mins",
    products: "120 Meals",
    color: "bg-orange-100",
  },
  {
    id: 3,
    name: "Pizza Hub",
    emoji: "🍕",
    rating: 4.7,
    delivery: "18 mins",
    products: "90 Items",
    color: "bg-red-100",
  },
  {
    id: 4,
    name: "Coffee House",
    emoji: "☕",
    rating: 4.9,
    delivery: "15 mins",
    products: "70 Drinks",
    color: "bg-amber-100",
  },
  {
    id: 5,
    name: "Sweet Magic",
    emoji: "🍰",
    rating: 4.8,
    delivery: "22 mins",
    products: "150 Sweets",
    color: "bg-pink-100",
  },
  {
    id: 6,
    name: "Green Basket",
    emoji: "🥦",
    rating: 4.9,
    delivery: "19 mins",
    products: "900 Products",
    color: "bg-emerald-100",
  },
  {
    id: 7,
    name: "Burger Point",
    emoji: "🍔",
    rating: 4.7,
    delivery: "17 mins",
    products: "60 Meals",
    color: "bg-yellow-100",
  },
  {
    id: 8,
    name: "Bake Studio",
    emoji: "🥐",
    rating: 4.8,
    delivery: "23 mins",
    products: "200 Bakery Items",
    color: "bg-orange-50",
  },
];