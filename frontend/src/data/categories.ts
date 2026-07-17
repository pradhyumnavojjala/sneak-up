export interface Category {
  id: number;
  name: string;
  emoji: string;
  color: string;
}

export const categories: Category[] = [
  {
    id: 1,
    name: "Vegetables",
    emoji: "🥬",
    color: "bg-green-100",
  },
  {
    id: 2,
    name: "Fruits",
    emoji: "🍎",
    color: "bg-red-100",
  },
  {
    id: 3,
    name: "Dairy",
    emoji: "🥛",
    color: "bg-blue-100",
  },
  {
    id: 4,
    name: "Bakery",
    emoji: "🍞",
    color: "bg-yellow-100",
  },
  {
    id: 5,
    name: "Meals",
    emoji: "🍛",
    color: "bg-orange-100",
  },
  {
    id: 6,
    name: "Beverages",
    emoji: "☕",
    color: "bg-amber-100",
  },
  {
    id: 7,
    name: "Snacks",
    emoji: "🍿",
    color: "bg-pink-100",
  },
  {
    id: 8,
    name: "Frozen",
    emoji: "🧊",
    color: "bg-cyan-100",
  },
];