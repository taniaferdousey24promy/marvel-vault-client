import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Swal from "sweetalert2";

const ShopByCategory = () => {
  const [toys, setToys] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/toys")
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, []);
  // console.log(toys);
  const slicedToys = toys.slice(0, 3);

  console.log(slicedToys);

  const handleViewButton = () => {
    // alert('login');
    Swal.fire({
      // title: "Success",
      text: "You have to log in first to view details",
      icon: "Success",
      // confirmButtonText: "",
    });
  };

  // const firstToySub = firstToy.subCategories[0];
  // console.log(firstToySub);

  // const values =[];
  // for(let i = 0; i<firstToy.subCategories.length; i++){
  //   const object = toys;
  //   const value= object.id;
  //   values.push(value);
  // }

  // console.log(values);

  return (
    <div className=" ms-36 mt-28 pb-20">
      <h1 className="text-7xl font-bold text-black text-center ">
        Shop By Category
      </h1>

      <Tabs className=" text-white  bg-black  mx-32 mt-20  rounded-xl p-2 ">
        <TabList>
          {slicedToys.map((toy) => (
            <Tab key={toy.id}>{toy.subCategoryName}</Tab>
          ))}
        </TabList>

        {/* <h1>{toys[5].toyName}</h1> */}

        {slicedToys.map((toy) => (
          <TabPanel className=" rounded-xl" key={toy.id}>
            {/* <h2>{toys[3].description} </h2>
                <h2>{toy.toyName} </h2> */}

            <div className="flex ">
              <div className="w-1/2 flex m-8  ">
                {/* <h2>{toy.toyName}</h2> */}

                <div className="w-2/3">
                  <h2 className="text-3xl mb-10">{toy.toyName}</h2>

                  <h4 className="mb-8">{toy.description}</h4>

                  <small className="text-1xl mb-8 ">Price: {toy.price}$</small>

                  <br />

                  <div className="rating rating-xs mt-8">
                    <p>
                      Rating{" "}
                      <input
                        type="radio"
                        name="rating-5"
                        className="mask mask-star-2 bg-orange-400"
                      />
                    </p>
                    <p>
                      <input
                        type="radio"
                        name="rating-5"
                        className="mask mask-star-2 bg-orange-400"
                      />
                    </p>
                    <p>
                      {" "}
                      <input
                        type="radio"
                        name="rating-5"
                        className="mask mask-star-2 bg-orange-400"
                      />
                    </p>
                    <p>
                      {" "}
                      <input
                        type="radio"
                        name="rating-5"
                        className="mask mask-star-2 bg-orange-400"
                      />
                    </p>
                    <p>
                      {" "}
                      <input
                        type="radio"
                        name="rating-5"
                        className="mask mask-star-2 bg-orange-400"
                      />
                    </p>
                  </div>
                  <div>
                    <Link to="/login">
                      <button
                        onClick={handleViewButton}
                        className="mt-8 bg-success btn "
                      >
                        View Details
                      </button>
                    </Link>
                  </div>
                </div>
                <div className="w-1/3 m-8">
                  <img className=" border-r-2" src={toy.picture} alt="" />
                </div>
              </div>
              <div className="w-1/2 flex ">
                {/* <h2>{toys[5].toyName}</h2> */}

                {/* <h2>{toy.toyName}</h2> */}

                <div className="w-2/3 mt-8 ">
                  <h2 className="text-3xl mb-10">{toys[4].toyName}</h2>

                  <h4 className="mb-8">{toys[4].description}</h4>

                  <small className="text-1xl mb-8 ">
                    Price: {toys[4].price}$
                  </small>

                  <br />

                  <div className="rating rating-xs mt-8">
                    <p>
                      Rating{" "}
                      <input
                        type="radio"
                        name="rating-5"
                        className="mask mask-star-2 bg-orange-400"
                      />
                    </p>
                    <p>
                      <input
                        type="radio"
                        name="rating-5"
                        className="mask mask-star-2 bg-orange-400"
                      />
                    </p>
                    <p>
                      {" "}
                      <input
                        type="radio"
                        name="rating-5"
                        className="mask mask-star-2 bg-orange-400"
                      />
                    </p>
                    <p>
                      {" "}
                      <input
                        type="radio"
                        name="rating-5"
                        className="mask mask-star-2 bg-orange-400"
                      />
                    </p>
                    <p>
                      {" "}
                      <input
                        type="radio"
                        name="rating-5"
                        className="mask mask-star-2 bg-orange-400"
                      />
                    </p>
                  </div>
                  <div>
                    <Link to="/login">
                      <button
                        onClick={handleViewButton}
                        className="mt-8 bg-success btn "
                      >
                        View Details
                      </button>
                    </Link>
                  </div>
                </div>
                <div className="w-1/3 m-8">
                  <img className="mt-24" src={toys[4].picture} alt="" />
                </div>
              </div>
            </div>
          </TabPanel>
        ))}
      </Tabs>
    </div>
  );
};

export default ShopByCategory;
