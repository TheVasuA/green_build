import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";
import video3 from "../assets/video3.mp4";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-10 lg:mt-2">
       <div className="flex relative justify-center max-w-8xl mx-auto  px-2 blur-[1px] object-cover opacity-40">

        <video
          autoPlay
          loop
          muted
          className="  rounded-lg  border border-orange-700 shadow-lg shadow-orange-400 mx-2 my-4"
        >
          <source src={video3} type="video/mp4" />
        </video>

      </div>
<div className="absolute max-w-8xl mx-auto lg:mt-40 mt-7 px-10 lg:px-300">
<h1 className="   text-2xl sm:text-3xl lg:text-4xl text-center tracking-wide md:px-20 ">
       
        <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
        
           Green Build offers over electrical products, services and solutions for the industrial, commercial and residential markets
        </span>
      </h1 >
  
      <div className=" flex justify-center my-10">
        <a
          href="#"
          className="bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md"
        >
          Documentation
        </a>

      </div>
</div>
      {/* <div className="flex mt-10 justify-center max-w-7xl mx-auto px-6">
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4"
        >
          <source src={video1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4"
        >
          <source src={video2} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div> */}
    </div>
  );
};

export default HeroSection;