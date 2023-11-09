import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import Error from "../Pages/Error/Error";
import Rooms from "../Pages/Rooms/Rooms";
import MyBooking from "../Pages/MyBooking/MyBooking";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Home from "../Pages/Home/Home";
import PrivateRoute from "./PrivateRoute";
import AddRoom from "../Pages/DataSend/AddRoom";
import RoomDetailes from "../Pages/Roomdetailes/RoomDetailes";
import BookingFrom from "../Pages/BookingFrom/BookingFrom";

const Route = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children:[
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path:"rooms",
        element: <Rooms></Rooms>,
      },
      {
        path:"mybooking",
        element: <PrivateRoute><MyBooking></MyBooking></PrivateRoute>
      },
      {
        path:"/addroom",
        element: <AddRoom></AddRoom>
      },
      {
        path:"roomdetailes/:id",
        element:<RoomDetailes></RoomDetailes>
      },
      {
        path: "bookingfrom/:id",
        element: <BookingFrom></BookingFrom>
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