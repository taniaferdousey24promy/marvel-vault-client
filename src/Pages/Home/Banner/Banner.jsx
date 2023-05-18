import React from "react";

const Banner = () => {
  return (
    <div className=" px-8 ">
      <div className="hero min-h-screen bg-base-200 bg-black rounded-lg  ">
        <div className="hero-content flex-col lg:flex-row-reverse relative lg:w-1/2">
          <div>
            <img
              src="https://i.ibb.co/rQ3xJD4/4a.jpg"
              className="ms-20 rounded-lg shadow-2xl 3/4 w-full"
            />
          </div>

          <div >
            <h1 className="text-5xl font-bold text-white">Box Office News!</h1>
            <p className="py-6 text-white">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            {/* <button className="btn btn-primary">Get Started</button> */}
            <img
              src="https://i.ibb.co/z6KrMpm/1176cf64-9f59-414b-85f7-dba0fe8d73fc.jpg"
              className="   max-w-sm rounded-lg shadow-2xl w-1/2   "
              
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
