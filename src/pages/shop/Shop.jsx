import HeroSection from "../../components/common/HeroSection";
import { ArrowRight } from "lucide-react";
import { openWhatsApp } from "../../components/methods/ContactMethods";
import data from "../../utils/products.json";
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
              {data.map((product, index) => (
                <div className="col-lg-3 col-md-4 col-12" key={index}>
                  <div className="product-card mb-4">
                    <div className="product-image">
                      <img
                       src={`${import.meta.env.BASE_URL}/${product.image}`}
                        alt={product.name}
                        loading="lazy"
                      />
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
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Shop;
