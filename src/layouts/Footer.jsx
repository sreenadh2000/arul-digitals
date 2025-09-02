import React from "react";
import { Link } from "react-router-dom";
import {
  Printer,
  Clock,
  MapPin,
  Globe,
  Phone,
  Facebook,
  Twitter,
  Instagram,
} from "lucide-react";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <footer className="custom-footer">
      <div className="footer-content">
        <div className="container">
          <div className="row">
            {/* First Column - Logo and Context */}
            <div className="col-lg-4 col-md-6 col-12 mb-4">
              <div className="footer-section">
                <div className="footer-brand">
                  <div className="footer-logo">
                    <Printer size={36} />
                  </div>
                  <span className="footer-brand-name">PrintPro</span>
                </div>

                <p className="footer-description">
                  Your trusted partner for all printing needs. We deliver
                  high-quality printing solutions with exceptional service and
                  attention to detail. From business cards to large format
                  printing, we've got you covered.
                </p>

                <div className="social-media">
                  <a href="#" className="social-link" aria-label="Facebook">
                    <Facebook size={20} />
                  </a>
                  <a href="#" className="social-link" aria-label="Twitter">
                    <Twitter size={20} />
                  </a>
                  <a href="#" className="social-link" aria-label="Instagram">
                    <Instagram size={20} />
                  </a>
                </div>
              </div>
            </div>

            {/* Second Column - Our Office */}
            <div className="col-lg-4 col-md-6 col-12 mb-4">
              <div className="footer-section">
                <h3 className="footer-heading">Our Office</h3>

                <div className="office-info">
                  <div className="office-item">
                    <div className="office-icon">
                      <Clock size={18} />
                    </div>
                    <div className="office-text">
                      <span className="office-label">Business Hours</span>
                      <span className="office-value">Mon-Fri: 8AM-6PM</span>
                    </div>
                  </div>

                  <div className="office-item">
                    <div className="office-icon">
                      <MapPin size={18} />
                    </div>
                    <div className="office-text">
                      <span className="office-label">Address</span>
                      <span className="office-value">
                        123 Print Street, Design City, DC 12345
                      </span>
                    </div>
                  </div>

                  <div className="office-item">
                    <div className="office-icon">
                      <Globe size={18} />
                    </div>
                    <div className="office-text">
                      <span className="office-label">Website</span>
                      <span className="office-value">www.printpro.com</span>
                    </div>
                  </div>

                  <div className="office-item">
                    <div className="office-icon">
                      <Phone size={18} />
                    </div>
                    <div className="office-text">
                      <span className="office-label">Phone</span>
                      <span className="office-value">+1 (555) 123-4567</span>
                      <span className="office-value">+1 (555) 123-4567</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Third Column - Company Links */}
            <div className="col-lg-4 col-md-12 col-12 mb-4">
              <div className="footer-section">
                <h3 className="footer-heading">Company</h3>

                <div className="footer-links">
                  <Link
                    to="/"
                    className="footer-link"
                    onClick={() => scrollToTop()}
                  >
                    Home
                  </Link>
                  <Link
                    to="/about"
                    className="footer-link"
                    onClick={() => scrollToTop()}
                  >
                    About Us
                  </Link>
                  <Link
                    to="/blog"
                    className="footer-link"
                    onClick={() => scrollToTop()}
                  >
                    Services
                  </Link>
                  <Link
                    to="/shop"
                    className="footer-link"
                    onClick={() => scrollToTop()}
                  >
                    Products
                  </Link>
                  <Link
                    to="/contact"
                    className="footer-link"
                    onClick={() => scrollToTop()}
                  >
                    Contact
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="footer-bottom">
        <div className="container">
          <div className="copyright-content">
            <p className="copyright-text">
              © 2025 PrintPro. All rights reserved. | Designed with excellence
              for printing solutions.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
