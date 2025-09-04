import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import "../../styles/HeroSection.scss";

function HeroSection({ title, navText }) {
  return (
    <>
      {/* Hero Section with Linear Gradient */}
      <div className="common-hero">
        <div className="container">
          <div className="hero-content">
            {/* Bold Contact Us Title */}
            <h1 className="common-title">{title}</h1>
            {/* Breadcrumb */}
            <nav className="breadcrumb">
              {/* <span className="breadcrumb-item">Home</span> */}
              <Link
                to="/"
                className="breadcrumb-item"
                onClick={() => window.scrollTo(0, 0)}
              >
                Home
              </Link>
              <ChevronRight size={16} className="breadcrumb-separator" />
              <span className="breadcrumb-item active">{navText}</span>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
