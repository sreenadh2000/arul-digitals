import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "../../styles/review.scss";
const CustomerReviews = [
  {
    id: 1,
    review:
      "They are fast and very good service we got from them.  Cost effective and Manjunath and Charan are very good.  They will deliver within 3 hours to our door step",
    name: "Satya Nadella",
    working: "Microsoft",
  },
  {
    id: 2,
    review:
      "Quality service, timely delivery & Mr Manjunath is very soft spoken & attends to the work perfectly. Mr Chand understands what the customer needs & does the work accordingly. Overall wonderful experience",
    name: "Anand Mahendra",
    working: "Tech Mahindra",
  },
  {
    id: 3,
    review:
      "Customer friendly! Pocket friendly! Go to place for any sort of printing",
    name: "Elon Musk",
    working: "Tesla",
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
