import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;
const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch(`${BASE_URL}/api/images`);
        const data = await response.json();
        setSlides(data);
      } catch (error) {
        toast.error("Error fetching images:", error);
      }
    };
    fetchImages();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  // Navigation functions
  const goToSlide = (index) => setCurrentSlide(index);
  const nextSlide = () =>
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  return (
    <div className="hidden md:block relative w-full">
      <ToastContainer />
      <div className="relative w-full h-[300px] md:h-[400px] lg:h-[600px] overflow-hidden">
        {slides.length > 0 ? (
          slides.map((slide, index) => (
            <img
              key={slide.id}
              src={`${BASE_URL}/${slide.filepath}`}
              alt={`Slide ${index + 1}`}
              className={`absolute w-full h-full object-contain transition-opacity duration-700 ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            />
          ))
        ) : (
          <p className="text-center text-white">Loading images...</p>
        )}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-2 md:left-4 lg:left-8 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-1.5 md:p-2 lg:p-3 rounded-full"
      >
        &#10094;
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 md:right-4 lg:right-8 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-1.5 md:p-2 lg:p-3 rounded-full"
      >
        &#10095;
      </button>

      {/* Indicator Dots */}
      <div className="absolute bottom-2 md:bottom-4 lg:bottom-6 left-1/2 -translate-x-1/2 flex gap-1 md:gap-2 lg:gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-6 md:w-8 lg:w-10 h-1.5 md:h-2 lg:h-2.5 rounded-sm transition-colors duration-300 ${
              currentSlide === index
                ? "bg-red-600"
                : "bg-white/50 hover:bg-white/75"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
