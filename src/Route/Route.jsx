import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import Error from "../Pages/Error/Error";
import Rooms from "../Pages/Rooms/Rooms";
import MyBooking from "../Pages/MyBooking/MyBooking";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Home from "../Pages/Home/Home";

const Route = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children:[
      {
        index: true,
        element: <Home></Home>
      },
      {
        path:"/rooms",
        element: <Rooms></Rooms>,
      },
      {
        path:"/mybooking",
        element: <MyBooking></MyBooking>
      },
    ],
  },
  {
    path: "/login",
    element: <Login></Login>
  },
  {
    path: "/register",
    element: <Register></Register>
  }
])

export default Route;