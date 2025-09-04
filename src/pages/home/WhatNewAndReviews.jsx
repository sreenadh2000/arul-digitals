import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { ArrowRight } from "lucide-react";
import Reviews from "./Reviews";
import { openWhatsApp } from "../../components/methods/ContactMethods";
const whatsNewImages = [
  {
    id: 1,
    image:
      "https://images.pexels.com/photos/6802049/pexels-photo-6802049.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "Business Cards",
    description:
      "Premium business cards with various finishes and paper options for professional networking.",
  },
  {
    id: 2,
    image:
      "https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "Brochures",
    description:
      "Professional brochures in multiple sizes and folding options for marketing campaigns.",
  },
  {
    id: 3,
    image:
      "https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "Flyers",
    description:
      "Eye-catching flyers for promotional events and marketing materials.",
  },
  {
    id: 4,
    image:
      "https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "Posters",
    description:
      "High-quality posters in various sizes for events and advertising campaigns.",
  },
  {
    id: 5,
    image:
      "https://images.pexels.com/photos/4226219/pexels-photo-4226219.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "Banners",
    description:
      "Durable banners for indoor and outdoor use with weather-resistant materials.",
  },
  {
    id: 6,
    image:
      "https://images.pexels.com/photos/6802049/pexels-photo-6802049.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "Stickers",
    description:
      "Custom stickers and labels in various shapes, sizes, and premium materials.",
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
                  <img src={item.image} alt={item.name} />
                </div>

                <div className="product-content">
                  <h3 className="product-name text-center">{item.name}</h3>
                  <button
                    type="button"
                    className="btn btn-get-now"
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
      {/* <section className="review-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">What Customer Says</h2>
          </div>
          <div className="review-container-top">
            <div className="review-container">
              <Swiper
                modules={[Pagination]}
                pagination={{ clickable: true }}
                spaceBetween={10}
                breakpoints={{
                  1024: { slidesPerView: 1 }, // Desktop
                  768: { slidesPerView: 1 }, // Tablet
                  0: { slidesPerView: 1 }, // Mobile
                }}
              >
                {CustomerReviews.map((item) => (
                  <SwiperSlide key={item.id}>
                    <div className="review-card">
                      <p className="review-content">{item.review}</p>
                      <div className="review-details text-left">
                        <h5 className="name">{item.name}</h5>
                        <h5 className="working">{item.working}</h5>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
}
