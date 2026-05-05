import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Navigation, Gauge, MessageCircle, CheckCircle } from 'lucide-react';
import "./ElectronBcycle.css";

const bicycles = [
  { id: 1, model: "E-Bike1", km: "120 km+", speed: " max - 45 km/h", desc: "Depozit - 50 AZN, Günlük rent - 12 AZN Üzərində telefon qabları və Killik olur. Əlavə olaraq hamısında Gps olur. ", images: ["/ebike1.jpg", "/ebike2.jpg" ] },
  { id: 2, model: "E-Bike2", km: "140 km + ", speed: "max - 50 km/h", desc: "Depozit - 50 AZN, Günlük rent - 12 AZN Üzərində telefon qabları və Killik olur. Əlavə olaraq hamısında Gps olur. ", images: ["/ebike5.jpg", "/ebike4.jpg"] }, 
  { id: 3, model: "E-Bike3", km: "120 km+", speed: " max - 45 km/h", desc: "Depozit - 50 AZN, Günlük rent - 12 AZN Üzərində telefon qabları və Killik olur. Əlavə olaraq hamısında Gps olur. ", images: ["/ebike8.jpg", "/ebike7.jpg" ]},
  { id: 4, model: "E-Bike4", km: "120 km+", speed: " max - 45 km/h", desc: "Depozit - 50 AZN, Günlük rent - 12 AZN Üzərində telefon qabları və Killik olur. Əlavə olaraq hamısında Gps olur. ", images: ["/ebike9.jpg", "/ebike10.jpg" ]},
  { id: 5, model: "E-Bike5", km: "120 km+", speed: " max - 45 km/h", desc: "Depozit - 50 AZN, Günlük rent - 12 AZN Üzərində telefon qabları və Killik olur. Əlavə olaraq hamısında Gps olur. ", images: ["/ebike7.jpg", "/ebike8.jpg"] },
  { id: 6, model: "E-Bike6", km: "120 km+", speed: " max - 45 km/h", desc: "Depozit - 50 AZN, Günlük rent - 12 AZN Üzərində telefon qabları və Killik olur. Əlavə olaraq hamısında Gps olur. ", images: ["/ebike7.jpg", "/ebike8.jpg"] },
  { id: 7, model: "E-Bike7", km: "120 km+", speed: " max - 45 km/h", desc: "Depozit - 50 AZN, Günlük rent - 12 AZN Üzərində telefon qabları və Killik olur. Əlavə olaraq hamısında Gps olur. ", images: ["/ebike7.jpg", "/ebike8.jpg"] },
  { id: 8, model: "E-Bike8", km: "120 km+", speed: " max - 45 km/h", desc: "Depozit - 50 AZN, Günlük rent - 12 AZN Üzərində telefon qabları və Killik olur. Əlavə olaraq hamısında Gps olur. ", images: ["/ebike7.jpg", "/ebike8.jpg"] },
  { id: 9, model: "E-Bike9", km: "120 km+", speed: " max - 45 km/h", desc: "Depozit - 50 AZN, Günlük rent - 12 AZN Üzərində telefon qabları və Killik olur. Əlavə olaraq hamısında Gps olur. ", images: ["/ebike7.jpg", "/ebike8.jpg"] },
  { id: 10, model: "E-Bike10", km: "120 km+", speed: " max - 45 km/h", desc: "Depozit - 50 AZN, Günlük rent - 12 AZN Üzərində telefon qabları və Killik olur. Əlavə olaraq hamısında Gps olur. ", images: ["/ebike7.jpg", "/ebike8.jpg"] },
  { id: 11, model: "E-Bike11", km: "120 km+", speed: " max - 45 km/h", desc: "Depozit - 50 AZN, Günlük rent - 12 AZN Üzərində telefon qabları və Killik olur. Əlavə olaraq hamısında Gps olur. ", images: ["/ebike7.jpg", "/ebike8.jpg"] },
  { id: 12, model: "E-Bike12", km: "120 km+", speed: " max - 45 km/h", desc: "Depozit - 50 AZN, Günlük rent - 12 AZN Üzərində telefon qabları və Killik olur. Əlavə olaraq hamısında Gps olur. ", images: ["/ebike7.jpg", "/ebike8.jpg"] },
  { id: 13, model: "E-Bike13", km: "120 km+", speed: " max - 45 km/h", desc: "Depozit - 50 AZN, Günlük rent - 12 AZN Üzərində telefon qabları və Killik olur. Əlavə olaraq hamısında Gps olur. ", images: ["/ebike7.jpg", "/ebike8.jpg"] },
  { id: 14, model: "E-Bike14", km: "120 km+", speed: " max - 45 km/h", desc: "Depozit - 50 AZN, Günlük rent - 12 AZN Üzərində telefon qabları və Killik olur. Əlavə olaraq hamısında Gps olur. ", images: ["/ebike7.jpg", "/ebike8.jpg"] },
  { id: 15, model: "E-Bike15", km: "120 km+", speed: " max - 45 km/h", desc: "Depozit - 50 AZN, Günlük rent - 12 AZN Üzərində telefon qabları və Killik olur. Əlavə olaraq hamısında Gps olur. ", images: ["/ebike7.jpg", "/ebike8.jpg"] },
  { id: 16, model: "E-Bike16", km: "120 km+", speed: " max - 45 km/h", desc: "Depozit - 50 AZN, Günlük rent - 12 AZN Üzərində telefon qabları və Killik olur. Əlavə olaraq hamısında Gps olur. ", images: ["/ebike7.jpg", "/ebike8.jpg"] },
  { id: 17, model: "E-Bike17", km: "120 km+", speed: " max - 45 km/h", desc: "Depozit - 50 AZN, Günlük rent - 12 AZN Üzərində telefon qabları və Killik olur. Əlavə olaraq hamısında Gps olur. ", images: ["/ebike7.jpg", "/ebike8.jpg"] },
  { id: 18, model: "E-Bike18", km: "120 km+", speed: " max - 45 km/h", desc: "Depozit - 50 AZN, Günlük rent - 12 AZN Üzərində telefon qabları və Killik olur. Əlavə olaraq hamısında Gps olur. ", images: ["/ebike7.jpg", "/ebike8.jpg"] },
  { id: 19, model: "E-Bike19", km: "120 km+", speed: " max - 45 km/h", desc: "Depozit - 50 AZN, Günlük rent - 12 AZN Üzərində telefon qabları və Killik olur. Əlavə olaraq hamısında Gps olur. ", images: ["/ebike7.jpg", "/ebike8.jpg"] },
  { id: 20, model: "E-Bike20", km: "120 km+", speed: " max - 45 km/h", desc: "Depozit - 50 AZN, Günlük rent - 12 AZN Üzərində telefon qabları və Killik olur. Əlavə olaraq hamısında Gps olur. ", images: ["/ebike7.jpg", "/ebike8.jpg"] }
];

