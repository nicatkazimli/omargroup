import React from 'react';
import { Sparkles, Gift, Clock, CheckCircle, MessageCircle, ShieldCheck } from 'lucide-react';
import './WoltSigning.css';

const WoltSigning = () => {
  const sendWhatsApp = () => {
    const phoneNumber = "994509998281";
    const message = `*WOLT QEYDİYYAT SORĞUSU* 🚀\n\nSalam, mən Wolt-da qeydiyyatdan keçmək istəyirəm. Zəhmət olmasa bu barədə məlumat verərdiniz.`;
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section className="wolt-full-page">
      <div className="wolt-main-grid">
        
        {/* SOL: BÖYÜK VİDEO SAHƏSİ */}
        <div className="wolt-hero-video">
          <div className="video-wrapper-premium">
            <video 
              src="/wolt.mp4" 
              className="wolt-video-player" 
              autoPlay muted loop playsInline controls
            />
            <div className="video-corner-badge">
               <ShieldCheck size={18} />
               <span>Zəmanətli Qeydiyyat</span>
            </div>
          </div>
        </div>

        {/* SAĞ: MƏTN VƏ DETALLAR */}
        <div className="wolt-content-side">
          <div className="wolt-badge-row">
            <div className="wolt-partner-tag">
               <Sparkles size={14} /> <span>RƏSMİ TƏRƏFDAŞLIQ</span>
            </div>
          </div>

          <h1 className="wolt-hero-title">
            Wolt Kuryer <span className="gradient-text">Xidmətinə Qeydiyyat</span>
          </h1>

          <div className="wolt-official-text">
            <p>
              Salam, mən Ceyhun. Bu gün sizə Wolt platformasında uğurlu qeydiyyatdan keçməyin 
              yollarını təqdim edirəm. <strong>Omar Group</strong> olaraq komandamız, qeydiyyat prosesindən 
              başlamış vəsaitlərin təhlükəsiz idarə olunmasına qədər hər bir mərhələdə sizə 
              yaxından dəstək göstərir.
            </p>
            <p>
              Hər hansı bir sualınız yaranarsa, 7/24 fəaliyyət göstərən əlaqə nömrələrimiz 
              vasitəsilə bizə müraciət edə bilərsiniz. Ehtiyacınız olan hər mövzuda 
              sizə tam şəffaflıqla məlumat verməyə hazırıq.
            </p>
          </div>

          {/* KREATİV ENDİRİM BÖLMƏSİ */}
          <div className="wolt-offer-card">
            <div className="offer-inner">
              <div className="price-details">
                <span className="price-label">Xidmət haqqı</span>
                <div className="price-numbers">
                   <span className="price-old">50 AZN</span>
                   <span className="price-new">20 AZN</span>
                </div>
              </div>
              <div className="offer-divider"></div>
              <div className="offer-promo">
                <Gift className="promo-icon" />
                <div className="promo-text">
                  <strong>Xüsusi Kampaniya</strong>
                  <span>Yalnız məhdud zaman üçün!</span>
                </div>
              </div>
            </div>
          </div>

          {/* İKONLAR VƏ DÜYMƏ YAN-YANA */}
          <div className="wolt-footer-action">
            <div className="features-side">
               <div className="mini-feat">
                 <Clock size={16} /> <span>7/24 Texniki dəstək xətti</span>
               </div>
               <div className="mini-feat">
                 <CheckCircle size={16} /> <span>Sürətli vəsait idarəsi</span>
               </div>
            </div>
            
            <button className="wolt-cta-btn" onClick={sendWhatsApp}>
               <MessageCircle size={20} />
               <span>Müraciət Et</span>
            </button>
          </div>

          <p className="footer-note">
            Daha ətraflı məlumat üçün düyməyə toxunmağınız kifayətdir. Xoş günlər!
          </p>
        </div>
      </div>
    </section>
  );
};

export default WoltSigning;