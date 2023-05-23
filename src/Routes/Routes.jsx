import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Blogs from "../Pages/Blogs/Blogs";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import AllToys from "../Pages/AllToys/AllToys";
import AddAToy from "../Pages/AddAToy/AddAToy";
import MyToys from "../Pages/MyToys/MyToys";
import PrivateRoute from "./PrivateRoute";
import ViewDetails from "../Pages/ViewDetailsPage/ViewDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "/alltoys",
        element: <AllToys></AllToys>,
      },
      {
        path: "/addatoy",
        element: (
          <PrivateRoute>
            <AddAToy></AddAToy>
          </PrivateRoute>
        ),
      },
      {
        path: "/mytoys",
        element: (
          <PrivateRoute>
            <MyToys></MyToys>
          </PrivateRoute>
        ),
      },

      {
        path: "viewdetails/:id",
        element: (
          <PrivateRoute>
            <ViewDetails></ViewDetails>
          </PrivateRoute>
        ),
        loader:({params})=>fetch(`http://localhost:5000/toys/${params.id}`)

        // loader: ({ params }) =>
        //   fetch(`http://localhost:5000/toys/${params.id}`),
        // ),
        // loader: async ({ params }) =>{
        //   const response = await fetch(
        //     `http://localhost:5000/toys/toys/${params.id}`
        //   );
        //   const data = await response.json();
        //   const desiredObject = data.nesetedArray.find(obj => obj.id == params.id);
        //   return desiredObject;

        // }
      }
    ],
  },
  {
    path: "*",
    element: <ErrorPage></ErrorPage>,
  },
]);

export default router;
