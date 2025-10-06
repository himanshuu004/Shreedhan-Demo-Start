import { useState, useEffect } from "react";
import axios from "axios";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    review: "",
  });

  // ✅ Fetch all reviews
  const getAllReviews = async () => {
    try {
      const res = await axios.get("https://shreedhan-backend.vercel.app/reviews");
      setReviews(res.data);
    } catch (error) {
      console.error("Error fetching reviews:", error);
    }
  };

  // ✅ Handle input change
  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  // ✅ Submit review
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://shreedhan-backend.vercel.app/reviews", formData);
      // alert("Thank you for your review!");
      setFormData({ name: "", address: "", review: "" });
      getAllReviews();
    } catch (error) {
      console.error("Error adding review:", error);
      alert("Something went wrong!");
    }
  };

  useEffect(() => {
    getAllReviews();
  }, []);

  return (
    <div id="Reviews" className="mt-20 tracking-wide px-4">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-10 lg:my-20 font-semibold text-green-500">
        Guest Experiences & Reviews
      </h2>

      {/* ✅ Display All Reviews */}
      <div className="flex flex-wrap justify-center gap-6">
        {reviews.length === 0 ? (
          <p className="text-gray-500 text-center">No reviews yet.</p>
        ) : (
          reviews.map((r, index) => (
            <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-4">
              <div className="bg-white shadow-md rounded-xl p-6 text-md border border-gray-200">
                <p className="text-gray-700 italic">"{r.review}"</p>
                <div className="flex mt-6 items-center gap-3">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-green-200 flex items-center justify-center text-xl font-bold text-green-700">
                    {r.name[0].toUpperCase()}
                  </div>
                  <div>
                    <h6 className="text-lg font-medium text-gray-800">
                      {r.name}
                    </h6>
                    <span className="text-sm text-gray-500">{r.address}</span>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* ✅ Add Review Form */}
      <div className="max-w-md mx-auto mt-16 bg-white p-8 rounded-xl shadow-md border border-gray-200">
        <h3 className="text-2xl font-semibold text-center text-green-500 mb-6">
          Share Your Experience
        </h3>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-400"
          />

          <input
            type="text"
            name="address"
            placeholder="Your Address"
            value={formData.address}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-400"
          />

          <textarea
            name="review"
            placeholder="Your Review"
            value={formData.review}
            onChange={handleChange}
            required
            rows="4"
            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-400"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 rounded-lg transition-all duration-200"
          >
            Submit Review
          </button>
        </form>
      </div>
    </div>
  );
};

export default Reviews;
