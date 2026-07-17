import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import StoreHero from "@/components/store/StoreHero";
import StoreSearch from "@/components/store/StoreSearch";
import StoreFilters from "@/components/store/StoreFilters";
import StoreSort from "@/components/store/StoreSort";
import StoreGrid from "@/components/store/StoreGrid";

export default function StoresPage() {
  return (
    <>
      <Navbar />

      <main className="bg-sneakup-background min-h-screen">

        <StoreHero />

        <StoreSearch />

        <StoreFilters />

        <StoreSort />

        <StoreGrid />

      </main>

      <Footer />
    </>
  );
}