import React from "react";
import ab1 from "../../assests/About/ab1.png";
import b2 from "../../assests/About//b2.png";
import ab33 from "../../assests/About/ab33.png";
import ab4 from "../../assests/About/ab4.png";

const Card3 = () => {
  return (
    <div className="flex flex-col items-center bg-[#252527] w-full py-8">
      {/* Heading */}
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">
        Reasons to Choose Us
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full md:w-4/5 xl:w-3/4">
        {/* Card 1 */}
        <div className="flex bg-[#313133] shadow-lg rounded-lg p-4">
          <div className="flex-none w-1/2">
            <img src={ab1} alt="ab1" className="w-full h-auto object-cover" />
          </div>
          <div className="flex-grow flex flex-col justify-center ml-4">
            <h2 className="text-xl font-bold mb-2 text-white">
              Commitment to Sustainability
            </h2>
            <p className="text-[#EAE3BB]">
              We prioritize sustainability at MDN Astha Spices, striving to
              minimize our environmental footprint while supporting the
              communities that cultivate our spices.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="flex bg-[#313133] shadow-lg rounded-lg p-4">
          <div className="flex-none w-1/2">
            <img src={b2} alt="b2" className="w-full h-auto object-cover" />
          </div>
          <div className="flex-grow flex flex-col justify-center ml-4">
            <h2 className="text-xl font-bold mb-2 text-white">
              Exceptional Flavor Profiles
            </h2>
            <p className="text-[#EAE3BB]">
              Explore a spectrum of flavors with MDN Astha Spices. From robust
              cumin to fragrant cardamom, each spice is meticulously processed
              to preserve its unique essence.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="flex bg-[#313133] shadow-lg rounded-lg p-4">
          <div className="flex-none w-1/2">
            <img src={ab33} alt="ab33" className="w-full h-auto object-cover" />
          </div>
          <div className="flex-grow flex flex-col justify-center ml-4">
            <h2 className="text-xl font-bold mb-2 text-white">
              Quality Assurance
            </h2>
            <p className="text-[#EAE3BB]">
              At MDN Astha Spices, quality is our cornerstone. We meticulously
              select and source spices from renowned regions to ensure every
              product exceeds expectations.
            </p>
          </div>
        </div>

        {/* Card 4 */}
        <div className="flex bg-[#313133] shadow-lg rounded-lg p-4">
          <div className="flex-none w-1/2">
            <img src={ab4} alt="ab4" className="w-full h-auto object-cover" />
          </div>
          <div className="flex-grow flex flex-col justify-center ml-4">
            <h2 className="text-xl font-bold mb-2 text-white">
              Our Rich Heritage
            </h2>
            <p className="text-[#EAE3BB]">
              MDN Astha Spices embodies a rich heritage of spice craftsmanship,
              blending tradition with modern excellence to deliver unparalleled
              flavor experiences.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card3;
