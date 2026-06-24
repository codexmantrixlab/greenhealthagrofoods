import React, { useState } from 'react';
import { FiShoppingCart, FiStar, FiHeart, FiEye } from 'react-icons/fi';
import { MdLocalOffer } from 'react-icons/md';
import { useApp } from '../context/AppContext';

const badgeColors = {
  'Best Seller': 'bg-amber-500',
  'Organic': 'bg-orange-500',
  'Top Rated': 'bg-indigo-600',
  'New': 'bg-purple-600',
  'Sale': 'bg-red-500',
};

const ProductCard = ({ product }) => {
  const { addToCart, getDiscountedPrice } = useApp();
  const [wished, setWished] = useState(false);
  const [added, setAdded] = useState(false);

  const discountedPrice = getDiscountedPrice(product.originalPrice, product.discount);
  const savings = product.originalPrice - discountedPrice;

  const handleAddToCart = () => {
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <div className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col border border-gray-100 hover:-translate-y-1">
      {/* Image container */}
      <div className="relative overflow-hidden bg-gray-50">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />

        {/* Badge */}
        {product.badge && (
          <span
            className={`absolute top-3 left-3 text-white text-xs font-bold px-2.5 py-1 rounded-full ${
              badgeColors[product.badge] || 'bg-gray-600'
            }`}
          >
            {product.badge}
          </span>
        )}

        {/* Discount tag */}
        {product.discount > 0 && (
          <span className="absolute top-3 right-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full flex items-center gap-1">
            <MdLocalOffer className="text-xs" />
            {product.discount}% OFF
          </span>
        )}

        {/* Hover actions */}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
          <button
            onClick={() => setWished(!wished)}
            className={`p-2.5 rounded-full shadow-lg transition-all ${
              wished ? 'bg-red-500 text-white' : 'bg-white text-gray-700 hover:text-red-500'
            }`}
            aria-label="Wishlist"
          >
            <FiHeart className={wished ? 'fill-current' : ''} />
          </button>
          <button
            className="p-2.5 rounded-full bg-white text-gray-700 hover:text-orange-500 shadow-lg transition-all"
            aria-label="Quick view"
          >
            <FiEye />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-4 gap-2">
        <span className="text-xs font-semibold text-orange-500 uppercase tracking-wider">
          {product.category}
        </span>
        <h3 className="font-bold text-gray-800 text-sm sm:text-base leading-snug line-clamp-2">
          {product.name}
        </h3>
        <p className="text-gray-500 text-xs line-clamp-2 leading-relaxed flex-1">
          {product.description}
        </p>

        {/* Rating */}
        <div className="flex items-center gap-1.5">
          <div className="flex items-center gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <FiStar
                key={i}
                className={`text-xs ${
                  i < Math.floor(product.rating)
                    ? 'text-amber-400 fill-amber-400'
                    : 'text-gray-300'
                }`}
                style={i < Math.floor(product.rating) ? { fill: '#fbbf24' } : {}}
              />
            ))}
          </div>
          <span className="text-xs text-gray-500">
            {product.rating} ({product.reviews})
          </span>
        </div>

        {/* Price block */}
        <div className="flex items-end gap-2 mt-1">
          <span className="text-xl font-extrabold text-gray-900">
            ₹{discountedPrice.toLocaleString('en-IN')}
          </span>
          {product.discount > 0 && (
            <>
              <span className="text-sm text-gray-400 line-through">
                ₹{product.originalPrice.toLocaleString('en-IN')}
              </span>
              <span className="text-xs text-orange-500 font-semibold ml-auto">
                Save ₹{savings.toLocaleString('en-IN')}
              </span>
            </>
          )}
        </div>

        {/* Add to Cart */}
        <button
          onClick={handleAddToCart}
          className={`mt-2 w-full flex items-center justify-center gap-2 py-2.5 rounded-xl font-semibold text-sm transition-all duration-200 ${
            added
              ? 'bg-orange-100 text-orange-700 border border-orange-300'
              : 'bg-orange-600 hover:bg-orange-700 text-white active:scale-95'
          }`}
        >
          <FiShoppingCart className={`text-base ${added ? 'animate-bounce' : ''}`} />
          {added ? 'Added!' : 'Add to Cart'}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
