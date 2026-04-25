import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Zap, Navigation, Gauge, MessageCircle } from 'lucide-react';
import "./ElectronBcycle.css";

const bicycles = [
  { id: 1, model: "Storm Rider E-1", km: "120 km", speed: "55 km/h", desc: "Şəhər daxili uzun məsafələr üçün erqonomik dizayn.", images: ["https://picsum.photos/id/146/600/400", "https://picsum.photos/id/147/600/400", "https://picsum.photos/id/149/600/400"] },
  { id: 2, model: "Mountain Peak Pro", km: "85 km", speed: "40 km/h", desc: "Dağ yolları və çətin relyeflər üçün gücləndirilmiş asqı.", images: ["https://picsum.photos/id/151/600/400", "https://picsum.photos/id/152/600/400", "https://picsum.photos/id/153/600/400"] },
  { id: 3, model: "Urban Glide S2", km: "60 km", speed: "30 km/h", desc: "Minimalist stil və yüngül korpusu ilə işə getmək üçün ideal.", images: ["https://picsum.photos/id/154/600/400", "https://picsum.photos/id/155/600/400", "https://picsum.photos/id/156/600/400"] },
  { id: 4, model: "Thunder Bolt X", km: "150 km", speed: "65 km/h", desc: "Yüksək tutumlu batareya və sürətli şarj dəstəyi.", images: ["https://picsum.photos/id/157/600/400", "https://picsum.photos/id/158/600/400", "https://picsum.photos/id/159/600/400"] },
  { id: 5, model: "Eco Leaf Hybrid", km: "90 km", speed: "35 km/h", desc: "Tamamilə ekoloji materiallardan hazırlanmış premium model.", images: ["https://picsum.photos/id/160/600/400", "https://picsum.photos/id/161/600/400", "https://picsum.photos/id/162/600/400"] },
  { id: 6, model: "Night Fury Black", km: "110 km", speed: "50 km/h", desc: "Mat qara örtüklü, gecə sürüşü üçün xüsusi LED sistemli.", images: ["https://picsum.photos/id/163/600/400", "https://picsum.photos/id/164/600/400", "https://picsum.photos/id/165/600/400"] },
  { id: 7, model: "Desert Sand 4x4", km: "75 km", speed: "45 km/h", desc: "Qum və yumşaq torpaq üçün enli təkərli model.", images: ["https://picsum.photos/id/166/600/400", "https://picsum.photos/id/167/600/400", "https://picsum.photos/id/168/600/400"] },
  { id: 8, model: "Silver Arrow", km: "130 km", speed: "60 km/h", desc: "Aerodinamik korpus və maksimal aerodinamika.", images: ["https://picsum.photos/id/169/600/400", "https://picsum.photos/id/170/600/400", "https://picsum.photos/id/171/600/400"] },
  { id: 9, model: "Ocean Breeze", km: "100 km", speed: "40 km/h", desc: "Sahil kənarı gəzintilər üçün nəzərdə tutulmuş rəngarəng dizayn.", images: ["https://picsum.photos/id/172/600/400", "https://picsum.photos/id/173/600/400", "https://picsum.photos/id/174/600/400"] },
  { id: 10, model: "Titan Rugged", km: "95 km", speed: "42 km/h", desc: "Zərbələrə davamlı çərçivə və ağır yükgötürmə qabiliyyəti.", images: ["https://picsum.photos/id/175/600/400", "https://picsum.photos/id/176/600/400", "https://picsum.photos/id/177/600/400"] },
  { id: 11, model: "Velo Sprint X", km: "140 km", speed: "70 km/h", desc: "Professional idmançılar üçün turbo motorlu versiya.", images: ["https://picsum.photos/id/178/600/400", "https://picsum.photos/id/179/600/400", "https://picsum.photos/id/180/600/400"] },
  { id: 12, model: "Z-Core Fold", km: "50 km", speed: "25 km/h", desc: "Qatlanan mexanizm ilə baqajda rahat daşınma.", images: ["https://picsum.photos/id/181/600/400", "https://picsum.photos/id/182/600/400", "https://picsum.photos/id/183/600/400"] },
  { id: 13, model: "Crimson Racer", km: "115 km", speed: "58 km/h", desc: "Yarış üçün optimallaşdırılmış ötürücü sistemi.", images: ["https://picsum.photos/id/184/600/400", "https://picsum.photos/id/185/600/400", "https://picsum.photos/id/186/600/400"] },
  { id: 14, model: "Frost White Lite", km: "80 km", speed: "38 km/h", desc: "Xanımlar üçün yüngül və estetik ağ dizayn.", images: ["https://picsum.photos/id/187/600/400", "https://picsum.photos/id/188/600/400", "https://picsum.photos/id/189/600/400"] },
  { id: 15, model: "Carbon Stealth", km: "160 km", speed: "62 km/h", desc: "Tam karbon lifindən hazırlanmış ultra-yüngül model.", images: ["https://picsum.photos/id/190/600/400", "https://picsum.photos/id/191/600/400", "https://picsum.photos/id/192/600/400"] },
  { id: 16, model: "Alpha Cruiser", km: "105 km", speed: "48 km/h", desc: "Geniş oturacaq və rahat sükan idarəetməsi.", images: ["https://picsum.photos/id/193/600/400", "https://picsum.photos/id/194/600/400", "https://picsum.photos/id/195/600/400"] },
  { id: 17, model: "Retro Electric", km: "70 km", speed: "32 km/h", desc: "70-ci illərin tərzi müasir texnologiya ilə birləşdi.", images: ["https://picsum.photos/id/196/600/400", "https://picsum.photos/id/197/600/400", "https://picsum.photos/id/198/600/400"] },
  { id: 18, model: "Volt Master Z", km: "180 km", speed: "75 km/h", desc: "Sənayenin ən güclü batareyasına sahib olan canavar.", images: ["https://picsum.photos/id/199/600/400", "https://picsum.photos/id/200/600/400", "https://picsum.photos/id/201/600/400"] },
  { id: 19, model: "Skyline Air", km: "90 km", speed: "44 km/h", desc: "Hava kanalları sayəsində soyuyan batareya sistemi.", images: ["https://picsum.photos/id/202/600/400", "https://picsum.photos/id/203/600/400", "https://picsum.photos/id/204/600/400"] },
  { id: 20, model: "Neo Future X", km: "100 km", speed: "50 km/h", desc: "Süni intellekt dəstəkli ağıllı idarəetmə paneli.", images: ["https://picsum.photos/id/206/600/400", "https://picsum.photos/id/208/600/400", "https://picsum.photos/id/210/600/400"] }
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
    const message = `Salam, mən bu velosipedi istəyirəm: ${bike.model}`;
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="bike-card" style={{ animationDelay: `${index * 0.1}s` }}>
      {/* 1. Image (Top Center) */}
      <div className="card-image-box">
        <img src={bike.images[currentImg]} alt={bike.model} />
      </div>

      <div className="arrow-controls">
        <button onClick={prevImg} className="arrow-btn"><ChevronLeft size={18} /></button>
        <span className="dot-indicator">{currentImg + 1} / {bike.images.length}</span>
        <button onClick={nextImg} className="arrow-btn"><ChevronRight size={18} /></button>
      </div>

      {/* 3. Text Content */}
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
          <span>MÜRACİƏT ET</span>
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