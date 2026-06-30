import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CartDrawer({ isOpen, onClose }: CartDrawerProps) {
  const { cart, removeFromCart, updateQuantity, totalPrice, totalItems } = useCart();
  const navigate = useNavigate();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 z-[150] backdrop-blur-sm"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-white z-[160] shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="p-6 border-b flex items-center justify-between">
              <div className="flex items-center gap-2">
                <ShoppingBag size={20} />
                <h2 className="text-lg font-medium uppercase tracking-widest">Shopping Bag ({totalItems})</h2>
              </div>
              <button 
                onClick={onClose}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto p-6 space-y-8">
              {cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-gray-400 space-y-4">
                  <ShoppingBag size={48} strokeWidth={1} />
                  <p className="uppercase tracking-widest text-sm">Your bag is empty</p>
                  <button 
                    onClick={onClose}
                    className="text-black underline underline-offset-4 text-xs uppercase tracking-widest hover:text-gray-600"
                  >
                    Continue Shopping
                  </button>
                </div>
              ) : (
                cart.map((item) => (
                  <div key={`${item.id}-${item.selectedSize}-${item.selectedColor.name}`} className="flex gap-4">
                    <div 
                      className="w-24 h-32 bg-gray-100 flex-shrink-0 cursor-pointer overflow-hidden"
                      onClick={() => {
                        navigate(`/product/${item.id}`);
                        onClose();
                      }}
                    >
                      <img 
                        src={item.images[0]} 
                        alt={item.name}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="flex-1 flex flex-col justify-between py-1">
                      <div>
                        <div className="flex justify-between items-start">
                          <h3 
                            className="text-sm font-medium uppercase tracking-wider cursor-pointer hover:underline"
                            onClick={() => {
                              navigate(`/product/${item.id}`);
                              onClose();
                            }}
                          >
                            {item.name}
                          </h3>
                          <button 
                            onClick={() => removeFromCart(item.id, item.selectedSize, item.selectedColor.name)}
                            className="text-gray-400 hover:text-black transition-colors"
                          >
                            <X size={16} />
                          </button>
                        </div>
                        <p className="text-xs text-gray-500 mt-1 uppercase tracking-widest">
                          Size: {item.selectedSize} | Color: {item.selectedColor.name}
                        </p>
                        <p className="text-sm font-medium mt-2">{item.price}</p>
                      </div>

                      <div className="flex items-center gap-4">
                        <div className="flex items-center border border-gray-200 rounded-sm">
                          <button 
                            onClick={() => updateQuantity(item.id, item.selectedSize, item.selectedColor.name, item.quantity - 1)}
                            className="p-1 hover:bg-gray-50"
                          >
                            <Minus size={14} />
                          </button>
                          <span className="w-8 text-center text-xs font-medium">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.id, item.selectedSize, item.selectedColor.name, item.quantity + 1)}
                            className="p-1 hover:bg-gray-50"
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer */}
            {cart.length > 0 && (
              <div className="p-6 border-t bg-gray-50 space-y-4">
                <div className="flex justify-between items-center uppercase tracking-widest text-sm font-medium">
                  <span>Total</span>
                  <span>{totalPrice.toFixed(2)} USD</span>
                </div>
                <p className="text-[10px] text-gray-500 uppercase tracking-widest text-center">
                  Shipping and taxes calculated at checkout
                </p>
                <button 
                  className="w-full bg-black text-white py-4 uppercase tracking-[0.2em] text-xs font-bold hover:bg-gray-900 transition-colors"
                  onClick={() => {
                    // Navigate to checkout or just show success
                    alert('Proceeding to checkout...');
                  }}
                >
                  Process Order
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
