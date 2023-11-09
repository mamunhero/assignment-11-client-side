import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const RoomDetailes = () => {
  const params = useParams();
  const [room, setRoom] = useState([]);
  const {image, roomType, price, description, size, available, roomId, offer} = room || {}
  useEffect(()=>{
    fetch(`http://localhost:5000/addroom/${params.id}`)
    .then(response=>response.json())
    .then(data=> setRoom(data))
  },[])
  console.log(room);
  return (
    <div className="mt-10 mb-10">
      <div className="card md:card-side bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt="Movie"/>
      </figure>
      <div className="card-body">
        <h2 className="card-title">{description}</h2>
        <div className="flex items-center justify-between">
          <p>Room Type:{roomType}</p>
          <p>Per Night:{price} Tk</p>
        </div>
        <div className="flex items-center justify-between">
          <p>Room Size:{size}</p>
          <p>Available:{available}</p>
        </div>
        <p className="font-bold">{offer}</p>
        <div className="card-actions">
          <button className="btn btn-primary btn-sm">Book Now</button>
        </div>
      </div>
</div>
    </div>
  );
};

export default RoomDetailes;



