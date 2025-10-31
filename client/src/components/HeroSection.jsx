import { Suspense } from "react";
import video3 from "../assets/video7.mp4";
import posterImage from "../assets/slideImage/du1.png";
import { useState, useRef, useEffect } from "react";
import { Volume2, VolumeX } from "lucide-react";

// Direct hero component without lazy loading
const DirectHeroSection = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [isVideoError, setIsVideoError] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [isScrollMuted, setIsScrollMuted] = useState(false);
  const videoRef = useRef(null);

  // Function to toggle mute/unmute
  const toggleMute = () => {
    if (videoRef.current && !isScrollMuted) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      const handleLoadedData = () => {
        setIsVideoLoaded(true);
      };
      
      const handleError = () => {
        setIsVideoError(true);
      };

      video.addEventListener('loadeddata', handleLoadedData);
      video.addEventListener('error', handleError);

      // Scroll listener to mute video when user scrolls 50% of page
      const handleScroll = () => {
        const scrollTop = window.scrollY;
        const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / documentHeight) * 100;

        if (scrollPercent >= 35 && !isScrollMuted) {
          // Auto-mute when scrolled 50% down
          video.muted = true;
          setIsMuted(true);
          setIsScrollMuted(true);
        } else if (scrollPercent < 35 && isScrollMuted) {
          // Allow manual control when scrolled back up
          setIsScrollMuted(false);
        }
      };

      window.addEventListener('scroll', handleScroll);

      return () => {
        video.removeEventListener('loadeddata', handleLoadedData);
        video.removeEventListener('error', handleError);
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, [isScrollMuted]);

  return (
    <div className="flex flex-col items-center">
      <div className="flex relative justify-center max-w-8xl mx-auto object-cover w-full">

        {/* Loading placeholder with poster image */}
        {!isVideoLoaded && !isVideoError && (
          <div className="w-full relative">
            <img 
              src={posterImage} 
              alt="Green Build Preview" 
              className="w-full h-auto object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center rounded-lg">
              <div className="text-center text-white">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
                <p className="text-white">Loading video...</p>
              </div>
            </div>
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

        <div className="relative">
          <video
            ref={videoRef}
            autoPlay
            loop
            muted={isMuted}
            playsInline
            preload="metadata"
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

          {/* Audio Control Button */}
          {isVideoLoaded && !isVideoError && (
            <button
              onClick={toggleMute}
              disabled={isScrollMuted}
              className={`absolute bottom-24 right-4 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-3 rounded-full transition-all duration-300 transform hover:scale-110 z-10 ${
                isScrollMuted ? 'opacity-50 cursor-not-allowed' : ''
              }`}
              aria-label={isMuted ? "Unmute video" : "Mute video"}
            >
              {isMuted ? (
                <VolumeX className="w-6 h-6" />
              ) : (
                <Volume2 className="w-6 h-6" />
              )}
            </button>
          )}

          {/* Scroll mute indicator */}
          {isVideoLoaded && !isVideoError && isScrollMuted && (
            <div className="absolute top-4 left-4 bg-black bg-opacity-70 text-white px-3 py-2 rounded-md text-sm z-10">
              Video muted (scroll up to enable controls)
            </div>
          )}
        </div>


      </div>
    </div>
  );
};

// Immediate fallback component with no external assets
const HeroFallback = () => (
  <div className="flex flex-col items-center">
    <div className="flex relative justify-center max-w-8xl mx-auto object-cover w-full">

      <div className="absolute inset-0 flex flex-col justify-center items-center text-white z-10">

        <a
          href="#"
          className="bg-gradient-to-r from-primary-600 to-secondary-600 py-3 px-6 mx-3 rounded-md hover:from-primary-700 hover:to-secondary-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
        >
          Loading
        </a>
      </div>
    </div>
  </div>
);

const HeroSection = () => {
  return (
    <Suspense fallback={<HeroFallback />}>
      <DirectHeroSection />
    </Suspense>
  );
};

export default HeroSection;