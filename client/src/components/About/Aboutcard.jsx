import React from "react";
import cardim from "../../assests/About/cardim.svg"; // Ensure the path is correct
import border from "../../assests/About/border.png"; // Ensure the path is correct

const Aboutcard = () => {
  return (
    <div className="flex justify-center items-center w-full h-screen bg-[#252527]">
      <div
        className="bg-gray-800 rounded-lg overflow-hidden shadow-lg flex w-full md:w-4/4 lg:w-3/4 xl:w-2/3 mt-[10%]"
        style={{ borderRadius: "10px" }}
      >
        <div className="w-2/5">
          <img
            src={cardim}
            alt="Card Image"
            className="w-full h-full object-cover"
          />
        </div>
        <div
          className="w-3/5 flex flex-col justify-center p-4"
          style={{
            backgroundColor: "#2D2D30",
            borderImage: `url(${border}) 100 round`, // Adjust the border image width and style as needed
            borderWidth: "100px", // Adjust the border width as needed
            borderStyle: "solid",
          }}
        >
          <div className="flex justify-center">
            <h1 className="text-[white] font-bold mb-2 text-center text-3xl">
              MDN Astha Spices
            </h1>
          </div>
          <p className="text-[#E7E2B7]">
            Welcome to MDN Astha Spices, where tradition meets quality. As a
            leading spice manufacturer, we take pride in bringing the rich
            flavors and vibrant aromas of authentic spices to kitchens around
            the world. At MDN Astha Spices, our journey is fueled by a passion
            for excellence and a commitment to delivering the finest quality
            spices. Our story begins with a deep-rooted love for spices and a
            desire to share this love with others. We understand the integral
            role spices play in enhancing the taste and experience of food, and
            we strive to provide our customers with products that elevate their
            culinary creations. What sets us apart is our dedication to quality.
            We source our spices from the best regions, ensuring that each
            product is pure, fresh, and packed with flavor. Our state-of-the-art
            manufacturing process adheres to the highest standards of hygiene
            and safety, ensuring that every pack of MDN Astha Spices you open is
            of the finest quality.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Aboutcard;
