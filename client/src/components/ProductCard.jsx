import React from "react";

const ProductCard = ({ product, count, onAdd, onIncrement, onDecrement }) => {
  return (
    <div className="border border-gray-300 rounded-md p-4 h-[370px] flex flex-col items-center bg-white">
      {/* Image */}
      <div className="flex items-center justify-center w-full h-40">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-auto object-contain transition-transform group-hover:scale-105"
        />
      </div>

      {/* Infos produit */}
      <div className="mt-4 text-center w-full">
        <p className="text-gray-500 text-sm">{product.category}</p>
        <h3 className="text-lg font-semibold text-gray-700 truncate">{product.name}</h3>

        {/* Étoiles */}
        <div className="flex justify-center items-center gap-1 mt-2">
          {Array(5).fill('').map((_, i) =>
            product.rating > i ? (
              <svg key={i} width="14" height="13" viewBox="0 0 18 17" fill="#615fff">
                <path d="M8.049.927c.3-.921 1.603-.921 1.902 0l1.294 3.983a1 1 0 0 0 .951.69h4.188c.969 0 1.371 1.24.588 1.81l-3.388 2.46a1 1 0 0 0-.364 1.118l1.295 3.983c.299.921-.756 1.688-1.54 1.118L9.589 13.63a1 1 0 0 0-1.176 0l-3.389 2.46c-.783.57-1.838-.197-1.539-1.118L4.78 10.99a1 1 0 0 0-.363-1.118L1.028 7.41c-.783-.57-.38-1.81.588-1.81h4.188a1 1 0 0 0 .95-.69z" />
              </svg>
            ) : (
              <svg key={i} width="14" height="13" viewBox="0 0 18 17" fill="#615fff" fillOpacity="0.35">
                <path d="M8.049.927c.3-.921 1.603-.921 1.902 0l1.294 3.983..." />
              </svg>
            )
          )}
          <span className="text-sm text-gray-600 ml-1">({product.rating})</span>
        </div>

        {/* Prix + Actions */}
        <div className="flex justify-between items-center mt-4 w-full">
          <p className="text-indigo-500 font-semibold text-base">
            {product.offerPrice} FCFA
            <span className="text-gray-400 line-through text-sm ml-1">{product.price} FCFA</span>
          </p>

          {count === 0 ? (
            <button
              onClick={onAdd}
              className="flex items-center gap-1 bg-indigo-100 text-indigo-600 border border-indigo-300 px-3 py-1 rounded-md text-sm"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path
                  d="M.583.583h2.333l1.564 7.81a1.17 1.17 0 0 0 1.166.94h5.67a1.17 1.17 0 0 0 1.167-.94l.933-4.893H3.5m2.333 8.75a.583.583 0 1 1-1.167 0 .583.583 0 0 1 1.167 0m6.417 0a.583.583 0 1 1-1.167 0 .583.583 0 0 1 1.167 0"
                  stroke="#615fff"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Add
            </button>
          ) : (
            <div className="flex items-center bg-indigo-500/25 rounded px-2 h-[34px]">
              <button onClick={onDecrement} className="px-2 text-lg font-medium">-</button>
              <span className="w-5 text-center">{count}</span>
              <button onClick={onIncrement} className="px-2 text-lg font-medium">+</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
