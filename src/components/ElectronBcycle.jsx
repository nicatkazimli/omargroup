import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Navigation, Gauge, MessageCircle } from 'lucide-react';
import "./ElectronBcycle.css";

const bicycles = [
  // İlk 4 velosiped (Orijinal şəkilləri ilə qalır)
  { id: 1, model: "E-Bike1", km: "120 km+", speed: " max - 45 km/h", desc: "Depozit - 50 AZN, Günlük rent - 12 AZN  Üzərində telefon qabları və Killik olur.  Əlavə olaraq hamısında Gps olur. ", images: ["/ebike1.jpg", "/ebike2.jpg" ] },
  { id: 2, model: "E-Bike2", km: "140 km + ", speed: "max - 50 km/h", desc: "Depozit - 50 AZN, Günlük rent - 12 AZN  Üzərində telefon qabları və Killik olur.  Əlavə olaraq hamısında Gps olur. ", images: ["/ebike5.jpg", "/ebike4.jpg",] }, 
  { id: 3, model: "E-Bike3", km: "120 km+", speed: " max - 45 km/h", desc: "Depozit - 50 AZN, Günlük rent - 12 AZN  Üzərində telefon qabları və Killik olur.  Əlavə olaraq hamısında Gps olur. ", images: ["/ebike8.jpg", "/ebike7.jpg" ]},
  { id: 4, model: "E-Bike4", km: "120 km+", speed: " max - 45 km/h", desc: "Depozit - 50 AZN, Günlük rent - 12 AZN  Üzərində telefon qabları və Killik olur.  Əlavə olaraq hamısında Gps olur. ", images: ["/ebike9.jpg", "/ebike10.jpg" ]},
  
  // 5-ci ID-dən başlayaraq həm məlumatlar, həm də şəkillər (ebike7.jpg) eyniləşdirildi
  { id: 5, model: "E-Bike5", km: "120 km+", speed: " max - 45 km/h", desc: "Depozit - 50 AZN, Günlük rent - 12 AZN  Üzərində telefon qabları və Killik olur.  Əlavə olaraq hamısında Gps olur. ", images: ["/ebike7.jpg", "/ebike8.jpg"] },
  { id: 6, model: "E-Bike6", km: "120 km+", speed: " max - 45 km/h", desc: "Depozit - 50 AZN, Günlük rent - 12 AZN  Üzərində telefon qabları və Killik olur.  Əlavə olaraq hamısında Gps olur. ", images: ["/ebike7.jpg", "/ebike8.jpg"] },
  { id: 7, model: "E-Bike7", km: "120 km+", speed: " max - 45 km/h", desc: "Depozit - 50 AZN, Günlük rent - 12 AZN  Üzərində telefon qabları və Killik olur.  Əlavə olaraq hamısında Gps olur. ", images: ["/ebike7.jpg", "/ebike8.jpg"] },
  { id: 8, model: "E-Bike8", km: "120 km+", speed: " max - 45 km/h", desc: "Depozit - 50 AZN, Günlük rent - 12 AZN  Üzərində telefon qabları və Killik olur.  Əlavə olaraq hamısında Gps olur. ", images: ["/ebike7.jpg", "/ebike8.jpg"] },
  { id: 9, model: "E-Bike9", km: "120 km+", speed: " max - 45 km/h", desc: "Depozit - 50 AZN, Günlük rent - 12 AZN  Üzərində telefon qabları və Killik olur.  Əlavə olaraq hamısında Gps olur. ", images: ["/ebike7.jpg", "/ebike8.jpg"] },
  { id: 10, model: "E-Bike10", km: "120 km+", speed: " max - 45 km/h", desc: "Depozit - 50 AZN, Günlük rent - 12 AZN  Üzərində telefon qabları və Killik olur.  Əlavə olaraq hamısında Gps olur. ", images: ["/ebike7.jpg", "/ebike8.jpg"] },
  { id: 11, model: "E-Bike11", km: "120 km+", speed: " max - 45 km/h", desc: "Depozit - 50 AZN, Günlük rent - 12 AZN  Üzərində telefon qabları və Killik olur.  Əlavə olaraq hamısında Gps olur. ", images: ["/ebike7.jpg", "/ebike8.jpg"] },
  { id: 12, model: "E-Bike12", km: "120 km+", speed: " max - 45 km/h", desc: "Depozit - 50 AZN, Günlük rent - 12 AZN  Üzərində telefon qabları və Killik olur.  Əlavə olaraq hamısında Gps olur. ", images: ["/ebike7.jpg", "/ebike8.jpg"] },
  { id: 13, model: "E-Bike13", km: "120 km+", speed: " max - 45 km/h", desc: "Depozit - 50 AZN, Günlük rent - 12 AZN  Üzərində telefon qabları və Killik olur.  Əlavə olaraq hamısında Gps olur. ", images: ["/ebike7.jpg", "/ebike8.jpg"] },
  { id: 14, model: "E-Bike14", km: "120 km+", speed: " max - 45 km/h", desc: "Depozit - 50 AZN, Günlük rent - 12 AZN  Üzərində telefon qabları və Killik olur.  Əlavə olaraq hamısında Gps olur. ", images: ["/ebike7.jpg", "/ebike8.jpg"] },
  { id: 15, model: "E-Bike15", km: "120 km+", speed: " max - 45 km/h", desc: "Depozit - 50 AZN, Günlük rent - 12 AZN  Üzərində telefon qabları və Killik olur.  Əlavə olaraq hamısında Gps olur. ", images: ["/ebike7.jpg", "/ebike8.jpg"] },
  { id: 16, model: "E-Bike16", km: "120 km+", speed: " max - 45 km/h", desc: "Depozit - 50 AZN, Günlük rent - 12 AZN  Üzərində telefon qabları və Killik olur.  Əlavə olaraq hamısında Gps olur. ", images: ["/ebike7.jpg", "/ebike8.jpg"] },
  { id: 17, model: "E-Bike17", km: "120 km+", speed: " max - 45 km/h", desc: "Depozit - 50 AZN, Günlük rent - 12 AZN  Üzərində telefon qabları və Killik olur.  Əlavə olaraq hamısında Gps olur. ", images: ["/ebike7.jpg", "/ebike8.jpg"] },
  { id: 18, model: "E-Bike18", km: "120 km+", speed: " max - 45 km/h", desc: "Depozit - 50 AZN, Günlük rent - 12 AZN  Üzərində telefon qabları və Killik olur.  Əlavə olaraq hamısında Gps olur. ", images: ["/ebike7.jpg", "/ebike8.jpg"] },
  { id: 19, model: "E-Bike19", km: "120 km+", speed: " max - 45 km/h", desc: "Depozit - 50 AZN, Günlük rent - 12 AZN  Üzərində telefon qabları və Killik olur.  Əlavə olaraq hamısında Gps olur. ", images: ["/ebike7.jpg", "/ebike8.jpg"] },
  { id: 20, model: "E-Bike20", km: "120 km+", speed: " max - 45 km/h", desc: "Depozit - 50 AZN, Günlük rent - 12 AZN  Üzərində telefon qabları və Killik olur.  Əlavə olaraq hamısında Gps olur. ", images: ["/ebike7.jpg", "/ebike8.jpg"] }
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
  const phoneNumber = "+994509998281";
  
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
        
        <div className="bike-specs">
          <div className="spec">
            <Navigation size={14} /> <span>{bike.km}</span>
          </div>
          <div className="spec">
            <Gauge size={14} /> <span>{bike.speed}</span>
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

const ElectronBicycle = () => {
  return (
    <section className="bicycle-section">
      <div className="container">
        <h2 className="section-title">ELEKTRON <span>VELOSİPEDLƏR</span></h2>
        <div className="bicycle-grid">
          {bicycles.map((bike, index) => (
            <BicycleCard key={bike.id} bike={bike} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ElectronBicycle;