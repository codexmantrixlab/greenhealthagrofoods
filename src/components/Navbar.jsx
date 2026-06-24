import React, { useState, useEffect } from 'react';
import { FiShoppingCart, FiUser, FiMenu, FiX, FiSearch } from 'react-icons/fi';
import { MdLocalOffer } from 'react-icons/md';
import { useApp } from '../context/AppContext';
import Logo from './Logo';

const navLinks = [
  { label: 'Home', page: 'home' },
  { label: 'Products', page: 'products' },
  { label: 'Ingredients', page: 'ingredients' },
  { label: 'About', page: 'about' },
];

const Navbar = () => {
  const {
    cartCount,
    setIsCartOpen,
    setIsProfileOpen,
    activePage,
    setActivePage,
    isMobileMenuOpen,
    setIsMobileMenuOpen,
  } = useApp();

  const [scrolled, setScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearch, setShowSearch] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNav = (page) => {
    setActivePage(page);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Top announcement bar */}
      <div className="bg-indigo-700 text-white text-center py-2 text-xs sm:text-sm font-medium tracking-wide">
        <span className="flex items-center justify-center gap-2">
          <MdLocalOffer className="text-yellow-300" />
          Free shipping on orders above ₹999 | Use code <strong>GREENHEALTH10</strong> for 10% off
          <MdLocalOffer className="text-yellow-300" />
        </span>
      </div>

      {/* Main Navbar */}
      <nav
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? 'bg-white shadow-lg'
            : 'bg-white/95 backdrop-blur-md shadow-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <button onClick={() => handleNav('home')} className="flex-shrink-0">
              <Logo />
            </button>

            {/* Desktop Nav Links */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.page}
                  onClick={() => handleNav(link.page)}
                  className={`text-sm font-semibold transition-all duration-200 relative group ${
                    activePage === link.page
                      ? 'text-orange-500'
                      : 'text-gray-700 hover:text-orange-500'
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-orange-500 transition-all duration-200 ${
                      activePage === link.page ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </button>
              ))}
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Search */}
              <div className="relative hidden sm:block">
                {showSearch ? (
                  <div className="flex items-center bg-gray-100 rounded-full px-4 py-2 gap-2">
                    <FiSearch className="text-gray-400 text-sm" />
                    <input
                      autoFocus
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search products..."
                      className="bg-transparent text-sm outline-none w-40 text-gray-700"
                      onBlur={() => { setShowSearch(false); setSearchQuery(''); }}
                    />
                  </div>
                ) : (
                  <button
                    onClick={() => setShowSearch(true)}
                    className="p-2 rounded-full hover:bg-gray-100 text-gray-600 hover:text-orange-500 transition-colors"
                  >
                    <FiSearch className="text-xl" />
                  </button>
                )}
              </div>

              {/* Cart */}
              <button
                onClick={() => setIsCartOpen(true)}
                className="relative p-2 rounded-full hover:bg-gray-100 text-gray-600 hover:text-orange-500 transition-colors"
                aria-label="Open cart"
              >
                <FiShoppingCart className="text-xl" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold shadow-sm">
                    {cartCount > 9 ? '9+' : cartCount}
                  </span>
                )}
              </button>

              {/* Profile */}
              <button
                onClick={() => setIsProfileOpen(true)}
                className="p-2 rounded-full hover:bg-gray-100 text-gray-600 hover:text-orange-500 transition-colors"
                aria-label="Open profile"
              >
                <FiUser className="text-xl" />
              </button>

              {/* Mobile menu toggle */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 rounded-full hover:bg-gray-100 text-gray-600 transition-colors"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <FiX className="text-xl" /> : <FiMenu className="text-xl" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
            <div className="px-4 py-3 space-y-1">
              {navLinks.map((link) => (
                <button
                  key={link.page}
                  onClick={() => handleNav(link.page)}
                  className={`w-full text-left px-4 py-3 rounded-lg text-sm font-semibold transition-colors ${
                    activePage === link.page
                      ? 'bg-orange-50 text-orange-500'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {link.label}
                </button>
              ))}
              {/* Mobile Search */}
              <div className="flex items-center bg-gray-100 rounded-full px-4 py-2 gap-2 mt-2">
                <FiSearch className="text-gray-400" />
                <input
                  type="text"
                  placeholder="Search products..."
                  className="bg-transparent text-sm outline-none w-full text-gray-700"
                />
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
