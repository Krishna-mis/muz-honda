import React, { useState } from "react";
import {
  FaMotorcycle,
  FaCalendarAlt,
  FaWrench,
  FaPhone,
  FaUser,
  FaEnvelope,
  FaPencilAlt,
  FaCheck,
} from "react-icons/fa";

const ServiceBooking = () => {
  const [formData, setFormData] = useState({
    model: "",
    enteredModel: "",
    yearOfPurchase: "",
    serviceType: "",
    registrationNumber: "",
    bookingDate: "",
    name: "",
    email: "",
    contactNumber: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    console.log("Submitting Form Data:", formData); // Debugging
  
    try {
      const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/book-service`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      console.log("Response Status:", response.status); // Debugging
  
      const data = await response.json();
      if (response.ok) {
        alert("Booking saved successfully!");
      } else {
        alert("Error: " + data.message);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred while submitting the form.");
    }
  };
  
  

  return (
    <div className="container p-4">
      <h1 className="text-3xl font-bold text-red-600 mb-4">SERVICE BOOKING</h1>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-4 p-5 mx-2 sm:mx-0">
        {/* Image + Benefits Section */}
        <div className="col-span-1">
          <div className="flex space-x-4">
            <img
              alt="Honda Service"
              className="w-full rounded-md shadow-md"
              height="400"
              src="/assets/service-booking.jpg"
            />
          </div>
          <div className="bg-white p-4 mt-4">
            <h2 className="text-red-600 text-lg font-bold mb-2">
              BENEFITS OF HONDA SERVICE CENTRE
            </h2>
            <ul className="list-none space-y-2">
              {[
                "Quality Repair with Honda Trained & Certified Technicians",
                "Genuine Parts, Lubricants & Accessories for enhancing vehicle performance and overall life.",
                "Use of computerised systems/programs for vehicle performance check and detecting malfunctioning parts.",
                "Exclusive cashless Insurance Claim facility",
                "Pick Up & Drop facility* available.",
              ].map((benefit, index) => (
                <li className="flex items-center space-x-2" key={index}>
                  <FaCheck className="text-red-600 text-xl" />
                  <span className="text-sm leading-tight">{benefit}</span>
                </li>
              ))}
            </ul>
            <p className="text-gray-600 mt-2 text-sm">* Conditions Apply.</p>
          </div>
        </div>

        {/* Service Booking Form */}
        <div className="col-span-1 bg-gray-800 p-4 text-white rounded-md shadow-md">
          <h2 className="text-lg font-bold mb-4">SERVICE BOOKING</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Select Model */}
            <div>
              <label className="block mb-1">SELECT MODEL</label>
              <div className="relative flex items-center">
                <FaMotorcycle className="absolute left-3 text-red-400" />
                <select
                  name="model"
                  className="w-full p-2 pl-10 bg-gray-700 border border-gray-600 rounded"
                  value={formData.model}
                  onChange={handleChange}
                >
                  <option>Select Model</option>
                  <option>Honda Activa 6G</option>
                  <option>Honda CB Shine</option>
                  <option>Honda Unicorn</option>
                  <option>Honda CBR 150R</option>
                  <option>Honda X-Blade</option>
                  <option>Honda Hornet 2.0</option>
                  <option>Honda Dio</option>
                  <option>Honda CB500X</option>
                  <option>Honda CRF1100L Africa Twin</option>
                  <option>Honda CBR1000RR</option>
                  <option>Honda CB1000R</option>
                </select>
              </div>
            </div>

            {/* Enter Your Model */}
            <div>
              <label className="block mb-1">ENTER YOUR MODEL</label>
              <div className="relative flex items-center">
                <FaMotorcycle className="absolute left-3 text-red-400" />
                <input
                  name="enteredModel"
                  className="w-full p-2 pl-10 bg-gray-700 border border-gray-600 rounded"
                  placeholder="Enter Your Model"
                  type="text"
                  value={formData.enteredModel}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Year of Purchase */}
            <div>
              <label className="block mb-1">YEAR OF PURCHASE</label>
              <div className="relative flex items-center">
                <FaCalendarAlt className="absolute left-3 text-red-400" />
                <input
                  name="yearOfPurchase"
                  className="w-full p-2 pl-10 bg-gray-700 border border-gray-600 rounded"
                  placeholder="Year of Purchase"
                  type="text"
                  value={formData.yearOfPurchase}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Service Type */}
            <div>
              <label className="block mb-1">SERVICE TYPE</label>
              <div className="relative flex items-center">
                <FaWrench className="absolute left-3 text-red-400" />
                <select
                  name="serviceType"
                  className="w-full p-2 pl-10 bg-gray-700 border border-gray-600 rounded"
                  value={formData.serviceType}
                  onChange={handleChange}
                >
                  <option>Select Type</option>
                  <option value="Paid">Paid</option>
                  <option value="Free">Free</option>
                </select>
              </div>
            </div>

            {/* Registration Number */}
            <div>
              <label className="block mb-1">REGISTRATION NUMBER</label>
              <div className="relative flex items-center">
                <FaMotorcycle className="absolute left-3 text-red-400" />
                <input
                  name="registrationNumber"
                  className="w-full p-2 pl-10 bg-gray-700 border border-gray-600 rounded"
                  placeholder="Registration Number"
                  type="text"
                  value={formData.registrationNumber}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Booking Date */}
            <div>
              <label className="block mb-1">BOOKING DATE</label>
              <div className="relative flex items-center">
                <FaCalendarAlt className="absolute left-3 text-red-400" />
                <input
                  name="bookingDate"
                  className="w-full p-2 pl-10 bg-gray-700 border border-gray-600 rounded"
                  placeholder="Booking Date"
                  type="date"
                  value={formData.bookingDate}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Name */}
            <div>
              <label className="block mb-1">YOUR NAME</label>
              <div className="relative flex items-center">
                <FaUser className="absolute left-3 text-red-400" />
                <input
                  name="name"
                  className="w-full p-2 pl-10 bg-gray-700 border border-gray-600 rounded"
                  placeholder="Your Name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Email Address */}
            <div>
              <label className="block mb-1">EMAIL ADDRESS</label>
              <div className="relative flex items-center">
                <FaEnvelope className="absolute left-3 text-red-400" />
                <input
                  name="email"
                  className="w-full p-2 pl-10 bg-gray-700 border border-gray-600 rounded"
                  placeholder="Email Address"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Contact Number */}
            <div>
              <label className="block mb-1">CONTACT NUMBER</label>
              <div className="relative flex items-center">
                <FaPhone className="absolute left-3 text-red-400" />
                <input
                  name="contactNumber"
                  className="w-full p-2 pl-10 bg-gray-700 border border-gray-600 rounded"
                  placeholder="Contact Number"
                  type="text"
                  value={formData.contactNumber}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block mb-1">WRITE YOUR MESSAGE HERE</label>
              <div className="relative flex items-center">
                <FaPencilAlt className="absolute left-3 top-3 text-red-400" />
                <textarea
                  name="message"
                  className="w-full p-2 pl-10 bg-gray-700 border border-gray-600 rounded"
                  placeholder="Write Your Message Here"
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              className="w-full bg-red-600 p-2 rounded text-white font-bold"
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

export default ServiceBooking;
