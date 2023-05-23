import { Link } from "react-router-dom";
import "./Navbar.css";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  console.log(user);

  const handleLogout = () => {
    logOut()
      .then((result) => {})
      .catch((error) => console.error(error));
  };
  return (
    <div className="  font bg-warning navbar bg-base-100">
      <div className="navbar-start">
        <ul className="menu menu-horizontal ps-80">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/alltoys">All Toys</Link>
          </li>
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
        </ul>

        {/* <a className="btn btn-ghost normal-case text-xl">daisyUI</a> */}
      </div>

      <div className="navbar-center hidden lg:flex">
        <img
          className=" w-16 mt-8 me-4 w-20 rounded-full ring ring-black ring-offset-base-100 ring-offset-2 mb-8"
          src="https://i.ibb.co/7pt0pk5/95769f17-3f9b-4581-9f85-47802fc10c6d-ada9894174d16d94447334a6eb42ff20-modified.png"
          alt=""
        />

        <h1 className="font-extrabold text-2xl">Marvel Vault</h1>
      </div>

      <div className="navbar-end pe-96">
        <ul className="menu menu-horizontal ">
          <li>
            {user && (
              <li className="text-black">

                <li>
                  <Link to="/addatoy">Add A Toy </Link>
                </li>
                {user.displayName ? user.displayName : user.email}

                <>
                
                <li>
                  <Link to="/mytoys">My Toys</Link>
                </li>
                <li>
                <button
                  className="btn bg-black text-white"
                  onClick={handleLogout}
                >
                  Logout
                </button>  
                </li></>

                
              </li>
            )}
          </li>

          <li>
            {!user && (
              <Link to="/login">
                <button className="bg-black text-white p-4 rounded-xl btn">
                  Login
                </button>
              </Link>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
