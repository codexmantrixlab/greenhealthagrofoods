import React from 'react';
import HeroSlider from '../components/HeroSlider';
import { products, categories } from '../data/products';
import ProductCard from '../components/ProductCard';
import { FiArrowRight, FiShield, FiTruck, FiAward, FiRefreshCw } from 'react-icons/fi';
import { GiLeafSwirl, GiPlantSeed, GiHerbsBundle } from 'react-icons/gi';
import { useApp } from '../context/AppContext';

const features = [
  { icon: <FiShield className="text-2xl" />, title: '100% Organic', desc: 'Certified organic products, free from harmful chemicals.' },
  { icon: <FiTruck className="text-2xl" />, title: 'Fast Delivery', desc: 'Free shipping on orders above ₹999 across India.' },
  { icon: <FiAward className="text-2xl" />, title: 'Premium Quality', desc: 'Handpicked and lab-tested for purity and potency.' },
  { icon: <FiRefreshCw className="text-2xl" />, title: 'Easy Returns', desc: '7-day hassle-free return policy on all products.' },
];

const categoryIcons = {
  Superfoods: <GiPlantSeed className="text-3xl text-orange-500" />,
  Oils: <GiHerbsBundle className="text-3xl text-orange-500" />,
  Herbs: <GiHerbsBundle className="text-3xl text-orange-500" />,
  Beverages: <GiHerbsBundle className="text-3xl text-orange-500" />,
  Seeds: <GiPlantSeed className="text-3xl text-orange-500" />,
  'Natural Sweeteners': <GiLeafSwirl className="text-3xl text-orange-500" />,
};

const Home = () => {
  const { setActivePage } = useApp();
  const featuredProducts = products.slice(0, 4);

  return (
    <div>
      {/* Hero Slider */}
      <HeroSlider />

      {/* Features strip */}
      <section className="bg-indigo-600 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <div key={i} className="flex flex-col items-center text-center gap-2">
              <div className="bg-white/20 p-3 rounded-full">{f.icon}</div>
              <h4 className="font-bold text-sm">{f.title}</h4>
              <p className="text-white/80 text-xs leading-relaxed hidden sm:block">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <span className="text-orange-500 font-semibold text-sm uppercase tracking-widest">Browse</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-800 mt-1">Shop by Category</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.slice(1).map((cat) => (
              <button
                key={cat}
                onClick={() => setActivePage('products')}
                className="bg-white rounded-2xl p-5 flex flex-col items-center gap-3 shadow hover:shadow-lg transition-all hover:-translate-y-1 border border-gray-100 group"
              >
                <div className="bg-orange-50 p-3 rounded-xl group-hover:bg-orange-100 transition-colors">
                  {categoryIcons[cat] || <GiLeafSwirl className="text-3xl text-orange-500" />}
                </div>
                <span className="text-xs font-semibold text-gray-700 text-center leading-tight">{cat}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
            <div>
              <span className="text-orange-500 font-semibold text-sm uppercase tracking-widest">Handpicked</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-800 mt-1">Featured Products</h2>
            </div>
            <button
              onClick={() => setActivePage('products')}
              className="flex items-center gap-2 text-orange-500 font-semibold hover:gap-3 transition-all text-sm"
            >
              View All Products <FiArrowRight />
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Ad Banner */}
      <section className="py-10 px-4 bg-gradient-to-r from-indigo-800 to-orange-500">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-white">
          <div>
            <h3 className="text-2xl sm:text-3xl font-extrabold mb-2">🌿 New Arrivals This Season</h3>
            <p className="text-white/80 text-sm sm:text-base">
              Explore our latest range of superfoods and herbal extracts. Use code <strong>NEW20</strong> for 20% off.
            </p>
          </div>
          <button
            onClick={() => setActivePage('products')}
            className="flex-shrink-0 bg-white text-indigo-700 font-bold px-8 py-3 rounded-full hover:bg-indigo-50 transition-all shadow-lg text-sm"
          >
            Shop New Arrivals
          </button>
        </div>
      </section>

      {/* Bestsellers */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
            <div>
              <span className="text-orange-500 font-semibold text-sm uppercase tracking-widest">Popular</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-800 mt-1">Bestsellers</h2>
            </div>
            <button
              onClick={() => setActivePage('products')}
              className="flex items-center gap-2 text-orange-500 font-semibold hover:gap-3 transition-all text-sm"
            >
              View All <FiArrowRight />
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.slice(4).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-14 bg-white">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <GiLeafSwirl className="text-5xl text-orange-400 mx-auto mb-4" />
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-800 mb-3">
            Stay in the Loop
          </h2>
          <p className="text-gray-500 mb-6 text-sm sm:text-base">
            Subscribe for exclusive offers, health tips, and new product launches.
          </p>
          <form
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="Enter your email..."
              className="flex-1 border border-gray-200 rounded-full px-5 py-3 text-sm outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100 transition"
            />
            <button
              type="submit"
              className="bg-orange-500 text-white font-semibold px-7 py-3 rounded-full hover:bg-orange-600 transition text-sm"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Home;
