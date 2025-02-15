import { useState } from "react";
import {
  FaBars,
  FaTachometerAlt,
  FaEnvelope,
  FaChartBar,
  FaUser,
  FaUserCircle,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import ManageAccount from "./ManageAccount";
import ManagePrice from "./ManagePrice";
import AdminDashboard from "./Dashboard";
import ManageAccPrice from "./ManageAccPrice";
import ManageOffer from "./ManageOffer";
import BookingReport from "./BookingReport";
import AMCReport from "./AMCReport";
import EWReport from "./EWReport";
import FinanceReport from "./FinanceReport";
import ProductEnquiryReport from "./ProductEnquiryReport";
import OfferReport from "./OfferReport";
import JoyClubReport from "./JoyClubReport";
import UserProfile from "./UserProfile";
import ChangePassword from "./ChangePassword";

const Dashboard = () => {
  const [active, setActive] = useState("Dashboard");
  const [selectedView, setSelectedView] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();
  const menuItems = [
    { name: "Dashboard", icon: <FaTachometerAlt /> },
    {
      name: "Manage",
      icon: <FaEnvelope />,
      subMenus: ["Account", "Price", "Accessories Price", "Offer"],
    },
    {
      name: "Report",
      icon: <FaChartBar />,
      subMenus: [
        "Booking Report",
        "AMC Report",
        "EW Report",
        "Finance Report",
        "Enquiry Report",
        "Offer Report",
        "Joy Club Report",
      ],
    },
    {
      name: "My Account",
      icon: <FaUser />,
      subMenus: ["Profile", "Change Password"],
    },
  ];

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="bg-gray-800 text-white w-64 space-y-6 py-7 px-2">
        <div className="flex items-center space-x-2 px-4">
          <FaBars className="text-xl" />
          <span className="text-2xl font-extrabold">Menu</span>
        </div>

        <nav>
          {menuItems.map((item) => (
            <div key={item.name}>
              <button
                className={`block w-full text-left py-2.5 px-4 rounded transition duration-200 ${
                  active === item.name ? "bg-gray-700" : "hover:bg-gray-700"
                }`}
                onClick={() => {
                  setActive(item.name);
                  setSelectedView(item.name);
                }}
              >
                <span className="flex items-center">
                  {item.icon}
                  <span className="ml-2">{item.name}</span>
                </span>
              </button>
              {item.subMenus && active === item.name && (
                <div className="ml-6 space-y-2">
                  {item.subMenus.map((sub) => (
                    <button
                      key={sub}
                      className="block w-full text-left py-1 px-4 rounded hover:bg-gray-600"
                      onClick={() => setSelectedView(sub)}
                    >
                      {sub}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-red-600 text-white py-4 px-6 flex justify-between items-center relative">
          <h1 className="text-xl font-bold">Admin Panel</h1>
          <div className="relative">
            <FaUserCircle
              className="text-2xl cursor-pointer"
              onClick={() => setShowDropdown(!showDropdown)}
            />
            {showDropdown && (
              <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded shadow-lg">
                <button
                  className="block w-full text-left px-4 py-2 hover:bg-gray-200"
                  onClick={() => {
                    setSelectedView("Profile");
                    setShowDropdown(false);
                  }}
                >
                  Profile
                </button>
                <button
                  className="block w-full text-left px-4 py-2 hover:bg-gray-200"
                  onClick={() => {
                    setSelectedView("Change Password");
                    setShowDropdown(false);
                  }}
                >
                  Change Password
                </button>
                <button
                  className="block w-full text-left px-4 py-2 text-red-600 hover:bg-gray-200"
                  onClick={() => navigate("/admin/login")}
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 p-6">
          {selectedView === "Account" ? (
            <ManageAccount />
          ) : selectedView === "Price" ? (
            <ManagePrice />
          ) : selectedView === "Dashboard" ? (
            <AdminDashboard />
          ) : selectedView === "Accessories Price" ? (
            <ManageAccPrice />
          ) : selectedView === "Offer" ? (
            <ManageOffer />
          ) : selectedView === "Booking Report" ? (
            <BookingReport />
          ) : selectedView === "AMC Report" ? (
            <AMCReport />
          ) : selectedView === "EW Report" ? (
            <EWReport />
          ) : selectedView === "Finance Report" ? (
            <FinanceReport />
          ) : selectedView === "Enquiry Report" ? (
            <ProductEnquiryReport />
          ) : selectedView === "Offer Report" ? (
            <OfferReport />
          ) : selectedView === "Joy Club Report" ? (
            <JoyClubReport />
          ) : selectedView === "Profile" ? (
            <UserProfile />
          ) : selectedView === "Change Password" ? (
            <ChangePassword />
          ) : (
            <AdminDashboard />
          )}
        </main>

        {/* Footer */}
        <footer className="bg-gray-800 text-white text-center py-4">
          <p>Services By Manthan IT Solutions</p>
        </footer>
      </div>
    </div>
  );
};

export default Dashboard;
