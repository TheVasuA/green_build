import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';
import PropTypes from 'prop-types';

const ProductScroll = ({ 
  images = [], 
  autoPlay = true, 
  autoPlayInterval = 3000,
  showDots = true,
  showArrows = true,
  showPlayPause = true,
  className = "",
  imageClassName = "",
  title = "",
  height = "h-64"
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(autoPlay);

  // Auto-play functionality
  useEffect(() => {
    if (!isPlaying || images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [isPlaying, images.length, autoPlayInterval]);

  // Navigation functions
  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  // Handle empty images array
  if (!images || images.length === 0) {
    return (
      <div className={`${height} bg-theme-muted rounded-lg flex items-center justify-center ${className}`}>
        <p className="text-theme-muted">No images to display</p>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden rounded-lg shadow-theme-md ${className}`}>
      {/* Title */}
      {title && (
        <div className="absolute top-4 left-4 z-20">
          <h3 className="text-white bg-black/50 px-3 py-1 rounded-md text-sm font-medium">
            {title}
          </h3>
        </div>
      )}

      {/* Main Image Container */}
      <div className={`relative ${height} overflow-hidden`}>
        <div 
          className="flex transition-transform duration-500 ease-in-out h-full"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="w-full h-full flex-shrink-0"
            >
              {typeof image === 'string' ? (
                <img
                  src={image}
                  alt={`Slide ${index + 1}`}
                  className={`w-full h-full object-cover ${imageClassName}`}
                />
              ) : (
                <img
                  src={image.src || image.url}
                  alt={image.alt || `Slide ${index + 1}`}
                  className={`w-full h-full object-cover ${imageClassName}`}
                />
              )}
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        {showArrows && images.length > 1 && (
          <>
            <button
              onClick={goToPrevious}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors z-10"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={goToNext}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors z-10"
              aria-label="Next image"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </>
        )}

        {/* Play/Pause Button */}
        {showPlayPause && images.length > 1 && (
          <button
            onClick={togglePlayPause}
            className="absolute bottom-4 right-4 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors z-10"
            aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
          >
            {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
          </button>
        )}
      </div>

      {/* Dots Navigation */}
      {showDots && images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentIndex 
                  ? 'bg-white' 
                  : 'bg-white/50 hover:bg-white/75'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Image Counter */}
      <div className="absolute top-4 right-4 bg-black/50 text-white px-2 py-1 rounded-md text-sm z-10">
        {currentIndex + 1} / {images.length}
      </div>
    </div>
  );
};

ProductScroll.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.shape({
        src: PropTypes.string,
        url: PropTypes.string,
        alt: PropTypes.string,
      })
    ])
  ).isRequired,
  autoPlay: PropTypes.bool,
  autoPlayInterval: PropTypes.number,
  showDots: PropTypes.bool,
  showArrows: PropTypes.bool,
  showPlayPause: PropTypes.bool,
  className: PropTypes.string,
  imageClassName: PropTypes.string,
  title: PropTypes.string,
  height: PropTypes.string,
};

export default ProductScroll;