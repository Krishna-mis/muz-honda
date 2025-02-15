import React from "react";
import {
  FaBars,
  FaTachometerAlt,
  FaEnvelope,
  FaChartBar,
  FaUser,
  FaUserCircle,
  FaEye,
  FaComments,
  FaInfoCircle,
  FaFileAlt,
  FaLock,
  FaTag,
  FaMoneyBill,
  FaGift,
} from "react-icons/fa";

const AdminDashboard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {[
        { title: "Today Booking", color: "blue", icon: <FaEnvelope /> },
        { title: "Today AMC", color: "green", icon: <FaEye /> },
        { title: "Today EW", color: "red", icon: <FaComments /> },
        { title: "Today Enquiry", color: "teal", icon: <FaInfoCircle /> },
      ].map((card) => (
        <div
          key={card.title}
          className={`bg-white p-4 rounded-lg shadow-md border border-gray-300 border-l-4 border-${card.color}-500`}
        >
          <div className="flex justify-between items-center">
            <h2 className={`text-${card.color}-500 font-bold`}>{card.title}</h2>
            <span className="text-gray-400">{card.icon}</span>
          </div>
          <div className="mt-4 text-2xl font-bold">0</div>
        </div>
      ))}
    </div>
  );
};

export default AdminDashboard;
