export interface Product {
  id: number;
  storeId: number;
  name: string;
  image: string;
  price: number;
  rating: number;
  category: string;
}

export const products: Product[] = [

  // =========================
  // Fresh Mart (Store 1)
  // =========================
  { id: 1, storeId: 1, name: "Fresh Apples", image: "🍎", price: 120, rating: 4.8, category: "Fruits" },
  { id: 2, storeId: 1, name: "Bananas", image: "🍌", price: 60, rating: 4.7, category: "Fruits" },
  { id: 3, storeId: 1, name: "Broccoli", image: "🥦", price: 80, rating: 4.9, category: "Vegetables" },
  { id: 4, storeId: 1, name: "Tomatoes", image: "🍅", price: 40, rating: 4.6, category: "Vegetables" },
  { id: 5, storeId: 1, name: "Milk", image: "🥛", price: 55, rating: 4.8, category: "Dairy" },
  { id: 6, storeId: 1, name: "Bread", image: "🍞", price: 45, rating: 4.5, category: "Bakery" },
  { id: 7, storeId: 1, name: "Potato Chips", image: "🥔", price: 30, rating: 4.6, category: "Snacks" },
  { id: 8, storeId: 1, name: "Orange Juice", image: "🧃", price: 90, rating: 4.7, category: "Drinks" },

  // =========================
  // Paradise (Store 2)
  // =========================
  { id: 9, storeId: 2, name: "Chicken Biryani", image: "🍛", price: 299, rating: 4.9, category: "Biryani" },
  { id: 10, storeId: 2, name: "Mutton Biryani", image: "🍖", price: 399, rating: 4.8, category: "Biryani" },
  { id: 11, storeId: 2, name: "Paneer Biryani", image: "🥘", price: 249, rating: 4.7, category: "Biryani" },
  { id: 12, storeId: 2, name: "Butter Chicken", image: "🍗", price: 320, rating: 4.9, category: "Curries" },
  { id: 13, storeId: 2, name: "Naan", image: "🫓", price: 40, rating: 4.6, category: "Bread" },
  { id: 14, storeId: 2, name: "Gulab Jamun", image: "🍮", price: 80, rating: 4.8, category: "Desserts" },
  { id: 15, storeId: 2, name: "Lassi", image: "🥤", price: 70, rating: 4.7, category: "Drinks" },
  { id: 16, storeId: 2, name: "Chicken 65", image: "🍗", price: 240, rating: 4.8, category: "Starters" },

  // =========================
  // Pizza Hub (Store 3)
  // =========================
  { id: 17, storeId: 3, name: "Margherita", image: "🍕", price: 249, rating: 4.8, category: "Pizza" },
  { id: 18, storeId: 3, name: "Pepperoni Pizza", image: "🍕", price: 349, rating: 4.9, category: "Pizza" },
  { id: 19, storeId: 3, name: "Farmhouse Pizza", image: "🍕", price: 329, rating: 4.8, category: "Pizza" },
  { id: 20, storeId: 3, name: "Garlic Bread", image: "🥖", price: 129, rating: 4.7, category: "Sides" },
  { id: 21, storeId: 3, name: "White Pasta", image: "🍝", price: 199, rating: 4.7, category: "Pasta" },
  { id: 22, storeId: 3, name: "Coke", image: "🥤", price: 60, rating: 4.5, category: "Drinks" },
  { id: 23, storeId: 3, name: "Brownie", image: "🍫", price: 110, rating: 4.8, category: "Desserts" },
  { id: 24, storeId: 3, name: "Cheese Burst", image: "🧀", price: 399, rating: 4.9, category: "Pizza" },

  // =========================
  // Coffee House (Store 4)
  // =========================
  { id: 25, storeId: 4, name: "Espresso", image: "☕", price: 140, rating: 4.8, category: "Coffee" },
  { id: 26, storeId: 4, name: "Cappuccino", image: "☕", price: 180, rating: 4.9, category: "Coffee" },
  { id: 27, storeId: 4, name: "Latte", image: "🥛", price: 170, rating: 4.7, category: "Coffee" },
  { id: 28, storeId: 4, name: "Cold Coffee", image: "🥤", price: 220, rating: 4.8, category: "Coffee" },
  { id: 29, storeId: 4, name: "Chocolate Cake", image: "🍰", price: 180, rating: 4.9, category: "Cakes" },
  { id: 30, storeId: 4, name: "Blueberry Muffin", image: "🧁", price: 120, rating: 4.7, category: "Bakery" },
  { id: 31, storeId: 4, name: "Club Sandwich", image: "🥪", price: 190, rating: 4.8, category: "Snacks" },
  { id: 32, storeId: 4, name: "Cookie", image: "🍪", price: 60, rating: 4.6, category: "Bakery" },

  // =========================
  // Sweet Magic (Store 5)
  // =========================
  { id: 33, storeId: 5, name: "Chocolate Cake", image: "🍰", price: 450, rating: 4.9, category: "Cake" },
  { id: 34, storeId: 5, name: "Ice Cream", image: "🍨", price: 120, rating: 4.8, category: "Ice Cream" },
  { id: 35, storeId: 5, name: "Donut", image: "🍩", price: 90, rating: 4.7, category: "Desserts" },
  { id: 36, storeId: 5, name: "Cupcake", image: "🧁", price: 80, rating: 4.8, category: "Desserts" },
  { id: 37, storeId: 5, name: "Chocolate", image: "🍫", price: 70, rating: 4.6, category: "Chocolate" },
  { id: 38, storeId: 5, name: "Cookie", image: "🍪", price: 50, rating: 4.7, category: "Cookies" },
  { id: 39, storeId: 5, name: "Macaron", image: "🍬", price: 100, rating: 4.8, category: "Desserts" },
  { id: 40, storeId: 5, name: "Pastry", image: "🍰", price: 140, rating: 4.8, category: "Pastry" },

  // =========================
  // Green Basket (Store 6)
  // =========================
  { id: 41, storeId: 6, name: "Spinach", image: "🥬", price: 35, rating: 4.7, category: "Vegetables" },
  { id: 42, storeId: 6, name: "Carrot", image: "🥕", price: 45, rating: 4.8, category: "Vegetables" },
  { id: 43, storeId: 6, name: "Cucumber", image: "🥒", price: 30, rating: 4.7, category: "Vegetables" },
  { id: 44, storeId: 6, name: "Apple", image: "🍎", price: 120, rating: 4.9, category: "Fruits" },
  { id: 45, storeId: 6, name: "Orange", image: "🍊", price: 80, rating: 4.7, category: "Fruits" },
  { id: 46, storeId: 6, name: "Almonds", image: "🥜", price: 220, rating: 4.8, category: "Dry Fruits" },
  { id: 47, storeId: 6, name: "Organic Juice", image: "🧃", price: 150, rating: 4.8, category: "Juices" },
  { id: 48, storeId: 6, name: "Avocado", image: "🥑", price: 180, rating: 4.9, category: "Organic" },

  // =========================
  // Burger Point (Store 7)
  // =========================
  { id: 49, storeId: 7, name: "Veg Burger", image: "🍔", price: 149, rating: 4.7, category: "Burger" },
  { id: 50, storeId: 7, name: "Chicken Burger", image: "🍔", price: 199, rating: 4.8, category: "Burger" },
  { id: 51, storeId: 7, name: "Cheese Burger", image: "🧀", price: 229, rating: 4.9, category: "Burger" },
  { id: 52, storeId: 7, name: "French Fries", image: "🍟", price: 99, rating: 4.7, category: "Sides" },
  { id: 53, storeId: 7, name: "Wrap", image: "🌯", price: 169, rating: 4.8, category: "Wraps" },
  { id: 54, storeId: 7, name: "Combo Meal", image: "🍔", price: 299, rating: 4.9, category: "Combos" },
  { id: 55, storeId: 7, name: "Coke", image: "🥤", price: 60, rating: 4.5, category: "Drinks" },
  { id: 56, storeId: 7, name: "Nuggets", image: "🍗", price: 180, rating: 4.8, category: "Sides" },

  // =========================
  // Bake Studio (Store 8)
  // =========================
  { id: 57, storeId: 8, name: "Croissant", image: "🥐", price: 140, rating: 4.8, category: "Bakery" },
  { id: 58, storeId: 8, name: "Donut", image: "🍩", price: 90, rating: 4.7, category: "Bakery" },
  { id: 59, storeId: 8, name: "Muffin", image: "🧁", price: 80, rating: 4.8, category: "Bakery" },
  { id: 60, storeId: 8, name: "Bread", image: "🍞", price: 45, rating: 4.6, category: "Bread" },
  { id: 61, storeId: 8, name: "Cookies", image: "🍪", price: 60, rating: 4.7, category: "Bakery" },
  { id: 62, storeId: 8, name: "Brownie", image: "🍫", price: 110, rating: 4.8, category: "Desserts" },
  { id: 63, storeId: 8, name: "Cake Slice", image: "🍰", price: 120, rating: 4.8, category: "Cake" },
  { id: 64, storeId: 8, name: "Coffee Bun", image: "🥖", price: 90, rating: 4.7, category: "Bakery" },
];