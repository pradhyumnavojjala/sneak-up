import { Product } from "@/data/products";

export interface CartItem extends Product {
  quantity: number;
}

export function addToCart(product: Product) {
  const cart: CartItem[] = JSON.parse(
    localStorage.getItem("cart") || "[]"
  );

  const existing = cart.find((item) => item.id === product.id);

  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({
      ...product,
      quantity: 1,
    });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
}