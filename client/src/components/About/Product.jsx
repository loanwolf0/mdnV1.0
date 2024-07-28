import React from "react";
import about1 from "../../assests/About/about1.png"; // Ensure the path is correct
import packageImage from "../../assests/About/package.png"; // Ensure the path is correct
import packageImage2 from "../../assests/About/package.png"; // Ensure the path is correct
import packageImage3 from "../../assests/About/package.png"; // Ensure the path is correct

const Product = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <img
        src={about1}
        alt="About"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 flex justify-center items-center overflow-hidden">
        <div className="relative flex w-full h-70 bg-black bg-opacity-50 items-center">
          <div className="flex items-center animate-scroll">
            <img
              src={packageImage}
              alt="Package 1"
              className="h-full object-contain mx-4"
            />
            <img
              src={packageImage2}
              alt="Package 2"
              className="h-full object-contain mx-4"
            />
            <img
              src={packageImage3}
              alt="Package 3"
              className="h-full object-contain mx-4"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
