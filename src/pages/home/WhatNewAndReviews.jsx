import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { ArrowRight } from "lucide-react";
import Reviews from "./Reviews";
import { openWhatsApp } from "../../components/methods/ContactMethods";
const whatsNewImages = [
  {
    id: 1,
    image: "assets/images/products/what-new/acrylic-trophies-new.webp",
    name: "Acrylic Trophies",
  },
  {
    id: 2,
    image: "assets/images/products/what-new/dangler-new.webp",
    name: "Dangler",
  },
  {
    id: 3,
    image: "assets/images/products/what-new/customized-dairy-new.webp",
    name: "Customized Dairy",
  },
  {
    id: 4,
    image: "assets/images/products/what-new/pen-stand-new.webp",
    name: "Metal Stand Pen",
  },
  {
    id: 5,
    image: "assets/images/products/what-new/bottle-with-mug-new.webp",
    name: "Bottle With Mug",
  },
];
export default function WhatNewAndReviews(params) {
  return (
    <>
      <section className="what-new-section">
        <div className="section-header">
          <h2 className="section-title">What's New?</h2>
        </div>
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
          {whatsNewImages.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="product-card">
                <div className="product-image">
                  <img src={`/${item.image}`} alt={item.name} />
                </div>

                <div className="product-content">
                  <h3 className="product-name text-center">{item.name}</h3>
                  <button
                    type="button"
                    className="btn btn-get-now mx-auto"
                    onClick={() => openWhatsApp(item.name, "product")}
                  >
                    Get It Now
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
      <Reviews />
    </>
  );
}
