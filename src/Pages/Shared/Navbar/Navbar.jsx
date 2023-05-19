import { Link } from "react-router-dom";
import "./Navbar.css";


const Navbar = () => {
  return (
    <div className="  font bg-warning navbar bg-base-100">
      <div className="navbar-start">
        <ul className="menu menu-horizontal ps-80">
          <li>
          <Link to="/">Home</Link>
          </li>
          <li>
            <a>All Toys</a>
          </li>
          <li>
            <a>My Toys</a>
          </li>
        </ul>

        {/* <a className="btn btn-ghost normal-case text-xl">daisyUI</a> */}
      </div>

      <div className="navbar-center hidden lg:flex">
        <img
          className="w-16 mt-8 me-4 w-20 rounded-full ring ring-black ring-offset-base-100 ring-offset-2 mb-8"
          src="https://i.ibb.co/7pt0pk5/95769f17-3f9b-4581-9f85-47802fc10c6d-ada9894174d16d94447334a6eb42ff20-modified.png"
          alt=""
        />
                  {/* <li>
            <a><img className="w-20 rounded-full mx-5" src="https://i.ibb.co/g9XRH44/BT21-MANG-FACE-REVEAL.jpg" alt="" /></a>
          </li> */}


        {/* <li>
            <a><img className="w-20 rounded-full mx-5" src="https://i.ibb.co/g9XRH44/BT21-MANG-FACE-REVEAL.jpg" alt="" /></a>
          </li> */}  
        <h1 className="font-extrabold text-2xl">Marvel Vault</h1>
      </div>

      <div className="navbar-end pe-96">
        <ul className="menu menu-horizontal ">
          <li>
            <a>Add A Toy</a>
          </li>
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>

          <li>
            <Link to="/login"><button className="bg-black text-white p-4 rounded-xl btn">Login</button></Link>
          </li>

        </ul>
        <a className="btn hidden">Login</a>
      </div>
    </div>
  );
};

export default Navbar;
