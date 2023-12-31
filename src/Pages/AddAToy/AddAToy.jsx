import React from "react";
import Swal from "sweetalert2";
import PageTitle from "../../PageTitle";


const AddAToy = () => {
  const handleAddAToy = (event) => {
    event.preventDefault();

    const form = event.target;
    const subCategoryName = form.category.value;

    const picture = form.photo.value;
    const toyName = form.toyname.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const description = form.detail.value;
    const sellerName = form.sellername.value;
    const sellerEmail = form.selleremail.value;
    const availableQuantity = form.quantity.value;

    const newToy = {
      subCategoryName,
      picture,
      toyName,
      price,
      rating,
      description,
      sellerName,
      sellerEmail,
      availableQuantity,
    };
    console.log(newToy);

    fetch("http://localhost:5000/newToys", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newToy),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        if (data.insertedId) {
          Swal.fire({
            title: "Success",
            text: "Toy Added Successfully",
            icon: "Success",
            confirmButtonText: "Cool",
          });
        }
      });
  };
  return (
    <div className="  bg-base-200 p-24 ">
      
      <PageTitle title="Add A Toy">

      </PageTitle>
      <h1 className="text-5xl font-bold ">Add A Toy</h1>

      <form onSubmit={handleAddAToy}>
        <div className="  ">
          {/* flexed url and toyname */}
          <div className="lg:flex  ">
            <div className="form-control w-1/2 px-5">
              <label className="label">
                <span className="label-text">Sub-Category Name</span>
              </label>
              <input
                type="text"
                name="category"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="w-1/2">
              <div className="form-control ">
                <label className="label">
                  <span className="label-text">Picture Url</span>
                </label>
                <input
                  type="text"
                  name="photo"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
            </div>
          </div>
          {/* flexed seller name and seller email */}
          <div className="lg:flex">
            <div className="form-control w-1/2 px-5">
              <label className="label">
                <span className="label-text">Toy Name</span>
              </label>
              <input
                type="text"
                name="toyname"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="w-1/2">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Price</span>
                </label>
                <input
                  type="text"
                  name="price"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
            </div>
          </div>
          {/* flexed category and price */}
          <div className="lg:flex">
            <div className="form-control w-1/2 px-5">
              <label className="label">
                <span className="label-text">Rating</span>
              </label>
              <input
                type="text"
                name="rating"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="w-1/2">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Available Quantity</span>
                </label>
                <input
                  type="text"
                  name="quantity"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
            </div>
          </div>
          {/* flexed rating and available quantity */}
          <div className="lg:flex">
            <div className="form-control w-1/2 px-5">
            <label className="label">
                <span className="label-text">Seller Name</span>
              </label>
              <input
                type="text"
                name="sellername"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="w-1/2">
              <div className="form-control">
              <label className="label">
                  <span className="label-text">Seller Email</span>
                </label>
                <input
                  type="text"
                  name="selleremail"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
            </div>
          </div>
          {/* detail description */}
          <div className="form-control  pl-4">
            <label className="label">
              <span className="label-text">Detail Description</span>
            </label>
            <input
              type="text"
              name="detail"
              placeholder="email"
              className="input input-bordered"
            />
          </div>
          {/* login button */}
          <div className="form-control mx-5 mt-6">
            <button className="btn btn-primary">Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddAToy;
