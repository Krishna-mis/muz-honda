import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const BASE_URL = import.meta.env.VITE_API_BASE_URL;

const HondaTwoWheelers = () => {
  const navigate = useNavigate();
  const [bikes, setBikes] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const itemsPerPage = 3;

  useEffect(() => {
    const fetchBikes = async () => {
      try {
        const response = await fetch(`${BASE_URL}/api/bikes`);
        const data = await response.json();
        setBikes(data);
      } catch (error) {
        toast.error("Error fetching bikes:", error);
      }
    };
    fetchBikes();
  }, []);

  const maxIndex = Math.ceil(bikes.length / itemsPerPage) - 1;

  const nextSlide = () => {
    setActiveIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : maxIndex));
  };

  return (
    <div className="container mx-auto p-4 bg-white text-gray-800 custom-margin-top">
      <ToastContainer />
      <div className="px-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        {/* About Section */}
        <div className="w-full md:w-1/2">
          <h2 className="text-red-600 text-3xl font-bold mb-4">ABOUT US</h2>
          <h3 className="text-black text-xl font-bold mb-2">
            HONDA IS THE WORLD'S LARGEST MANUFACTURER OF TWO WHEELERS
          </h3>
          <p className="text-gray-600 mb-4">
            Muzaffarpur Honda is Honda Exclusive Authorized Dealership in
            Muzaffarpur. Muzaffarpur Honda diversified into Honda 2 Wheelers
            Dealership in September 2016.
          </p>
          <button
            className="bg-red-600 text-white px-4 py-2 rounded text-base cursor-pointer hover:bg-red-700 transition-colors"
            onClick={() => navigate("/about")}
          >
            KNOW MORE...
          </button>
        </div>

        {/* Models Section */}
        <div className="w-full md:w-1/2 mt-6 md:mt-0 relative">
          <h3 className="text-red-600 text-xl font-bold mb-4">
            EXPLORE OTHER MODELS
          </h3>

          {/* Carousel Container */}
          <div className="relative overflow-hidden">
            <div className="flex">
              {bikes
                .slice(
                  activeIndex * itemsPerPage,
                  (activeIndex + 1) * itemsPerPage
                )
                .map((bike) => (
                  <div key={bike.id} className="w-1/3 px-2">
                    <img
                      src={`${BASE_URL}${bike.nameImg}`}
                      alt="Bike Name"
                      className="mx-auto h-7"
                    />
                    <img
                      src={`${BASE_URL}${bike.bikeIcon}`}
                      alt="Bike Icon"
                      className="mx-auto my-2 w-32 h-32 object-contain"
                    />
                  </div>
                ))}
            </div>

            {/* Carousel Navigation */}
            <button
              className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full"
              onClick={prevSlide}
            >
              ❮
            </button>
            <button
              className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full"
              onClick={nextSlide}
            >
              ❯
            </button>

            {/* Dot Navigation */}
            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {[...Array(maxIndex + 1)].map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === activeIndex
                      ? "bg-red-600"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                  onClick={() => setActiveIndex(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HondaTwoWheelers;
