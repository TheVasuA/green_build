import ProductScroll from './ProductScroll';
import { useImageGallery } from '../hooks/useImageGallery';

const GallerySection = () => {
  const { getImages, getImageUrls, loading } = useImageGallery();

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="text-center">
          <div className="animate-pulse">
            <div className="h-8 bg-theme-muted rounded w-1/3 mx-auto mb-8"></div>
            <div className="h-64 bg-theme-muted rounded"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold text-theme text-center mb-12">
        Our <span className="gradient-brand-text">Gallery</span>
      </h2>

      <div className="space-y-16">
        {/* Main Product Showcase */}
        <section>
          <h3 className="text-2xl font-semibold text-theme mb-6">Featured Products</h3>
          <ProductScroll
            images={getImages('products')}
            title="Delta Electronics UPS & Power Solutions"
            autoPlay={true}
            autoPlayInterval={4000}
            height="h-96"
            className="shadow-theme-lg"
            showDots={true}
            showArrows={true}
            showPlayPause={true}
          />
        </section>

        {/* Facilities Grid */}
        <section>
          <h3 className="text-2xl font-semibold text-theme mb-6">Our Facilities</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <ProductScroll
              images={getImageUrls('facilities')}
              title="Manufacturing Unit"
              autoPlay={true}
              autoPlayInterval={3500}
              height="h-64"
              showDots={true}
              showArrows={false}
            />
            <ProductScroll
              images={getImageUrls('team')}
              title="Expert Team"
              autoPlay={false}
              height="h-64"
              showDots={true}
              showArrows={true}
              showPlayPause={false}
            />
          </div>
        </section>

        {/* Projects Showcase */}
        <section>
          <h3 className="text-2xl font-semibold text-theme mb-6">Recent Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {getImages('projects').map((project, index) => (
              <ProductScroll
                key={index}
                images={[project]}
                title={project.alt}
                autoPlay={false}
                height="h-48"
                showDots={false}
                showArrows={false}
                showPlayPause={false}
                className="hover:shadow-theme-lg transition-shadow"
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default GallerySection;