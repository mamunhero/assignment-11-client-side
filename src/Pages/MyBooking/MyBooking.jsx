import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import BookiInfo from "./BookiInfo";
import Swal from "sweetalert2";

const MyBooking = () => {
  const { user } = useContext(AuthContext);
  const [booking, setBooking] = useState([]);
  useEffect(() => {
    fetch(`https://assignment-11-server-side-smoky.vercel.app?email=${user?.email}`)
      .then((response) => response.json())
      .then((data) => setBooking(data));
  }, [user.email]);

  // booking delete
  const handleDelete = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to delete it!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://assignment-11-server-side-smoky.vercel.app/${id}`, {
          method: "DELETE",
        })
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your Room hac been deleted!",
                icon: "success",
              });
              const remaning = booking.filter((bookings) => bookings._id !== id);
              setBooking(remaning);
            }
          });
      }
    });
  };
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
            {booking.map((bookInfo) => (
              <BookiInfo key={bookInfo._id} bookInfo={bookInfo} handleDelete={handleDelete}></BookiInfo>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyBooking;
