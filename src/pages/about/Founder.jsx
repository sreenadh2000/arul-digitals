export default function Founder(params) {
  const imgPath = `/assets/images/main/arul-digitals-shop-owner.webp`;
  return (
    <>
      <section className="founder-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Meet Our Founder</h2>
          </div>
          <div className="row align-items-center">
            {/* Left Side - Image */}
            <div className="col-md-5 text-center">
              <img
                src={imgPath}
                alt="Founder"
                className="img-fluid rounded-circle shadow-lg founder-img"
              />
            </div>
            {/* Right Side - Details */}
            <div className="col-md-7 text-white details">
              <h4>Mr. Arul Kumar</h4>
              <p>
                {" "}
                With over <strong>7+ years of experience</strong> in the
                printing industry, Mr. Arul has built Arul Digital Printers into
                a trusted and reputable brand for both businesses and
                individuals. Starting his journey on the{" "}
                <strong>Chittoor–Palamaner Road</strong>, he grew the shop from
                a small printing setup into a full-fledged digital and offset
                printing hub. His deep expertise, commitment to quality, and
                customer-first approach ensure that every project meets the{" "}
                <strong>highest professional standards</strong>.{" "}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
