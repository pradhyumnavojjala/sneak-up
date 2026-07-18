export interface Product {
  id: string;
  name: string;
  emoji: string;
  price: number;
  unit: string;
  categoryId: string;
}

export interface GroceryCategory {
  id: string;
  name: string;
  emoji: string;
  description: string;
  bgGradient: string;
}

export const groceryCategories: GroceryCategory[] = [
  { id: "vegetables", name: "Vegetables", emoji: "🥬", description: "Fresh farm greens.", bgGradient: "from-emerald-50 to-green-50/40" },
  { id: "fruits", name: "Fruits", emoji: "🍎", description: "Sweet seasonal harvests.", bgGradient: "from-red-50 to-orange-50/40" },
  { id: "dairy", name: "Dairy", emoji: "🥛", description: "Artisanal cheeses and milk.", bgGradient: "from-blue-50 to-indigo-50/40" },
  { id: "bakery", name: "Bakery", emoji: "🍞", description: "Oven-fresh bread and treats.", bgGradient: "from-amber-50 to-yellow-50/40" },
  { id: "meals", name: "Meals", emoji: "🍛", description: "Ready-to-eat curated lunches.", bgGradient: "from-orange-50 to-red-50/40" },
  { id: "beverages", name: "Beverages", emoji: "☕", description: "Craft coffees and fresh juices.", bgGradient: "from-stone-100 to-amber-50/30" },
  { id: "snacks", name: "Snacks", emoji: "🍿", description: "Popcorn and savory items.", bgGradient: "from-rose-50 to-pink-50/40" },
  { id: "frozen", name: "Frozen", emoji: "🧊", description: "Ice cream and cool treats.", bgGradient: "from-cyan-50 to-blue-50/40" },
];

export const groceryProducts: Product[] = [
  // Dairy Inventory
  { id: "d1", name: "Organic Whole Milk", emoji: "🥛", price: 3.49, unit: "1L", categoryId: "dairy" },
  { id: "d2", name: "Cheddar Cheese Block", emoji: "🧀", price: 4.99, unit: "250g", categoryId: "dairy" },
  { id: "d3", name: "Greek Yogurt", emoji: "🍦", price: 1.89, unit: "500g", categoryId: "dairy" },
  
  // Vegetables Inventory
  { id: "v1", name: "Fresh Spinach Pack", emoji: "🥬", price: 2.19, unit: "200g", categoryId: "vegetables" },
  { id: "v2", name: "Roma Tomatoes", emoji: "🍅", price: 2.99, unit: "1kg", categoryId: "vegetables" },
  
  // Bakery Inventory
  { id: "b1", name: "Sourdough Bread Loaf", emoji: "🍞", price: 4.25, unit: "each", categoryId: "bakery" },
  { id: "b2", name: "Butter Croissant", emoji: "🥐", price: 2.50, unit: "each", categoryId: "bakery" },
];