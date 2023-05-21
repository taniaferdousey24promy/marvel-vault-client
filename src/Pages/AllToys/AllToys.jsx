import React, { useEffect, useState } from "react";
import axios from "axios";
import SingleToyDetails from "../SingleToyDetails/SingleToyDetails";
import { Link } from "react-router-dom";

const AllToys = () => {
  const [toys, setToys] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/toys")
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, []);
  console.log(toys);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };
  const filteredToys = toys.filter((toy) => {
    return toy.subCategories.some((subCategory) =>
      subCategory.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  return (
    <div className="bg-success text-black">
      <div className=" overflow-x-auto mx-80 ">
        <input
          className="bg-warning placeholder-black border-2 border-blue-950 rounded-lg px-52 py-8  my-12 text-2xl text-center mx-28 "
          type="text "
          value={searchTerm}
          onChange={handleSearch}
          placeholder="Search By Name"
          
        />
        <table className="table-auto  ">
          <thead className="">
            <tr className="">
              <th className="px-4 py-4 text-2xl border-2 border-blue-950 ">
                Toy Name
              </th>
              <th className="px-4 py-4 text-2xl border-2 border-blue-950">
                Price
              </th>
              <th className="px-8  py-4 text-2xl border-2 border-blue-950">
                Sub-Category
              </th>
              <th className="px-8  py-4 text-2xl border-2 border-blue-950">
                Available Quantity
              </th>
              <th className="px-8  py-4 text-2xl border-2 border-blue-950">
                Seller Name
              </th>
            </tr>
          </thead>
          <tbody className="text-center">
            {filteredToys.map((toy) => (
              <React.Fragment key={toy.id}>

                {toy.subCategories.map((subCategory) => (
                  <tr key={subCategory.id}>
                    <td className="px-8 py-4 border-2 border-blue-950 ">
                      {" "}
                      {subCategory.name}{" "}
                    </td>
                    <td className="px-8 py-4 border-2 border-blue-950 ">
                      {" "}
                      {subCategory.price}{" "}
                    </td>
                    <td className="px-8 py-4 border-2 border-blue-950 ">
                      {" "}
                      {toy.Category}{" "}
                    </td>
                    <td className="px-8 py-4 border-2 border-blue-950  ">
                      {" "}
                      {subCategory.availableQuantity}{" "}
                    </td>
                    <td className="px-8 py-4 border-2 border-blue-950  ">
                      {" "}
                      {subCategory.sellerName}{" "}
                    </td>
                  </tr>
                ))}
              </React.Fragment>
            ))}
          </tbody>

                  </table>
      </div>
    </div>
  );
};

export default AllToys;
