import React, { useState } from 'react';
import {
  FiX, FiUser, FiMail, FiPhone, FiMapPin,
  FiShoppingBag, FiHeart, FiSettings, FiLogOut,
  FiEdit2, FiChevronRight,
} from 'react-icons/fi';
import { MdVerified } from 'react-icons/md';
import { useApp } from '../context/AppContext';

const menuItems = [
  { icon: <FiShoppingBag />, label: 'My Orders', count: '3' },
  { icon: <FiHeart />, label: 'Wishlist', count: '5' },
  { icon: <FiMapPin />, label: 'Saved Addresses', count: '2' },
  { icon: <FiSettings />, label: 'Account Settings' },
];

const recentOrders = [
  { id: '#GH1023', date: 'Jun 15, 2025', items: 'Moringa Powder, Chia Seeds', status: 'Delivered', amount: '₹1,198' },
  { id: '#GH0987', date: 'Jun 02, 2025', items: 'Ashwagandha, Spirulina', status: 'In Transit', amount: '₹1,398' },
  { id: '#GH0945', date: 'May 20, 2025', items: 'Raw Honey, Coconut Oil', status: 'Delivered', amount: '₹997' },
];

const statusColors = {
  Delivered: 'bg-orange-100 text-orange-700',
  'In Transit': 'bg-amber-100 text-amber-700',
  Processing: 'bg-blue-100 text-blue-700',
};

const Profile = () => {
  const { isProfileOpen, setIsProfileOpen } = useApp();
  const [activeTab, setActiveTab] = useState('profile');

  if (!isProfileOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/50 z-50 backdrop-blur-sm"
        onClick={() => setIsProfileOpen(false)}
      />

      {/* Drawer */}
      <div className="fixed right-0 top-0 h-full w-full sm:w-96 bg-white z-50 flex flex-col shadow-2xl overflow-y-auto">
        {/* Header */}
        <div className="bg-gradient-to-br from-orange-700 to-indigo-600 px-5 pt-5 pb-10 relative">
          <button
            onClick={() => setIsProfileOpen(false)}
            className="absolute top-4 right-4 p-1.5 rounded-full hover:bg-white/20 text-white transition-colors"
          >
            <FiX className="text-xl" />
          </button>
          <div className="flex flex-col items-center gap-3 text-white mt-4">
            <div className="relative">
              <div className="w-20 h-20 rounded-full bg-white/20 border-4 border-white flex items-center justify-center text-3xl font-extrabold text-white">
                A
              </div>
              <button className="absolute bottom-0 right-0 bg-white text-orange-600 rounded-full p-1 shadow-md">
                <FiEdit2 className="text-xs" />
              </button>
            </div>
            <div className="text-center">
              <div className="flex items-center gap-1 justify-center">
                <h2 className="font-bold text-lg">N H</h2>
                <MdVerified className="text-blue-300" />
              </div>
              <p className="text-white/80 text-sm">n.h@gmail.com</p>
              <span className="inline-block mt-1 bg-white/20 text-white text-xs px-3 py-1 rounded-full border border-white/30">
                🌿 Green Member
              </span>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-gray-100 -mt-4 bg-white rounded-t-2xl z-10">
          {['profile', 'orders'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 py-3.5 text-sm font-semibold capitalize transition-colors ${
                activeTab === tab
                  ? 'text-orange-600 border-b-2 border-orange-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              {tab === 'profile' ? 'My Profile' : 'Orders'}
            </button>
          ))}
        </div>

        {activeTab === 'profile' && (
          <div className="flex-1 px-5 py-4">
            {/* Info */}
            <div className="bg-gray-50 rounded-xl p-4 space-y-3 mb-5 border border-gray-100">
              <h3 className="font-bold text-gray-700 text-sm mb-2">Personal Information</h3>
              {[
                { icon: <FiUser className="text-orange-500" />, label: 'Full Name', value: 'N H' },
                { icon: <FiMail className="text-orange-500" />, label: 'Email', value: 'n.h@gmail.com' },
                { icon: <FiPhone className="text-orange-500" />, label: 'Phone', value: '+91 98765 43210' },
                { icon: <FiMapPin className="text-orange-500" />, label: 'Address', value: '12 MG Road, Bengaluru, KA 560001' },
              ].map((info, i) => (
                <div key={i} className="flex items-start gap-3 text-sm">
                  <div className="mt-0.5">{info.icon}</div>
                  <div>
                    <p className="text-xs text-gray-400">{info.label}</p>
                    <p className="text-gray-700 font-medium">{info.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Menu */}
            <div className="space-y-2 mb-5">
              {menuItems.map((item, i) => (
                <button
                  key={i}
                  className="w-full flex items-center justify-between px-4 py-3 rounded-xl bg-gray-50 hover:bg-orange-50 hover:border-orange-200 border border-transparent transition-all group"
                >
                  <div className="flex items-center gap-3 text-gray-700 group-hover:text-orange-600 text-sm font-medium">
                    <span className="text-orange-500 text-base">{item.icon}</span>
                    {item.label}
                  </div>
                  <div className="flex items-center gap-2">
                    {item.count && (
                      <span className="bg-orange-100 text-orange-700 text-xs font-semibold px-2 py-0.5 rounded-full">
                        {item.count}
                      </span>
                    )}
                    <FiChevronRight className="text-gray-400 text-sm" />
                  </div>
                </button>
              ))}
            </div>

            {/* Logout */}
            <button className="w-full flex items-center justify-center gap-2 py-3 rounded-xl border-2 border-red-200 text-red-500 hover:bg-red-50 transition-all text-sm font-semibold">
              <FiLogOut /> Sign Out
            </button>
          </div>
        )}

        {activeTab === 'orders' && (
          <div className="flex-1 px-5 py-4 space-y-4">
            <h3 className="font-bold text-gray-700 text-sm">Recent Orders</h3>
            {recentOrders.map((order, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-4 border border-gray-100 hover:shadow-sm transition-shadow">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <p className="font-bold text-gray-800 text-sm">{order.id}</p>
                    <p className="text-xs text-gray-400">{order.date}</p>
                  </div>
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${statusColors[order.status]}`}>
                    {order.status}
                  </span>
                </div>
                <p className="text-xs text-gray-600 line-clamp-1 mb-2">{order.items}</p>
                <div className="flex justify-between items-center">
                  <span className="font-extrabold text-gray-900 text-sm">{order.amount}</span>
                  <button className="text-xs text-orange-600 font-semibold hover:underline">View Details</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Profile;
