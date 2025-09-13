import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { ArrowRight } from "lucide-react";
import { openWhatsApp } from "../../components/methods/ContactMethods";
import products from "../../utils/our-products.json";

// const products = [
//   {
//     id: 1,
//     image: "assets/images/products/png/Business Card.png",
//     name: "Business Cards",
//     description:
//       "Premium business cards with various finishes and paper options for professional networking.",
//   },
//   {
//     id: 2,
//     image:
//       "https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=600",
//     name: "Brochures",
//     description:
//       "Professional brochures in multiple sizes and folding options for marketing campaigns.",
//   },
//   {
//     id: 3,
//     image:
//       "https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg?auto=compress&cs=tinysrgb&w=600",
//     name: "Flyers",
//     description:
//       "Eye-catching flyers for promotional events and marketing materials.",
//   },
//   {
//     id: 4,
//     image:
//       "https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=600",
//     name: "Posters",
//     description:
//       "High-quality posters in various sizes for events and advertising campaigns.",
//   },
//   {
//     id: 5,
//     image:
//       "https://images.pexels.com/photos/4226219/pexels-photo-4226219.jpeg?auto=compress&cs=tinysrgb&w=600",
//     name: "Banners",
//     description:
//       "Durable banners for indoor and outdoor use with weather-resistant materials.",
//   },
//   {
//     id: 6,
//     image:
//       "https://images.pexels.com/photos/6802049/pexels-photo-6802049.jpeg?auto=compress&cs=tinysrgb&w=600",
//     name: "Stickers",
//     description:
//       "Custom stickers and labels in various shapes, sizes, and premium materials.",
//   },
// ];
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
                    <img
                      src={product.image}
                      alt={product.name}
                      loading="lazy"
                    />
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
