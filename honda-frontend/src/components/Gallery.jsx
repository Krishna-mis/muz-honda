import React, { useState, useEffect } from "react";
import { FaTimes } from "react-icons/fa";

const images = [
  "/assets/bikes/banner1.webp",
  "/assets/bikes/banner2.webp",
  "/assets/bikes/banner3.webp",
  "/assets/bikes/banner4.webp",
  "/assets/bikes/banner5.webp",
  "/assets/bikes/banner6.webp",
  "/assets/bikes/banner7.webp",
  "/assets/bikes/banner8.webp",
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setSelectedImage(null);
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="bg-white flex flex-col items-center py-5">
      <h1 className="text-3xl font-bold text-red-600 mb-4">IMAGES</h1>

      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-10 w-full max-w-screen-xl">
        {images.map((image, index) => (
          <div
            key={index}
            className="p-2 cursor-pointer flex justify-center items-center"
            onClick={() => setSelectedImage(image)}
          >
            <img
              alt={`Placeholder image ${index + 1}`}
              className="w-full h-auto max-h-[300px] sm:max-h-[350px] md:max-h-[400px] object-contain rounded-lg shadow-md transition-transform hover:scale-105"
              src={image}
            />
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-0 backdrop-blur-md flex justify-center items-center z-50 transition-all duration-300 opacity-100"
          onClick={() => setSelectedImage(null)}
          style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
        >
          <div
            className="relative bg-white p-4 rounded-lg shadow-lg max-w-3xl w-full mx-4 animate-fadeIn"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-3 right-3 text-white bg-red-600 hover:bg-red-700 transition-all rounded-full p-2 shadow-md"
              onClick={() => setSelectedImage(null)}
              aria-label="Close modal"
            >
              <FaTimes className="text-lg" />
            </button>

            <img
              src={selectedImage}
              alt="Preview"
              className="w-full max-h-[80vh] object-contain rounded-lg shadow-md"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
