import React from "react";
import Banner from "../Banner/Banner";
import About from "../About/About";
import Gallery from "../Gallery/Gallery";

import ShopByCategory from "../ShopByCategory/ShopByCategory";

const Home = () => {
  return (
    <div className="bg-warning">
      <Banner></Banner>
      <About></About>
      <Gallery></Gallery>
      {/* <ShopByCategory></ShopByCategory> */}

      
    </div>
  );
};

export default Home;
