import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Send, X, Loader2 } from 'lucide-react';
import { getStylistAdvice, OutfitRecommendation } from '../services/stylistService';
import confetti from 'canvas-confetti';

export default function VirtualStylist() {
  const [isOpen, setIsOpen] = useState(false);
  const [prompt, setPrompt] = useState('');
  const [loading, setLoading] = useState(false);
  const [advice, setAdvice] = useState<OutfitRecommendation | null>(null);

  const handleAsk = async () => {
    if (!prompt.trim()) return;
    setLoading(true);
    try {
      const result = await getStylistAdvice(prompt);
      setAdvice(result);
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#000000', '#ffffff', '#888888']
      });
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  const handleSearchItem = (item: string) => {
    setIsOpen(false);
    window.dispatchEvent(new CustomEvent('open-search', { detail: { query: item } }));
  };

  return (
    <>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-8 right-8 z-[80] bg-black text-white p-4 rounded-full shadow-2xl flex items-center gap-2 group"
      >
        <Sparkles size={20} className="group-hover:animate-pulse" />
        <span className="text-[10px] tracking-[0.3em] font-bold uppercase overflow-hidden w-0 group-hover:w-24 transition-all duration-500 whitespace-nowrap">
          AI Stylist
        </span>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed bottom-24 right-8 z-[80] w-[90vw] md:w-[400px] max-h-[calc(100vh-140px)] md:max-h-[600px] bg-white border border-gray-100 shadow-2xl rounded-2xl overflow-hidden flex flex-col"
          >
            <div className="p-6 bg-black text-white flex justify-between items-center flex-shrink-0">
              <div className="flex items-center gap-3">
                <Sparkles size={18} />
                <h3 className="text-sm font-serif font-bold tracking-tight uppercase">ZARA AI STYLIST</h3>
              </div>
              <button onClick={() => setIsOpen(false)} className="hover:opacity-60">
                <X size={20} />
              </button>
            </div>

            <div className="flex-1 p-6 overflow-y-auto space-y-6 hide-scrollbar">
              {!advice && !loading && (
                <div className="text-center space-y-4 py-8">
                  <p className="text-xs tracking-widest text-gray-400 uppercase">
                    What are you looking for today?
                  </p>
                  <p className="text-[10px] text-gray-300 italic">
                    "A minimalist look for a winter wedding" or "Casual chic for a city trip"
                  </p>
                </div>
              )}

              {loading && (
                <div className="flex flex-col items-center justify-center py-12 gap-4">
                  <Loader2 size={32} className="animate-spin text-gray-200" />
                  <p className="text-[10px] tracking-widest text-gray-400 uppercase animate-pulse">
                    Curating your perfect look...
                  </p>
                </div>
              )}

              {advice && !loading && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-4"
                >
                  <h4 className="text-xl font-serif font-black tracking-tight">{advice.title}</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">{advice.description}</p>
                  <div className="space-y-2">
                    <p className="text-[10px] tracking-[0.3em] font-bold uppercase text-gray-400">Items to look for</p>
                    <ul className="space-y-1">
                      {advice.items.map((item, i) => (
                        <li key={i} className="text-[11px] tracking-widest uppercase flex items-center gap-2 group/item">
                          <div className="w-1 h-1 bg-black rounded-full flex-shrink-0" />
                          <button
                            onClick={() => handleSearchItem(item)}
                            className="text-[10px] tracking-widest uppercase text-left hover:underline hover:text-black text-gray-600 font-medium cursor-pointer"
                          >
                            {item}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              )}
            </div>

            <div className="p-4 border-t border-gray-100 bg-gray-50 flex gap-2 flex-shrink-0">
              <input 
                type="text" 
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleAsk()}
                placeholder="DESCRIBE YOUR STYLE..." 
                className="flex-1 bg-white border border-gray-200 rounded-full px-4 py-2 text-[10px] tracking-widest outline-none focus:border-black transition-colors uppercase"
              />
              <button 
                onClick={handleAsk}
                disabled={loading}
                className="bg-black text-white p-2 rounded-full hover:scale-110 transition-transform disabled:opacity-50"
              >
                <Send size={18} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
