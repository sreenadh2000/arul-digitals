import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { Autoplay } from "swiper/modules";
import { ArrowRight, Check, Play } from "lucide-react";
import { openWhatsApp } from "../../components/methods/ContactMethods";
const images = [
  {
    id: 1,
    // src: `${import.meta.env.BASE_URL}/assets/images/brands/AmaraRaja.png`,
    src: `/assets/images/brands/AmaraRaja.png`,
    text: "Amara Raja",
  },
  {
    id: 2,
    // src: `${import.meta.env.BASE_URL}/assets/images/brands/allen.png`,
    src: `/assets/images/brands/allen.png`,
    text: "Allen solly",
  },
  {
    id: 3,
    // src: `${import.meta.env.BASE_URL}/assets/images/brands/biba.png`,
    src: `/assets/images/brands/biba.png`,
    text: "Biba",
  },
  {
    id: 4,
    // src: `${import.meta.env.BASE_URL}/assets/images/brands/coramandal.png`,
    src: `/assets/images/brands/coramandal.png`,
    text: "Coramandal",
  },
  {
    id: 5,
    // src: `${import.meta.env.BASE_URL}/assets/images/brands/murugappa.png`,
    src: `/assets/images/brands/murugappa.png`,
    text: "murugappa",
  },
  {
    id: 6,
    // src: `${import.meta.env.BASE_URL}/assets/images/brands/Parijath.png`,
    src: `/assets/images/brands/Parijath.png`,
    text: "Parijath",
  },
  {
    id: 7,
    // src: `${import.meta.env.BASE_URL}/assets/images/brands/Triune.png`,
    src: `/assets/images/brands/Triune.png`,
    text: "triune",
  },
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
              modules={[Pagination, Autoplay]}
              pagination={{ clickable: true }}
              autoplay={{
                delay: 0, // time between slides (ms)
                disableOnInteraction: false, // keep autoplay even after user interaction
              }}
              speed={3000}
              freeMode={true}
              loop={true}
              spaceBetween={80}
              breakpoints={{
                1024: { slidesPerView: 4 }, // Desktop
                768: { slidesPerView: 3 }, // Tablet
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
