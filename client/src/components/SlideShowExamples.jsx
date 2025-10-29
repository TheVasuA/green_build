import ProductScroll from './ProductScroll';

// Sample image data for different use cases
const productImages = [
  "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1558618047-3c8ad9099c25?w=600&h=400&fit=crop",
];

const facilityImages = [
  {
    src: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&h=400&fit=crop",
    alt: "Manufacturing facility"
  },
  {
    src: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop",
    alt: "Quality control lab"
  },
  {
    src: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=600&h=400&fit=crop",
    alt: "Warehouse storage"
  }
];

const teamImages = [
  "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&h=400&fit=crop",
];

const SlideShowExamples = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12 space-y-12">
      <h2 className="text-3xl font-bold text-theme text-center mb-12">
        Our <span className="gradient-brand-text">Gallery</span>
      </h2>

      {/* Product Slideshow */}
      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-theme">Our Products</h3>
        <ProductScroll
          images={productImages}
          title="Electrical Products"
          autoPlay={true}
          autoPlayInterval={4000}
          height="h-80"
          className="max-w-4xl mx-auto"
          showDots={true}
          showArrows={true}
        />
      </div>

      {/* Facility Slideshow */}
      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-theme">Our Facilities</h3>
        <ProductScroll
          images={facilityImages}
          title="Manufacturing & Storage"
          autoPlay={true}
          autoPlayInterval={3000}
          height="h-64"
          className="max-w-3xl mx-auto"
          showPlayPause={true}
        />
      </div>

      {/* Team Slideshow - Manual navigation only */}
      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-theme">Our Team</h3>
        <ProductScroll
          images={teamImages}
          title="Green Build Team"
          autoPlay={false}
          height="h-72"
          className="max-w-2xl mx-auto"
          showDots={true}
          showArrows={true}
          showPlayPause={false}
        />
      </div>

      {/* Compact Slideshow */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h4 className="text-lg font-medium text-theme mb-4">UPS Systems</h4>
          <ProductScroll
            images={productImages.slice(0, 2)}
            autoPlay={true}
            height="h-48"
            showDots={false}
            showPlayPause={false}
            imageClassName="rounded-lg"
          />
        </div>
        <div>
          <h4 className="text-lg font-medium text-theme mb-4">Data Center Solutions</h4>
          <ProductScroll
            images={facilityImages.slice(0, 2)}
            autoPlay={true}
            autoPlayInterval={2500}
            height="h-48"
            showDots={false}
            showArrows={false}
          />
        </div>
      </div>
    </div>
  );
};

export default SlideShowExamples;