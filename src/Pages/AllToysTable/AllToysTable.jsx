import React from "react";

const AllToysTable = ({ subOne }) => {
  const { sellerName, name, price, availableQuantity } = subOne;
  // const { sellerName, name, price, availableQuantity } = subOne[1];

  console.log(sellerName, name, price, availableQuantity);

  return (
    <div>
      <table className="table-auto  ">
        <tbody>
          <tr>
            <td className="border px-28 py-2 ">{subOne[0].sellerName}</td>
            <td className="border px-28 py-2">{subOne[0].name}</td>
            <td className="border px-28 py-2">{subOne[0].price}</td>
            <td className="border px-28 py-2">{subOne[0].availableQuantity}</td>
            <td className="border px-28 py-2">{subOne[0].name}</td>
          </tr>

          <tr>
            <td className="border px-36 py-2 ">{subOne[1].sellerName}</td>
            <td className="border px-36 py-2">{subOne[1].name}</td>
            <td className="border px-36 py-2">{subOne[1].price}</td>
            <td className="border px-36 py-2">{subOne[1].availableQuantity}</td>
            <td className="border px-36 py-2">{subOne[1].name}</td>
          </tr>
          <tr>
            <td className="border px-28 py-2 ">{subOne[2].sellerName}</td>
            <td className="border px-28 py-2">{subOne[2].name}</td>
            <td className="border px-28 py-2">{subOne[2].price}</td>
            <td className="border px-28 py-2">{subOne[2].availableQuantity}</td>
            <td className="border px-28 py-2">{subOne[2].name}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default AllToysTable;
