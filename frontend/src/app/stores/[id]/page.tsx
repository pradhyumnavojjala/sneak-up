import { notFound } from "next/navigation";
import { stores } from "@/data/stores";
import { products } from "@/data/products";

import StoreHero from "@/components/store-details/storehero";
import ProductCard from "@/components/store-details/ProductCard";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default async function StoreDetailsPage({ params }: Props) {
  const { id } = await params;

  const store = stores.find((s) => s.id === Number(id));

  if (!store) {
    notFound();
  }

  // Get products belonging to this store
  const productList = products.filter(
    (product) => product.storeId === store.id
  );

  return (
    <>
    
      <StoreHero
        name={store.name}
        emoji={store.emoji}
        rating={store.rating}
        delivery={store.delivery}
        products={store.products}
        color={store.color}
      />

      <div className="mx-auto max-w-7xl px-6 py-10">
        <h2 className="mb-8 text-3xl font-bold text-sneakup-dark">
          Popular Products
        </h2>

        <div
          className="
            grid
            gap-8
            sm:grid-cols-2
            lg:grid-cols-3
            xl:grid-cols-4
          "
        >
          {productList.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>

        {productList.length === 0 && (
          <p className="mt-8 text-center text-gray-500">
            No products found for this store.
          </p>
        )}
      </div>
    </>
  );
}