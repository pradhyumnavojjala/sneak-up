export interface Offer {
  id: number;
  emoji: string;
  title: string;
  subtitle: string;
  discount: string;
  button: string;
  color: string;
}

export const offers: Offer[] = [
  {
    id: 1,
    emoji: "🍛",
    title: "Biryani Festival",
    subtitle: "Today's Spotlight",
    discount: "40% OFF",
    button: "Order Now",
    color: "from-orange-500 to-red-500",
  },
  {
    id: 2,
    emoji: "☕",
    title: "Coffee Lovers Day",
    subtitle: "Today's Spotlight",
    discount: "Buy 1 Get 1",
    button: "Grab Deal",
    color: "from-amber-500 to-orange-500",
  },
  {
    id: 3,
    emoji: "🍕",
    title: "Pizza Friday",
    subtitle: "Today's Spotlight",
    discount: "Free Garlic Bread",
    button: "Explore",
    color: "from-red-500 to-pink-500",
  },
  {
    id: 4,
    emoji: "🥗",
    title: "Healthy Week",
    subtitle: "Today's Spotlight",
    discount: "25% OFF",
    button: "Eat Healthy",
    color: "from-green-500 to-emerald-500",
  },
  {
    id: 5,
    emoji: "🥛",
    title: "Fresh Dairy",
    subtitle: "Today's Spotlight",
    discount: "Flat ₹100 OFF",
    button: "Shop Fresh",
    color: "from-blue-500 to-cyan-500",
  },
];


