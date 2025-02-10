import React from "react";

const AboutUs = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-red-600 text-2xl font-bold mb-2">ABOUT US</h1>
      <hr className="border-gray-300 mb-4" />
      <div className="flex flex-col md:flex-row">
        {/* Left Section */}
        <div className="relative bg-red-600 text-white p-8 md:w-1/2 flex items-center justify-center">
          <div className="absolute top-0 right-0 w-8 h-8 bg-yellow-500 transform rotate-45 -mt-4 -mr-4"></div>
          <div className="text-center">
            <h2 className="text-3xl font-bold">Muzaffarpur Honda</h2>
            <h3 className="text-2xl font-bold text-yellow-500 mt-2">
              WELCOMES
            </h3>
            <h3 className="text-2xl font-bold text-yellow-500">YOU</h3>
          </div>
        </div>

        {/* Right Section */}
        <div className="md:w-1/2 p-8">
          <p className="text-lg">
            Muzaffarpur Honda is Honda Exclusive Authorised Dealership in
            Muzaffrapur. Muzaffarpur honda diversified into Honda 2 Wheelers
            Dealership in Muzaffarpur in September 2016. Now Muzaffarpur Honda
            has its Showroom and Service Setup at various locations in
            Muzaffarpur, Bihar. Muzaffarpur Honda is the largest Honda 2 Wheeler
            Showroom of Bihar.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
