import React from "react";
const About = () => {
  return (
    <div className="my-32  mx-80 text-center ">
      <h1 className="text-7xl font-bold text-black">What We Do</h1>
      <h3 className="mt-8" >Marvel Vault is established to produce eco-friendly toys. The toys are completely handmade with 100% organic cotton. In addition, Marvel Toys are working to empower rural women to achive sustainable development goals.</h3>
      <div className="stats bg-white mt-8  ">
        <div className="stat">
          <div className="">
            <img src="https://i.ibb.co/FK6pPs1/download.png" className="rounded-xl   ml-2" alt="" />
          </div>
          <div className="  text-2xl text-info ">Eco-friendly</div>

          {/* <div className="stat-desc">21% more than last month</div> */}
        </div>

        <div className="stat">
          <div className="">
            <img src="https://i.ibb.co/k6Gsp1f/download-2.png" className="rounded-xl   " alt="" />
          </div>
          <div className="  text-2xl text-info "> Empowerment</div>

          {/* <div className="stat-desc">21% more than last month</div> */}
        </div>

        <div className="stat">
          <div className="">
            <img src="https://i.ibb.co/fpTT3LX/glass.jpg" className="rounded-xl  h-60 " alt="" />
          </div>
          <div className="  text-2xl text-info "> Reclaimable</div>

          {/* <div className="stat-desc">21% more than last month</div> */}
        </div>
        <div className="stat">
          <div className="">
            <img src="https://i.ibb.co/B27XVsT/istockphoto-1319816680-612x612.jpg" className="rounded-xl ml-0 h-60 " alt="" />
          </div>
          <div className=" text-2xl text-info ">Zero Carbon </div>

          {/* <div className="stat-desc">21% more than last month</div> */}
        </div>
      </div>
    </div>
  );
};

export default About;
