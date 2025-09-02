import HeroSection from "../../components/common/HeroSection";
import Ourjounrney from "./Ourjounrney";
import "../../styles/about.scss";
import OurServices from "./OurServices";
import Founder from "./Founder";
import Reviews from "../home/Reviews";

function About(params) {
  return (
    <div>
      <HeroSection title={"ABOUT US"} navText={"About"} />
      <Ourjounrney />
      <Founder />
      <OurServices />
      <Reviews />
    </div>
  );
}

export default About;
