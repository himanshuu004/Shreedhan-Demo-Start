import React from "react";
import SureshRawat from "../assets/Host Pic/SureshRawat.jpg";

const HostInfo = () => {
  const hostQuote = `"जैसा आपलो घर, वैसा हमरो घर… बस फरक एथ कि हिंय दगड़ नि घस्यालूं!"
("Just like your home, our home too... the only difference is that here, we won’t make you cut grass!")"`; // Host's quote

  return (
    <div id="Host" className="bg-gray-100 py-12 px-6 rounded-xl shadow-md max-w-4xl mx-auto mt-12">
      <h2 className="text-3xl font-bold text-green-700 mb-4 text-center">Meet Your Host</h2>
      <div className="flex flex-col lg:flex-row items-start lg:items-center">
        <img
          src={SureshRawat}
          alt="Host"
          className="lg:w-64 lg:h-auto w-full h-48 rounded-md shadow-lg mb-4 lg:mb-0 lg:mr-6 object-cover"
        />
        <div className="lg:text-left text-center">
          <h3 className="text-3xl font-bold text-gray-800 mb-2">Suresh Singh Rawat (Hikku)</h3>
          <p className="text-gray-600 italic mb-2">Age: 45</p>
          <p className="text-md text-gray-700 mt-0 lg:mt-3">
            Meet Suresh, or as the locals call him, "Hikku." He's an experienced host from the beautiful hill station of Khirsu. He's spent years as a tourist driver, so he's met people from all over the world and knows these mountains, routes, and local spots like the back of his hand. He's got a great sense of humor, is very disciplined, and can chat with anyone. Plus, he's a fantastic cook and makes sure everyone feels right at home. He's also got a car ready to go, so if you want to explore the whole area, he can take you!
          </p>
          <p className="text-md text-gray-700 mt-2">
            Hikku says his homestay is special because it's cozy and well-maintained, with amazing views of the Himalayas. He treats his guests like family, offering a warm and personal touch. It's a peaceful place with all the comforts you need, and he always serves delicious, local food. And if you're lucky, he might just share some of the many stories he knows – perfect for entertainment or learning about the local culture!
          </p>
          <p className="text-md mt-10 text-gray-700 mt-2 italic"> {/* Quote Styling */}
            {hostQuote} {/* Display the quote */}
          </p>
          <p className="text-md text-gray-900 mt-2" >~Suresh Rawat</p>
        </div>
      </div>
    </div>
  );
};

export default HostInfo;