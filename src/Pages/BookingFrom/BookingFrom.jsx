
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const BookingFrom = () => {
  const params = useParams()
  const [room, setRoom] = useState([]);
  const {_id,  price, description, size,  roomId, offer} = room || {}
  useEffect(()=>{
    fetch(`http://localhost:5000/bookingfrom/${params.id}`)
    .then(response=> response.json())
    .then(data=>setRoom(data))
  },[])
  const handleBooking = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const phone = form.phone.value;
    const price = form.price.value;
    const size = form.size.value;
    const roomId = form.roomId.value;
    const offer = form.offer.value;
    console.log(name, phone, price, size, roomId, offer);
    const booking = {name, phone, price, size, roomId, offer};
    console.log(booking);
    fetch("http://localhost:5000/booking", {
      method: "POST",
      headers: {
        "content-type" : "application/json"
      },
      body:JSON.stringify(booking)
    })
    .then(response=> response.json())
    .then(data=>{
      console.log(data);
      if (data.insertedId) {
        Swal.fire({
          title: "Good job!",
          text: "Room Booking is Sucessfully!",
          icon: "success",
          confirmButtonText: "Ok",
        });
      }
    })
  }
  return (
    <div>
      <h2>Booking Now: {description}</h2>
      <form  onSubmit={handleBooking} className="card-body">
      <div className="form-control">
          <label className="label">
            <span className="label-text">Customer Name</span>
          </label>
          <input type="text" placeholder="customer name" name="name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Customer Phone Number</span>
          </label>
          <input type="text" placeholder="customer phone number" name="phone" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Price</span>
          </label>
          <input type="text" placeholder="price" name="price" className="input input-bordered" value={price} required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Room Size</span>
          </label>
          <input type="text" placeholder="Room Size" name="size" className="input input-bordered" value={size} required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Room Id</span>
          </label>
          <input type="text" placeholder="Room ID" name="roomId" className="input input-bordered" value={roomId} required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Offer</span>
          </label>
          <input type="text" placeholder="Offer" name="offer" className="input input-bordered" value={offer} required />
        </div>
        <div className="form-control mt-6">
          <Link to="/mybooking">
            <input type="submit" value="Confirem Booking" className="btn btn-primary w-full" />
          </Link>
        </div>
      </form>
    </div>
  );
};

export default BookingFrom;

