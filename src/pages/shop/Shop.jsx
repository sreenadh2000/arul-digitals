import HeroSection from "../../components/common/HeroSection";
import { ArrowRight } from "lucide-react";
import { openWhatsApp } from "../../components/methods/ContactMethods";
const products = [
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
  {
    id: 7,
    image:
      "https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "Posters",
    description:
      "High-quality posters in various sizes for events and advertising campaigns.",
  },
  {
    id: 8,
    image:
      "https://images.pexels.com/photos/4226219/pexels-photo-4226219.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "Banners",
    description:
      "Durable banners for indoor and outdoor use with weather-resistant materials.",
  },
  {
    id: 9,
    image:
      "https://images.pexels.com/photos/6802049/pexels-photo-6802049.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "Stickers",
    description:
      "Custom stickers and labels in various shapes, sizes, and premium materials.",
  },
];
function Shop() {
  return (
    <div>
      <HeroSection title={"PRINTING & BRANDING"} navText={"Shop"} />
      <section className="shop-section">
        <div className="mx-4">
          <div className="section-header">
            <h2 className="section-title">
              Your Trusted Partner in Quality Printing
            </h2>
            <p className="section-subtitle">
              From business cards to custom designs, we bring your ideas to life
              with precision, creativity, and unmatched quality. At Manjunatha
              Prints, every print leaves a lasting impression.
            </p>
          </div>
          <div className="shop-container">
            <div className="row">
              {products.map((product, index) => (
                <div className="col-lg-4 col-md-6 col-12" key={index}>
                  <div className="product-card mb-4">
                    <div className="product-image">
                      <img src={product.image} alt={product.name} />
                    </div>
                    <div className="product-content">
                      <h3 className="product-name">{product.name}</h3>
                      <p className="product-description">
                        {product.description}
                      </p>
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
                </div>
              ))}
              {/* <div className="product-card">
                  <div className="product-image">
                    <img src={product.image} alt={product.name} />
                  </div>
                  <div className="product-content">
                    <h3 className="product-name">{product.name}</h3>
                    <p className="product-description">{product.description}</p>
                    <button type="button" className="btn btn-get-now">
                      Get It Now
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </div> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Shop;
