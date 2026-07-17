import { notFound } from "next/navigation";
import { stores } from "@/data/stores";
import StoreHero from "@/components/store-details/storehero";

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
    </>
  );
}