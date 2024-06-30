import React from "react";
import showoff6 from "../../assests/showoff/showoff6 (2).svg";

const AboutUs = () => {
  return (
    <div className="h-30 py-5 w-full flex justify-between items-center bg-zinc-900">
      <div className="h-full w-[40%] px-3">
        <img src={showoff6} alt="showoff" className="w-30" />
      </div>
      <div className="h-full w-[55%] flex justify-center items-center">
        <div className=" flex flex-col w-[80%] bg-zinc-800 p-10 rounded-lg justify-center items-center">
          <div className="gold-head text-5xl w-full text-center px-6 py-4 font-semibold">
            <h3>About Us</h3>
          </div>
          <div className=" text-pretty text-zinc-200 space-x-2 space-y-3">
            <p>
              {" "}
              For us at Everest, 'spice' is more than just a word. It's an
              emotion that revives exquisite feasts & aromas, festive recipes
              and tempting garnishes. Being a pioneer in spices, quality is of
              the utmost essence at Everest. It's our passion to enrich lives
              with our spices and complement culinary memories. Everest is
              India’s No.1 spice brand that is driven to season your precious
              moments with your families & deliver great taste!....
            </p>
          </div>
          <div className="w-full flex justify-center items-center mt-10">
            <button className="text-zinc-200 border border-blue-500 px-2 py-1 rounded-md">
              Know more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
