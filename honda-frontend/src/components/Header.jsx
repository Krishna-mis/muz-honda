import { useState, useEffect } from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaBars,
  FaTimes,
  FaChevronDown,
} from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [scrolling, setScrolling] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(location.pathname);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "HOME", path: "/" },
    { name: "MOTORCYCLE", path: "/motorcycle" },
    { name: "SCOOTERS", path: "/scooters" },
    {
      name: "SERVICES",
      path: "/services",
      hasDropdown: true,
      dropdownItems: [
        { name: "BOOK FOR SERVICE", path: "/service-booking" },
        { name: "AMC", path: "/amc" },
        { name: "EXTENDED WARRANTY", path: "/extendedWarranty" },
      ],
    },
    { name: "FINANCE", path: "/finance" },
    {
      name: "NETWORKS",
      path: "/networks",
      hasDropdown: true,
      dropdownItems: [{ name: "DEALERS", path: "/dealers" }],
    },
    { name: "OFFERS", path: "/offers" },
    { name: "GALLERY", path: "/gallery" },
  ];

  const handleNavClick = (path) => {
    setActiveTab(path);
    navigate(path);
    setIsMenuOpen(false);
    setActiveDropdown(null);
  };

  const toggleDropdown = (name) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  return (
    <div className="w-full z-50">
      {/* Top Info Bar */}
      <div
        className={`bg-white py-2 transition-all duration-300 ${
          scrolling ? "hidden" : "block"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-2">
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 text-sm">
              <div className="flex items-center gap-2">
                <FaPhoneAlt className="text-red-600 w-4 h-4" />
                <span className="font-semibold">Sales:</span>
                <span>7360001201</span>
              </div>
              <div className="flex items-center gap-2">
                <FaPhoneAlt className="text-red-600 w-4 h-4" />
                <span className="font-semibold">Service:</span>
                <span>7360001206</span>
              </div>
              <div className="flex items-center gap-2">
                <FaEnvelope className="text-red-600 w-4 h-4" />
                <span className="font-semibold">Email:</span>
                <span>hondamuzaffarpur@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div>
        <div
          className={`bg-white shadow-md transition-all duration-300 ${
            scrolling ? "fixed top-0 w-full z-50" : "z-50"
          }`}
        >
          <div className="container mx-auto px-4 py-2">
            <div className="grid grid-cols-2 md:grid-cols-[auto_1fr] items-center">
              <div className="flex items-center">
                <img
                  src="/logo.png"
                  alt="Honda logo"
                  className="h-12 md:h-12 lg:h-16 w-auto cursor-pointer"
                  onClick={() => handleNavClick("/")}
                />
              </div>

              <div className="flex flex-col items-end w-full">
                <div className="hidden md:flex items-center text-right gap-3 mb-2">
                  <img
                    src="/assets/honda-logo.png"
                    alt="Brand Icon"
                    className="h-auto w-auto max-h-8 lg:max-h-[20px] object-contain"
                  />
                  <h1 className="text-red-600 text-xl lg:text-2xl font-bold">
                    Muzaffarpur Honda
                  </h1>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                  <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="text-red-600 p-2"
                  >
                    {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                  </button>
                </div>

                {/* Navigation Menu */}
                <nav
                  className={`absolute md:relative left-0 right-0 top-full
    bg-white md:bg-transparent md:shadow-none shadow-lg transition-all duration-300
    ${isMenuOpen ? "block" : "hidden md:block"}
    w-full md:w-auto z-50`}
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-end w-full md:w-auto">
                    {navItems.map((item) => (
                      <div
                        key={item.path}
                        className="relative group transition-all duration-200 transform hover:scale-105 hover:-translate-y-1"
                      >
                        <button
                          className={`w-full md:w-auto px-6 py-3 flex items-center justify-between md:justify-center gap-2
            text-sm font-semibold cursor-pointer hover:font-bold
            ${
              activeTab === item.path ? "bg-red-600 text-white" : "text-red-600"
            }`}
                          onClick={() =>
                            item.hasDropdown
                              ? toggleDropdown(item.name)
                              : handleNavClick(item.path)
                          }
                        >
                          {item.name}
                          {item.hasDropdown && (
                            <FaChevronDown
                              className={`transition-transform duration-200 ${
                                activeDropdown === item.name ? "rotate-180" : ""
                              }`}
                            />
                          )}
                        </button>

                        {item.hasDropdown && (
                          <div
                            className={`md:absolute md:top-full md:left-0 bg-white w-full md:w-48 shadow-lg
      transition-all duration-200
      ${activeDropdown === item.name ? "block" : "hidden"}
      md:group-hover:block`}
                          >
                            {item.dropdownItems.map((dropItem) => (
                              <button
                                key={dropItem.path}
                                className={`w-full px-6 py-3 text-sm text-red-600 hover:font-bold text-left
          ${activeTab === dropItem.path ? "bg-red-600 text-white" : ""}`}
                                onClick={() => handleNavClick(dropItem.path)}
                              >
                                {dropItem.name}
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
