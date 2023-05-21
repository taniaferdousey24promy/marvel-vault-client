import React, { useEffect, useState } from "react";
import SingleToyDetails from "../SingleToyDetails/SingleToyDetails";
import { Link } from "react-router-dom";

const AllToys = () => {
  const [toys, setToys] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/toys")
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, []);
  console.log(toys);

  // const sub = toys.map((toy) => toy.subCategories);
  // console.log(sub);

  // const subOnes = sub[0];
  // console.log(subOnes);

  // const { _id, sellerName, name, price, availableQuantity } = subOne;

  // const subsubOne = subOnes[0];
  // console.log(subsubOne);

  return (
    <div className=" overflow-x-auto">
      <table className="table-auto ">
        <thead className="">
          <tr className="">
            {/* <th className="px-24 text-2xl">Seller Name</th> */}
            <th className="px-4 py-4 text-2xl">Toy Name</th>
            <th className="px-4 py-4 text-2xl">Price</th>
            {/* <th className="px-16 text-2xl">Available Quantity</th> */}
            <th className="px-8  py-4 text-2xl">Sub-Category</th>
            <th className="px-8  py-4 text-2xl">Available Quantity</th>
            <th className="px-8  py-4 text-2xl">Seller Name</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {toys.map((toy) => (
            <React.Fragment key={toy.id}>
              <tr>
                <td className="px-8 py-2" colSpan="2">
                </td>
              </tr>
              {/* <h2>Toy ID: {toy.id}</h2> */}
              {/* <h3>Category:{toy.Category}</h3> */}

              {toy.subCategories.map((subCategory) => (
                <tr key={subCategory.id}>
                  <td className="px-8 py-4 "> {subCategory.name} </td>
                  <td className="px-8 py-4 "> {subCategory.price} </td>
                  <td className="px-8 py-4 "> {subCategory.name} </td>
                  <td className="px-8 py-4  "> {subCategory.availableQuantity} </td>
                  <td className="px-8 py-4  "> {subCategory.sellerName} </td>


                </tr>
              ))}
            </React.Fragment>
          ))}
        </tbody>

        {/* {
          toys.map((toy.subCategories[0])=>{
            (
              <p
                key={toy.subCategories[0].id}
                toy.subCategories={}
              ></p>
            )
          })
        } */}

        {/* {sub.map((subOne) => (
          <tbody key={subOne.id} subOne={subOne}>
            <tr className="">
              <td className="border px-28 py-2 ">{subOne[0].sellerName}</td>
              <td className="border px-28 py-2">{subOne[0].name}</td>
              <td className="border px-28 py-2">{subOne[0].price}</td>
              <td className="border px-28 py-2">
                {subOne[0].availableQuantity}
              </td>
              <td className="border px-28 py-2">{subOne[0].name}</td>

              <td>
                <Link to={`/viewdetails/${_id}`}>
                  <button className="bg-success btn mx-8">View Details</button>
                </Link>
              </td>
            </tr>

            <tr>
              <td className="border px-32 py-2 ">{subOne[1].sellerName}</td>
              <td className="border px-32 py-2">{subOne[1].name}</td>
              <td className="border px-32 py-2">{subOne[1].price}</td>
              <td className="border px-32 py-2">
                {subOne[1].availableQuantity}
              </td>
              <td className="border px-32 py-2">{subOne[1].name}</td>
              <td>
                <button className="bg-success btn mx-8">View Details</button>
              </td>
            </tr>
            <tr>
              <td className="border px-28 py-2 ">{subOne[2].sellerName}</td>
              <td className="border px-28 py-2">{subOne[2].name}</td>
              <td className="border px-28 py-2">{subOne[2].price}</td>
              <td className="border px-28 py-2">
                {subOne[2].availableQuantity}
              </td>
              <td className="border px-28 py-2">{subOne[2].name}</td>
              <td>
                <button className="bg-success btn mx-8">View Details</button>
              </td>
            </tr>
          </tbody>
        ))} */}
      </table>
    </div>
  );
};

export default AllToys;
