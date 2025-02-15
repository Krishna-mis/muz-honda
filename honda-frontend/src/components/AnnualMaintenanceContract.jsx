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
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.model ||
      !formData.yearOfPurchase ||
      !formData.registrationNumber ||
      !formData.name ||
      !formData.email ||
      !formData.contactNumber
    ) {
      toast.error("All fields are required except message.", {
        position: "top-right",
      });
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
        toast.success(data.message || "Enquiry submitted successfully!", {
          position: "top-right",
        });
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
        toast.error(data.message || "Failed to submit enquiry", {
          position: "top-right",
        });
      }
    } catch (error) {
      toast.error("Internal Server Error", { position: "top-right" });
    }
  };

  return (
    <div className="container mx-auto p-4">
      <ToastContainer />
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
              src="https://www.youtube.com/embed/your_video_id"
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
          <form onSubmit={handleSubmit}>
            {[
              {
                label: "SELECT MODEL",
                id: "model",
                type: "select",
                icon: <FaMotorcycle />,
                options: [
                  "Honda Activa 6G",
                  "Honda CB Shine",
                  "Honda Unicorn",
                  "Honda CBR 150R",
                  "Honda X-Blade",
                  "Honda Hornet 2.0",
                  "Honda Dio",
                  "Honda CB500X",
                  "Honda CRF1100L Africa Twin",
                  "Honda CBR1000RR",
                  "Honda CB1000R",
                ],
              },
              {
                label: "YEAR OF PURCHASE",
                id: "yearOfPurchase",
                type: "text",
                icon: <FaCalendarAlt />,
              },
              {
                label: "REGISTRATION NUMBER",
                id: "registrationNumber",
                type: "text",
                icon: <FaIdCard />,
              },
              {
                label: "YOUR NAME",
                id: "name",
                type: "text",
                icon: <FaUser />,
              },
              {
                label: "EMAIL ADDRESS",
                id: "email",
                type: "email",
                icon: <FaEnvelope />,
              },
              {
                label: "CONTACT NUMBER",
                id: "contactNumber",
                type: "text",
                icon: <FaPhone />,
              },
            ].map(({ label, id, type, icon, options }) => (
              <div className="mb-4" key={id}>
                <label className="block text-gray-400 mb-2" htmlFor={id}>
                  {label}
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-red-400">
                    {icon}
                  </span>
                  {type === "select" ? (
                    <select
                      id={id}
                      value={formData[id]}
                      onChange={handleChange}
                      className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600 pl-10"
                    >
                      <option value="">Select Model</option>
                      {options.map((option) => (
                        <option
                          key={option}
                          value={option.toLowerCase().replace(/\s+/g, "-")}
                        >
                          {option}
                        </option>
                      ))}
                    </select>
                  ) : (
                    <input
                      type={type}
                      id={id}
                      value={formData[id]}
                      onChange={handleChange}
                      placeholder={label}
                      className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600 pl-10"
                    />
                  )}
                </div>
              </div>
            ))}

            <div className="mb-4">
              <label className="block text-gray-400 mb-2" htmlFor="message">
                YOUR MESSAGE FOR US
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message here"
                className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600"
              ></textarea>
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
