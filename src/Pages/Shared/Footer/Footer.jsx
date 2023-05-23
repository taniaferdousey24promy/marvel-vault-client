import React from "react";

const Footer = () => {
  return (
    <div className="bg-neutral p-8  ">
      <footer className="footer p-10 bg-neutral text-neutral-content h-80">
        <div className="w-96 ml-24 border-b-1">
          <h1 className="font-extrabold text-5xl mb-4 text-warning">
            Marvel Vault
          </h1>

          <div className="text-">
            <p className="mb-4 ">
              MARVELVAULT Industries Ltd.
              <br />
              Providing reliable tech since 1992
            </p>

            {/*           
          <p className=""> Email:<span className="text-2xl">marvelvault@gmail.com</span>  
 <br /> Address of the Shop: 123 Main Street, Shantinogor, DHAKA</p> */}

            <p className="mt-5">
              Contact Info for MARVEL VAULT Shop. <br />{" "}
              <span className="text-warning">Phone:</span>{" "}
              <span className="text-2xl "> 123-456-7890 </span>
            </p>

            <p className="mt-1">
              {" "}
              <span className="text-warning">Email:</span>{" "}
              <span className="text-2xl "> marvelvault@gmail.com </span>
            </p>

            <p className="mt-1">
              {" "}
              <span className="text-warning">Address of the Shop:</span>{" "}
              <span className="text-2xl ">
                {" "}
                123 Main Street, Shantinogor, DHAKA{" "}
              </span>
            </p>
          </div>
        </div>

        <div className="">
          <img
            className="mt-28 me-4 w-32 rounded-full ring ring-black ring-offset-base-100 ring-offset-2 mb-8"
            src="https://i.ibb.co/7pt0pk5/95769f17-3f9b-4581-9f85-47802fc10c6d-ada9894174d16d94447334a6eb42ff20-modified.png"
          />
        </div>
        <div className="w-96">
          <h1 className="font-extrabold text-5xl mb-4 text-warning">
            Social Media
          </h1>

          <p>
            {" "}
            <p>
              Stay updated, engage with us, and discover exciting content on our
              social media platforms. We value our customers' feedback and look
              forward to connecting with you online.We value your feedback and
              strive to provide a seamless experience across our social media
              channels. Join our online community today and be a part of the
              John Doe Shop community.
            </p>
          </p>
          <div className="grid grid-flow-col gap-20 ml-5 mt-8">
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
              </svg>
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
              </svg>
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
            </a>
          </div>
        </div>
      </footer>
      <div className="grid grid-flow-col  text-success gap-52">
        <div className="ml-32 mb-5  mt-12">
          <a href="">Conctact Us</a>
          <a className="ml-16" href="">
            Help
          </a>
          <a className="ml-16" href="">
            Pricing
          </a>
        </div>
        <div className=" ml-44 mb-8 mt-8">
          <a className="" href="">
            Home
          </a>
          <a className="ml-16" href="">
            Shop
          </a>
          <a className="ml-16" href="">
            Policy
          </a>
          <a className="ml-16" href="">
            Map
          </a>
        </div>
      </div>
      <footer className=" border-t-2 border-white  footer footer-center py-4  bg-neutral text-neutral-content ">
        <div>
          <p>Copyright © 2023 - All right reserved by ACME Industries Ltd</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
