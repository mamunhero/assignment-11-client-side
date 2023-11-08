import { useState } from "react";

const SearchPrice = () => {
  const [search, setSearch] = useState("");
  console.log(search);
  return (
    <div>
      <form>
        <div onChange={(e)=>setSearch(e.target.value)} className="form-control mt-5 mb-5">
            <input type="text" placeholder="Search Room Price" className="input input-bordered" required />
        </div>
      </form>
    </div>
  );
};

export default SearchPrice;