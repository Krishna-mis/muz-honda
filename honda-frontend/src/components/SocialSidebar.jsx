import React, { useState } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaWhatsapp,
  FaLinkedinIn,
  FaInstagram,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

const SocialSidebar = () => {
  const [isVisible, setIsVisible] = useState(true);

  const socialLinks = [
    { name: "Facebook", bg: "bg-blue-800", icon: <FaFacebookF />, href: "#" },
    { name: "Twitter", bg: "bg-blue-400", icon: <FaTwitter />, href: "#" },
    {
      name: "WhatsApp",
      bg: "bg-green-500",
      icon: <FaWhatsapp />,
      href: "https://wa.me/7360001201",
    },
    { name: "LinkedIn", bg: "bg-blue-600", icon: <FaLinkedinIn />, href: "#" },
    { name: "Instagram", bg: "bg-red-600", icon: <FaInstagram />, href: "#" },
  ];

  return (
    <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50">
      <div
        className={`transition-transform duration-300 ease-in-out transform ${
          isVisible ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="block transition-transform hover:scale-110"
              aria-label={`Visit our ${link.name} page`}
              title={`Visit our ${link.name} page`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className={`${link.bg} p-2 sm:p-4 mb-0`}>
                <div className="text-white text-[10px] sm:text-[14px]">
                  {link.icon}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Toggle Button */}
      <button
        onClick={() => setIsVisible(!isVisible)}
        className={`absolute top-1/2 -translate-y-1/2 ${
          isVisible ? "right-full" : "right-0"
        } bg-gray-800 text-white p-1 sm:p-2 rounded-l`}
        aria-label={isVisible ? "Hide social sidebar" : "Show social sidebar"}
        title={isVisible ? "Hide social sidebar" : "Show social sidebar"}
      >
        {isVisible ? <FaChevronRight size={14} /> : <FaChevronLeft size={14} />}
      </button>
    </div>
  );
};

export default SocialSidebar;
