import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const OfferForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    agree: false,
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/offer`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (response.ok) {
        toast.success("Offer Enquiry Submitted Successfully!");
        setFormData({ name: "", email: "", contact: "", agree: false });
      } else {
        toast.error(`${data.message}`);
      }
    } catch (error) {
      toast.error("Failed to submit. Please try again later.");
    }

    setLoading(false);
  };

  return (
    <div className="w-full min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-red-600 mb-6 text-center">
          OFFERS
        </h1>
        <ToastContainer />

        <div className="max-w-3xl mx-auto flex flex-col gap-8">
          {/* Image Container */}
          <div className="w-full">
            <div className="aspect-w-16 aspect-h-9 sm:aspect-h-8">
              <img
                alt="Offer"
                className="w-full h-full object-cover rounded-lg shadow-lg"
                src="/assets/offer1.jpg"
              />
            </div>
          </div>

          {/* Form Container */}
          <div className="w-full bg-white p-6 rounded-lg shadow-md">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <div>
                  <label
                    className="block text-gray-700 text-sm font-medium mb-2"
                    htmlFor="name"
                  >
                    <i className="fas fa-user text-red-600 mr-2"></i>
                    YOUR NAME
                  </label>
                  <input
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent transition"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    type="text"
                  />
                </div>

                <div>
                  <label
                    className="block text-gray-700 text-sm font-medium mb-2"
                    htmlFor="email"
                  >
                    <i className="fas fa-envelope text-red-600 mr-2"></i>
                    EMAIL ADDRESS
                  </label>
                  <input
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent transition"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    type="email"
                  />
                </div>

                <div>
                  <label
                    className="block text-gray-700 text-sm font-medium mb-2"
                    htmlFor="contact"
                  >
                    <i className="fas fa-phone text-red-600 mr-2"></i>
                    CONTACT NUMBER
                  </label>
                  <input
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent transition"
                    id="contact"
                    name="contact"
                    value={formData.contact}
                    onChange={handleChange}
                    placeholder="Enter your contact number"
                    type="text"
                  />
                </div>
              </div>

              <div className="flex items-center">
                <input
                  className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded"
                  type="checkbox"
                  name="agree"
                  checked={formData.agree}
                  onChange={handleChange}
                />
                <label className="ml-2 block text-sm text-gray-700">
                  Yes, I agree with all{" "}
                  <Link
                    to="/terms-conditions"
                    className="text-red-600 hover:text-red-700 underline"
                  >
                    Terms & Conditions
                  </Link>
                </label>
              </div>

              <button
                className="w-full bg-red-600 text-white px-6 py-3 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-colors disabled:opacity-50"
                type="submit"
                disabled={loading}
              >
                {loading ? "SUBMITTING..." : "SUBMIT"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferForm;
