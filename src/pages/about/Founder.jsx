export default function Founder(params) {
  // const imgPath = `${
  //   import.meta.env.BASE_URL
  // }/assets/images/main/Owner-main.png`;
  const imgPath = `/assets/images/main/Owner-main.png`;
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
                With over <strong>7+ years of experience</strong> in the
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
