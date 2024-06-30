import React from "react";
import showoff2 from "../../assests/showoff/showoff2.svg";
import showoff3 from "../../assests/showoff/showoff3.svg";
import showoff4 from "../../assests/showoff/showoff4.svg";
import showoff5 from "../../assests/showoff/showoff5.svg";

const ShowOff = () => {
  const images = [showoff2, showoff5, showoff3, showoff4];
  return (
    <div className="w-full bg-[#2E584C] h-20 flex justify-around items-center">
      {images.map((image, i) => (
        <div key={i} className="w-1/4 flex justify-center items-center">
          <img src={image} alt={`Show Off ${i + 1}`} className="h-15" />
        </div>
      ))}
    </div>
  );
};

export default ShowOff;
