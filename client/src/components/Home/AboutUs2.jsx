import React from "react";
import triphala from "../../assests/showoff/triphala.svg";
import cloves from "../../assests/showoff/cloves.svg";
import green_chilli from "../../assests/showoff/green_chilli.svg";
import peppercorn from "../../assests/showoff/peppercorn.svg";
import kadi_patta from "../../assests/showoff/kadi-patta.svg";
import zeera from "../../assests/showoff/zeera.svg";
import showoff7 from "../../assests/showoff/showoff7.svg";

const AboutUs2 = () => {
  return (
    <div className="w-full h-30 bg-zinc-900 flex flex-col justify-between items-center  py-10">
      <div className="w-full flex justify-center items-center">
        <h3 className="gold-head text-4xl font-semibold text-center">
          Products You Will Love
        </h3>
      </div>
      <div className="w-full h-[800px] relative flex justify-center items-center gap-5 bg-zinc-800 mt-10">
        <div className="w-[70%] h-[70%]  flex justify-between items-center  gap-10 px-5 py-20 mt-10">
          <div className="w-1/2 flex justify-center items-center">
            <img src={showoff7} alt="showoff7" />
          </div>
          <div className="w-1/2 h-full flex flex-col justify-center items-center">
            <div className="w-full flex justify-center items-center ">
              <h3 className="gold-head text-3xl font-semibold mb-5 ">
                Blended Spices
              </h3>
            </div>

            <div className="w-full h-full justify-center items-center text-zinc-200 space-x-2 space-y-3">
              <p className="text-pretty">
                For us at Everest, 'spice' is more than just a word. It's an
                emotion that revives exquisite feasts & aromas, festive recipes
                and tempting garnishes. Being a pioneer in spices, quality is of
                the utmost essence at Everest. It's our passion to enrich lives
                with our spices and complement culinary memories.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full hidden md:flex absolute top-0   justify-between items-center h-20 mt-10 mb-10 px-[200px] py-20">
          <div className="w-[200px] flex justify-center items-center">
            <img src={triphala} alt="triphala" />
          </div>
          <div className="w-[200px] flex justify-center items-center">
            <img src={cloves} alt="cloves" />
          </div>
        </div>
        <div className="w-full hidden md:flex absolute top-[250px]   justify-between items-center h-20 mt-20 mb-10 px-2 py-10">
          <div className="w-[200px] flex justify-center items-center">
            <img src={peppercorn} alt="peppercorn" />
          </div>
          <div className="w-[200px] flex justify-center items-center">
            <img src={green_chilli} alt="green_chilli" />
          </div>
        </div>
        <div className="w-full hidden md:flex absolute top-[500px]  justify-between items-center h-20 mt-20 mb-10 px-[250px] py-20">
          <div className="w-[200px] flex justify-center items-center">
            <img src={kadi_patta} alt="kadi_patta" />
          </div>
          <div className="w-[200px] flex justify-center items-center">
            <img src={zeera} alt="zeera" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs2;
