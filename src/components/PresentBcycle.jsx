import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Zap, ShieldCheck, Smile, MessageCircle, Waves, CheckCircle } from 'lucide-react';
import "./PresentBcycle.css";

const bicycles = [
  { id: 1, model: "Bike1", desc: "Depozit - 0 AZN, Günlük rent - 5 AZN Yüksək keyfiyyətli alüminium şassiyə malik bike-lar ", images: ["/sadebike1.jpg", "/sadebike2.jpg" ] },
  { id: 2, model: "Bike2", desc: "Depozit - 0 AZN, Günlük rent - 5 AZN Yüksək keyfiyyətli alüminium şassiyə malik bike-lar ", images: ["/sadebike3.jpg", "/sadebike4.jpg" ] }, 
  { id: 3, model: "Bike3", desc: "Depozit - 0 AZN, Günlük rent - 5 AZN Yüksək keyfiyyətli alüminium şassiyə malik bike-lar ", images: ["/sadebike5.jpg", "/sadebike6.jpg" ] }, 
  { id: 4, model: "Bike4", desc: "Depozit - 0 AZN, Günlük rent - 5 AZN Yüksək keyfiyyətli alüminium şassiyə malik bike-lar ", images: ["/sadebike7.jpg", "/sadebike8.jpg" ] }, 
  { id: 5, model: "Bike5", desc: "Depozit - 0 AZN, Günlük rent - 5 AZN Yüksək keyfiyyətli alüminium şassiyə malik bike-lar ", images: ["/sadebike9.jpg", "/sadebike10.jpg" ] }, 
  { id: 6, model: "Bike6", desc: "Depozit - 0 AZN, Günlük rent - 5 AZN Yüksək keyfiyyətli alüminium şassiyə malik bike-lar ", images: ["/sadebike1.jpg", "/sadebike2.jpg" ] }, 
  { id: 7, model: "Bike7", desc: "Depozit - 0 AZN, Günlük rent - 5 AZN Yüksək keyfiyyətli alüminium şassiyə malik bike-lar ", images: ["/sadebike1.jpg", "/sadebike2.jpg" ] }, 
  { id: 8, model: "Bike8", desc: "Depozit - 0 AZN, Günlük rent - 5 AZN Yüksək keyfiyyətli alüminium şassiyə malik bike-lar ", images: ["/sadebike1.jpg", "/sadebike2.jpg" ] }, 
  { id: 9, model: "Bike9", desc: "Depozit - 0 AZN, Günlük rent - 5 AZN Yüksək keyfiyyətli alüminium şassiyə malik bike-lar ", images: ["/sadebike1.jpg", "/sadebike2.jpg" ] }, 
  { id: 10, model: "Bike10", desc: "Depozit - 0 AZN, Günlük rent - 5 AZN Yüksək keyfiyyətli alüminium şassiyə malik bike-lar ", images: ["/sadebike1.jpg", "/sadebike2.jpg" ] }, 
  { id: 11, model: "Bike11", desc: "Depozit - 0 AZN, Günlük rent - 5 AZN Yüksək keyfiyyətli alüminium şassiyə malik bike-lar ", images: ["/sadebike1.jpg", "/sadebike2.jpg" ] }, 
  { id: 12, model: "Bike12", desc: "Depozit - 0 AZN, Günlük rent - 5 AZN Yüksək keyfiyyətli alüminium şassiyə malik bike-lar ", images: ["/sadebike1.jpg", "/sadebike2.jpg" ] }, 
];

