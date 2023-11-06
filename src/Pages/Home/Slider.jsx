// import Swiper core and required modules
import { Navigation, Autoplay } from 'swiper/modules';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';const Slider = () => {
  return (
    <div>
      <Swiper
      // install Swiper modules
      spaceBetween={50}
      slidesPerView={1}
      navigation={true}
      modules={[Navigation, Autoplay ]}
      autoplay={{ delay: 3000 }}
    >
      <SwiperSlide><img src="https://i.ibb.co/wSCF1mX/IMG-1.png" alt="" className='w-full h-auto block' /></SwiperSlide>
      <SwiperSlide><img src="https://i.ibb.co/RBcn2zD/IMG-2.png" alt="" /></SwiperSlide>
      <SwiperSlide><img src="https://i.ibb.co/xmChcsN/IMG-3.png" alt="" /></SwiperSlide>
      <SwiperSlide><img src="https://i.ibb.co/02N2Qrx/IMG-4.png" alt="" /></SwiperSlide>
      <SwiperSlide><img src="https://i.ibb.co/3FcZMBf/IMG-5.png" alt="" /></SwiperSlide>
      <SwiperSlide><img src="https://i.ibb.co/DtfYKLZ/IMG-6.png" alt="" /></SwiperSlide>
    </Swiper>
    </div>
  );
};

export default Slider;

