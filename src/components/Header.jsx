import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = !isMenuOpen ? 'hidden' : 'auto';
  };

  // Real və stabil 3D linklər
const navLinks = [
  { 
    id: "e-bikes", 
    name: "Elektron Velosipedlər", 
    icon: "https://img.icons8.com/?size=100&id=huTtKs1QDcVs&format=png&color=000000" // Enerji/Hərəkət ikonuna uyğun
  },
  { 
    id: "classic-bikes", 
    name: "Sadə Velosipedlər", 
    icon: "https://img.icons8.com/?size=100&id=1DDLWcrCVxtp&format=png&color=000000" 
  },
  { 
    id: "wolt", 
    name: "Wolt Qeydiyyat", 
    icon: "https://img.icons8.com/?size=100&id=n1vMT3Sf4T2c&format=png&color=000000" 
  },
  { 
    id: "training", 
    name: "Təlim Proqramı", 
    icon: "https://img.icons8.com/?size=100&id=b3pmakv2kPti&format=png&color=000000" 
  },
  { 
    id: "details", 
    name: "Ehtiyyat Hissələri", 
    icon: "https://img.icons8.com/?size=100&id=26293&format=png&color=000000" 
  },
  { 
    id: "services", 
    name: "Texniki Servis", 
    icon: "https://img.icons8.com/?size=100&id=91Eby8fZMlnP&format=png&color=000000" 
  },
  { 
    id: "contact", 
    name: "Bizimlə Əlaqə", 
    icon: "https://img.icons8.com/?size=100&id=pHLee504uOZJ&format=png&color=000000" 
  },
  { 
    id: "about", 
    name: "Haqqımızda", 
    icon: "https://img.icons8.com/?size=100&id=ndJssbHAnr7w&format=png&color=000000" 
  },
];

  return (
    <section id="home" className="hero">
      <div className="hero-container">
        
        <div className="hero-top">
          <div className="omar-logo">
            <div className="logo-icon">O</div>
            <span>OMAR GROUP</span>
          </div>
          
          <div className={`menu-toggle ${isMenuOpen ? "active" : ""}`} onClick={toggleMenu}>
            <div className="hamburger"></div>
          </div>
        </div>

        <div className="hero-content">
          <p className="role slide-left">Peşəkar və Operativ Rent Sektoru</p>
          <h1 className="main-title">
            <span className="char slide-up">OMAR</span> <br /> 
            <span className="char slide-right">GROUP</span>
          </h1>
          <p className="hero-description fade-in">
            Sizin üçün ən sürətli, keyfiyyətli və müasir velosipedləri təqdim edirik.
          </p>

          <div className="hero-stats fade-up">
            <div className="stat-item">
              <span className="stat-value">100%</span>
              <span className="stat-label">Keyfiyyət</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">24/7</span>
              <span className="stat-label">Dəstək</span>
            </div>
          </div>
        </div>

        <div className={`hero-nav-wrapper ${isMenuOpen ? "nav-open" : ""}`}>
          <div className="hero-nav-grid">
            {navLinks.map((link) => (
              <a key={link.id} href={`#${link.id}`} className="nav-card" onClick={toggleMenu}>
                <div className="nav-card-icon">
                  <img src={link.icon} alt={link.name} onError={(e) => e.target.src = "https://img.icons8.com/fluency/100/star.png"} />
                </div>
                <span className="nav-card-text">{link.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;