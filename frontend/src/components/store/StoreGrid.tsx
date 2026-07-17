import StoreCard from "./StoreCard";
import { getStores } from "@/api/api";
import { Store } from "@/types/store";

const stores: Store[] = await getStores();

export default async function StoreGrid() {

  const stores = await getStores();

  return (
    <section className="pb-24">

      <div className="mx-auto max-w-7xl px-6">

        <div
          className="
            grid
            gap-8
            sm:grid-cols-2
            lg:grid-cols-3
            xl:grid-cols-4
          "
        >
          {stores.map((store) => (
    <StoreCard
        key={store.id}
        store={store}
    />
          ))}
        </div>

      </div>

    </section>
  );
}