import { ArrowRight } from "lucide-react";

const whoWeAre = [
  {
    title: "Our Story",
    description:
      " Discover how our state-of-the-art printing technology and expert craftsmanship deliver exceptional results for every project. From concept to completion, we ensure your vision comes to life with precision and quality.",
  },
  {
    title: "Customer-Centric Approach",
    description:
      " Discover how our state-of-the-art printing technology and expert craftsmanship deliver exceptional results for every project. From concept to completion, we ensure your vision comes to life with precision and quality.",
  },
  {
    title: "Excellence in Quality and Service",
    description:
      " Discover how our state-of-the-art printing technology and expert craftsmanship deliver exceptional results for every project. From concept to completion, we ensure your vision comes to life with precision and quality.",
  },
];
export default function Ourjounrney(params) {
  // const imgPath = `${
  //   import.meta.env.BASE_URL
  // }/assets/images/main/Shop-front-side.png`;
  const imgPath = `/assets/images/main/Shop-front-side.png`;
  return (
    <>
      <section className="our-jorney">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Who We Are</h2>
          </div>
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12 order-1 order-lg-1">
              <div className="image-container">
                <div className="image-wrapper">
                  <img
                    src={imgPath}
                    alt="Printing process video thumbnail"
                    className="shop-image"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 order-2 order-lg-2">
              <div className="jouney-content">
                {whoWeAre.map((item, index) => (
                  <div className="our-story-container" key={index}>
                    <h4 className="title">{item.title}</h4>
                    <p className="description">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
