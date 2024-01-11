import React from 'react';

const HorizontalScroll = ({ images }) => {
  return (
    <div className="flex overflow-x-auto">
      {images.map((image, index) => (
        <img key={index} src={image} alt={`${index}`} className="w-48 h-48 md:w-64 md:h-64 lg:w-96 lg:h-96 xl:w-96 xl:h-96 object-cover mx-3" />
      ))}
    </div>
  );
};

export default HorizontalScroll;
