import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { Autoplay } from "swiper/modules";
import { ArrowRight, Check, Play } from "lucide-react";
import { openWhatsApp } from "../../components/methods/ContactMethods";
const images = [
  {
    id: 1,
    src: `/assets/images/brands/amaraRaja.webp`,
    text: "Amara Raja",
  },
  {
    id: 2,
    src: `/assets/images/brands/allen.webp`,
    text: "Allen solly",
  },
  {
    id: 3,
    src: `/assets/images/brands/biba.webp`,
    text: "Biba",
  },
  {
    id: 4,
    src: `/assets/images/brands/coramandal.webp`,
    text: "Coramandal",
  },
  {
    id: 5,

    src: `/assets/images/brands/murugappa.webp`,
    text: "murugappa",
  },
  {
    id: 6,

    src: `/assets/images/brands/parijath.webp`,
    text: "Parijath",
  },
  {
    id: 7,

    src: `/assets/images/brands/triune.webp`,
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
const imgPath = `/assets/images/main/Arul-digitals-front-side.webp`;
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
                    src={imgPath}
                    alt="arul digitals shop front side photo"
                    className="video-thumbnail"
                  />
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
