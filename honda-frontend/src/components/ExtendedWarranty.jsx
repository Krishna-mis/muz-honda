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

const ExtendedWarranty = () => {
  const [formData, setFormData] = useState({
    model: "",
    yearOfPurchase: "",
    registrationNumber: "",
    name: "",
    email: "",
    contactNumber: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResponseMessage("");

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/warranty`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData), // Using state instead of hardcoded values
        }
      );

      const data = await response.json(); // Parse JSON response

      if (response.ok) {
        setResponseMessage("Warranty Enquiry Submitted Successfully!");
        setFormData({
          model: "",
          yearOfPurchase: "",
          registrationNumber: "",
          name: "",
          email: "",
          contactNumber: "",
          message: "",
        }); // Reset form fields
      } else {
        setResponseMessage(`${data.message}`);
      }
    } catch (error) {
      console.error("Error:", error);
      setResponseMessage("Failed to submit. Please try again later.");
    }

    setLoading(false);
  };

  return (
    <div className="bg-gray-100 p-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Content Section */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h1 className="text-3xl font-bold text-red-600 mb-4">
              EXTENDED WARRANTY
            </h1>
            <p className="mb-2">
              Protect your vehicle with unique Honda Shield Extended Warranty
              and enjoy up to half a decade of vehicle warranty.
            </p>
            <p className="font-bold mb-4">Coverage</p>
            <p className="mb-6">
              Comprehensive parts coverage. It covers related Labour charges
              too.
            </p>

            <div className="space-y-8 p-4">
              {/* Scooters Section */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-bold mb-4">FOR SCOOTERS</h2>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr>
                        <th className="bg-red-600 text-white p-3 text-left border">
                          <img src="/assets/warranty1.png" alt="" />
                        </th>
                        <th className="bg-red-600 text-white p-3 text-left border">
                          ADDITIONAL MONTHS
                        </th>
                        <th className="bg-red-600 text-white p-3 text-left border">
                          ADDITIONAL KMS
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b hover:bg-gray-50">
                        <td className="p-3 border">3 Year + 1 Year</td>
                        <td className="p-3 border">12 Months</td>
                        <td className="p-3 border">12000 Km</td>
                      </tr>
                      <tr className="border-b hover:bg-gray-50">
                        <td className="p-3 border">3 Year + 2 Year</td>
                        <td className="p-3 border">24 Months</td>
                        <td className="p-3 border">24000 Km</td>
                      </tr>
                      <tr className="border-b hover:bg-gray-50">
                        <td className="p-3 border">3 Year + 3 Year</td>
                        <td className="p-3 border">36 Months</td>
                        <td className="p-3 border">36000 Km</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Motorcycles Section */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-bold mb-4">FOR MOTORCYCLES</h2>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr>
                        <th className="bg-red-600 text-white p-3 text-left border">
                          <img src="/assets/warranty2.png" alt="" />
                        </th>
                        <th className="bg-red-600 text-white p-3 text-left border">
                          ADDITIONAL MONTHS
                        </th>
                        <th className="bg-red-600 text-white p-3 text-left border">
                          ADDITIONAL KMS
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b hover:bg-gray-50">
                        <td className="p-3 border">3 Year + 1 Year</td>
                        <td className="p-3 border">12 Months</td>
                        <td className="p-3 border">16000 Km</td>
                      </tr>
                      <tr className="border-b hover:bg-gray-50">
                        <td className="p-3 border">3 Year + 2 Year</td>
                        <td className="p-3 border">24 Months</td>
                        <td className="p-3 border">28000 Km</td>
                      </tr>
                      <tr className="border-b hover:bg-gray-50">
                        <td className="p-3 border">3 Year + 3 Year</td>
                        <td className="p-3 border">36 Months</td>
                        <td className="p-3 border">40000 Km</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          {/* Enquire Section */}
          <div className="bg-gray-800 p-5 rounded-lg shadow-lg mt-6 lg:mt-0">
            <h2 className="text-xl font-bold text-white mb-4 pt-2">
              ENQUIRE NOW
            </h2>
            {responseMessage && (
              <p className="text-white text-center mb-4">{responseMessage}</p>
            )}
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="block text-white mb-1" htmlFor="model">
                  SELECT MODEL
                </label>
                <div className="relative">
                  <FaMotorcycle className="absolute left-3 top-3 text-red-600" />
                  <select
                    className="w-full pl-10 p-2 bg-gray-700 text-white rounded"
                    id="model"
                    value={formData.model}
                    onChange={handleChange}
                  >
                    <option value="">SELECT MODEL</option>
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

              <div>
                <label className="block text-white mb-1" htmlFor="year">
                  YEAR OF PURCHASE
                </label>
                <div className="relative">
                  <FaCalendarAlt className="absolute left-3 top-3 text-red-600" />
                  <input
                    className="w-full pl-10 p-2 bg-gray-700 text-white rounded"
                    id="yearOfPurchase"
                    placeholder="YEAR OF PURCHASE"
                    type="text"
                    value={formData.yearOfPurchase}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div>
                <label className="block text-white mb-1" htmlFor="registration">
                  REGISTRATION NUMBER
                </label>
                <div className="relative">
                  <FaMotorcycle className="absolute left-3 top-3 text-red-600" />
                  <input
                    className="w-full pl-10 p-2 bg-gray-700 text-white rounded"
                    id="registrationNumber"
                    placeholder="REGISTRATION NUMBER"
                    type="text"
                    value={formData.registrationNumber}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div>
                <label className="block text-white mb-1" htmlFor="name">
                  YOUR NAME
                </label>
                <div className="relative">
                  <FaUser className="absolute left-3 top-3 text-red-600" />
                  <input
                    className="w-full pl-10 p-2 bg-gray-700 text-white rounded"
                    id="name"
                    placeholder="YOUR NAME"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div>
                <label className="block text-white mb-1" htmlFor="email">
                  EMAIL ADDRESS
                </label>
                <div className="relative">
                  <FaEnvelope className="absolute left-3 top-3 text-red-600" />
                  <input
                    className="w-full pl-10 p-2 bg-gray-700 text-white rounded"
                    id="email"
                    placeholder="EMAIL ADDRESS"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div>
                <label className="block text-white mb-1" htmlFor="contact">
                  CONTACT NUMBER
                </label>
                <div className="relative">
                  <FaPhone className="absolute left-3 top-3 text-red-600" />
                  <input
                    className="w-full pl-10 p-2 bg-gray-700 text-white rounded"
                    id="contactNumber"
                    placeholder="CONTACT NUMBER"
                    type="text"
                    value={formData.contactNumber}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div>
                <label className="block text-white mb-1" htmlFor="message">
                  YOUR MESSAGE FOR US
                </label>
                <div className="relative">
                  <FaComment className="absolute left-3 top-3 text-red-600" />
                  <textarea
                    className="w-full pl-10 p-2 bg-gray-700 text-white rounded"
                    id="message"
                    placeholder="WRITE YOUR MESSAGE HERE"
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>
              </div>

              <button
                className="w-full bg-red-600 text-white p-2 rounded hover:bg-red-700"
                type="submit"
                disabled={loading}
              >
                {loading ? "Submitting..." : "SUBMIT"}
              </button>
            </form>
          </div>
        </div>

        {/* Additional Section for Image and Features */}
        <div className="bg-gray-100 pt-6 pb-12">
          <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left Section - Image Only */}
            <div className="bg-white p-6 rounded-lg shadow-lg flex justify-center">
              <img
                alt="Honda vehicles"
                className="w-full rounded-lg"
                src="/assets/warranty3.jpg"
              />
            </div>

            {/* Right Section - Content */}
            <div className="bg-white p-6 rounded-lg shadow-lg space-y-6">
              <div className=" text-black p-4 rounded-lg text-center">
                <div className="mb-2">
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
              </div>

              {/* Features */}
              <div className="p-4 rounded-lg border border-gray-300">
                <h3 className="text-lg font-bold text-red-600">
                  FEATURES OF HONDA SHIELD
                </h3>
                <div className="pt-5">
                  <ul className="space-y-2">
                    {[
                      "Major parts covered at minimum cost",
                      "Reliable and genuine Honda parts",
                      "Across India support at Honda centers",
                    ].map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <FaCheck className="text-red-600 mr-2" />
                        <span className="text-gray-800">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExtendedWarranty;
