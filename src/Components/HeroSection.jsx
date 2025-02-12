import video3 from "../assets/video3.mp4";

const HeroSection = () => {
  return (
    <div id="herosection" className="relative w-full h-screen overflow-hidden">
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover">
        <source src={video3} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark shade in the video */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl tracking-wide">
          Welcome to 
          <span className="bg-gradient-to-r from-green-500 to-green-800 text-transparent bg-clip-text">
            {" "}
            Shreedhan Homestay
          </span>
        </h1>
        <p className="mt-6 text-lg max-w-4xl">
        Experience the warmth of a home away from home, where every guest becomes part of our family
        </p>
        <div className="flex justify-center mt-8">
        <a className='py-2 bg-gradient-to-r from-green-500 to-green-600 rounded-md  px-3 ' href="https://wa.me/918923196771?text=Hello%20I%20am%20interested%20in%20booking%20your%20homestay.
                    ">Book Now</a>
          <a className='py-2 ml-3 bg-gradient-to-r from-green-500 to-green-600 rounded-md px-3' href="mailto:shreedhanhomestay@gmail.com?subject=Homestay%20Booking%20Inquiry&body=Hello,%20I%20am%20interested%20in%20booking%20your%20homestay.">
          Email Us
              </a>

        </div>
      </div>
    </div>
  );
};

export default HeroSection;
