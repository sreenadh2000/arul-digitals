import { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { ArrowRight } from "lucide-react";
import { openWhatsApp } from "../../components/methods/ContactMethods";

const customImages = [
  `/assets/images/main/doctor-name-board.webp`,
  `/assets/images/main/light-name-board.webp`,
  `/assets/images/main/hospital-sample.webp`,
];
function Hero() {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12 order-2 order-lg-1">
            <div className="hero-content">
              <h1 className="hero-title">Quality Printing</h1>
              <p className="hero-description">
                Experience premium printing services with cutting-edge
                technology and exceptional attention to detail. From business
                cards to large format printing, we deliver professional results
                that make your brand stand out.
              </p>
              <button
                type="button"
                className="btn btn-order-now"
                onClick={() => openWhatsApp()}
              >
                Order Now
                <ArrowRight size={20} />
              </button>
            </div>
          </div>

          <div className="col-lg-6 col-md-12 order-1 order-lg-2">
            <div className="hero-images">
              <Swiper
                modules={[Autoplay]}
                spaceBetween={10}
                autoplay={{
                  delay: 1000, // time between slides (ms)
                  disableOnInteraction: false, // keep autoplay even after user interaction
                }}
                slidesPerView={1}
                loop={true} // repeat slides
                // 🚀 CRITICAL PERFORMANCE FIXES
                observer={false}
                observeParents={false}
                observeSlideChildren={false}
                watchSlidesProgress={false}
                watchOverflow={true}
              >
                {customImages.map((image, index) => (
                  <SwiperSlide key={index}>
                    <div key={index} className="image-slide">
                      <img src={image} alt={`Printing service ${index + 1}`} />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
