import { useState } from 'react';
import Breadcrumbs from './Breadcrumbs';
import Reveal from './Reveal';
import { Search, MapPin, Phone, Mail, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface Store {
  name: string;
  address: string;
  phone: string;
  hours: string;
}

const MOCK_STORES: Record<string, Store[]> = {
  london: [
    {
      name: 'Zara Regent Street',
      address: '225-235 Regent St., London W1B 2EL',
      phone: '+44 20 7851 4300',
      hours: 'Mon-Sat: 10:00 - 21:00 / Sun: 12:00 - 18:00',
    },
    {
      name: 'Zara Oxford Street',
      address: '312 Oxford St., London W1C 1AY',
      phone: '+44 20 7318 0130',
      hours: 'Mon-Sat: 10:00 - 21:00 / Sun: 12:00 - 18:00',
    },
  ],
  newyork: [
    {
      name: 'Zara Fifth Avenue',
      address: '666 5th Ave., New York, NY 10103',
      phone: '+1 212-759-0066',
      hours: 'Mon-Sat: 10:00 - 20:00 / Sun: 11:00 - 19:00',
    },
    {
      name: 'Zara SoHo',
      address: '503 Broadway, New York, NY 10012',
      phone: '+1 212-274-1293',
      hours: 'Mon-Sat: 10:00 - 20:00 / Sun: 11:00 - 19:00',
    },
  ],
  paris: [
    {
      name: 'Zara Champs-Élysées',
      address: '92 Av. des Champs-Élysées, 75008 Paris',
      phone: '+33 1 53 43 97 00',
      hours: 'Mon-Sat: 10:00 - 21:00 / Sun: 10:00 - 20:00',
    },
  ],
  tokyo: [
    {
      name: 'Zara Ginza Store',
      address: '7-9-19 Ginza, Chuo City, Tokyo 104-0061',
      phone: '+81 3-3571-3311',
      hours: 'Daily: 11:00 - 21:00',
    },
  ],
};

export default function ContactPage() {
  // Contact Form State
  const [formData, setFormData] = useState({ name: '', email: '', subject: 'orders', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Store Search State
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<Store[]>(MOCK_STORES.london);

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill out all required fields.');
      return;
    }
    setIsSubmitting(true);
    // Mock API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: 'orders', message: '' });
    }, 1500);
  };

  const handleStoreSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const query = searchQuery.toLowerCase().replace(/\s+/g, '');
    let matched: Store[] = [];
    if (query.includes('london')) matched = MOCK_STORES.london;
    else if (query.includes('york') || query.includes('nyc') || query.includes('new')) matched = MOCK_STORES.newyork;
    else if (query.includes('paris')) matched = MOCK_STORES.paris;
    else if (query.includes('tokyo')) matched = MOCK_STORES.tokyo;
    else {
      // Find anything partial
      const allStores = Object.values(MOCK_STORES).flat();
      matched = allStores.filter(s => s.name.toLowerCase().includes(query) || s.address.toLowerCase().includes(query));
    }
    setSearchResults(matched);
  };

  return (
    <div className="min-h-screen pt-32 pb-32 px-6 md:px-12 bg-white">
      <div className="max-w-[1600px] mx-auto space-y-32">
        <Reveal>
          <Breadcrumbs items={[{ label: 'Contact' }]} />
        </Reveal>

        {/* Section 1: Customer Service Info & Contact Form */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5 space-y-12">
            <div className="space-y-4">
              <span className="text-[10px] tracking-[0.4em] font-bold text-gray-400 uppercase">Support Desk</span>
              <h1 className="text-5xl md:text-7xl font-serif font-black tracking-tighter uppercase leading-none">
                CUSTOMER SERVICE
              </h1>
              <p className="text-xs tracking-widest text-gray-500 uppercase leading-relaxed max-w-sm">
                Our support team is available Monday to Friday from 09:00 to 18:00 EST. Feel free to contact us or browse topics.
              </p>
            </div>

            <div className="space-y-8 pt-8 border-t border-gray-100">
              <div className="flex items-center gap-4 text-xs font-bold tracking-widest uppercase">
                <Phone size={16} className="text-gray-400" />
                <span>+1 877 318 0130</span>
              </div>
              <div className="flex items-center gap-4 text-xs font-bold tracking-widest uppercase">
                <Mail size={16} className="text-gray-400" />
                <span>support@zara-premium.com</span>
              </div>
            </div>

            {/* Quick Helper Links (matching footer) */}
            <div className="space-y-6 pt-8 border-t border-gray-100">
              <h4 className="text-[10px] tracking-[0.3em] font-bold uppercase text-gray-400">FAQS</h4>
              <div className="grid grid-cols-2 gap-4 text-[10px] tracking-widest uppercase font-bold text-gray-600">
                <div className="space-y-2">
                  <p className="hover:text-black cursor-pointer">Shipping & Delivery</p>
                  <p className="text-[9px] text-gray-400 font-medium normal-case">Free shipping over $50 USD. Delivery in 3-5 days.</p>
                </div>
                <div className="space-y-2">
                  <p className="hover:text-black cursor-pointer">Exchanges & Returns</p>
                  <p className="text-[9px] text-gray-400 font-medium normal-case">Free returns within 30 days of purchase.</p>
                </div>
                <div className="space-y-2">
                  <p className="hover:text-black cursor-pointer">Order & Payments</p>
                  <p className="text-[9px] text-gray-400 font-medium normal-case">Secure payments via Credit Card or PayPal.</p>
                </div>
                <div className="space-y-2">
                  <p className="hover:text-black cursor-pointer">Product & Care</p>
                  <p className="text-[9px] text-gray-400 font-medium normal-case">Care label tips for premium fibers.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7 bg-gray-50 p-8 md:p-12 relative overflow-hidden">
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form 
                  key="form"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleFormSubmit}
                  className="space-y-8"
                >
                  <h3 className="text-2xl font-serif font-black tracking-tight uppercase">SEND US A MESSAGE</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2 border-b border-black/10 pb-2 focus-within:border-black transition-colors">
                      <label className="text-[9px] tracking-widest text-gray-400 font-bold uppercase block">NAME *</label>
                      <input 
                        type="text" 
                        name="name"
                        value={formData.name}
                        onChange={handleFormChange}
                        required
                        className="bg-transparent border-none outline-none text-xs tracking-widest uppercase w-full"
                      />
                    </div>
                    <div className="space-y-2 border-b border-black/10 pb-2 focus-within:border-black transition-colors">
                      <label className="text-[9px] tracking-widest text-gray-400 font-bold uppercase block">EMAIL *</label>
                      <input 
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleFormChange}
                        required
                        className="bg-transparent border-none outline-none text-xs tracking-widest w-full"
                      />
                    </div>
                  </div>

                  <div className="space-y-2 border-b border-black/10 pb-2 focus-within:border-black transition-colors">
                    <label className="text-[9px] tracking-widest text-gray-400 font-bold uppercase block">SUBJECT</label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleFormChange}
                      className="bg-transparent border-none outline-none text-xs tracking-widest uppercase w-full cursor-pointer"
                    >
                      <option value="orders">Orders & Delivery</option>
                      <option value="returns">Returns & Refunds</option>
                      <option value="stylist">Virtual Stylist Feedback</option>
                      <option value="other">General Inquiries</option>
                    </select>
                  </div>

                  <div className="space-y-2 border-b border-black/10 pb-2 focus-within:border-black transition-colors">
                    <label className="text-[9px] tracking-widest text-gray-400 font-bold uppercase block">MESSAGE *</label>
                    <textarea 
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleFormChange}
                      required
                      className="bg-transparent border-none outline-none text-xs tracking-widest w-full resize-none uppercase"
                    />
                  </div>

                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="px-12 py-4 bg-black text-white text-[10px] tracking-[0.3em] font-bold uppercase hover:bg-gray-900 transition-colors w-full md:w-auto"
                  >
                    {isSubmitting ? 'Sending...' : 'SUBMIT MESSAGE'}
                  </button>
                </motion.form>
              ) : (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="h-full flex flex-col items-center justify-center text-center py-20 space-y-6"
                >
                  <CheckCircle size={48} className="text-black" />
                  <h3 className="text-3xl font-serif font-black tracking-tight uppercase">MESSAGE SENT</h3>
                  <p className="text-xs tracking-widest text-gray-500 uppercase leading-relaxed max-w-sm">
                    Thank you. Your inquiry has been submitted successfully. A representative will contact you via email shortly.
                  </p>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="px-10 py-3 border border-black text-[10px] tracking-widest font-bold uppercase hover:bg-black hover:text-white transition-colors"
                  >
                    SEND ANOTHER MESSAGE
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </section>

        {/* Section 2: Store Locator Mock */}
        <section className="pt-24 border-t border-gray-100 grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4 space-y-8">
            <span className="text-[10px] tracking-[0.4em] font-bold text-gray-400 uppercase">Retail Spaces</span>
            <h2 className="text-4xl md:text-6xl font-serif font-black tracking-tighter uppercase leading-none">
              STORE LOCATOR
            </h2>
            <p className="text-xs tracking-widest text-gray-500 uppercase leading-relaxed">
              Search by city name (e.g. \"London\", \"New York\", \"Paris\", \"Tokyo\") to find store address details, contact numbers, and opening times.
            </p>

            <form onSubmit={handleStoreSearch} className="flex border-b border-black pb-2 max-w-sm">
              <input 
                type="text" 
                placeholder="ENTER CITY" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-transparent border-none outline-none text-xs tracking-widest w-full uppercase"
              />
              <button type="submit" className="hover:opacity-60 transition-opacity">
                <Search size={16} />
              </button>
            </form>
          </div>

          <div className="lg:col-span-8">
            {searchResults.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {searchResults.map((store, idx) => (
                  <div key={idx} className="border border-gray-100 p-8 space-y-6">
                    <div className="flex gap-3 items-start">
                      <MapPin size={18} className="text-gray-400 shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-xs font-bold tracking-widest uppercase">{store.name}</h4>
                        <p className="text-[10px] text-gray-500 uppercase mt-1 tracking-widest">{store.address}</p>
                      </div>
                    </div>

                    <div className="flex gap-3 items-start text-[10px] tracking-widest text-gray-500 uppercase">
                      <Phone size={14} className="text-gray-400 shrink-0 mt-0.5" />
                      <span>{store.phone}</span>
                    </div>

                    <div className="pt-4 border-t border-gray-50 text-[9px] tracking-widest text-gray-400 uppercase">
                      <p className="font-bold text-gray-500">Opening Hours:</p>
                      <p className="mt-1">{store.hours}</p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="h-full flex flex-col items-center justify-center text-center border border-dashed border-gray-200 py-16">
                <p className="text-gray-400 uppercase tracking-widest text-xs">No retail locations found for \"{searchQuery}\"</p>
                <button
                  type="button"
                  onClick={() => setSearchResults(MOCK_STORES.london)}
                  className="text-black uppercase tracking-widest text-[9px] font-bold underline mt-2 hover:opacity-60"
                >
                  Show London Stores
                </button>
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}
