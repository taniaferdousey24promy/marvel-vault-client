// import React from "react";
import './Banner.css'
// const Banner = () => {
//   return (
//     <div className=" px-8 bg-warning banner-height   ">
//       <div className=" bg-base-200 bg-black rounded-lg mx-auto w-3/4  ">
//         <div className="hero-content flex-col lg:flex-row-reverse relative lg:w-3/4 py-8  ">
//           <div>
//             <img
//               src="https://i.ibb.co/fvvsWh8/81-Oib-VJo-Cs-L-AC-SL1500.jpg"
//               className="ms-80 rounded-lg shadow-2xl "
//             />
//           </div>

//           <div className="ms-32 ">
//             <h1 className="text-5xl font-bold text-white ms-0">Premium Toys For Kids</h1>
//             <p className=" text-white mt-12">
//             The Best Toys Are The Ones That Make Your Kids Feel Like They Are Getting The Real Deal.
//             </p>
//             {/* <button className="btn btn-primary">Get Started</button> */}
//             {/* <img
//               src="https://i.ibb.co/z6KrMpm/1176cf64-9f59-414b-85f7-dba0fe8d73fc.jpg"
//               className=" border-yellow-500 border  max-w-sm rounded-lg shadow-2xl w-1/2   "

//             /> */}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Banner;

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
    <div className=" px-8 " data-aos="fade-up" data-aos-duration="3000">


        
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
