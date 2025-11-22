import { useState } from "react";
import { Menu, X, Printer } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { openWhatsApp } from "../components/methods/ContactMethods";
const navItems = [
  { id: "home", label: "Home", path: "/" },
  { id: "about", label: "About", path: "/about" },
  { id: "contact", label: "Contact", path: "/contact" },
  { id: "shop", label: "Printing and Branding", path: "/shop" },
  // { id: "blog", label: "Blog", path: "/blog" },
];
const imgPath = `/assets/images/main/arul-digitals-logo.webp`;
function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  const handleNavClick = (itemId) => {
    setIsMenuOpen(false); // Close mobile menu when item is clicked
    scrollToTop();
  };
  const isActive = (path) => {
    return location.pathname === path;
  };
  return (
    <div>
      <nav className="custom-navbar">
        <div className="container mx-auto">
          <div className="navbar-content d-flex align-items-center justify-content-between position-relative">
            {/* Logo and Brand */}
            <div className="navbar-brand d-flex align-items-center">
              <div className="logo d-flex align-items-center justify-content-center">
                <img src={imgPath} alt="arul digitals logo" loading="eager" />
              </div>
            </div>

            {/* Desktop Navigation Links */}
            <ul
              className={`navbar-nav m-lg-0 p-lg-0 d-lg-flex ${
                isMenuOpen ? "mobile-menu-open" : "flex-row"
              }`}
            >
              {navItems.map((item) => (
                <li key={item.id} className="nav-item position-relative">
                  <Link
                    to={item.path}
                    className={`nav-link position-relative ${
                      isActive(item.path) ? "active" : ""
                    }`}
                    onClick={handleNavClick}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}

              {/* Mobile Start Print Button */}
              <li className="nav-item common-btn mobile-only">
                <button type="button" className="btn btn-start-print">
                  <Printer size={18} />
                  Start Print
                </button>
              </li>
            </ul>

            {/* Desktop Start Print Button */}
            <div className="navbar-actions common-btn desktop-only">
              <button
                type="button"
                className="btn btn-start-print"
                onClick={() => openWhatsApp()}
              >
                <Printer size={18} />
                Start Print
              </button>
            </div>

            {/* Mobile Hamburger Menu */}
            <button
              className={`hamburger d-lg-none ${isMenuOpen ? "active" : ""}`}
              onClick={toggleMenu}
              aria-label="Toggle navigation menu"
              type="button"
            >
              <span className="hamburger-icon d-flex align-items-center justify-content-center">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <div
          className={`mobile-overlay ${isMenuOpen ? "active" : ""}`}
          onClick={toggleMenu}
        ></div>
      </nav>
    </div>
  );
}

export default NavBar;
