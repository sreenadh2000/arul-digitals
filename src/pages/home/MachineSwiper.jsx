import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// const images = [
//   { id: 1, src: "https://picsum.photos/600/400?random=1", text: "Image One" },
//   { id: 2, src: "https://picsum.photos/600/400?random=2", text: "Image Two" },
//   { id: 3, src: "https://picsum.photos/600/400?random=3", text: "Image Three" },
//   { id: 4, src: "https://picsum.photos/600/400?random=4", text: "Image Four" },
//   { id: 5, src: "https://picsum.photos/600/400?random=4", text: "Image Five" },
// ];
const machines = [
  {
    id: 1,
    // src: `${import.meta.env.BASE_URL}/assets/images/machines/Machine-1.png`,
    src: `/assets/images/machines/Machine-1.png`,
    heading: "Flex Machine",
    text: "It prints images on flexible materials like vinyl and banners, mainly used for signage and advertising.",
  },
  {
    id: 2,
    // src: `${import.meta.env.BASE_URL}/assets/images/machines/Machine-2.png`,
    src: `/assets/images/machines/Machine-2.png`,
    heading: "Solvent Printer",
    text: "It prints large-format media, such as flex banners, for items like billboards, exhibition graphics.",
  },
  {
    id: 3,
    // src: `${import.meta.env.BASE_URL}/assets/images/machines/Machine-3.png`,
    src: `/assets/images/machines/Machine-3.png`,
    heading: "Heat Press Machine",
    text: "It is used to apply designs to various items, such as t-shirts, hats, and mugs.",
  },
  {
    id: 4,
    // src: `${import.meta.env.BASE_URL}/assets/images/machines/Machine-4.png`,
    src: `/assets/images/machines/Machine-4.png`,
    heading: "Cap Heat Press Machine",
    text: "It is a specialized device used in printing shops to apply designs, logos, or other graphics onto caps and hats.",
  },
];

export default function MachineSwiper() {
  return (
    <div className="machine-swiper">
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={20}
        breakpoints={{
          1024: { slidesPerView: 3 }, // Desktop
          768: { slidesPerView: 2 }, // Tablet
          0: { slidesPerView: 1 }, // Mobile
        }}
      >
        {machines.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="image-card">
              <img src={item.src} alt={item.text} />
              <div className="overlay">
                <h2 className="d-block">{item.heading}</h2>
                <p>{item.text}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
