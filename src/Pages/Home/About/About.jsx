import React from "react";
const About = () => {
  return (
    <div className="my-32  mx-80 text-center ">
      <h1 className="text-7xl font-bold text-black">What We Do</h1>
      <h3 className="mt-8" >Marvel Vault is established to produce eco-friendly toys. The toys are completely handmade with 100% organic cotton. In addition, Marvel Toys are working to empower rural women to achive sustainable development goals.</h3>
      <div className="stats bg-black mt-8 ">
        <div className="stat">
          <div className="">
            <img src="https://i.ibb.co/FK6pPs1/download.png" className="rounded-xl mb-8 mt-4 ml-2" alt="" />
          </div>
          <div className=" stat-value text-primary">Eco-friendly</div>

          {/* <div className="stat-desc">21% more than last month</div> */}
        </div>

        <div className="stat">
          <div className="">
            <img src="https://i.ibb.co/k6Gsp1f/download-2.png" className="rounded-xl mb-8 mt-4 " alt="" />
          </div>
          <div className=" stat-value text-success"> Empowerment</div>

          {/* <div className="stat-desc">21% more than last month</div> */}
        </div>

        <div className="stat">
          <div className="">
            <img src="https://i.ibb.co/Brm9gn8/download-1.png" className="rounded-xl mb-8 mt-4 h-56" alt="" />
          </div>
          <div className=" stat-value text-info "> Reclaimable</div>

          {/* <div className="stat-desc">21% more than last month</div> */}
        </div>
        <div className="stat">
          <div className="">
            <img src="https://i.ibb.co/B27XVsT/istockphoto-1319816680-612x612.jpg" className="rounded-xl mb-8  mt-4 ml-0 " alt="" />
          </div>
          <div className=" stat-value text-error">Zero Carbon </div>

          {/* <div className="stat-desc">21% more than last month</div> */}
        </div>
      </div>
    </div>
  );
};

export default About;
