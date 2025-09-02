import { Printer, Palette, FileText, Camera } from "lucide-react";
const services = [
  {
    icon: <Printer size={40} />,
    title: "Digital Printing",
    description:
      "High-quality digital prints for all your business and personal needs",
  },
  {
    icon: <FileText size={40} />,
    title: "Document Services",
    description:
      "Professional document printing, binding, and lamination services",
  },
  {
    icon: <Palette size={40} />,
    title: "Design Services",
    description:
      "Custom graphic design for banners, flyers, brochures, and marketing materials",
  },
  {
    icon: <Camera size={40} />,
    title: "Photo Printing",
    description:
      "Premium photo printing services with various sizes and finishes available",
  },
];
export default function OurServices(params) {
  return (
    <>
      <section className="our-services">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Services</h2>
            <p className="section-subtitle">
              Comprehensive printing solutions designed to meet all your
              personal and business needs
            </p>
          </div>
          <div className="row">
            {services.map((service, index) => (
              <div key={index} className="col-lg-6 col-md-6 col-12 mb-4">
                <div className="service-item">
                  <div className="mb-4 service-icon">{service.icon}</div>
                  <div className="service-content">
                    <h3 className="service-title">{service.title}</h3>
                    <p className="service-description">{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
