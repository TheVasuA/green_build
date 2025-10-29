
import video3 from "../assets/video6.mp4";
import posterImage from "../assets/slideImage/du1.png";
import { useState, useRef, useEffect } from "react";

const HeroSection = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [isVideoError, setIsVideoError] = useState(false);
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);
  const videoRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    // Intersection Observer for lazy loading
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !shouldLoadVideo) {
            setShouldLoadVideo(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: '100px', // Start loading 100px before coming into view
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
  }, [shouldLoadVideo]);

  useEffect(() => {
    const video = videoRef.current;
    if (video && shouldLoadVideo) {
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
  }, [shouldLoadVideo]);

  return (
    <div className="flex flex-col items-center ">
       <div ref={containerRef} className="flex relative justify-center max-w-8xl mx-auto object-cover w-full">

        {/* Loading placeholder with poster image */}
        {(!isVideoLoaded && !isVideoError) && (
          <div className="w-full relative">
            <img 
              src={posterImage} 
              alt="Green Build Preview" 
              className="w-full h-auto object-cover rounded-lg"
            />
            {shouldLoadVideo && (
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
          <div className="w-full relative">
            <img 
              src={posterImage} 
              alt="Green Build" 
              className="w-full h-auto object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-lg">
              <div className="text-center text-white">
                <h2 className="text-2xl font-bold mb-2">Green Build</h2>
                <p className="text-lg">Electrical Solutions & Infrastructure</p>
              </div>
            </div>
          </div>
        )}

        {shouldLoadVideo && (
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


             {/* <div className="w-full">

        <video
          autoPlay
          loop
          muted
          className="w-full h-screen object-cover"
        >
          <source src={video3} type="video/mp4" />
        </video>

      </div> */}

{/* <div className="absolute max-w-8xl mx-auto lg:mt-80 mt-7 px-10 ">
<h1 className="text-2xl sm:text-3xl lg:text-4xl text-center tracking-wide md:px-20 text-theme">
       
        <span className="text-gray-700 font-sen font-semibold">
        
           Green Build offers over electrical products, services and solutions for the industrial, commercial and residential markets
        </span>
      </h1 >
  
      <div className="flex justify-center my-10">
        <a
          href="#"
          className="btn-primary"
        >
          Documentation
        </a>

      </div>
</div> */}

    </div>
  );
};

export default HeroSection;