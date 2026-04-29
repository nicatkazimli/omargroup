import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Playstation.css';

const psData = [
  {
    id: 'ps3',
    title: 'Playstation 3',
    daily: '8 AZN',
    promo: '6 AZN',
    images: ['/pss3.jpg', '/pss33.jpg'],
    features: [
      { label: 'Həftə içi günlük', val: '8 AZN', type: 'standard' },
      { label: '3 gün və daha çox', val: '6 AZN / gün', type: 'promo' },
      { label: 'Pulsuz Çatdırılma', val: '28 May, Nizami, Xətai, Ağ Şəhər, Tarqovu', type: 'location' }
    ]
  },
  {
    id: 'ps4',
    title: 'Playstation 4',
    daily: '10 AZN',
    promo: '8 AZN',
    images: ['/pss4.jpg', '/pss44.jpg'],
    features: [
      { label: 'Həftə içi günlük', val: '10 AZN', type: 'standard' },
      { label: '3 gün və daha çox', val: '8 AZN / gün', type: 'promo' },
      { label: 'Pulsuz Çatdırılma', val: '28 May, Nizami, Xətai, Ağ Şəhər, Tarqovu', type: 'location' }
    ]
  },
  {
    id: 'ps5',
    title: 'Playstation 5',
    daily: '12 AZN',
    promo: '10 AZN',
    images: ['/pss5.jpg', '/pss55.jpg'],
    features: [
      { label: 'Həftə içi günlük', val: '12 AZN', type: 'standard' },
      { label: '3 gün və daha çox', val: '10 AZN / gün', type: 'promo' },
      { label: 'Pulsuz Çatdırılma', val: 'Mərkəz nöqtələrə pulsuz çatdırılma', type: 'location' }
    ]
  }
];

const PsCard = ({ data }) => {
  const [imgIndex, setImgIndex] = useState(0);

  const nextImg = () => setImgIndex((prev) => (prev + 1) % data.images.length);
  const prevImg = () => setImgIndex((prev) => (prev - 1 + data.images.length) % data.images.length);

  const handleWhatsApp = () => {
    const phoneNumber = "+994509998281";
    const siteUrl = window.location.origin;
    const currentImagePath = data.images[imgIndex];

    const fullImageUrl = currentImagePath.startsWith('http') 
        ? currentImagePath 
        : `${siteUrl}${currentImagePath.startsWith('/') ? '' : '/'}${currentImagePath}`;

    const message = `*YENİ OYUN KONSOLU SORĞUSU* 🎮\n` +
                    `_________________________\n\n` +
                    `👋 Salam, mən bu konsolu kirayə götürmək istəyirəm:\n\n` +
                    `🕹️ *Model:* ${data.title}\n` +
                    `💰 *Günlük qiymət:* ${data.daily}\n` +
                    `🔥 *3 gün+ Endirimi:* ${data.promo}\n` +
                    `🆔 *Məhsul ID:* #RENT-${data.id.toUpperCase()}\n` +
                    `_________________________\n\n` +
                    `🖼️ *Məhsulun fotosu:* ${fullImageUrl}`;

    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <motion.div 
      className="ps-card"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -15 }}
    >
      <div className="ps-slider">
        <AnimatePresence mode="wait">
          <motion.img 
            key={imgIndex}
            src={data.images[imgIndex]} 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 0.4 }}
          />
        </AnimatePresence>
        <button className="slide-btn prev" onClick={prevImg}>‹</button>
        <button className="slide-btn next" onClick={nextImg}>›</button>
      </div>

      <div className="ps-info">
        <h2 className="ps-title">{data.title}</h2>
        
        {/* 🔥 Yenilənmiş Premium İkonlu Bölmə */}
        <div className="ps-features-premium">
          {data.features.map((f, i) => (
            <div key={i} className={`feature-item ${f.type === 'promo' ? 'hot-feature' : ''}`}>
              <div className="feature-icon-wrapper">
                {f.type === 'standard' && <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>}
                {f.type === 'promo' && <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>}
                {f.type === 'location' && <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>}
              </div>
              <div className="feature-text">
                <span>{f.label}</span>
                <strong>{f.val}</strong>
              </div>
            </div>
          ))}
        </div>

        <button className="order-btn" onClick={handleWhatsApp}>
          İNDİ SİFARİŞ ET
        </button>
      </div>
    </motion.div>
  );
};

export default function PsRental() {
  return (
    <section className="ps-rental-section">
      <motion.h1 
        className="section-main-title"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        🎮 OYUN DÜNYASINA <span className="blue-neon">XOŞ GƏLDİNİZ</span>
      </motion.h1>
      <div className="ps-container">
        {psData.map(ps => <PsCard key={ps.id} data={ps} />)}
      </div>
    </section>
  );
}