import React from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiInstagram, FiMapPin, FiSend } from 'react-icons/fi';
import './Contact.css';

const Contact = () => {
  const contactInfo = [
    { icon: <FiMail />, text: "csadiqov15@gmail.com", label: "Email", link: "mailto:csadiqov15@gmail.com" },
    { icon: <FiPhone />, text: "050 999 82 81", label: "Telefon", link: "tel:+994509998281" },
    { icon: <FiInstagram />, text: "@ceyhun.600", label: "Instagram", link: "https://www.instagram.com/ceyhun.600?igsh=YzVzanV5ZWlzcXV6&utm_source=qr" },
    { icon: <FiMapPin />, text: "Xaqani küç. 59a, Bakı", label: "Ünvan", link: "https://maps.google.com/?q=GBS+Azeri+Translation+and+Interpretation+Company" }
  ];

  return (
    <section id='contact' className="contact-section">
      <div className="contact-bg-glow"></div>
      
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="contact-container"
      >
        <div className="contact-grid">
          
          {/* SOL TƏRƏF: ƏLAQƏ MƏLUMATLARI */}
          <div className="contact-info-side">
          <p className="modern-contact-title">
  BİZİMLƏ ƏLAQƏ
</p>
            <p className="contact-desc"> Bizimlə birbaşa əlaqə saxlayın.</p>
            
            <div className="info-cards">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.link}
                  target="_blank"
                  rel="noreferrer"
                  className="info-item"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, background: "rgba(255,255,255,0.1)" }}
                >
                  <div className="info-icon">{info.icon}</div>
                  <div>
                    <span className="info-label">{info.label}</span>
                    <p className="info-text">{info.text}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>

          {/* SAĞ TƏRƏF: MODERN FORMA */}
       {/* SAĞ TƏRƏF: FORM YERİNƏ KREATIV XİDMƏT RADARI */}
<motion.div 
  className="contact-interactive-side"
  initial={{ opacity: 0, scale: 0.8 }}
  whileInView={{ opacity: 1, scale: 1 }}
>
  <div className="interactive-box">
    <div className="box-header">
      <h3>Nə ilə maraqlanırsınız?</h3>
      <p>Sizin üçün ən uyğun xidməti seçin, dərhal müzakirə edək.</p>
    </div>

    <div className="service-chips">
      {[
        "Velosiped İcarəsi", "PlayStation Rent", "Kuryer Xidməti", 
        "Velo/Moto Təmir", "Biznes Qurulması", "Kamp Turları",
         "Ehtiyat Hissələri"
      ].map((service, i) => (
        <motion.button
          key={i}
          whileHover={{ scale: 1.1, boxShadow: "0 0 20px #00c2e8" }}
          whileTap={{ scale: 0.9 }}
          className="service-chip"
        >
          {service}
        </motion.button>
      ))}
    </div>

    <div className="live-status-card">
      <div className="status-dot"></div>
      <span>Hazırda Aktivik - Sifariş üçün zəng edin</span>
    </div>

 <a 
  href="https://wa.me/994509998281" 
  target="_blank" 
  rel="noreferrer" 
  className="btn-whatsapp-simple"
>
  <span>WhatsApp ilə əlaqə</span>
</a>
 
  </div>
</motion.div>

        </div>
      </motion.div>
    </section>
  );
};

export default Contact;