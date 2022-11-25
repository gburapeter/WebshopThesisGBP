import { Autoplay, Pagination, Navigation } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const slideShow = [
    {
        alt: "Misc",
        href: "images/Homepage/Slideshow/slide1.webp",
    },
    {
        alt: "Xbox",
        href: "images/Homepage/Slideshow/slide2.webp",
    },
    {
        alt: "Iphone",
        href: "images/Homepage/Slideshow/slide3.webp",
    },
    {
        alt: "Macbook",
        href: "images/Homepage/Slideshow/slide4.webp",
    },
];

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
            {slideShow.map((slide, index) => (
                <SwiperSlide key={index}>
                    <img
                        src={slide.href}
                        alt={slide.alt}
                        className="w-full object-fill h-96 "
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    );
}
