import HeroSection from "../../components/common/HeroSection";
import { Phone, Mail, MapPin } from "lucide-react";
function Contact() {
  return (
    <div className="contact-page">
      {/* Contact hero Section */}
      <HeroSection title={"CONTACT US"} navText={"Contact"} />
      {/* Contact Content Section */}
      <div className="contact-content">
        <div className="container">
          <div className="row">
            {/* Adddress Information */}
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="contact-address-card">
                <div className="contact-item text-center">
                  <div className="contact-icon">
                    <MapPin size={36} />
                  </div>
                  <div className="contact-text">
                    <h2>Address</h2>
                    <p>
                      #5, 'YASHOBHOOMI' 15th Main, 3rd Stage,
                      <br /> 4th Block, Near BWSSB Office,
                      <br /> Kamalanagar, Main Road Basaveshwarnagar
                      <br /> Bengaluru - 560 079
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Phone Information */}
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="contact-phone-card">
                <div className="contact-item text-center">
                  <div className="contact-icon">
                    <Phone size={36} />
                  </div>
                  <div className="contact-text">
                    <h2>Phone Number</h2>
                    <p>+1 (555) 123-4567</p>
                    <p>+1 (555) 987-6543</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Email Information */}
            <div className="col-lg-4 col-md-12 mb-4">
              <div className="contact-email-card">
                <div className="contact-item text-center">
                  <div className="contact-icon ml-md-5 mb-md-4">
                    <Mail size={36} />
                  </div>
                  <div className="contact-text">
                    <h2>E-Mail</h2>
                    <p>design@aruldigitals.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
