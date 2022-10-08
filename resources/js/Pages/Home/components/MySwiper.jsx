// import Swiper core and required modules

import { Autoplay, Pagination, Navigation } from "swiper";

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';



export default function MySwiper({  }) {
  return (


    <Swiper
    autoHeight={false}
    spaceBetween={30}
    centeredSlides={true}
    loop={true}
    autoplay={{
      delay: 3000,
      disableOnInteraction: false,
    }}
    pagination={{
      clickable: true,
    }}
    navigation={true}
    modules={[Autoplay, Pagination, Navigation]}
    className="mySwiper "
  >


      <SwiperSlide>

      <img src="https://placeimg.com/800/200/arch" className="w-full" />

      </SwiperSlide>
      <SwiperSlide>
      <img src="https://placeimg.com/800/200/arch" className="w-full" />
      </SwiperSlide>
      <SwiperSlide>
      <img src="https://placeimg.com/800/200/arch" className="w-full" />
      </SwiperSlide>
      <SwiperSlide>
      <img src="https://placeimg.com/800/200/arch" className="w-full" />
      </SwiperSlide>



    </Swiper>
  );
};
