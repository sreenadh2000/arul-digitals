import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { ArrowRight } from "lucide-react";
import Reviews from "./Reviews";
import { openWhatsApp } from "../../components/methods/ContactMethods";
const whatsNewImages = [
  {
    id: 1,
    image:
      "arul-digitals/assets/images/products/what-new/Acrylic-trophies-new.png",
    name: "Acrylic Trophies",
  },
  {
    id: 2,
    image: "arul-digitals/assets/images/products/what-new/Dangler-new.png",
    name: "Dangler",
  },
  {
    id: 3,
    image:
      "arul-digitals/assets/images/products/what-new/Customized-dairy-new.png",
    name: "Customized Dairy",
  },
  {
    id: 4,
    image: "arul-digitals/assets/images/products/what-new/Pen-stand-new.png",
    name: "Metal Stand Pen",
  },
  {
    id: 5,
    image:
      "arul-digitals/assets/images/products/what-new/Bottle-with-mug-new.png",
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
                  <img src={item.image} alt={item.name} loading="lazy" />
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
