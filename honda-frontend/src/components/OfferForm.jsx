import React, { useState } from "react";
import { Link } from "react-router-dom";

const OfferForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    agree: false,
  });
  const [loading, setLoading] = useState(false); // ✅ Fix added
  const [responseMessage, setResponseMessage] = useState(""); // ✅ Added for success/error messages

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
    setResponseMessage("");

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
        setResponseMessage("✅ Offer Enquiry Submitted Successfully!");
        setFormData({ name: "", email: "", contact: "", agree: false });
      } else {
        setResponseMessage(`❌ ${data.message}`);
      }
    } catch (error) {
      setResponseMessage("❌ Failed to submit. Please try again later.");
    }

    setLoading(false);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-red-600 mb-4">OFFERS</h1>
      <div className="flex flex-col md:flex-row gap-4 px-10 h-[500px] md:h-[600px]">
        {" "}
        {/* Increased height */}
        {/* Offer Image */}
        <div className="flex-1 border rounded p-4 h-full">
          <img
            alt="Offer"
            className="w-full h-full object-cover rounded-lg" // Full height and width
            src="/assets/offer1.jpg"
          />
        </div>
        {/* Form Section */}
        <div className="flex-1 h-full flex items-center">
          {" "}
          {/* Center content */}
          <form
            onSubmit={handleSubmit}
            className="w-full h-full flex flex-col justify-center"
          >
            <div className="mb-4">
              <label
                className="block text-gray-600 text-sm mb-2"
                htmlFor="name"
              >
                <i className="fas fa-user text-red-600"></i> YOUR NAME
              </label>
              <input
                className="w-full border rounded p-2"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="YOUR NAME"
                type="text"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-600 text-sm mb-2"
                htmlFor="email"
              >
                <i className="fas fa-envelope text-red-600"></i> EMAIL ADDRESS
              </label>
              <input
                className="w-full border rounded p-2"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="EMAIL ADDRESS"
                type="email"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-600 text-sm mb-2"
                htmlFor="contact"
              >
                <i className="fas fa-phone text-red-600"></i> CONTACT NUMBER
              </label>
              <input
                className="w-full border rounded p-2"
                id="contact"
                name="contact"
                value={formData.contact}
                onChange={handleChange}
                placeholder="CONTACT NUMBER"
                type="text"
              />
            </div>
            <div className="mb-4">
              <label className="inline-flex items-center">
                <input
                  className="form-checkbox"
                  type="checkbox"
                  name="agree"
                  checked={formData.agree}
                  onChange={handleChange}
                />
                <span className="ml-2 text-gray-600">
                  Yes, I agree with all{" "}
                  <Link
                    to="/terms-conditions"
                    className="text-red-600 underline"
                  >
                    Terms & Conditions
                  </Link>
                </span>
              </label>
            </div>
            <button
              className="bg-red-600 text-white px-4 py-2 rounded"
              type="submit"
            >
              SUBMIT
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default OfferForm;
