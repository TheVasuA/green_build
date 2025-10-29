import { Suspense, lazy } from "react";

// Lazy load the heavy hero component
const LazyHeroSection = lazy(() => import("./LazyHeroSection"));

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
      <LazyHeroSection />
    </Suspense>
  );
};

export default HeroSection;