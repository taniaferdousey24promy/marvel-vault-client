import React, { useEffect, useState } from "react";
import SingleToyDetails from "../SingleToyDetails/SingleToyDetails";
import AllToysTable from "../AllToysTable/AllToysTable";

const AllToys = () => {
  const [toys, setToys] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/toys")
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, []);
  // console.log(toys);

  const sub = toys.map((toy) => toy.subCategories);
  console.log(sub);

  const subOnes = sub[0];
  console.log(subOnes);

  // const subsubOne = subOnes[0];
  // console.log(subsubOne);

  return (
    <div className=" ">
      <thead className="">
        <tr>
          <th className="px-28">Seller Name</th>
          <th className="px-28">Toy Name</th>
          <th className="px-28">Price</th>
          <th className="px-28">Available Quantity</th>
          <th className="px-28">Sub-Category</th>
        </tr>
      </thead>

      {sub.map((subOne) => (
        <AllToysTable key={subOne.id} subOne={subOne}></AllToysTable>
      ))}

      
    </div>
  );
};

export default AllToys;
