import { Suspense, lazy } from "react";

// Lazy load the heavy hero component
const LazyHeroSection = lazy(() => import("./LazyHeroSection"));

// Immediate fallback component with no external assets
const HeroFallback = () => (
  <div className="flex flex-col items-center">
    <div className="flex relative justify-center max-w-8xl mx-auto object-cover w-full">
      <div className="w-full h-64 sm:h-96 lg:h-[500px] bg-gradient-to-br from-green-100 to-blue-100 flex items-center justify-center rounded-lg animate-pulse">
        <div className="text-center">
          <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce">
            <span className="text-white font-bold text-xl">GB</span>
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Green Build</h2>
          <p className="text-gray-600">Electrical Solutions & Infrastructure</p>
        </div>
      </div>
      
      <div className="absolute inset-0 bg-neutral-900/20"></div>
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white z-10">
        <h1 className="text-6xl md:text-7xl bg-gradient-to-b from-white to-gray-300 bg-clip-text text-transparent mb-4 text-center tracking-wide">
          Green Build
        </h1>
        <p className="text-lg md:text-xl mb-8 text-gray-200 text-center max-w-3xl leading-relaxed">
          Your trusted partner for electrical solutions, infrastructure development, and sustainable building technologies across diverse industries.
        </p>
        <a
          href="#"
          className="bg-gradient-to-r from-primary-600 to-secondary-600 py-3 px-6 mx-3 rounded-md hover:from-primary-700 hover:to-secondary-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
        >
          Get Started
        </a>
      </div>
    </div>
  </div>
);

const HeroSection = () => {
  return (
    <Suspense fallback={<HeroFallback />}>
      <LazyHeroSection />
    </Suspense>
  );
};

export default HeroSection;