const BicycleCard = React.memo(({ bike, index }) => {
  const [currentImg, setCurrentImg] = useState(0);
  const [status, setStatus] = useState('idle'); // 'idle', 'pedaling', 'success'

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
    setStatus('pedaling');

    const phoneNumber = "994509998281";
    const siteUrl = window.location.origin;
    const currentImagePath = bike.images[currentImg];
    const fullImageUrl = currentImagePath.startsWith('http') 
        ? currentImagePath 
        : `${siteUrl}${currentImagePath.startsWith('/') ? '' : '/'}${currentImagePath}`;

    const message = `*YENİ SİFARİŞ SORĞUSU* 🚲\n` +
                    `_________________________\n\n` +
                    `👋 Salam, mən bu velosipedi kirayə götürmək istəyirəm:\n\n` +
                    `📍 *Model:* ${bike.model}\n` +
                    `💰 *Şərtlər:* ${bike.desc}\n\n` +
                    `🆔 *Məhsul ID:* #${bike.id}\n` +
                    `_________________________\n\n` +
                    `🖼️ *Məhsulun fotosu:* ${fullImageUrl}`;

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    setTimeout(() => {
      setStatus('success');
      setTimeout(() => {
        window.location.href = whatsappUrl;
        setTimeout(() => setStatus('idle'), 3000);
      }, 800);
    }, 2800);
  };

  return (
    <div className="bike-card" style={{ animationDelay: `${Math.min(index * 0.03, 0.15)}s` }}>
      {/* 🚀 Şəkil qalereyası CSS Opacity keçidi ilə tam stabil və hamar edildi */}
      <div className="card-image-box">
        {bike.images.map((imgSrc, imgIndex) => (
          <img 
            key={imgIndex}
            src={imgSrc} 
            alt={`${bike.model} - ${imgIndex + 1}`}
            loading="lazy"
            decoding="async"
            className={`gallery-img ${imgIndex === currentImg ? 'active' : ''}`}
          />
        ))}
      </div>

      <div className="arrow-controls">
        <button onClick={prevImg} className="arrow-btn" aria-label="Əvvəlki şəkil">
          <ChevronLeft size={18} />
        </button>
        <span className="dot-indicator">{currentImg + 1} / {bike.images.length}</span>
        <button onClick={nextImg} className="arrow-btn" aria-label="Növbəti şəkil">
          <ChevronRight size={18} />
        </button>
      </div>

      <div className="card-body">
        <h3 className="bike-title">{bike.model}</h3>
        <p className="bike-desc">{bike.desc}</p>
        
        <div className="bike-specs">
          <div className="spec">
            <Navigation size={14} /> <span>{bike.km}</span>
          </div>
          <div className="spec">
            <Gauge size={14} /> <span>{bike.speed}</span>
          </div>
        </div>

        <button 
          onClick={handleOrder} 
          className={`wp-button ${status}`}
          disabled={status !== 'idle'}
          aria-label={`${bike.model} müraciət et`}
        >
          <AnimatePresence mode="wait">
            {status === 'idle' && (
              <motion.div key="idle" className="btn-content" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <MessageCircle size={18} />
                <span className='tex'>MÜRACİƏT ET</span>
              </motion.div>
            )}

            {status === 'pedaling' && (
              <motion.div key="pedaling" className="delivery-anim">
                <motion.div 
                  className="bike-icon"
                  initial={{ x: -100 }}
                  animate={{ x: 100 }}
                  transition={{ duration: 2.5, ease: "linear", repeat: Infinity }}
                  style={{ display: 'inline-block' }}
                >
                  🚲
                </motion.div>
                <div className="road-line"></div>
              </motion.div>
            )}

            {status === 'success' && (
              <motion.div key="success" className="btn-content" initial={{ scale: 0 }} animate={{ scale: 1 }}>
                <CheckCircle size={18} />
                <span>YÖNLƏNDİRİLİR...</span>
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </div>
    </div>
  );
});

const ElectronBicycle = () => {
  // 20 ədəd kartın boş yerə render olunub sistemi yormaması üçün memoize edirik
  const renderedGrid = useMemo(() => {
    return bicycles.map((bike, index) => (
      <BicycleCard key={bike.id} bike={bike} index={index} />
    ));
  }, []);

  return (
    <section className="bicycle-section">
      <div className="container">
        <h2 className="section-title">ELEKTRON <span>VELOSİPEDLƏR</span></h2>
        <div className="bicycle-grid">
          {renderedGrid}
        </div>
      </div>
    </section>
  );
};

export default ElectronBicycle;