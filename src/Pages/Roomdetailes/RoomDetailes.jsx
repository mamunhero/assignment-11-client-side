import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import BookingDate from "./BookingDate";
const RoomDetailes = () => {
  const params = useParams();
  const [room, setRoom] = useState([]);
  const { _id, image, roomType, price, description, size, available, roomId, offer } = room || {};
  useEffect(() => {
    fetch(`https://assignment-11-server-side-smoky.vercel.app/addroom/${params.id}`)
      .then((response) => response.json())
      .then((data) => setRoom(data));
  }, []);
  console.log(room);
  return (
    <div className="mt-10 mb-10">
      <BookingDate></BookingDate>
      <div className="card md:card-side bg-base-100 shadow-xl">
        <figure>
          <img src={image} alt="Movie" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{description}</h2>
          <div className="flex items-center justify-between">
            <p>Room Type:{roomType}</p>
            <p>Per Night:{price} Tk</p>
          </div>
          <div className="flex items-center justify-between">
            <p>Room Size:{size}Feet</p>
            <p>Available:{available}</p>
          </div>
          <p className="font-bold">{offer}</p>
          <div className="card-actions">
            <Link to={`/bookingfrom/${_id}`}>
              <button className="btn btn-primary btn-sm">Booking Now</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomDetailes;
