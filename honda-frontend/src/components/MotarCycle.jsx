import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

function MotarCycle() {
  const models = [
    {
      id: 1,
      nameImg: "/assets/bikes/name1.webp",
      bikeIcon: "/assets/bikes/bikeIcon1.webp",
      image: "/assets/bikes/banner1.webp",
      specs: {
        engine: "184.40 cc",
        power: "12.7 kW @ 8500 rpm",
        transmission: "5 Gears",
        document: "/assets/bikes/doc1.pdf",
      },
    },
    {
      id: 2,
      nameImg: "/assets/bikes/name2.webp",
      bikeIcon: "/assets/bikes/bikeIcon2.webp",
      image: "/assets/bikes/banner2.webp",
      specs: {
        engine: "110 cc",
        power: "8.01 PS @ 7500 rpm",
        transmission: "4 Gears",
        document: "/assets/bikes/doc2.pdf",
      },
    },
    {
      id: 3,
      nameImg: "/assets/bikes/name3.webp",
      bikeIcon: "/assets/bikes/bikeIcon3.webp",
      image: "/assets/bikes/banner3.webp",
      specs: {
        engine: "162.71 cc",
        power: "12.9 PS @ 8000 rpm",
        transmission: "5 Gears",
        document: "/assets/bikes/doc3.pdf",
      },
    },
    {
      id: 4,
      nameImg: "/assets/bikes/name4.webp",
      bikeIcon: "/assets/bikes/bikeIcon4.webp",
      image: "/assets/bikes/banner4.webp",
      specs: {
        engine: "124 cc",
        power: "10.7 PS @ 7500 rpm",
        transmission: "5 Gears",
        document: "/assets/bikes/doc4.pdf",
      },
    },
    {
      id: 5,
      nameImg: "/assets/bikes/name5.webp",
      bikeIcon: "/assets/bikes/bikeIcon5.webp",
      image: "/assets/bikes/banner5.webp",
      specs: {
        engine: "124 cc",
        power: "10.7 PS @ 7500 rpm",
        transmission: "5 Gears",
        document: "/assets/bikes/doc5.pdf",
      },
    },
    {
      id: 6,
      nameImg: "/assets/bikes/name6.webp",
      bikeIcon: "/assets/bikes/bikeIcon6.webp",
      image: "/assets/bikes/banner6.webp",
      specs: {
        engine: "110 cc",
        power: "8.01 PS @ 7500 rpm",
        transmission: "4 Gears",
        document: "/assets/bikes/doc6.pdf",
      },
    },
    {
      id: 7,
      nameImg: "/assets/bikes/name7.webp",
      bikeIcon: "/assets/bikes/bikeIcon7.webp",
      image: "/assets/bikes/banner7.webp",
      specs: {
        engine: "110 cc",
        power: "8.01 PS @ 7500 rpm",
        transmission: "4 Gears",
        document: "/assets/bikes/doc7.pdf",
      },
    },
    {
      id: 8,
      nameImg: "/assets/bikes/name8.webp",
      bikeIcon: "/assets/bikes/bikeIcon8.webp",
      image: "/assets/bikes/banner8.webp",
      specs: {
        engine: "159 cc",
        power: "12.7 PS @ 8500 rpm",
        transmission: "5 Gears",
        document: "/assets/bikes/doc8.pdf",
      },
    },
    {
      id: 9,
      nameImg: "/assets/bikes/name9.webp",
      bikeIcon: "/assets/bikes/bikeIcon9.webp",
      image: "/assets/bikes/banner9.webp",
      specs: {
        engine: "110 cc",
        power: "8.01 PS @ 7500 rpm",
        transmission: "4 Gears",
        document: "/assets/bikes/doc9.pdf",
      },
    },
    {
      id: 10,
      nameImg: "/assets/bikes/name10.webp",
      bikeIcon: "/assets/bikes/bikeIcon10.webp",
      image: "/assets/bikes/banner10.webp",
      specs: {
        engine: "100 cc",
        power: "8.01 PS @ 7500 rpm",
        transmission: "4 Gears",
        document: "/assets/bikes/doc10.pdf",
      },
    },
    {
      id: 11,
      nameImg: "/assets/bikes/name11.webp",
      bikeIcon: "/assets/bikes/bikeIcon11.webp",
      image: "/assets/bikes/banner11.webp",
      specs: {
        engine: "184 cc",
        power: "12.01 PS @ 7500 rpm",
        transmission: "5 Gears",
        document: "/assets/bikes/doc11.pdf",
      },
    },
  ];

  const [selectedModel, setSelectedModel] = useState(models[0]);
  const [startIndex, setStartIndex] = useState(0);
  const getItemsPerPage = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth < 640) {
        return 1;
      } else if (window.innerWidth >= 640 && window.innerWidth < 1024) {
        return 2;
      } else {
        return 4;
      }
    }
    return 4;
  };

  const [itemsPerPage, setItemsPerPage] = useState(getItemsPerPage());
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
              key={model.id}
              className="card border-0 mr-4 cursor-pointer text-center bg-white w-44 max-w-full transition-transform transform hover:scale-105"
              onClick={() => handleModelSelect(model)}
            >
              <img
                src={model.nameImg}
                alt={model.name}
                className="mx-auto h-7"
              />

              <img
                src={model.bikeIcon}
                alt="Bike Icon"
                className="img-fluid mx-auto my-2 w-32 h-32 object-contain"
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

export default MotarCycle;
