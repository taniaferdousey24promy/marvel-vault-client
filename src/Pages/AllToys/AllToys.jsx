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
    return toy.toyName.toLowerCase().includes(searchTerm.toLowerCase());
  });
  console.log(filteredToys);
  return (
    <div className="bg-warning  pt-16 pb-96">
      <input
        className="bg-warning placeholder-black border-8 border-blue-950 rounded-lg px-96  mb-2   text-2xl mx-80  "
        type="text "
        value={searchTerm}
        onChange={handleSearch}
        placeholder="Search By Name"
      />
      <table className="table ml-52   ">
        <tbody className="">
          <thead className="">
            <tr className="">
              {/* <th className="">serial</td> */}
              <th className="bg-base-300    text-center">Serial</th>
              <th className="bg-base-300  px-8   text-center">Seller Name</th>
              <th className="bg-base-300  pl-24   text-center">Toy Name</th>
              <th className="bg-base-300  pl-16  text-center">
                Sub-Category Name
              </th>
              <th className="bg-base-300  pl-32   text-center">Price</th>
              <th className="bg-base-300  pl-32   text-center">
                Available Quantity
              </th>
              <th className="bg-base-300  px-20   text-center">See Details</th>
            </tr>
          </thead>

          {toys.map((toy, index) => {
            const{_id}=toy;
            if (toy.toyName.toLowerCase().includes(searchTerm.toLowerCase())) {
              return (
                <tr key={toy.id} className="table w-full">
                  <td className=" text-left ">{index + 1}</td>
                  <td className=" text-left px-8">{toy.sellerName}</td>
                  <td className=" text-center pl-16">{toy.toyName}</td>
                  <td className=" text-left pl-24">{toy.subCategoryName}</td>
                  <td className=" text-left pl-32">{toy.price}</td>
                  <td className=" text-left pl-32">{toy.availableQuantity}</td>
                  <td className=" text-left pl-32">
                    {" "}
                    <Link to={`/viewdetails/${_id}`}>
                    <button className="btn btn-success">
                      View Details
                    </button>
                    </Link>
                    
                    
                  </td>
                </tr>
              );
            }
            return null;
          })}
        </tbody>
      </table>
    </div>
  );
};

export default AllToys;
