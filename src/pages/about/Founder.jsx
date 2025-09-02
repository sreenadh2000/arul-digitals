export default function Founder(params) {
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
                src="https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Founder"
                className="img-fluid rounded-circle shadow-lg founder-img"
              />
            </div>
            {/* Right Side - Details */}
            <div className="col-md-7 text-white details">
              <h4>Mr. Arul Kumar</h4>
              <p>
                With over <strong>15 years of experience</strong> in the
                printing industry, Mr. Arul has built Arul Digital Printers into
                a trusted name for businesses and individuals. His expertise in
                digital and offset printing ensures every project meets the
                highest quality standards.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
