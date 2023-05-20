import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import GoogleBtn from "../GoogleBtn/GoogleBtn";

const SignUp = () => {
  const { createUser } = useContext(AuthContext);
  const handleSignUp = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, email, password);


    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);

       
      })

      .catch((error) => console.log(error));
  };
  return (
    <div>
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
        <GoogleBtn  ></GoogleBtn>
      </div>
    </div>
  );
};

export default SignUp;
