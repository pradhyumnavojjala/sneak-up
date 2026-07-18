"use client";

interface CartItemType {
  id: number;
  name: string;
  image: string;
  price: number;
  quantity: number;
}

interface Props {
  item: CartItemType;
  cart: CartItemType[];
  setCart: React.Dispatch<React.SetStateAction<CartItemType[]>>;
}

export default function CartItem({
  item,
  cart,
  setCart,
}: Props) {

  function updateQuantity(change: number) {

    const updated = cart
      .map((product) =>
        product.id === item.id
          ? {
              ...product,
              quantity: product.quantity + change,
            }
          : product
      )
      .filter((product) => product.quantity > 0);

    setCart(updated);

    localStorage.setItem("cart", JSON.stringify(updated));
  }

  return (
    <div className="flex items-center justify-between rounded-3xl bg-white p-6 shadow-md">

      <div className="flex items-center gap-5">

        <div className="flex h-24 w-24 items-center justify-center rounded-2xl bg-gray-100 text-5xl">
          {item.image}
        </div>

        <div>

          <h3 className="text-xl font-bold">
            {item.name}
          </h3>

          <p className="mt-2 font-semibold text-sneakup-primary">
            ₹{item.price}
          </p>

        </div>

      </div>

      <div className="flex items-center gap-4">

        <button
          onClick={() => updateQuantity(-1)}
          className="h-10 w-10 rounded-xl bg-gray-200"
        >
          -
        </button>

        <span className="text-lg font-bold">
          {item.quantity}
        </span>

        <button
          onClick={() => updateQuantity(1)}
          className="h-10 w-10 rounded-xl bg-sneakup-primary text-white"
        >
          +
        </button>

      </div>

    </div>
  );
}