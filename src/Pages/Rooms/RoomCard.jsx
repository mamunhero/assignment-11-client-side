
const RoomCard = ({roomInfo}) => {
  const {image, roomType, price} = roomInfo || {}
  return (
    <div className="mt-10 mb-10">
      <div className="card  bg-base-100 shadow-xl">
  <figure>
    <img src={image} alt="Room" />
    </figure>
  <div className="card-body">
    <h2 className="card-title">Room Type:{roomType}</h2>
    <p>Price: {price}</p>
    <div className="card-actions">
      <button className="btn btn-primary btn-sm">Detailes</button>
    </div>
  </div>
</div>
    </div>
  );
};

export default RoomCard;

