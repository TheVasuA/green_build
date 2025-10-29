import { useState, useRef, useEffect } from "react";

const LazyHeroSection = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [isVideoError, setIsVideoError] = useState(false);
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);
  const [isPosterLoaded, setIsPosterLoaded] = useState(false);
  const videoRef = useRef(null);
  const containerRef = useRef(null);

  // Lazy load assets
  const [video3, setVideo3] = useState(null);
  const [posterImage, setPosterImage] = useState(null);

  useEffect(() => {
    // Dynamically import assets only when component mounts
    const loadAssets = async () => {
      try {
        const [videoModule, posterModule] = await Promise.all([
          import("../assets/video6.mp4"),
          import("../assets/slideImage/du1.png")
        ]);
        setVideo3(videoModule.default);
        setPosterImage(posterModule.default);
      } catch (error) {
        console.error("Failed to load assets:", error);
        setIsVideoError(true);
      }
    };

    loadAssets();
  }, []);

  useEffect(() => {
    // Intersection Observer for lazy loading video
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !shouldLoadVideo && video3) {
            setShouldLoadVideo(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: '200px', // Start loading 200px before coming into view
        threshold: 0.1
      }
    );

    const currentContainer = containerRef.current;
    if (currentContainer) {
      observer.observe(currentContainer);
    }

    return () => {
      if (currentContainer) {
        observer.unobserve(currentContainer);
      }
    };
  }, [shouldLoadVideo, video3]);

  useEffect(() => {
    const video = videoRef.current;
    if (video && shouldLoadVideo && video3) {
      // Load the video only when it should be loaded
      video.load();
      
      const handleLoadedData = () => {
        setIsVideoLoaded(true);
      };
      
      const handleError = () => {
        setIsVideoError(true);
      };

      video.addEventListener('loadeddata', handleLoadedData);
      video.addEventListener('error', handleError);

      return () => {
        video.removeEventListener('loadeddata', handleLoadedData);
        video.removeEventListener('error', handleError);
      };
    }
  }, [shouldLoadVideo, video3]);

  return (
    <div className="flex flex-col items-center">
      <div ref={containerRef} className="flex relative justify-center max-w-8xl mx-auto object-cover w-full">

        {/* Immediate placeholder - no external assets */}
        {!posterImage && (
          <div className="w-full h-64 sm:h-96 lg:h-[500px] bg-gradient-to-br from-green-100 to-blue-100 flex items-center justify-center rounded-lg">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">GB</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Green Build</h2>
              <p className="text-gray-600">Electrical Solutions & Infrastructure</p>
            </div>
          </div>
        )}

        {/* Poster image with lazy loading */}
        {posterImage && (!isVideoLoaded && !isVideoError) && (
          <div className="w-full relative">
            <img 
              src={posterImage} 
              alt="Green Build Preview" 
              className={`w-full h-auto object-cover rounded-lg transition-opacity duration-500 ${
                isPosterLoaded ? 'opacity-100' : 'opacity-0'
              }`}
              onLoad={() => setIsPosterLoaded(true)}
              loading="lazy"
            />
            {!isPosterLoaded && (
              <div className="absolute inset-0 w-full h-64 sm:h-96 lg:h-[500px] bg-gradient-to-br from-green-100 to-blue-100 flex items-center justify-center rounded-lg">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-xl">GB</span>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-2">Green Build</h2>
                  <p className="text-gray-600">Electrical Solutions & Infrastructure</p>
                </div>
              </div>
            )}
            {shouldLoadVideo && isPosterLoaded && (
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center rounded-lg">
                <div className="text-center text-white">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
                  <p className="text-white">Loading video...</p>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Error fallback */}
        {isVideoError && (
          <div className="w-full h-64 sm:h-96 lg:h-[500px] bg-gradient-to-br from-green-100 to-blue-100 flex items-center justify-center rounded-lg">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">GB</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Green Build</h2>
              <p className="text-gray-600">Electrical Solutions & Infrastructure</p>
            </div>
          </div>
        )}

        {/* Lazy loaded video */}
        {shouldLoadVideo && video3 && (
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            preload="none"
            poster={posterImage}
            className={`w-full h-auto object-cover transition-opacity duration-1000 ${
              isVideoLoaded ? 'opacity-100' : 'opacity-0 absolute'
            }`}
            onLoadedData={() => setIsVideoLoaded(true)}
            onError={() => setIsVideoError(true)}
          >
            <source src={video3} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}


      </div>
    </div>
  );
};

export default LazyHeroSection;