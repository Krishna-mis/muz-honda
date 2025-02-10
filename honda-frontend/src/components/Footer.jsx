import React from "react";
import { Facebook, Instagram } from "lucide-react";
import Icon from "../assets/images/logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="relative bg-black text-gray-300 px-4 sm:px-8 md:px-16 lg:px-40 py-10 mt-auto text-sm sm:text-base">
      {/* Dark overlay background */}
      <div className="absolute inset-0 bg-black/90 z-0"></div>

      <div className="container mx-auto relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo Section */}
          <div className="space-y-4 text-left">
          <img
  src={Icon}
  alt="Honda Logo"
  className="h-20 sm:h-24 md:h-28 w-auto mx-auto md:mx-0" // Further increased height
/>

          </div>

          {/* Navigation Links */}
          <div className="space-y-4 text-left">
            <h3 className="text-white text-sm sm:text-lg font-semibold mb-4">
              Navigation
            </h3>
            <ul className="space-y-2">
              {[
                { name: "Finance", route: "/finance" },
                { name: "EMI Calculator", route: "#" },
                { name: "Contact Us", route: "/contact" },
                { name: "About Us", route: "/about" },
                { name: "Terms & Conditions", route: "/terms-conditions" },
                { name: "Privacy Policy", route: "/finance" },
              ].map((item) => (
                <li
                  key={item.name}
                  className="hover:text-red-500 transition-colors"
                >
                  <Link to={item.route} className="flex items-center space-x-2">
                    <span className="text-red-500">›</span>
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Section */}
          <div className="space-y-4 text-left">
            <h3 className="text-white text-sm sm:text-lg font-semibold mb-4">
              Services
            </h3>
            <ul className="space-y-2">
              {[
                { name: "Book For Service", route: "/service-booking" },
                { name: "Book For AMC", route: "/amc" },
                { name: "Extended Warranty", route: "/extendedWarranty" },
                { name: "Optain", route: "/optain" },
              ].map((item) => (
                <li
                  key={item.name}
                  className="hover:text-red-500 transition-colors"
                >
                  <Link to={item.route} className="flex items-center space-x-2">
                    <span className="text-red-500">›</span>
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div className="space-y-4 text-left">
            <h3 className="text-white text-sm sm:text-lg font-semibold mb-4">
              Contact us
            </h3>
            <div className="space-y-3">
              <p className="flex items-start space-x-2">
                <span className="text-red-500">›</span>
                <span>
                  Muzaffarpur Honda (CHANDRA BHUSHAN AUTOMOBILES), NH28 opposite
                  Science College, Gobarsahi, Muzaffarpur
                </span>
              </p>
              <p className="flex items-center space-x-2">
                <span className="text-red-500">›</span>
                <span>Sales: 7360001201</span>
              </p>
              <p className="flex items-center space-x-2">
                <span className="text-red-500">›</span>
                <span>Support: 7360001206</span>
              </p>
            </div>

            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
