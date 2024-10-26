// src/App.jsx
import React, { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";

function UploadImage() {
  const [images, setImages] = useState([]);

  const handleImageUpload = (event) => {
    const files = Array.from(event.target.files);
    const newImages = files.map((file) => URL.createObjectURL(file));
    setImages((prevImages) => [...prevImages, ...newImages]);
  };

  const handleDeleteImage = (imageUrl) => {
    setImages(images.filter((img) => img !== imageUrl));
  };

  return (
    <div className="p-6 bg-blue-300 h-full rounded-md ">
      <div className="bg-white p-4 rounded-lg shadow-md max-w-sm w-full">
        {/* Main Image */}
        <div className="relative w-full h-40 mb-4 border border-gray-300 rounded-md overflow-hidden">
          {images[0] ? (
            <div className="w-full h-full">
              <img src={images[0]} alt="Main Upload" className="object-cover w-full h-full" />
              <button
                onClick={() => handleDeleteImage(images[0])}
                className="absolute top-2 right-2 text-red-600 bg-white p-1 rounded-full shadow-md"
              >
                <FaTrashAlt size={16} />
              </button>
            </div>
          ) : (
            <label className="flex items-center justify-center h-full text-gray-400 cursor-pointer">
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
              />
              <span className="text-xl">Upload Main Image</span>
            </label>
          )}
        </div>

        {/* Additional Images */}
        <p className="font-semibold mb-2">Additional Images</p>
        <div className="grid grid-cols-3 gap-2">
          {images.slice(1).map((image, index) => (
            <div key={index} className="relative w-full h-20 border border-gray-300 rounded-md overflow-hidden">
              <img src={image} alt={`Additional ${index}`} className="object-cover w-full h-full" />
              <button
                onClick={() => handleDeleteImage(image)}
                className="absolute top-1 right-1 text-red-600 bg-white p-1 rounded-full shadow-md"
              >
                <FaTrashAlt size={12} />
              </button>
            </div>
          ))}
          
          {/* Upload Additional Image Button */}
          {images.length < 4 && (
            <label className="flex items-center justify-center h-20 border border-dashed border-gray-400 rounded-md cursor-pointer text-gray-400">
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
              />
              <span className="text-xl">Upload Image</span>
            </label>
          )}
        </div>
      </div>
    </div>
  );
}

export default UploadImage;
