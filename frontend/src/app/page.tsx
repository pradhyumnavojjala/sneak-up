import Categories from "@/components/home/Categories";
import CustomerReviews from "@/components/home/CustomerReviews";
import DiscoverStores from "@/components/home/DiscoverStores";
import FeatureCard from "@/components/home/FeatureCard";
import Hero from "@/components/home/Hero";
import OfferBanner from "@/components/home/OfferBanner";
import PartnerStores from "@/components/home/PartnerStores";
import PopularMeals from "@/components/home/PopularMeals";
import SpotlightOffer from "@/components/home/SpotlightOffer";
import WhySneakUp from "@/components/home/WhySneakUp";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import { SpotLight } from "three/src/Three.Core.js";

export default function Home() {
  return (
    <>
      <Navbar />

      <Hero />

      <Categories />

      <PopularMeals />

      <SpotlightOffer />

      <PartnerStores />

      <OfferBanner />

      <DiscoverStores />

      <WhySneakUp />

      <CustomerReviews />

      <Footer />
    </>
  );
}