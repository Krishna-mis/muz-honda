import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

function MotarCycle() {
  const [models, setModels] = useState([]);
  const [selectedModel, setSelectedModel] = useState(null);
  const [startIndex, setStartIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(4);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBikes = async () => {
      try {
        const response = await fetch(`${BASE_URL}/api/bikes`);
        if (!response.ok) throw new Error("Failed to fetch data");
        const data = await response.json();

        const updatedData = data.map((bike) => ({
          ...bike,
          nameImg: `${BASE_URL}${bike.nameImg}`,
          bikeIcon: `${BASE_URL}${bike.bikeIcon}`,
          image: `${BASE_URL}${bike.image}`,
          specs: {
            ...bike.specs,
            document: `${BASE_URL}${bike.specs.document}`,
          },
        }));

        setModels(updatedData);
        setSelectedModel(updatedData[0] || null);
      } catch (err) {
        toast.error(err.message);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBikes();
  }, []);

  const handleModelSelect = (model) => setSelectedModel(model);
  const handlePrevious = () => setStartIndex((prev) => Math.max(0, prev - 1));
  const handleNext = () =>
    setStartIndex((prev) => (prev + 1 >= models.length ? prev : prev + 1));

  if (loading) return <p className="text-center">Loading...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

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
          {models.slice(startIndex, startIndex + itemsPerPage).map((model) => (
            <div
              key={model.id}
              className="cursor-pointer text-center bg-white w-44 max-w-full transition-transform hover:scale-105"
              onClick={() => handleModelSelect(model)}
            >
              <img
                src={model.nameImg}
                alt="Bike Name"
                className="mx-auto h-7"
              />
              <img
                src={model.bikeIcon}
                alt="Bike Icon"
                className="mx-auto my-2 w-32 h-32 object-contain"
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
              src={selectedModel.image}
              alt={selectedModel.name}
              className="w-full max-w-screen-lg max-h-full rounded-lg object-cover"
            />
            <div className="flex flex-col lg:flex-row lg:justify-between items-center mt-10 gap-8">
              <div className="flex flex-col sm:flex-row gap-8 w-full lg:w-auto">
                <div className="flex items-center gap-4 w-full sm:w-auto justify-center">
                  <div className="w-10 h-10">
                    <img
                      src="/assets/engine.png"
                      alt="Engine Logo"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="font-bold text-red-500">
                      {selectedModel.specs.engine}
                    </div>
                    <div className="text-gray-500">ENGINE</div>
                  </div>
                </div>
                <div className="flex items-center gap-4 w-full sm:w-auto justify-center">
                  <div className="w-10 h-10">
                    <img
                      src="/assets/power.png"
                      alt="Power Logo"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="font-bold text-red-500">
                      {selectedModel.specs.power}
                    </div>
                    <div className="text-gray-500">POWER</div>
                  </div>
                </div>
                <div className="flex items-center gap-4 w-full sm:w-auto justify-center">
                  <div className="w-10 h-10">
                    <img
                      src="/assets/transmission.png"
                      alt="Transmission Logo"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="font-bold text-red-500">
                      {selectedModel.specs.transmission}
                    </div>
                    <div className="text-gray-500">TRANSMISSION</div>
                  </div>
                </div>
              </div>
              <div className="flex gap-4 w-full sm:w-auto justify-center">
                <button className="px-4 sm:px-6 py-2 bg-red-600 text-white rounded-lg cursor-pointer text-sm sm:text-base">
                  EMI
                </button>
                <a
                  href={selectedModel.specs.document}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 sm:px-6 py-2 bg-red-600 text-white rounded-lg cursor-pointer text-sm sm:text-base"
                >
                  E-Brochure
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default MotarCycle;
