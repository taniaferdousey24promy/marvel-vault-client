import { Link } from "react-router-dom";
import React, { useContext } from 'react';
import { AuthContext } from "../../Providers/AuthProviders";

const Login = () => {
    const {signIn}=useContext(AuthContext);

    const handleLogin =event =>{
        event.prevent.default();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name,email,password);
        signIn(email,password)
        .then(result =>{
            const user = result.user;
            console.log(user);
        })
        .catch(error=> console.log(error));
    }
  return (
    <div className="hero min-h-screen bg-base-100 ">
      <div className="hero-content flex-col lg:flex-row">

        <div className=" w-2/5 card">
            <img src="https://i.ibb.co/Y7jBP81/Review.png" className="shadow-none" alt="" />
        </div>
        
        <div className="card flex-shrink-0 w-full max-w-sm  bg-base-100 gap-0">
          <div className="card-body">
          <h1 className="text-5xl font-bold">Login now!</h1>

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
                  Forgot password ?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
                <input className="btn btn-primary" type="submit" value="Login"  />
            </div>
           </form>
           <p >New to Marvel Vault? <Link className="text-yellow-600 font-extrabold" to="/signup">Sign Up</Link> </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
