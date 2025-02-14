import video3 from "../assets/video3.mp4";

const HeroSection = () => {
  return (
    <div
      id="herosection"
      className="relative w-full h-[100vh] min-h-[50vh] overflow-hidden"
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
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6 animate-fadeIn">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold drop-shadow-lg">
          Welcome to{" "}
          <span className="bg-gradient-to-r from-green-400 to-green-700 text-transparent bg-clip-text">
            Shreedhan Homestay
          </span>
        </h1>

        <p className="mt-6 text-lg max-w-3xl drop-shadow-md sm:text-xl">
        Can you imagine being here? Let’s turn this imagination into reality.  
        Book your best days in the valley mountains now!        </p>

        {/* Call-to-Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-center mt-8 space-y-4 sm:space-y-0 sm:space-x-4">
          <a
            className="py-3 px-6 rounded-md bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg"
            href="https://wa.me/918923196771?text=Hello%20I%20am%20interested%20in%20booking%20your%20homestay."
                    >
            Contact Us
          </a>

          <a
            className="py-3 px-6 rounded-md bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg"
            href="https://wa.me/918923196771?text=Hello%20I%20am%20interested%20in%20booking%20your%20homestay."
          >
            Query
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
