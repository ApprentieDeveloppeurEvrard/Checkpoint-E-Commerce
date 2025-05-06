import React, { useState } from "react";
import ProductCard from "../components/ProductCard";
import images from "../assets"; // <-- import automatique

const ProductContainer = () => {
  const productsData = [
    {
      id: 1,
      name: "Tomato",
      category: "Legumes",
      price: 100,
      offerPrice: 80,
      rating: 4,
      imageKey: "tomato_image_2",
    },
    {
      id: 2,
      name: "Farine de blé",
      category: "Cereals",
      price: 120,
      offerPrice: 90,
      rating: 5,
      imageKey: "wheat_flour_image",
    },
    {
      id: 3,
      name: "Top Ramen",
      category: " Noodles",
      price: 60,
      offerPrice: 50,
      rating: 3,
      imageKey: "top_ramen_image",
    },
    {
      id: 4,
      name: "Yogurt",
      category: "Dairy",
      price: 150,
      offerPrice: 120,
      rating: 4,
      imageKey: "yogurt_image_1",
    },
    {
      id: 5,
      name: "Spinach",
      category: "Vegetables",
      price: 110,
      offerPrice: 85,
      rating: 5,
      imageKey: "spinach_image_1",
    },
    {
      id: 6,
      name: "Vanilla Muffins",
      category: "Bakery",
      price: 130,
      offerPrice: 95,
      rating: 4,
      imageKey: "vanilla_muffins_image",
    },
    {
      id: 7,
      name: "Beachwear",
      category: "Summer",
      price: 40,
      offerPrice: 30,
      rating: 3,
      imageKey: "knorr_soup_image",
    },
    {
      id: 8,
      name: "Knorr Soup",
      category: "Soups",
      price: 160,
      offerPrice: 130,
      rating: 5,
      imageKey: "eggs_image",
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
            product={{
              ...product,
              image: images[product.imageKey], // assignation dynamique
            }}
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
