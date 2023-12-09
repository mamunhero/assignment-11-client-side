import axios from "axios";
import Swal from "sweetalert2";

const AddRoom = () => {
  const handleAddRoom = (event) => {
    event.preventDefault();
    const form = event.target;
    const image = form.image.value;
    const roomType = form.roomType.value;
    const price = form.price.value;
    const description = form.description.value;
    const size = form.size.value;
    const available = form.available.value;
    const roomId = form.roomId.value;
    const offer = form.offer.value;
    console.log(image, roomType, price, description, size, available, roomId, offer);
    const newAddRoom = { image, roomType, price, description, size, available, roomId, offer };
    console.log(newAddRoom);
    fetch("https://assignment-11-server-side-smoky.vercel.app/room", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newAddRoom),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Good job!",
            text: "Room Added is Sucessfully!",
            icon: "success",
            confirmButtonText: "Ok",
          });
        }
      });

    //   axios.post('https://assignment-11-server-side-smoky.vercel.app/room', newAddRoom, {
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    // })
    //   .then(response => {
    //     console.log(response.data);
    //   })
    //   .catch(error => {
    //     console.error('An error occurred:', error);
    //   });
  };
  return (
    <div>
      <form onSubmit={handleAddRoom} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Image</span>
          </label>
          <input type="url" placeholder="Image" name="image" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Room Type:</span>
          </label>
          <select id="roomType" name="roomType" className="input input-bordered">
            <option value="single">Single Room</option>
            <option value="double">Double Room</option>
            <option value="suite">Suite</option>
          </select>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Price</span>
          </label>
          <input type="text" placeholder="price" name="price" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Description</span>
          </label>
          <input type="text" placeholder="Description" name="description" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Room Size</span>
          </label>
          <input type="text" placeholder="Room Size" name="size" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Room Available</span>
          </label>
          <input type="text" placeholder="Room Available" name="available" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Room Id</span>
          </label>
          <input type="text" placeholder="Room ID" name="roomId" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Offer</span>
          </label>
          <input type="text" placeholder="Offer" name="offer" className="input input-bordered" required />
        </div>
        <div className="form-control mt-6">
          <input type="submit" value="Added Room" className="btn btn-primary" />
        </div>
      </form>
    </div>
  );
};

export default AddRoom;
