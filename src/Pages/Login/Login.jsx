import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import GoogleBtn from "../GoogleBtn/GoogleBtn";
import PageTitle from "../../PageTitle";

const Login = () => {
  const [error, setError] = useState("");

  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);

  const from = location.state?.from?.pathname || "/";

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    setError("");
    if (email === "" || password === "") {
      setError("Please fill in all the fields");
      return;
    } else if (password.length < 8) {
      setError("password Didn't Match");
      return;
    }

    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true });
      })
      .catch((error) => console.log(error));
  };

  // const currentRoute = 'login';
  // const pageTitle = getPageTitle(currentRoute);
  return (
    <div>
      {/* <Helmet>
        <title>MarvelVault | {currentRoute}</title>
      </Helmet> */}

      <PageTitle title="Login">

      </PageTitle>
      <div className=" hero  bg-base-100">
        <div className="hero hero-content flex-col lg:flex-row">
          <div className="w-1/2">
            <img src="https://i.ibb.co/Y7jBP81/Review.png" alt="" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 bg-success">
            <div className="card-body">
              <h1 className="text-3xl font-bold">Login now!</h1>
              <form onSubmit={handleLogin}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="text"
                    name="email"
                    placeholder="email"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="text"
                    name="password"
                    placeholder="password"
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
                    value="Login"
                  />
                </div>
              </form>
              <p>
                New to Marvel Vault?
                <Link className="text-yellow-600 font-extrabold" to="/signup">
                  Sign Up
                </Link>
              </p>

              <p className="text-red-600"> {error}</p>

            </div>
          </div>
        </div>
      </div>
      
      <div className="ml-8">
        <GoogleBtn></GoogleBtn>
      </div>
    </div>
  );
};

export default Login;
