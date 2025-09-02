import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const images = [
  { id: 1, src: "https://picsum.photos/600/400?random=1", text: "Image One" },
  { id: 2, src: "https://picsum.photos/600/400?random=2", text: "Image Two" },
  { id: 3, src: "https://picsum.photos/600/400?random=3", text: "Image Three" },
  { id: 4, src: "https://picsum.photos/600/400?random=4", text: "Image Four" },
  { id: 5, src: "https://picsum.photos/600/400?random=4", text: "Image Five" },
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
        {images.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="image-card">
              <img src={item.src} alt={item.text} />
              <div className="overlay">
                <p>{item.text}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
