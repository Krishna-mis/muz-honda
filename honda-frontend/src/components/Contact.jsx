import React, { useState } from "react";
import {
  User,
  Mail,
  Phone,
  MapPin,
  MessageCircle,
  HelpCircle,
} from "lucide-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    reason: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/contact`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();
      if (response.ok) {
        toast.success("Contact request submitted successfully!", {
          position: "top-right",
        });
        setFormData({
          name: "",
          email: "",
          contact: "",
          reason: "",
          message: "",
        });
      } else {
        toast.error(` Error: ${data.message}`);
      }
    } catch (error) {
      toast.error("Network error. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-10 py-10">
      <ToastContainer />
      <div className="flex flex-col lg:flex-row gap-10">
        {/* Left Section */}
        <div className="w-full lg:w-1/2 space-y-6">
          <h2 className="text-red-600 text-2xl font-bold">GET IN TOUCH</h2>
          <hr className="border-gray-300" />
          <div>
            <h3 className="text-black text-lg font-bold mb-2">ADDRESS</h3>
            <div className="flex items-start gap-3">
              <MapPin className="text-red-600 flex-shrink-0 mt-1" size={20} />
              <p className="text-gray-600">
                Muzaffarpur Honda (CHANDRA BHUSHAN AUTOMOBILES), NH28 opposite
                Science College, Gobarsahi, Muzaffarpur
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-black text-lg font-bold mb-2">EMAIL</h3>
            <div className="flex items-center gap-3">
              <Mail className="text-red-600 flex-shrink-0" size={20} />
              <p className="text-gray-600">hondamuzaffarpur@gmail.com</p>
            </div>
          </div>

          <div>
            <h3 className="text-black text-lg font-bold mb-2">PHONE</h3>
            <div className="flex items-center gap-3">
              <Phone className="text-red-600 flex-shrink-0" size={20} />
              <p className="text-gray-600">7360001201 / 7360001206</p>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-1/2">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="name"
              >
                YOUR NAME
              </label>
              <div className="relative">
                <User
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-red-600"
                  size={20}
                />
                <input
                  className="w-full py-2 pl-10 pr-3 border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500"
                  id="name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="YOUR NAME"
                  required
                />
              </div>
            </div>

            <div>
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                EMAIL ADDRESS
              </label>
              <div className="relative">
                <Mail
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-red-600"
                  size={20}
                />
                <input
                  className="w-full py-2 pl-10 pr-3 border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500"
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="EMAIL ADDRESS"
                  required
                />
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-4">
              <div className="w-full md:w-1/2">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="contact"
                >
                  CONTACT NUMBER
                </label>
                <div className="relative">
                  <Phone
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-red-600"
                    size={20}
                  />
                  <input
                    className="w-full py-2 pl-10 pr-3 border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500"
                    id="contact"
                    type="text"
                    name="contact"
                    value={formData.contact}
                    onChange={handleChange}
                    placeholder="CONTACT NUMBER"
                    required
                  />
                </div>
              </div>

              <div className="w-full md:w-1/2">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="reason"
                >
                  REASON
                </label>
                <div className="relative">
                  <HelpCircle
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-red-600"
                    size={20}
                  />
                  <select
                    className="w-full py-2 pl-10 pr-3 border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 bg-white"
                    id="reason"
                    name="reason"
                    value={formData.reason}
                    onChange={handleChange}
                    required
                  >
                    <option value="">CHOOSE ...</option>
                    <option value="Inquiry">Inquiry</option>
                    <option value="Support">Support</option>
                    <option value="Feedback">Feedback</option>
                  </select>
                </div>
              </div>
            </div>

            <div>
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="message"
              >
                YOUR MESSAGE FOR US
              </label>
              <div className="relative">
                <MessageCircle
                  className="absolute left-3 top-3 text-red-600"
                  size={20}
                />
                <textarea
                  className="w-full py-2 pl-10 pr-3 border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500"
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="WRITE YOUR MESSAGE HERE"
                  required
                ></textarea>
              </div>
            </div>

            <button
              className="w-full md:w-auto bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-8 rounded focus:outline-none focus:ring-2 focus:ring-red-500 transition-colors"
              type="submit"
              disabled={loading}
            >
              {loading ? "Submitting..." : "SUBMIT"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
