import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
// import "../../styles/review.scss";
import "@styles/review.scss";

const CustomerReviews = [
  {
    id: 1,
    review:
      "Excellent service with quick turnaround time. The team, especially Manjunath and Charan, ensured our prints were delivered perfectly within a few hours. Very professional, cost-effective, and reliable service overall.",
    name: "Jayadev Galla",
    working: "Amara Raja Energy & Mobility",
  },
  {
    id: 2,
    review:
      "Very professional and responsive service. Manjunath handled the work with care, and Chand clearly understood our requirements. Delivery was on time and the quality exceeded expectations. Highly satisfied with the experience.",
    name: "Harsha Vardhan Puranam",
    working: "Electrical Engineer",
  },
  {
    id: 3,
    review:
      "Great experience with their service. The team is customer-friendly, affordable, and delivers quality prints on time. Perfect choice for anyone looking for fast, reliable, and professional printing solutions.",
    name: "Bahnu",
    working: "Software Engineer",
  },
];
export default function Reviews() {
  return (
    <>
      <section className="review-section">
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
      </section>
    </>
  );
}
