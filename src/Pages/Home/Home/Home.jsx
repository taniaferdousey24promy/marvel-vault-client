import React from "react";
import Banner from "../Banner/Banner";
import About from "../About/About";
import Gallery from "../Gallery/Gallery";

import ShopByCategory from "../ShopByCategory/ShopByCategory";
import Hello from "../Hello/Hello";

const Home = () => {
  return (
    <div className="bg-warning">
      <Banner></Banner>
      <About></About>
      <Gallery></Gallery>
      <Hello></Hello>
      <ShopByCategory></ShopByCategory>
    </div>
  );
};

export default Home;
