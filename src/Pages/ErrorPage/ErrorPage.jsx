import React from "react";
import { Link, useRouteError } from "react-router-dom";
import "./ErrorPage.css";

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="bg-black  ">
      <div className=" px-96 py-32 ">
        <div className="error-page">
          <img
            className=" "
            src="https://i.ibb.co/VJ5fqVN/25-HTML-Funny-404-Pages.gif"
            alt=""
          />
        </div>
        <div className=" text-center">

            <Link to='/'><button className="bg-black btn rounded-full btn-accent btn-outline">
            Take me Home
          </button></Link>
          
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
