import React, { useState } from 'react';

const Carousel = () => {
  const images = [
    'public/2br4.jpg',
    'public/r1.jpg',
    "public/r3.jpg"
    // Add more image paths as needed
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative h-[400px] overflow-hidden mt-1 rounded-xl shadow-lg">
      <div
        className="flex h-full"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
          transition: 'transform 0.5s ease',
        }}
      >
        {images.map((image, index) => (
          <div key={index} className="w-full flex-shrink-0">
            <img
              src={image}
              className="w-full h-full object-cover"
              alt={`Slide ${index + 1}`}
            />
          </div>
        ))}
      </div>

      {/* Navigation buttons */}
      <button
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-gray-800 text-white p-2"
        onClick={handlePrevious}
      >
        Previous
      </button>
      <button
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-gray-800 text-white p-2"
        onClick={handleNext}
      >
        Next
      </button>
    </div>
  );
};

export default Carousel;
