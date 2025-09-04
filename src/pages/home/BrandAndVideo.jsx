import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { ArrowRight, Check, Play } from "lucide-react";
import { openWhatsApp } from "../../components/methods/ContactMethods";
const images = [
  { id: 1, src: "https://picsum.photos/600/400?random=1", text: "Image One" },
  { id: 2, src: "https://picsum.photos/600/400?random=2", text: "Image Two" },
  { id: 3, src: "https://picsum.photos/600/400?random=3", text: "Image Three" },
  { id: 4, src: "https://picsum.photos/600/400?random=4", text: "Image Four" },
  { id: 5, src: "https://picsum.photos/600/400?random=4", text: "Image Five" },
];
const videoFeatures = [
  "Professional printing equipment and technology",
  "Expert team with over 10 years of experience",
  "Fast turnaround times for urgent projects",
  "Quality guarantee on all printing services",
  "Eco-friendly printing options available",
];
export default function BrandAndVideo(params) {
  return (
    <>
      <section className="brand-choose">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">
              Brands that choose Arul Digital Prints
            </h2>
          </div>
          <div className="brand-swiper">
            <Swiper
              modules={[Pagination]}
              pagination={{ clickable: true }}
              spaceBetween={2}
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
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
      {/* Video Section */}
      <section className="video-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12 order-2 order-lg-1">
              <div className="video-container">
                <div className="video-wrapper">
                  <img
                    src="https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Printing process video thumbnail"
                    className="video-thumbnail"
                  />
                  <div className="video-overlay">
                    <button type="button" className="play-button">
                      <Play size={32} />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12 order-1 order-lg-2">
              <div className="video-content">
                <h2 className="video-title">
                  Experience Professional Printing Excellence
                </h2>
                <p className="video-description">
                  Discover how our state-of-the-art printing technology and
                  expert craftsmanship deliver exceptional results for every
                  project. From concept to completion, we ensure your vision
                  comes to life with precision and quality.
                </p>

                <ul className="feature-list">
                  {videoFeatures.map((feature, index) => (
                    <li key={index} className="feature-item">
                      <div className="feature-icon">
                        <Check size={16} />
                      </div>
                      <span className="feature-text">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  type="button"
                  className="btn btn-learn-more"
                  onClick={() => openWhatsApp()}
                >
                  Learn More About Us
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
