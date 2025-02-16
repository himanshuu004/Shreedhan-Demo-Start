import video3 from "../assets/video3.mp4";

const HeroSection = () => {
  return (
    <div
      id="herosection"
      className="relative w-full h-[55vh] sm:h-[55vh] md:h-[80vh] lg:h-[100vh] overflow-hidden"
    >
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={video3} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4 sm:px-6">
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold drop-shadow-lg leading-tight">
          Welcome to{" "}
          <span className="bg-gradient-to-r from-green-400 to-green-700 text-transparent bg-clip-text">
            Shreedhan Homestay
          </span>
        </h1>

        <p className="mt-4 text-base sm:text-lg md:text-xl lg:text-2xl max-w-2xl drop-shadow-md">
          Can you imagine being here? Let’s turn this imagination into reality.
          Book your best days in the valley mountains now!
        </p>

        {/* Call-to-Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-center mt-6 space-y-3 sm:space-y-0 sm:space-x-4">
          <a
            className="py-3 px-5 sm:px-6 rounded-md bg-green-500 text-white font-semibold shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg text-sm sm:text-base"
            href="https://wa.me/918923196771?text=Hello%20I%20am%20interested%20in%20booking%20your%20homestay."
          >
            Contact Us
          </a>

          <a
            className="py-3 px-5 sm:px-6 rounded-md bg-green-500 text-white font-semibold shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg text-sm sm:text-base"
            href="mailto:your-shreedhanhomestay@gmail.com?subject=Inquiry%20About%20Homestay&body=Hello,%20I%20have%20a%20query%20regarding%20your%20homestay.">
               Query
          </a>

          
        
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
