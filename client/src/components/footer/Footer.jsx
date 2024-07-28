import React from "react";
import logo from "../../assests/About/MDN_logo.png";
import bg from "../../assests/About/foot.png"; // Ensure the path is correct

const Footer = () => {
  return (
    <div className="relative w-full h-[500px] bg-gray-800 text-white">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url(${bg})` }}
      ></div>

      {/* Content overlay */}
      <div className="relative h-full flex flex-col justify-between items-center px-8 py-4">
        {/* Newsletter Subscription Form */}
        <div className="w-full flex justify-center items-center mt-10">
          <form className="flex items-center bg-white bg-opacity-25 px-4 py-2 rounded-full">
            <input
              type="email"
              placeholder="Enter Email"
              className="bg-transparent border-none text-white placeholder-white focus:outline-none"
            />
            <button
              type="submit"
              className="ml-2 bg-gray-600 text-white px-4 py-2 rounded-full"
            >
              →
            </button>
          </form>
        </div>

        {/* Footer Content */}
        <div className="w-full flex justify-between items-start mt-10">
          {/* Company Information */}
          <div className="flex flex-col items-start">
            <img src={logo} alt="Logo" className="h-12 w-12 mb-4" />
            <div>
              <p className="font-bold">MDN Food Products Pvt. Ltd.</p>
              <p>5th Floor, Krushal Commercial Complex, G. M. Road,</p>
              <p>Amar Mahal,(West)</p>
              <p>Jaunpur – 400 089.</p>
              <p>+ 917081085605.</p>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col items-center space-y-2">
            <a href="#" className="text-lg hover:text-gray-400">
              Home
            </a>
            <a href="#" className="text-lg hover:text-gray-400">
              About
            </a>
            <a href="#" className="text-lg hover:text-gray-400"></a>
            <a href="#" className="text-lg hover:text-gray-400">
              Product
            </a>
            <a href="#" className="text-lg hover:text-gray-400">
              Blog
            </a>

            <a href="#" className="text-lg hover:text-gray-400">
              Contact
            </a>
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-4">
            <a href="#" className="text-lg hover:text-gray-400">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="text-lg hover:text-gray-400">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="text-lg hover:text-gray-400">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-lg hover:text-gray-400">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
