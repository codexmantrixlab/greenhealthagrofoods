import React, { useState, useMemo } from 'react';
import { products, categories } from '../data/products';
import ProductCard from '../components/ProductCard';
import { FiFilter, FiX, FiChevronDown } from 'react-icons/fi';
import { MdGridView, MdViewList } from 'react-icons/md';
import { useApp } from '../context/AppContext';

const sortOptions = [
  { label: 'Default', value: 'default' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Discount: High to Low', value: 'discount-desc' },
  { label: 'Rating: High to Low', value: 'rating-desc' },
];

const Products = () => {
  const { getDiscountedPrice } = useApp();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('default');
  const [priceRange, setPriceRange] = useState([0, 2000]);
  const [showFilter, setShowFilter] = useState(false);
  const [gridCols, setGridCols] = useState(3);

  const filtered = useMemo(() => {
    let list = [...products];

    // Category
    if (selectedCategory !== 'All') {
      list = list.filter((p) => p.category === selectedCategory);
    }

    // Price range (after discount)
    list = list.filter((p) => {
      const price = getDiscountedPrice(p.originalPrice, p.discount);
      return price >= priceRange[0] && price <= priceRange[1];
    });

    // Sort
    switch (sortBy) {
      case 'price-asc':
        list.sort((a, b) => getDiscountedPrice(a.originalPrice, a.discount) - getDiscountedPrice(b.originalPrice, b.discount));
        break;
      case 'price-desc':
        list.sort((a, b) => getDiscountedPrice(b.originalPrice, b.discount) - getDiscountedPrice(a.originalPrice, a.discount));
        break;
      case 'discount-desc':
        list.sort((a, b) => b.discount - a.discount);
        break;
      case 'rating-desc':
        list.sort((a, b) => b.rating - a.rating);
        break;
      default:
        break;
    }

    return list;
  }, [selectedCategory, sortBy, priceRange, getDiscountedPrice]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page header */}
      <div className="bg-gradient-to-r from-orange-700 to-orange-500 py-12 px-4 text-white text-center">
        <h1 className="text-3xl sm:text-4xl font-extrabold mb-2">Our Products</h1>
        <p className="text-white/80 text-sm sm:text-base">
          {filtered.length} organic health products — pure, potent, and natural.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        {/* Toolbar */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6 bg-white rounded-xl p-4 shadow-sm border border-gray-100">
          {/* Category chips */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all border ${
                  selectedCategory === cat
                    ? 'bg-orange-600 text-white border-orange-600'
                    : 'bg-white text-gray-600 border-gray-200 hover:border-orange-400 hover:text-orange-600'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3">
            {/* Sort */}
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none bg-white border border-gray-200 rounded-lg px-4 py-2 pr-8 text-sm text-gray-700 focus:outline-none focus:border-orange-400 cursor-pointer"
              >
                {sortOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
              <FiChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none text-sm" />
            </div>

            {/* Filter toggle */}
            <button
              onClick={() => setShowFilter(!showFilter)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg border text-sm font-semibold transition-all ${
                showFilter ? 'bg-orange-600 text-white border-orange-600' : 'bg-white text-gray-700 border-gray-200 hover:border-orange-400'
              }`}
            >
              <FiFilter /> Filter
            </button>

            {/* Grid toggle */}
            <div className="hidden sm:flex items-center border border-gray-200 rounded-lg overflow-hidden">
              <button
                onClick={() => setGridCols(3)}
                className={`p-2 transition-colors ${gridCols === 3 ? 'bg-orange-600 text-white' : 'text-gray-500 hover:bg-gray-50'}`}
              >
                <MdGridView />
              </button>
              <button
                onClick={() => setGridCols(2)}
                className={`p-2 transition-colors ${gridCols === 2 ? 'bg-orange-600 text-white' : 'text-gray-500 hover:bg-gray-50'}`}
              >
                <MdViewList />
              </button>
            </div>
          </div>
        </div>

        {/* Filter panel */}
        {showFilter && (
          <div className="mb-6 bg-white rounded-xl shadow-sm border border-gray-100 p-5">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-gray-800">Filter by Price</h3>
              <button
                onClick={() => { setPriceRange([0, 2000]); setShowFilter(false); }}
                className="text-xs text-gray-500 hover:text-red-500 flex items-center gap-1"
              >
                <FiX /> Reset
              </button>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-600 w-24">₹{priceRange[0]}</span>
              <input
                type="range"
                min={0}
                max={2000}
                step={50}
                value={priceRange[1]}
                onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                className="flex-1 accent-orange-600"
              />
              <span className="text-sm text-gray-600 w-24 text-right">₹{priceRange[1]}</span>
            </div>
          </div>
        )}

        {/* Product grid */}
        {filtered.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-4xl mb-4">🌿</p>
            <p className="text-gray-500 font-medium">No products found. Try changing filters.</p>
          </div>
        ) : (
          <div
            className={`grid gap-6 ${
              gridCols === 3
                ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
                : 'grid-cols-1 sm:grid-cols-2'
            }`}
          >
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
