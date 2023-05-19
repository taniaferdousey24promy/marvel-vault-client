import React from "react";

const Blogs = () => {
  return (
    <div>
      <div>
        <div className="mx-32 flex gap-8 mt-8 ">

          <div className="avatar">
            <div className="w-24 rounded-xl">
              <img src="https://i.ibb.co/R4CdvJ9/buy-love-yourself-answer-on-itunes-BT21-Icons-Available-for-DP-use-no-credit-6.png" />
            </div>
          </div>

          <div className="p-2  rounded-xl alert-success">
            <div>
                <p className="font-bold mb-1">What is an access token and refresh token? How do they work and where should we store them on the client-side?	</p>
                <p> An access token is a security credential that is used to authenticate and authorize a client to access protected resources. It is typically a JSON Web Token (JWT) that contains information about the user or client and an expiration time. A refresh token is a token that is used to obtain a new access token after the previous one expires. Access tokens are usually stored in client-side storage such as browser cookies or local storage.
                </p>

            </div>
          </div>
        </div>
      </div>






      <div>
        <div className="mx-32 flex gap-8 mt-8 ">
        <div className="p-2  rounded-xl alert-success">
            <div >

                <p className="font-bold mb-1">Compare SQL and NoSQL databases?		</p>
                <p>SQL (Structured Query Language) databases are relational databases that use structured schemas to define tables, columns, and relationships. They are good for complex data models with predefined schemas and support transactions and powerful querying capabilities. NoSQL databases, on the other hand, are non-relational databases that provide flexible schemas, scalability, and high performance. They are suitable for handling large amounts of unstructured or semi-structured data and offer various data models like key-value, document, columnar, or graph.</p>
            </div>
          </div>
          <div className="avatar">
            <div className="w-24 rounded-xl">
              <img src="https://i.ibb.co/8jhQMjL/buy-love-yourself-answer-on-itunes-BT21-Icons-Available-for-DP-use-no-credit-3.png" />
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="mx-32 flex gap-8 mt-8 ">
          <div className="avatar">
            <div className="w-24 rounded-xl">
              <img src="https://i.ibb.co/ZN4r9qr/buy-love-yourself-answer-on-itunes-BT21-Icons-Available-for-DP-use-no-credit-4.png" />
            </div>
          </div>

          <div className="p-2  rounded-xl alert-success">
            <div>

                <p className="font-bold mb-1">What is express js? What is Nest JS ?		</p>
                <p>Express.js is a popular Node.js web application framework that simplifies the creation of web servers and APIs. It provides a minimalistic and flexible approach to building web applications and offers middleware functions to handle requests, routes, and responses. Nest.js is a progressive TypeScript framework for building efficient and scalable server-side applications. It is built on top of Express.js and provides an opinionated structure and features such as dependency injection and modular architecture.</p>
            </div>
          </div>
        </div>
      </div>
      <div>
      <div>
        <div className="mx-32 flex gap-8 mt-8  mb-8">
        <div className="p-2  rounded-xl alert-success">
            <div>
                <p className="font-bold mb-1">What is MongoDB aggregate and how does it work?</p>
                <p>MongoDB's aggregate is a powerful data aggregation framework that allows you to perform complex data analysis and transformation operations on MongoDB collections. It enables you to apply multiple stages of operations, including filtering, grouping, sorting, joining, and computing aggregate values. The aggregate pipeline consists of multiple stages, where each stage takes input from the previous stage and produces output for the next stage, allowing for flexible data processing and aggregation.</p>
            </div>
          </div>
          <div className="avatar">
            <div className="w-24 rounded-xl">
              <img src="https://i.ibb.co/Xzz8gnC/buy-love-yourself-answer-on-itunes-BT21-Icons-Available-for-DP-use-no-credit-1.png" />
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Blogs;
