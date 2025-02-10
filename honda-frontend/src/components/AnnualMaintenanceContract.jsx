import React, { useState } from "react";
import {
  FaMotorcycle,
  FaCalendarAlt,
  FaIdCard,
  FaUser,
  FaEnvelope,
  FaPhone,
  FaComment,
  FaCheck,
} from "react-icons/fa";

const AnnualMaintenanceContract = () => {
  const [formData, setFormData] = useState({
    model: "",
    yearOfPurchase: "",
    registrationNumber: "",
    name: "",
    email: "",
    contactNumber: "",
    message: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (
      !formData.model ||
      !formData.yearOfPurchase ||
      !formData.registrationNumber ||
      !formData.name ||
      !formData.email ||
      !formData.contactNumber
    ) {
      setError("All fields are required except message.");
      return;
    }

    try {
      const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/amc`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        setSuccess(data.message);
        setFormData({
          model: "",
          yearOfPurchase: "",
          registrationNumber: "",
          name: "",
          email: "",
          contactNumber: "",
          message: "",
        });
      } else {
        setError(data.message || "Failed to submit enquiry");
      }
    } catch (error) {
      setError("Internal Server Error");
    }
  };

  return (
    <div className="container mx-auto p-4">
      <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col lg:flex-row mx-4 lg:mx-20">
        {/* Left Content Section */}
        <div className="lg:w-1/2 lg:pr-6 mb-6 lg:mb-0">
          <h1 className="text-3xl font-bold text-red-600 mb-4">
            ANNUAL MAINTENANCE CONTRACT
          </h1>

          <p className="mb-4">
            Annual Maintenance Contract is the part of Honda Shield Program to
            provide maintenance benefits to our customers.
          </p>
          <h2 className="font-semibold mb-2">Coverage</h2>
          <p className="mb-4">Free maintenance service for 1 year.</p>
          <h2 className="font-semibold mb-2">Purchase duration</h2>
          <p className="mb-4">
            Customers can opt for the Annual Maintenance Contract after the
            completion of free services.
          </p>
          <div className="mb-6">
            <iframe
              width="100%"
              height="200"
              src="https://www.youtube.com/embed/your_video_id" // Replace with your actual video ID
              title="Honda Warranty Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-lg border border-gray-200">
            <div className="font-semibold mb-4 bg-gray-200 p-2">
              FEATURES OF ANNUAL MAINTENANCE CONTRACT (AMC)
            </div>
            <ul className="space-y-2">
              {[
                "Savings up to 30%",
                "3 Maintenance services*",
                "2 Additional free washing*",
                "10% discount on Labour charges (except accidental)",
                "5% discount on spare parts and accessories",
                "5% discount on Honda Genuine Engine oil",
                "Engine Health report through MCS Tool",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <FaCheck className="text-red-600" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-gray-600">* Conditions Apply.</p>
          </div>
        </div>

        {/* Right Form Section */}
        <div className="lg:w-1/2 bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold text-white mb-4">ENQUIRE NOW</h2>
          {error && <p className="text-red-500 mb-2">{error}</p>}
          {success && <p className="text-green-500 mb-2">{success}</p>}
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-400 mb-2" htmlFor="model">
                SELECT MODEL
              </label>
              <div className="relative">
                <FaMotorcycle className="absolute left-3 top-1/2 -translate-y-1/2 text-red-400" />
                <select
                  id="model"
                  value={formData.model}
                  onChange={handleChange}
                  className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600 pl-10"
                >
                  <option value="">Select Model</option>
                  <option value="honda-activa-6g">Honda Activa 6G</option>
                  <option value="honda-cb-shine">Honda CB Shine</option>
                  <option value="honda-unicorn">Honda Unicorn</option>
                  <option value="honda-cbr-150r">Honda CBR 150R</option>
                  <option value="honda-x-blade">Honda X-Blade</option>
                  <option value="honda-hornet-2-0">Honda Hornet 2.0</option>
                  <option value="honda-dio">Honda Dio</option>
                  <option value="honda-cb500x">Honda CB500X</option>
                  <option value="honda-crf1100l-africa-twin">
                    Honda CRF1100L Africa Twin
                  </option>
                  <option value="honda-cbr1000rr">Honda CBR1000RR</option>
                  <option value="honda-cb1000r">Honda CB1000R</option>
                </select>
              </div>
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-400 mb-2"
                htmlFor="yearOfPurchase"
              >
                YEAR OF PURCHASE
              </label>
              <div className="relative">
                <FaCalendarAlt className="absolute left-3 top-1/2 -translate-y-1/2 text-red-400" />
                <input
                  type="text"
                  id="yearOfPurchase"
                  value={formData.yearOfPurchase}
                  onChange={handleChange}
                  placeholder="Year of Purchase"
                  className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600 pl-10"
                />
              </div>
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-400 mb-2"
                htmlFor="registrationNumber"
              >
                REGISTRATION NUMBER
              </label>
              <div className="relative">
                <FaIdCard className="absolute left-3 top-1/2 -translate-y-1/2 text-red-400" />
                <input
                  type="text"
                  id="registrationNumber"
                  value={formData.registrationNumber}
                  onChange={handleChange}
                  placeholder="Registration Number"
                  className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600 pl-10"
                />
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-gray-400 mb-2" htmlFor="name">
                YOUR NAME
              </label>
              <div className="relative">
                <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-red-400" />
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600 pl-10"
                />
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-gray-400 mb-2" htmlFor="email">
                EMAIL ADDRESS
              </label>
              <div className="relative">
                <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-red-400" />
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600 pl-10"
                />
              </div>
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-400 mb-2"
                htmlFor="contactNumber"
              >
                CONTACT NUMBER
              </label>
              <div className="relative">
                <FaPhone className="absolute left-3 top-1/2 -translate-y-1/2 text-red-400" />
                <input
                  type="text"
                  id="contactNumber"
                  value={formData.contactNumber}
                  onChange={handleChange}
                  placeholder="Contact Number"
                  className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600 pl-10"
                />
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-gray-400 mb-2" htmlFor="message">
                YOUR MESSAGE FOR US
              </label>
              <div className="relative">
                <FaComment className="absolute left-3 top-3 text-red-400" />
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message here"
                  className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600 pl-10"
                ></textarea>
              </div>
            </div>
            <button
              className="w-full bg-red-600 text-white p-2 rounded"
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

export default AnnualMaintenanceContract;
