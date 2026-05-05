import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation, Pagination } from 'swiper/modules';
import { ChevronLeft, ChevronRight, Settings, CheckCircle } from 'lucide-react';

// Swiper CSS
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Details.css';

const detailsData = [
  { id: 1, title: "Təkər kamerası (İçlik)", desc: "29 / 48 mm. Rusiya istehsalı.", price: "6 AZN", img: "/ceko/kamer.webp" },
  { id: 2, title: "Təkər kamerası (İçlik)", desc: "28 / 48 mm. Rusiya istehsalı.", price: "6 AZN", img: "/ceko/kamer28.webp" },
  { id: 3, title: "Telefon qabı", desc: "4 qollu, tam keyfiyyətli, Çin istehsalı.", price: "10 AZN", img: "/ceko/telefonqabi.webp" },
  { id: 4, title: "Zəncir (Sep)", desc: "7/8 sürət ötürücülü, tam keyfiyyətli, Çin istehsalı.", price: "12 AZN", img: "/ceko/sep.webp" },
  { id: 5, title: "Kaset", desc: "7-lik, yivli (rezbavoy), tam keyfiyyətli, Çin istehsalı.", price: "12 AZN", img: "/ceko/kaset.webp" },
  { id: 6, title: "Pedal", desc: "Dəmir, çıxıntılı, ayağa rahat oturan, tam keyfiyyətli məhsul.", price: "10 AZN", img: "/ceko/pedal.webp" },
  { id: 7, title: "Zəncir ötürücü", desc: "3-lük orta ötürücü, tam keyfiyyətli, Almaniya məhsulu.", price: "12 AZN", img: "/ceko/sep1.webp" },
  { id: 8, title: "Dayaq (Stayak)", desc: "İdeal keyfiyyətdə dayaq (dirəncək).", price: "12 AZN", img: "/ceko/stayak.webp" },
  { id: 9, title: "Şatun (Tək qol)", desc: "Tam keyfiyyətli şatun qolu.", price: "4 AZN", img: "/ceko/satun.webp" },
  { id: 10, title: "Vilka (29 ölçü)", desc: "Təzyiqli 'Star Stop' sistemi, tam keyfiyyətli.", price: "45 AZN", img: "/ceko/star.webp" },
  { id: 11, title: "Alüminium baqaj", desc: "Tam keyfiyyətli alüminium baqaj.", price: "20 AZN", img: "/ceko/baqajnik.webp" },
  { id: 12, title: "Polad oxlar", desc: "Arxa disk üçün Almaniya istehsalı qırılmayan polad oxlar.", price: "6 AZN", img: "/ceko/ox.webp" },
  { id: 13, title: "Top", desc: "Orta top, tam keyfiyyətli, Almaniya məhsulu.", price: "10 AZN", img: "/ceko/top.webp" },
  { id: 14, title: "Oturacaq (Sade)", desc: "Tam keyfiyyətli velosiped oturacağı.", price: "12 AZN", img: "/ceko/oturacaq.webp" },
  { id: 15, title: "Oturacaq (Komfort)", desc: "Tam keyfiyyətli və rahat oturacaq.", price: "18 AZN", img: "/ceko/oturacak1.webp" },
  { id: 16, title: "Şatun (Shimano)", desc: "Original Shimano, 3 dişli, tam keyfiyyətli, Almaniya məhsulu.", price: "22 AZN", img: "/ceko/satun1.webp" },
  { id: 17, title: "Arxa ötürücü", desc: "Arxa 7-lik sürət ötürücüsü.", price: "12 AZN", img: "/ceko/oturucu.webp" },
  { id: 18, title: "Əyləc (Tormoz)", desc: "Sürətli velosipedlər üçün arxa əyləc sistemi.", price: "6 AZN", img: "/ceko/tormuz.webp" },
  { id: 19, title: "Uduşqa", desc: "Tam keyfiyyətli uduşqa.", price: "5 AZN", img: "/ceko/udusqa.webp" },
  { id: 20, title: "BTL Dəsti", desc: "Vilka və nabor boyunluq dəsti.", price: "8 AZN", img: "/ceko/btl.webp" },
  { id: 21, title: "Şin (Patrişqa)", desc: "27.5 ölçü, 'Lepper' firması, tam keyfiyyətli, Almaniya məhsulu.", price: "18 AZN", img: "/ceko/sin.webp" },
  { id: 22, title: "Şin (Patrişqa)", desc: "26 ölçü, 'EOUN NLK' firması.", price: "18 AZN", img: "/ceko/sin1.webp" },
  { id: 23, title: "Şin (Patrişqa)", desc: "'Rotation' firması, tam keyfiyyətli məhsul.", price: "18 AZN", img: "/ceko/sin2.webp" },
  { id: 24, title: "Dəbilqə (Kask)", desc: "Tam keyfiyyətli qoruyucu dəbilqə.", price: "20 AZN", img: "/ceko/kask.webp" },
  { id: 26, title: "Təkər kamerası (İçlik)", desc: "26 ölçülü daxili təkər kamerası.", price: "6 AZN", img: "/ceko/kamer5.webp" },
  { id: 27, title: "Sürət dəyişdirən", desc: "7-lik sürət dəyişdirən qol.", price: "18 AZN", img: "/ceko/skorusdeyisdiren.webp" },
  { id: 28, title: "Sürət dəyişdirən dəsti", desc: "3/7 sürət ötürücü dəyişdiriciləri.", price: "22 AZN", img: "/ceko/skorusdeyisdiren1.webp" },
  { id: 29, title: "Telefon qabı (Çantalı)", desc: "Sumkalı (çantalı) telefon qabı.", price: "14 AZN", img: "/ceko/telefonqabi21.webp" },
  { id: 30, title: "Sükan hündürləşdirən", desc: "Tam keyfiyyətli sükаn (rol) hündürləşdirən.", price: "12 AZN", img: "/ceko/rol.webp" },
  { id: 31, title: "Dayaq (İkiayaqlı)", desc: "Dəmirdən hazırlanmış ikiayaqlı dayaq (stayak).", price: "18 AZN", img: "/ceko/stayak2.webp" },
  { id: 33, title: "Qoruyucu dəst", desc: "Ayaq və qol üçün qoruyucu vasitələr.", price: "16 AZN", img: "/ceko/qoruyucu.webp" },
  { id: 34, title: "İşıq dəsti", desc: "Mavi və qırmızı rəngli işıqlandırma.", price: "12 AZN", img: "/ceko/isiq.webp" },
  { id: 35, title: "Səs ucaldan (Kalonka)", desc: "Yüksək səs sisteminə malik dinamik.", price: "16 AZN", img: "/ceko/kalonka.webp" },
];

