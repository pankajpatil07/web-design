import React from "react";
import MainBanner from "../components/home/MainBanner";
import ProductCategory from "../components/home/ProductCategory";
import FeaturedProduct from "../components/home/FeaturedProduct";
import LatestProduct from "../components/home/LatestProduct";
import OfferSection from "../components/home/OfferSection";
import Testimonial from "../components/home/Testimonial";
import BrandSection from "../components/home/BrandSection";
import Shop from "../components/home/Shops/Shop";
const Home = () => {
  return (
    <>
      {/* <Shop /> */}
      <MainBanner />
      <ProductCategory />
      <FeaturedProduct />
      <LatestProduct />
      <OfferSection />
      <Testimonial />
      <BrandSection />
    </>
  );
};

export default Home;
