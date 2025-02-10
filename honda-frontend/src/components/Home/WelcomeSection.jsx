import React, { useEffect } from "react";
import welcome_img from "../../assets/images/welcome-img.png";

const WelcomeSection = () => {
  useEffect(() => {
    console.log("WelcomeSection Rendered");
  });

  return (
    <div className="flex flex-col md:flex-row items-center justify-center w-full py-12 bg-gray-50 p-10">
      {/* Text Content */}
      <div className="md:w-1/2 text-center md:text-left px-4">
        <h1 className="text-4xl font-bold text-gray-900">Welcome to</h1>
        <h2 className="text-5xl font-bold text-gray-800 mt-2">
          Muzaffarpur Honda
        </h2>
        <p className="text-red-600 font-semibold mt-4">
          Honda is the world's largest manufacturer of two wheelers
        </p>
        <p className="text-gray-700 mt-2 text-justify">
          Muzaffarpur Honda is Honda Exclusive Authorised Dealership in
          Muzaffarpur. Muzaffarpur Honda diversified into Honda 2 Wheelers
          Dealership in Muzaffarpur in September 2016. Now Muzaffarpur Honda has
          its Showroom and Service Setup at various locations in Muzaffarpur,
          Bihar. Muzaffarpur Honda is the largest Honda 2 Wheeler Showroom of
          Bihar.
        </p>
      </div>

      {/* Image */}
      <div className="md:w-1/2 flex justify-center px-4">
        <img
          src={welcome_img}
          alt="Honda Bike"
          className="w-full max-w-md object-contain"
        />
      </div>
    </div>
  );
};

export default WelcomeSection;
