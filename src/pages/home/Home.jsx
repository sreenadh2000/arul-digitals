import Hero from "./Hero";
import "@styles/home.scss";
import { lazy, Suspense } from "react";
import Loader from "../../components/common/Loader";
// Lazy-load BELOW-THE-FOLD sections
const Products = lazy(() => import("./Products"));
const Impacts = lazy(() => import("./Impacts"));
const MachineSwiper = lazy(() => import("./MachineSwiper"));
const BrandAndVideo = lazy(() => import("./BrandAndVideo"));
const WhatNewAndReviews = lazy(() => import("./WhatNewAndReviews"));

function Home() {
  return (
    <div className="home-page">
      <Hero />
      <Products />
      <Impacts />
      <MachineSwiper />
      <BrandAndVideo />
      <WhatNewAndReviews />
    </div>
  );
}
export default Home;
