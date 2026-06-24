import React from 'react';
import { FiX, FiTrash2, FiPlus, FiMinus, FiShoppingBag, FiArrowRight } from 'react-icons/fi';
import { MdLocalOffer } from 'react-icons/md';
import { useApp } from '../context/AppContext';

const Cart = () => {
  const {
    cartItems,
    removeFromCart,
    updateQuantity,
    clearCart,
    cartTotal,
    isCartOpen,
    setIsCartOpen,
    getDiscountedPrice,
  } = useApp();

  if (!isCartOpen) return null;

  const totalOriginal = cartItems.reduce(
    (sum, item) => sum + item.originalPrice * item.quantity,
    0
  );
  const totalSavings = totalOriginal - cartTotal;
  const shipping = cartTotal >= 999 ? 0 : 79;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/50 z-50 backdrop-blur-sm"
        onClick={() => setIsCartOpen(false)}
      />

      {/* Drawer */}
      <div className="fixed right-0 top-0 h-full w-full sm:w-96 bg-white z-50 flex flex-col shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100 bg-orange-600 text-white">
          <div className="flex items-center gap-2">
            <FiShoppingBag className="text-xl" />
            <h2 className="font-bold text-lg">Shopping Cart</h2>
            {cartItems.length > 0 && (
              <span className="bg-white text-orange-600 text-xs font-bold px-2 py-0.5 rounded-full">
                {cartItems.reduce((s, i) => s + i.quantity, 0)}
              </span>
            )}
          </div>
          <button
            onClick={() => setIsCartOpen(false)}
            className="p-1.5 rounded-full hover:bg-white/20 transition-colors"
            aria-label="Close cart"
          >
            <FiX className="text-xl" />
          </button>
        </div>

        {/* Empty state */}
        {cartItems.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center gap-4 text-center px-6">
            <div className="text-6xl">🛒</div>
            <h3 className="font-bold text-gray-700 text-xl">Your cart is empty</h3>
            <p className="text-gray-400 text-sm">Add some organic goodness to get started!</p>
            <button
              onClick={() => setIsCartOpen(false)}
              className="bg-orange-600 text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-orange-700 transition flex items-center gap-2"
            >
              Browse Products <FiArrowRight />
            </button>
          </div>
        ) : (
          <>
            {/* Items */}
            <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3">
              {cartItems.map((item) => {
                const price = getDiscountedPrice(item.originalPrice, item.discount);
                return (
                  <div
                    key={item.id}
                    className="flex gap-3 bg-gray-50 rounded-xl p-3 border border-gray-100"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded-lg flex-shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-gray-800 text-sm line-clamp-2 leading-snug">
                        {item.name}
                      </h4>
                      <p className="text-xs text-gray-500 mt-0.5">{item.category}</p>
                      {item.discount > 0 && (
                        <span className="inline-flex items-center gap-1 text-xs text-orange-600 font-medium mt-1">
                          <MdLocalOffer /> {item.discount}% off
                        </span>
                      )}
                      <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden bg-white">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="px-2 py-1 hover:bg-gray-100 transition-colors text-gray-600"
                          >
                            <FiMinus className="text-xs" />
                          </button>
                          <span className="px-3 text-sm font-semibold text-gray-800">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="px-2 py-1 hover:bg-gray-100 transition-colors text-gray-600"
                          >
                            <FiPlus className="text-xs" />
                          </button>
                        </div>
                        <div className="text-right">
                          <span className="font-bold text-gray-900 text-sm">
                            ₹{(price * item.quantity).toLocaleString('en-IN')}
                          </span>
                          {item.discount > 0 && (
                            <div className="text-xs text-gray-400 line-through">
                              ₹{(item.originalPrice * item.quantity).toLocaleString('en-IN')}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-gray-400 hover:text-red-500 transition-colors self-start p-1"
                      aria-label="Remove item"
                    >
                      <FiTrash2 className="text-sm" />
                    </button>
                  </div>
                );
              })}
            </div>

            {/* Summary */}
            <div className="border-t border-gray-100 px-5 py-4 space-y-3 bg-white">
              {/* Shipping notice */}
              {shipping > 0 ? (
                <div className="text-xs text-amber-600 bg-amber-50 rounded-lg px-3 py-2 text-center border border-amber-200">
                  Add ₹{(999 - cartTotal).toLocaleString('en-IN')} more for FREE shipping!
                </div>
              ) : (
                <div className="text-xs text-orange-600 bg-orange-50 rounded-lg px-3 py-2 text-center border border-orange-200">
                  🎉 You've unlocked FREE shipping!
                </div>
              )}

              {/* Breakdown */}
              <div className="space-y-1.5 text-sm">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span>₹{totalOriginal.toLocaleString('en-IN')}</span>
                </div>
                {totalSavings > 0 && (
                  <div className="flex justify-between text-orange-600 font-medium">
                    <span>You Save</span>
                    <span>-₹{totalSavings.toLocaleString('en-IN')}</span>
                  </div>
                )}
                <div className="flex justify-between text-gray-600">
                  <span>Shipping</span>
                  <span>{shipping === 0 ? <span className="text-orange-600 font-medium">FREE</span> : `₹${shipping}`}</span>
                </div>
                <div className="border-t pt-2 flex justify-between font-extrabold text-gray-900 text-base">
                  <span>Total</span>
                  <span>₹{(cartTotal + shipping).toLocaleString('en-IN')}</span>
                </div>
              </div>

              {/* CTA */}
              <button className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 rounded-xl transition-all active:scale-95 flex items-center justify-center gap-2">
                Proceed to Checkout <FiArrowRight />
              </button>
              <button
                onClick={clearCart}
                className="w-full text-xs text-gray-400 hover:text-red-500 transition-colors py-1"
              >
                Clear all items
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Cart;
