import React, { useEffect, useState } from 'react';
import Hero_1 from '../../assests/Home/Group 8 (2).png'
import Hero_2 from '../../assests/Home/Group 12 (1).png'

const Slider = () => {
    const images = [
        { src: Hero_1, alt: "Assorted spices in spoons" },
        { src: Hero_2, alt: "Spices in bowls" },
        { src: Hero_1, alt: "Assorted spices in spoons" },
        { src: Hero_2, alt: "Spices in bowls" },
        
      ];
      

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="relative w-full h-full mx-auto">
      <div className="overflow-hidden relative h-64  md:h-[90%] lg:h-[90vh] w-full">
        <div
          className="flex transition-transform duration-1000 ease-in-out  w-[100%] "
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <img
              key={index}
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover"
            />
          ))}

          {/* {images.map((image, index) => ( */}
          
        </div>
      </div>
      <button
        onClick={prevSlide}
        className="absolute top-1/2 transform -translate-y-1/2 left-4 bg-white p-2 rounded-full shadow-md"
      >
        ❮
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 transform -translate-y-1/2 right-4 bg-white p-2 rounded-full shadow-md"
      >
        ❯
      </button>
      <div className=" absolute bottom-5 left-[50%] transform -translate-x-[50%] flex justify-center mt-4">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 mx-1 rounded-full ${index === currentIndex ? 'bg-blue-500' : 'bg-gray-400'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
