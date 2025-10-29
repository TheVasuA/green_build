import HeroSection from "../components/HeroSection";
import FeatureSection from "../components/FeatureSection";
import Workflow from "../components/Workflow";
import Testimonials from "../components/Testimonials";
import ProductScroll from "../components/ProductScroll";

// Sample images for different product categories
const upsSystemImages = [
  "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=600&h=400&fit=crop",
];

const dataCenterImages = [

  "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop",
];

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <div className="max-w-7xl mx-auto pt-14 md:pt-10 px-6">
        
        <section className="py-12">
          <h2 className="text-3xl font-bold text-center mb-12">
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
                showArrows={true}
                className="rounded-lg overflow-hidden"
              />
              <p className="text-theme-muted">
                Reliable UPS systems for critical power backup solutions.
              </p>
            </div>

            {/* Data Center Solutions Slideshow */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-theme">Data Center Solutions</h3>
              <ProductScroll
                images={dataCenterImages}
                title="Data Center Infrastructure"
                autoPlay={true}
                autoPlayInterval={3500}
                height="h-64"
                showDots={true}
                showArrows={true}
                className="rounded-lg overflow-hidden"
              />
              <p className="text-theme-muted">
                Complete data center power and cooling solutions.
              </p>
            </div>
          </div>
        </section>

        {/* <FeatureSection />
        <Workflow /> */}
        {/* <Testimonials /> */}
      </div>
    </div>
  );
};

export default HomePage;