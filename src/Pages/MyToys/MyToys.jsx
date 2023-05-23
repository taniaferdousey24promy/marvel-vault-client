import React, { useContext, useEffect, useState } from "react";
import PageTitle from "../../PageTitle";
import { AuthContext } from "../../Providers/AuthProvider";

const MyToys = () => {
  // const [user, setUser] = useState([]);

  // useEffect(() => {
  //   fetch(`http://localhost:5000/newToys?sellerEmail=${user.sellerEmail}`)
  //     .then((res) => res.json())
  //     .then((data) => setUser(data));
  // }, []);

  const {user} = useContext(AuthContext);
  const [selling,setSelling]=useState([]);
  const url = `http://localhost:5000/newToys?sellerEmail=${user.email}`;

  useEffect( ()=>{
    fetch(url)
    .then(res=>res.json())  
    .then(data=>setSelling(data))
  } , [])


  const handleDelete = id =>{
    const proceed = confirm ('Are You Sure you want to DELETE');
    if(proceed){
      fetch(`http://localhost:5000/newToys${id}`,{
        method:'DELETE'
      })
      .then(res=> res.json())
      .then(data=>{
        console.log(data);
        if(data.deletedCount>0){
          alert('deleted Sucessfully');
          const remaining = selling.filter(sell =>sell._id !==id);
          setSelling(remaining)
        }
      })

    }
  }


  
  // useEffect(() => {
  //   fetch("https://marvel-vault-server.vercel.app/toys")
  //     .then((res) => res.json())
  //     .then((data) => setToys(data));
  // }, []);
  // console.log(toys);
  return (
    <div className="bg-warning overflow-x-auto  pt-16 pb-24">
      <PageTitle title="My Toys"></PageTitle>
      
      <table className="table ml-80 w-1/3">
        <tbody className="">
          <thead className="">
            <tr className="">
         
              <th className="bg-base-300  px-16   text-center"> Delete </th>
              <th className="bg-base-300  px-16   text-center">Seller Name</th>
              <th className="bg-base-300  pl-24   text-center">Toy Name</th>
              <th className="bg-base-300  pl-16  text-center">
                Sub-Category Name
              </th>
              <th className="bg-base-300  pl-32   text-center">Price</th>
              <th className="bg-base-300  pl-32   text-center">
                Available Quantity
              </th>
            </tr>
          </thead>

          {selling.map((toy, index) => {
          
             
              return (
                <tr key={toy.id} className="text-center table w-full">
                  {/* <td className=" text-left ">{index + 1}</td> */}
                  <td className="  pl-16"><button onClick={()=>handleDelete(toy_id)} className="btn bg-red-500">Delete</button></td>
                  <td className="  pl-16">{toy.sellerName}</td>
                  <td className="  pl-40">{toy.toyName}</td>
                  <td className="  pl-20">{toy.subCategoryName}</td>
                  <td className="  pl-48">{toy.price}</td>
                  <td className="  pl-32">{toy.availableQuantity}</td>
                  <td className="  pl-32">

                   
                  </td>
                </tr>
              );
            
   
          })}
        </tbody>
      </table>
    </div>
  );
};

export default MyToys;
