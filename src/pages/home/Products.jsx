import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { ArrowRight } from "lucide-react";
import { openWhatsApp } from "../../components/methods/ContactMethods";
import products from "../../utils/our-products.json";


function Products() {
  return (
    <section className="products-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Our Products</h2>
          <p className="section-subtitle">
            Discover our range of premium printing solutions
          </p>
        </div>

        <div className="products-carousel">
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
            {products.map((product) => (
              <SwiperSlide key={product.id}>
                <div className="product-card">
                  <div className="product-image">
                    <img src={`/${product.image}`} alt={product.name} />
                    {/* <img src={`${import.meta.env.BASE_URL}/${product.image}`} alt={product.name} /> */}
                  </div>
                  <div className="product-content">
                    <h3 className="product-name">{product.name}</h3>
                    <p className="product-description">{product.description}</p>
                    <button
                      type="button"
                      className="btn btn-get-now"
                      onClick={() => openWhatsApp(product.name, "product")}
                    >
                      Get It Now
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default Products;
