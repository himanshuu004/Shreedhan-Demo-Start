import React from "react";
import { CheckCircle2 } from "lucide-react";
// import Bedroom from "../assets/Bedroom.jpg";
import { checklistItems } from "../constants";

const Gallery = () => {
  return (
    <div id="Gallery" className="mt-20">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide">
        Experience Comfort, Serenity, and Adventure{" "}
        <span className="bg-gradient-to-r from-green-500 to-green-800 text-transparent bg-clip-text">
          All in One Stay! ⛰️
        </span>
      </h2>

      <div className="mt-10 space-y-10">
        {checklistItems.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col lg:flex-row ${
              index % 2 !== 0 ? "lg:flex-row-reverse" : ""
            } items-center gap-6`}
          >
            {/* Image */}
            <div className="w-full lg:w-1/2">
              <img className="rounded-lg shadow-lg" src={item.image} alt={item.title} />
            </div>

            {/* Description */}
            <div className="w-full lg:w-1/2 px-4">
              <div className="flex items-center mb-4">
                <div className="text-green-400 bg-white-900 h-10 w-10 p-2 flex justify-center items-center rounded-full">
                  <CheckCircle2 />
                </div>
                <h5 className="ml-4 text-xl font-semibold">{item.title}</h5>
              </div>
              <p className="text-md text-neutral-500">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
