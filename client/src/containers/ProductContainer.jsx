import React, { useState } from "react";
import ProductCard from "../components/ProductCard";

const ProductContainer = () => {
  const productsData = [
    {
      id: 1,
      name: "Casual Shoes",
      category: "Sports",
      price: 100,
      offerPrice: 80,
      rating: 4,
      image: "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/card/productImage.png",
    },
    {
      id: 2,
      name: "Running Shoes",
      category: "Fitness",
      price: 120,
      offerPrice: 90,
      rating: 5,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      name: "Sandals",
      category: "Casual",
      price: 60,
      offerPrice: 50,
      rating: 3,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 4,
      name: "Boots",
      category: "Winter",
      price: 150,
      offerPrice: 120,
      rating: 4,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 5,
      name: "Sneakers",
      category: "Urban",
      price: 110,
      offerPrice: 85,
      rating: 5,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 6,
      name: "Loafers",
      category: "Business",
      price: 130,
      offerPrice: 95,
      rating: 4,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 7,
      name: "Flip Flops",
      category: "Beachwear",
      price: 40,
      offerPrice: 30,
      rating: 3,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 8,
      name: "Formal Shoes",
      category: "Office",
      price: 160,
      offerPrice: 130,
      rating: 5,
      image: "https://via.placeholder.com/150",
    },
  ];

  const [counts, setCounts] = useState(Array(productsData.length).fill(0));

  const handleAdd = (index) => {
    const newCounts = [...counts];
    newCounts[index] = 1;
    setCounts(newCounts);
  };

  const handleIncrement = (index) => {
    const newCounts = [...counts];
    newCounts[index]++;
    setCounts(newCounts);
  };

  const handleDecrement = (index) => {
    const newCounts = [...counts];
    newCounts[index] = Math.max(newCounts[index] - 1, 0);
    setCounts(newCounts);
  };

  return (
    <div className="mx-auto flex flex-col justify-center border-gray-300 rounded-md m-10 max-w-7xl w-full bg-white">
      <h2 className="ml-10 text-4xl font-semibold text-gray-800 pt-14">Produits</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 p-10">
        {productsData.map((product, index) => (
          <ProductCard
            key={product.id}
            product={product}
            count={counts[index]}
            onAdd={() => handleAdd(index)}
            onIncrement={() => handleIncrement(index)}
            onDecrement={() => handleDecrement(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductContainer;