const DetailCard = ({ item }) => {
  const [status, setStatus] = useState('idle');

  const handleOrder = () => {
    if (status !== 'idle') return;
    setStatus('fixing');

    const phoneNumber = "994509998281";
    const message = `*YENİ DETAL SORĞUSU* 🛠️\n` +
                    `_________________________\n\n` +
                    `👋 Salam, bu detal ilə maraqlanıram:\n\n` +
                    `⚙️ *Ad:* ${item.title}\n` +
                    `📝 *Təsvir:* ${item.desc}\n` +
                    `💰 *Qiymət:* ${item.price}\n\n` +
                    `🆔 *Məhsul ID:* #PART-${item.id}`;

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    setTimeout(() => {
      setStatus('done');
      setTimeout(() => {
        window.location.href = whatsappUrl;
        setTimeout(() => setStatus('idle'), 3000);
      }, 800);
    }, 2000);
  };

  return (
    <div className="premium-detail-card">
      <div className="detail-img-wrapper">
        <img 
          src={item.img} 
          alt={item.title} 
          loading="lazy" 
          decoding="async" 
        />
        <div className="price-badge">{item.price}</div>
      </div>
      
      <div className="detail-content">
        <h3>{item.title}</h3>
        <p>{item.desc}</p>
        
        <button 
          className={`detail-order-btn ${status}`}
          onClick={handleOrder}
          disabled={status !== 'idle'}
        >
          <AnimatePresence mode="wait">
            {status === 'idle' && (
              <motion.div key="idle" className="btn-flex" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <Settings size={18} className="gear-icon" />
                <span>SİFARİŞ ET</span>
              </motion.div>
            )}
            
            {status === 'fixing' && (
              <motion.div key="fixing" className="fixing-anim">
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                >
                  <Settings size={22} />
                </motion.div>
                <span>HAZIRLANIR...</span>
              </motion.div>
            )}

            {status === 'done' && (
              <motion.div key="done" className="btn-flex" initial={{ scale: 0 }} animate={{ scale: 1 }}>
                <CheckCircle size={18} />
                <span>TAMAMLANDI</span>
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </div>
    </div>
  );
};

const Details = () => {
  return (
    <section className="details-section">
      <div className="details-header">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          EHTİYYAT <span className="neon-text">HİSSƏLƏRİ</span>
        </motion.h2>
        <p>25-dən çox çeşidlə xidmətinizdəyik</p>
      </div>

      <div className="slider-container">
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          loop={false} // CRITICAL: Ram çökməsini kəsmək üçün loop ləğv edildi!
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 120, // Slider keçidini daha yumşaq edir
            modifier: 2,
            slideShadows: false, // Arxa kölgələri ləğv edərək GPU yükünü azaltdıq
          }}
          navigation={{
            nextEl: '.swiper-button-next-custom',
            prevEl: '.swiper-button-prev-custom',
          }}
          pagination={{ clickable: true }}
          modules={[EffectCoverflow, Navigation, Pagination]}
          className="details-swiper"
        >
          {detailsData.map((item) => (
            <SwiperSlide key={item.id}>
              <DetailCard item={item} />
            </SwiperSlide>
          ))}
          
          <div className="swiper-button-prev-custom"><ChevronLeft /></div>
          <div className="swiper-button-next-custom"><ChevronRight /></div>
        </Swiper>
      </div>
    </section>
  );
};

export default Details;