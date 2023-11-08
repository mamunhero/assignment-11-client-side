
import { useEffect, useState } from "react";
import RoomsSlider from "./RoomsSlider";
import { useParams } from "react-router-dom";
import RoomCard from "./RoomCard";

const Rooms = () => {
  const params = useParams();
  const [room, setRoom] = useState([]);
  
  useEffect(() => {
    fetch("http://localhost:5000/addroom")
      .then(response => response.json())
      .then(data => setRoom(data))
      .catch(error => {
        console.error("Error fetching room data:", error);
      });
  }, []);

  console.log(room);
  
  return (
    <div>
      <RoomsSlider></RoomsSlider>
      {room !== null ? (
        <div className="mt-5">
          <h2 className="text-3xl font-bold text-center text-red-500">Available Room: {room.length}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {room.map(roomInfo => 
              <RoomCard 
                key={roomInfo._id}
                roomInfo={roomInfo}
              ></RoomCard>
            )}
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Rooms;



