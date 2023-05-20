import React, { useState } from "react";
import "./GoogleBtn.css";
import { FaGoogle } from "react-icons/fa";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../../firebase/firebase.config";

const GoogleBtn = () => {
  const [user, setUser] = useState(null);
  const auth = getAuth(app);
  console.log(app);
  const provider = new GoogleAuthProvider();
  const handleGoogleSignIn = () => {
    // console.log('google')
    signInWithPopup(auth, provider)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        setUser(loggedUser);
      })
      .catch((error) => {
        console.log("error", error.message);
      });
  };
  return (
    <div>
      <div onClick={handleGoogleSignIn} className="ms-44 mt-2">
        <div className=" ms-96 ">
          <button className="flex ms-96 bg-warning rounded-lg p-3 mb-8 w-96 shadow-lg shadow-cyan-500/50">
            <FaGoogle className="mr-5 w-12 h-12 p-2 bg-white rounded-lg m-1 " />{" "}
            <span className="text-2xl p-2 ">Sign In With Google</span>
          </button>
        </div>

        <div>
            {user && <div>

                <h3>User: {user.displayName}</h3>
                <p>Email: {user.email}</p>
                <img src={user.photoURL} alt="" />
            </div> }
        </div>
      </div>
    </div>
  );
};

export default GoogleBtn;
