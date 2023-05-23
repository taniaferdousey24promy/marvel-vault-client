// import React from "react";
import './Banner.css'

import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Banner = () => {

  useEffect(() => {
    AOS.init(); // Initialize AOS when the component mounts

    return () => {
      AOS.refresh(); // Refresh AOS when the component unmounts
    };
  }, []);
  return (
    <div className=" px-8  " data-aos="fade-up" data-aos-duration="3000">


        
    <div className="hero min-h-screen bg-base-200 bg-black  h-96 rounded-xl">
      <div className="hero-content flex-col lg:flex-row-reverse ">
        <img
          src="https://i.ibb.co/fvvsWh8/81-Oib-VJo-Cs-L-AC-SL1500.jpg"
          className="max-w-md rounded-lg shadow-2xl ms-60"
        />
        <div>
          <h1 className="text-7xl font-bold text-white">Premium Toys  <br /> For Kids</h1>
          <p className="py-6 text-white mt-8">
            The Best Toys Are The Ones That Make Your Kids <br />  Feel Like They Are
            Getting The Real Deal. The Best Toys Are The Ones That Make Your Kids <br />  Feel Like They Are
            Getting The Real Deal.
          </p>
          <button className="mt-8 btn btn-primary">Explore Now</button>
        </div>
      </div>
    </div>

    </div>
  );
};

export default Banner;
