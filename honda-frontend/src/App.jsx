import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home/Home";
import Finance from "./components/Finance";
import Contact from "./components/Contact";
import AboutUs from "./components/AboutUs";
import MotarCycle from "./components/MotarCycle";
import Scooter from "./components/Scooter";
import ServiceBooking from "./components/ServiceBooking";
import AnnualMaintenanceContract from "./components/AnnualMaintenanceContract";
import ExtendedWarranty from "./components/ExtendedWarranty";
import Gallery from "./components/Gallery";
import OptInForm from "./components/OptInForm";
import TermsAndConditions from "./components/TermsAndConditions";
import OfferForm from "./components/OfferForm";
import SocialSidebar from "./components/SocialSidebar";
import AdminLogin from "./components/Admin/AdminLogin";
import AdminDashboard from "./components/Admin/AdminDashboard";

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
};

function App() {
  const location = useLocation();

  // Check if the current path is "/admin/login"
  const isAdminRoute = location.pathname.startsWith("/admin");

  return (
    <>
      {!isAdminRoute && <SocialSidebar />}
      {!isAdminRoute && <Header />}

      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/finance" element={<Finance />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/motorcycle" element={<MotarCycle />} />
        <Route path="/scooters" element={<Scooter />} />
        <Route path="/service-booking" element={<ServiceBooking />} />
        <Route path="/amc" element={<AnnualMaintenanceContract />} />
        <Route path="/extendedWarranty" element={<ExtendedWarranty />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/optain" element={<OptInForm />} />
        <Route path="/terms-conditions" element={<TermsAndConditions />} />
        <Route path="/offers" element={<OfferForm />} />

        {/* Admin Login */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
      </Routes>

      {!isAdminRoute && <Footer />}
    </>
  );
}

export default App;
