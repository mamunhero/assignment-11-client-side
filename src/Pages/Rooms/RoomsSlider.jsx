// import Swiper core and required modules
import { Navigation, Autoplay } from 'swiper/modules';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
const RoomsSlider = () => {
  return (
    <div>
      <Swiper
      spaceBetween={50}
      slidesPerView={1}
      navigation={true}
      modules={[Navigation, Autoplay ]}
      autoplay={{ delay: 3000 }}
    >
      <SwiperSlide><img src="https://i.ibb.co/fM8nTnt/rooms-4.jpg" alt="" className='w-full h-[450px] opacity-40 shadow-lg rounded-lg' /></SwiperSlide>
      <SwiperSlide><img src="https://i.ibb.co/ky0FcFX/rooms-5-1.jpg" alt="" className='w-full h-[450px] opacity-40 shadow-lg rounded-lg' /></SwiperSlide>
      <SwiperSlide><img src="https://i.ibb.co/s3ByC1K/rooms-6.webp" alt="" className='w-full h-[450px] opacity-40 shadow-lg rounded-lg' /></SwiperSlide>
    </Swiper>
    </div>
  );
};

export default RoomsSlider;