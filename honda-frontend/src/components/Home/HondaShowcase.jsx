import { useState } from "react";
import { useNavigate } from "react-router-dom";

const HondaTwoWheelers = () => {
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(0);

  const models = Array.from({ length: 11 }, (_, index) => ({
    id: index + 1,
    nameImg: `/assets/bikes/name${index + 1}.webp`,
    bikeIcon: `/assets/bikes/bikeIcon${index + 1}.webp`,
  }));

  const maxIndex = Math.floor(models.length / 3);

  const handleDotClick = (index) => {
    setActiveIndex(index);
  };

  const nextSlide = () => {
    if (activeIndex < maxIndex) {
      setActiveIndex(activeIndex + 1);
    } else {
      setActiveIndex(0);
    }
  };

  const prevSlide = () => {
    if (activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
    } else {
      setActiveIndex(maxIndex);
    }
  };

  return (
    <div className="container mx-auto p-2 sm:p-3 md:p-4 lg:p-10 bg-white text-gray-800 custom-margin-top ">
      <div className="px-2 sm:px-4 md:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 md:gap-8">
        {/* About Section */}
        <div className="w-full md:w-1/2">
          <h2 className="text-red-600 text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3 md:mb-4">
            ABOUT US
          </h2>
          <h3 className="text-black text-lg sm:text-xl font-bold mb-2">
            HONDA IS THE WORLD'S LARGEST MANUFACTURER OF TWO WHEELERS
          </h3>
          <p className="text-gray-600 text-sm sm:text-base mb-4">
            Muzaffarpur Honda is Honda Exclusive Authorised Dealership in
            Muzaffrapur. Muzaffarpur honda diversified into Honda 2 Wheelers
            Dealership in Muzaffarpur in September 2016.
          </p>
          <button
            className="bg-red-600 text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded text-sm sm:text-base cursor-pointer hover:bg-red-700 transition-colors"
            onClick={() => navigate("/about")}
          >
            KNOW MORE...
          </button>
        </div>

        {/* Models Section */}
        <div className="w-full md:w-1/2 mt-6 md:mt-0 relative">
          <h3 className="text-red-600 text-lg sm:text-xl font-bold mb-3 sm:mb-4">
            EXPLORE OTHER MODELS
          </h3>

          {/* Carousel Container */}
          <div className="relative">
            <div className="flex overflow-hidden">
              {models
                .slice(activeIndex * 3, (activeIndex + 1) * 3)
                .map((model) => (
                  <div key={model.id} className="w-1/3 px-1 sm:px-2">
                    <img
                      src={model.nameImg}
                      alt={model.name}
                      className="mx-auto h-5 sm:h-6 md:h-7"
                    />
                    <img
                      src={model.bikeIcon}
                      alt="Bike Icon"
                      className="mx-auto my-2 w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 object-contain"
                    />
                  </div>
                ))}
            </div>

            {/* Carousel Navigation */}
            <button
              className="absolute top-1/2 left-0 transform -translate-y-1/2 cursor-pointer bg-black/30 hover:bg-black/50 text-white p-1.5 sm:p-2 rounded-full"
              onClick={prevSlide}
            >
              ❮
            </button>
            <button
              className="absolute top-1/2 right-0 transform -translate-y-1/2 cursor-pointer bg-black/30 hover:bg-black/50 text-white p-1.5 sm:p-2 rounded-full"
              onClick={nextSlide}
            >
              ❯
            </button>

            {/* Dot Navigation */}
            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {[...Array(maxIndex + 1)].map((_, index) => (
                <button
                  key={index}
                  className={`w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4 rounded-full transition-colors ${
                    index === activeIndex
                      ? "bg-red-600"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                  onClick={() => handleDotClick(index)}
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
