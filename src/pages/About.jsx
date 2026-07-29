import React from 'react';
import { FiCheckCircle, FiTarget, FiHeart } from 'react-icons/fi';
import { GiLeafSwirl, GiPlantSeed, GiFarmer, GiClothes, GiSewingMachine, GiDiamondRing } from 'react-icons/gi';

const values = [
  {
    icon: <GiClothes className="text-3xl text-orange-600" />,
    title: "Premium Fabrics",
    desc: "We carefully select high-quality fabrics to ensure exceptional comfort, durability, and elegance in every outfit.",
  },
  {
    icon: <FiHeart className="text-3xl text-orange-600" />,
    title: "Customer Satisfaction",
    desc: "Your happiness is our priority. We strive to provide stylish collections, secure shopping, and excellent customer service.",
  },
  {
    icon: <GiSewingMachine className="text-3xl text-orange-600" />,
    title: "Expert Craftsmanship",
    desc: "Our sarees, kurtis, and dresses are crafted by skilled artisans with attention to every detail and finish.",
  },
  {
    icon: <GiDiamondRing className="text-3xl text-orange-600" />,
    title: "Timeless Elegance",
    desc: "Blending traditional artistry with modern fashion to create outfits perfect for every occasion.",
  },
];


const stats = [
  { value: "1000+", label: "Designer Collections" },
  { value: "15K+", label: "Satisfied Customers" },
  { value: "50+", label: "Latest Styles" },
  { value: "8+", label: "Years of Excellence" },
];

const team = [
  {
    name: 'Arjun Sharma',
    role: 'Founder & CEO',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&h=200&fit=crop&crop=face',
    bio: 'Passionate about bringing nature\'s best to every household.',
  },
  {
    name: 'Priya Nair',
    role: 'Head of Nutrition',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop&crop=face',
    bio: 'MSc in Food Science with 8 years of organic nutrition research.',
  },
  {
    name: 'Ravi Patel',
    role: 'Supply Chain Lead',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face',
    bio: 'Ensures every product travels from farm to your doorstep with care.',
  },
];

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-orange-800 to-indigo-600 text-white py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto text-center">
          <span className="inline-flex items-center gap-2 bg-white/20 text-white text-sm font-semibold px-4 py-1.5 rounded-full mb-6 border border-white/30">
            <GiLeafSwirl /> Our Story
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-5 leading-tight">
            Celebrating Tradition,<br />Crafting Elegance
          </h1>
          <p className="text-white/85 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            We are passionate about bringing timeless ethnic fashion to every wardrobe.
            Our carefully curated collection of sarees, kurtis, dresses, and traditional
            wear combines premium craftsmanship, elegant designs, and exceptional quality,
            making every occasion truly special.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white py-10 border-b">
        <div className="max-w-4xl mx-auto px-4 grid grid-cols-2 sm:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl sm:text-4xl font-extrabold text-orange-600">{stat.value}</div>
              <div className="text-gray-500 text-sm mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-orange-600 font-semibold text-sm uppercase tracking-widest">Why Us</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-800 mt-2 mb-5">
              Our Mission & Commitment
            </h2>
            <p className="text-gray-600 leading-relaxed mb-5">
              We are committed to bringing you premium ethnic fashion that blends
              tradition with modern elegance. Every saree, kurti, and dress is
              carefully selected to offer superior quality, timeless style, and
              exceptional comfort for every occasion.
            </p>
            <ul className="space-y-3">
              {[
                "Premium quality fabrics with superior craftsmanship",
                "Exclusive collections featuring the latest ethnic fashion trends",
                "Secure shopping with fast delivery across India",
                "Easy 7-day return and exchange policy",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-700 text-sm">
                  <FiCheckCircle className="text-orange-500 text-lg flex-shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=600&h=450&fit=crop"
              alt="Organic farm"
              className="rounded-2xl shadow-xl w-full object-cover"
            />
            <div className="absolute -bottom-4 -left-4 bg-orange-600 text-white p-4 rounded-xl shadow-lg">
              <GiPlantSeed className="text-3xl mb-1" />
              <div className="font-bold text-sm">Traditional Wear</div>
              <div className="text-xs text-orange-200">Premium Collection </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-orange-600 font-semibold text-sm uppercase tracking-widest">What We Stand For</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-800 mt-2">Our Core Values</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <div key={i} className="bg-orange-50 rounded-2xl p-6 text-center hover:shadow-md transition-shadow border border-orange-100">
                <div className="bg-white inline-flex p-3 rounded-xl mb-4 shadow-sm">{v.icon}</div>
                <h3 className="font-bold text-gray-800 mb-2">{v.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-orange-600 font-semibold text-sm uppercase tracking-widest">The People</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-800 mt-2">Meet Our Team</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {team.map((member, i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-52 object-cover"
                />
                <div className="p-5">
                  <h3 className="font-bold text-gray-800 text-lg">{member.name}</h3>
                  <p className="text-orange-600 text-sm font-medium mb-2">{member.role}</p>
                  <p className="text-gray-500 text-xs leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 px-4 bg-gradient-to-r from-orange-700 to-indigo-600 text-white text-center">
        <FiTarget className="text-5xl mx-auto mb-4 opacity-80" />
        <h2 className="text-3xl font-extrabold mb-3">Discover Your Perfect Ethnic Style</h2>
        <p className="text-white/80 mb-6 max-w-lg mx-auto text-sm">
          Explore our exclusive collection of sarees, kurtis, dresses, and traditional wear. Find the perfect outfit for every occasion with premium quality and timeless elegance.
        </p>
      </section>
    </div>
  );
};

export default About;
