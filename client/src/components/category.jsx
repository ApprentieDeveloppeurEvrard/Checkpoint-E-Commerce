import React from "react";
import images from '../assets';

const Category = () => {
  return (
    <div className="mx-auto flex flex-col justify-center text-sm  border-gray-300 rounded-md m-10 max-w-7xl w-full bg-white">
      <h2 className="ml-10 text-4xl font-semibold text-gray-800 pt-14">Categories</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-10">
        <div className="border bg-[#fef9c3] border-gray-300 rounded-md p-4 h-[300px] flex flex-col items-center">
        <img src={images["organic_vegitable_image"]} alt="Product 1" className="h-48 w-auto object-contain" />
          <h3 className="text-lg font-semibold mt-2">Légume</h3>
        </div>
        <div className="border bg-[#fee2e2] border-gray-300 rounded-md p-4 h-[300px] flex flex-col items-center">
        <img src={images["fresh_fruits_image"]} alt="Product 1" className="h-48 w-auto object-contain" />
          <h3 className="text-lg font-semibold mt-2">Fruits</h3>
        </div>
        <div className="border bg-[#dcfce7] border-gray-300 rounded-md p-4 h-[300px] flex flex-col items-center">
        <img src={images["maggi_image"]} alt="Product 1" className="h-48 w-auto object-contain" />
          <h3 className="text-lg font-semibold mt-2">Produits</h3>
        </div>
        <div className="border bg-[#fae8ff] border-gray-300 rounded-md p-4 h-[300px] flex flex-col items-center">
        <img src={images["grain_image"]} alt="Product 1" className="h-48 w-auto object-contain" />
          <h3 className="text-lg font-semibold mt-2">Céréales</h3>
        </div>
      </div>
    </div>
  );
};

export default Category;
