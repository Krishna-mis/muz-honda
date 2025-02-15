import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const MapContentSplit = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center w-full bg-gray-50">
      {/* Map Section */}
      <div className="relative w-full lg:w-1/2 flex-1 min-h-[300px] lg:min-h-[500px] rounded-lg overflow-hidden shadow-md">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3582.5874570086066!2d85.36281629999999!3d26.112382200000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed10d71b13b441%3A0x490d749a98b9ee40!2sMuzaffarpur%20Honda!5e0!3m2!1sen!2sin!4v1738667567444!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute top-0 left-0 w-full h-full"
        ></iframe>
      </div>

      {/* Contact Information Section */}
      <div className="w-full lg:w-1/2 flex-1 min-h-[300px] lg:min-h-[500px] bg-gray-900 text-white p-6 sm:p-8 md:p-10 lg:p-12">
        <div className="flex flex-col items-start justify-start h-full">
          <div className="text-left w-full max-w-md mx-auto">
            {/* Header */}
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/logo.png"
                alt="Honda Logo"
                className="h-8 w-auto sm:h-10"
              />
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">
                Muzaffarpur Honda
              </h1>
            </div>
            <p className="text-base sm:text-lg md:text-xl mb-4">
              Sales | Services
            </p>

            {/* Contact Details */}
            <div className="space-y-3">
              <p className="flex items-start sm:items-center text-xs sm:text-sm md:text-base">
                <FaMapMarkerAlt className="text-red-500 mr-2 flex-shrink-0 w-4 h-4" />
                <span>
                  Muzaffarpur Honda, NH28 opposite Science College, Gobarsahi,
                  Muzaffarpur.
                </span>
              </p>

              <p className="flex items-center text-xs sm:text-sm md:text-base">
                <FaPhoneAlt className="text-green-500 mr-2 flex-shrink-0 w-4 h-4" />
                <span>7360001201, 7360001206</span>
              </p>

              <p className="flex items-center text-xs sm:text-sm md:text-base">
                <FaEnvelope className="text-red-500 mr-2 flex-shrink-0 w-4 h-4" />
                <span>Sales: hondamuzaffarpur@gmail.com</span>
              </p>

              <p className="flex items-center text-xs sm:text-sm md:text-base">
                <FaEnvelope className="text-red-500 mr-2 flex-shrink-0 w-4 h-4" />
                <span>Support: hondamuzaffarpurservice@gmail.com</span>
              </p>
            </div>

            {/* Opening Hours */}
            <div className="border-t border-gray-600 pt-4 mt-4">
              <p className="text-sm sm:text-base md:text-lg mb-2">
                Opening Hours : [Sales | Services]
              </p>
              <p className="text-xs sm:text-sm md:text-base">
                Sunday-Friday: 9:30 AM - 6:30 PM
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapContentSplit;
