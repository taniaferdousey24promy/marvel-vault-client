import React, { useEffect, useState } from "react";
import GalleryCard from "../GallerCard/GalleryCard";

const Gallery = () => {
  const [toys, setToys] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/toys")
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, []);
  console.log(toys);
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
        {toys.map((toy) => (
          <GalleryCard key={toy.id} toy={toy}></GalleryCard>
        ))}
      </div>
    </div>
  );
};

export default Gallery;