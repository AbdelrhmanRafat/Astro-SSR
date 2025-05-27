import React, { useState, useEffect } from 'react';

const ImageCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Define the transition interval in milliseconds
  const transitionInterval = 3000; // 3 seconds

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  // Auto-transition effect
  useEffect(() => {
    if (images && images.length > 1) {
      const timer = setInterval(() => {
        goToNext();
      }, transitionInterval);

      // Cleanup function to clear the interval
      return () => clearInterval(timer);
    }
    // Clear interval if images change or become insufficient
    return () => {};
  }, [images, currentIndex, transitionInterval]); // Add dependencies

  if (!images || images.length === 0) {
    return <div className="text-center text-gray-500">No images available.</div>;
  }

  return (
    <div className="relative w-full overflow-hidden rounded-lg shadow-xl">
      <img
        src={images[currentIndex]}
        alt="Product Image"
        className="w-full h-96 object-cover transition-opacity duration-300 ease-in-out opacity-100"
        key={currentIndex}
      />

      {/* Navigation Buttons */}
      {images.length > 1 && (
        <>
          <button
            onClick={goToPrevious}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-30 text-white p-3 rounded-full opacity-80 hover:opacity-100 transition-all duration-300 z-10"
            aria-label="Previous image"
          >
            &#10094;
          </button>
          <button
            onClick={goToNext}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-30 text-white p-3 rounded-full opacity-80 hover:opacity-100 transition-all duration-300 z-10"
            aria-label="Next image"
          >
            &#10095;
          </button>
        </>
      )}

      {/* Dots Indicator */}
      {images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-white' : 'bg-gray-500 bg-opacity-50'} transition-colors duration-300`}
              aria-label={`Go to image ${index + 1}`}
            ></button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ImageCarousel; 