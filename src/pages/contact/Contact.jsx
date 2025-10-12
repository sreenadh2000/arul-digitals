import HeroSection from "../../components/common/HeroSection";
import { Phone, Mail, MapPin } from "lucide-react";
import ContactForm from "./ContactForm";
import MapView from "./MapView";
import {
  makeCall,
  openGoogleMaps,
  sendEmail,
} from "../../components/methods/ContactMethods";
function Contact() {
  return (
    <div className="contact-page">
      {/* Contact hero Section */}
      <HeroSection title={"CONTACT US"} navText={"Contact"} />
      <ContactForm />
      {/* Contact Content Section */}
      <div className="contact-content">
        <div className="container">
          <div className="row">
            {/* Adddress Information */}
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="contact-address-card">
                <div className="contact-item text-center">
                  <div
                    className="contact-icon"
                    onClick={() => openGoogleMaps()}
                  >
                    <MapPin size={36} />
                  </div>
                  <div className="contact-text">
                    <h2>Address</h2>
                    <p>
                      #18-486, Old Employment Building,
                      <br /> Near Bharath Petroleum Bunk,
                      <br /> Palamner Road, Chittoor
                      <br /> Chittoor - 517 001
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Phone Information */}
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="contact-phone-card">
                <div className="contact-item text-center">
                  <div className="contact-icon" onClick={() => makeCall()}>
                    <Phone size={36} />
                  </div>
                  <div className="contact-text">
                    <h2>Phone Number</h2>
                    <p>+91 6303895737</p>
                    <p>+91 9014364411</p>
                    <p>+91 7285946873</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Email Information */}
            <div className="col-lg-4 col-md-12 mb-4">
              <div className="contact-email-card">
                <div className="contact-item text-center">
                  <div
                    className="contact-icon ml-md-5 mb-md-4"
                    onClick={() => sendEmail()}
                  >
                    <Mail size={36} />
                  </div>
                  <div className="contact-text">
                    <h2>E-Mail</h2>
                    <p>aruldigitalschittoor@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Map View */}
      <MapView />
    </div>
  );
}

export default Contact;
