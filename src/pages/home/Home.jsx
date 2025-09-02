import "../../styles/Home.scss";
import Hero from "./Hero";
import Products from "./Products";
import Impacts from "./Impacts";
import MachineSwiper from "./MachineSwiper";
import BrandAndVideo from "./BrandAndVideo";
import WhatNewAndReviews from "./WhatNewAndReviews";

function Home(params) {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <Hero />
      {/* Products Section */}
      <Products />
      <Impacts />
      <MachineSwiper />
      <BrandAndVideo />
      <WhatNewAndReviews />
    </div>
  );
}
export default Home;
