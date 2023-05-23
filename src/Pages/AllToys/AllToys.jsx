import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import PageTitle from "../../PageTitle"

const AllToys = () => {
  const [toys, setToys] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("https://marvel-vault-server.vercel.app/toys")
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
    <div className="bg-warning overflow-x-auto  pt-16 pb-24">
      <PageTitle title="All Toys"></PageTitle>
      <input
        className="bg-warning placeholder-black border-8 border-blue-950 rounded-lg px-96  mb-8   text-2xl mx-52  "
        type="text "
        value={searchTerm}
        onChange={handleSearch}
        placeholder="Search By Name"
      />
      <table className="table ml-28 w-1/3">
        <tbody className="">
          <thead className="">
            <tr className="">
              {/* <th className="">serial</td> */}
              {/* <th className="bg-base-300    text-center">Serial</th> */}
              <th className="bg-base-300  px-16   text-center">Seller Name</th>
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
            const { _id } = toy;
            if (toy.toyName.toLowerCase().includes(searchTerm.toLowerCase())) {
              return (
                <tr key={toy.id} className="table w-full">
                  {/* <td className=" text-left ">{index + 1}</td> */}
                  <td className=" text-left px-8">{toy.sellerName}</td>
                  <td className=" text-center pl-16">{toy.toyName}</td>
                  <td className=" text-left pl-24">{toy.subCategoryName}</td>
                  <td className=" text-left pl-32">{toy.price}</td>
                  <td className=" text-left pl-32">{toy.availableQuantity}</td>
                  <td className=" text-left pl-32">
                    {" "}
                    <Link to={`/viewdetails/${_id}`}>
                      <button className="btn btn-success">View Details</button>
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
