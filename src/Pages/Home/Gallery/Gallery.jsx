import React, { useEffect, useState } from "react";

const Gallery = () => {
  const [toys, setToys] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/toys")
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, []);
  console.log(toys);
  const slicedToys = toys.slice(0, 4);



  return (
    <div className="text-center">
      <h1 className="text-7xl font-bold text-black">TOYS HUB</h1>
      <span className="ms-4 text-2pxl font-bold text-black ">Pre-Orders</span>
      <span className="ms-4 text-2pxl font-bold text-black">Heros</span>
      <span className="ms-4 text-2pxl font-bold text-black">Props</span>
      <span className="ms-4 text-2pxl font-bold text-black">In Stock</span>
      <span className="ms-4 text-2pxl font-bold text-black">All Products</span>
      <br />{" "}
      <span className="ms-4 text-2pxl font-bold text-black">
        Statues & Bute
      </span>
      <span className="ms-4 text-2pxl font-bold text-black">Mange</span>
      <span className="ms-4 text-2pxl font-bold text-black">Movies</span>
      <span className="ms-4  text-2pxl font-bold text-black">
        Action Figues
      </span>
      <span className="ms-4 text-2pxl font-bold text-black">Accessories</span>
      <div className="flex mx-32 mt-20">
        {slicedToys.map((toy) => (
          <div key={toy.id} >
            <div className="card ml-4 glass">
              <figure>
                <img
                  src={toy.picture}
                  className="w-96 h-96"
                  alt="Movie"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title mx-auto">{toys.toyName}</h2>
                {/* <p>How to park your car at your garage?</p> */}
                <div className="card-actions justify-end">
                  <button  className="btn btn-primary mx-auto mt-4 ">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
