// 1. Define and export the missing type interface first
export interface Offer1 {
  id: string;
  title: string;
  badge: string;
  description: string;
  discountDisplay: string;
  originalPrice: number;
  offerPrice: number;
  emoji: string;
  expiresIn: string;
  bgColor: string;
  borderColor: string;
  accentColor: string;
}


export const activeOffers: Offer1[] = [
  // === PRODUCE & FRESH DEALS ===
  {
    id: "off-fresh-01",
    title: "Midnight Crisp Special",
    badge: "Flash Deal",
    description: "Get 40% off on premium fresh organic apples when bundled together.",
    discountDisplay: "40% OFF",
    originalPrice: 4.99,
    offerPrice: 2.99,
    emoji: "🍎",
    expiresIn: "2h 14m",
    bgColor: "from-rose-50/50 to-rose-100/20",
    borderColor: "border-rose-100/70",
    accentColor: "text-rose-600 bg-rose-50"
  },
  {
    id: "off-fresh-02",
    title: "Guacamole Kit Markdown",
    badge: "Bundle Deal",
    description: "4 perfectly ripe avocados packed with a bunch of fresh cilantro.",
    discountDisplay: "$3.50 OFF",
    originalPrice: 8.50,
    offerPrice: 5.00,
    emoji: "🥑",
    expiresIn: "5h 45m",
    bgColor: "from-emerald-50/50 to-emerald-100/20",
    borderColor: "border-emerald-100/70",
    accentColor: "text-emerald-700 bg-emerald-50"
  },
  {
    id: "off-fresh-03",
    title: "Berry Blitz Container",
    badge: "BOGO Mix",
    description: "Buy one organic strawberry pint, get the second sweet raspberry tub completely free.",
    discountDisplay: "BUY 1 GET 1",
    originalPrice: 6.99,
    offerPrice: 3.50,
    emoji: "🍓",
    expiresIn: "1 day left",
    bgColor: "from-pink-50/50 to-pink-100/20",
    borderColor: "border-pink-100/70",
    accentColor: "text-pink-600 bg-pink-50"
  },
  {
    id: "off-fresh-04",
    title: "Citrus Sunrise Box",
    badge: "Bulk Save",
    description: "5lb crate of high-juice Navel Oranges, locally harvested.",
    discountDisplay: "25% SAVINGS",
    originalPrice: 12.00,
    offerPrice: 9.00,
    emoji: "🍊",
    expiresIn: "3 days left",
    bgColor: "from-orange-50/50 to-orange-100/20",
    borderColor: "border-orange-100/70",
    accentColor: "text-orange-700 bg-orange-50"
  },
  {
    id: "off-fresh-05",
    title: "Tropical Gold Harvest",
    badge: "Price Drop",
    description: "Sweet, extra-large golden pineapples chopped and prepped.",
    discountDisplay: "$2.00 FLAT",
    originalPrice: 5.99,
    offerPrice: 3.99,
    emoji: "🍍",
    expiresIn: "Today Only",
    bgColor: "from-yellow-50/50 to-yellow-100/20",
    borderColor: "border-yellow-100/70",
    accentColor: "text-yellow-700 bg-yellow-50"
  },

  // === PANTRY STAPLES & DRY GOODS ===
  {
    id: "off-bulk-02",
    title: "Pantry Builder Combo",
    badge: "Bulk Save",
    description: "Buy 2 oat milk cartons and unlock custom multi-unit wholesale pricing parameters.",
    discountDisplay: "BUY 1 GET 1 50%",
    originalPrice: 5.50,
    offerPrice: 4.12,
    emoji: "🥛",
    expiresIn: "Today Only",
    bgColor: "from-amber-50/50 to-amber-100/20",
    borderColor: "border-amber-100/70",
    accentColor: "text-amber-700 bg-amber-50"
  },
  {
    id: "off-chef-03",
    title: "Aisle Master Bundle",
    badge: "Chef's Pack",
    description: "Fresh Italian bundle package markdown including artisanal pasta and zero-chemical oil bases.",
    discountDisplay: "$5 FLAT OFF",
    originalPrice: 15.00,
    offerPrice: 10.00,
    emoji: "🍝",
    expiresIn: "3 days left",
    bgColor: "from-indigo-50/50 to-indigo-100/20",
    borderColor: "border-indigo-100/70",
    accentColor: "text-indigo-600 bg-indigo-50"
  },
  {
    id: "off-dry-08",
    title: "Extra Virgin Olive Trio",
    badge: "Premium",
    description: "Cold-pressed single origin cooking oil. Stock your cabinets before dinner service.",
    discountDisplay: "30% PRICE DROP",
    originalPrice: 24.99,
    offerPrice: 17.49,
    emoji: "🫒",
    expiresIn: "4 hours left",
    bgColor: "from-lime-50/50 to-lime-100/20",
    borderColor: "border-lime-100/70",
    accentColor: "text-lime-700 bg-lime-50"
  },
  {
    id: "off-dry-09",
    title: "Morning Fuel Grind",
    badge: "Daily Kick",
    description: "1lb dark roast whole bean single-origin coffee blend to optimize developer productivity.",
    discountDisplay: "SAVE $4.00",
    originalPrice: 18.00,
    offerPrice: 14.00,
    emoji: "☕",
    expiresIn: "12h 30m",
    bgColor: "from-stone-50/50 to-stone-100/20",
    borderColor: "border-stone-100/70",
    accentColor: "text-stone-700 bg-stone-50"
  },
  {
    id: "off-dry-10",
    title: "Golden Honey Jar",
    badge: "Pure Wild",
    description: "Raw unpasteurized clover honey harvested direct from local organic apiaries.",
    discountDisplay: "15% OFF",
    originalPrice: 9.50,
    offerPrice: 8.07,
    emoji: "🍯",
    expiresIn: "2 days left",
    bgColor: "from-yellow-50/50 to-yellow-100/20",
    borderColor: "border-yellow-200/60",
    accentColor: "text-yellow-800 bg-yellow-100/60"
  },

  // === DAIRY & PLANT-BASED ===
  {
    id: "off-dairy-11",
    title: "Artisanal Cheese Board",
    badge: "Gourmet",
    description: "A curation of sharp white cheddar, aged gouda, and French brie cuts.",
    discountDisplay: "20% OFF",
    originalPrice: 19.99,
    offerPrice: 15.99,
    emoji: "🧀",
    expiresIn: "Today Only",
    bgColor: "from-amber-50/40 to-yellow-100/30",
    borderColor: "border-amber-200/50",
    accentColor: "text-amber-800 bg-amber-50"
  },
  {
    id: "off-dairy-12",
    title: "Probiotic Greek Tub",
    badge: "Healthy Save",
    description: "Value tub of 0% fat authentic strained Greek yogurt.",
    discountDisplay: "$1.50 OFF",
    originalPrice: 5.49,
    offerPrice: 3.99,
    emoji: "🥛",
    expiresIn: "6h 12m",
    bgColor: "from-sky-50/50 to-sky-100/20",
    borderColor: "border-sky-100/70",
    accentColor: "text-sky-600 bg-sky-50"
  },
  {
    id: "off-dairy-13",
    title: "Organic Grade-A Pasture Eggs",
    badge: "Farm Direct",
    description: "Free-range, omega-3 enriched brown eggs. 18-count value packing bundle.",
    discountDisplay: "$2.50 OFF",
    originalPrice: 7.99,
    offerPrice: 5.49,
    emoji: "🥚",
    expiresIn: "1 day left",
    bgColor: "from-orange-50/40 to-amber-100/20",
    borderColor: "border-orange-200/40",
    accentColor: "text-amber-900 bg-amber-100/50"
  },
  {
    id: "off-dairy-14",
    title: "Salted Sweet Cream Butter",
    badge: "Baking Essential",
    description: "Two 4-stick packs of grass-fed churned cream perfect for flaky pie crust configurations.",
    discountDisplay: "BOGO 50%",
    originalPrice: 6.00,
    offerPrice: 4.50,
    emoji: "🧈",
    expiresIn: "4 days left",
    bgColor: "from-yellow-50/60 to-yellow-100/30",
    borderColor: "border-yellow-200/50",
    accentColor: "text-yellow-700 bg-yellow-50"
  },
  {
    id: "off-dairy-15",
    title: "Almond Vanilla Barista Pack",
    badge: "Plant Based",
    description: "Case of 6 shelf-stable almond milk cartons formulated to steam and foam perfectly.",
    discountDisplay: "35% OFF",
    originalPrice: 16.50,
    offerPrice: 10.72,
    emoji: "🧋",
    expiresIn: "Today Only",
    bgColor: "from-neutral-50 to-neutral-200/30",
    borderColor: "border-neutral-200/80",
    accentColor: "text-neutral-700 bg-neutral-100"
  },

  // === PROTEIN, MEAT & SEAFOOD ===
  {
    id: "off-meat-16",
    title: "Prime Ribeye Steak",
    badge: "Premium Cut",
    description: "Thick-cut, heavily marbled USDA Prime beef aged for maximum flavor depth.",
    discountDisplay: "$8.00 OFF",
    originalPrice: 26.00,
    offerPrice: 18.00,
    emoji: "🥩",
    expiresIn: "3h 40m",
    bgColor: "from-red-50/50 to-red-100/20",
    borderColor: "border-red-100/70",
    accentColor: "text-red-700 bg-red-50"
  },
  {
    id: "off-meat-17",
    title: "Atlantic Salmon Fillet",
    badge: "Wild Caught",
    description: "Freshly sourced, skin-on cold water salmon fillets loaded with healthy fats.",
    discountDisplay: "22% REDUCTION",
    originalPrice: 18.99,
    offerPrice: 14.81,
    emoji: "🐟",
    expiresIn: "Today Only",
    bgColor: "from-cyan-50/50 to-cyan-100/20",
    borderColor: "border-cyan-100/70",
    accentColor: "text-cyan-700 bg-cyan-50"
  },
  {
    id: "off-meat-18",
    title: "Free-Range Chicken Breast",
    badge: "Meal Prep XL",
    description: "5lb bulk club value package of boneless, skinless chicken breast cuts.",
    discountDisplay: "$6 FLAT OFF",
    originalPrice: 22.50,
    offerPrice: 16.50,
    emoji: "🍗",
    expiresIn: "2 days left",
    bgColor: "from-orange-50/50 to-orange-100/20",
    borderColor: "border-orange-200/60",
    accentColor: "text-orange-800 bg-orange-50"
  },
  {
    id: "off-meat-19",
    title: "Smoked Applewood Bacon",
    badge: "Weekend Brunch",
    description: "Thick-sliced center cut pork belly wood-smoked over authentic applewood chips.",
    discountDisplay: "BOGO FREE",
    originalPrice: 9.99,
    offerPrice: 5.00,
    emoji: "🥓",
    expiresIn: "5 days left",
    bgColor: "from-rose-50/50 to-rose-100/20",
    borderColor: "border-rose-200/50",
    accentColor: "text-rose-700 bg-rose-50"
  },
  {
    id: "off-meat-20",
    title: "Jumbo Gulf Shrimp",
    badge: "Seafood Dock",
    description: "Peeled, deveined tail-on sweet shrimp frozen instantly at peak freshness.",
    discountDisplay: "30% OFF",
    originalPrice: 14.99,
    offerPrice: 10.49,
    emoji: "🍤",
    expiresIn: "8h 15m",
    bgColor: "from-teal-50/50 to-teal-100/20",
    borderColor: "border-teal-100/70",
    accentColor: "text-teal-700 bg-teal-50"
  },

  // === BAKERY & SWEETS ===
  {
    id: "off-bake-21",
    title: "Artisanal Sourdough Boule",
    badge: "Fresh Baked",
    description: "Wild yeast fermented loaf with a thick blistering crust and open airy crumb.",
    discountDisplay: "$1.50 OFF",
    originalPrice: 5.50,
    offerPrice: 4.00,
    emoji: "🍞",
    expiresIn: "1h 50m",
    bgColor: "from-yellow-50/40 to-amber-100/20",
    borderColor: "border-amber-200/40",
    accentColor: "text-amber-800 bg-amber-50"
  },
  {
    id: "off-bake-22",
    title: "All-Butter Croissant Box",
    badge: "Morning Treat",
    description: "Pack of 4 classic flaky French pastries made using pure imported cream blocks.",
    discountDisplay: "25% OFF",
    originalPrice: 8.00,
    offerPrice: 6.00,
    emoji: "🥐",
    expiresIn: "Today Only",
    bgColor: "from-orange-50/40 to-amber-100/30",
    borderColor: "border-orange-100",
    accentColor: "text-orange-600 bg-orange-50"
  },
  {
    id: "off-bake-23",
    title: "Gluten-Free Almond Brownies",
    badge: "Diet Friendly",
    description: "Rich fudge squares made using almond flour and premium dark chocolate chips.",
    discountDisplay: "$2.00 OFF",
    originalPrice: 7.99,
    offerPrice: 5.99,
    emoji: "🧁",
    expiresIn: "3 days left",
    bgColor: "from-purple-50/50 to-purple-100/20",
    borderColor: "border-purple-100/70",
    accentColor: "text-purple-700 bg-purple-50"
  },
  {
    id: "off-bake-24",
    title: "Celebrate Velvet Cake",
    badge: "Party Size",
    description: "Double-layered southern style red velvet cake with rich cream cheese frosting architectures.",
    discountDisplay: "15% PRICE DROP",
    originalPrice: 28.00,
    offerPrice: 23.80,
    emoji: "🎂",
    expiresIn: "2 days left",
    bgColor: "from-pink-50/50 to-pink-100/20",
    borderColor: "border-pink-200/50",
    accentColor: "text-pink-700 bg-pink-50"
  },
  {
    id: "off-bake-25",
    title: "Glazed Donut Dozen",
    badge: "Office Hero",
    description: "12 classic melt-in-your-mouth yeast raised donuts coated in pure sugar glaze.",
    discountDisplay: "BUY 1 GET 1 FREE",
    originalPrice: 14.00,
    offerPrice: 7.00,
    emoji: "🍩",
    expiresIn: "Today Only",
    bgColor: "from-fuchsia-50/40 to-fuchsia-100/20",
    borderColor: "border-fuchsia-100",
    accentColor: "text-fuchsia-700 bg-fuchsia-50"
  },

  // === BEVERAGES & SNACKS ===
  {
    id: "off-snack-26",
    title: "Sparkling Lime Water Case",
    badge: "Hydration Box",
    description: "24-can bulk flat array of crisp zero-calorie sparkling mineral waters.",
    discountDisplay: "30% OFF",
    originalPrice: 11.99,
    offerPrice: 8.39,
    emoji: "🫧",
    expiresIn: "18 hours left",
    bgColor: "from-emerald-50/60 to-teal-100/20",
    borderColor: "border-emerald-200/40",
    accentColor: "text-emerald-800 bg-emerald-50"
  },
  {
    id: "off-snack-27",
    title: "Sea Salt Kettle Chips",
    badge: "Snack Attack",
    description: "Extra thick batch-fried potato crisps lightly dusted with authentic sea salt crystals.",
    discountDisplay: "3 FOR $9",
    originalPrice: 13.50,
    offerPrice: 9.00,
    emoji: "🥔",
    expiresIn: "4 days left",
    bgColor: "from-yellow-50/50 to-yellow-100/20",
    borderColor: "border-yellow-200/60",
    accentColor: "text-yellow-800 bg-yellow-50"
  },
  {
    id: "off-snack-28",
    title: "Organic Matcha Tin",
    badge: "Ceremonial Grade",
    description: "Pure Japanese green tea ground powder offering clean, crash-free sustained energy parameters.",
    discountDisplay: "$5.00 OFF",
    originalPrice: 25.00,
    offerPrice: 20.00,
    emoji: "🍵",
    expiresIn: "Today Only",
    bgColor: "from-green-50/50 to-green-100/20",
    borderColor: "border-green-100/70",
    accentColor: "text-green-700 bg-green-50"
  },
  {
    id: "off-snack-29",
    title: "Raw Almond & Walnut Mix",
    badge: "Heart Healthy",
    description: "Unsalted bulk energy mix containing dense levels of natural omega oils and proteins.",
    discountDisplay: "20% OFF",
    originalPrice: 14.99,
    offerPrice: 11.99,
    emoji: "🫘",
    expiresIn: "6 days left",
    bgColor: "from-stone-50/60 to-amber-100/20",
    borderColor: "border-stone-200/60",
    accentColor: "text-stone-700 bg-stone-100"
  },
  {
    id: "off-snack-30",
    title: "Probiotic Kombucha Pack",
    badge: "Gut Health",
    description: "4-pack of cold-pressed organic ginger berry fermented botanical tea drinks.",
    discountDisplay: "$3.00 SAVINGS",
    originalPrice: 15.99,
    offerPrice: 12.99,
    emoji: "🧃",
    expiresIn: "9h 35m",
    bgColor: "from-indigo-50/50 to-indigo-100/20",
    borderColor: "border-indigo-100/70",
    accentColor: "text-indigo-700 bg-indigo-50"
  }
];