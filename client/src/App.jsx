import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeatureSection from "./components/FeatureSection";
import Workflow from "./components/Workflow";
import Footer from "./components/Footer";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";

const App = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <div className=" max-w-7xl mx-auto pt-14 md:pt-10 px-6">
    
        <FeatureSection />
        <Workflow />
   
        <Testimonials />
        <Footer />
      </div>

    </>
  );
};

export default App;