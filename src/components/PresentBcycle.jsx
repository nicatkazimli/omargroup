import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Navigation, Gauge, Zap, ShieldCheck, Smile, MessageCircle,Waves } from 'lucide-react';
import "./PresentBcycle.css";

const bicycles = [
  { id: 1, model: "Bike1", desc: "Depozit - 0 AZN, Günlük rent - 5 AZN Yüksək keyfiyyətli alüminium şassiyə malik bike-lar ", images: ["/sadebike1.jpg", "/sadebike2.jpg" ] },
  { id: 2, model: "Bike2", desc: "Depozit - 0 AZN, Günlük rent - 5 AZN Yüksək keyfiyyətli alüminium şassiyə malik bike-lar ", images: ["/sadebike3.jpg", "/sadebike4.jpg" ] }, 
  { id: 3, model: "Bike3", desc: "Depozit - 0 AZN, Günlük rent - 5 AZN Yüksək keyfiyyətli alüminium şassiyə malik bike-lar ", images: ["/sadebike5.jpg", "/sadebike6.jpg" ] }, 
  { id: 4, model: "Bike4", desc: "Depozit - 0 AZN, Günlük rent - 5 AZN Yüksək keyfiyyətli alüminium şassiyə malik bike-lar ", images: ["/sadebike7.jpg", "/sadebike8.jpg" ] }, 
  { id: 5, model: "Bike5", desc: "Depozit - 0 AZN, Günlük rent - 5 AZN Yüksək keyfiyyətli alüminium şassiyə malik bike-lar ", images: ["/sadebike1.jpg", "/sadebike2.jpg" ] }, 
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

  const nextImg = (e) => {
    e.stopPropagation();
    setCurrentImg((prev) => (prev === bike.images.length - 1 ? 0 : prev + 1));
  };

  const prevImg = (e) => {
    e.stopPropagation();
    setCurrentImg((prev) => (prev === 0 ? bike.images.length - 1 : prev - 1));
  };

const sendWhatsApp = () => {
  const phoneNumber = "994507215768";
  
  // Bu sətir saytın o anki real linkini (hansı vercel linkidirsə onu) avtomatik götürür
  const siteUrl = window.location.origin;
  
  const currentImagePath = bike.images[currentImg];
  
  // Şəklin linkini tam URL halına salırıq
  const fullImageUrl = currentImagePath.startsWith('http') 
      ? currentImagePath 
      : `${siteUrl}${currentImagePath.startsWith('/') ? '' : '/'}${currentImagePath}`;

  // Mesaj formatı (Şəklin linki ən sonda olmalıdır ki, WhatsApp preview tuta bilsin)
  const message = `*YENİ SİFARİŞ SORĞUSU* 🚲\n` +
                  `_________________________\n\n` +
                  `👋 Salam, mən bu velosipedi kirayə götürmək istəyirəm:\n\n` +
                  `📍 *Model:* ${bike.model}\n` +
                  `💰 *Şərtlər:* ${bike.desc}\n\n` +
                  `🆔 *Məhsul ID:* #${bike.id}\n` +
                  `_________________________\n\n` +
                  `🖼️ *Məhsulun fotosu:* ${fullImageUrl}`;

  window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
};


  return (
    <div className="bike-card" style={{ animationDelay: `${index * 0.1}s` }}>
      <div className="card-image-box">
        <img src={bike.images[currentImg]} alt={bike.model} />
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

        <button onClick={sendWhatsApp} className="wp-button">
          <MessageCircle size={18} />
          <span className='tex'>MÜRACİƏT ET</span>
        </button>
      </div>
    </div>
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