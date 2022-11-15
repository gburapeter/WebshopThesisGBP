import { Autoplay, Pagination, Navigation } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function HomepageSlideshow({}) {
    return (
        <Swiper
            autoHeight={true}
            spaceBetween={30}
            centeredSlides={true}
            loop={true}
            autoplay={{
                delay: 5000,
                disableOnInteraction: false,
            }}
            pagination={{
                clickable: true,
            }}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper "
        >
            <SwiperSlide>
                <img
                    src="https://media4.giphy.com/media/IeFnrNj0fcXG4YuCfj/giphy.gif?cid=ecf05e47nj6iup357dirmbopdn000jmeoshaz0o8nn85hm3m&rid=giphy.gif&ct=g"
                    className="w-full object-fill h-96 "
                />
            </SwiperSlide>
            <SwiperSlide>
                <img
                    src="https://i.giphy.com/media/iJtMmqaxdo35ANZ8zW/giphy.webp"
                    className="w-full object-fill h-96"
                />
            </SwiperSlide>
            <SwiperSlide data-swiper-autoplay="8000">
                <img
                    src="https://media3.giphy.com/media/26n79t82lmj989iAE/giphy.gif?cid=ecf05e47rzg20jo063aheofuv7j2oykz1ymi64y0rl196g3u&rid=giphy.gif&ct=g"
                    className="w-full object-fill h-96"
                />
            </SwiperSlide>
            <SwiperSlide>
                <img
                    src="https://media3.giphy.com/media/l3vRbqgK5udZevNE4/giphy.gif?cid=ecf05e47havktq94ls5eiaisvqv7k9qxw9facmt0eybiz44r&rid=giphy.gif&ct=g"
                    className="w-full object-fill h-96 "
                />
            </SwiperSlide>
        </Swiper>
    );
}
