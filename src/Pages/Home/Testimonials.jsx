// import Swiper core and required modules
import { Navigation, Autoplay } from 'swiper/modules';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

const Testimonials = () => {
  return (
    <div className="mt-5 mb-5">
      <div className="text-center space-y-3">
        <h2 className="text-3xl font-bold text-black">Our
        <span className="text-[#8a6bff]">Testimonials</span></h2>
        <p className="text-xl text-gray-500">What Client Say About US ?</p>
        <div className="border-b-8 border-[#8a6bff] w-16 rounded-xl mx-auto my-5"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5 mb-5">
      <div className="w-[330px] h-[250px] bg-[#8a6bff] py-5 px-5 border-red-500 border-4 space-y-5 rounded-lg shadow-md text-white">
        <p className="font-semibold text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, officia. Assumenda repellendus, perferendis alias provident ut aliquid atque! Natus, quae?</p>
        <div className="flex  items-center gap-5">
          <img src="https://i.ibb.co/C0yBZ98/avatar1.jpg" alt=""  className="w-[25%] h-[25%] rounded-full border-2 border-red-600" />
          <div className="gap-5">
            <p className="font-bold">Jessica Devis</p>
            <span>Customer</span>
          </div>
        </div>
      </div>
      <div className="w-[330px] h-[250px] bg-[#8a6bff] py-5 px-5 border-red-500 border-4 space-y-5 rounded-lg shadow-md text-white">
        <p className="font-semibold text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, officia. Assumenda repellendus, perferendis alias provident ut aliquid atque! Natus, quae?</p>
        <div className="flex  items-center gap-5">
          <img src="https://i.ibb.co/72rxwJ5/avatar3.jpg" alt=""  className="w-[25%] h-[25%] rounded-full border-2 border-red-600" />
          <div className="gap-5">
            <p className="font-bold">Jessica Devis</p>
            <span>Customer</span>
          </div>
        </div>
      </div>
      <div className="w-[330px] h-[250px] bg-[#8a6bff] py-5 px-5 border-red-500 border-4 space-y-5 rounded-lg shadow-md text-white">
        <p className="font-semibold text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, officia. Assumenda repellendus, perferendis alias provident ut aliquid atque! Natus, quae?</p>
        <div className="flex  items-center gap-5">
          <img src="https://i.ibb.co/C0yBZ98/avatar1.jpg" alt=""  className="w-[25%] h-[25%] rounded-full border-2 border-red-600" />
          <div className="gap-5">
            <p className="font-bold">Jessica Devis</p>
            <span>Customer</span>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Testimonials;

