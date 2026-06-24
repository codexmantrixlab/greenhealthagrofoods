import React from 'react';
import {
  FiFacebook, FiInstagram, FiTwitter, FiYoutube,
  FiMail, FiPhone, FiMapPin, FiArrowRight,
} from 'react-icons/fi';
import { GiLeafSwirl } from 'react-icons/gi';
import Logo from './Logo';
import { useApp } from '../context/AppContext';

const footerLinks = {
  'Quick Links': [
    { label: 'Home', page: 'home' },
    { label: 'Products', page: 'products' },
    { label: 'Ingredients', page: 'ingredients' },
    { label: 'About Us', page: 'about' },
  ],
  'Support': [
    { label: 'FAQ', page: null },
    { label: 'Shipping Policy', page: null },
    { label: 'Return Policy', page: null },
    { label: 'Track Order', page: null },
  ],
  'Categories': [
    { label: 'Superfoods', page: 'products' },
    { label: 'Herbs & Extracts', page: 'products' },
    { label: 'Organic Oils', page: 'products' },
    { label: 'Natural Seeds', page: 'products' },
  ],
};

const socials = [
  { icon: <FiFacebook />, label: 'Facebook', href: '#' },
  { icon: <FiInstagram />, label: 'Instagram', href: '#' },
  { icon: <FiTwitter />, label: 'Twitter', href: '#' },
  { icon: <FiYoutube />, label: 'YouTube', href: '#' },
];

const certBadges = ['🌿 FSSAI Certified', '✅ ISO 9001:2015', '🌱 100% Organic', '♻️ Eco Packaging'];

const Footer = () => {
  const { setActivePage } = useApp();

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
        {/* Brand column */}
        <div className="lg:col-span-2 space-y-4">
          <Logo size="md" dark />
          <p className="text-sm leading-relaxed text-gray-400 max-w-xs mt-2">
            Green Health brings you the finest organic health products sourced directly from nature.
            Pure. Potent.
          </p>
          {/* Contact */}
          <div className="space-y-2 text-sm">
            <div className="flex items-center gap-2 text-gray-400">
              <FiMail className="text-orange-400 flex-shrink-0" />
              <span>greenhealthagrofoods@gmail.com</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400">
              <FiPhone className="text-orange-400 flex-shrink-0" />
              <span> +91 9607171004, 7030315603</span>
            </div>
            <div className="flex items-start gap-2 text-gray-400">
              <FiMapPin className="text-orange-400 flex-shrink-0 mt-0.5" />
              <span>Gat No. 427/2, Alka Farm, A/P-Tal - Kagal, Dist - Kolhapur Maharashtra - 416216, INDIA</span>
            </div>
          </div>
          {/* Socials */}
          <div className="flex gap-3 pt-2">
            {socials.map((s, i) => (
              <a
                key={i}
                href={s.href}
                aria-label={s.label}
                className="w-9 h-9 rounded-full bg-gray-800 hover:bg-orange-600 flex items-center justify-center text-gray-400 hover:text-white transition-all"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Links columns */}
        {Object.entries(footerLinks).map(([section, links]) => (
          <div key={section}>
            <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">{section}</h4>
            <ul className="space-y-2">
              {links.map((link, i) => (
                <li key={i}>
                  <button
                    onClick={() => link.page && setActivePage(link.page)}
                    className="flex items-center gap-1.5 text-sm text-gray-400 hover:text-orange-400 transition-colors group"
                  >
                    <FiArrowRight className="text-xs opacity-0 group-hover:opacity-100 -ml-1 transition-all" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Certifications */}
      {/* <div className="border-t border-gray-800 py-6">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap items-center justify-center gap-4">
          {certBadges.map((badge, i) => (
            <span key={i} className="text-xs bg-gray-800 text-gray-300 px-3 py-1.5 rounded-full border border-gray-700">
              {badge}
            </span>
          ))}
        </div>
      </div> */}

      {/* Bottom bar */}
      <div className="border-t border-gray-800 py-5">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-500">
          <div className="flex items-center gap-1">
            <GiLeafSwirl className="text-orange-500" />
            <span>© 2025 Green Health Agro Foods. Designed By TheWifix.</span>
          </div>
          <div className="flex gap-4">
            <button className="hover:text-orange-400 transition-colors">Privacy Policy</button>
            <button className="hover:text-orange-400 transition-colors">Terms of Service</button>
            <button className="hover:text-orange-400 transition-colors">Cookie Policy</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
