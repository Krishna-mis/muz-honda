import React, { useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosPerson } from "react-icons/io";
import { MdAppRegistration } from "react-icons/md";

const OptInForm = () => {
  const [formData, setFormData] = useState({
    registration: "",
    name: "",
    mobile: "",
  });

  const [notifications, setNotifications] = useState({
    all: false,
    rcs: false,
    sms: false,
    obd: false,
    email: false,
    whatsapp: false,
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    if (name === "all") {
      setNotifications((prev) => {
        const newState = { ...prev };
        Object.keys(newState).forEach((key) => {
          newState[key] = checked;
        });
        return newState;
      });
    } else {
      setNotifications((prev) => ({
        ...prev,
        [name]: checked,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/opt-in`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ ...formData, notifications }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        setMessage("Opt-In Request Submitted Successfully!");
        setFormData({ registration: "", name: "", mobile: "" });
        setNotifications({
          all: false,
          rcs: false,
          sms: false,
          obd: false,
          email: false,
          whatsapp: false,
        });
      } else {
        setMessage(`Error: ${data.message}`);
      }
    } catch (error) {
      setMessage("Network error. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-red-600 mb-6 text-center mt-4">
        OPTAIN FORM
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col lg:flex-row items-center lg:items-start min-h-screen gap-8">
          {/* Left Side: Form */}
          <div className="w-full lg:w-1/2 px-4 md:px-10">
            <div className="space-y-4">
              <div>
                <label className="text-gray-500 block mb-1">
                  REGISTRATION NO.
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-3 flex items-center">
                    <MdAppRegistration className="text-red-700" />
                  </span>
                  <input
                    type="text"
                    name="registration"
                    placeholder="ENTER REGISTRATION NO."
                    className="w-full pl-10 pr-3 py-2 border rounded-md"
                    value={formData.registration}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-gray-500 block mb-1">NAME</label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-3 flex items-center">
                      <IoIosPerson className="text-red-700" />
                    </span>
                    <input
                      type="text"
                      name="name"
                      placeholder="ENTER NAME HERE"
                      className="w-full pl-10 pr-3 py-2 border rounded-md"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="text-gray-500 block mb-1">MOBILE</label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-3 flex items-center">
                      <FaPhoneAlt className="text-red-700" />
                    </span>
                    <input
                      type="tel"
                      name="mobile"
                      placeholder="ENTER YOUR MOBILE"
                      className="w-full pl-10 pr-3 py-2 border rounded-md"
                      value={formData.mobile}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="mt-4">
                <p className="text-sm text-gray-600 mb-2">
                  By clicking Sign Up, you agree to our{" "}
                  <a href="#" className="text-blue-500">
                    Terms of Service
                  </a>{" "}
                  and that you have read our{" "}
                  <a href="#" className="text-blue-500">
                    Privacy Policy
                  </a>
                  .
                </p>

                <div className="bg-gray-600 text-white p-2 rounded-md mb-4">
                  <p className="text-sm">
                    Receive Updates and Notifications through
                  </p>
                </div>

                <div className="space-y-2">
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      name="all"
                      checked={notifications.all}
                      onChange={handleCheckboxChange}
                      className="form-checkbox"
                    />
                    <span>Check all</span>
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
                    {["rcs", "sms", "obd", "email", "whatsapp"].map((type) => (
                      <label key={type} className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          name={type}
                          checked={notifications[type]}
                          onChange={handleCheckboxChange}
                          className="form-checkbox"
                        />
                        <span className="capitalize">{type}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700 transition-colors"
                disabled={loading}
              >
                {loading ? "Submitting..." : "SUBMIT"}
              </button>

              {message && <p className="text-center mt-2 text-lg">{message}</p>}
            </div>
          </div>

          {/* Right Side: YouTube Video */}
          <div className="w-full lg:w-1/2 px-4">
            <div className="relative w-full h-64 lg:h-96">
              <iframe
                className="w-full h-full rounded-md"
                src="https://www.youtube.com/embed/LUG9QsR3TYY?si=OOvry2bPVA5vpjZI"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default OptInForm;
