"use client";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

type GalleryPropsType = {
  space?: number;
  per?: number;
};

export default function Gallery({ space, per }: GalleryPropsType) {
  const swiperItems = [
    "/Quad-Pro-Toyota-Hilux-N80-Desktop.jpg",
    "/Type-X-Evo-Brown-Davis-Ford-Ranger-Raptor-Desktop.jpg",
    "/Type-X-Pro-Bel-NZ-Desktop.jpg",
    "/typex_sport_desktop.jpg",
  ];

  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={space}
      slidesPerView={per}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      {swiperItems.map((swipeItem, index) => (
        <SwiperSlide key={index}>
          {typeof swipeItem === "string" && (
            <Image src={swipeItem} width={300} height={90} alt="image" />
          )}

          {typeof swipeItem === "string" ? `${swipeItem}` : ""}
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
