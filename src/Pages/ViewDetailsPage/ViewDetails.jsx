import React from "react";
import { useLoaderData, useParams } from "react-router-dom";

const ViewDetails = () => {
  const toyDetails = useLoaderData();
  const { _id, Category, subCategories } = toyDetails;
  console.log(toyDetails);
  return (
    <div>
      <p>single details: {Category}</p>
      {/* {toyDetails.name} */}
    </div>
  );
};

export default ViewDetails;
