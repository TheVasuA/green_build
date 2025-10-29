
import video3 from "../assets/video6.mp4";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center ">
       <div className="flex relative justify-center max-w-8xl mx-auto blur-[1px] object-cover opacity-100">

        <video
          autoPlay
          loop
          muted
          className=" border border-secondary-500 shadow-lg shadow-secondary-200 mt-10 lg:mt-20 rounded-lg w-full h-auto object-cover"
        >
          <source src={video3} type="video/mp4" />
        </video>

      </div>
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