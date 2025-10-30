import HeroSection from "../components/HeroSection";
import FeatureSection from "../components/FeatureSection";
import Workflow from "../components/Workflow";
import Testimonials from "../components/Testimonials";
import ProductScroll from "../components/ProductScroll";
import AboutPage from "./AboutPage";

// Sample images for different product categories
const upsSystemImages = [
  "https://filecenter.deltaww.com/products/Images/202502261742188195001.JPG?w=700",
  "https://filecenter.deltaww.com/products/Images/202508011730268753001.JPG?w=700",
  "https://filecenter.deltaww.com/products/Images/202502261743499230001.JPG?w=700",
];

const dataCenterImages = [
  "https://filecenter.deltaww.com/products/images/2508/202508251436288971001.JPG?w=700",
  "https://filecenter.deltaww.com/products/images/202510171647440052001.PNG?w=700",
  "https://filecenter.deltaww.com/products/images/202412311701522756001.JPG?w=700",
];

const powerQualityImages = [
  "https://filecenter.deltaww.com/products/images/202502261718266879001.JPG?w=700",
  "https://filecenter.deltaww.com/products/Images/2503/202503061455358364001.JPG?w=700",
];

const batterySystemImages = [
  "https://filecenter.deltaww.com/products/Images/2505/202505281238237736001.JPG?w=700",
  "https://filecenter.deltaww.com/products/Images/2412/202412041717335470001.JPG?w=700",
  "https://filecenter.deltaww.com/products/Images/2412/202412041716504765001.JPG?w=700",
];

const HomePage = () => {
  return (
    <div className="bg-theme-secondary min-h-screen">
      <HeroSection />

      <div className="relative pt-10 md:pt-28 pb-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center ">
            <h1 className="text-3xl sm:text-4xl lg:text-7xl font-bold tracking-tight text-theme mb-6">
              A leading partner for{" "}
              <span className="gradient-brand-text">
                critical power solutions
              </span>
            </h1>
            <p className="text-xl text-theme-muted max-w-4xl mx-auto leading-relaxed">
              We help industrial, commercial and data center customers make
              their infrastructure more energy efficient, reliable, safe and
              sustainable.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-2 md:pt-2 px-6">
        <section className="py-8">
          <h2 className="text-2xl font-bold text-center mb-10">
            Our Product Range
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* UPS Systems Slideshow */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-theme">UPS Systems</h3>
              <ProductScroll
                images={upsSystemImages}
                title="Uninterruptible Power Supply"
                autoPlay={true}
                autoPlayInterval={3000}
                height="h-64"
                showDots={true}
                className="rounded-lg overflow-hidden"
              />
              {/* showArrows={true} */}
            </div>

            {/* Data Center Solutions Slideshow */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-theme">
                Data Center Solutions
              </h3>
              <ProductScroll
                images={dataCenterImages}
                title="Data Center Infrastructure"
                autoPlay={true}
                autoPlayInterval={3500}
                height="h-64"
                showDots={true}
                className="rounded-lg overflow-hidden"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-6">
            {/* UPS Systems Slideshow */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-theme">
                Power Quality
              </h3>
              <ProductScroll
                images={powerQualityImages}
                title="Power Quality"
                autoPlay={true}
                autoPlayInterval={3000}
                height="h-64"
                showDots={true}
                className="rounded-lg overflow-hidden"
              />
            </div>

            {/* Data Center Solutions Slideshow */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-theme">
                Battery Systems
              </h3>
              <ProductScroll
                images={batterySystemImages}
                title="Battery Systems"
                autoPlay={true}
                autoPlayInterval={3500}
                height="h-64"
                showDots={true}
                className="rounded-lg overflow-hidden"
              />
            </div>
          </div>
        </section>
        <section className="py-2">
          <AboutPage />
        </section>

        {/* <FeatureSection />
        <Workflow /> */}
        {/* <Testimonials /> */}
      </div>
    </div>
  );
};

export default HomePage;
