
const NewsLetterfrom = () => {
  return (
    <div>
     <form className="">
     <div className="form-control w-3/4 mx-auto md:w-2/3 md:mx-0">
          <label className="label">
            <span className="md:text-xl text-white font-bold">Your Name</span>
          </label>
          <input type="text" placeholder="Your Full Name" name="name" className="input input-bordered" required />
        </div>
        <div className="form-control w-3/4 mx-auto md:w-2/3 md:mx-0">
          <label className="label">
            <span className="md:text-xl text-white font-bold">Email</span>
          </label>
          <input type="email" placeholder="email" name="email" className="input input-bordered" required />
        </div>
        <div className="form-control mt-6 w-3/4 mx-auto md:w-2/3 md:mx-0">
          <button type="submit" className="btn btn-primary">Subscribe</button>
        </div>
      </form>
    </div>
  );
};

export default NewsLetterfrom;

