import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import BookiInfo from "./BookiInfo";

const MyBooking = () => {
  const {user} = useContext(AuthContext)
  const [booking, setBooking] = useState([])
  useEffect(() => {
    fetch(`http://localhost:5000/booking?email=${user?.email}`)
      .then(response => response.json())
      .then(data => setBooking(data));
  }, [user.email]);
  
  return (
    <div>
      <h2>User Booking Information:{booking.length}</h2>
      
      <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Phone</th>
        <th>Price</th>
        <th>Room Size</th>
        <th>Room Id</th>
        <th>Offer</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {
        booking.map(bookInfo=> <BookiInfo key={bookInfo._id} bookInfo={bookInfo}></BookiInfo>)
      }
    </tbody>
  </table>
</div>
    </div>
  );
};

export default MyBooking;

