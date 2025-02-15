import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;
function Scooter() {
  const [models, setModels] = useState([]);
  const [selectedModel, setSelectedModel] = useState(null);
  const [startIndex, setStartIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`${BASE_URL}/api/scooters`)
      .then((res) => res.json())
      .then((data) => {
        setModels(data);
        setSelectedModel(data[0]);
        setLoading(false);
      })
      .catch((error) => {
        toast.error("Error fetching scooters:", error);
        setError("Failed to load scooters.");
        setLoading(false);
      });
  }, []);

  const getItemsPerPage = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth < 640) return 1;
      if (window.innerWidth >= 640 && window.innerWidth < 1024) return 2;
      return 4;
    }
    return 4;
  };

  const [itemsPerPage, setItemsPerPage] = useState(getItemsPerPage());

  useEffect(() => {
    const handleResize = () => {
      setItemsPerPage(getItemsPerPage());
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleModelSelect = (model) => setSelectedModel(model);

  const handlePrevious = () =>
    setStartIndex((prevIndex) => Math.max(0, prevIndex - 1));

  const handleNext = () =>
    setStartIndex((prevIndex) =>
      prevIndex + 1 >= models.length ? prevIndex : prevIndex + 1
    );

  const visibleModels = models.slice(startIndex, startIndex + itemsPerPage);

  if (loading)
    return <div className="text-center text-lg font-bold">Loading...</div>;
  if (error) return <div className="text-center text-red-500">{error}</div>;

  return (
    <div className="container mx-auto p-4">
      <ToastContainer />
      <div className="relative flex justify-center items-center w-full mb-4 space-x-2">
        <button
          onClick={handlePrevious}
          className="p-2 bg-red-600 text-white rounded-full hover:bg-red-700 disabled:opacity-50"
          disabled={startIndex === 0}
        >
          <ChevronLeft size={24} />
        </button>

        <div className="flex justify-center items-center space-x-4 px-4">
          {visibleModels.map((model) => (
            <div
              key={model.id}
              className="card border-0 mr-4 cursor-pointer text-center bg-white w-44 max-w-full transition-transform transform hover:scale-105"
              onClick={() => handleModelSelect(model)}
            >
              <img
                src={`${BASE_URL}${model.nameImg}`}
                alt={model.name}
                className="mx-auto h-7"
              />
              <img
                src={`${BASE_URL}${model.bikeIcon}`}
                alt="Bike Icon"
                className="img-fluid mx-auto my-2 w-32 h-32 object-contain"
              />
            </div>
          ))}
        </div>

        <button
          onClick={handleNext}
          className="p-2 bg-red-600 text-white rounded-full hover:bg-red-700 disabled:opacity-50"
          disabled={startIndex + itemsPerPage >= models.length}
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {selectedModel && (
        <div className="mt-6">
          <div className="flex flex-col items-center justify-center mb-4">
            <img
              src={`${BASE_URL}${selectedModel.image}`}
              alt={selectedModel.name}
              className="w-full max-w-screen-lg max-h-full rounded-lg object-cover"
            />
            <Specs selectedModel={selectedModel} />
          </div>
        </div>
      )}
    </div>
  );
}

const Specs = ({ selectedModel }) => {
  if (!selectedModel) return null;

  return (
    <div className="flex flex-col lg:flex-row lg:justify-between items-center mt-10 gap-8">
      <div className="flex flex-col sm:flex-row gap-8 w-full lg:w-auto">
        {[
          {
            label: "ENGINE",
            value: selectedModel.specs.engine,
            icon: "/assets/engine.png",
          },
          {
            label: "POWER",
            value: selectedModel.specs.power,
            icon: "/assets/power.png",
          },
          {
            label: "TRANSMISSION",
            value: selectedModel.specs.transmission,
            icon: "/assets/transmission.png",
          },
        ].map((spec, index) => (
          <div
            key={index}
            className="flex items-center gap-4 w-full sm:w-auto justify-center"
          >
            <div className="w-10 h-10">
              <img
                src={spec.icon}
                alt={spec.label}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col items-center">
              <div className="font-bold text-red-500">{spec.value}</div>
              <div className="text-gray-500">{spec.label}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex gap-4 w-full sm:w-auto justify-center">
        <button className="px-4 sm:px-6 py-2 bg-red-600 text-white rounded-lg text-sm sm:text-base">
          EMI
        </button>

        <a
          href={`${BASE_URL}${selectedModel.specs.document}`}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 sm:px-6 py-2 bg-red-600 text-white rounded-lg text-sm sm:text-base"
        >
          E-Brochure
        </a>
      </div>
    </div>
  );
};

export default Scooter;
