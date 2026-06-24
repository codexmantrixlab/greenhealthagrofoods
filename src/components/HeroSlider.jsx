import React, { useState, useEffect, useCallback } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { sliderData } from '../data/products';
import { useApp } from '../context/AppContext';

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const { setActivePage } = useApp();

  const goTo = useCallback(
    (index) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrent(index);
      setTimeout(() => setIsAnimating(false), 600);
    },
    [isAnimating]
  );

  const prev = () => goTo((current - 1 + sliderData.length) % sliderData.length);
  const next = useCallback(() => goTo((current + 1) % sliderData.length), [current, goTo]);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const slide = sliderData[current];

  return (
    <section className="relative w-full overflow-hidden bg-gray-900" style={{ minHeight: '480px' }}>
      {/* Background slides */}
      {sliderData.map((s, i) => (
        <div
          key={s.id}
          className={`absolute inset-0 transition-opacity duration-700 ${
            i === current ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {/* Overlay gradient */}
          <div className={`absolute inset-0 bg-gradient-to-r ${s.bg} opacity-85 z-10`} />
          {/* BG image */}
          <img
            src={s.image}
            alt={s.title}
            className="w-full h-full object-cover"
          />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 sm:px-8 flex items-center min-h-[480px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center w-full py-16">
          {/* Text */}
          <div
            key={current}
            className="text-white space-y-5 animate-fade-in"
          >
            <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-sm font-semibold px-4 py-1.5 rounded-full border border-white/30">
              {slide.tag}
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight whitespace-pre-line drop-shadow">
              {slide.title}
            </h1>
            <p className="text-white/90 text-base sm:text-lg max-w-md leading-relaxed">
              {slide.subtitle}
            </p>
            <div className="flex gap-4 pt-2">
              <button
                onClick={() => setActivePage('products')}
                className="bg-white text-orange-600 font-bold px-7 py-3 rounded-full hover:bg-orange-50 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 text-sm"
              >
                {slide.cta}
              </button>
              <button
                onClick={() => setActivePage('about')}
                className="border-2 border-white text-white font-semibold px-7 py-3 rounded-full hover:bg-white/10 transition-all text-sm"
              >
                Learn More
              </button>
            </div>
          </div>

          {/* Image card */}
          <div className="hidden md:flex justify-center">
            <div className="relative w-72 h-72 lg:w-80 lg:h-80">
              <div className="absolute inset-0 bg-white/20 rounded-full blur-3xl" />
              <img
                key={current}
                src={slide.image}
                alt="Product"
                className="relative z-10 w-full h-full object-cover rounded-2xl shadow-2xl border-4 border-white/30"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Arrows */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full backdrop-blur-sm transition-all border border-white/30"
        aria-label="Previous slide"
      >
        <FiChevronLeft className="text-2xl" />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full backdrop-blur-sm transition-all border border-white/30"
        aria-label="Next slide"
      >
        <FiChevronRight className="text-2xl" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex gap-2">
        {sliderData.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`rounded-full transition-all duration-300 ${
              i === current
                ? 'bg-white w-8 h-3'
                : 'bg-white/50 w-3 h-3 hover:bg-white/80'
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;
