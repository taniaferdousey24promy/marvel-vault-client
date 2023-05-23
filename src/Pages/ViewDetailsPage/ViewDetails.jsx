import React from "react";
import { useLoaderData, useParams } from "react-router-dom";

const ViewDetails = () => {
  // const {viewdetailsId} = useParams();
  // console.log(viewdetailsId);

  const toy = useLoaderData();
  const {
    _id,
    subCategoryName,
    picture,
    toyName,
    price,
    rating,
    description,
    sellerName,
    sellerEmail,
    availableQuantity,
  } = toy;
  console.log(toy);

  // let singleSubCategory = allToys.find((toy) => toy.id === parseInt(viewdetailsId));
  // console.log(singleSubCategory);

  // const toyDetails = useLoaderData();
  // const { _id, Category, subCategories } = toyDetails;
  return (
    <div className="bg-warning text-white p-12  	">
      {/* <h2>{toy.toyName}</h2> */}

      <div className="bg-black rounded-xl flex mx-80 mb-52">
        <div className="rounded-xl p-12 w-2/3 ">
          <h2 className="text-5xl mb-8">{toy.toyName}</h2>

          <h4 className="mb-8">
            {toy.description}
            Ignite imagination with our Marvel figurines, inspiring heroic
            adventures for kids. Unleash creativity with iconic Marvel
            characters in our premium figurine collection.Experience the joy on
            your child's face as they embark on epic battles and heroic quests
            alongside iconic characters like Iron Man, Spider-Man, and Captain
            America. Our Marvel figurines are not just toys, they're powerful
            tools that nurture creativity, encourage social interaction, and
            promote character development in your little ones. Give your kids
            the gift of extraordinary heroes and let them create their own
            extraordinary stories with our premium Marvel figurines, crafted
            with passion and made to be cherished for a lifetime.
          </h4>
          <p></p>

          <p className="text-1xl  ">Price: {toy.price}$</p>

          <br />

          <div className="rating rating-xs mt-8  ">
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
        </div>
        <div className="rounded-lg w-1/3">
          <img className="max-h-screen	mt-32 mb-32 " src={toy.picture} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
