import React from "react";
import Swal from "sweetalert2";
const AddAToy = () => {
  const handleAddAToy = (event) => {
    event.preventDefault();

    const form = event.target;

    const photo = form.photo.value;
    const toyname = form.toyname.value;
    const sellername = form.sellername.value;
    const selleremail = form.selleremail.value;
    const category = form.category.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const quantity = form.quantity.value;
    const detail = form.detail.value;

    const newToy = {
      photo,
      toyname,
      sellername,
      selleremail,
      category,
      price,
      rating,
      quantity,
      detail,
    };
    console.log(newToy);

    fetch("http://localhost:5000/toys", {
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
      <h1 className="text-5xl font-bold ">Add A Toy</h1>

      <form onSubmit={handleAddAToy}>
        <div className="  ">
          <div className="lg:flex  ">
            <div className="form-control w-1/2 px-5">
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
            <div className="w-1/2">
              <div className="form-control ">
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
            </div>
          </div>

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

          <div className="lg:flex">
            <div className="form-control w-1/2 px-5">
              <label className="label">
                <span className="label-text">Category</span>
              </label>
              <input
                type="text"
                name="category"
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

          <div className="form-control  px-5">
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

          <div className="lg:flex">
            <label
              htmlFor="
            "
            >
              <a href="#" className="label-text-alt link link-hover ml-4">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddAToy;
