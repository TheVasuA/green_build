import HeroSection from "../components/HeroSection";
import FeatureSection from "../components/FeatureSection";
import Workflow from "../components/Workflow";
import Testimonials from "../components/Testimonials";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <div className="max-w-7xl mx-auto pt-14 md:pt-10 px-6">
        <FeatureSection />
        <Workflow />
        <Testimonials />
      </div>
    </div>
  );
};

export default HomePage;