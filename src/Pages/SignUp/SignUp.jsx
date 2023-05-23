import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import GoogleBtn from "../GoogleBtn/GoogleBtn";
import PageTitle from "../../PageTitle";

const SignUp = () => {
  const [error, setError] = useState("");
  const { createUser } = useContext(AuthContext);
  const handleSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const pictureURL = form.pictureURL.value;
    const password = form.password.value;
    console.log(name, email, pictureURL, password);

    setError("");



    if (email === "" || password === "") {
      setError("Please fill in all the fields");
      return;
    } else if (password.length < 6) {
      setError("password must be 6 characters or longer");
      return;
    } else {
      createUser(email, password)
        .then((result) => {
          const loggedUser = result.user;
          console.log(loggedUser);
        })
        .catch((error) => {
          console.log(error);
          setError(error.message);
        });
    }

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })

      .catch((error) => console.log(error));
  };
  return (
    <div>
      <PageTitle title="Sign Up"></PageTitle>
      <div className="hero mt-5 bg-base-100">
        <div className="hero-content flex-col lg:flex-row">
          <div className="w-1/2">
            <img src="https://i.ibb.co/Y7jBP81/Review.png" alt="" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 bg-success">
            <div className="card-body">
              <h1 className="text-3xl font-bold">Sign Up!</h1>

              <form onSubmit={handleSignUp}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="name"
                    required
                    className="input input-bordered"
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="email"
                    required
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Picture Url</span>
                  </label>
                  <input
                    type="url"
                    name="pictureURL"
                    placeholder="pictureURL"
                    required
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text"> Password</span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="password"
                    required
                    className="input input-bordered"
                  />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <input
                    className="btn btn-warning"
                    type="submit"
                    value="Sign Up"
                  />
                </div>
                <p className="text-red-600"> {error}</p>

              </form>
              <p>
                Already have an account?
                <Link className="text-yellow-600 font-extrabold" to="/login">
                    Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="">
        <GoogleBtn></GoogleBtn>
      </div>
    </div>
  );
};

export default SignUp;
