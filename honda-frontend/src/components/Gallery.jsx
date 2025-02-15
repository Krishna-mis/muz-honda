import React, { useState, useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/api/gallery`);
        const data = await response.json();

        const formattedData = data.map((img) => ({
          id: img.id,
          url: `${API_BASE_URL}/${img.image_path.replace(/\\/g, "/")}`,
        }));

        setImages(formattedData);
      } catch (error) {
        toast.error("Error fetching gallery images:", error);
      }
    };

    fetchImages();
  }, []);

  return (
    <div className="bg-white flex flex-col items-center py-5">
      <h1 className="text-3xl font-bold text-red-600 mb-4">IMAGES</h1>
      <ToastContainer />

      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-10 w-full max-w-screen-xl">
        {images.map((image) => (
          <div
            key={image.id}
            className="p-2 cursor-pointer flex justify-center items-center"
            onClick={() => setSelectedImage(image.url)}
          >
            <img
              alt="Gallery Image"
              className="w-full h-auto max-h-[300px] sm:max-h-[350px] md:max-h-[400px] object-contain rounded-lg shadow-md transition-transform hover:scale-105"
              src={image.url}
            />
          </div>
        ))}
      </div>

      {/* Modal for Image Preview */}
      {selectedImage && (
        <div
          className="fixed inset-0 backdrop-blur-lg bg-opacity-30 flex justify-center items-center z-50 transition-all duration-300"
          onClick={() => setSelectedImage(null)}
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
