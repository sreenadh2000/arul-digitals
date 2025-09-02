import { ChevronRight } from "lucide-react";
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
              <span className="breadcrumb-item">Home</span>
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
