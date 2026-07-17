// src/data/offer.ts

export interface BannerOffer {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  coupon: string;
  button: string;
  emoji: string;
  color: string;
}

export const bannerOffers: BannerOffer[] = [
  {
    id: 1,
    title: "Flat 50% OFF",
    subtitle: "On Gourmet Meals",
    description:
      "Enjoy restaurant-style meals at half the price for a limited time.",
    coupon: "SNEAK50",
    button: "Order Now",
    emoji: "🍱",
    color: "from-sneakup-purple to-sneakup-orange",
  },

  {
    id: 2,
    title: "Buy 1 Get 1",
    subtitle: "Coffee & Beverages",
    description:
      "Grab your favourite coffee and beverages with our exclusive BOGO offer.",
    coupon: "DRINKUP",
    button: "Grab Deal",
    emoji: "☕",
    color: "from-orange-500 to-red-500",
  },

  {
    id: 3,
    title: "Free Delivery",
    subtitle: "Orders Above ₹399",
    description:
      "No delivery charges on grocery and meal orders above ₹399.",
    coupon: "FREEGO",
    button: "Shop Now",
    emoji: "🛵",
    color: "from-green-500 to-emerald-600",
  },

  {
    id: 4,
    title: "Weekend Feast",
    subtitle: "Special Family Combos",
    description:
      "Treat your family with delicious combo meals specially curated for weekends.",
    coupon: "WEEKEND",
    button: "View Combos",
    emoji: "🍕",
    color: "from-pink-500 to-orange-500",
  },

  {
    id: 5,
    title: "Healthy Choices",
    subtitle: "Fresh Salads & Bowls",
    description:
      "Nutritious meals delivered fresh to help you stay healthy every day.",
    coupon: "HEALTHY",
    button: "Explore",
    emoji: "🥗",
    color: "from-emerald-500 to-lime-500",
  },

  {
    id: 6,
    title: "Midnight Cravings",
    subtitle: "Late Night Specials",
    description:
      "Order your favourite snacks and meals late into the night with exclusive discounts.",
    coupon: "NIGHTOWL",
    button: "Order Now",
    emoji: "🌙",
    color: "from-indigo-600 to-purple-600",
  },
];