import { FaCheckCircle } from 'react-icons/fa';const Offer = () => {
  return (
    <div className=''>
      <div className=" mt-5 mb-5 flex flex-col-reverse md:flex-row">
      <div className="md:w-1/2  p-5 flex-1 space-y-5">
        <h1 className="font-bold sm:text-xl md:text-3xl"> 50% Off Your Dream Room! <br />
          <span className="text-[#DA126B]">with Bkash Pay</span>
        </h1>
        <div className='flex items-center gap-5'>
          <FaCheckCircle></FaCheckCircle>
          <p>Complimentary breakfast</p>
        </div>
        <div className='flex items-center gap-5'>
          <FaCheckCircle></FaCheckCircle>
          <p>Free Wi-Fi</p>
        </div>
        <div className='flex items-center gap-5'>
          <FaCheckCircle></FaCheckCircle>
          <p>Access to our premium facilities</p>
        </div>
        <button className='btn btn-primary btn-sm'>Book Now</button>
      </div>
      <div className="md:w-1/2 p-5 flex-1">
        <img src="https://i.ibb.co/dtVZ5zb/room-1.jpg" alt="" className='w-full h-full object-fit rounded-lg' />
      </div>
    </div>
    <div className=" mt-5 mb-5 flex flex-col md:flex-row">
      <div className="md:w-1/2 p-5 flex-1">
        <img src="https://i.ibb.co/jGH2CLr/room-2.png" alt="" className='w-full h-full object-fit rounded-lg' />
      </div>
      <div className="md:w-1/2  p-5 flex-1 space-y-5">
        <h1 className="font-bold sm:text-xl md:text-3xl"> 60% Off Your Dream Room! <br />
          <span className="text-[#2473B6]">with Brac Bank Card</span>
        </h1>
        <div className='flex items-center gap-5'>
          <FaCheckCircle></FaCheckCircle>
          <p>Complimentary breakfast</p>
        </div>
        <div className='flex items-center gap-5'>
          <FaCheckCircle></FaCheckCircle>
          <p>Free Wi-Fi</p>
        </div>
        <div className='flex items-center gap-5'>
          <FaCheckCircle></FaCheckCircle>
          <p>Access to our premium facilities</p>
        </div>
        <button className='btn btn-primary btn-sm'>Book Now</button>
      </div>
    </div>
    <div className=" mt-5 mb-5 flex flex-col-reverse md:flex-row">
      <div className="md:w-1/2  p-5 flex-1 space-y-5">
        <h1 className="font-bold sm:text-xl md:text-3xl"> 70% Off Your Dream Room! <br />
          <span className="text-[#36CB00]">Standard Chartered Bank</span>
        </h1>
        <div className='flex items-center gap-5'>
          <FaCheckCircle></FaCheckCircle>
          <p>Complimentary breakfast</p>
        </div>
        <div className='flex items-center gap-5'>
          <FaCheckCircle></FaCheckCircle>
          <p>Free Wi-Fi</p>
        </div>
        <div className='flex items-center gap-5'>
          <FaCheckCircle></FaCheckCircle>
          <p>Access to our premium facilities</p>
        </div>
        <button className='btn btn-primary btn-sm'>Book Now</button>
      </div>
      <div className="md:w-1/2 p-5 flex-1">
        <img src="https://i.ibb.co/yswdNRB/room-3.png" alt="" className='w-full h-full object-fit rounded-lg' />
      </div>
    </div>
    </div>
  );
};

export default Offer;

