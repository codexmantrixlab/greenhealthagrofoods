import React from 'react';
import { FiCheckCircle, FiAlertCircle, FiX } from 'react-icons/fi';
import { useApp } from '../context/AppContext';

const Notification = () => {
  const { notification } = useApp();
  if (!notification) return null;

  const isSuccess = notification.type === 'success';

  return (
    <div
      className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] flex items-center gap-3 px-5 py-3.5 rounded-xl shadow-xl text-sm font-medium text-white transition-all animate-slide-up ${
        isSuccess ? 'bg-orange-600' : 'bg-red-500'
      }`}
      role="alert"
    >
      {isSuccess ? (
        <FiCheckCircle className="text-xl flex-shrink-0" />
      ) : (
        <FiAlertCircle className="text-xl flex-shrink-0" />
      )}
      {notification.message}
    </div>
  );
};

export default Notification;
