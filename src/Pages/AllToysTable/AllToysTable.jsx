// import React from "react";
// import { Link } from "react-router-dom";

// const AllToysTable = ({ subOne }) => {
//   const { _id, sellerName, name, price, availableQuantity } = subOne;
//   // const { sellerName, name, price, availableQuantity } = subOne[1];

//   console.log(sellerName, name, price, availableQuantity);

//   return (
//     <div>
//       <table className=" ">
//         <tbody className="">
//           <tr className="">
//             <td className="border px-28 py-2 ">{subOne[0].sellerName}</td>
//             <td className="border px-28 py-2">{subOne[0].name}</td>
//             <td className="border px-28 py-2">{subOne[0].price}</td>
//             <td className="border px-28 py-2">{subOne[0].availableQuantity}</td>
//             <td className="border px-28 py-2">{subOne[0].name}</td>

//             <td>
//               <Link to={`/viewdetails/${_id}`}>
//                 <button className="bg-success btn mx-8">View Details</button>
//               </Link>
//             </td>
//           </tr>

//           <tr>
//             <td className="border px-32 py-2 ">{subOne[1].sellerName}</td>
//             <td className="border px-32 py-2">{subOne[1].name}</td>
//             <td className="border px-32 py-2">{subOne[1].price}</td>
//             <td className="border px-32 py-2">{subOne[1].availableQuantity}</td>
//             <td className="border px-32 py-2">{subOne[1].name}</td>
//             <td>
//               <button className="bg-success btn mx-8">View Details</button>
//             </td>
//           </tr>
//           <tr>
//             <td className="border px-28 py-2 ">{subOne[2].sellerName}</td>
//             <td className="border px-28 py-2">{subOne[2].name}</td>
//             <td className="border px-28 py-2">{subOne[2].price}</td>
//             <td className="border px-28 py-2">{subOne[2].availableQuantity}</td>
//             <td className="border px-28 py-2">{subOne[2].name}</td>
//             <td>
//               <button className="bg-success btn mx-8">View Details</button>
//             </td>
//           </tr>
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default AllToysTable;
