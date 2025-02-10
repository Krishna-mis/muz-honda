import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

function Scooter() {
  const models = [
    {
      id: 1,
      nameImg: "/assets/scooter/name1.webp",
      bikeIcon: "/assets/scooter/bikeIcon1.webp",
      image: "/assets/scooter/banner1.jpg",
      specs: {
        engine: "124 cc",
        power: "8.17 BHP",
        transmission: "Automatic",
        document: "/assets/scooter/doc1.pdf",
      },
    },
    {
      id: 2,
      nameImg: "/assets/scooter/name2.webp",
      bikeIcon: "/assets/scooter/bikeIcon2.webp",
      image: "/assets/scooter/banner2.webp",
      specs: {
        engine: "109.51cc",
        power: "5.71kw @8000rpm",
        transmission: "Automatic",
        document: "/assets/scooter/doc2.pdf",
      },
    },
    {
      id: 3,
      nameImg: "/assets/scooter/name3.webp",
      bikeIcon: "/assets/scooter/bikeIcon3.webp",
      image: "/assets/scooter/banner3.webp",
      specs: {
        engine: "123.92 cc",
        power: "6.09 kW @ 6250 rpm",
        transmission: "4 stroke, SI Engine",
        document: "/assets/scooter/doc3.pdf",
      },
    },
    {
      id: 4,
      nameImg: "/assets/scooter/name4.webp",
      bikeIcon: "/assets/scooter/bikeIcon4.webp",
      image: "/assets/scooter/banner4.webp",
      specs: {
        engine: "109.51 cc",
        power: "5.77kW @ 8000 rpm",
        transmission: "Automatic",
        document: "/assets/scooter/doc4.pdf",
      },
    },
    {
      id: 5,
      nameImg: "/assets/scooter/name5.webp",
      bikeIcon: "/assets/scooter/bikeIcon5.webp",
      image: "/assets/scooter/banner5.webp",
      specs: {
        engine: "109.51 cc",
        power: "5.77kW @ 8000 rpm",
        transmission: "Automatic",
        document: "/assets/scooter/doc5.pdf",
      },
    },
    {
      id: 6,
      nameImg: "/assets/scooter/name6.webp",
      bikeIcon: "/assets/scooter/bikeIcon6.webp",
      image: "/assets/scooter/banner6.webp",
      specs: {
        engine: "109.51 cc",
        power: "5.77kW @ 8000 rpm",
        transmission: "Automatic",
        document: "/assets/scooter/doc6.pdf",
      },
    },
  ];

  const [selectedModel, setSelectedModel] = useState(models[0]);
  const [startIndex, setStartIndex] = useState(0);
  const getItemsPerPage = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth < 640) {
        return 1; // Mobile (sm)
      } else if (window.innerWidth >= 640 && window.innerWidth < 1024) {
        return 2; // Tablet (md)
      } else {
        return 4; // Desktop (lg and above)
      }
    }
    return 4; // Default (if window is undefined)
  };

  const [itemsPerPage, setItemsPerPage] = useState(getItemsPerPage());
  // Update items per page on window resize
  React.useEffect(() => {
    const handleResize = () => {
      setItemsPerPage(getItemsPerPage());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleModelSelect = (model) => {
    setSelectedModel(model);
  };

  const handlePrevious = () => {
    setStartIndex((prevIndex) => Math.max(0, prevIndex - 1));
  };

  const handleNext = () => {
    setStartIndex((prevIndex) =>
      prevIndex + 1 >= models.length ? prevIndex : prevIndex + 1
    );
  };

  const visibleModels = models.slice(startIndex, startIndex + itemsPerPage);

  const Specs = () => {
    if (!selectedModel) return null;

    return (
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

          {/* E-Brochure Button to open the document in a new tab */}
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
    );
  };

  return (
    <div className="container mx-auto p-4">
      <div className="relative flex justify-center items-center w-full mb-4 space-x-2">
        <button
          onClick={handlePrevious}
          className="p-2 bg-red-600 text-white rounded-full hover:bg-red-700 disabled:opacity-50 cursor-pointer"
          disabled={startIndex === 0}
        >
          <ChevronLeft size={24} />
        </button>

        <div className="flex justify-center items-center space-x-4 px-4">
          {visibleModels.map((model) => (
            <div
              key={model.id} // Use unique id for key and comparison
              className="card border-0 mr-4 cursor-pointer text-center bg-white w-44 max-w-full transition-transform transform hover:scale-105"
              onClick={() => handleModelSelect(model)}
            >
              {/* Name Image */}
              <img
                src={model.nameImg}
                alt={model.name}
                className="mx-auto h-7" // Adjust height for logo image
              />

              {/* Bike Icon */}
              <img
                src={model.bikeIcon}
                alt="Bike Icon"
                className="img-fluid mx-auto my-2 w-32 h-32 object-contain" // Adjust size and spacing for bike icon
              />
            </div>
          ))}
        </div>

        <button
          onClick={handleNext}
          className="p-2 bg-red-600 text-white rounded-full hover:bg-red-700 disabled:opacity-50 cursor-pointer"
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
            <Specs />
          </div>
        </div>
      )}
    </div>
  );
}

export default Scooter;
