import { reviews } from "../constants";

const Testimonials = () => {
  return (
    <div id="Reviews" className="mt-20 tracking-wide">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-10 lg:my-20 font-semibold text-green-500">
      Guest Experiences & Reviews
      </h2>
      <div className="flex flex-wrap justify-center gap-6">
        {reviews.map((testimonial, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-4">
            <div className="bg-white shadow-md rounded-xl p-6 text-md border border-gray-200">
              <p className="text-gray-700 italic">"{testimonial.text}"</p>
              <div className="flex mt-6 items-center">
              <img
                    className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-gray-300 object-cover mx-auto"
                    src={testimonial.image}
                    alt={testimonial.user}
                  />

                <div>
                  <h6 className="text-lg font-medium text-gray-800">{testimonial.user}</h6>
                  <span className="text-sm text-gray-500">{testimonial.city}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