const BicycleCard = ({ bike, index }) => {
  const [currentImg, setCurrentImg] = useState(0);
  const [status, setStatus] = useState('idle'); // 'idle', 'ordering', 'redirect'

  const nextImg = (e) => {
    e.stopPropagation();
    setCurrentImg((prev) => (prev === bike.images.length - 1 ? 0 : prev + 1));
  };

  const prevImg = (e) => {
    e.stopPropagation();
    setCurrentImg((prev) => (prev === 0 ? bike.images.length - 1 : prev - 1));
  };

  const handleOrder = () => {
    if (status !== 'idle') return;
    setStatus('ordering');

    const phoneNumber = "994509998281";
    const siteUrl = window.location.origin;
    const currentImagePath = bike.images[currentImg];
    const fullImageUrl = currentImagePath.startsWith('http') 
        ? currentImagePath 
        : `${siteUrl}${currentImagePath.startsWith('/') ? '' : '/'}${currentImagePath}`;

    const message = `*YENİ SADƏ VELOSİPED SORĞUSU* 🚲\n` +
                    `_________________________\n\n` +
                    `👋 Salam, bu velosipedi kirayə götürmək istəyirəm:\n\n` +
                    `📍 *Model:* ${bike.model}\n` +
                    `💰 *Məlumat:* ${bike.desc}\n\n` +
                    `🆔 *ID:* #${bike.id}\n` +
                    `_________________________\n\n` +
                    `🖼️ *Foto:* ${fullImageUrl}`;

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    // 2.5 saniyəlik "Hamarlıq" animasiyası
    setTimeout(() => {
      setStatus('redirect');
      setTimeout(() => {
        window.location.href = whatsappUrl;
        setTimeout(() => setStatus('idle'), 3000);
      }, 800);
    }, 2500);
  };

  return (
    <motion.div 
      className="bike-card" 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      viewport={{ once: true }}
    >
      <div className="card-image-box">
        <AnimatePresence mode="wait">
          <motion.img 
            key={currentImg}
            src={bike.images[currentImg]} 
            alt={bike.model}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          />
        </AnimatePresence>
      </div>

      <div className="arrow-controls">
        <button onClick={prevImg} className="arrow-btn"><ChevronLeft size={18} /></button>
        <span className="dot-indicator">{currentImg + 1} / {bike.images.length}</span>
        <button onClick={nextImg} className="arrow-btn"><ChevronRight size={18} /></button>
      </div>

      <div className="card-body">
        <h3 className="bike-title">{bike.model}</h3>
        <p className="bike-desc">{bike.desc}</p>
        
        <div className="bike-vibe-tags">
          <div className="vibe-tag">
            <Zap size={14} className="vibe-icon" />
            <span>Yüngül</span> 
          </div>
          <div className="vibe-tag">
            <ShieldCheck size={14} className="vibe-icon" />
            <span>Davamlı</span>
          </div>
          <div className="vibe-tag">
            <Smile size={14} className="vibe-icon" />
            <span>Rahat</span>
          </div>
          <div className="vibe-tag">
            <Waves size={14} className="vibe-icon" />
            <span>Modern</span>
          </div>
        </div>

        <button 
          onClick={handleOrder} 
          className={`wp-button ${status}`}
          disabled={status !== 'idle'}
        >
          <AnimatePresence mode="wait">
            {status === 'idle' && (
              <motion.div key="idle" className="btn-inner" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <MessageCircle size={18} />
                <span className='tex'>MÜRACİƏT ET</span>
              </motion.div>
            )}

            {status === 'ordering' && (
              <motion.div key="ordering" className="smooth-ride">
                <motion.div 
                  className="moving-bike"
                  initial={{ x: -80, opacity: 0 }}
                  animate={{ x: 80, opacity: 1 }}
                  transition={{ duration: 2, ease: "easeInOut", repeat: Infinity }}
                >
                  🚲
                </motion.div>
                <div className="road-path"></div>
              </motion.div>
            )}

            {status === 'redirect' && (
              <motion.div key="redirect" className="btn-inner" initial={{ scale: 0 }} animate={{ scale: 1 }}>
                <CheckCircle size={18} />
                <span>KEÇİD EDİLİR...</span>
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </div>
    </motion.div>
  );
};

const PresentBcycle = () => {
  return (
    <section className="bicycle-section">
      <div className="container">
        <h2 className="section-title">SADƏ <span>VELOSİPEDLƏR</span></h2>
        <div className="bicycle-grid">
          {bicycles.map((bike, index) => (
            <BicycleCard key={bike.id} bike={bike} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PresentBcycle;